goog.provide('quad.canvas');
goog.require('cljs.core');
if((typeof quad !== 'undefined') && (typeof quad.canvas !== 'undefined') && (typeof quad.canvas.ctx_atom !== 'undefined')){
} else {
quad.canvas.ctx_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof quad !== 'undefined') && (typeof quad.canvas !== 'undefined') && (typeof quad.canvas.canvas_data_atom !== 'undefined')){
} else {
quad.canvas.canvas_data_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
quad.canvas.ctx_invoke = (function quad$canvas$ctx_invoke(ctx,fn,args){
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,ctx,fn,args);
if(cljs.core.truth_(res)){
return res;
} else {
return ctx;
}
});
quad.canvas.width = (function quad$canvas$width(){
return (cljs.core.deref(quad.canvas.ctx_atom)["canvas"]["width"]);
});
quad.canvas.height = (function quad$canvas$height(){
return (cljs.core.deref(quad.canvas.ctx_atom)["canvas"]["height"]);
});
quad.canvas.get_canvas_id = (function quad$canvas$get_canvas_id(){
return (cljs.core.deref(quad.canvas.ctx_atom)["canvas"]["id"]);
});
quad.canvas.canvas = (function quad$canvas$canvas(){
return (cljs.core.deref(quad.canvas.ctx_atom)["canvas"]);
});
quad.canvas.mouse_xy = (function quad$canvas$mouse_xy(js_event){
var target = (js_event["target"]);
var rect = target.getBoundingClientRect();
var x = (js_event.clientX - rect.left);
var y = (js_event.clientY - rect.top);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
quad.canvas.resize_canvas = (function quad$canvas$resize_canvas(){
var canvas = cljs.core.deref(quad.canvas.ctx_atom).canvas;
var css_to_real_pixels = (function (){var or__4185__auto__ = window.devicePixelRatio;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})();
var d_width = (function (){var G__36018 = (canvas.clientWidth * css_to_real_pixels);
return Math.floor(G__36018);
})();
var d_height = (function (){var G__36019 = (canvas.clientHeight * css_to_real_pixels);
return Math.floor(G__36019);
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(canvas.width,d_width)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(canvas.height,d_height)))){
return null;
} else {
(canvas["style"]["height"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad.canvas.height()),"px"].join(''));

(canvas["style"]["width"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad.canvas.width()),"px"].join(''));

(canvas.height = d_height);

(canvas.width = d_width);

return cljs.core.deref(quad.canvas.ctx_atom).scale(css_to_real_pixels,css_to_real_pixels);
}
});
quad.canvas.create_dom_canvas_BANG_ = (function quad$canvas$create_dom_canvas_BANG_(width,height,id,target){
var canvas_QMARK_ = cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(document,"getElementById",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
if(cljs.core.truth_(canvas_QMARK_)){
return null;
} else {
var canvas = document.createElement("canvas");
canvas.setAttribute("id",id);

canvas.setAttribute("height",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join(''));

canvas.setAttribute("width",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''));

target.appendChild(canvas);

return canvas;
}
});
quad.canvas.random_id = (function quad$canvas$random_id(){
return ["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.random().toString((36)).substr((2),(9)))].join('');
});
quad.canvas.create_canvas = (function quad$canvas$create_canvas(h,w){
var canvas = quad.canvas.create_dom_canvas_BANG_(w,h,quad.canvas.random_id(),document.body);
cljs.core.reset_BANG_(quad.canvas.ctx_atom,canvas.getContext("2d",cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic("alpha",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0))));

return cljs.core.deref(quad.canvas.ctx_atom).setTransform((1),(0),(0),(1),0.5,0.5);
});
quad.canvas.begin_path = (function quad$canvas$begin_path(ctx){
ctx.beginPath();

return ctx;
});
quad.canvas.close_path = (function quad$canvas$close_path(ctx){
ctx.closePath();

return ctx;
});
quad.canvas.stroke = (function quad$canvas$stroke(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36047 = arguments.length;
var i__4790__auto___36048 = (0);
while(true){
if((i__4790__auto___36048 < len__4789__auto___36047)){
args__4795__auto__.push((arguments[i__4790__auto___36048]));

var G__36049 = (i__4790__auto___36048 + (1));
i__4790__auto___36048 = G__36049;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return quad.canvas.stroke.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(quad.canvas.stroke.cljs$core$IFn$_invoke$arity$variadic = (function (_){
return cljs.core.deref(quad.canvas.ctx_atom).stroke();
}));

(quad.canvas.stroke.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(quad.canvas.stroke.cljs$lang$applyTo = (function (seq36020){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36020));
}));

quad.canvas.fill_style = (function quad$canvas$fill_style(color){
return (cljs.core.deref(quad.canvas.ctx_atom)["fillStyle"] = color);
});
quad.canvas.stroke_style = (function quad$canvas$stroke_style(color){
return (cljs.core.deref(quad.canvas.ctx_atom)["strokeStyle"] = color);
});
quad.canvas.js_fill = (function quad$canvas$js_fill(ctx){
return ctx.fill();
});
quad.canvas.js_rect = (function quad$canvas$js_rect(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36050 = arguments.length;
var i__4790__auto___36051 = (0);
while(true){
if((i__4790__auto___36051 < len__4789__auto___36050)){
args__4795__auto__.push((arguments[i__4790__auto___36051]));

var G__36052 = (i__4790__auto___36051 + (1));
i__4790__auto___36051 = G__36052;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return quad.canvas.js_rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(quad.canvas.js_rect.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return quad.canvas.ctx_invoke(ctx,"rect",args);
}));

(quad.canvas.js_rect.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quad.canvas.js_rect.cljs$lang$applyTo = (function (seq36021){
var G__36022 = cljs.core.first(seq36021);
var seq36021__$1 = cljs.core.next(seq36021);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36022,seq36021__$1);
}));

quad.canvas.js_move_to = (function quad$canvas$js_move_to(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36053 = arguments.length;
var i__4790__auto___36054 = (0);
while(true){
if((i__4790__auto___36054 < len__4789__auto___36053)){
args__4795__auto__.push((arguments[i__4790__auto___36054]));

var G__36055 = (i__4790__auto___36054 + (1));
i__4790__auto___36054 = G__36055;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return quad.canvas.js_move_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(quad.canvas.js_move_to.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return quad.canvas.ctx_invoke(ctx,"moveTo",args);
}));

(quad.canvas.js_move_to.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quad.canvas.js_move_to.cljs$lang$applyTo = (function (seq36023){
var G__36024 = cljs.core.first(seq36023);
var seq36023__$1 = cljs.core.next(seq36023);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36024,seq36023__$1);
}));

quad.canvas.js_line_to = (function quad$canvas$js_line_to(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36056 = arguments.length;
var i__4790__auto___36057 = (0);
while(true){
if((i__4790__auto___36057 < len__4789__auto___36056)){
args__4795__auto__.push((arguments[i__4790__auto___36057]));

var G__36058 = (i__4790__auto___36057 + (1));
i__4790__auto___36057 = G__36058;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return quad.canvas.js_line_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(quad.canvas.js_line_to.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return quad.canvas.ctx_invoke(ctx,"lineTo",args);
}));

(quad.canvas.js_line_to.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quad.canvas.js_line_to.cljs$lang$applyTo = (function (seq36025){
var G__36026 = cljs.core.first(seq36025);
var seq36025__$1 = cljs.core.next(seq36025);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36026,seq36025__$1);
}));

quad.canvas.js_translate = (function quad$canvas$js_translate(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36059 = arguments.length;
var i__4790__auto___36060 = (0);
while(true){
if((i__4790__auto___36060 < len__4789__auto___36059)){
args__4795__auto__.push((arguments[i__4790__auto___36060]));

var G__36061 = (i__4790__auto___36060 + (1));
i__4790__auto___36060 = G__36061;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return quad.canvas.js_translate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(quad.canvas.js_translate.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return quad.canvas.ctx_invoke(ctx,"translate",args);
}));

(quad.canvas.js_translate.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quad.canvas.js_translate.cljs$lang$applyTo = (function (seq36027){
var G__36028 = cljs.core.first(seq36027);
var seq36027__$1 = cljs.core.next(seq36027);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36028,seq36027__$1);
}));

quad.canvas.js_arc = (function quad$canvas$js_arc(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36069 = arguments.length;
var i__4790__auto___36070 = (0);
while(true){
if((i__4790__auto___36070 < len__4789__auto___36069)){
args__4795__auto__.push((arguments[i__4790__auto___36070]));

var G__36073 = (i__4790__auto___36070 + (1));
i__4790__auto___36070 = G__36073;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return quad.canvas.js_arc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(quad.canvas.js_arc.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return quad.canvas.ctx_invoke(ctx,"arc",args);
}));

(quad.canvas.js_arc.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quad.canvas.js_arc.cljs$lang$applyTo = (function (seq36029){
var G__36030 = cljs.core.first(seq36029);
var seq36029__$1 = cljs.core.next(seq36029);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36030,seq36029__$1);
}));

quad.canvas.js_fill_rect = (function quad$canvas$js_fill_rect(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36079 = arguments.length;
var i__4790__auto___36080 = (0);
while(true){
if((i__4790__auto___36080 < len__4789__auto___36079)){
args__4795__auto__.push((arguments[i__4790__auto___36080]));

var G__36081 = (i__4790__auto___36080 + (1));
i__4790__auto___36080 = G__36081;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return quad.canvas.js_fill_rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(quad.canvas.js_fill_rect.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return quad.canvas.ctx_invoke(ctx,"fillRect",args);
}));

(quad.canvas.js_fill_rect.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quad.canvas.js_fill_rect.cljs$lang$applyTo = (function (seq36031){
var G__36032 = cljs.core.first(seq36031);
var seq36031__$1 = cljs.core.next(seq36031);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36032,seq36031__$1);
}));

quad.canvas.js_stroke = (function quad$canvas$js_stroke(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36086 = arguments.length;
var i__4790__auto___36087 = (0);
while(true){
if((i__4790__auto___36087 < len__4789__auto___36086)){
args__4795__auto__.push((arguments[i__4790__auto___36087]));

var G__36088 = (i__4790__auto___36087 + (1));
i__4790__auto___36087 = G__36088;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return quad.canvas.js_stroke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(quad.canvas.js_stroke.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return quad.canvas.ctx_invoke(ctx,"stroke",args);
}));

(quad.canvas.js_stroke.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(quad.canvas.js_stroke.cljs$lang$applyTo = (function (seq36033){
var G__36034 = cljs.core.first(seq36033);
var seq36033__$1 = cljs.core.next(seq36033);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36034,seq36033__$1);
}));

quad.canvas.translate = (function quad$canvas$translate(x,y){
return quad.canvas.js_translate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(quad.canvas.ctx_atom),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));
});
quad.canvas.draw_pixel = (function quad$canvas$draw_pixel(x,y,r,g,b,a){
var i = ((x + (y * quad.canvas.width())) * (4));
var canvas_data = cljs.core.deref(quad.canvas.canvas_data_atom);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quad.canvas.width(),x,y," is = ",i], 0));

(canvas_data["data"][(i + (0))] = r);

(canvas_data["data"][(i + (1))] = g);

(canvas_data["data"][(i + (2))] = b);

return (canvas_data["data"][(i + (3))] = a);
});
quad.canvas.white_img = (function quad$canvas$white_img(){
var canvas_data = cljs.core.deref(quad.canvas.canvas_data_atom);
var seq__36035 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(canvas_data.data.length));
var chunk__36036 = null;
var count__36037 = (0);
var i__36038 = (0);
while(true){
if((i__36038 < count__36037)){
var i = chunk__36036.cljs$core$IIndexed$_nth$arity$2(null,i__36038);
(canvas_data["data"][i] = (255));


var G__36099 = seq__36035;
var G__36100 = chunk__36036;
var G__36101 = count__36037;
var G__36102 = (i__36038 + (1));
seq__36035 = G__36099;
chunk__36036 = G__36100;
count__36037 = G__36101;
i__36038 = G__36102;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36035);
if(temp__5735__auto__){
var seq__36035__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36035__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36035__$1);
var G__36103 = cljs.core.chunk_rest(seq__36035__$1);
var G__36104 = c__4609__auto__;
var G__36105 = cljs.core.count(c__4609__auto__);
var G__36106 = (0);
seq__36035 = G__36103;
chunk__36036 = G__36104;
count__36037 = G__36105;
i__36038 = G__36106;
continue;
} else {
var i = cljs.core.first(seq__36035__$1);
(canvas_data["data"][i] = (255));


var G__36109 = cljs.core.next(seq__36035__$1);
var G__36110 = null;
var G__36111 = (0);
var G__36112 = (0);
seq__36035 = G__36109;
chunk__36036 = G__36110;
count__36037 = G__36111;
i__36038 = G__36112;
continue;
}
} else {
return null;
}
}
break;
}
});
quad.canvas.put_img_data = (function quad$canvas$put_img_data(){
console.log(cljs.core.deref(quad.canvas.canvas_data_atom));

return cljs.core.deref(quad.canvas.ctx_atom).putImageData(cljs.core.deref(quad.canvas.canvas_data_atom),(0),(0));
});
quad.canvas.fill = (function quad$canvas$fill(){
return quad.canvas.js_fill(cljs.core.deref(quad.canvas.ctx_atom));
});
quad.canvas.rect = (function quad$canvas$rect(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36114 = arguments.length;
var i__4790__auto___36116 = (0);
while(true){
if((i__4790__auto___36116 < len__4789__auto___36114)){
args__4795__auto__.push((arguments[i__4790__auto___36116]));

var G__36119 = (i__4790__auto___36116 + (1));
i__4790__auto___36116 = G__36119;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((4) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((4)),(0),null)):null);
return quad.canvas.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4796__auto__);
});

(quad.canvas.rect.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,w,h,opt){
var G__36044_36120 = cljs.core.deref(quad.canvas.ctx_atom);
quad.canvas.begin_path(G__36044_36120);

quad.canvas.js_rect.cljs$core$IFn$_invoke$arity$variadic(G__36044_36120,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y,w,h], 0));


