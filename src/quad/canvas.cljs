(ns quad.canvas)

(defonce ctx-atom (atom nil))

(defn- create-dom-canvas!
  [width height id target]
  (let [canvas? (js-invoke js/document "getElementById" id)]
    (when-not canvas?
      (let [canvas (js/document.createElement "canvas")]
        (do
          (.setAttribute canvas "id" id)
          (.setAttribute canvas "height" (str height "px"))
          (.setAttribute canvas "width" (str width "px"))
          (.appendChild target canvas))
        canvas))))

(defn- random-id
  []
  (str "_" (.substr (.toString (.random js/Math) 36) 2 9)))

(defn- width [] (aget @ctx-atom "canvas" "width"))
(defn- height [] (aget @ctx-atom "canvas" "height"))

(defn create-canvas
  [h w]
  (let [canvas (create-dom-canvas! w h (random-id) js/document.body)]
    (reset! ctx-atom (.getContext canvas "2d" (clj->js "alpha" false)))))

(defn background
  ([r] (background r 0 0))
  ([r g] (background r g 0))
  ([r g b]
   (js/console.log @ctx-atom)
   (aset @ctx-atom "globalCompositeOperation" "destination-over") ;; draw behind elements
   (set! (.-fillStyle @ctx-atom) (str "rgb(" r "," g "," b ")"))
   (.fillRect @ctx-atom 0 0 (width) (height))))

(comment

  )
