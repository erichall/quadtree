goog.provide('quad.resizable_rect');
goog.require('cljs.core');
goog.require('reagent.core');
quad.resizable_rect.debounce = (function quad$resizable_rect$debounce(f,interval){
var id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function() { 
var G__62120__delegate = function (args){
clearTimeout(cljs.core.deref(id));

var new_id = setTimeout((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),interval);
return cljs.core.reset_BANG_(id,new_id);
};
var G__62120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62121__i = 0, G__62121__a = new Array(arguments.length -  0);
while (G__62121__i < G__62121__a.length) {G__62121__a[G__62121__i] = arguments[G__62121__i + 0]; ++G__62121__i;}
  args = new cljs.core.IndexedSeq(G__62121__a,0,null);
} 
return G__62120__delegate.call(this,args);};
G__62120.cljs$lang$maxFixedArity = 0;
G__62120.cljs$lang$applyTo = (function (arglist__62122){
var args = cljs.core.seq(arglist__62122);
return G__62120__delegate(args);
});
G__62120.cljs$core$IFn$_invoke$arity$variadic = G__62120__delegate;
return G__62120;
})()
;
});
if((typeof quad !== 'undefined') && (typeof quad.resizable_rect !== 'undefined') && (typeof quad.resizable_rect.state_atom !== 'undefined')){
} else {
quad.resizable_rect.state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
quad.resizable_rect.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"resizing?","resizing?",1963364160),new cljs.core.Keyword(null,"initial-y","initial-y",-1829243997),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"left-offset","left-offset",-331155643),new cljs.core.Keyword(null,"down?","down?",1701019493),new cljs.core.Keyword(null,"edge-width","edge-width",-1845528442),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"corner-width","corner-width",203453099),new cljs.core.Keyword(null,"moving?","moving?",1843710132),new cljs.core.Keyword(null,"current-resize","current-resize",-67717643),new cljs.core.Keyword(null,"top-offset","top-offset",1235816245),new cljs.core.Keyword(null,"initial-x","initial-x",-577844202),new cljs.core.Keyword(null,"resize-edges","resize-edges",-460133256),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[(200),(50),false,(0),(50),null,false,(10),(200),(15),false,null,null,(0),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["right","left","top","bottom","top-left","top-right","bottom-left","bottom-right"], null),(300),(200)]);
if((cljs.core.deref(quad.resizable_rect.state_atom) == null)){
cljs.core.reset_BANG_(quad.resizable_rect.state_atom,quad.resizable_rect.initial_state);
} else {
}
quad.resizable_rect.client_x = (function quad$resizable_rect$client_x(e){
return e.clientX;
});
quad.resizable_rect.client_y = (function quad$resizable_rect$client_y(e){
return e.clientY;
});
quad.resizable_rect.page_y = (function quad$resizable_rect$page_y(e){
return e.pageY;
});
quad.resizable_rect.page_x = (function quad$resizable_rect$page_x(e){
return e.pageX;
});
quad.resizable_rect.get_offset_top = (function quad$resizable_rect$get_offset_top(el){
return el.offsetTop;
});
quad.resizable_rect.get_offset_left = (function quad$resizable_rect$get_offset_left(el){
return el.offsetTop;
});
quad.resizable_rect.scroll_left = (function quad$resizable_rect$scroll_left(el){
return el.scrollLeft;
});
quad.resizable_rect.scroll_top = (function quad$resizable_rect$scroll_top(el){
return el.scrollTop;
});
quad.resizable_rect.client_left = (function quad$resizable_rect$client_left(el){
return el.clientLeft;
});
quad.resizable_rect.client_top = (function quad$resizable_rect$client_top(el){
return el.clientTop;
});
quad.resizable_rect.get_bb = (function quad$resizable_rect$get_bb(el){
return el.getBoundingClientRect();
});
/**
 * Left offset, check if we have it first, otherwise call the dom and then save it.
 */
quad.resizable_rect.left_bb_BANG_ = (function quad$resizable_rect$left_bb_BANG_(el){
var left = new cljs.core.Keyword(null,"left-offset","left-offset",-331155643).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quad.resizable_rect.state_atom));
if((!((left == null)))){
return left;
} else {
var bb = quad.resizable_rect.get_bb(el);
return new cljs.core.Keyword(null,"left-offset","left-offset",-331155643).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quad.resizable_rect.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"left-offset","left-offset",-331155643),bb.left));
}
});
/**
 * Top offset, check if we have it first, otherwise call the dom and then save it.
 */
