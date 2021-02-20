(ns quad.resizable-rect
  (:require [reagent.core :as r]
            [quad.util :refer [client-x
                               client-y
                               get-bb
                               get-element-by-id
                               clamp]]))

(defonce state-atom (r/atom nil))
(def initial-state {:edge-width     10
                    :corner-width   15

                    :width          200
                    :height         200
                    :min-width      50
                    :min-height     50
                    :x              300
                    :y              200
                    :current-resize nil

                    :moving?        false
                    :resizing?      false

                    :down?          false
                    :initial-x      0
                    :initial-y      0

                    :resize-edges   ["right" "left" "top" "bottom" "top-left" "top-right" "bottom-left" "bottom-right"]

                    ;; save these offsets so we can ignore calling getBoundingClientRect all the time
                    :top-offset     nil
                    :left-offset    nil})
(when (nil? @state-atom)
  (reset! state-atom initial-state))

(defn left-bb!
  "Left offset, check if we have it first, otherwise call the dom and then save it."
  [el]
  (let [left (:left-offset @state-atom)]
    (if (some? left)
      left
      (let [bb (get-bb el)]
        (-> (swap! state-atom assoc :left-offset (.-left bb))
            :left-offset)))))

(defn top-bb!
  "Top offset, check if we have it first, otherwise call the dom and then save it."
  [el]
  (let [top (:top-offset @state-atom)]
    (if (some? top)
      top
      (let [bb (get-bb el)]
        (-> (swap! state-atom assoc :top-offset (.-top bb))
            :top-offset)))))


(defn in-bounds?
  [e]
  (let [bb-parent (get-bb (aget e "target" "parentElement"))
        bb-target (get-bb (aget e "target"))
        offset-x (- (.-left bb-target) (.-left bb-parent))
        offset-y (- (.-top bb-target) (.-top bb-parent))

        max-offset-x (- (.-right bb-parent) (.-right bb-target))
        max-offset-y (- (.-bottom bb-parent) (.-bottom bb-target))]
    (and
      (>= offset-x 0)
      (>= offset-y 0)
      (>= max-offset-x 0)
      (>= max-offset-y 0))))

(defn mouse-x
  "The relative x-coordinate. We take the bb from the overlay element otherwise coordinates is messed up."
  [e]
  (- (client-x e) (left-bb! (get-element-by-id "overlay"))))

(defn mouse-y
  "The relative y-coordinate."
  [e]
  (- (client-y e) (top-bb! (get-element-by-id "overlay"))))

(defn is-move? [e movable-rect-id] (= (aget e "target" "id") movable-rect-id))

(defn is-resize?
  ([e] (is-resize? e (:resize-edges @state-atom)))
  ([e edges]
   (let [id (aget e "target" "id")]
     (boolean (some (fn [edge] (= id edge)) edges)))))

(defn is-resizing? [] (:resizing? @state-atom))
(defn is-moving? [] (:moving? @state-atom))

