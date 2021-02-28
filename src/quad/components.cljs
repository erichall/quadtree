(ns quad.components
  (:require [reagent.core :as r]
            [quad.util :refer [listen client-x client-y]]
            [cljs.core.async :as async]
            [quad.resizable-rect :as rr]))

(defn rect-maker [props] (rr/rect-maker props))
(defn resizable-rect [props] (rr/component props))
(defn rect-mouse-handler [args] (rr/mouse-handler args))
(defn is-resizing-rect? [] (rr/is-resizing?))
(defn is-moving-rect? [] (rr/is-moving?))
(defn event-is-resize? [js-evt] (rr/is-resize? js-evt))
(defn event-is-move? [js-evt] (rr/is-move? js-evt "movable-rect")) ;TODO auch

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
  [{:keys [x y expanded? trigger-event
           cells-input-value cell-width cell-height
           cell-color cell-in-rect-color bounds-color
           color-visited?]}]
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
                         :align-self   "baseline"}}]

    [:label {:style {:grid-area    "8 / 1 / 8 / 2"
                     :justify-self "left"}} "Color visited"]
    [:div {:style {:grid-area "8 / 2 / 8 / 2"}}
     [:div {:class "onoffswitch"}
      [:input {:type      "checkbox"
               :name      "onoffswitch"
               :class     "onoffswitch-checkbox"
               :id        "myonoffswitch"
               :on-change (fn [js-evt] (trigger-event :color-visited-changed (not color-visited?)))
               :tab-index 0
               :checked   color-visited?}]
      [:label {:class "onoffswitch-label"
               :for   "myonoffswitch"}
       [:span {:class "onoffswitch-inner"}]
       [:span {:class "onoffswitch-switch"}]
       ]]]
    ]
   ])

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
                   ]) (reverse random-cells)))]))))

(defn tooltip
  [{:keys [x y should-show?] :as s}]
  (when should-show?
    [:div {:style {:background "rgba(222, 199, 255, 0.45)"
                   :transform  (str "translate(" x "px," y "px)")
                   :position   "absolute"
                   :width      "100px"
                   :height     "50px"
                   }}])
  )
