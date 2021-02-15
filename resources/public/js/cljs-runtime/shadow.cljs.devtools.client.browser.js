goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35639 = arguments.length;
var i__4790__auto___35641 = (0);
while(true){
if((i__4790__auto___35641 < len__4789__auto___35639)){
args__4795__auto__.push((arguments[i__4790__auto___35641]));

var G__35642 = (i__4790__auto___35641 + (1));
i__4790__auto___35641 = G__35642;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35334){
var G__35335 = cljs.core.first(seq35334);
var seq35334__$1 = cljs.core.next(seq35334);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35335,seq35334__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35352){
var map__35353 = p__35352;
var map__35353__$1 = (((((!((map__35353 == null))))?(((((map__35353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35353):map__35353);
var src = map__35353__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35353__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35353__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35358 = cljs.core.seq(sources);
var chunk__35359 = null;
var count__35360 = (0);
var i__35361 = (0);
while(true){
if((i__35361 < count__35360)){
var map__35376 = chunk__35359.cljs$core$IIndexed$_nth$arity$2(null,i__35361);
var map__35376__$1 = (((((!((map__35376 == null))))?(((((map__35376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35376):map__35376);
var src = map__35376__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35376__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35376__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35376__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35376__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35379){var e_35647 = e35379;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35647);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35647.message)].join('')));
}

var G__35648 = seq__35358;
var G__35649 = chunk__35359;
var G__35650 = count__35360;
var G__35651 = (i__35361 + (1));
seq__35358 = G__35648;
chunk__35359 = G__35649;
count__35360 = G__35650;
i__35361 = G__35651;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35358);
if(temp__5735__auto__){
var seq__35358__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35358__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35358__$1);
var G__35652 = cljs.core.chunk_rest(seq__35358__$1);
var G__35653 = c__4609__auto__;
var G__35654 = cljs.core.count(c__4609__auto__);
var G__35655 = (0);
seq__35358 = G__35652;
chunk__35359 = G__35653;
count__35360 = G__35654;
i__35361 = G__35655;
continue;
} else {
var map__35383 = cljs.core.first(seq__35358__$1);
var map__35383__$1 = (((((!((map__35383 == null))))?(((((map__35383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35383):map__35383);
var src = map__35383__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35385){var e_35656 = e35385;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35656);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35656.message)].join('')));
}

var G__35657 = cljs.core.next(seq__35358__$1);
var G__35658 = null;
var G__35659 = (0);
var G__35660 = (0);
seq__35358 = G__35657;
chunk__35359 = G__35658;
count__35360 = G__35659;
i__35361 = G__35660;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35396 = cljs.core.seq(js_requires);
var chunk__35397 = null;
var count__35398 = (0);
var i__35399 = (0);
while(true){
if((i__35399 < count__35398)){
var js_ns = chunk__35397.cljs$core$IIndexed$_nth$arity$2(null,i__35399);
var require_str_35665 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35665);


var G__35667 = seq__35396;
var G__35668 = chunk__35397;
var G__35669 = count__35398;
var G__35670 = (i__35399 + (1));
seq__35396 = G__35667;
chunk__35397 = G__35668;
count__35398 = G__35669;
i__35399 = G__35670;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35396);
if(temp__5735__auto__){
var seq__35396__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35396__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35396__$1);
var G__35671 = cljs.core.chunk_rest(seq__35396__$1);
var G__35672 = c__4609__auto__;
var G__35673 = cljs.core.count(c__4609__auto__);
var G__35674 = (0);
seq__35396 = G__35671;
chunk__35397 = G__35672;
count__35398 = G__35673;
i__35399 = G__35674;
continue;
} else {
var js_ns = cljs.core.first(seq__35396__$1);
var require_str_35675 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35675);


var G__35676 = cljs.core.next(seq__35396__$1);
var G__35677 = null;
var G__35678 = (0);
var G__35679 = (0);
seq__35396 = G__35676;
chunk__35397 = G__35677;
count__35398 = G__35678;
i__35399 = G__35679;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35407 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35407) : callback.call(null,G__35407));
} else {
var G__35409 = shadow.cljs.devtools.client.env.files_url();
var G__35410 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__35411 = "POST";
var G__35412 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35413 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35409,G__35410,G__35411,G__35412,G__35413);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35426){
var map__35428 = p__35426;
var map__35428__$1 = (((((!((map__35428 == null))))?(((((map__35428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35428):map__35428);
var msg = map__35428__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35428__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35428__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35432 = info;
var map__35432__$1 = (((((!((map__35432 == null))))?(((((map__35432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35432):map__35432);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35432__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35432__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35434(s__35435){
return (new cljs.core.LazySeq(null,(function (){
var s__35435__$1 = s__35435;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35435__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35440 = cljs.core.first(xs__6292__auto__);
var map__35440__$1 = (((((!((map__35440 == null))))?(((((map__35440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35440):map__35440);
var src = map__35440__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35440__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35440__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__35435__$1,map__35440,map__35440__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35432,map__35432__$1,sources,compiled,map__35428,map__35428__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35434_$_iter__35436(s__35437){
return (new cljs.core.LazySeq(null,((function (s__35435__$1,map__35440,map__35440__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35432,map__35432__$1,sources,compiled,map__35428,map__35428__$1,msg,info,reload_info){
return (function (){
var s__35437__$1 = s__35437;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35437__$1);
if(temp__5735__auto____$1){
var s__35437__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35437__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__35437__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__35439 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__35438 = (0);
while(true){
if((i__35438 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__35438);
cljs.core.chunk_append(b__35439,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35682 = (i__35438 + (1));
i__35438 = G__35682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35439),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35434_$_iter__35436(cljs.core.chunk_rest(s__35437__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35439),null);
}
} else {
var warning = cljs.core.first(s__35437__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35434_$_iter__35436(cljs.core.rest(s__35437__$2)));
}
} else {
return null;
}
break;
}
});})(s__35435__$1,map__35440,map__35440__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35432,map__35432__$1,sources,compiled,map__35428,map__35428__$1,msg,info,reload_info))
,null,null));
});})(s__35435__$1,map__35440,map__35440__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35432,map__35432__$1,sources,compiled,map__35428,map__35428__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35434(cljs.core.rest(s__35435__$1)));
} else {
var G__35684 = cljs.core.rest(s__35435__$1);
s__35435__$1 = G__35684;
continue;
}
} else {
var G__35685 = cljs.core.rest(s__35435__$1);
s__35435__$1 = G__35685;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__35443_35686 = cljs.core.seq(warnings);
var chunk__35444_35687 = null;
var count__35445_35688 = (0);
var i__35446_35689 = (0);
while(true){
if((i__35446_35689 < count__35445_35688)){
var map__35464_35690 = chunk__35444_35687.cljs$core$IIndexed$_nth$arity$2(null,i__35446_35689);
var map__35464_35691__$1 = (((((!((map__35464_35690 == null))))?(((((map__35464_35690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35464_35690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35464_35690):map__35464_35690);
var w_35692 = map__35464_35691__$1;
var msg_35693__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35464_35691__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35464_35691__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35464_35691__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35464_35691__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35696)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35694),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35695),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35693__$1)].join(''));


var G__35697 = seq__35443_35686;
var G__35698 = chunk__35444_35687;
var G__35699 = count__35445_35688;
var G__35700 = (i__35446_35689 + (1));
seq__35443_35686 = G__35697;
chunk__35444_35687 = G__35698;
count__35445_35688 = G__35699;
i__35446_35689 = G__35700;
continue;
} else {
var temp__5735__auto___35701 = cljs.core.seq(seq__35443_35686);
if(temp__5735__auto___35701){
var seq__35443_35702__$1 = temp__5735__auto___35701;
if(cljs.core.chunked_seq_QMARK_(seq__35443_35702__$1)){
var c__4609__auto___35703 = cljs.core.chunk_first(seq__35443_35702__$1);
var G__35704 = cljs.core.chunk_rest(seq__35443_35702__$1);
var G__35705 = c__4609__auto___35703;
var G__35706 = cljs.core.count(c__4609__auto___35703);
var G__35707 = (0);
seq__35443_35686 = G__35704;
chunk__35444_35687 = G__35705;
count__35445_35688 = G__35706;
i__35446_35689 = G__35707;
continue;
} else {
var map__35467_35708 = cljs.core.first(seq__35443_35702__$1);
var map__35467_35709__$1 = (((((!((map__35467_35708 == null))))?(((((map__35467_35708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35467_35708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35467_35708):map__35467_35708);
var w_35710 = map__35467_35709__$1;
var msg_35711__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35467_35709__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35467_35709__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35467_35709__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35467_35709__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35714)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35712),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35713),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35711__$1)].join(''));


var G__35716 = cljs.core.next(seq__35443_35702__$1);
var G__35717 = null;
var G__35718 = (0);
var G__35719 = (0);
seq__35443_35686 = G__35716;
chunk__35444_35687 = G__35717;
count__35445_35688 = G__35718;
i__35446_35689 = G__35719;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__35470){
var map__35471 = p__35470;
var map__35471__$1 = (((((!((map__35471 == null))))?(((((map__35471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35471):map__35471);
var src = map__35471__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35471__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35471__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35474){
var map__35475 = p__35474;
var map__35475__$1 = (((((!((map__35475 == null))))?(((((map__35475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35475):map__35475);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35475__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__35477){
var map__35478 = p__35477;
var map__35478__$1 = (((((!((map__35478 == null))))?(((((map__35478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35478):map__35478);
var rc = map__35478__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35478__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__35424_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35424_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35482){
var map__35483 = p__35482;
var map__35483__$1 = (((((!((map__35483 == null))))?(((((map__35483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35483):map__35483);
var msg = map__35483__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35483__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35487 = cljs.core.seq(updates);
var chunk__35489 = null;
var count__35490 = (0);
var i__35491 = (0);
while(true){
if((i__35491 < count__35490)){
var path = chunk__35489.cljs$core$IIndexed$_nth$arity$2(null,i__35491);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35532_35720 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35535_35721 = null;
var count__35536_35722 = (0);
var i__35537_35723 = (0);
while(true){
if((i__35537_35723 < count__35536_35722)){
var node_35724 = chunk__35535_35721.cljs$core$IIndexed$_nth$arity$2(null,i__35537_35723);
var path_match_35725 = shadow.cljs.devtools.client.browser.match_paths(node_35724.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35725)){
var new_link_35726 = (function (){var G__35554 = node_35724.cloneNode(true);
G__35554.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35725),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35554;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35725], 0));

goog.dom.insertSiblingAfter(new_link_35726,node_35724);

goog.dom.removeNode(node_35724);


var G__35728 = seq__35532_35720;
var G__35729 = chunk__35535_35721;
var G__35730 = count__35536_35722;
var G__35731 = (i__35537_35723 + (1));
seq__35532_35720 = G__35728;
chunk__35535_35721 = G__35729;
count__35536_35722 = G__35730;
i__35537_35723 = G__35731;
continue;
} else {
var G__35732 = seq__35532_35720;
var G__35733 = chunk__35535_35721;
var G__35734 = count__35536_35722;
var G__35735 = (i__35537_35723 + (1));
seq__35532_35720 = G__35732;
chunk__35535_35721 = G__35733;
count__35536_35722 = G__35734;
i__35537_35723 = G__35735;
continue;
}
} else {
var temp__5735__auto___35736 = cljs.core.seq(seq__35532_35720);
if(temp__5735__auto___35736){
var seq__35532_35737__$1 = temp__5735__auto___35736;
if(cljs.core.chunked_seq_QMARK_(seq__35532_35737__$1)){
var c__4609__auto___35738 = cljs.core.chunk_first(seq__35532_35737__$1);
var G__35739 = cljs.core.chunk_rest(seq__35532_35737__$1);
var G__35740 = c__4609__auto___35738;
var G__35741 = cljs.core.count(c__4609__auto___35738);
var G__35742 = (0);
seq__35532_35720 = G__35739;
chunk__35535_35721 = G__35740;
count__35536_35722 = G__35741;
i__35537_35723 = G__35742;
continue;
} else {
var node_35744 = cljs.core.first(seq__35532_35737__$1);
var path_match_35745 = shadow.cljs.devtools.client.browser.match_paths(node_35744.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35745)){
var new_link_35746 = (function (){var G__35555 = node_35744.cloneNode(true);
G__35555.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35745),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35555;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35745], 0));

goog.dom.insertSiblingAfter(new_link_35746,node_35744);

goog.dom.removeNode(node_35744);


var G__35747 = cljs.core.next(seq__35532_35737__$1);
var G__35748 = null;
var G__35749 = (0);
var G__35750 = (0);
seq__35532_35720 = G__35747;
chunk__35535_35721 = G__35748;
count__35536_35722 = G__35749;
i__35537_35723 = G__35750;
continue;
} else {
var G__35751 = cljs.core.next(seq__35532_35737__$1);
var G__35752 = null;
var G__35753 = (0);
var G__35754 = (0);
seq__35532_35720 = G__35751;
chunk__35535_35721 = G__35752;
count__35536_35722 = G__35753;
i__35537_35723 = G__35754;
continue;
}
}
} else {
}
}
break;
}


var G__35755 = seq__35487;
var G__35756 = chunk__35489;
var G__35757 = count__35490;
var G__35758 = (i__35491 + (1));
seq__35487 = G__35755;
chunk__35489 = G__35756;
count__35490 = G__35757;
i__35491 = G__35758;
continue;
} else {
var G__35759 = seq__35487;
var G__35760 = chunk__35489;
var G__35761 = count__35490;
var G__35762 = (i__35491 + (1));
seq__35487 = G__35759;
chunk__35489 = G__35760;
count__35490 = G__35761;
i__35491 = G__35762;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35487);
if(temp__5735__auto__){
var seq__35487__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35487__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35487__$1);
var G__35763 = cljs.core.chunk_rest(seq__35487__$1);
var G__35764 = c__4609__auto__;
var G__35765 = cljs.core.count(c__4609__auto__);
var G__35766 = (0);
seq__35487 = G__35763;
chunk__35489 = G__35764;
count__35490 = G__35765;
i__35491 = G__35766;
continue;
} else {
var path = cljs.core.first(seq__35487__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35559_35767 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35562_35768 = null;
var count__35563_35769 = (0);
var i__35564_35770 = (0);
while(true){
if((i__35564_35770 < count__35563_35769)){
var node_35771 = chunk__35562_35768.cljs$core$IIndexed$_nth$arity$2(null,i__35564_35770);
var path_match_35772 = shadow.cljs.devtools.client.browser.match_paths(node_35771.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35772)){
var new_link_35773 = (function (){var G__35572 = node_35771.cloneNode(true);
G__35572.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35772),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35572;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35772], 0));

goog.dom.insertSiblingAfter(new_link_35773,node_35771);

goog.dom.removeNode(node_35771);


var G__35774 = seq__35559_35767;
var G__35775 = chunk__35562_35768;
var G__35776 = count__35563_35769;
var G__35777 = (i__35564_35770 + (1));
seq__35559_35767 = G__35774;
chunk__35562_35768 = G__35775;
count__35563_35769 = G__35776;
i__35564_35770 = G__35777;
continue;
} else {
var G__35778 = seq__35559_35767;
var G__35779 = chunk__35562_35768;
var G__35780 = count__35563_35769;
var G__35781 = (i__35564_35770 + (1));
seq__35559_35767 = G__35778;
chunk__35562_35768 = G__35779;
count__35563_35769 = G__35780;
i__35564_35770 = G__35781;
continue;
}
} else {
var temp__5735__auto___35782__$1 = cljs.core.seq(seq__35559_35767);
if(temp__5735__auto___35782__$1){
var seq__35559_35783__$1 = temp__5735__auto___35782__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35559_35783__$1)){
var c__4609__auto___35784 = cljs.core.chunk_first(seq__35559_35783__$1);
var G__35785 = cljs.core.chunk_rest(seq__35559_35783__$1);
var G__35786 = c__4609__auto___35784;
var G__35787 = cljs.core.count(c__4609__auto___35784);
var G__35788 = (0);
seq__35559_35767 = G__35785;
chunk__35562_35768 = G__35786;
count__35563_35769 = G__35787;
i__35564_35770 = G__35788;
continue;
} else {
var node_35789 = cljs.core.first(seq__35559_35783__$1);
var path_match_35790 = shadow.cljs.devtools.client.browser.match_paths(node_35789.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35790)){
var new_link_35791 = (function (){var G__35574 = node_35789.cloneNode(true);
G__35574.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35790),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35574;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35790], 0));

goog.dom.insertSiblingAfter(new_link_35791,node_35789);

goog.dom.removeNode(node_35789);


var G__35792 = cljs.core.next(seq__35559_35783__$1);
var G__35793 = null;
var G__35794 = (0);
var G__35795 = (0);
seq__35559_35767 = G__35792;
chunk__35562_35768 = G__35793;
count__35563_35769 = G__35794;
i__35564_35770 = G__35795;
continue;
} else {
var G__35796 = cljs.core.next(seq__35559_35783__$1);
var G__35797 = null;
var G__35798 = (0);
var G__35799 = (0);
seq__35559_35767 = G__35796;
chunk__35562_35768 = G__35797;
count__35563_35769 = G__35798;
i__35564_35770 = G__35799;
continue;
}
}
} else {
}
}
break;
}


var G__35800 = cljs.core.next(seq__35487__$1);
var G__35801 = null;
var G__35802 = (0);
var G__35803 = (0);
seq__35487 = G__35800;
chunk__35489 = G__35801;
count__35490 = G__35802;
i__35491 = G__35803;
continue;
} else {
var G__35804 = cljs.core.next(seq__35487__$1);
var G__35805 = null;
var G__35806 = (0);
var G__35807 = (0);
seq__35487 = G__35804;
chunk__35489 = G__35805;
count__35490 = G__35806;
i__35491 = G__35807;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35581){
var map__35582 = p__35581;
var map__35582__$1 = (((((!((map__35582 == null))))?(((((map__35582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35582):map__35582);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35582__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35582__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35586,done){
var map__35587 = p__35586;
var map__35587__$1 = (((((!((map__35587 == null))))?(((((map__35587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35587):map__35587);
var msg = map__35587__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35587__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35587__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35587__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35587__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35591){
var map__35592 = p__35591;
var map__35592__$1 = (((((!((map__35592 == null))))?(((((map__35592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35592):map__35592);
var src = map__35592__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35592__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e35598){var e = e35598;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35600,done){
var map__35602 = p__35600;
var map__35602__$1 = (((((!((map__35602 == null))))?(((((map__35602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35602):map__35602);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35602__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35602__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35607){
var map__35609 = p__35607;
var map__35609__$1 = (((((!((map__35609 == null))))?(((((map__35609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35609):map__35609);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35609__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35609__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35611,done){
var map__35613 = p__35611;
var map__35613__$1 = (((((!((map__35613 == null))))?(((((map__35613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35613):map__35613);
var msg = map__35613__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35613__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35615_35816 = type;
var G__35615_35817__$1 = (((G__35615_35816 instanceof cljs.core.Keyword))?G__35615_35816.fqn:null);
switch (G__35615_35817__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__35617 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35618 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__35619 = "POST";
var G__35620 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35621 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35617,G__35618,G__35619,G__35620,G__35621);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__35624 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__35623 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__35623.cljs$core$IFn$_invoke$arity$1 ? fexpr__35623.cljs$core$IFn$_invoke$arity$1(G__35624) : fexpr__35623.call(null,G__35624));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e35625){var e = e35625;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35822 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35822)){
var s_35823 = temp__5735__auto___35822;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_35823.onclose = (function (e){
return null;
}));

s_35823.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
