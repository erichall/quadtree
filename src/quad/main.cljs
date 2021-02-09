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
      :mouse-action (let [e data
                          target (aget e "target")
                          rect (.getBoundingClientRect target)
                          x (- (.-clientX e) (.-left rect))
                          y (- (.-clientY e) (.-top rect))]
                      (let [{:keys [cells]} (swap! state-atom update :cells conj {:x x :y y})]
                        (->>
                          (qt/insert-cells (:tree @state-atom) cells)
                          (swap! state-atom assoc :tree)
                          render)))
      :new-tree (let [new-tree (:tree data)
                      cells (:cells data)]
                  (-> (swap! state-atom assoc
                             :tree new-tree
                             :cells (concat (:cells @state-atom) cells))
                      render)))))

(defn render
  [{:keys [tree] :as state}]
  (rd/render
    [app state (qt/tree->bounds tree) handle-event!]
    (. js/document (getElementById "app"))))

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

    (c/create-canvas 500 500)
    (c/resize-canvas)

    ;(c/background "white")
    ;
    ;(c/fill-style "red")
    ;(c/rect 30 30 200 200)
    ;
    ;
    ;(c/stroke-style nil)
    ;(c/line 20 20 200 20)
    ;
    ;(c/stroke-style "yellow")
    ;(c/circle 5 35 60)

    (doseq [i (range 0 999999)]
      (c/draw-pixel i i 255 255 255 1))
    (c/put-img-data)


    (dispatch-worker {:name :batch-random-cells :data {:n      200
                                                       :height height
                                                       :width  width
                                                       :tree   initial-tree}} handle-event!))

  (render @state-atom)
  (i/mouse-click (js/document.getElementById "svg-world-clicker") (fn [e] (handle-event! :mouse-action e)))
  (i/mouse-down-move (js/document.getElementById "svg-world-clicker") (fn [e] (handle-event! :mouse-action e)))
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
