(ns quad.util
  (:require [cljs.core.async :as async]))

(defn setup-listener!
  ([obj event-type callback args]
   (.addEventListener obj event-type callback args))
  ([obj event-type callback]
   (.addEventListener obj event-type callback))
  ([event-type callback]
   (.addEventListener js/window event-type callback)))

(defn listen
  ([element type prevent-default?]
   (let [out (async/chan)]
     (setup-listener! element type (fn [evt]
                                     (when prevent-default?
                                       (.preventDefault evt))
                                     (async/put! out evt)))
     out))
  ([element type]
   (listen element type false)))

(defn random
  [min max]
  (+ (* (Math/random) (- max min)) min))

(defn client-x [e] (.-clientX e))
(defn client-y [e] (.-clientY e))
(defn scroll-left [el] (.-scrollLeft el))
(defn scroll-top [el] (.-scrollTop el))
(defn client-left [el] (.-clientLeft el))
(defn client-top [el] (.-clientTop el))
(defn get-bb [el] (.getBoundingClientRect el))
(defn get-element-by-id [id] (js/document.getElementById id))
(defn mouse-down?
  [js-evt]
  (= 1 (aget js-evt "buttons")))


(defn clamp
  [v max-value min-value]
  (min (max v min-value) max-value))

(defn debounce
  [f interval]
  (let [id (atom nil)]
    (fn [& args]
      (js/clearTimeout @id)
      (let [new-id (js/setTimeout (fn []
                                    (apply f args)) interval)]
        (reset! id new-id)))))