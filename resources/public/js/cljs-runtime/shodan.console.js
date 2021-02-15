goog.provide('shodan.console');
goog.require('cljs.core');
var methods_26138 = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"], null);
var console_26139 = (((typeof console !== 'undefined'))?console:(function (){var polyfill = ({"memory": null});
(window["console"] = polyfill);

return polyfill;
})());
var noop_26140 = cljs.core.constantly(null);
var seq__26091_26144 = cljs.core.seq(methods_26138);
var chunk__26092_26145 = null;
var count__26093_26146 = (0);
var i__26094_26147 = (0);
while(true){
if((i__26094_26147 < count__26093_26146)){
var m_26149 = chunk__26092_26145.cljs$core$IIndexed$_nth$arity$2(null,i__26094_26147);
var or__4185__auto___26153 = (console_26139[m_26149]);
if(cljs.core.truth_(or__4185__auto___26153)){
} else {
(console_26139[m_26149] = noop_26140);
}


var G__26157 = seq__26091_26144;
var G__26158 = chunk__26092_26145;
var G__26159 = count__26093_26146;
var G__26160 = (i__26094_26147 + (1));
seq__26091_26144 = G__26157;
chunk__26092_26145 = G__26158;
count__26093_26146 = G__26159;
i__26094_26147 = G__26160;
continue;
} else {
var temp__5735__auto___26161 = cljs.core.seq(seq__26091_26144);
if(temp__5735__auto___26161){
var seq__26091_26163__$1 = temp__5735__auto___26161;
if(cljs.core.chunked_seq_QMARK_(seq__26091_26163__$1)){
var c__4609__auto___26164 = cljs.core.chunk_first(seq__26091_26163__$1);
var G__26165 = cljs.core.chunk_rest(seq__26091_26163__$1);
var G__26166 = c__4609__auto___26164;
var G__26167 = cljs.core.count(c__4609__auto___26164);
var G__26168 = (0);
seq__26091_26144 = G__26165;
chunk__26092_26145 = G__26166;
count__26093_26146 = G__26167;
i__26094_26147 = G__26168;
continue;
} else {
var m_26170 = cljs.core.first(seq__26091_26163__$1);
var or__4185__auto___26171 = (console_26139[m_26170]);
if(cljs.core.truth_(or__4185__auto___26171)){
} else {
(console_26139[m_26170] = noop_26140);
}


var G__26173 = cljs.core.next(seq__26091_26163__$1);
var G__26174 = null;
var G__26175 = (0);
var G__26176 = (0);
seq__26091_26144 = G__26173;
chunk__26092_26145 = G__26174;
count__26093_26146 = G__26175;
i__26094_26147 = G__26176;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=shodan.console.js.map
