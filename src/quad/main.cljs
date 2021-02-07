(ns quad.main
  (:require [quad.tree :as qt]
            [quad.input :as i]
            [quad.components :refer [app]]
            [reagent.core :as r]
            [reagent.dom :as rd]
            [taoensso.tufte :as tufte :refer (defnp p profiled profile)]
            ))

(tufte/add-basic-println-handler! {})
(declare render)

(defonce state-atom (atom nil))
(when (nil? @state-atom)
  (reset! state-atom {:cells              #{}
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
      ))
  )

(defn render
  [state]
  (rd/render
    [app state handle-event!]
    (. js/document (getElementById "app"))))

(defn init!
  []
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
    (dotimes [_ 30]
      (p (qt/insert-cells (:tree @state-atom) (qt/make-cells n)))))
  )

(comment

  (profile-insert-cells 1000000)

  (println @state-atom)
  (println (qt/in-tree? (:tree @state-atom) {:x 901, :y 95}))

  )