if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"fill?","fill?",-485702148)], null)))){
quad.canvas.js_fill(cljs.core.deref(quad.canvas.ctx_atom));
} else {
}

if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"batch?","batch?",-624482293)], null)))){
return null;
} else {
return quad.canvas.js_stroke(cljs.core.deref(quad.canvas.ctx_atom));
}
}));

(quad.canvas.rect.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(quad.canvas.rect.cljs$lang$applyTo = (function (seq36039){
var G__36040 = cljs.core.first(seq36039);
var seq36039__$1 = cljs.core.next(seq36039);
var G__36041 = cljs.core.first(seq36039__$1);
var seq36039__$2 = cljs.core.next(seq36039__$1);
var G__36042 = cljs.core.first(seq36039__$2);
var seq36039__$3 = cljs.core.next(seq36039__$2);
var G__36043 = cljs.core.first(seq36039__$3);
var seq36039__$4 = cljs.core.next(seq36039__$3);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36040,G__36041,G__36042,G__36043,seq36039__$4);
}));

quad.canvas.line = (function quad$canvas$line(x1,y1,x2,y2){
var G__36045 = cljs.core.deref(quad.canvas.ctx_atom);
quad.canvas.begin_path(G__36045);

quad.canvas.js_move_to.cljs$core$IFn$_invoke$arity$variadic(G__36045,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x1,y1], 0));

quad.canvas.js_line_to.cljs$core$IFn$_invoke$arity$variadic(G__36045,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x2,y2], 0));

quad.canvas.js_stroke(G__36045);

return G__36045;
});
quad.canvas.arc = (function quad$canvas$arc(x,y,r,start_angle,stop_angle){
var G__36046 = cljs.core.deref(quad.canvas.ctx_atom);
quad.canvas.begin_path(G__36046);

quad.canvas.js_arc.cljs$core$IFn$_invoke$arity$variadic(G__36046,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y,r,start_angle,stop_angle], 0));

quad.canvas.stroke.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__36046], 0));

return G__36046;
});
quad.canvas.circle = (function quad$canvas$circle(x,y,r){
return quad.canvas.arc(x,y,r,(0),((2) * Math.PI));
});
quad.canvas.fill_rect = (function quad$canvas$fill_rect(x,y,h,w,color){
quad.canvas.fill_style(color);

return quad.canvas.js_fill_rect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(quad.canvas.ctx_atom),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y,w,h], 0));
});
quad.canvas.background = (function quad$canvas$background(color){
return quad.canvas.fill_rect((0),(0),quad.canvas.width(),quad.canvas.height(),color);
});

//# sourceMappingURL=quad.canvas.js.map
