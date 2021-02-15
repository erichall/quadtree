goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__31749 = coll;
var G__31750 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__31749,G__31750) : shadow.dom.lazy_native_coll_seq.call(null,G__31749,G__31750));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__31795 = arguments.length;
switch (G__31795) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__31804 = arguments.length;
switch (G__31804) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__31813 = arguments.length;
switch (G__31813) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__31820 = arguments.length;
switch (G__31820) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__31831 = arguments.length;
switch (G__31831) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__31842 = document;
var G__31843 = shadow.dom.dom_node(el);
return goog.dom.contains(G__31842,G__31843);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__31848 = shadow.dom.dom_node(parent);
var G__31849 = shadow.dom.dom_node(el);
return goog.dom.contains(G__31848,G__31849);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__31854 = shadow.dom.dom_node(el);
var G__31855 = cls;
return goog.dom.classlist.add(G__31854,G__31855);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__31860 = shadow.dom.dom_node(el);
var G__31861 = cls;
return goog.dom.classlist.remove(G__31860,G__31861);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__31869 = arguments.length;
switch (G__31869) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__31873 = shadow.dom.dom_node(el);
var G__31874 = cls;
return goog.dom.classlist.toggle(G__31873,G__31874);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e31881){if((e31881 instanceof Object)){
var e = e31881;
return console.log("didnt support attachEvent",el,e);
} else {
throw e31881;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__31897 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__31898 = null;
var count__31899 = (0);
var i__31900 = (0);
while(true){
if((i__31900 < count__31899)){
var el = chunk__31898.cljs$core$IIndexed$_nth$arity$2(null,i__31900);
var handler_33079__$1 = ((function (seq__31897,chunk__31898,count__31899,i__31900,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31897,chunk__31898,count__31899,i__31900,el))
;
var G__31932_33082 = el;
var G__31933_33083 = cljs.core.name(ev);
var G__31934_33084 = handler_33079__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__31932_33082,G__31933_33083,G__31934_33084) : shadow.dom.dom_listen.call(null,G__31932_33082,G__31933_33083,G__31934_33084));


var G__33090 = seq__31897;
var G__33091 = chunk__31898;
var G__33092 = count__31899;
var G__33093 = (i__31900 + (1));
seq__31897 = G__33090;
chunk__31898 = G__33091;
count__31899 = G__33092;
i__31900 = G__33093;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31897);
if(temp__5735__auto__){
var seq__31897__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31897__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__31897__$1);
var G__33094 = cljs.core.chunk_rest(seq__31897__$1);
var G__33095 = c__4609__auto__;
var G__33096 = cljs.core.count(c__4609__auto__);
var G__33097 = (0);
seq__31897 = G__33094;
chunk__31898 = G__33095;
count__31899 = G__33096;
i__31900 = G__33097;
continue;
} else {
var el = cljs.core.first(seq__31897__$1);
var handler_33099__$1 = ((function (seq__31897,chunk__31898,count__31899,i__31900,el,seq__31897__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__31897,chunk__31898,count__31899,i__31900,el,seq__31897__$1,temp__5735__auto__))
;
var G__31941_33102 = el;
var G__31942_33103 = cljs.core.name(ev);
var G__31943_33104 = handler_33099__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__31941_33102,G__31942_33103,G__31943_33104) : shadow.dom.dom_listen.call(null,G__31941_33102,G__31942_33103,G__31943_33104));


var G__33107 = cljs.core.next(seq__31897__$1);
var G__33108 = null;
var G__33109 = (0);
var G__33110 = (0);
seq__31897 = G__33107;
chunk__31898 = G__33108;
count__31899 = G__33109;
i__31900 = G__33110;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__31952 = arguments.length;
switch (G__31952) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__31958 = shadow.dom.dom_node(el);
var G__31959 = cljs.core.name(ev);
var G__31960 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__31958,G__31959,G__31960) : shadow.dom.dom_listen.call(null,G__31958,G__31959,G__31960));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__31966 = shadow.dom.dom_node(el);
var G__31967 = cljs.core.name(ev);
var G__31968 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__31966,G__31967,G__31968) : shadow.dom.dom_listen_remove.call(null,G__31966,G__31967,G__31968));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__31970 = cljs.core.seq(events);
var chunk__31971 = null;
var count__31972 = (0);
var i__31973 = (0);
while(true){
if((i__31973 < count__31972)){
var vec__31998 = chunk__31971.cljs$core$IIndexed$_nth$arity$2(null,i__31973);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31998,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31998,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33128 = seq__31970;
var G__33129 = chunk__31971;
var G__33130 = count__31972;
var G__33131 = (i__31973 + (1));
seq__31970 = G__33128;
chunk__31971 = G__33129;
count__31972 = G__33130;
i__31973 = G__33131;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31970);
if(temp__5735__auto__){
var seq__31970__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31970__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__31970__$1);
var G__33134 = cljs.core.chunk_rest(seq__31970__$1);
var G__33135 = c__4609__auto__;
var G__33136 = cljs.core.count(c__4609__auto__);
var G__33137 = (0);
seq__31970 = G__33134;
chunk__31971 = G__33135;
count__31972 = G__33136;
i__31973 = G__33137;
continue;
} else {
var vec__32009 = cljs.core.first(seq__31970__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32009,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32009,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33140 = cljs.core.next(seq__31970__$1);
var G__33141 = null;
var G__33142 = (0);
var G__33143 = (0);
seq__31970 = G__33140;
chunk__31971 = G__33141;
count__31972 = G__33142;
i__31973 = G__33143;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32019 = cljs.core.seq(styles);
var chunk__32020 = null;
var count__32021 = (0);
var i__32022 = (0);
while(true){
if((i__32022 < count__32021)){
var vec__32051 = chunk__32020.cljs$core$IIndexed$_nth$arity$2(null,i__32022);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32051,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32051,(1),null);
var G__32056_33150 = dom;
var G__32057_33151 = cljs.core.name(k);
var G__32058_33152 = (((v == null))?"":v);
goog.style.setStyle(G__32056_33150,G__32057_33151,G__32058_33152);


var G__33154 = seq__32019;
var G__33155 = chunk__32020;
var G__33156 = count__32021;
var G__33157 = (i__32022 + (1));
seq__32019 = G__33154;
chunk__32020 = G__33155;
count__32021 = G__33156;
i__32022 = G__33157;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32019);
if(temp__5735__auto__){
var seq__32019__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32019__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32019__$1);
var G__33168 = cljs.core.chunk_rest(seq__32019__$1);
var G__33169 = c__4609__auto__;
var G__33170 = cljs.core.count(c__4609__auto__);
var G__33171 = (0);
seq__32019 = G__33168;
chunk__32020 = G__33169;
count__32021 = G__33170;
i__32022 = G__33171;
continue;
} else {
var vec__32071 = cljs.core.first(seq__32019__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32071,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32071,(1),null);
var G__32077_33175 = dom;
var G__32078_33176 = cljs.core.name(k);
var G__32079_33177 = (((v == null))?"":v);
goog.style.setStyle(G__32077_33175,G__32078_33176,G__32079_33177);


var G__33179 = cljs.core.next(seq__32019__$1);
var G__33180 = null;
var G__33181 = (0);
var G__33182 = (0);
seq__32019 = G__33179;
chunk__32020 = G__33180;
count__32021 = G__33181;
i__32022 = G__33182;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32093_33188 = key;
var G__32093_33189__$1 = (((G__32093_33188 instanceof cljs.core.Keyword))?G__32093_33188.fqn:null);
switch (G__32093_33189__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33209 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_33209,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_33209,"aria-");
}
})())){
el.setAttribute(ks_33209,value);
} else {
(el[ks_33209] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__32144 = shadow.dom.dom_node(el);
var G__32145 = cls;
return goog.dom.classlist.contains(G__32144,G__32145);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32172){
var map__32173 = p__32172;
var map__32173__$1 = (((((!((map__32173 == null))))?(((((map__32173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32173):map__32173);
var props = map__32173__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32173__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32181 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32181,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32181,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32181,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32186 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32186,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32186;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32195 = arguments.length;
switch (G__32195) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32216){
var vec__32219 = p__32216;
var seq__32220 = cljs.core.seq(vec__32219);
var first__32221 = cljs.core.first(seq__32220);
var seq__32220__$1 = cljs.core.next(seq__32220);
var nn = first__32221;
var first__32221__$1 = cljs.core.first(seq__32220__$1);
var seq__32220__$2 = cljs.core.next(seq__32220__$1);
var np = first__32221__$1;
var nc = seq__32220__$2;
var node = vec__32219;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32234 = nn;
var G__32235 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32234,G__32235) : create_fn.call(null,G__32234,G__32235));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32239 = nn;
var G__32240 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32239,G__32240) : create_fn.call(null,G__32239,G__32240));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32254 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32254,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32254,(1),null);
var seq__32258_33258 = cljs.core.seq(node_children);
var chunk__32259_33259 = null;
var count__32260_33260 = (0);
var i__32261_33261 = (0);
while(true){
if((i__32261_33261 < count__32260_33260)){
var child_struct_33263 = chunk__32259_33259.cljs$core$IIndexed$_nth$arity$2(null,i__32261_33261);
var children_33269 = shadow.dom.dom_node(child_struct_33263);
if(cljs.core.seq_QMARK_(children_33269)){
var seq__32322_33271 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33269));
var chunk__32324_33272 = null;
var count__32325_33273 = (0);
var i__32326_33274 = (0);
while(true){
if((i__32326_33274 < count__32325_33273)){
var child_33275 = chunk__32324_33272.cljs$core$IIndexed$_nth$arity$2(null,i__32326_33274);
if(cljs.core.truth_(child_33275)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33275);


var G__33279 = seq__32322_33271;
var G__33280 = chunk__32324_33272;
var G__33281 = count__32325_33273;
var G__33282 = (i__32326_33274 + (1));
seq__32322_33271 = G__33279;
chunk__32324_33272 = G__33280;
count__32325_33273 = G__33281;
i__32326_33274 = G__33282;
continue;
} else {
var G__33283 = seq__32322_33271;
var G__33284 = chunk__32324_33272;
var G__33285 = count__32325_33273;
var G__33286 = (i__32326_33274 + (1));
seq__32322_33271 = G__33283;
chunk__32324_33272 = G__33284;
count__32325_33273 = G__33285;
i__32326_33274 = G__33286;
continue;
}
} else {
var temp__5735__auto___33287 = cljs.core.seq(seq__32322_33271);
if(temp__5735__auto___33287){
var seq__32322_33288__$1 = temp__5735__auto___33287;
if(cljs.core.chunked_seq_QMARK_(seq__32322_33288__$1)){
var c__4609__auto___33289 = cljs.core.chunk_first(seq__32322_33288__$1);
var G__33290 = cljs.core.chunk_rest(seq__32322_33288__$1);
var G__33291 = c__4609__auto___33289;
var G__33292 = cljs.core.count(c__4609__auto___33289);
var G__33293 = (0);
seq__32322_33271 = G__33290;
chunk__32324_33272 = G__33291;
count__32325_33273 = G__33292;
i__32326_33274 = G__33293;
continue;
} else {
var child_33297 = cljs.core.first(seq__32322_33288__$1);
if(cljs.core.truth_(child_33297)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33297);


var G__33298 = cljs.core.next(seq__32322_33288__$1);
var G__33299 = null;
var G__33300 = (0);
var G__33301 = (0);
seq__32322_33271 = G__33298;
chunk__32324_33272 = G__33299;
count__32325_33273 = G__33300;
i__32326_33274 = G__33301;
continue;
} else {
var G__33302 = cljs.core.next(seq__32322_33288__$1);
var G__33303 = null;
var G__33304 = (0);
var G__33305 = (0);
seq__32322_33271 = G__33302;
chunk__32324_33272 = G__33303;
count__32325_33273 = G__33304;
i__32326_33274 = G__33305;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33269);
}


var G__33307 = seq__32258_33258;
var G__33309 = chunk__32259_33259;
var G__33310 = count__32260_33260;
var G__33311 = (i__32261_33261 + (1));
seq__32258_33258 = G__33307;
chunk__32259_33259 = G__33309;
count__32260_33260 = G__33310;
i__32261_33261 = G__33311;
continue;
} else {
var temp__5735__auto___33313 = cljs.core.seq(seq__32258_33258);
if(temp__5735__auto___33313){
var seq__32258_33314__$1 = temp__5735__auto___33313;
if(cljs.core.chunked_seq_QMARK_(seq__32258_33314__$1)){
var c__4609__auto___33315 = cljs.core.chunk_first(seq__32258_33314__$1);
var G__33316 = cljs.core.chunk_rest(seq__32258_33314__$1);
var G__33317 = c__4609__auto___33315;
var G__33318 = cljs.core.count(c__4609__auto___33315);
var G__33319 = (0);
seq__32258_33258 = G__33316;
chunk__32259_33259 = G__33317;
count__32260_33260 = G__33318;
i__32261_33261 = G__33319;
continue;
} else {
var child_struct_33329 = cljs.core.first(seq__32258_33314__$1);
var children_33332 = shadow.dom.dom_node(child_struct_33329);
if(cljs.core.seq_QMARK_(children_33332)){
var seq__32337_33334 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33332));
var chunk__32339_33335 = null;
var count__32340_33336 = (0);
var i__32341_33337 = (0);
while(true){
if((i__32341_33337 < count__32340_33336)){
var child_33344 = chunk__32339_33335.cljs$core$IIndexed$_nth$arity$2(null,i__32341_33337);
if(cljs.core.truth_(child_33344)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33344);


var G__33350 = seq__32337_33334;
var G__33351 = chunk__32339_33335;
var G__33352 = count__32340_33336;
var G__33353 = (i__32341_33337 + (1));
seq__32337_33334 = G__33350;
chunk__32339_33335 = G__33351;
count__32340_33336 = G__33352;
i__32341_33337 = G__33353;
continue;
} else {
var G__33358 = seq__32337_33334;
var G__33359 = chunk__32339_33335;
var G__33360 = count__32340_33336;
var G__33361 = (i__32341_33337 + (1));
seq__32337_33334 = G__33358;
chunk__32339_33335 = G__33359;
count__32340_33336 = G__33360;
i__32341_33337 = G__33361;
continue;
}
} else {
var temp__5735__auto___33362__$1 = cljs.core.seq(seq__32337_33334);
if(temp__5735__auto___33362__$1){
var seq__32337_33365__$1 = temp__5735__auto___33362__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32337_33365__$1)){
var c__4609__auto___33366 = cljs.core.chunk_first(seq__32337_33365__$1);
var G__33369 = cljs.core.chunk_rest(seq__32337_33365__$1);
var G__33370 = c__4609__auto___33366;
var G__33371 = cljs.core.count(c__4609__auto___33366);
var G__33372 = (0);
seq__32337_33334 = G__33369;
chunk__32339_33335 = G__33370;
count__32340_33336 = G__33371;
i__32341_33337 = G__33372;
continue;
} else {
var child_33380 = cljs.core.first(seq__32337_33365__$1);
if(cljs.core.truth_(child_33380)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33380);


var G__33388 = cljs.core.next(seq__32337_33365__$1);
var G__33389 = null;
var G__33390 = (0);
var G__33391 = (0);
seq__32337_33334 = G__33388;
chunk__32339_33335 = G__33389;
count__32340_33336 = G__33390;
i__32341_33337 = G__33391;
continue;
} else {
var G__33393 = cljs.core.next(seq__32337_33365__$1);
var G__33394 = null;
var G__33395 = (0);
var G__33396 = (0);
seq__32337_33334 = G__33393;
chunk__32339_33335 = G__33394;
count__32340_33336 = G__33395;
i__32341_33337 = G__33396;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33332);
}


var G__33398 = cljs.core.next(seq__32258_33314__$1);
var G__33399 = null;
var G__33400 = (0);
var G__33401 = (0);
seq__32258_33258 = G__33398;
chunk__32259_33259 = G__33399;
count__32260_33260 = G__33400;
i__32261_33261 = G__33401;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__32391 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__32391);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32399 = cljs.core.seq(node);
var chunk__32400 = null;
var count__32401 = (0);
var i__32402 = (0);
while(true){
if((i__32402 < count__32401)){
var n = chunk__32400.cljs$core$IIndexed$_nth$arity$2(null,i__32402);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33418 = seq__32399;
var G__33419 = chunk__32400;
var G__33420 = count__32401;
var G__33421 = (i__32402 + (1));
seq__32399 = G__33418;
chunk__32400 = G__33419;
count__32401 = G__33420;
i__32402 = G__33421;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32399);
if(temp__5735__auto__){
var seq__32399__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32399__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32399__$1);
var G__33432 = cljs.core.chunk_rest(seq__32399__$1);
var G__33433 = c__4609__auto__;
var G__33434 = cljs.core.count(c__4609__auto__);
var G__33435 = (0);
seq__32399 = G__33432;
chunk__32400 = G__33433;
count__32401 = G__33434;
i__32402 = G__33435;
continue;
} else {
var n = cljs.core.first(seq__32399__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33443 = cljs.core.next(seq__32399__$1);
var G__33445 = null;
var G__33447 = (0);
var G__33448 = (0);
seq__32399 = G__33443;
chunk__32400 = G__33445;
count__32401 = G__33447;
i__32402 = G__33448;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__32413 = shadow.dom.dom_node(new$);
var G__32414 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__32413,G__32414);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32417 = arguments.length;
switch (G__32417) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32423 = arguments.length;
switch (G__32423) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32425 = arguments.length;
switch (G__32425) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33513 = arguments.length;
var i__4790__auto___33514 = (0);
while(true){
if((i__4790__auto___33514 < len__4789__auto___33513)){
args__4795__auto__.push((arguments[i__4790__auto___33514]));

var G__33518 = (i__4790__auto___33514 + (1));
i__4790__auto___33514 = G__33518;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32446_33524 = cljs.core.seq(nodes);
var chunk__32447_33525 = null;
var count__32448_33526 = (0);
var i__32449_33527 = (0);
while(true){
if((i__32449_33527 < count__32448_33526)){
var node_33530 = chunk__32447_33525.cljs$core$IIndexed$_nth$arity$2(null,i__32449_33527);
fragment.appendChild(shadow.dom._to_dom(node_33530));


var G__33531 = seq__32446_33524;
var G__33532 = chunk__32447_33525;
var G__33533 = count__32448_33526;
var G__33534 = (i__32449_33527 + (1));
seq__32446_33524 = G__33531;
chunk__32447_33525 = G__33532;
count__32448_33526 = G__33533;
i__32449_33527 = G__33534;
continue;
} else {
var temp__5735__auto___33536 = cljs.core.seq(seq__32446_33524);
if(temp__5735__auto___33536){
var seq__32446_33537__$1 = temp__5735__auto___33536;
if(cljs.core.chunked_seq_QMARK_(seq__32446_33537__$1)){
var c__4609__auto___33539 = cljs.core.chunk_first(seq__32446_33537__$1);
var G__33541 = cljs.core.chunk_rest(seq__32446_33537__$1);
var G__33542 = c__4609__auto___33539;
var G__33543 = cljs.core.count(c__4609__auto___33539);
var G__33544 = (0);
seq__32446_33524 = G__33541;
chunk__32447_33525 = G__33542;
count__32448_33526 = G__33543;
i__32449_33527 = G__33544;
continue;
} else {
var node_33545 = cljs.core.first(seq__32446_33537__$1);
fragment.appendChild(shadow.dom._to_dom(node_33545));


var G__33546 = cljs.core.next(seq__32446_33537__$1);
var G__33547 = null;
var G__33548 = (0);
var G__33549 = (0);
seq__32446_33524 = G__33546;
chunk__32447_33525 = G__33547;
count__32448_33526 = G__33548;
i__32449_33527 = G__33549;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32437){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32437));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32460_33558 = cljs.core.seq(scripts);
var chunk__32461_33559 = null;
var count__32462_33560 = (0);
var i__32463_33561 = (0);
while(true){
if((i__32463_33561 < count__32462_33560)){
var vec__32476_33562 = chunk__32461_33559.cljs$core$IIndexed$_nth$arity$2(null,i__32463_33561);
var script_tag_33563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32476_33562,(0),null);
var script_body_33564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32476_33562,(1),null);
eval(script_body_33564);


var G__33566 = seq__32460_33558;
var G__33567 = chunk__32461_33559;
var G__33568 = count__32462_33560;
var G__33569 = (i__32463_33561 + (1));
seq__32460_33558 = G__33566;
chunk__32461_33559 = G__33567;
count__32462_33560 = G__33568;
i__32463_33561 = G__33569;
continue;
} else {
var temp__5735__auto___33575 = cljs.core.seq(seq__32460_33558);
if(temp__5735__auto___33575){
var seq__32460_33576__$1 = temp__5735__auto___33575;
if(cljs.core.chunked_seq_QMARK_(seq__32460_33576__$1)){
var c__4609__auto___33577 = cljs.core.chunk_first(seq__32460_33576__$1);
var G__33578 = cljs.core.chunk_rest(seq__32460_33576__$1);
var G__33579 = c__4609__auto___33577;
var G__33580 = cljs.core.count(c__4609__auto___33577);
var G__33581 = (0);
seq__32460_33558 = G__33578;
chunk__32461_33559 = G__33579;
count__32462_33560 = G__33580;
i__32463_33561 = G__33581;
continue;
} else {
var vec__32485_33583 = cljs.core.first(seq__32460_33576__$1);
var script_tag_33584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32485_33583,(0),null);
var script_body_33585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32485_33583,(1),null);
eval(script_body_33585);


var G__33589 = cljs.core.next(seq__32460_33576__$1);
var G__33590 = null;
var G__33591 = (0);
var G__33592 = (0);
seq__32460_33558 = G__33589;
chunk__32461_33559 = G__33590;
count__32462_33560 = G__33591;
i__32463_33561 = G__33592;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32500){
var vec__32502 = p__32500;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32502,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32502,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__32520 = shadow.dom.dom_node(el);
var G__32521 = cls;
return goog.dom.getAncestorByClass(G__32520,G__32521);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32530 = arguments.length;
switch (G__32530) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__32536 = shadow.dom.dom_node(el);
var G__32537 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__32536,G__32537);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__32538 = shadow.dom.dom_node(el);
var G__32539 = cljs.core.name(tag);
var G__32540 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__32538,G__32539,G__32540);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__32542 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__32542);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__32546 = shadow.dom.dom_node(dom);
var G__32547 = value;
return goog.dom.forms.setValue(G__32546,G__32547);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32557 = cljs.core.seq(style_keys);
var chunk__32558 = null;
var count__32559 = (0);
var i__32560 = (0);
while(true){
if((i__32560 < count__32559)){
var it = chunk__32558.cljs$core$IIndexed$_nth$arity$2(null,i__32560);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33643 = seq__32557;
var G__33644 = chunk__32558;
var G__33645 = count__32559;
var G__33646 = (i__32560 + (1));
seq__32557 = G__33643;
chunk__32558 = G__33644;
count__32559 = G__33645;
i__32560 = G__33646;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32557);
if(temp__5735__auto__){
var seq__32557__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32557__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32557__$1);
var G__33649 = cljs.core.chunk_rest(seq__32557__$1);
var G__33650 = c__4609__auto__;
var G__33651 = cljs.core.count(c__4609__auto__);
var G__33652 = (0);
seq__32557 = G__33649;
chunk__32558 = G__33650;
count__32559 = G__33651;
i__32560 = G__33652;
continue;
} else {
var it = cljs.core.first(seq__32557__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33654 = cljs.core.next(seq__32557__$1);
var G__33655 = null;
var G__33656 = (0);
var G__33657 = (0);
seq__32557 = G__33654;
chunk__32558 = G__33655;
count__32559 = G__33656;
i__32560 = G__33657;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32571,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32581 = k32571;
var G__32581__$1 = (((G__32581 instanceof cljs.core.Keyword))?G__32581.fqn:null);
switch (G__32581__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32571,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32584){
var vec__32585 = p__32584;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32585,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32585,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32570){
var self__ = this;
var G__32570__$1 = this;
return (new cljs.core.RecordIter((0),G__32570__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__32608 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__32608(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32572,other32573){
var self__ = this;
var this32572__$1 = this;
return (((!((other32573 == null)))) && ((this32572__$1.constructor === other32573.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32572__$1.x,other32573.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32572__$1.y,other32573.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32572__$1.__extmap,other32573.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32570){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32621 = cljs.core.keyword_identical_QMARK_;
var expr__32622 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__32624 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__32625 = expr__32622;
return (pred__32621.cljs$core$IFn$_invoke$arity$2 ? pred__32621.cljs$core$IFn$_invoke$arity$2(G__32624,G__32625) : pred__32621.call(null,G__32624,G__32625));
})())){
return (new shadow.dom.Coordinate(G__32570,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32627 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__32628 = expr__32622;
return (pred__32621.cljs$core$IFn$_invoke$arity$2 ? pred__32621.cljs$core$IFn$_invoke$arity$2(G__32627,G__32628) : pred__32621.call(null,G__32627,G__32628));
})())){
return (new shadow.dom.Coordinate(self__.x,G__32570,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32570),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32570){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32570,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32577){
var extmap__4478__auto__ = (function (){var G__32641 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32577,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32577)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32641);
} else {
return G__32641;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32577),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32577),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__32646 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__32646);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__32649 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__32649);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__32656 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__32656);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32660,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32673 = k32660;
var G__32673__$1 = (((G__32673 instanceof cljs.core.Keyword))?G__32673.fqn:null);
switch (G__32673__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32660,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32674){
var vec__32675 = p__32674;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32675,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32675,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32659){
var self__ = this;
var G__32659__$1 = this;
return (new cljs.core.RecordIter((0),G__32659__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__32682 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__32682(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32661,other32662){
var self__ = this;
var this32661__$1 = this;
return (((!((other32662 == null)))) && ((this32661__$1.constructor === other32662.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32661__$1.w,other32662.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32661__$1.h,other32662.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32661__$1.__extmap,other32662.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32659){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32687 = cljs.core.keyword_identical_QMARK_;
var expr__32688 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__32690 = new cljs.core.Keyword(null,"w","w",354169001);
var G__32691 = expr__32688;
return (pred__32687.cljs$core$IFn$_invoke$arity$2 ? pred__32687.cljs$core$IFn$_invoke$arity$2(G__32690,G__32691) : pred__32687.call(null,G__32690,G__32691));
})())){
return (new shadow.dom.Size(G__32659,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32692 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__32693 = expr__32688;
return (pred__32687.cljs$core$IFn$_invoke$arity$2 ? pred__32687.cljs$core$IFn$_invoke$arity$2(G__32692,G__32693) : pred__32687.call(null,G__32692,G__32693));
})())){
return (new shadow.dom.Size(self__.w,G__32659,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32659),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32659){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32659,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32665){
var extmap__4478__auto__ = (function (){var G__32714 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32665,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32665)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32714);
} else {
return G__32714;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32665),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32665),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__32718 = shadow.dom.dom_node(el);
return goog.style.getSize(G__32718);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__33869 = (i + (1));
var G__33870 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33869;
ret = G__33870;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32736){
var vec__32737 = p__32736;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32737,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32737,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32741 = arguments.length;
switch (G__32741) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__32745_33895 = new_node;
var G__32746_33896 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__32745_33895,G__32746_33896);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__32749_33901 = new_node;
var G__32750_33902 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__32749_33901,G__32750_33902);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33910 = ps;
var G__33911 = (i + (1));
el__$1 = G__33910;
i = G__33911;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__32755 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__32755);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__32765 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__32765);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__32767 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__32767);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32771 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32771,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32771,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32771,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32778_33935 = cljs.core.seq(props);
var chunk__32779_33936 = null;
var count__32780_33937 = (0);
var i__32781_33938 = (0);
while(true){
if((i__32781_33938 < count__32780_33937)){
var vec__32793_33942 = chunk__32779_33936.cljs$core$IIndexed$_nth$arity$2(null,i__32781_33938);
var k_33943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32793_33942,(0),null);
var v_33944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32793_33942,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33943);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33943),v_33944);


var G__33951 = seq__32778_33935;
var G__33952 = chunk__32779_33936;
var G__33953 = count__32780_33937;
var G__33954 = (i__32781_33938 + (1));
seq__32778_33935 = G__33951;
chunk__32779_33936 = G__33952;
count__32780_33937 = G__33953;
i__32781_33938 = G__33954;
continue;
} else {
var temp__5735__auto___33956 = cljs.core.seq(seq__32778_33935);
if(temp__5735__auto___33956){
var seq__32778_33957__$1 = temp__5735__auto___33956;
if(cljs.core.chunked_seq_QMARK_(seq__32778_33957__$1)){
var c__4609__auto___33959 = cljs.core.chunk_first(seq__32778_33957__$1);
var G__33960 = cljs.core.chunk_rest(seq__32778_33957__$1);
var G__33961 = c__4609__auto___33959;
var G__33962 = cljs.core.count(c__4609__auto___33959);
var G__33963 = (0);
seq__32778_33935 = G__33960;
chunk__32779_33936 = G__33961;
count__32780_33937 = G__33962;
i__32781_33938 = G__33963;
continue;
} else {
var vec__32798_33970 = cljs.core.first(seq__32778_33957__$1);
var k_33971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32798_33970,(0),null);
var v_33972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32798_33970,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33971);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33971),v_33972);


