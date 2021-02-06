(ns quad.resizable-rect
  (:require [reagent.core :as r]))

(declare handle-event!)

(defonce state-atom (r/atom nil))
(def initial-state {:edge-width     10
                    :corner-width   10

                    :width          200
                    :height         200
                    :min-width      20
                    :min-height     20
                    :x              300
                    :y              200
                    :current-resize nil

                    :moving?        false
                    :resizing?      false

                    :down?          false
                    :initial-x      0
                    :initial-y      0

                    :resize-edges   ["right" "left" "top" "bottom" "top-left" "top-right" "bottom-left" "bottom-right"]
                    })
(when (nil? @state-atom)
  (reset! state-atom initial-state))

(defn client-x [e] (.-clientX e))
(defn client-y [e] (.-clientY e))
(defn page-y [e] (.-pageY e))
(defn page-x [e] (.-pageX e))
(defn get-offset-top [el] (.-offsetTop el))
(defn get-offset-left [el] (.-offsetTop el))
(defn scroll-left [el] (.-scrollLeft el))
(defn scroll-top [el] (.-scrollTop el))
(defn client-left [el] (.-clientLeft el))
(defn client-top [el] (.-clientTop el))
(defn get-bb [el] (.getBoundingClientRect el))

(defn get-element-by-id [id] (js/document.getElementById id))

(defn relative-rect-cords
  [e rect-bb]
  [(- (client-x e) (.-left rect-bb))
   (- (client-y e) (.-top rect-bb))])

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

(defn resize-proxy [e] (handle-event! :on-resize e))
(defn remove-resize-proxy [e] (handle-event! :on-resize-end {:event e
                                                             :fn    resize-proxy}))

(defn is-move?
  [e movable-rect-id]
  (= (.getAttribute (aget e "target") "id") movable-rect-id))

(defn is-resize?
  [e]
  (let [id (aget e "target" "id")]
    (boolean (some (fn [edge] (= id edge)) (:resize-edges @state-atom)))))

(defn handle-event!
  [name data]
  (condp = name
    ;; ---
    ;; mouse-events are recursive, just to keep all the logic in here...
    :on-mouse-down (cond
                     (and (is-move? data (:rect-id @state-atom)) (not (:resizing? @state-atom)))
                     (handle-event! :on-move-start data)

                     (and (is-resize? data) (not (:moving? @state-atom)))
                     (handle-event! :on-resize-start data)
                     :else nil)
    :on-mouse-move (when (:moving? @state-atom)
                     (handle-event! :on-move data))
    :on-mouse-up (when (:moving? @state-atom)
                   (handle-event! :on-move-end data))
    ;;  ----

    :on-move-start (let [{:keys [x y max-width max-height width height]} @state-atom
                         x (- (client-x data) x)
                         y (- (client-y data) y)]
                     (swap! state-atom assoc
                            :down? true
                            :moving? true
                            :initial-x (min (- max-width width) (max 0 x))
                            :initial-y (min (- max-height height) (max 0 y))))
    :on-move (let [{:keys [down? max-width width height max-height initial-x initial-y]} @state-atom]
               (when down?
                 (swap! state-atom assoc
                        :x (min (- max-width width) (max 0 (- (client-x data) initial-x)))
                        :y (min (- max-height height) (max 0 (- (client-y data) initial-y))))))
    :on-move-end (when (:down? @state-atom)
                   (swap! state-atom assoc :down? false :moving? false))

    :on-resize-start (let [target (aget data "target")
                           parent (aget target "parentElement")
                           bb (get-bb target)
                           id (aget data "target" "id")
                           {:keys [x y rect-id height]} @state-atom

                           start-height (js/parseFloat (.replace (.getPropertyValue (js/getComputedStyle (get-element-by-id rect-id) nil) "height") "px" ""))
                           parent-bb (get-bb (get-element-by-id "overlay"))
                           rect-bb (get-bb (get-element-by-id rect-id))
                           ]

                       (swap! state-atom assoc
                              :resizing? true
                              :current-resize (keyword id)
                              :start-x (page-x data)
                              :start-y (- (.-top rect-bb) (.-top parent-bb)) ;(- (page-y data) (.-top parent-bb))
                              :bb bb
                              :start-width (:width @state-atom)
                              :start-height height          ;start-height;(:height @state-atom) ;start-height
                              :rect-bb rect-bb
                              :parent-bb parent-bb
                              )
                       (.addEventListener js/document "mouseup" remove-resize-proxy)
                       (.addEventListener js/document "mousemove" resize-proxy))
    :on-resize (let [e data
                     {:keys [current-resize rect-bb start-y start-x parent-bb start-width start-height]} @state-atom]
                 (condp = current-resize
                   :top (let [p-top (.-top parent-bb)
                              h (- start-height (- (- (page-y e) p-top) start-y))
                              y (+ start-y (- (- (page-y e) p-top) start-y))]
                          ;; TODO something is fishy when draggin the height up, it does a small jump...
                          (swap! state-atom assoc
                                 :height h
                                 :y y))
                   :left nil
                   :right (swap! state-atom assoc :width (+ start-width (- (page-x e) start-x)))
                   :bottom (swap! state-atom assoc :height (+ start-height (- (page-y e) start-y)))
                   :top-left nil
                   :top-right nil
                   :bottom-left nil
                   :bottom-right nil))
    :on-resize-end (do
                     (swap! state-atom assoc :resizing? false)
                     (.removeEventListener js/document "mousemove" (:fn data)))
    )
  )

