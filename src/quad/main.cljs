(ns quad.main
  (:require [quad.tree :as qt]
            [quad.input :as i]
            [quad.components :as comp]
            [quad.canvas :as c]
            [quad.util :as u]
            [reagent.core :as r]
            [reagent.dom :as rd]

            [shodan.console :as console :include-macros true]
    ;[shodan.inspection :refer [inspect]]

            [taoensso.tufte :as tufte :refer (defnp p profiled profile)]
            ))


(tufte/add-basic-println-handler!
  {:format-pstats-opts {:columns [:n-calls :p50 :mean :clock :total]}})

(declare render render-rect)

;(enable-console-print!)

(defonce state-atom (atom nil))
(when (nil? @state-atom)
  (reset! state-atom {:cells             []
                      :width             1024               ;; TODO hacked ugly inside tree.clj
                      :height            1024
                      :is-drawing-points false
                      ;; TODO
                      :target-bounds     {:x      300
                                          :y      200
                                          :width  200
                                          :height 200}
                      :tree              nil}))

(def initial-tree (qt/make-tree {:capacity 4
                                 :name     "start"
                                 :bounds   {:x      (/ (:width @state-atom) 2)
                                            :y      (/ (:height @state-atom) 2)
                                            :width  (/ (:width @state-atom) 2)
                                            :height (/ (:height @state-atom) 2)}}))

(defn raf-render
  [state]
  (js/requestAnimationFrame (fn [timestamp] (render state))))

(defn raf-render-rect
  [state]
  (js/requestAnimationFrame (fn [timestamp] (render-rect state))))

(defn handle-event!
  [name data]
  (let [{:keys [width height]} @state-atom]
    (condp = name
      :print-tree (cljs.pprint/pprint (:tree @state-atom))
      :random-cells (let [cells (-> (qt/random-cells data width height)
                                    ;qt/sort-cells-by-z-order
                                    )]

                      (console/time-start "insert-random-cells")
                      (->> cells
                           ;qt/sort-cells-by-z-order
                           (qt/insert-cells initial-tree)
                           (swap! state-atom assoc :tree)
                           (swap! state-atom assoc :cells cells)
                           )
                      (console/time-end "insert-random-cells")
                      (raf-render @state-atom))
      :rect-drag (-> (swap! state-atom assoc :resizable-rect-pos data)
                     raf-render-rect)
      :mouse-click (let [cell (c/mouse-xy data)]
                     (-> (swap! state-atom (fn [{:keys [cells tree] :as state}]
                                             (-> (assoc state :tree (qt/insert tree cell))
                                                 (assoc :cells (conj cells cell)))))
                         render))
      :mouse-down (let [{:keys [x y] :as cell} (c/mouse-xy data)
                        random-cells (into #{} (conj (for [_ (range 5)]
                                                       {:x (u/random (- x 20) (+ x 20))
                                                        :y (u/random (- y 20) (+ y 20))})
                                                     cell))]
                    (-> (swap! state-atom (fn [{:keys [cells tree] :as state}]
                                            (-> (assoc state :tree (qt/insert-cells tree random-cells))
                                                (assoc :cells (concat cells random-cells))
                                                (assoc :is-drawing-points true))))
                        render))
      :new-tree (let [new-tree (:tree data)
                      cells (:cells data)]
                  (-> (swap! state-atom assoc
                             :tree new-tree
                             :cells (concat (:cells @state-atom) cells))
                      render))
      :cells-in-rect (let [in-rect (:cells-in-rect data)]
                       (-> (swap! state-atom assoc :cells-in-rect in-rect)
                           render)))))

(defn render
  [{:keys [cells tree cells-in-rect] :as state}]
  (doseq [{:keys [x y]} cells]
    (c/fill-rect x y 3 3 "pink"))

  (doseq [{:keys [x y]} cells-in-rect]
    (c/fill-rect x y 3 3 "red"))

  (c/stroke-style "yellow")

  ;(cljs.pprint/pprint (qt/tree->bounds tree))

  (doseq [{:keys [x y width height] :as b} (qt/tree->bounds tree)]
    (c/rect (- x width) (- y width) (* 2 width) (* 2 width) {:batch? true}))
  (c/stroke))

(defn dispatch-worker
  [data trigger-event]
  (let [worker (js/Worker. "/js/worker.js")]
    (.. worker (addEventListener "message" (fn [e]
                                             (let [{:keys [name data]} (js->clj (aget e "data") :keywordize-keys true)]
                                               (trigger-event (keyword name) data)
                                               ))))
    (.. worker (postMessage (clj->js data)))))

