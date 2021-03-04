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

(declare render-cells render-divs handle-event!)

;(enable-console-print!)

(defonce state-atom (r/atom nil))
(when (nil? @state-atom)
  (reset! state-atom {:cells              []
                      :width              1024
                      :height             1024
                      :cell-width         10
                      :cell-height        10
                      :inserting?         false
                      :cell-color         "#ff9ef1"
                      :cell-in-rect-color "#fc030f"
                      :bounds-color       "#fcba03"
                      :is-drawing-points  false
                      :performance        {:random-cells []
                                           :timers       []
                                           :x            1024
                                           :y            200
                                           :x-start      1024
                                           :y-start      200
                                           :moving?      false}
                      :target-bounds      (u/center-bounds {:x      300
                                                            :y      200
                                                            :width  200
                                                            :height 200})
                      :tree               nil
                      :controls           {:x                 0
                                           :y                 0
                                           :prev-x            0
                                           :prev-y            0
                                           :x-start           0
                                           :y-start           0
                                           :expanded?         false
                                           :moving?           false
                                           :color-visited?    false
                                           :cells-input-value 10}
                      :tooltip            {:x            0
                                           :y            0
                                           :should-show? false}
                      }))
(def initial-tree (qt/make-tree {:capacity 4
                                 :name     "start"
                                 :bounds   (u/center-bounds {:x      1
                                                             :y      1
                                                             :width  (dec (:width @state-atom))
                                                             :height (dec (:height @state-atom))})}))
(defn render-divs
  "Render the resizable rect and the control panel.
  this is separate from the canvas rendering functions, giiish it's a mes right"
  [{:keys [tooltip width height controls cell-width cell-height cell-color cell-in-rect-color bounds-color performance]}]

  (rd/render
    [:<>
     [comp/resizable-rect {:movable-area-width  width
                           :movable-area-height height}]
     [comp/controls (merge controls {:trigger-event      handle-event!
                                     :cell-color         cell-color
                                     :cell-width         cell-width
                                     :cell-height        cell-height
                                     :cell-in-rect-color cell-in-rect-color
                                     :bounds-color       bounds-color})]
     [comp/performance performance]

     [comp/tooltip tooltip]
     ]
    (. js/document (getElementById "app")))

  (swap! state-atom assoc-in [:tooltip :should-show?] false)
  )

(defn render-cells
  [{:keys [tree cells target-bounds cell-in-rect-color cell-color cell-height cell-width controls]}]

  (let [cells-in-bounds (qt/query tree target-bounds {:color-visited? (:color-visited? controls)})]

    (doseq [{:keys [x y]} cells]
      (c/fill-rect x y cell-width cell-height cell-color))

    (doseq [{:keys [x y data]} cells-in-bounds]
      (c/fill-rect x y cell-width cell-height (if (:visited? data)
                                                "#00ff00"
                                                cell-in-rect-color)))))


(defn render
  [{:keys [tree bounds-color performance] :as state}]

  (render-cells state)

  (c/stroke-style bounds-color)

  (doseq [{:keys [x y width height]} (qt/tree->bounds tree)]
    (c/rect (- x width) (- y width) (* 2 width) (* 2 height) {:batch? true}))
  (c/stroke)

  (let [{:keys [render-timers remaining-timers]} (reduce (fn [acc {:keys [end-on?] :as t}]
                                                           (if (= end-on? :render)
                                                             (update acc :render-timers conj t)
                                                             (update acc :remaining-timers conj t)
                                                             )) {:render-timers    []
                                                                 :remaining-timers []} (:timers performance))]
    (when-not (empty? render-timers)
      (let [render-end (js/Date.now)
            ended-timers (map (fn [timer] (assoc timer :render-end render-end)) render-timers)]
        (-> (swap! state-atom (fn [state]
                                (->
                                  (reduce (fn [state t]
                                            (update-in state [:performance (:category t)] conj t)) state ended-timers)
                                  (assoc-in [:performance :timers] remaining-timers))))
            render-divs
            )))))


