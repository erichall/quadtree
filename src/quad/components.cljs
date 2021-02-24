(ns quad.components
  (:require [reagent.core :as r]
            [quad.util :refer [listen client-x client-y]]
            [cljs.core.async :as async]
            [quad.resizable-rect :as rr]))

(defn show-rects
  ([{:keys [bounds cells nw ne se sw name]} id]
   (if (nil? bounds)
     nil
     (let [{:keys [x y width height]} bounds]
       (concat
         [[:g {:key (str x "," y "," width "," height "," id)}
           ;[:text {:x (- x 3)
           ;        :y (- y 3)
           ;        :style {:font "italic 5px sans-serif"}} (str x "," y ",\n" width "," height)]
           ;[:text {:x (- x 3)
           ;        :y (+ y 3)
           ;        :style {:font "italic 5px sans-serif"}} name]
           [:rect {:x      (- x width)
                   :y      (- y height)
                   :width  (* 2 width)
                   :height (* 2 height)
                   :style  {:opacity 0.8}
                   :stroke "gray"
                   :fill   "none"}]]]
         (mapv (fn [{:keys [x y]}]
                 [:g {:key (str x "-" y "-" width "-" height "-" id)}
                  ;[:text {:x (- x 3)
                  ;        :y (- y 3)
                  ;        :style {:font "italic 5px sans-serif"}} (str x "," y)]
                  [:circle {:cx    x
                            :cy    y
                            :r     3
                            :fill  "white"
                            :style {:opacity 0.4}}]]) cells)
         (show-rects nw 1)
         (show-rects ne 2)
         (show-rects se 3)
         (show-rects sw 4)))))
  ([tree] (show-rects tree 0)))

(defn render-bounds
  [bounds]
  (map-indexed (fn [i {:keys [x y width height]}]
                 [:g {:key (str x "," y "," width "," height "," i)}
                  [:rect {:x      (- x width)
                          :y      (- y height)
                          :width  (* 2 width)
                          :height (* 2 height)
                          :style  {:opacity 0.8}
                          :stroke "gray"
                          :fill   "none"}]]) bounds))

(defn render-cells
  [{:keys [cells width height]}]
  (map-indexed (fn [i {:keys [x y]}]
                 [:g {:key (str x "-" y "-" width "-" height "-" i)}
                  ;[:text {:x (- x 3)
                  ;        :y (- y 3)
                  ;        :style {:font "italic 5px sans-serif"}} (str x "," y)]
                  [:circle {:cx    x
                            :cy    y
                            :r     3
                            :fill  "white"
                            :style {:opacity 0.4}}]]) cells))

(defn show
  [{:keys [height width] :as state} bounds]
  [:div {:style {:position "absolute"}}
   [:div {:style {:position "relative"
                  :height   height
                  :width    width}}
    [:svg {:height   height
           :width    width
           :id       "svg-world"
           :viewport (str "0 0 " height " " width)
           :style    {:border   "1px dashed green"
                      :position "absolute"}}
     (render-bounds bounds)
     (render-cells state)]
    [:div {:style {:height   height
                   :width    width
                   :position "absolute"}
           :id    "svg-world-clicker"}]]])

(defn action-bar
  [{:keys [trigger-event]}]
  [:div {:style {:margin-top     20
                 :display        "flex"
                 :flex-direction "row"}}
   [:button {:on-click (fn []
                         (trigger-event :print-tree)
                         )} "Tree"]
   [:button {:on-click (fn [] (trigger-event :random-cells 10)) :style {:margin-left "5px"}} "10"]
   [:button {:on-click (fn [] (trigger-event :random-cells 100)) :style {:margin-left "5px"}} "100"]
   [:button {:on-click (fn [] (trigger-event :random-cells 1000)) :style {:margin-left "5px"}} "1000"]
   [:button {:on-click (fn [] (trigger-event :random-cells 10000)) :style {:margin-left "5px"}} "10000"]
   [:button {:on-click (fn [] (trigger-event :random-cells 100000)) :style {:margin-left "5px"}} "100000"]
   [:button {:on-click (fn [] (trigger-event :random-cells 1000000)) :style {:margin-left "5px"}} "1000000"]])

