(ns binary.tree)

(defrecord Node [element left right])

(defn bt-insert
  [{:keys [element left right] :as tree} value]
  (cond
    (nil? tree) (Node. value nil nil)
    (< value element) (Node. element (bt-insert left value) right)
    (> value element) (Node. element left (bt-insert right value))
    :else tree))

(defn bt-contains?
  [{:keys [element left right] :as tree} value]
  (cond
    (nil? tree) false
    (< value element) (recur left value)
    (> value element) (recur right value)
    :else true))

(defn count-nodes
  [{:keys [left right] :as tree}]
  (if tree
    (+ 1 (count-nodes left) (count-nodes right))
    0))

(defn bt-height
  ([tree] (bt-height tree 0))
  ([{:keys [left right] :as tree} height]
   (if tree
     (Math/max (bt-height left (inc height)) (bt-height right (inc height)))
     height)))


(comment
  (clojure.pprint/pprint
    (-> (bt-insert nil 100)
        (bt-insert 50)
        (bt-insert 20)
        ))
  )

