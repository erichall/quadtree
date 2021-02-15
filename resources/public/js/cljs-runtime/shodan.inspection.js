goog.provide('shodan.inspection');
goog.require('cljs.core');
goog.require('shodan.console');
goog.require('clojure.string');
shodan.inspection.find_type = (function shodan$inspection$find_type(obj){
if(cljs.core.map_QMARK_(obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_(obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.seq_QMARK_(obj)){
return new cljs.core.Keyword(null,"seq","seq",-1817803783);
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
});
shodan.inspection.group_name = (function shodan$inspection$group_name(prefix,brace){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix,brace], null)));
});
if((typeof shodan !== 'undefined') && (typeof shodan.inspection !== 'undefined') && (typeof shodan.inspection.inspect !== 'undefined')){
} else {
/**
 * Inspects a ClojureScript data structure by displaying it in the
 *   browser's console. Collections are shown using log groups to
 *   represent their structure.
 */
shodan.inspection.inspect = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26217 = cljs.core.get_global_hierarchy;
return (fexpr__26217.cljs$core$IFn$_invoke$arity$0 ? fexpr__26217.cljs$core$IFn$_invoke$arity$0() : fexpr__26217.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("shodan.inspection","inspect"),(function() { 
var G__26285__delegate = function (x,args){
return shodan.inspection.find_type(x);
};
var G__26285 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__26290__i = 0, G__26290__a = new Array(arguments.length -  1);
while (G__26290__i < G__26290__a.length) {G__26290__a[G__26290__i] = arguments[G__26290__i + 1]; ++G__26290__i;}
  args = new cljs.core.IndexedSeq(G__26290__a,0,null);
} 
return G__26285__delegate.call(this,x,args);};
G__26285.cljs$lang$maxFixedArity = 1;
G__26285.cljs$lang$applyTo = (function (arglist__26291){
var x = cljs.core.first(arglist__26291);
var args = cljs.core.rest(arglist__26291);
return G__26285__delegate(x,args);
});
G__26285.cljs$core$IFn$_invoke$arity$variadic = G__26285__delegate;
return G__26285;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
shodan.inspection.inspect.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (a_map,prefix){
console.group(shodan.inspection.group_name(prefix,"{"));

var result__25975__auto__ = (function (){
var seq__26218_26295 = cljs.core.seq(a_map);
var chunk__26219_26296 = null;
var count__26220_26297 = (0);
var i__26221_26298 = (0);
while(true){
if((i__26221_26298 < count__26220_26297)){
var vec__26238_26299 = chunk__26219_26296.cljs$core$IIndexed$_nth$arity$2(null,i__26221_26298);
var k_26300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26238_26299,(0),null);
var v_26301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26238_26299,(1),null);
var G__26241_26303 = v_26301;
var G__26242_26304 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_26300], 0));
(shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$2 ? shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$2(G__26241_26303,G__26242_26304) : shodan.inspection.inspect.call(null,G__26241_26303,G__26242_26304));


var G__26309 = seq__26218_26295;
var G__26310 = chunk__26219_26296;
var G__26311 = count__26220_26297;
var G__26312 = (i__26221_26298 + (1));
seq__26218_26295 = G__26309;
chunk__26219_26296 = G__26310;
count__26220_26297 = G__26311;
i__26221_26298 = G__26312;
continue;
} else {
var temp__5735__auto___26314 = cljs.core.seq(seq__26218_26295);
if(temp__5735__auto___26314){
var seq__26218_26316__$1 = temp__5735__auto___26314;
if(cljs.core.chunked_seq_QMARK_(seq__26218_26316__$1)){
var c__4609__auto___26320 = cljs.core.chunk_first(seq__26218_26316__$1);
var G__26321 = cljs.core.chunk_rest(seq__26218_26316__$1);
var G__26322 = c__4609__auto___26320;
var G__26323 = cljs.core.count(c__4609__auto___26320);
var G__26324 = (0);
seq__26218_26295 = G__26321;
chunk__26219_26296 = G__26322;
count__26220_26297 = G__26323;
i__26221_26298 = G__26324;
continue;
} else {
var vec__26248_26325 = cljs.core.first(seq__26218_26316__$1);
var k_26326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26248_26325,(0),null);
var v_26327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26248_26325,(1),null);
var G__26253_26329 = v_26327;
var G__26254_26330 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_26326], 0));
(shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$2 ? shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$2(G__26253_26329,G__26254_26330) : shodan.inspection.inspect.call(null,G__26253_26329,G__26254_26330));


var G__26331 = cljs.core.next(seq__26218_26316__$1);
var G__26332 = null;
var G__26333 = (0);
var G__26334 = (0);
seq__26218_26295 = G__26331;
chunk__26219_26296 = G__26332;
count__26220_26297 = G__26333;
i__26221_26298 = G__26334;
continue;
}
} else {
}
}
break;
}

return console.log("}");
})()
;
console.groupEnd();

