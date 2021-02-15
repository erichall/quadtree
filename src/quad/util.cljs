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