quad.resizable_rect.top_bb_BANG_ = (function quad$resizable_rect$top_bb_BANG_(el){
var top = new cljs.core.Keyword(null,"top-offset","top-offset",1235816245).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quad.resizable_rect.state_atom));
if((!((top == null)))){
return top;
} else {
var bb = quad.resizable_rect.get_bb(el);
return new cljs.core.Keyword(null,"top-offset","top-offset",1235816245).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quad.resizable_rect.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"top-offset","top-offset",1235816245),bb.top));
}
});
quad.resizable_rect.get_element_by_id = (function quad$resizable_rect$get_element_by_id(id){
return document.getElementById(id);
});
quad.resizable_rect.in_bounds_QMARK_ = (function quad$resizable_rect$in_bounds_QMARK_(e){
var bb_parent = quad.resizable_rect.get_bb((e["target"]["parentElement"]));
var bb_target = quad.resizable_rect.get_bb((e["target"]));
var offset_x = (bb_target.left - bb_parent.left);
var offset_y = (bb_target.top - bb_parent.top);
var max_offset_x = (bb_parent.right - bb_target.right);
var max_offset_y = (bb_parent.bottom - bb_target.bottom);
return (((offset_x >= (0))) && ((offset_y >= (0))) && ((max_offset_x >= (0))) && ((max_offset_y >= (0))));
});
/**
 * The relative x-coordinate. We take the bb from the overlay element otherwise coordinates is messed up.
 */
quad.resizable_rect.mouse_x = (function quad$resizable_rect$mouse_x(e){
return (quad.resizable_rect.client_x(e) - quad.resizable_rect.left_bb_BANG_(quad.resizable_rect.get_element_by_id("overlay")));
});
/**
 * The relative y-coordinate.
 */
