goog.provide('shadow.cljs.devtools.client.worker');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.worker !== 'undefined') && (typeof shadow.cljs.devtools.client.worker.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.worker.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.worker.devtools_msg = (function shadow$cljs$devtools$client$worker$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___104897 = arguments.length;
var i__4790__auto___104898 = (0);
while(true){
if((i__4790__auto___104898 < len__4789__auto___104897)){
args__4795__auto__.push((arguments[i__4790__auto___104898]));

var G__104899 = (i__4790__auto___104898 + (1));
i__4790__auto___104898 = G__104899;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.worker.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.worker.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 [WORKER] shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.worker.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.worker.devtools_msg.cljs$lang$applyTo = (function (seq104805){
var G__104806 = cljs.core.first(seq104805);
var seq104805__$1 = cljs.core.next(seq104805);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104806,seq104805__$1);
}));

shadow.cljs.devtools.client.worker.ws_msg = (function shadow$cljs$devtools$client$worker$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.worker.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.worker !== 'undefined') && (typeof shadow.cljs.devtools.client.worker.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.worker.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.worker.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.worker.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$worker$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.worker.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.worker.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$worker$src_is_loaded_QMARK_(p__104807){
var map__104808 = p__104807;
var map__104808__$1 = (((((!((map__104808 == null))))?(((((map__104808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104808):map__104808);
var src = map__104808__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104808__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104808__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.worker.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.worker.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.worker.script_eval = (function shadow$cljs$devtools$client$worker$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.worker.do_js_load = (function shadow$cljs$devtools$client$worker$do_js_load(sources){
var seq__104810 = cljs.core.seq(sources);
var chunk__104811 = null;
var count__104812 = (0);
var i__104813 = (0);
while(true){
if((i__104813 < count__104812)){
var map__104820 = chunk__104811.cljs$core$IIndexed$_nth$arity$2(null,i__104813);
var map__104820__$1 = (((((!((map__104820 == null))))?(((((map__104820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104820):map__104820);
var src = map__104820__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104820__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104820__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104820__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104820__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.worker.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.worker.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e104822){var e_104900 = e104822;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_104900);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_104900.message)].join('')));
}

var G__104901 = seq__104810;
var G__104902 = chunk__104811;
var G__104903 = count__104812;
var G__104904 = (i__104813 + (1));
seq__104810 = G__104901;
chunk__104811 = G__104902;
count__104812 = G__104903;
i__104813 = G__104904;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__104810);
if(temp__5735__auto__){
var seq__104810__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__104810__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__104810__$1);
var G__104905 = cljs.core.chunk_rest(seq__104810__$1);
var G__104906 = c__4609__auto__;
var G__104907 = cljs.core.count(c__4609__auto__);
var G__104908 = (0);
seq__104810 = G__104905;
chunk__104811 = G__104906;
count__104812 = G__104907;
i__104813 = G__104908;
continue;
} else {
var map__104823 = cljs.core.first(seq__104810__$1);
var map__104823__$1 = (((((!((map__104823 == null))))?(((((map__104823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104823):map__104823);
var src = map__104823__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104823__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104823__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104823__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104823__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.worker.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.worker.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e104825){var e_104909 = e104825;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_104909);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_104909.message)].join('')));
}

var G__104910 = cljs.core.next(seq__104810__$1);
var G__104911 = null;
var G__104912 = (0);
var G__104913 = (0);
seq__104810 = G__104910;
chunk__104811 = G__104911;
count__104812 = G__104912;
i__104813 = G__104913;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.worker.do_js_reload = (function shadow$cljs$devtools$client$worker$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.worker.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.worker.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.worker.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.worker.do_js_requires = (function shadow$cljs$devtools$client$worker$do_js_requires(js_requires){
var seq__104826 = cljs.core.seq(js_requires);
var chunk__104827 = null;
var count__104828 = (0);
var i__104829 = (0);
while(true){
if((i__104829 < count__104828)){
var js_ns = chunk__104827.cljs$core$IIndexed$_nth$arity$2(null,i__104829);
var require_str_104914 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.worker.script_eval(require_str_104914);


var G__104915 = seq__104826;
var G__104916 = chunk__104827;
var G__104917 = count__104828;
var G__104918 = (i__104829 + (1));
seq__104826 = G__104915;
chunk__104827 = G__104916;
count__104828 = G__104917;
i__104829 = G__104918;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__104826);
if(temp__5735__auto__){
var seq__104826__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__104826__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__104826__$1);
var G__104919 = cljs.core.chunk_rest(seq__104826__$1);
var G__104920 = c__4609__auto__;
var G__104921 = cljs.core.count(c__4609__auto__);
var G__104922 = (0);
seq__104826 = G__104919;
chunk__104827 = G__104920;
count__104828 = G__104921;
i__104829 = G__104922;
continue;
} else {
var js_ns = cljs.core.first(seq__104826__$1);
var require_str_104923 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.worker.script_eval(require_str_104923);


var G__104924 = cljs.core.next(seq__104826__$1);
var G__104925 = null;
var G__104926 = (0);
var G__104927 = (0);
seq__104826 = G__104924;
chunk__104827 = G__104925;
count__104828 = G__104926;
i__104829 = G__104927;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.worker.load_sources = (function shadow$cljs$devtools$client$worker$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__104830 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__104830) : callback.call(null,G__104830));
} else {
var G__104831 = shadow.cljs.devtools.client.env.files_url();
var G__104832 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__104833 = "POST";
var G__104834 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__104835 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__104831,G__104832,G__104833,G__104834,G__104835);
}
});
shadow.cljs.devtools.client.worker.handle_build_complete = (function shadow$cljs$devtools$client$worker$handle_build_complete(p__104837){
var map__104838 = p__104837;
var map__104838__$1 = (((((!((map__104838 == null))))?(((((map__104838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104838):map__104838);
var msg = map__104838__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104838__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104838__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__104840 = info;
var map__104840__$1 = (((((!((map__104840 == null))))?(((((map__104840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104840):map__104840);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104840__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104840__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$worker$handle_build_complete_$_iter__104842(s__104843){
return (new cljs.core.LazySeq(null,(function (){
var s__104843__$1 = s__104843;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__104843__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__104848 = cljs.core.first(xs__6292__auto__);
var map__104848__$1 = (((((!((map__104848 == null))))?(((((map__104848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104848):map__104848);
var src = map__104848__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104848__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104848__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__104843__$1,map__104848,map__104848__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__104840,map__104840__$1,sources,compiled,map__104838,map__104838__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$worker$handle_build_complete_$_iter__104842_$_iter__104844(s__104845){
return (new cljs.core.LazySeq(null,((function (s__104843__$1,map__104848,map__104848__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__104840,map__104840__$1,sources,compiled,map__104838,map__104838__$1,msg,info,reload_info){
return (function (){
var s__104845__$1 = s__104845;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__104845__$1);
if(temp__5735__auto____$1){
var s__104845__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__104845__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__104845__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__104847 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__104846 = (0);
while(true){
if((i__104846 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__104846);
cljs.core.chunk_append(b__104847,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__104928 = (i__104846 + (1));
i__104846 = G__104928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__104847),shadow$cljs$devtools$client$worker$handle_build_complete_$_iter__104842_$_iter__104844(cljs.core.chunk_rest(s__104845__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__104847),null);
}
} else {
var warning = cljs.core.first(s__104845__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$worker$handle_build_complete_$_iter__104842_$_iter__104844(cljs.core.rest(s__104845__$2)));
}
} else {
return null;
}
break;
}
});})(s__104843__$1,map__104848,map__104848__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__104840,map__104840__$1,sources,compiled,map__104838,map__104838__$1,msg,info,reload_info))
,null,null));
});})(s__104843__$1,map__104848,map__104848__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__104840,map__104840__$1,sources,compiled,map__104838,map__104838__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$worker$handle_build_complete_$_iter__104842(cljs.core.rest(s__104843__$1)));
} else {
var G__104929 = cljs.core.rest(s__104843__$1);
s__104843__$1 = G__104929;
continue;
}
} else {
var G__104930 = cljs.core.rest(s__104843__$1);
s__104843__$1 = G__104930;
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
var seq__104850_104931 = cljs.core.seq(warnings);
var chunk__104851_104932 = null;
var count__104852_104933 = (0);
var i__104853_104934 = (0);
while(true){
if((i__104853_104934 < count__104852_104933)){
var map__104858_104935 = chunk__104851_104932.cljs$core$IIndexed$_nth$arity$2(null,i__104853_104934);
var map__104858_104936__$1 = (((((!((map__104858_104935 == null))))?(((((map__104858_104935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104858_104935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104858_104935):map__104858_104935);
var w_104937 = map__104858_104936__$1;
var msg_104938__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104858_104936__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_104939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104858_104936__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_104940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104858_104936__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_104941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104858_104936__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_104941)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_104939),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_104940),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_104938__$1)].join(''));


var G__104942 = seq__104850_104931;
var G__104943 = chunk__104851_104932;
var G__104944 = count__104852_104933;
var G__104945 = (i__104853_104934 + (1));
seq__104850_104931 = G__104942;
chunk__104851_104932 = G__104943;
count__104852_104933 = G__104944;
i__104853_104934 = G__104945;
continue;
} else {
var temp__5735__auto___104946 = cljs.core.seq(seq__104850_104931);
if(temp__5735__auto___104946){
var seq__104850_104947__$1 = temp__5735__auto___104946;
if(cljs.core.chunked_seq_QMARK_(seq__104850_104947__$1)){
var c__4609__auto___104948 = cljs.core.chunk_first(seq__104850_104947__$1);
var G__104949 = cljs.core.chunk_rest(seq__104850_104947__$1);
var G__104950 = c__4609__auto___104948;
var G__104951 = cljs.core.count(c__4609__auto___104948);
var G__104952 = (0);
seq__104850_104931 = G__104949;
chunk__104851_104932 = G__104950;
count__104852_104933 = G__104951;
i__104853_104934 = G__104952;
continue;
} else {
var map__104860_104953 = cljs.core.first(seq__104850_104947__$1);
var map__104860_104954__$1 = (((((!((map__104860_104953 == null))))?(((((map__104860_104953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104860_104953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104860_104953):map__104860_104953);
var w_104955 = map__104860_104954__$1;
var msg_104956__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104860_104954__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_104957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104860_104954__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_104958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104860_104954__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_104959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104860_104954__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_104959)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_104957),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_104958),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_104956__$1)].join(''));


var G__104960 = cljs.core.next(seq__104850_104947__$1);
var G__104961 = null;
var G__104962 = (0);
var G__104963 = (0);
seq__104850_104931 = G__104960;
chunk__104851_104932 = G__104961;
count__104852_104933 = G__104962;
i__104853_104934 = G__104963;
continue;
}
} else {
}
}
break;
}

if(shadow.cljs.devtools.client.env.autoload){
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__104862){
var map__104863 = p__104862;
var map__104863__$1 = (((((!((map__104863 == null))))?(((((map__104863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104863):map__104863);
var src = map__104863__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104863__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104863__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.worker.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__104865){
var map__104866 = p__104865;
var map__104866__$1 = (((((!((map__104866 == null))))?(((((map__104866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104866):map__104866);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104866__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__104868){
var map__104869 = p__104868;
var map__104869__$1 = (((((!((map__104869 == null))))?(((((map__104869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104869):map__104869);
var rc = map__104869__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104869__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.seq(sources_to_get)){
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.worker.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.worker.load_sources(sources_to_get,(function (p1__104836_SHARP_){
return shadow.cljs.devtools.client.worker.do_js_reload(msg,p1__104836_SHARP_,(function (){
return null;
}),(function (){
return null;
}));
}));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.worker.repl_error = (function shadow$cljs$devtools$client$worker$repl_error(e){
console.error("repl/invoke error",e);

return shadow.cljs.devtools.client.env.repl_error(e);
});
shadow.cljs.devtools.client.worker.global_eval = (function shadow$cljs$devtools$client$worker$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.worker.repl_invoke = (function shadow$cljs$devtools$client$worker$repl_invoke(p__104871){
var map__104872 = p__104871;
var map__104872__$1 = (((((!((map__104872 == null))))?(((((map__104872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104872):map__104872);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104872__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104872__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.worker.global_eval(js);
}),shadow.cljs.devtools.client.worker.repl_error);
return shadow.cljs.devtools.client.worker.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.worker.repl_require = (function shadow$cljs$devtools$client$worker$repl_require(p__104874,done){
var map__104875 = p__104874;
var map__104875__$1 = (((((!((map__104875 == null))))?(((((map__104875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104875):map__104875);
var msg = map__104875__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104875__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104875__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104875__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104875__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__104877){
var map__104878 = p__104877;
var map__104878__$1 = (((((!((map__104878 == null))))?(((((map__104878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104878):map__104878);
var src = map__104878__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104878__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.worker.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.worker.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.worker.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.worker.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.worker.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e104880){var e = e104880;
return shadow.cljs.devtools.client.worker.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.worker.repl_init = (function shadow$cljs$devtools$client$worker$repl_init(p__104881,done){
var map__104882 = p__104881;
var map__104882__$1 = (((((!((map__104882 == null))))?(((((map__104882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104882):map__104882);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104882__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104882__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.worker.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.worker.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.worker.do_js_load(sources);

shadow.cljs.devtools.client.worker.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.worker.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.worker.repl_set_ns = (function shadow$cljs$devtools$client$worker$repl_set_ns(p__104884){
var map__104885 = p__104884;
var map__104885__$1 = (((((!((map__104885 == null))))?(((((map__104885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104885):map__104885);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104885__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104885__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.worker.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.worker.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.worker.handle_message = (function shadow$cljs$devtools$client$worker$handle_message(p__104887,done){
var map__104888 = p__104887;
var map__104888__$1 = (((((!((map__104888 == null))))?(((((map__104888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104888):map__104888);
var msg = map__104888__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104888__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__104890_104964 = type;
var G__104890_104965__$1 = (((G__104890_104964 instanceof cljs.core.Keyword))?G__104890_104964.fqn:null);
switch (G__104890_104965__$1) {
case "asset-watch":

break;
case "repl/invoke":
shadow.cljs.devtools.client.worker.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.worker.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.worker.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.worker.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.worker.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.worker.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.worker.handle_build_complete(msg);

break;
case "build-failure":

break;
case "build-init":

break;
case "build-start":

break;
case "pong":

break;
case "client/stale":
console.warn("Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
console.warn(["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

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
shadow.cljs.devtools.client.worker.compile = (function shadow$cljs$devtools$client$worker$compile(text,callback){
var G__104891 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__104892 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__104893 = "POST";
var G__104894 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__104895 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__104891,G__104892,G__104893,G__104894,G__104895);
});
shadow.cljs.devtools.client.worker.ws_connect = (function shadow$cljs$devtools$client$worker$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"worker","worker",938239996));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.worker.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.worker.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.worker.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.worker.ws_msg);

return shadow.cljs.devtools.client.worker.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.worker.devtools_msg("WebSocket disconnected!");

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.worker.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
}));

return (socket.onerror = (function (e){
return shadow.cljs.devtools.client.worker.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e104896){var e = e104896;
return shadow.cljs.devtools.client.worker.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
shadow.cljs.devtools.client.worker.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.worker.js.map
