(ns quad.quad-worker
  (:require [cljs.core.async :as async]
            [quad.util :refer [setup-listener! listen]]
            [quad.tree :as qt]))

(defn post-msg
  [msg]
  (js/postMessage msg))

(defn init
  []
  (let [msg-chan (listen js/self "message")]
    (async/go-loop []
                   (let [js-event (async/<! msg-chan)
                         ;name (keyword (aget js-event "data" "name"))
                         {:keys [name data]} (js->clj (aget js-event "data") :keywordize-keys true)
                         {:keys [n height width tree]} data]
                     (println "Worker got name :: " (keyword name))
                     ;(println "Worker got data :: " n height width tree)
                     (condp = (keyword name)
                       :query-rect (let [in-rect (qt/query (:tree data) (:bounds data))]
                                     ;(println "IN __ " in-rect)
                                     (post-msg (clj->js {:name (:cb-name data)
                                                         :data {:cells-in-rect in-rect}}))
                                     )
                       :batch-random-cells (let [cell-batches (->> (qt/random-cells n width height)
                                                                   (partition 50))]
                                             (loop [tree tree
                                                    cell-batches cell-batches]
                                               (if (empty? cell-batches)
                                                 nil
                                                 (let [new-tree (qt/insert-cells tree (first cell-batches))]
                                                   (post-msg (clj->js {:name :new-tree
                                                                       :data {:tree  new-tree
                                                                              :cells (first cell-batches)}}))
                                                   (recur new-tree (rest cell-batches))))))
                       :incremental-random-cells (let [cells (qt/random-cells n width height)]
                                                   (loop [tree tree
                                                          cells cells]
                                                     (if (empty? cells)
                                                       nil
                                                       (let [new-tree (qt/insert tree (first cells))]
                                                         (post-msg (clj->js {:name :new-tree
                                                                             :data {:tree  new-tree
                                                                                    :cells [(first cells)]}}))
                                                         (recur new-tree (rest cells))))))
                       :random-cells (let [cells (qt/random-cells n width height)]
                                       (post-msg (clj->js {:name :new-tree
                                                           :data {:tree  (qt/insert-cells tree cells)
                                                                  :cells cells}}))))
                     (recur)
                     ))
    )
  )
