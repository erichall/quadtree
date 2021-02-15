(ns quad.tree
  (:require [clojure.test :refer [is deftest]]))

(declare insert)

(defrecord Cell [x y data])
(defrecord Quadtree [capacity bounds cells nw ne sw se name depth])

(defonce bounds-cache (atom nil))
(when (nil? @bounds-cache)
  (reset! bounds-cache {}))

(defn num-map-vals?
  [m]
  (->> (vals m)
       (every? number?)))

(defn condj
  [v val]
  (cond-> v val (conj val)))

(defn make-tree
  [{:keys [capacity bounds cells nw ne sw se name depth]
    :or   {cells []
           depth 0
           name  ""
           nw    nil
           ne    nil
           sw    nil
           se    nil}}]
  (Quadtree. capacity bounds cells nw ne sw se name depth))

(defn in-bounds?
  "Check if a given cell is within a boundary."
  {:test (fn []
           (is (= (in-bounds? {:x      495
                               :y      190
                               :height 200
                               :width  200}
                              {:x 665
                               :y 294})
                  true)))}
  [{:keys [x y width height] :as bb} {cx :x cy :y :as p}]
  (if (nil? bb)
    false
    (and (>= cx (- x width))
         (<= cx (+ x width))
         (>= cy (- y height))
         (<= cy (+ y height)))))

(defn intersects?
  {:test (fn []
           (is (= (intersects? {:x 495 :y 190 :height 200 :width 200}
                               {:x 768 :y 256 :height 256 :width 256})
                  true))
           (is (= (intersects? {:x 495 :y 190 :height 200 :width 200}
                               {:x 256 :y 768 :height 256 :width 256})
                  false))
           (is (= (intersects? {:x 298, :y 374, :height 200, :width 200}
                               {:x 512, :y 512, :width 512, :height 512})
                  true))
           (is (= (intersects? {:x 295 :y 461 :height 200 :width 200}
                               {:x 512 :y 512 :width 512 :height 512})
                  true))
           )}
  [a b]
  (not (or
         (> (- (:x a) (:width a)) (+ (:x b) (:width b)))
         (< (+ (:x a) (:width a)) (- (:x b) (:width b)))
         (> (- (:y a) (:height a)) (+ (:y b) (:height b)))
         (< (+ (:y a) (:height a)) (- (:y b) (:height b))))))

(defn split
  "Split a boundary into four"
  [{:keys [x y width height] :as b}]
  {:pre [(num-map-vals? b)]}
  (let [w (/ width 2)
        h (/ height 2)]
    {:b-nw {:x (- x w) :y (- y h) :height h :width w}
     :b-ne {:x (+ x w) :y (- y h) :height h :width w}
     :b-se {:x (+ x w) :y (+ y h) :height h :width w}
     :b-sw {:x (- x w) :y (+ y h) :height h :width w}}))

(defn two-pow
  "computes 2 ^ n"
  {:test (fn []
           (is (= (two-pow 2) 4))
           (is (= (two-pow 3) (int (Math/pow 2 3))))
           (is (= (two-pow 4) (int (Math/pow 2 4)))))}
  [n]
  (bit-shift-left 1 n))

(defn split-by-root-bounds
  [{:keys [x y width height]} depth]
  (let [td (two-pow depth)
        w (/ width td)
        h (/ height td)]
    {:b-nw {:x (- x w) :y (- y h) :height h :width w}
     :b-ne {:x (+ x w) :y (- y h) :height h :width w}
     :b-se {:x (+ x w) :y (+ y h) :height h :width w}
     :b-sw {:x (- x w) :y (+ y h) :height h :width w}}))

(defn bounds-by-depth
  {:test (fn []
           ;; TODO Fails
           ;(is (= (bounds-by-depth {:x 200, :y 200, :width 200, :height 200} 0)
           ;       {:x 200, :y 200, :width 200, :height 200}
           ;       ))
           )}
  [{:keys [x y width height]} depth]
  (let [td (two-pow depth)
        w (/ width td)
        h (/ height td)]
    {:x (- x w) :y (- y h) :height h :width w}))

(def memo-split (memoize split))

(defn split?
  {:test (fn []
           (is (= (split? {:nw 1 :ne 1 :sw 1 :se 1}) false))
           (is (= (split? nil) true)))}
  [{:keys [nw]}]
  (nil? nw))

(defn insert-cells
  [tree cells]
  (reduce (fn [acc-tree c] (insert acc-tree c)) tree cells))

