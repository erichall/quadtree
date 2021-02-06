(ns quad.components
  (:require [reagent.core :as r]
            [quad.resizable-rect :refer [rect]]))

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

(defn show
  [height width tree]
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
     (show-rects tree)]
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


(defn app
  [{:keys [tree height width] :as state} trigger-event]
  [:div {:style {:display "flex" :flex-direction "column"}}
   [:div {:style {:position "relative"
                  :height   height
                  :width    width}}
    [show height width tree]
    [rect {:movable-area-width width :movable-area-height height}]]
   [action-bar {:state state :trigger-event trigger-event}]]
  )