(defn on-rect-move
  [{:keys [x y width height] :as bounds}]
  (-> (swap! state-atom assoc :target-bounds {:x      (+ x (/ width 2))
                                              :y      (+ y (/ height 2))
                                              :width  (/ width 2)
                                              :height (/ height 2)})
      raf-render-rect
      )
  ;(dispatch-worker {:name :query-rect
  ;                  :data {:tree    (:tree @state-atom)
  ;                         :bounds  {:x      (+ x (/ width 2))
  ;                                   :y      (+ y (/ height 2))
  ;                                   :width  (/ width 2)
  ;                                   :height (/ height 2)}
  ;                         :cb-name :cells-in-rect}} handle-event!)
  )

(defn on-rect-resize
  [bounds]
  (swap! state-atom assoc :target-bounds (dissoc bounds :event)))

(defn render-rect
  [{:keys [tree cells target-bounds]}]
  (let [cells-in-bounds (qt/query tree target-bounds)]
    (doseq [{:keys [x y]} cells]
      (c/fill-rect x y 3 3 "pink"))

    (doseq [{:keys [x y]} cells-in-bounds]
      (c/fill-rect x y 3 3 "red"))))

(defn mouse-down?
  [js-evt]
  (= 1 (aget js-evt "buttons")))

(defn mouse-handler-maker
  [rect-mouse-handler]
  (fn [js-evt]
    (let [id (keyword (aget js-evt "target" "id"))
          type (keyword (.-type js-evt))]
      (condp = id
        :overlay (when (and
                         (not (comp/is-resizing-rect?))
                         (not (comp/is-moving-rect?))
                         (= type :mousemove)
                         (mouse-down? js-evt))
                   (handle-event! :mouse-down js-evt))
        :movable-rect (rect-mouse-handler js-evt)
        :top (rect-mouse-handler js-evt)
        :left (rect-mouse-handler js-evt)
        :bottom (rect-mouse-handler js-evt)
        :right (rect-mouse-handler js-evt)
        :top-left (rect-mouse-handler js-evt)
        :top-right (rect-mouse-handler js-evt)
        :bottom-left (rect-mouse-handler js-evt)
        :bottom-right (rect-mouse-handler js-evt)

        ;; else
        nil

        )
      )))


(defn init!
  []
  (let [{:keys [width height]} @state-atom
        rect-thing (comp/rect-maker {:movable-area-width  width
                                     :movable-area-height height
                                     :on-move             on-rect-move
                                     :on-resize           on-rect-resize})
        mouse-handler (mouse-handler-maker (:mouse-handler rect-thing))]

    (c/create-canvas width height)
    (c/resize-canvas)

    ;(dispatch-worker {:name :batch-random-cells :data {:n      1000
    ;                                                   :height height
    ;                                                   :width  width
    ;                                                   :tree   initial-tree}} handle-event!)


    (handle-event! :random-cells 150)

    ;(let [b (qt/tree->bounds (:tree @state-atom))]
    ;  (cljs.pprint/pprint b)
    ;  (println "duplicates " (- (count b) (count (into #{} b)))))


    (cljs.pprint/pprint (:tree @state-atom))

    (comp/add-mouse-window-handlers! mouse-handler)
    ;; TOOOOODO
    ;(i/mouse-click (c/canvas) (fn [e] (handle-event! :mouse-click e)))
    ;(i/mouse-down-move (c/canvas) (fn [e] (handle-event! :mouse-down e)))

    (render @state-atom)

    (rd/render
      [:div {:style {:position "relative"}}
       [(:component rect-thing)]
       [comp/controls]
       ]
      (. js/document (getElementById "app")))

    (println "Total memory: " (Math/round (* (.-usedJSHeapSize js/performance.memory) 0.000001)) " mb")

    )
  )

(defn reload! [] (render @state-atom))

(defn profile-insert-cells
  [n]
  (println "Profile insert-cells , n = " n)
  (profile
    {}
    (dotimes [_ 20]
      (qt/insert-cells initial-tree (qt/make-cells n))))
  )

;(defn do-profile
;  []
;  (profile
;    {}
;    (dotimes [_ 10]
;      (qt/in-bounds? {:x 0 :y 0 :width 200 :height 200} {:x 2 :y 2})
;      (qt/insert initial-tree (ran))
;      ))
;  )

;(profile-insert-cells 250)


(comment

  (doseq [n [10
             100
             500
             1000
             1500
             5000
             7500
             10000]]
    (println "------")
    (profile-insert-cells n)
    (println "------")
    )

  (time (qt/random-cells 10000 1024 1024))

  (qt/insert-cells initial-tree (qt/make-cells 10))



  (println (qt/in-tree? (:tree @state-atom) {:x 901, :y 95}))
  )