(defn handle-event!
  ([name data] (handle-event! name data nil))
  ([name data callbacks]
   (condp = name
     ;; ---
     ;; mouse-events are recursive, just to keep all the logic in here...
     :on-mouse-leave nil                                    ;(swap! state-atom assoc :moving? false :resizing? false)
     :on-mouse-down (cond
                      (and (is-move? data "movable-rect") (not (:resizing? @state-atom)))
                      (handle-event! :on-move-start data callbacks)

                      (and (is-resize? data (:resize-edges @state-atom)) (not (:moving? @state-atom)))
                      (handle-event! :on-resize-start data callbacks)
                      :else nil)
     :on-mouse-move (cond
                      (:moving? @state-atom) (handle-event! :on-move data callbacks)
                      (:resizing? @state-atom) (handle-event! :on-resize data callbacks))
     :on-mouse-up (cond
                    (:moving? @state-atom) (handle-event! :on-move-end data callbacks)
                    (:resizing? @state-atom) (handle-event! :on-resize-end data callbacks))
     ;;  ----

     :on-move-start (let [{:keys [x y]} @state-atom]
                      (swap! state-atom assoc
                             :down? true
                             :moving? true
                             :initial-x (- (client-x data) x)
                             :initial-y (- (client-y data) y))
                      (when (:on-move-start callbacks)
                        ((:on-move-start callbacks)
                         (merge {:event data} (select-keys @state-atom [:x :y :height :width])))))
     :on-move (let [{:keys [down? initial-x initial-y]} @state-atom]
                (when down?
                  (swap! state-atom assoc
                         :x (- (client-x data) initial-x)
                         :y (- (client-y data) initial-y))
                  (when (:on-move callbacks)
                    ((:on-move callbacks)
                     (merge {:event data} (select-keys @state-atom [:x :y :height :width]))))))
     :on-move-end (when (:down? @state-atom)
                    (swap! state-atom assoc :down? false :moving? false)
                    (when (:on-move-end callbacks)
                      ((:on-move-end callbacks)
                       (merge {:event data} (select-keys @state-atom [:x :y :height :width])))))
     :on-resize-start (let [{:keys [height width]} @state-atom]
                        (swap! state-atom assoc
                               :resizing? true
                               :current-resize (keyword (aget data "target" "id"))
                               :start-x (mouse-x data)
                               :start-y (mouse-y data)
                               :start-width width
                               :start-height height)
                        (when (:on-resize-start callbacks)
                          ((:on-resize-start callbacks)
                           (merge {:event data} (select-keys @state-atom [:x :y :height :width]))))
                        )
     :on-resize (let [{:keys [current-resize start-y start-x start-width start-height max-width min-width max-height min-height]} @state-atom
                      mouse-x (mouse-x data)
                      mouse-y (mouse-y data)
                      dy (- mouse-y start-y)
                      dx (- mouse-x start-x)]
                  (condp = current-resize
                    :top (swap! state-atom assoc
                                :height (- start-height dy)
                                :y (+ start-y dy))
                    :left (swap! state-atom assoc
                                 :width (- start-width dx)
                                 :x (+ start-x dx))
                    :right (swap! state-atom assoc :width (+ start-width dx))
                    :bottom (swap! state-atom assoc :height (+ start-height dy))
                    :top-left (swap! state-atom assoc
                                     :width (- start-width dx)
                                     :height (- start-height dy)
                                     :x (+ start-x dx)
                                     :y (+ start-y dy))
                    :top-right (swap! state-atom assoc
                                      :height (- start-height dy)
                                      :width (+ start-width dx)
                                      :y (+ start-y dy))
                    :bottom-left (swap! state-atom assoc
                                        :width (- start-width dx)
                                        :height (+ start-height dy)
                                        :x (+ start-x dx))
                    :bottom-right (swap! state-atom assoc
                                         :height (+ start-height dy)
                                         :width (+ start-width dx))
                    (when (:on-resize callbacks)
                      ((:on-resize callbacks)
                       (merge {:event data} (select-keys @state-atom [:x :y :height :width]))))))
     :on-resize-end (do
                      (swap! state-atom assoc :resizing? false)
                      (when (:on-resize-end callbacks)
                        ((:on-resize-end callbacks)
                         (merge {:event data} (select-keys @state-atom [:x :y :height :width]))))))))

(defn resize-edge
  ([args] (resize-edge args nil))
  ([{:keys [w h x y cursor id border? color?]} extras]
   (let [style {:width            (str w "px")
                :height           (str h "px")
                :transform        (str "translate(" x "px, " y "px)")
                :background-color (when color? "rgba(119,119,119, 0.3)")
                ;:opacity          0.3
                ;:border           (when border? "1px solid white")
                :cursor           cursor
                :position         "absolute"}]
     [:div {:style (merge style extras)
            :id    (or id (str "edge-" x "-" y))}])))