quad.resizable_rect.mouse_y = (function quad$resizable_rect$mouse_y(e){
return (quad.resizable_rect.client_y(e) - quad.resizable_rect.top_bb_BANG_(quad.resizable_rect.get_element_by_id("overlay")));
});
quad.resizable_rect.is_move_QMARK_ = (function quad$resizable_rect$is_move_QMARK_(e,movable_rect_id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((e["target"]["id"]),movable_rect_id);
});
quad.resizable_rect.is_resize_QMARK_ = (function quad$resizable_rect$is_resize_QMARK_(e,edges){
var id = (e["target"]["id"]);
return cljs.core.boolean$(cljs.core.some((function (edge){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,edge);
}),edges));
});
quad.resizable_rect.is_resizing_QMARK_ = (function quad$resizable_rect$is_resizing_QMARK_(){
return new cljs.core.Keyword(null,"resizing?","resizing?",1963364160).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quad.resizable_rect.state_atom));
});
quad.resizable_rect.is_moving_QMARK_ = (function quad$resizable_rect$is_moving_QMARK_(){
return new cljs.core.Keyword(null,"moving?","moving?",1843710132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quad.resizable_rect.state_atom));
});
quad.resizable_rect.clamp = (function quad$resizable_rect$clamp(v,max_value,min_value){
var x__4276__auto__ = (function (){var x__4273__auto__ = v;
var y__4274__auto__ = min_value;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var y__4277__auto__ = max_value;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
});
quad.resizable_rect.handle_event_BANG_ = (function quad$resizable_rect$handle_event_BANG_(var_args){
var G__62026 = arguments.length;
switch (G__62026) {
case 2:
return quad.resizable_rect.handle_event_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quad.resizable_rect.handle_event_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quad.resizable_rect.handle_event_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (name,data){
return quad.resizable_rect.handle_event_BANG_.cljs$core$IFn$_invoke$arity$3(name,data,null);
}));

(quad.resizable_rect.handle_event_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (name,data,callbacks){
var pred__62027 = cljs.core._EQ_;
var expr__62028 = name;
if(cljs.core.truth_((function (){var G__62030 = new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528);
var G__62031 = expr__62028;
return (pred__62027.cljs$core$IFn$_invoke$arity$2 ? pred__62027.cljs$core$IFn$_invoke$arity$2(G__62030,G__62031) : pred__62027.call(null,G__62030,G__62031));
})())){
return null;
} else {
if(cljs.core.truth_((function (){var G__62032 = new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470);
var G__62033 = expr__62028;
return (pred__62027.cljs$core$IFn$_invoke$arity$2 ? pred__62027.cljs$core$IFn$_invoke$arity$2(G__62032,G__62033) : pred__62027.call(null,G__62032,G__62033));
})())){
if(((quad.resizable_rect.is_move_QMARK_(data,"movable-rect")) && (cljs.core.not(new cljs.core.Keyword(null,"resizing?","resizing?",1963364160).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quad.resizable_rect.state_atom)))))){
return quad.resizable_rect.handle_event_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"on-move-start","on-move-start",129222002),data,callbacks);
} else {
if(((quad.resizable_rect.is_resize_QMARK_(data,new cljs.core.Keyword(null,"resize-edges","resize-edges",-460133256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quad.resizable_rect.state_atom)))) && (cljs.core.not(new cljs.core.Keyword(null,"moving?","moving?",1843710132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quad.resizable_rect.state_atom)))))){
return quad.resizable_rect.handle_event_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"on-resize-start","on-resize-start",2092882932),data,callbacks);
} else {
return null;

}
}
} else {
if(cljs.core.truth_((function (){var G__62034 = new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874);
var G__62035 = expr__62028;
return (pred__62027.cljs$core$IFn$_invoke$arity$2 ? pred__62027.cljs$core$IFn$_invoke$arity$2(G__62034,G__62035) : pred__62027.call(null,G__62034,G__62035));
})())){
if(cljs.core.truth_(new cljs.core.Keyword(null,"moving?","moving?",1843710132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quad.resizable_rect.state_atom)))){
return quad.resizable_rect.handle_event_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"on-move","on-move",-1779179710),data,callbacks);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"resizing?","resizing?",1963364160).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quad.resizable_rect.state_atom)))){
return quad.resizable_rect.handle_event_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),data,callbacks);
} else {
return null;
}
}
} else {
if(cljs.core.truth_((function (){var G__62036 = new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320);
var G__62037 = expr__62028;
return (pred__62027.cljs$core$IFn$_invoke$arity$2 ? pred__62027.cljs$core$IFn$_invoke$arity$2(G__62036,G__62037) : pred__62027.call(null,G__62036,G__62037));
})())){
if(cljs.core.truth_(new cljs.core.Keyword(null,"moving?","moving?",1843710132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quad.resizable_rect.state_atom)))){
return quad.resizable_rect.handle_event_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"on-move-end","on-move-end",1587020369),data,callbacks);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"resizing?","resizing?",1963364160).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quad.resizable_rect.state_atom)))){
return quad.resizable_rect.handle_event_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"on-resize-end","on-resize-end",2087563540),data,callbacks);
} else {
return null;
}
}
} else {
if(cljs.core.truth_((function (){var G__62038 = new cljs.core.Keyword(null,"on-move-start","on-move-start",129222002);
var G__62039 = expr__62028;
return (pred__62027.cljs$core$IFn$_invoke$arity$2 ? pred__62027.cljs$core$IFn$_invoke$arity$2(G__62038,G__62039) : pred__62027.call(null,G__62038,G__62039));
})())){
var map__62040 = cljs.core.deref(quad.resizable_rect.state_atom);
var map__62040__$1 = (((((!((map__62040 == null))))?(((((map__62040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62040):map__62040);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62040__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62040__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(quad.resizable_rect.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"down?","down?",1701019493),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"moving?","moving?",1843710132),true,new cljs.core.Keyword(null,"initial-x","initial-x",-577844202),(quad.resizable_rect.client_x(data) - x),new cljs.core.Keyword(null,"initial-y","initial-y",-1829243997),(quad.resizable_rect.client_y(data) - y)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"on-move-start","on-move-start",129222002).cljs$core$IFn$_invoke$arity$1(callbacks))){
var G__62043 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),data], null),cljs.core.select_keys(cljs.core.deref(quad.resizable_rect.state_atom),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"width","width",-384071477)], null))], 0));
var fexpr__62042 = new cljs.core.Keyword(null,"on-move-start","on-move-start",129222002).cljs$core$IFn$_invoke$arity$1(callbacks);
return (fexpr__62042.cljs$core$IFn$_invoke$arity$1 ? fexpr__62042.cljs$core$IFn$_invoke$arity$1(G__62043) : fexpr__62042.call(null,G__62043));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__62044 = new cljs.core.Keyword(null,"on-move","on-move",-1779179710);
var G__62045 = expr__62028;
return (pred__62027.cljs$core$IFn$_invoke$arity$2 ? pred__62027.cljs$core$IFn$_invoke$arity$2(G__62044,G__62045) : pred__62027.call(null,G__62044,G__62045));
})())){
var map__62046 = cljs.core.deref(quad.resizable_rect.state_atom);
var map__62046__$1 = (((((!((map__62046 == null))))?(((((map__62046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62046):map__62046);
var down_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62046__$1,new cljs.core.Keyword(null,"down?","down?",1701019493));
var initial_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62046__$1,new cljs.core.Keyword(null,"initial-x","initial-x",-577844202));
var initial_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62046__$1,new cljs.core.Keyword(null,"initial-y","initial-y",-1829243997));
if(cljs.core.truth_(down_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(quad.resizable_rect.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),(quad.resizable_rect.client_x(data) - initial_x),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),(quad.resizable_rect.client_y(data) - initial_y)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"on-move","on-move",-1779179710).cljs$core$IFn$_invoke$arity$1(callbacks))){
var G__62049 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),data], null),cljs.core.select_keys(cljs.core.deref(quad.resizable_rect.state_atom),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"width","width",-384071477)], null))], 0));
var fexpr__62048 = new cljs.core.Keyword(null,"on-move","on-move",-1779179710).cljs$core$IFn$_invoke$arity$1(callbacks);
return (fexpr__62048.cljs$core$IFn$_invoke$arity$1 ? fexpr__62048.cljs$core$IFn$_invoke$arity$1(G__62049) : fexpr__62048.call(null,G__62049));
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__62050 = new cljs.core.Keyword(null,"on-move-end","on-move-end",1587020369);
var G__62051 = expr__62028;
return (pred__62027.cljs$core$IFn$_invoke$arity$2 ? pred__62027.cljs$core$IFn$_invoke$arity$2(G__62050,G__62051) : pred__62027.call(null,G__62050,G__62051));
})())){
if(cljs.core.truth_(new cljs.core.Keyword(null,"down?","down?",1701019493).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quad.resizable_rect.state_atom)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(quad.resizable_rect.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"down?","down?",1701019493),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"moving?","moving?",1843710132),false], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"on-move-end","on-move-end",1587020369).cljs$core$IFn$_invoke$arity$1(callbacks))){
var G__62053 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),data], null),cljs.core.select_keys(cljs.core.deref(quad.resizable_rect.state_atom),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"width","width",-384071477)], null))], 0));
var fexpr__62052 = new cljs.core.Keyword(null,"on-move-end","on-move-end",1587020369).cljs$core$IFn$_invoke$arity$1(callbacks);
return (fexpr__62052.cljs$core$IFn$_invoke$arity$1 ? fexpr__62052.cljs$core$IFn$_invoke$arity$1(G__62053) : fexpr__62052.call(null,G__62053));
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__62054 = new cljs.core.Keyword(null,"on-resize-start","on-resize-start",2092882932);
var G__62055 = expr__62028;
return (pred__62027.cljs$core$IFn$_invoke$arity$2 ? pred__62027.cljs$core$IFn$_invoke$arity$2(G__62054,G__62055) : pred__62027.call(null,G__62054,G__62055));
})())){
var map__62056 = cljs.core.deref(quad.resizable_rect.state_atom);
var map__62056__$1 = (((((!((map__62056 == null))))?(((((map__62056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62056):map__62056);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62056__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62056__$1,new cljs.core.Keyword(null,"width","width",-384071477));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(quad.resizable_rect.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"resizing?","resizing?",1963364160),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-resize","current-resize",-67717643),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((data["target"]["id"])),new cljs.core.Keyword(null,"start-x","start-x",-193941684),quad.resizable_rect.mouse_x(data),new cljs.core.Keyword(null,"start-y","start-y",-771244577),quad.resizable_rect.mouse_y(data),new cljs.core.Keyword(null,"start-width","start-width",471198432),width,new cljs.core.Keyword(null,"start-height","start-height",1403195634),height], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"on-resize-start","on-resize-start",2092882932).cljs$core$IFn$_invoke$arity$1(callbacks))){
var G__62059 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),data], null),cljs.core.select_keys(cljs.core.deref(quad.resizable_rect.state_atom),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"width","width",-384071477)], null))], 0));
var fexpr__62058 = new cljs.core.Keyword(null,"on-resize-start","on-resize-start",2092882932).cljs$core$IFn$_invoke$arity$1(callbacks);
return (fexpr__62058.cljs$core$IFn$_invoke$arity$1 ? fexpr__62058.cljs$core$IFn$_invoke$arity$1(G__62059) : fexpr__62058.call(null,G__62059));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__62060 = new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129);
var G__62061 = expr__62028;
return (pred__62027.cljs$core$IFn$_invoke$arity$2 ? pred__62027.cljs$core$IFn$_invoke$arity$2(G__62060,G__62061) : pred__62027.call(null,G__62060,G__62061));
})())){
var map__62062 = cljs.core.deref(quad.resizable_rect.state_atom);
var map__62062__$1 = (((((!((map__62062 == null))))?(((((map__62062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62062):map__62062);
var start_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62062__$1,new cljs.core.Keyword(null,"start-y","start-y",-771244577));
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62062__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var start_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62062__$1,new cljs.core.Keyword(null,"start-width","start-width",471198432));
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62062__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62062__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var start_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62062__$1,new cljs.core.Keyword(null,"start-x","start-x",-193941684));
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62062__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var start_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62062__$1,new cljs.core.Keyword(null,"start-height","start-height",1403195634));
var current_resize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62062__$1,new cljs.core.Keyword(null,"current-resize","current-resize",-67717643));
var mouse_x = quad.resizable_rect.mouse_x(data);
var mouse_y = quad.resizable_rect.mouse_y(data);
var dy = (mouse_y - start_y);
var dx = (mouse_x - start_x);
var pred__62064 = cljs.core._EQ_;
var expr__62065 = current_resize;
if(cljs.core.truth_((function (){var G__62067 = new cljs.core.Keyword(null,"top","top",-1856271961);
var G__62068 = expr__62065;
return (pred__62064.cljs$core$IFn$_invoke$arity$2 ? pred__62064.cljs$core$IFn$_invoke$arity$2(G__62067,G__62068) : pred__62064.call(null,G__62067,G__62068));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(quad.resizable_rect.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"height","height",1025178622),(start_height - dy),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),(start_y + dy)], 0));
} else {
if(cljs.core.truth_((function (){var G__62069 = new cljs.core.Keyword(null,"left","left",-399115937);
var G__62070 = expr__62065;
return (pred__62064.cljs$core$IFn$_invoke$arity$2 ? pred__62064.cljs$core$IFn$_invoke$arity$2(G__62069,G__62070) : pred__62064.call(null,G__62069,G__62070));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(quad.resizable_rect.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),(start_width - dx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185),(start_x + dx)], 0));
} else {
if(cljs.core.truth_((function (){var G__62071 = new cljs.core.Keyword(null,"right","right",-452581833);
var G__62072 = expr__62065;
return (pred__62064.cljs$core$IFn$_invoke$arity$2 ? pred__62064.cljs$core$IFn$_invoke$arity$2(G__62071,G__62072) : pred__62064.call(null,G__62071,G__62072));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quad.resizable_rect.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),(start_width + dx));
} else {
if(cljs.core.truth_((function (){var G__62073 = new cljs.core.Keyword(null,"bottom","bottom",-1550509018);
var G__62074 = expr__62065;
return (pred__62064.cljs$core$IFn$_invoke$arity$2 ? pred__62064.cljs$core$IFn$_invoke$arity$2(G__62073,G__62074) : pred__62064.call(null,G__62073,G__62074));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quad.resizable_rect.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"height","height",1025178622),(start_height + dy));
} else {
if(cljs.core.truth_((function (){var G__62075 = new cljs.core.Keyword(null,"top-left","top-left",-1396159636);
var G__62076 = expr__62065;
return (pred__62064.cljs$core$IFn$_invoke$arity$2 ? pred__62064.cljs$core$IFn$_invoke$arity$2(G__62075,G__62076) : pred__62064.call(null,G__62075,G__62076));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(quad.resizable_rect.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),(start_width - dx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),(start_height - dy),new cljs.core.Keyword(null,"x","x",2099068185),(start_x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(start_y + dy)], 0));
} else {
if(cljs.core.truth_((function (){var G__62077 = new cljs.core.Keyword(null,"top-right","top-right",284698505);
var G__62078 = expr__62065;
return (pred__62064.cljs$core$IFn$_invoke$arity$2 ? pred__62064.cljs$core$IFn$_invoke$arity$2(G__62077,G__62078) : pred__62064.call(null,G__62077,G__62078));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(quad.resizable_rect.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"height","height",1025178622),(start_height - dy),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"width","width",-384071477),(start_width + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(start_y + dy)], 0));
} else {
if(cljs.core.truth_((function (){var G__62079 = new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488);
var G__62080 = expr__62065;
return (pred__62064.cljs$core$IFn$_invoke$arity$2 ? pred__62064.cljs$core$IFn$_invoke$arity$2(G__62079,G__62080) : pred__62064.call(null,G__62079,G__62080));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(quad.resizable_rect.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),(start_width - dx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),(start_height + dy),new cljs.core.Keyword(null,"x","x",2099068185),(start_x + dx)], 0));
} else {
if(cljs.core.truth_((function (){var G__62081 = new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646);
var G__62082 = expr__62065;
return (pred__62064.cljs$core$IFn$_invoke$arity$2 ? pred__62064.cljs$core$IFn$_invoke$arity$2(G__62081,G__62082) : pred__62064.call(null,G__62081,G__62082));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(quad.resizable_rect.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"height","height",1025178622),(start_height + dy),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"width","width",-384071477),(start_width + dx)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129).cljs$core$IFn$_invoke$arity$1(callbacks))){
var G__62084 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),data], null),cljs.core.select_keys(cljs.core.deref(quad.resizable_rect.state_atom),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"width","width",-384071477)], null))], 0));
var fexpr__62083 = new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129).cljs$core$IFn$_invoke$arity$1(callbacks);
return (fexpr__62083.cljs$core$IFn$_invoke$arity$1 ? fexpr__62083.cljs$core$IFn$_invoke$arity$1(G__62084) : fexpr__62083.call(null,G__62084));
} else {
return null;
}
}
}
}
}
}
}
}
}
} else {
if(cljs.core.truth_((function (){var G__62085 = new cljs.core.Keyword(null,"on-resize-end","on-resize-end",2087563540);
var G__62086 = expr__62028;
return (pred__62027.cljs$core$IFn$_invoke$arity$2 ? pred__62027.cljs$core$IFn$_invoke$arity$2(G__62085,G__62086) : pred__62027.call(null,G__62085,G__62086));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quad.resizable_rect.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"resizing?","resizing?",1963364160),false);

if(cljs.core.truth_(new cljs.core.Keyword(null,"on-resize-end","on-resize-end",2087563540).cljs$core$IFn$_invoke$arity$1(callbacks))){
var G__62088 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),data], null),cljs.core.select_keys(cljs.core.deref(quad.resizable_rect.state_atom),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"width","width",-384071477)], null))], 0));
var fexpr__62087 = new cljs.core.Keyword(null,"on-resize-end","on-resize-end",2087563540).cljs$core$IFn$_invoke$arity$1(callbacks);
return (fexpr__62087.cljs$core$IFn$_invoke$arity$1 ? fexpr__62087.cljs$core$IFn$_invoke$arity$1(G__62088) : fexpr__62087.call(null,G__62088));
} else {
return null;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__62028)].join('')));
}
}
}
}
}
}
}
}
}
}
}));

