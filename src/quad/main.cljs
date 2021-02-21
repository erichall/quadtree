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

            [taoensso.tufte :as tufte :refer (defnp p profiled profile)]))

(tufte/add-basic-println-handler!
  {:format-pstats-opts {:columns [:n-calls :p50 :mean :clock :total]}})

(declare render-cells render-divs)

;(enable-console-print!)

(defonce rect-component (atom nil))
(defonce state-atom (r/atom nil))
(when (nil? @state-atom)
  (reset! state-atom {:cells              []
                      :width              1024              ;; TODO hacked ugly inside tree.clj
                      :height             1024
                      :cell-width         3
                      :cell-height        3
                      :cell-color         "pink"
                      :cell-in-rect-color "red"
                      :bounds-color       "yellow"
                      :is-drawing-points  false
                      ;; TODO
                      :target-bounds      {:x      300
                                           :y      200
                                           :width  200
                                           :height 200}
                      :tree               nil
                      :controls           {:x                 0
                                           :y                 0
                                           :prev-x            0
                                           :prev-y            0
                                           :x-start           0
                                           :y-start           0
                                           :expanded?         true
                                           :moving?           false
                                           :cells-input-value 20
                                           }}))

(def initial-tree (qt/make-tree {:capacity 4
                                 :name     "start"
                                 :bounds   {:x      (/ (:width @state-atom) 2)
                                            :y      (/ (:height @state-atom) 2)
                                            :width  (/ (:width @state-atom) 2)
                                            :height (/ (:height @state-atom) 2)}}))
(defn render
  [{:keys [cells tree cells-in-rect cell-height cell-width cell-in-rect-color cell-color bounds-color]}]
  (doseq [{:keys [x y]} cells]
    (c/fill-rect x y cell-width cell-height cell-color))

  (doseq [{:keys [x y]} cells-in-rect]
    (c/fill-rect x y cell-width cell-height cell-in-rect-color))

  (c/stroke-style bounds-color)

  (doseq [{:keys [x y width height] :as b} (qt/tree->bounds tree)]
    (c/rect (- x width) (- y width) (* 2 width) (* 2 width) {:batch? true}))
  (c/stroke))

(defn render-cells
  [{:keys [tree cells target-bounds cell-in-rect-color cell-color]}]
  (let [cells-in-bounds (qt/query tree target-bounds)]
    (doseq [{:keys [x y]} cells]
      (c/fill-rect x y 3 3 cell-color))

    (doseq [{:keys [x y]} cells-in-bounds]
      (c/fill-rect x y 3 3 cell-in-rect-color))))

(defn handle-event!
  [name data]
  (let [{:keys [width height]} @state-atom]

    (println name)

    (condp = name
      :print-tree (cljs.pprint/pprint (:tree @state-atom))
      :random-cells (let [cells (qt/random-cells data width height)]
                      (console/time-start "insert-random-cells")
                      (->> cells
                           qt/sort-cells-by-z-order
                           (qt/insert-cells initial-tree)
                           (swap! state-atom assoc :tree)
                           (swap! state-atom assoc :cells cells))
                      (console/time-end "insert-random-cells")
                      (u/raf-render @state-atom render))
      :rect-drag (-> (swap! state-atom assoc :resizable-rect-pos data)
                     (u/raf-render render-cells))
      :mouse-click (let [cell (c/mouse-xy data)]
                     (-> (swap! state-atom (fn [{:keys [cells tree] :as state}]
                                             (-> (assoc state :tree (qt/insert tree cell))
                                                 (assoc :cells (conj cells cell)))))
                         (u/raf-render render)))
      :mouse-down (let [{:keys [x y] :as cell} (c/mouse-xy data)
                        random-cells (into #{} (conj (for [_ (range 5)]
                                                       {:x (u/random (- x 20) (+ x 20))
                                                        :y (u/random (- y 20) (+ y 20))})
                                                     cell))]
                    (-> (swap! state-atom (fn [{:keys [cells tree] :as state}]
                                            (-> (assoc state :tree (qt/insert-cells tree random-cells))
                                                (assoc :cells (concat cells random-cells))
                                                (assoc :is-drawing-points true))))
                        (u/raf-render render)))
      :new-tree (let [new-tree (:tree data)
                      cells (:cells data)]
                  (-> (swap! state-atom assoc
                             :tree new-tree
                             :cells (concat (:cells @state-atom) cells))
                      (u/raf-render render)))
      :add-cells-input-change (-> (swap! state-atom assoc-in [:controls :cells-input-value] data)
                                  (u/raf-render render-divs))
      :cells-in-rect (let [in-rect (:cells-in-rect data)]
                       (-> (swap! state-atom assoc :cells-in-rect in-rect)
                           (u/raf-render render))))))

