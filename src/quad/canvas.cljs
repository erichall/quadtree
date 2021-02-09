(ns quad.canvas)

(defonce ctx-atom (atom nil))
(defonce canvas-data-atom (atom nil))

(defn- ctx-invoke
  [ctx fn args]
  (let [res (apply js-invoke ctx fn args)]
    (if res
      res
      ctx)))

(defn- width [] (aget @ctx-atom "canvas" "width"))
(defn- height [] (aget @ctx-atom "canvas" "height"))

(defn resize-canvas
  []
  (let [canvas (.-canvas @ctx-atom)
        css-to-real-pixels (or (.-devicePixelRatio js/window) 1)
        d-width (Math/floor (* (.-clientWidth canvas) css-to-real-pixels))
        d-height (Math/floor (* (.-clientHeight canvas) css-to-real-pixels))]
    (when-not (or (= (.-width canvas) d-width)
                  (= (.-height canvas) d-height))
      (aset canvas "style" "height" (str (height) "px"))
      (aset canvas "style" "width" (str (width) "px"))

      (set! (.-height canvas) d-height)
      (set! (.-width canvas) d-width)

      (.scale @ctx-atom css-to-real-pixels css-to-real-pixels)
      )))

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

(defn create-canvas
  [h w]
  (let [canvas (create-dom-canvas! w h (random-id) js/document.body)]
    (reset! ctx-atom (.getContext canvas "2d" (clj->js "alpha" false)))
    ;; TODO is this the only way to not blurr lines...?!?!?
    (.setTransform @ctx-atom 1, 0, 0, 1, 0.5, 0.5)
    ;; TODO might not be the best thing to create this here?
    (reset! canvas-data-atom (.getImageData @ctx-atom 0 0 w h))))



(defn- begin-path
  [ctx]
  (.beginPath ctx)
  ctx)

(defn- close-path
  [ctx]
  (.closePath ctx)
  ctx)

(defn- stroke
  [ctx]
  (.stroke ctx)
  ctx)

;; color
(defn fill-style
  [color]
  (aset @ctx-atom "fillStyle" color))

(defn stroke-style
  [color]
  (aset @ctx-atom "strokeStyle" color))


(defn- js-fill [ctx] (.fill ctx))
(defn- js-rect [ctx & args] (ctx-invoke ctx "rect" args))
(defn- js-move-to [ctx & args] (ctx-invoke ctx "moveTo" args))
(defn- js-line-to [ctx & args] (ctx-invoke ctx "lineTo" args))
(defn- js-translate [ctx & args] (ctx-invoke ctx "translate" args))
(defn- js-arc [ctx & args] (ctx-invoke ctx "arc" args))

(defn translate
  [x y]
  (js-translate @ctx-atom x y))

(defn draw-pixel
  [x y r g b a]
  (let [i (* (+ x (* y (width))) 4)
        canvas-data @canvas-data-atom]
    (aset canvas-data "data" (+ i 0) r)
    (aset canvas-data "data" (+ i 1) g)
    (aset canvas-data "data" (+ i 2) b)
    (aset canvas-data "data" (+ i 3) a)
    ))

(defn put-img-data
  []
  (js/console.log @canvas-data-atom)
  (.putImageData @ctx-atom @canvas-data-atom 0 0))

;; shapes
(defn rect
  [x y w h]
  (doto @ctx-atom
    begin-path
    (js-rect x y w h)
    js-fill))

(defn line
  [x1 y1 x2 y2]
  (doto @ctx-atom
    begin-path
    ;(js-translate 0.5 0.5)
    (js-move-to x1 y1)
    (js-line-to x2 y2)
    stroke))

(defn arc
  [x y r start-angle stop-angle]
  (doto @ctx-atom
    begin-path
    ;(js-translate 0.5 0.5)
    (js-arc x y r start-angle stop-angle)
    stroke))

(defn circle
  [x y r]
  (arc x y r 0 (* 2 Math/PI)))

;(defn point)


(defn background
  [color]
  (fill-style color)
  (.fillRect @ctx-atom 0 0 (width) (height)))

(comment

  )
