(ns quad.input
  (:require [cljs.core.async :as async]))

(defn setup-listener!
  ([obj event-type callback args]
        (.addEventListener obj event-type callback args))
  ([obj event-type callback]
        (.addEventListener obj event-type callback))
  ([event-type callback]
               (.addEventListener js/window event-type callback)))

(defn- listen
  ([element type prevent-default?]
            (let [out (async/chan)]
              (setup-listener! element type (fn [evt]
                                              (when prevent-default?
                                                (.preventDefault evt))
                                              (async/put! out evt)))
              out))
  ([element type]
            (listen element type false)))

(defn- dispatcher
  [el type on-dispatch]
  (let [c (listen el type)]
    (async/go-loop [] (let [i (async/<! c)]
                        (on-dispatch i)
                        (recur)))))

(defn mouse-move [el on-move] (dispatcher el "mousemove" on-move))
(defn mouse-click [el on-move] (dispatcher el "click" on-move))
(defn mouse-down-move
  [el on-move]
  (dispatcher el "mousemove" (fn [evt]
                               (let [btn (aget evt "buttons")]
                                 (when (= 1 btn) ;; left btn
                                   (on-move evt))))))