(defn render-divs
  "Render the resizable rect and the control panel.
  this is separate from the canvas rendering functions, giiish it's a mes right"
  [{:keys [width height controls]}]
  (rd/render
    [:<>
     [comp/resizable-rect {:movable-area-width  width
                           :movable-area-height height}]
     [comp/controls (merge controls {:trigger-event handle-event!})]]
    (. js/document (getElementById "app"))))


(defn on-rect-move
  [{:keys [x y width height] :as bounds}]
  (-> (swap! state-atom assoc :target-bounds {:x      (+ x (/ width 2))
                                              :y      (+ y (/ height 2))
                                              :width  (/ width 2)
                                              :height (/ height 2)})
      (u/raf-render render-cells)))

(defn on-rect-resize
  [bounds]
  (swap! state-atom assoc :target-bounds (dissoc bounds :event)))

(defn on-control-move!
  [js-evt]
  (swap! state-atom (fn [state]
                      (->
                        (assoc-in state [:controls :x] (- (u/client-x js-evt) (get-in state [:controls :x-start])))
                        (assoc-in [:controls :y] (- (u/client-y js-evt) (get-in state [:controls :y-start])))))))

(defn on-control-down!
  [js-evt]
  (swap! state-atom (fn [state]
                      (-> (assoc-in state [:controls :moving?] true)
                          (assoc-in [:controls :prev-x] (get-in state [:controls :x]))
                          (assoc-in [:controls :prev-y] (get-in state [:controls :y]))
                          (assoc-in [:controls :x-start] (- (u/client-x js-evt) (get-in state [:controls :x])))
                          (assoc-in [:controls :y-start] (- (u/client-y js-evt) (get-in state [:controls :y])))))))

(defn on-control-up!
  [state]
  (swap! state-atom assoc-in [:controls :moving?] false))

(defn control-mouse-handler
  [state js-evt id type]
  (let [moving? (get-in state [:controls :moving?])
        no-move? (and
                   (= (get-in state [:controls :prev-x]) (get-in state [:controls :x]))
                   (= (get-in state [:controls :prev-y]) (get-in state [:controls :y])))]
    (println id)
    (cond
      (and (= type :mouseup)
           (comp/is-control-wheel? id)
           no-move?)
      (-> (swap! state-atom assoc-in [:controls :expanded?] (not (get-in state [:controls :expanded?])))
          on-control-up!
          render-divs)

      (and (= type :mouseup)
           (comp/is-add-cells-btn? id)
           no-move?)
      (do
        (handle-event! :random-cells (get-in state [:controls :cells-input-value]))
        (on-control-up! @state-atom))

      (and moving? (= type :mousemove))
      (-> (on-control-move! js-evt)
          render-divs)

      (= type :mouseup)
      (on-control-up! @state-atom)

      (= type :mousedown)
      (on-control-down! js-evt))))

(defn mouse-handler
  [js-evt]
  (let [id (keyword (aget js-evt "target" "id"))
        type (keyword (.-type js-evt))]
    (cond
      (or (comp/event-is-control? js-evt)
          (get-in @state-atom [:controls :moving?]))
      (control-mouse-handler @state-atom js-evt id type)

      (and (= id :overlay)
           (not (comp/is-resizing-rect?))
           (not (comp/is-moving-rect?))

           (= type :mousemove)
           (u/mouse-down? js-evt))
      (handle-event! :mouse-down js-evt)

      (or (comp/event-is-resize? js-evt)
          (comp/event-is-move? js-evt)
          (comp/is-moving-rect?)
          (comp/is-resizing-rect?))
      (comp/rect-mouse-handler {:js-evt js-evt :on-move on-rect-move})

      :else nil)))


(defn init!
  []

  (comp/add-mouse-window-handlers! mouse-handler)

  (c/create-canvas (:width @state-atom) (:height @state-atom))
  (c/resize-canvas)

  (handle-event! :random-cells 1000)

  (render @state-atom)
  (render-divs @state-atom)

  (println "Total memory: " (Math/round (* (.-usedJSHeapSize js/performance.memory) 0.000001)) " mb")
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