(defn make-cells
  [n]
  (reduce (fn [cells i] (conj cells {:x i :y i})) [] (range (inc n))))

(defn cache-bounds!
  [bounds]
  (swap! bounds-cache (fn [bb] (reduce (fn [bbs b] (assoc bbs b 1)) bb (vals bounds)))))

(defn room-order
  [{:keys [nw ne se sw] :as t}]
  (->> (map vector [:nw :ne :se :sw] (map count [(or (:cells nw) []) (or (:cells ne) []) (or (:cells se) []) (or (:cells sw) [])]))
       (sort-by second)))

(defn insert
  {:test (fn []
           (let [tree (make-tree {:capacity 4
                                  :bounds   {:x      200
                                             :y      200
                                             :width  200
                                             :height 200}})]
             (is (= (-> (insert tree {:x 0 :y 0}) :cells)
                    [{:x 0 :y 0}]))
             (is (= (-> (insert tree {:x 0 :y 0}) (insert {:x 1 :y 1})
                        :cells)
                    [{:x 0 :y 0} {:x 1 :y 1}]))
             (is (= (-> (insert tree {:x 0 :y 0}) (insert {:x 1 :y 1}) (insert {:x 2 :y 2})
                        :cells)
                    [{:x 0 :y 0} {:x 1 :y 1} {:x 2 :y 2}]))
             (is (= (-> (insert tree {:x 0 :y 0}) (insert {:x 1 :y 1}) (insert {:x 2 :y 2}) (insert {:x 3 :y 3})
                        :cells)
                    [{:x 0 :y 0} {:x 1 :y 1} {:x 2 :y 2} {:x 3 :y 3}]))))}
  [{:keys [capacity bounds cells nw ne se sw depth] :as tree} cell]
  (cond
    (not (in-bounds? bounds cell))
    tree

    ;; only insert new cells in leaf nodes, that is; we can insert it if we should split it later on
    (and (split? tree) (< (count cells) capacity))
    (update tree :cells conj cell)

    ;; split the tree by clearing the current node cells and inserting them deeper (or higher?!)
    (split? tree)
    (let [new-depth (inc depth)
          {:keys [b-nw b-ne b-se b-sw]} (memo-split bounds)]
      (-> tree
          (assoc :cells nil)                                ;; clear current cells
          (assoc :nw (make-tree {:capacity capacity :bounds b-nw :name :nw :depth new-depth}))
          (assoc :ne (make-tree {:capacity capacity :bounds b-ne :name :ne :depth new-depth}))
          (assoc :se (make-tree {:capacity capacity :bounds b-se :name :se :depth new-depth}))
          (assoc :sw (make-tree {:capacity capacity :bounds b-sw :name :sw :depth new-depth}))
          (insert-cells (conj cells cell))))

    (in-bounds? (:bounds nw) cell)
    (assoc tree :nw (insert nw cell))

    (in-bounds? (:bounds ne) cell)
    (assoc tree :ne (insert ne cell))

    (in-bounds? (:bounds se) cell)
    (assoc tree :se (insert se cell))

    (in-bounds? (:bounds sw) cell)
    (assoc tree :sw (insert sw cell))

    :else
    tree))


(defn print-tree
  [{:keys [cells bounds nw ne se sw depth name] :as tree}]
  (let [spaces (reduce (fn [s _] (str s " ")) "" (range (or depth 0)))]
    (println (str spaces " | " depth " " name " " cells "\n" spaces " | " bounds "\n" spaces "  ____"))
    (when (some? nw)
      (print-tree nw))
    (when (some? ne)
      (print-tree ne))
    (when (some? se)
      (print-tree se))
    (when (some? sw)
      (print-tree sw))
    )
  )

(comment
  (let [tree (make-tree {:capacity 4
                         :bounds   {:x      200
                                    :y      200
                                    :width  200
                                    :height 200}})]
    ;(with-out-str
    (-> (insert-cells tree [
                            ;{:x 0 :y 0}
                            ;{:x 250 :y 0}
                            ;{:x 0 :y 250}
                            ;{:x 250 :y 250}
                            ;{:x 1 :y 1}
                            {:x 0 :y 0}
                            {:x 1 :y 1}
                            {:x 2 :y 2}
                            {:x 3 :y 3}
                            {:x 4 :y 4}

                            ])
        print-tree
        )
    ;)
    )
  )