var G__33986 = cljs.core.next(seq__32778_33957__$1);
var G__33987 = null;
var G__33988 = (0);
var G__33989 = (0);
seq__32778_33935 = G__33986;
chunk__32779_33936 = G__33987;
count__32780_33937 = G__33988;
i__32781_33938 = G__33989;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__32815 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32815,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32815,(1),null);
var seq__32824_34000 = cljs.core.seq(node_children);
var chunk__32826_34001 = null;
var count__32827_34002 = (0);
var i__32828_34003 = (0);
while(true){
if((i__32828_34003 < count__32827_34002)){
var child_struct_34004 = chunk__32826_34001.cljs$core$IIndexed$_nth$arity$2(null,i__32828_34003);
if((!((child_struct_34004 == null)))){
if(typeof child_struct_34004 === 'string'){
var text_34008 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34008),child_struct_34004].join(''));
} else {
var children_34010 = shadow.dom.svg_node(child_struct_34004);
if(cljs.core.seq_QMARK_(children_34010)){
var seq__32913_34011 = cljs.core.seq(children_34010);
var chunk__32915_34012 = null;
var count__32916_34013 = (0);
var i__32917_34014 = (0);
while(true){
if((i__32917_34014 < count__32916_34013)){
var child_34022 = chunk__32915_34012.cljs$core$IIndexed$_nth$arity$2(null,i__32917_34014);
if(cljs.core.truth_(child_34022)){
node.appendChild(child_34022);


var G__34023 = seq__32913_34011;
var G__34024 = chunk__32915_34012;
var G__34025 = count__32916_34013;
var G__34026 = (i__32917_34014 + (1));
seq__32913_34011 = G__34023;
chunk__32915_34012 = G__34024;
count__32916_34013 = G__34025;
i__32917_34014 = G__34026;
continue;
} else {
var G__34027 = seq__32913_34011;
var G__34028 = chunk__32915_34012;
var G__34029 = count__32916_34013;
var G__34030 = (i__32917_34014 + (1));
seq__32913_34011 = G__34027;
chunk__32915_34012 = G__34028;
count__32916_34013 = G__34029;
i__32917_34014 = G__34030;
continue;
}
} else {
var temp__5735__auto___34032 = cljs.core.seq(seq__32913_34011);
if(temp__5735__auto___34032){
var seq__32913_34035__$1 = temp__5735__auto___34032;
if(cljs.core.chunked_seq_QMARK_(seq__32913_34035__$1)){
var c__4609__auto___34036 = cljs.core.chunk_first(seq__32913_34035__$1);
var G__34037 = cljs.core.chunk_rest(seq__32913_34035__$1);
var G__34038 = c__4609__auto___34036;
var G__34039 = cljs.core.count(c__4609__auto___34036);
var G__34040 = (0);
seq__32913_34011 = G__34037;
chunk__32915_34012 = G__34038;
count__32916_34013 = G__34039;
i__32917_34014 = G__34040;
continue;
} else {
var child_34041 = cljs.core.first(seq__32913_34035__$1);
if(cljs.core.truth_(child_34041)){
node.appendChild(child_34041);


var G__34043 = cljs.core.next(seq__32913_34035__$1);
var G__34044 = null;
var G__34045 = (0);
var G__34046 = (0);
seq__32913_34011 = G__34043;
chunk__32915_34012 = G__34044;
count__32916_34013 = G__34045;
i__32917_34014 = G__34046;
continue;
} else {
var G__34047 = cljs.core.next(seq__32913_34035__$1);
var G__34048 = null;
var G__34049 = (0);
var G__34050 = (0);
seq__32913_34011 = G__34047;
chunk__32915_34012 = G__34048;
count__32916_34013 = G__34049;
i__32917_34014 = G__34050;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34010);
}
}


var G__34057 = seq__32824_34000;
var G__34058 = chunk__32826_34001;
var G__34059 = count__32827_34002;
var G__34060 = (i__32828_34003 + (1));
seq__32824_34000 = G__34057;
chunk__32826_34001 = G__34058;
count__32827_34002 = G__34059;
i__32828_34003 = G__34060;
continue;
} else {
var G__34064 = seq__32824_34000;
var G__34065 = chunk__32826_34001;
var G__34066 = count__32827_34002;
var G__34067 = (i__32828_34003 + (1));
seq__32824_34000 = G__34064;
chunk__32826_34001 = G__34065;
count__32827_34002 = G__34066;
i__32828_34003 = G__34067;
continue;
}
} else {
var temp__5735__auto___34068 = cljs.core.seq(seq__32824_34000);
if(temp__5735__auto___34068){
var seq__32824_34069__$1 = temp__5735__auto___34068;
if(cljs.core.chunked_seq_QMARK_(seq__32824_34069__$1)){
var c__4609__auto___34070 = cljs.core.chunk_first(seq__32824_34069__$1);
var G__34072 = cljs.core.chunk_rest(seq__32824_34069__$1);
var G__34073 = c__4609__auto___34070;
var G__34074 = cljs.core.count(c__4609__auto___34070);
var G__34075 = (0);
seq__32824_34000 = G__34072;
chunk__32826_34001 = G__34073;
count__32827_34002 = G__34074;
i__32828_34003 = G__34075;
continue;
} else {
var child_struct_34080 = cljs.core.first(seq__32824_34069__$1);
if((!((child_struct_34080 == null)))){
if(typeof child_struct_34080 === 'string'){
var text_34081 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34081),child_struct_34080].join(''));
} else {
var children_34082 = shadow.dom.svg_node(child_struct_34080);
if(cljs.core.seq_QMARK_(children_34082)){
var seq__32922_34084 = cljs.core.seq(children_34082);
var chunk__32924_34085 = null;
var count__32925_34086 = (0);
var i__32926_34087 = (0);
while(true){
if((i__32926_34087 < count__32925_34086)){
var child_34088 = chunk__32924_34085.cljs$core$IIndexed$_nth$arity$2(null,i__32926_34087);
if(cljs.core.truth_(child_34088)){
node.appendChild(child_34088);


var G__34089 = seq__32922_34084;
var G__34090 = chunk__32924_34085;
var G__34091 = count__32925_34086;
var G__34092 = (i__32926_34087 + (1));
seq__32922_34084 = G__34089;
chunk__32924_34085 = G__34090;
count__32925_34086 = G__34091;
i__32926_34087 = G__34092;
continue;
} else {
var G__34095 = seq__32922_34084;
var G__34096 = chunk__32924_34085;
var G__34097 = count__32925_34086;
var G__34098 = (i__32926_34087 + (1));
seq__32922_34084 = G__34095;
chunk__32924_34085 = G__34096;
count__32925_34086 = G__34097;
i__32926_34087 = G__34098;
continue;
}
} else {
var temp__5735__auto___34100__$1 = cljs.core.seq(seq__32922_34084);
if(temp__5735__auto___34100__$1){
var seq__32922_34101__$1 = temp__5735__auto___34100__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32922_34101__$1)){
var c__4609__auto___34102 = cljs.core.chunk_first(seq__32922_34101__$1);
var G__34105 = cljs.core.chunk_rest(seq__32922_34101__$1);
var G__34106 = c__4609__auto___34102;
var G__34107 = cljs.core.count(c__4609__auto___34102);
var G__34108 = (0);
seq__32922_34084 = G__34105;
chunk__32924_34085 = G__34106;
count__32925_34086 = G__34107;
i__32926_34087 = G__34108;
continue;
} else {
var child_34109 = cljs.core.first(seq__32922_34101__$1);
if(cljs.core.truth_(child_34109)){
node.appendChild(child_34109);


var G__34110 = cljs.core.next(seq__32922_34101__$1);
var G__34111 = null;
var G__34112 = (0);
var G__34113 = (0);
seq__32922_34084 = G__34110;
chunk__32924_34085 = G__34111;
count__32925_34086 = G__34112;
i__32926_34087 = G__34113;
continue;
} else {
var G__34115 = cljs.core.next(seq__32922_34101__$1);
var G__34116 = null;
var G__34117 = (0);
var G__34118 = (0);
seq__32922_34084 = G__34115;
chunk__32924_34085 = G__34116;
count__32925_34086 = G__34117;
i__32926_34087 = G__34118;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34082);
}
}


var G__34120 = cljs.core.next(seq__32824_34069__$1);
var G__34121 = null;
var G__34122 = (0);
var G__34123 = (0);
seq__32824_34000 = G__34120;
chunk__32826_34001 = G__34121;
count__32827_34002 = G__34122;
i__32828_34003 = G__34123;
continue;
} else {
var G__34125 = cljs.core.next(seq__32824_34069__$1);
var G__34126 = null;
var G__34127 = (0);
var G__34128 = (0);
seq__32824_34000 = G__34125;
chunk__32826_34001 = G__34126;
count__32827_34002 = G__34127;
i__32828_34003 = G__34128;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__32928_34137 = shadow.dom._to_svg;
var G__32929_34138 = "string";
var G__32930_34139 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__32928_34137,G__32929_34138,G__32930_34139);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__32932_34156 = shadow.dom._to_svg;
var G__32933_34157 = "null";
var G__32934_34158 = (function (_){
return null;
});
goog.object.set(G__32932_34156,G__32933_34157,G__32934_34158);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34164 = arguments.length;
var i__4790__auto___34165 = (0);
while(true){
if((i__4790__auto___34165 < len__4789__auto___34164)){
args__4795__auto__.push((arguments[i__4790__auto___34165]));

var G__34173 = (i__4790__auto___34165 + (1));
i__4790__auto___34165 = G__34173;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq32936){
var G__32937 = cljs.core.first(seq32936);
var seq32936__$1 = cljs.core.next(seq32936);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32937,seq32936__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__32941 = arguments.length;
switch (G__32941) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__32954_34191 = shadow.dom.dom_node(el);
var G__32955_34192 = cljs.core.name(event);
var G__32956_34193 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32954_34191,G__32955_34192,G__32956_34193) : shadow.dom.dom_listen.call(null,G__32954_34191,G__32955_34192,G__32956_34193));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__28501__auto___34195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_32961){
var state_val_32962 = (state_32961[(1)]);
if((state_val_32962 === (1))){
var state_32961__$1 = state_32961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32961__$1,(2),once_or_cleanup);
} else {
if((state_val_32962 === (2))){
var inst_32958 = (state_32961[(2)]);
var inst_32959 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_32961__$1 = (function (){var statearr_32963 = state_32961;
(statearr_32963[(7)] = inst_32958);

return statearr_32963;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32961__$1,inst_32959);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28189__auto__ = null;
var shadow$dom$state_machine__28189__auto____0 = (function (){
var statearr_32964 = [null,null,null,null,null,null,null,null];
(statearr_32964[(0)] = shadow$dom$state_machine__28189__auto__);

(statearr_32964[(1)] = (1));

return statearr_32964;
});
var shadow$dom$state_machine__28189__auto____1 = (function (state_32961){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_32961);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e32965){if((e32965 instanceof Object)){
var ex__28192__auto__ = e32965;
var statearr_32966_34203 = state_32961;
(statearr_32966_34203[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34207 = state_32961;
state_32961 = G__34207;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
shadow$dom$state_machine__28189__auto__ = function(state_32961){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28189__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28189__auto____1.call(this,state_32961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28189__auto____0;
shadow$dom$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28189__auto____1;
return shadow$dom$state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_32967 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_32967[(6)] = c__28501__auto___34195);

return statearr_32967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