return result__25975__auto__;
}));
shodan.inspection.inspect.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (a_vec,prefix){
console.group(shodan.inspection.group_name(prefix,"["));

var result__25975__auto__ = (function (){
var seq__26257_26335 = cljs.core.seq(a_vec);
var chunk__26258_26336 = null;
var count__26259_26337 = (0);
var i__26260_26338 = (0);
while(true){
if((i__26260_26338 < count__26259_26337)){
var obj_26340 = chunk__26258_26336.cljs$core$IIndexed$_nth$arity$2(null,i__26260_26338);
(shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$1 ? shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$1(obj_26340) : shodan.inspection.inspect.call(null,obj_26340));


var G__26343 = seq__26257_26335;
var G__26344 = chunk__26258_26336;
var G__26345 = count__26259_26337;
var G__26346 = (i__26260_26338 + (1));
seq__26257_26335 = G__26343;
chunk__26258_26336 = G__26344;
count__26259_26337 = G__26345;
i__26260_26338 = G__26346;
continue;
} else {
var temp__5735__auto___26347 = cljs.core.seq(seq__26257_26335);
if(temp__5735__auto___26347){
var seq__26257_26348__$1 = temp__5735__auto___26347;
if(cljs.core.chunked_seq_QMARK_(seq__26257_26348__$1)){
var c__4609__auto___26349 = cljs.core.chunk_first(seq__26257_26348__$1);
var G__26350 = cljs.core.chunk_rest(seq__26257_26348__$1);
var G__26351 = c__4609__auto___26349;
var G__26352 = cljs.core.count(c__4609__auto___26349);
var G__26353 = (0);
seq__26257_26335 = G__26350;
chunk__26258_26336 = G__26351;
count__26259_26337 = G__26352;
i__26260_26338 = G__26353;
continue;
} else {
var obj_26354 = cljs.core.first(seq__26257_26348__$1);
(shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$1 ? shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$1(obj_26354) : shodan.inspection.inspect.call(null,obj_26354));


var G__26355 = cljs.core.next(seq__26257_26348__$1);
var G__26356 = null;
var G__26357 = (0);
var G__26358 = (0);
seq__26257_26335 = G__26355;
chunk__26258_26336 = G__26356;
count__26259_26337 = G__26357;
i__26260_26338 = G__26358;
continue;
}
} else {
}
}
break;
}

return console.log("]");
})()
;
console.groupEnd();

return result__25975__auto__;
}));
shodan.inspection.inspect.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),(function (a_vec,prefix){
console.group(shodan.inspection.group_name(prefix,"("));

var result__25975__auto__ = (function (){
var seq__26261_26359 = cljs.core.seq(a_vec);
var chunk__26262_26360 = null;
var count__26263_26361 = (0);
var i__26264_26362 = (0);
while(true){
if((i__26264_26362 < count__26263_26361)){
var obj_26363 = chunk__26262_26360.cljs$core$IIndexed$_nth$arity$2(null,i__26264_26362);
(shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$1 ? shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$1(obj_26363) : shodan.inspection.inspect.call(null,obj_26363));


var G__26364 = seq__26261_26359;
var G__26365 = chunk__26262_26360;
var G__26366 = count__26263_26361;
var G__26367 = (i__26264_26362 + (1));
seq__26261_26359 = G__26364;
chunk__26262_26360 = G__26365;
count__26263_26361 = G__26366;
i__26264_26362 = G__26367;
continue;
} else {
var temp__5735__auto___26368 = cljs.core.seq(seq__26261_26359);
if(temp__5735__auto___26368){
var seq__26261_26372__$1 = temp__5735__auto___26368;
if(cljs.core.chunked_seq_QMARK_(seq__26261_26372__$1)){
var c__4609__auto___26373 = cljs.core.chunk_first(seq__26261_26372__$1);
var G__26375 = cljs.core.chunk_rest(seq__26261_26372__$1);
var G__26376 = c__4609__auto___26373;
var G__26377 = cljs.core.count(c__4609__auto___26373);
var G__26378 = (0);
seq__26261_26359 = G__26375;
chunk__26262_26360 = G__26376;
count__26263_26361 = G__26377;
i__26264_26362 = G__26378;
continue;
} else {
var obj_26379 = cljs.core.first(seq__26261_26372__$1);
(shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$1 ? shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$1(obj_26379) : shodan.inspection.inspect.call(null,obj_26379));


var G__26380 = cljs.core.next(seq__26261_26372__$1);
var G__26381 = null;
var G__26382 = (0);
var G__26383 = (0);
seq__26261_26359 = G__26380;
chunk__26262_26360 = G__26381;
count__26263_26361 = G__26382;
i__26264_26362 = G__26383;
continue;
}
} else {
}
}
break;
}

return console.log(")");
})()
;
console.groupEnd();

return result__25975__auto__;
}));
shodan.inspection.inspect.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__26385 = null;
var G__26385__1 = (function (obj){
return console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
var G__26385__2 = (function (obj,prefix){
return console.log((function (){var or__4185__auto__ = prefix;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})(),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
G__26385 = function(obj,prefix){
switch(arguments.length){
case 1:
return G__26385__1.call(this,obj);
case 2:
return G__26385__2.call(this,obj,prefix);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26385.cljs$core$IFn$_invoke$arity$1 = G__26385__1;
G__26385.cljs$core$IFn$_invoke$arity$2 = G__26385__2;
return G__26385;
})()
);

//# sourceMappingURL=shodan.inspection.js.map