(defn flatten-tree
  [tree]
  (loop [{:keys [cells bounds nw ne se sw]} tree
         flat-tree []]
    (cond
      (nil? tree) nil
      (empty? cells) nil
      :else (-> (condj flat-tree
                       (when (seq cells)
                         {:cells cells :bounds bounds}))
                (condj (flatten-tree nw))
                (condj (flatten-tree ne))
                (condj (flatten-tree se))
                (condj (flatten-tree sw))))))

(defonce random-seed-atom (atom 1))
(defn random-int
  ([max] (random-int 0 max))
  ([min max]
   (let [xx (Math/abs (Math/sin @random-seed-atom))]
     (reset! random-seed-atom (inc @random-seed-atom))
     (Math/floor (+ min (* xx (- max min)))))))

(defn rand-xy
  [w h]
  {:x (rand-int w) :y (rand-int h)})

(defn random-cells
  [n width height]
  {:pre  [(number? n)]
   :post [(= n (count %))]}
  (loop [rands #{}
         i 0]
    (if (= (count rands) n)
      rands
      (let [xy (rand-xy width height)]
        (if (nil? (get rands xy))
          (recur (conj rands xy) (inc i))
          (recur rands i))))))

(defn in?
  [v x]
  (if (nil? v)
    false
    (some (fn [a] (= a x)) v)))

(defn in-tree?
  "Check if cell is in tree"
  {:test (fn []
           (let [tree (make-tree {:capacity 4
                                  :bounds   {:x      200
                                             :y      200
                                             :width  200
                                             :height 200}})]
             (is (= (-> (insert tree {:x 0 :y 0})
                        (in-tree? {:x 0 :y 0}))
                    true))))}
  [{:keys [cells nw ne se sw]} cell]
  (cond
    (in? cells cell)
    true

    (nil? nw)
    false

    :else
    (or (in-tree? nw cell)
        (in-tree? ne cell)
        (in-tree? se cell)
        (in-tree? sw cell))))

(comment
  (let [t (make-tree {:capacity 4
                      :bounds   {:x      200
                                 :y      200
                                 :width  200
                                 :height 200}})]
    (insert-cells t (into [] (random-cells 100 200 200)))
    (in-tree? (insert-cells t (into [] (random-cells 100 200 200))) {:x 0 :y 0})
    )
  )

(defn tree->cells
  {:test (fn []
           (let [tree (make-tree {:capacity 4
                                  :bounds   {:x      200
                                             :y      200
                                             :width  200
                                             :height 200}})]
             (is (= (-> (insert tree {:x 0 :y 0})
                        tree->cells)
                    [{:x 0 :y 0}]))
             (let [r (->> [{:x 100, :y 41}
                           {:x 153, :y 46}
                           {:x 129, :y 56}
                           {:x 122, :y 69}
                           {:x 59, :y 72}
                           {:x 178, :y 83}
                           {:x 2, :y 95}
                           {:x 172, :y 97}
                           {:x 54, :y 192}
                           {:x 147, :y 194}]
                          (sort-by :x)
                          (sort-by :y))]
               (is (= (->> (insert-cells tree r)
                           tree->cells
                           (sort-by :x)
                           (sort-by :y))
                      r)))
             (let [r (->> (into [] (random-cells 200 200 200))
                          (sort-by :x)
                          (sort-by :y))]
               (is (= (->> (insert-cells tree r)
                           tree->cells
                           (sort-by :x)
                           (sort-by :y))
                      r)))))}
  ([tree] (tree->cells tree []))
  ([{:keys [cells nw ne se sw]} acc-cells]
   (cond
     (nil? nw)
     (if (empty? cells)
       acc-cells
       (concat acc-cells cells))

     (empty? cells)
     (concat (tree->cells nw acc-cells)
             (tree->cells ne acc-cells)
             (tree->cells se acc-cells)
             (tree->cells sw acc-cells))
     :else
     (concat
       cells
       (tree->cells nw acc-cells)
       (tree->cells ne acc-cells)
       (tree->cells se acc-cells)
       (tree->cells sw acc-cells)))))