(defn resizable-rect
  [{:keys [state]}]
  (let [{:keys [x y edge-width corner-width height width]} state]
    [:div {:style {:position "absolute"}}
     [resize-edge {:id :left :x x :y y :w edge-width :h height :color true :cursor "ew-resize"}
      {:border-left "2px solid white"}]
     [resize-edge {:id :right :w edge-width :h height :x (- (+ width x) edge-width) :y y :border true :color true :cursor "ew-resize"}
      {:border-right "2px solid white"}]
     [resize-edge {:id :top :w width :h edge-width :x x :y y :border true :color true :cursor "ns-resize"}
      {:border-top "2px solid white"}]
     ;; not sure, borders just dont go together here...?! :cursor "ns-resize"}
     [resize-edge {:id :bottom :w width :h edge-width :x x :border true :color true :y (- (+ height y) edge-width 2)}
      {:border-bottom "2px solid white"}]
     [resize-edge {:id :top-left :w corner-width :h corner-width :x x :y y :cursor "nwse-resize"}]
     [resize-edge {:id :top-right :w corner-width :h corner-width :x (- (+ width x) corner-width) :y y :cursor "nesw-resize"}]
     [resize-edge {:id :bottom-left :w corner-width :h corner-width :x x :y (- (+ height y) corner-width) :cursor "nesw-resize"}]
     [resize-edge {:id :bottom-right :w corner-width :h corner-width :x (- (+ width x) corner-width) :y (- (+ height y) corner-width) :cursor "nwse-resize"}]]))

;; TODO
;; Fix the little glitchy thingy when resizing from top, I think we need to clamp the cursor pos to the absolute edges.

(defn mouse-handler
  [{:keys [js-evt on-move]}]
  (let [type (keyword (.-type js-evt))]
    (condp = type
      :mousemove (handle-event! :on-mouse-move js-evt {:on-move on-move})
      :mouseup (handle-event! :on-mouse-up js-evt)
      :mousedown (handle-event! :on-mouse-down js-evt)
      ;; else
      nil)))

(defn component
  [{:keys [movable-area-height movable-area-width]}]

  (swap! state-atom assoc
         :max-height movable-area-height
         :max-width movable-area-width)

  (fn []
    (let [{:keys [x y width height max-height max-width]} @state-atom]
      [:div {:style {:position "relative"}}
       [:div {:style {:position "absolute"
                      :height   (str max-height "px")
                      :width    (str max-width "px")}
              :id    "overlay"}
        [:div {:style {:display          "inline-block"
                       :width            (str width "px")
                       :height           (str height "px")
                       :transform        (str "translate(" x "px, " y "px)")
                       :user-select      "none"
                       :background-color "rgb(119, 119, 119)"
                       :opacity          0.3
                       :cursor           "move"
                       :position         "absolute"}
               :id    "movable-rect"}]
        [resizable-rect {:state @state-atom}]]])))

(defn rect-maker
  [{:keys [movable-area-width movable-area-height on-move on-resize]}]

  (swap! state-atom assoc
         :max-height movable-area-height
         :max-width movable-area-width)

  {:mouse-handler (fn [js-evt]
                    (let [type (keyword (.-type js-evt))]
                      (condp = type
                        :on-mouse-move (handle-event! :on-mouse-move js-evt {:on-move on-move})
                        :on-mouse-up (handle-event! :on-mouse-up js-evt)
                        :on-mouse-down (handle-event! :on-mouse-down js-evt)
                        ;; else
                        nil)))
   :component     (fn []
                    (let [{:keys [x y width height max-height max-width]} @state-atom
                          trigger-event handle-event!]
                      [:div {:style {:position "relative"}}
                       [:div {:style         {:position "absolute"
                                              :height   (str max-height "px")
                                              :width    (str max-width "px")}
                              :id            "overlay"
                              :on-mouse-move (fn [e] (trigger-event :on-mouse-move e {:on-move on-move}))
                              :on-mouse-up   (fn [e] (trigger-event :on-mouse-up e))
                              :on-mouse-down (fn [e] (trigger-event :on-mouse-down e))}
                        [:div {:style {:display          "inline-block"
                                       :width            (str width "px")
                                       :height           (str height "px")
                                       :transform        (str "translate(" x "px, " y "px)")
                                       :user-select      "none"
                                       :background-color "rgb(119, 119, 119)"
                                       :opacity          0.3
                                       :cursor           "move"
                                       :position         "absolute"}
                               :id    "movable-rect"}]
                        [resizable-rect {:state @state-atom}]]]))})