(quad.resizable_rect.handle_event_BANG_.cljs$lang$maxFixedArity = 3);

quad.resizable_rect.resize_edge = (function quad$resizable_rect$resize_edge(var_args){
var G__62090 = arguments.length;
switch (G__62090) {
case 1:
return quad.resizable_rect.resize_edge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quad.resizable_rect.resize_edge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quad.resizable_rect.resize_edge.cljs$core$IFn$_invoke$arity$1 = (function (args){
return quad.resizable_rect.resize_edge.cljs$core$IFn$_invoke$arity$2(args,null);
}));

(quad.resizable_rect.resize_edge.cljs$core$IFn$_invoke$arity$2 = (function (p__62091,extras){
var map__62092 = p__62091;
var map__62092__$1 = (((((!((map__62092 == null))))?(((((map__62092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62092):map__62092);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62092__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62092__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62092__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62092__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62092__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62092__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var border_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62092__$1,new cljs.core.Keyword(null,"border?","border?",-775600503));
var color_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62092__$1,new cljs.core.Keyword(null,"color?","color?",-1891974356));
var style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''),new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px)"].join(''),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(color_QMARK_)?"rgba(119,119,119, 0.3)":null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor,new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,extras], 0)),new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__4185__auto__ = id;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return ["edge-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
}
})()], null)], null);
}));