(defn tree->bounds
  "Give you a list of all the bounds contained within a tree."
  {:test (fn []
           (let [tree (make-tree {:capacity 4
                                  :bounds   {:x      200
                                             :y      200
                                             :width  200
                                             :height 200}})]
             (is (= (-> (insert tree {:x 0 :y 0})
                        tree->bounds)
                    [{:height 200 :width 200 :x 200 :y 200}]))))}
  ([tree] (tree->bounds tree []))
  ([{:keys [bounds nw ne se sw]} bounds-acc]
   (if (nil? nw)
     (conj bounds-acc bounds)
     (concat
       [bounds]
       (tree->bounds nw bounds-acc)
       (tree->bounds ne bounds-acc)
       (tree->bounds se bounds-acc)
       (tree->bounds sw bounds-acc)))))

(defn query
  {:test (fn []
           (let [tree (make-tree {:capacity 4
                                  :bounds   {:x      200
                                             :y      200
                                             :width  200
                                             :height 200}})
                 target {:x      0
                         :y      0
                         :width  10
                         :height 10}]
             (is (= (-> (insert tree {:x 1 :y 1})
                        (insert {:x 2 :y 2})
                        (insert {:x 11 :y 11})
                        (insert {:x 12 :y 11})
                        (insert {:x 13 :y 11})
                        (insert {:x 14 :y 11})
                        (insert {:x 4 :y 4})
                        (query target))
                    [{:x 1 :y 1} {:x 2 :y 2} {:x 4 :y 4}]))
             (let [test-tree {:capacity 4,
                              :bounds   {:x 512, :y 512, :width 512, :height 512},
                              :cells    [],
                              :nw       {:capacity 4,
                                         :bounds   {:x 256, :y 256, :height 256, :width 256},
                                         :cells    [],
                                         :nw       nil,
                                         :ne       nil,
                                         :sw       nil,
                                         :se       nil,
                                         :name     "nw"},
                              :ne       {:capacity 4,
                                         :bounds   {:x 768, :y 256, :height 256, :width 256},
                                         :cells    [{:x 981, :y 286} {:x 665, :y 294}],
                                         :nw       nil,
                                         :ne       nil,
                                         :sw       nil,
                                         :se       nil,
                                         :name     "ne"},
                              :sw       {:capacity 4,
                                         :bounds   {:x 256, :y 768, :height 256, :width 256},
                                         :cells
                                                   [{:x 422, :y 557}
                                                    {:x 430, :y 1014}
                                                    {:x 153, :y 934}
                                                    {:x 144, :y 774}],
                                         :nw       nil,
                                         :ne       nil,
                                         :sw       nil,
                                         :se       nil,
                                         :name     "sw"},
                              :se       {:capacity 4,
                                         :bounds   {:x 768, :y 768, :height 256, :width 256},
                                         :cells
                                                   [{:x 672, :y 1013}
                                                    {:x 1023, :y 549}
                                                    {:x 861, :y 931}
                                                    {:x 984, :y 769}],
                                         :nw       nil,
                                         :ne       nil,
                                         :sw       nil,
                                         :se       nil,
                                         :name     "se"},
                              :name     "start"}]
               (is (= (query test-tree {:x 295, :y 461, :height 200, :width 200})
                      [{:x 422, :y 557}])))))}
  ([tree target-bounds] (query tree target-bounds []))
  ([{:keys [nw ne se sw bounds cells]} target-bounds found]
   (cond
     (not (intersects? target-bounds bounds))
     found

     (nil? nw)
     (concat found (filter (fn [c] (in-bounds? target-bounds c)) cells))

     :else
     (let [in-bounds (filter (fn [c] (in-bounds? target-bounds c)) cells)]
       (concat
         in-bounds
         (query nw target-bounds [])
         (query ne target-bounds [])
         (query se target-bounds [])
         (query sw target-bounds []))))))

(def masks [0x00FF00FF 0x0F0F0F0F 0x33333333 0x55555555])
(def shifts [8 4 2 1])
(defn shifter
  [v]
  (reduce (fn [acc-v [mask shift]]
            (bit-and (bit-or acc-v (bit-shift-left acc-v shift)) mask)) v (map vector masks shifts)))
(defn xy->z-order
  [{:keys [x y]}]
  (bit-or (shifter x) (bit-shift-left (shifter y) 1)))

(defn sort-cells-by-z-order
  [cells]
  (->>
    (map (fn [cell] (assoc cell :z-ord (xy->z-order cell))) cells)
    (sort-by :z-ord)))

(comment

  (cljs.pprint/pprint @bounds-cache)

  (sort-by :x [{:x 1 :y 1} {:x 0 :y 0}])

  (concat [1] [1 2 3] [4])

  (with-out-str (time (random-cells 1000000 1024 1024)))
  )

