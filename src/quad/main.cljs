(ns quad.main
  (:require [quad.tree :as qt]
            [quad.input :as i]
            [quad.components :refer [app]]
            [quad.canvas :as c]
            [reagent.core :as r]
            [reagent.dom :as rd]
            [taoensso.tufte :as tufte :refer (defnp p profiled profile)]
            ))


(tufte/add-basic-println-handler! {})
(declare render)

(enable-console-print!)

(defonce state-atom (atom nil))
(when (nil? @state-atom)
  (reset! state-atom {:cells              []
                      :width              1024
                      :height             1024
                      :resizable-rect-pos [0 0]
                      :tree               nil}))

(def initial-tree (qt/make-tree {:capacity 4
                                 :name     "start"
                                 :bounds   {:x      (/ (:width @state-atom) 2)
                                            :y      (/ (:height @state-atom) 2)
                                            :width  (/ (:width @state-atom) 2)
                                            :height (/ (:height @state-atom) 2)}}))

(defn handle-event!
  [name data]
  (let [{:keys [width height]} @state-atom]
    (condp = name
      :print-tree (cljs.pprint/pprint (:tree @state-atom))
      :random-cells (->>
                      (qt/random-cells data width height)
                      (qt/insert-cells initial-tree)
                      (swap! state-atom assoc :tree)
                      render)
      :rect-drag (-> (swap! state-atom assoc :resizable-rect-pos data)
                     render)
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
                      render)))))

(defn render
  [{:keys [cells tree] :as state}]
  (doseq [{:keys [x y]} cells]
    (c/fill-rect x y 3 3 "pink"))

  (c/stroke-style "yellow")
  (doseq [{:keys [x y width height]} (qt/tree->bounds tree)]
    (c/rect (- x width) (- y height) (* 2 width) (* 2 height) {:batch? true}))
  (c/stroke)

  )

(defn dispatch-worker
  [data trigger-event]
  (let [worker (js/Worker. "/js/worker.js")]
    (.. worker (addEventListener "message" (fn [e]
                                             (let [{:keys [name data]} (js->clj (aget e "data") :keywordize-keys true)]
                                               (trigger-event (keyword name) data)
                                               ))))
    (.. worker (postMessage (clj->js data)))))

(defn init!
  []
  (let [{:keys [width height]} @state-atom]

    (c/create-canvas width height)
    (c/resize-canvas)

    (dispatch-worker {:name :batch-random-cells :data {:n      1000
                                                       :height height
                                                       :width  width
                                                       :tree   initial-tree}} handle-event!))


  (i/mouse-click (c/canvas) (fn [e] (handle-event! :mouse-click e)))
  (i/mouse-down-move (c/canvas) (fn [e] (handle-event! :mouse-down e)))

  (render @state-atom)
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

  (qt/insert-cells initial-tree (qt/make-cells 100))
  (profile
    {}
    (doall
      (dotimes [_ 15]
        (p (qt/insert-cells initial-tree (qt/make-cells 1000000))))))

  (println (qt/in-tree? (:tree @state-atom) {:x 901, :y 95}))
  )
