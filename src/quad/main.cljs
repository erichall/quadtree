(ns quad.main
  (:require [quad.tree :as qt]
            [quad.input :as i]
            [quad.components :refer [app rect-maker controls add-mouse-window-handlers!]]
            [quad.canvas :as c]
            [reagent.core :as r]
            [reagent.dom :as rd]

            [shodan.console :as console :include-macros true]
    ;[shodan.inspection :refer [inspect]]

            [taoensso.tufte :as tufte :refer (defnp p profiled profile)]
            ))


(tufte/add-basic-println-handler! {})
(declare render render-rect)

(enable-console-print!)

(defonce state-atom (atom nil))
(when (nil? @state-atom)
  (reset! state-atom {:cells         []
                      :width         1024
                      :height        1024
                      ;; TODO
                      :target-bounds {:x      300
                                      :y      200
                                      :width  200
                                      :height 200}
                      :tree          nil}))

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
                        r 100
                        random-cells (into #{} (conj (for [_ (range 10)
                                                           :let [rr (* r (Math/sqrt (Math/random 1)))
                                                                 theta (Math/sqrt (* 2 Math/PI))]]
                                                       {:x (+ x (* rr (Math/cos theta)))
                                                        :y (+ y (* rr (Math/sin theta)))})
                                                     cell))]
                    (-> (swap! state-atom (fn [{:keys [cells tree] :as state}]
                                            (-> (assoc state :tree (qt/insert-cells tree random-cells))
                                                (assoc :cells (concat cells random-cells)))))
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
  (doseq [{:keys [x y width height]} (qt/tree->bounds tree)]
    (c/rect (- x width) (- y height) (* 2 width) (* 2 height) {:batch? true}))
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
        :overlay (when (and (= type :mousemove) (mouse-down? js-evt))
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
        rect-thing (rect-maker {:movable-area-width  width
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


    (handle-event! :random-cells 100)

    (add-mouse-window-handlers! mouse-handler)
    ;; TOOOOODO
    ;(i/mouse-click (c/canvas) (fn [e] (handle-event! :mouse-click e)))
    ;(i/mouse-down-move (c/canvas) (fn [e] (handle-event! :mouse-down e)))

    (render @state-atom)

    (rd/render
      [:div {:style {:position "relative"}}
       [(:component rect-thing)]
       [controls]
       ]
      (. js/document (getElementById "app")))
    )
  )

(defn reload! [] (render @state-atom))

(defn profile-insert-cells
  [n]
  (println "Profile insert-cells , n = " n)
  (profile
    {}
    (doall
      (dotimes [_ 15]
        (p (qt/insert-cells initial-tree (qt/make-cells n))))))
  )

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
  (profile
    {}
    (doall
      (dotimes [_ 15]
        (p (qt/insert-cells initial-tree (qt/make-cells 1000000))))))

  (println (qt/in-tree? (:tree @state-atom) {:x 901, :y 95}))
  )