(quad.resizable_rect.resize_edge.cljs$lang$maxFixedArity = 2);

quad.resizable_rect.resizable_rect = (function quad$resizable_rect$resizable_rect(p__62094){
var map__62095 = p__62094;
var map__62095__$1 = (((((!((map__62095 == null))))?(((((map__62095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62095):map__62095);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62095__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__62097 = state;
var map__62097__$1 = (((((!((map__62097 == null))))?(((((map__62097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62097):map__62097);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62097__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62097__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var edge_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62097__$1,new cljs.core.Keyword(null,"edge-width","edge-width",-1845528442));
var corner_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62097__$1,new cljs.core.Keyword(null,"corner-width","corner-width",203453099));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62097__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62097__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quad.resizable_rect.resize_edge,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),edge_width,new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"color","color",1011675173),true,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"ew-resize"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"2px solid white"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quad.resizable_rect.resize_edge,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"w","w",354169001),edge_width,new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"x","x",2099068185),((width + x) - edge_width),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"border","border",1444987323),true,new cljs.core.Keyword(null,"color","color",1011675173),true,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"ew-resize"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),"2px solid white"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quad.resizable_rect.resize_edge,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"w","w",354169001),width,new cljs.core.Keyword(null,"h","h",1109658740),edge_width,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"border","border",1444987323),true,new cljs.core.Keyword(null,"color","color",1011675173),true,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"ns-resize"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid white"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quad.resizable_rect.resize_edge,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"w","w",354169001),width,new cljs.core.Keyword(null,"h","h",1109658740),edge_width,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"border","border",1444987323),true,new cljs.core.Keyword(null,"color","color",1011675173),true,new cljs.core.Keyword(null,"y","y",-1757859776),(((height + y) - edge_width) - (2)),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"ns-resize"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"2px solid white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quad.resizable_rect.resize_edge,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"top-left","top-left",-1396159636),new cljs.core.Keyword(null,"w","w",354169001),corner_width,new cljs.core.Keyword(null,"h","h",1109658740),corner_width,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"nwse-resize"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quad.resizable_rect.resize_edge,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"top-right","top-right",284698505),new cljs.core.Keyword(null,"w","w",354169001),corner_width,new cljs.core.Keyword(null,"h","h",1109658740),corner_width,new cljs.core.Keyword(null,"x","x",2099068185),((width + x) - corner_width),new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"nesw-resize"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quad.resizable_rect.resize_edge,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488),new cljs.core.Keyword(null,"w","w",354169001),corner_width,new cljs.core.Keyword(null,"h","h",1109658740),corner_width,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),((height + y) - corner_width),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"nesw-resize"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quad.resizable_rect.resize_edge,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646),new cljs.core.Keyword(null,"w","w",354169001),corner_width,new cljs.core.Keyword(null,"h","h",1109658740),corner_width,new cljs.core.Keyword(null,"x","x",2099068185),((width + x) - corner_width),new cljs.core.Keyword(null,"y","y",-1757859776),((height + y) - corner_width),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"nwse-resize"], null)], null)], null);
});
quad.resizable_rect.rect_maker = (function quad$resizable_rect$rect_maker(p__62099){
var map__62100 = p__62099;
var map__62100__$1 = (((((!((map__62100 == null))))?(((((map__62100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62100):map__62100);
var movable_area_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62100__$1,new cljs.core.Keyword(null,"movable-area-width","movable-area-width",-823404271));
var movable_area_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62100__$1,new cljs.core.Keyword(null,"movable-area-height","movable-area-height",-1205421835));
var on_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62100__$1,new cljs.core.Keyword(null,"on-move","on-move",-1779179710));
var on_resize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62100__$1,new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(quad.resizable_rect.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"max-height","max-height",-612563804),movable_area_height,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-width","max-width",-1939924051),movable_area_width], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouse-handler","mouse-handler",-1958953119),(function (js_evt){
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(js_evt.type);
var pred__62102 = cljs.core._EQ_;
var expr__62103 = type;
if(cljs.core.truth_((function (){var G__62105 = new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874);
var G__62106 = expr__62103;
return (pred__62102.cljs$core$IFn$_invoke$arity$2 ? pred__62102.cljs$core$IFn$_invoke$arity$2(G__62105,G__62106) : pred__62102.call(null,G__62105,G__62106));
})())){
return quad.resizable_rect.handle_event_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),js_evt,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-move","on-move",-1779179710),on_move], null));
} else {
if(cljs.core.truth_((function (){var G__62107 = new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320);
var G__62108 = expr__62103;
return (pred__62102.cljs$core$IFn$_invoke$arity$2 ? pred__62102.cljs$core$IFn$_invoke$arity$2(G__62107,G__62108) : pred__62102.call(null,G__62107,G__62108));
})())){
return quad.resizable_rect.handle_event_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),js_evt);
} else {
if(cljs.core.truth_((function (){var G__62109 = new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470);
var G__62110 = expr__62103;
return (pred__62102.cljs$core$IFn$_invoke$arity$2 ? pred__62102.cljs$core$IFn$_invoke$arity$2(G__62109,G__62110) : pred__62102.call(null,G__62109,G__62110));
})())){
return quad.resizable_rect.handle_event_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),js_evt);
} else {
return null;
}
}
}
}),new cljs.core.Keyword(null,"component","component",1555936782),(function (){
var map__62111 = cljs.core.deref(quad.resizable_rect.state_atom);
var map__62111__$1 = (((((!((map__62111 == null))))?(((((map__62111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62111):map__62111);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62111__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62111__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62111__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62111__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62111__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62111__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var trigger_event = quad.resizable_rect.handle_event_BANG_;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_height),"px"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_width),"px"].join('')], null),new cljs.core.Keyword(null,"id","id",-1388402092),"overlay",new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function (e){
var G__62113 = new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874);
var G__62114 = e;
var G__62115 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-move","on-move",-1779179710),on_move], null);
return (trigger_event.cljs$core$IFn$_invoke$arity$3 ? trigger_event.cljs$core$IFn$_invoke$arity$3(G__62113,G__62114,G__62115) : trigger_event.call(null,G__62113,G__62114,G__62115));
}),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (e){
var G__62116 = new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320);
var G__62117 = e;
return (trigger_event.cljs$core$IFn$_invoke$arity$2 ? trigger_event.cljs$core$IFn$_invoke$arity$2(G__62116,G__62117) : trigger_event.call(null,G__62116,G__62117));
}),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
var G__62118 = new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470);
var G__62119 = e;
return (trigger_event.cljs$core$IFn$_invoke$arity$2 ? trigger_event.cljs$core$IFn$_invoke$arity$2(G__62118,G__62119) : trigger_event.call(null,G__62118,G__62119));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"user-select","user-select",-346451650),new cljs.core.Keyword(null,"height","height",1025178622)],[["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px)"].join(''),"rgb(119, 119, 119)",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''),"move",0.3,"inline-block","absolute","none",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join('')]),new cljs.core.Keyword(null,"id","id",-1388402092),"movable-rect"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quad.resizable_rect.resizable_rect,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref(quad.resizable_rect.state_atom)], null)], null)], null)], null);
})], null);
});

//# sourceMappingURL=quad.resizable_rect.js.map