(defn rect-maker [props] (rr/rect-maker props))
(defn resizable-rect [props] (rr/component props))
(defn rect-mouse-handler [args] (rr/mouse-handler args))
(defn is-resizing-rect? [] (rr/is-resizing?))
(defn is-moving-rect? [] (rr/is-moving?))
(defn event-is-resize? [js-evt] (rr/is-resize? js-evt))
(defn event-is-move? [js-evt] (rr/is-move? js-evt "movable-rect")) ;TODO auch

(defn app
  [{:keys [tree height width] :as state} bounds trigger-event]
  [:div {:style {:display "flex" :flex-direction "column"}}
   [:div {:style {:position "relative"
                  :height   height
                  :width    width}}
    [show state bounds]
    [rr/rect-maker {:movable-area-width  width
                    :movable-area-height height
                    :on-move             (fn [{:keys [x y width height]}])
                    :on-resize           (fn [{:keys [x y width height]}])}]]
   [action-bar {:state state :trigger-event trigger-event}]])

(defn add-mouse-window-handlers!
  [handler]
  (let [chans (async/merge [(listen js/window "mousedown")
                            (listen js/window "mouseup")
                            (listen js/window "mousemove")])]
    (async/go-loop
      []
      (handler (async/<! chans))
      (recur))))

(defn mouse-handler
  [e]
  (let [target (aget e "target" "id")]
    (println target)))

(defn event-is-control?
  [js-evt]
  (let [id (keyword (aget js-evt "target" "id"))]
    (condp = id
      :controls true
      :control-wheel true
      :add-cells-btn true
      :clear-cells-btn true
      false)))

(defn is-control-wheel? [id] (= id :control-wheel))
(defn is-add-cells-btn? [id] (= id :add-cells-btn))
(defn is-clear-cells-btn? [id] (= id :clear-cells-btn))

(defn controls
  [{:keys [x y expanded? trigger-event cells-input-value cell-width cell-height cell-color cell-in-rect-color bounds-color]}]
  [:div {:id    "controls"
         :style {:position      "absolute"
                 :transition    "max-width 100ms linear, max-height 100ms linear"
                 :transform     (str "translate(" x "px," y "px)")
                 ;:width         (if expanded? "500px" "45px")
                 :width         "auto"
                 :height        "auto"
                 :max-height    (if expanded? "1000px" "45px")
                 :max-width     (if expanded? "1000px" "37px")
                 ;:height        (if expanded? "500px" "37px")
                 :overflow      "hidden"
                 :border-radius "5px"
                 :background    "rgba(0, 140, 255, 0.5)"}}
   [:span {:style {:opacity     (if expanded? 1 0)
                   :transition  "opacity 200ms"
                   :position    "absolute"
                   :cursor      "pointer"
                   :user-select "none"
                   :margin-left "5px"}
           :id    "control-wheel"}
    "♛"]
   [:span {:style {:opacity     (if expanded? 0 1)
                   :transition  "opacity 200ms"
                   :position    "absolute"
                   :cursor      "pointer"
                   :user-select "none"
                   :margin-left "5px"}
           :id    "control-wheel"}
    "♚"]
   [:div {:id    "controls"
          :style {:margin-left           "50px"
                  :display               "grid"
                  :grid-template-columns "repeat (2, 1fr)"
                  :grid-template-rows    "repeat (5, 1fr)"
                  :grid-column-gap       "10px"
                  :grid-row-gap          "10px"
                  :justify-items         "right"
                  :align-items           "center"
                  :padding               "10px"
                  :height                "100%"}}
    [:input {:type      "number"
             :value     cells-input-value
             :on-change (fn [e]
                          (trigger-event :add-cells-input-change
                                         (or (int (aget e "target" "value"))
                                             cells-input-value)))
             :id        "add-cells-input"
             :style     {:width        "80px"
                         :grid-area    "1 / 1 / 2 / 2"
                         :justify-self "left"
                         :margin-top   "5px"
                         :height       "75%"
                         :align-self   "baseline"}}]
    [:button {:id    "add-cells-btn"
              :style {:grid-area "1 / 2 / 2 / 3"}
              } "Add cells"]

    [:button {:id    "clear-cells-btn"
              :style {:grid-area "2 / 2 / 3 / 2"}} "Clear cells"]

    [:label {:style {:grid-area    "3 / 1 / 4 / 2"
                     :justify-self "left"}} "Grid color"]
    [:div {:style {:grid-area "3 / 2 / 4 / 3"
                   :height    "100%"
                   :width     "100%"}}
     [:input {:type      "color"
              :style     {:grid-area "3 / 2 / 4 / 3"
                          :height    "100%"
                          :width     "100%"}
              :value     bounds-color
              :on-change (fn [js-evt] (trigger-event :bounds-color (aget js-evt "target" "value")))}]]

    [:label {:style {:grid-area    "4 / 1 / 5 / 2"
                     :justify-self "left"}} "Cell color"]
    [:div {:style {:grid-area "4 / 2 / 5 / 3"
                   :height    "100%"
                   :width     "100%"}}
     [:input {:type      "color"
              :style     {:grid-area "4 / 2 / 5 / 3"
                          :height    "100%"
                          :width     "100%"}
              :value     cell-color
              :on-change (fn [js-evt] (trigger-event :cell-color (aget js-evt "target" "value")))}]]

    [:label {:style {:grid-area    "5 / 1 / 5 / 2"
                     :justify-self "left"}} "Rect color"]
    [:div {:style {:grid-area "5 / 2 / 5 / 3"
                   :height    "100%"
                   :width     "100%"}}
     [:input {:type      "color"
              :style     {:grid-area "5 / 2 / 5 / 3"
                          :height    "100%"
                          :width     "100%"}
              :value     cell-in-rect-color
              :on-change (fn [js-evt] (trigger-event :cell-in-rect-color
                                                     (aget js-evt "target" "value")))}]]


    [:label {:style {:grid-area    "6 / 1 / 6 / 2"
                     :justify-self "left"}} "Cell width"]
    [:input {:type      "number"
             :value     cell-width
             :on-change (fn [e]
                          (trigger-event :cell-width
                                         (or (int (aget e "target" "value"))
                                             cell-width)))
             :id        "cell-width"
             :style     {:width        "100px"
                         :grid-area    "6 / 2 / 6 / 2"
                         :justify-self "left"
                         :margin-top   "5px"
                         :height       "75%"
                         :align-self   "baseline"}}]

    [:label {:style {:grid-area    "7 / 1 / 7 / 2"
                     :justify-self "left"}} "Cell height"]
    [:input {:type      "number"
             :value     cell-height
             :on-change (fn [e]
                          (trigger-event :cell-height
                                         (or (int (aget e "target" "value"))
                                             cell-height)))
             :id        "cell-height"
             :style     {:width        "100px"
                         :grid-area    "7 / 2 / 7 / 2"
                         :justify-self "left"
                         :margin-top   "5px"
                         :height       "75%"
                         :align-self   "baseline"}}]]])