(cljs.pprint/pprint @state-atom)

(defn resize-edge
  [{:keys [w h x y cursor id]}]
  [:div {:style {:width            (str w "px")
                 :height           (str h "px")
                 :transform        (str "translate(" x "px, " y "px)")
                 :background-color "purple"
                 :cursor           cursor
                 :position         "absolute"}
         :id    (or id (str "edge-" x "-" y))}])

(defn resizable-rect
  [{:keys [state]}]
  (let [{:keys [x y edge-width corner-width height width]} state]
    [:div {:style {:position "absolute"}}
     [resize-edge {:id     :left
                   :x      x
                   :y      y
                   :w      edge-width
                   :h      height
                   :cursor "ew-resize"}]
     [resize-edge {:id     :right
                   :w      edge-width
                   :h      height
                   :x      (- (+ width x) edge-width)
                   :y      y
                   :cursor "ew-resize"}]
     [resize-edge {:id     :top
                   :w      width
                   :h      edge-width
                   :x      x
                   :y      y
                   :cursor "ns-resize"}]
     [resize-edge {:id     :bottom
                   :w      width
                   :h      edge-width
                   :x      x
                   :y      (- (+ height y) edge-width)
                   :cursor "ns-resize"}]
     [resize-edge {:id     :top-left
                   :w      corner-width
                   :h      corner-width
                   :x      x
                   :y      y
                   :cursor "nwse-resize"}]
     [resize-edge {:id     :top-right
                   :w      corner-width
                   :h      corner-width
                   :x      (- (+ width x) corner-width)
                   :y      y
                   :cursor "nesw-resize"}]
     [resize-edge {:id     :bottom-left
                   :w      corner-width
                   :h      corner-width
                   :x      x
                   :y      (- (+ height y) corner-width)
                   :cursor "nesw-resize"}]
     [resize-edge {:id     :bottom-right
                   :w      corner-width
                   :h      corner-width
                   :x      (- (+ width x) corner-width)
                   :y      (- (+ height y) corner-width)
                   :cursor "nwse-resize"}]]))

(defn rect
  [{:keys [movable-area-width movable-area-height]}]

  (swap! state-atom assoc
         :max-height movable-area-height
         :max-width movable-area-width
         :rect-id "rect"                                    ;; TODO make this nice....
         )

  (fn []
    (let [{:keys [x y width height max-height max-width rect-id]} @state-atom
          trigger-event handle-event!]
      [:div {:style {:position "relative"}}
       [:div {:style         {:position "absolute"
                              :height   (str max-height "px")
                              :width    (str max-width "px")}
              :id            "overlay"
              :on-mouse-move (fn [e] (trigger-event :on-mouse-move e))
              :on-mouse-up   (fn [e] (trigger-event :on-mouse-up e))
              :on-mouse-down (fn [e] (trigger-event :on-mouse-down e))}
        [:div {:id    rect-id
               :style {:display          "inline-block"
                       :width            (str width "px")
                       :height           (str height "px")
                       :transform        (str "translate(" x "px, " y "px)")
                       :user-select      "none"
                       :background-color "green"
                       :cursor           "pointer"
                       :position         "absolute"}}]
        [resizable-rect {:state @state-atom}]]])))

