goog.provide('reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__36649 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__36650 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__36650);

try{var G__36652 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__36653 = container;
var G__36654 = (function (){
var _STAR_always_update_STAR__orig_val__36655 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__36656 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__36656);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__36655);
}});
return module$node_modules$react_dom$index.render(G__36652,G__36653,G__36654);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__36649);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__36666 = arguments.length;
switch (G__36666) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__36670 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36670,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36670,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__36684_36712 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__36685_36713 = null;
var count__36686_36714 = (0);
var i__36687_36715 = (0);
while(true){
if((i__36687_36715 < count__36686_36714)){
var vec__36694_36716 = chunk__36685_36713.cljs$core$IIndexed$_nth$arity$2(null,i__36687_36715);
var container_36717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36694_36716,(0),null);
var comp_36718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36694_36716,(1),null);
reagent.dom.re_render_component(comp_36718,container_36717);


var G__36720 = seq__36684_36712;
var G__36721 = chunk__36685_36713;
var G__36722 = count__36686_36714;
var G__36723 = (i__36687_36715 + (1));
seq__36684_36712 = G__36720;
chunk__36685_36713 = G__36721;
count__36686_36714 = G__36722;
i__36687_36715 = G__36723;
continue;
} else {
var temp__5735__auto___36724 = cljs.core.seq(seq__36684_36712);
if(temp__5735__auto___36724){
var seq__36684_36725__$1 = temp__5735__auto___36724;
if(cljs.core.chunked_seq_QMARK_(seq__36684_36725__$1)){
var c__4609__auto___36726 = cljs.core.chunk_first(seq__36684_36725__$1);
var G__36727 = cljs.core.chunk_rest(seq__36684_36725__$1);
var G__36728 = c__4609__auto___36726;
var G__36729 = cljs.core.count(c__4609__auto___36726);
var G__36730 = (0);
seq__36684_36712 = G__36727;
chunk__36685_36713 = G__36728;
count__36686_36714 = G__36729;
i__36687_36715 = G__36730;
continue;
} else {
var vec__36699_36732 = cljs.core.first(seq__36684_36725__$1);
var container_36733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36699_36732,(0),null);
var comp_36734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36699_36732,(1),null);
reagent.dom.re_render_component(comp_36734,container_36733);


var G__36736 = cljs.core.next(seq__36684_36725__$1);
var G__36737 = null;
var G__36738 = (0);
var G__36739 = (0);
seq__36684_36712 = G__36736;
chunk__36685_36713 = G__36737;
count__36686_36714 = G__36738;
i__36687_36715 = G__36739;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