(defn performance
  []
  (let [local-state-atom (r/atom {:expanded? false})]
    (fn
      [{:keys [x y random-cells] :as t}]
      (let [row-height 30
            {:keys [expanded?]} @local-state-atom]
        [:div {:id    "performance-container"
               :style {:background "rgba(63, 199, 255, 0.45)"
                       :transform  (str "translate(" x "px," y "px)")
                       :top        "20px"
                       :right      "20px"
                       :position   "absolute"
                       :transition "height 50ms"
                       :padding    "15px"
                       :width      "auto"
                       :min-width  "250px"
                       :height     (if expanded?
                                     (min (+ 40 (* (count random-cells) (+ 10 row-height)))
                                          (+ 40 (* 10 (+ 10 row-height))))
                                     "50px")
                       :overflow-y "auto"}}
         [:div {:style    {:width           "100%"
                           :height          "20px"
                           :display         "flex"
                           :align-items     "center"
                           :justify-content "center"
                           :cursor          "pointer"
                           :margin-bottom   "20px"}
                :on-click (fn [] (swap! local-state-atom assoc :expanded? (not expanded?)))}
          [:span (if expanded? "▲" "▼")]]
         (when expanded?
           (map (fn [{:keys [category start n-cells render-end random-cells-end id]}]
                  [:div {:style {:height      row-height
                                 :margin-top  "10px"
                                 :white-space "nowrap"}
                         :key   id}
                   [:span {:style {:margin-right "15px"}}
                    (name category)]
                   [:span {:style {:margin-right "15px"}}
                    n-cells " Cells"]
                   [:span
                    (- random-cells-end start) " ms"]
                   ]
                  ) (reverse random-cells)))]
        )))
  )