(defn handle-event!
  [name data]
  (let [{:keys [width height]} @state-atom]
    (condp = name
      :print-tree (cljs.pprint/pprint (:tree @state-atom))
      :random-cells (let [cells (qt/random-cells data width height)]
                      (swap! state-atom update :cells concat cells)

                      (let [timer-id (keyword (u/random-id))]
                        (swap! state-atom update-in [:performance :timers] conj {:start    (js/Date.now)
                                                                                 :category :random-cells
                                                                                 :end-on?  :render
                                                                                 :id       timer-id
                                                                                 :n-cells  data})
                        (console/time-start "insert-random-cells")
                        (->> cells
                             qt/sort-cells-by-z-order
                             (qt/insert-cells (or (:tree @state-atom) initial-tree))
                             (swap! state-atom assoc :tree))
                        (console/time-end "insert-random-cells")

                        (swap! state-atom assoc :inserting? false)

                        (->> (map (fn [timer]
                                    (if (= (:id timer) timer-id)
                                      (assoc timer :random-cells-end (js/Date.now))
                                      timer)) (get-in @state-atom [:performance :timers]))
                             (swap! state-atom assoc-in [:performance :timers])))
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
                                                (assoc :is-drawing-points true)
                                                (assoc-in [:tooltip :should-show?] false))))
                        (u/raf-render render))
                    (render-divs @state-atom))
      :new-tree (let [new-tree (:tree data)
                      cells (:cells data)]
                  (-> (swap! state-atom assoc
                             :tree new-tree
                             :cells (concat (:cells @state-atom) cells))
                      (u/raf-render render)))
      :clear-cells (do
                     (swap! state-atom (fn [state]
                                         (-> (assoc state :tree (qt/clear-cells (:tree state)))
                                             (assoc :cells []))))
                     (c/clear-canvas)
                     (u/raf-render @state-atom render))
      :add-cells-input-change (-> (swap! state-atom assoc-in [:controls :cells-input-value] data)
                                  (u/raf-render render-divs))
      :cells-in-rect (let [in-rect (:cells-in-rect data)]
                       (-> (swap! state-atom assoc :cells-in-rect in-rect)
                           (u/raf-render render)))
      :bounds-color (-> (swap! state-atom assoc :bounds-color data) render-divs)
      :cell-color (-> (swap! state-atom assoc :cell-color data) render-divs)
      :cell-in-rect-color (-> (swap! state-atom assoc :cell-in-rect-color data) render-divs)
      :cell-width (-> (swap! state-atom assoc :cell-width data) render-divs)
      :cell-height (-> (swap! state-atom assoc :cell-height data) render-divs)
      :color-visited-changed (-> (swap! state-atom assoc-in [:controls :color-visited?] data)
                                 render-divs)
      )))

(defn on-rect-move
  [bounds]
  (-> (swap! state-atom assoc :target-bounds (u/center-bounds bounds))
      (u/raf-render render-cells))
  (render-divs @state-atom))

(defn on-rect-resize
  [bounds]
  (-> (swap! state-atom assoc :target-bounds (dissoc bounds :event))
      (u/raf-render render-cells))
  (render-divs @state-atom)
  )

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
    (cond


      (and (= type :mouseup)
           (comp/is-clear-cells-btn? id)
           no-move?)
      (do
        (handle-event! :clear-cells nil)
        (on-control-up! @state-atom))

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

(defn on-performance-move!
  [js-evt]
  (swap! state-atom (fn [state]
                      (->
                        (assoc-in state [:performance :x] (- (u/client-x js-evt) (get-in state [:performance :x-start])))
                        (assoc-in [:performance :y] (- (u/client-y js-evt) (get-in state [:performance :y-start])))))))

(defn on-performance-up!
  [state]
  (swap! state-atom assoc-in [:performance :moving?] false))

(defn on-performance-down!
  [js-evt]
  (swap! state-atom (fn [state]
                      (-> (assoc-in state [:performance :moving?] true)
                          (assoc-in [:performance :x-start] (- (u/client-x js-evt) (get-in state [:performance :x])))
                          (assoc-in [:performance :y-start] (- (u/client-y js-evt) (get-in state [:performance :y])))))))

(defn performance-container-mouse-handler
  [state js-evt id type]
  (cond
    (and (get-in state [:performance :moving?])
         (= type :mousemove))
    (-> (on-performance-move! js-evt)
        render-divs)

    (= type :mouseup)
    (on-performance-up! @state-atom)

    (= type :mousedown)
    (on-performance-down! js-evt)

    )
  )

(defn cells-on-coordinate
  [state x y]
  (let [cord {:x x :y y}
        cells (qt/tree->cells (:tree state))]
    (filter (fn [{:keys [x y]}] (qt/in-bounds? (u/center-bounds {:x      x
                                                                 :y      y
                                                                 :width  (:cell-width state)
                                                                 :height (:cell-height state)}) cord)) cells)
    )
  )

(defn mouse-handler
  [js-evt]
  (let [id (keyword (aget js-evt "target" "id"))
        type (keyword (.-type js-evt))]

    (cond
      (or (= id :performance-container)
          (get-in @state-atom [:performance :moving?]))
      (performance-container-mouse-handler @state-atom js-evt id type)

      (or (comp/event-is-control? js-evt)
          (get-in @state-atom [:controls :moving?]))
      (control-mouse-handler @state-atom js-evt id type)

      (and (= id :overlay)
           (= type :mouseup)
           (not (comp/is-resizing-rect?))
           (not (comp/is-moving-rect?))
           (not (:is-drawing-points @state-atom)))
      (let [x (u/client-x js-evt)
            y (u/client-y js-evt)]
        ;(println (cells-on-coordinate @state-atom x y))
        (-> (swap! state-atom (fn [state]
                                (-> state
                                    (assoc-in [:tooltip :x] x)
                                    (assoc-in [:tooltip :y] y)
                                    (assoc-in [:tooltip :should-show?] true)
                                    (assoc :is-drawing-points false))))
            render-divs))

      (and (= id :overlay)
           (= type :mouseup)
           (:is-drawing-points @state-atom))
      (swap! state-atom assoc :is-drawing-points false)

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
      (comp/rect-mouse-handler {:js-evt    js-evt
                                :on-move   on-rect-move
                                :on-resize on-rect-resize})

      :else nil)))


(defn init!
  []

  (comp/add-mouse-window-handlers! mouse-handler)

  (c/create-canvas (:width @state-atom) (:height @state-atom))
  (c/resize-canvas)

  (handle-event! :random-cells (get-in @state-atom [:controls :cells-input-value]))

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

  (println (qt/in-tree? (:tree @state-atom) {:x 901, :y 95})))

