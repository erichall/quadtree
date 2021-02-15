goog.provide('taoensso.tufte.stats');
goog.require('cljs.core');
goog.require('taoensso.encore');
goog.require('clojure.string');
goog.require('goog.array');

/**
* @constructor
 * @implements {cljs.core.ICounted}
*/
taoensso.tufte.stats.SortedLongs = (function (a){
this.a = a;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.tufte.stats.SortedLongs.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a.length;
}));

(taoensso.tufte.stats.SortedLongs.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"longs","longs",-1017696020,null)], null))], null);
}));

(taoensso.tufte.stats.SortedLongs.cljs$lang$type = true);

(taoensso.tufte.stats.SortedLongs.cljs$lang$ctorStr = "taoensso.tufte.stats/SortedLongs");

(taoensso.tufte.stats.SortedLongs.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"taoensso.tufte.stats/SortedLongs");
}));

/**
 * Positional factory function for taoensso.tufte.stats/SortedLongs.
 */
taoensso.tufte.stats.__GT_SortedLongs = (function taoensso$tufte$stats$__GT_SortedLongs(a){
return (new taoensso.tufte.stats.SortedLongs(a));
});

taoensso.tufte.stats.sorted_longs_QMARK_ = (function taoensso$tufte$stats$sorted_longs_QMARK_(x){
return (x instanceof taoensso.tufte.stats.SortedLongs);
});
taoensso.tufte.stats.sort_longs = (function taoensso$tufte$stats$sort_longs(longs){
if(taoensso.tufte.stats.sorted_longs_QMARK_(longs)){
return longs;
} else {
var a = ((cljs.core.array_QMARK_(longs))?longs:cljs.core.to_array(longs));
goog.array.sort(a);

return (new taoensso.tufte.stats.SortedLongs(a));
}
});
/**
 * Returns ?[min p25 p50 p75 p90 p95 p99 max]
 */
taoensso.tufte.stats.long_percentiles = (function taoensso$tufte$stats$long_percentiles(longs){
var a = taoensso.tufte.stats.sort_longs(longs).a;
var max_idx = (a.length - (1));
if((max_idx < (0))){
return null;
} else {
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a[(0)]),(a[(function (){var G__28820 = (0.25 * max_idx);
return Math.round(G__28820);
})()]),(a[(function (){var G__28821 = (0.5 * max_idx);
return Math.round(G__28821);
})()]),(a[(function (){var G__28822 = (0.75 * max_idx);
return Math.round(G__28822);
})()]),(a[(function (){var G__28823 = (0.9 * max_idx);
return Math.round(G__28823);
})()]),(a[(function (){var G__28824 = (0.95 * max_idx);
return Math.round(G__28824);
})()]),(a[(function (){var G__28825 = (0.99 * max_idx);
return Math.round(G__28825);
})()]),(a[max_idx])], null);
}
});

/**
* @constructor
*/
taoensso.tufte.stats.MinMax = (function (vmin,vmax){
this.vmin = vmin;
this.vmax = vmax;
});

(taoensso.tufte.stats.MinMax.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"vmin","vmin",2087078343,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"vmax","vmax",205317983,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.tufte.stats.MinMax.cljs$lang$type = true);

(taoensso.tufte.stats.MinMax.cljs$lang$ctorStr = "taoensso.tufte.stats/MinMax");

(taoensso.tufte.stats.MinMax.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"taoensso.tufte.stats/MinMax");
}));

/**
 * Positional factory function for taoensso.tufte.stats/MinMax.
 */
taoensso.tufte.stats.__GT_MinMax = (function taoensso$tufte$stats$__GT_MinMax(vmin,vmax){
return (new taoensso.tufte.stats.MinMax(vmin,vmax));
});

/**
 * Returns ?[<min> <max>]
 */
taoensso.tufte.stats.min_max = (function taoensso$tufte$stats$min_max(longs){
if(taoensso.tufte.stats.sorted_longs_QMARK_(longs)){
var a = longs.a;
var max_idx = (a.length - (1));
if((max_idx < (0))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a[(0)]),(a[max_idx])], null);
}
} else {
if((cljs.core.count(longs) === (0))){
return null;
} else {
var vec__28830 = longs;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28830,(0),null);
var min_max = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var vmin = acc.vmin;
var vmax = acc.vmax;
if((in$ > vmax)){
return (new taoensso.tufte.stats.MinMax(vmin,in$));
} else {
if((in$ < vmin)){
return (new taoensso.tufte.stats.MinMax(in$,vmin));
} else {
return acc;
}
}
}),(new taoensso.tufte.stats.MinMax(v1,v1)),longs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [min_max.vmin,min_max.vmax], null);
}
}
});
/**
 * Given a collection of longs, returns map with keys:
 *   #{:n :min :max :sum :mean :mad-sum :mad :p25 :p50 :p75 :p90 :p95 :p99}, or nil
 *   if collection is empty.
 */
taoensso.tufte.stats.stats = (function taoensso$tufte$stats$stats(longs){
if(cljs.core.truth_(longs)){
var sorted_longs = taoensso.tufte.stats.sort_longs(longs);
var a = sorted_longs.a;
var n = a.length;
if((n === (0))){
return null;
} else {
var sum = (function (){var a__4663__auto__ = a;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var acc = (0);
while(true){
if((i < l__4664__auto__)){
var G__28959 = (i + (1));
var G__28960 = (acc + (a[i]));
i = G__28959;
acc = G__28960;
continue;
} else {
return acc;
}
break;
}
})();
var mean = (sum / n);
var mad_sum = (function (){var a__4663__auto__ = a;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var acc = 0.0;
while(true){
if((i < l__4664__auto__)){
var G__28964 = (i + (1));
var G__28965 = (acc + (function (){var G__28844 = ((a[i]) - mean);
return Math.abs(G__28844);
})());
i = G__28964;
acc = G__28965;
continue;
} else {
return acc;
}
break;
}
})();
var mad = (mad_sum / n);
var vec__28837 = taoensso.tufte.stats.long_percentiles(sorted_longs);
var vmin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28837,(0),null);
var p25 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28837,(1),null);
var p50 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28837,(2),null);
var p75 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28837,(3),null);
var p90 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28837,(4),null);
var p95 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28837,(5),null);
var p99 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28837,(6),null);
var vmax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28837,(7),null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"p95","p95",-1078985474)],[vmin,mean,p75,mad_sum,p99,n,p25,p90,vmax,mad,p50,sum,p95]);
}
} else {
return null;
}
});
/**
 * `(merge-stats (stats c0) (stats c1))` is a basic approximation of `(stats (into c0 c1)))`.
 */
taoensso.tufte.stats.merge_stats = (function taoensso$tufte$stats$merge_stats(m0,m1){
if(cljs.core.truth_(m0)){
if(cljs.core.truth_(m1)){
var _ = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,new cljs.core.Keyword(null,"n","n",562130025)))?null:(function(){throw (new Error("Assert failed: (get m0 :n)"))})());
var ___$1 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m1,new cljs.core.Keyword(null,"n","n",562130025)))?null:(function(){throw (new Error("Assert failed: (get m1 :n)"))})());
var map__28846 = m0;
var map__28846__$1 = (((((!((map__28846 == null))))?(((((map__28846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28846):map__28846);
var p99_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28846__$1,new cljs.core.Keyword(null,"p99","p99",1592595400));
var sum0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28846__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
var p90_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28846__$1,new cljs.core.Keyword(null,"p90","p90",313918962));
var max0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28846__$1,new cljs.core.Keyword(null,"max","max",61366548));
var p25_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28846__$1,new cljs.core.Keyword(null,"p25","p25",1907931661));
var n0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28846__$1,new cljs.core.Keyword(null,"n","n",562130025));
var p75_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28846__$1,new cljs.core.Keyword(null,"p75","p75",-552641530));
var p95_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28846__$1,new cljs.core.Keyword(null,"p95","p95",-1078985474));
var mad_sum0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28846__$1,new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937));
var min0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28846__$1,new cljs.core.Keyword(null,"min","min",444991522));
var p50_0 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28846__$1,new cljs.core.Keyword(null,"p50","p50",-1500126372));
var map__28847 = m1;
var map__28847__$1 = (((((!((map__28847 == null))))?(((((map__28847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28847):map__28847);
var p95_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28847__$1,new cljs.core.Keyword(null,"p95","p95",-1078985474));
var sum1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28847__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
var n1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28847__$1,new cljs.core.Keyword(null,"n","n",562130025));
var max1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28847__$1,new cljs.core.Keyword(null,"max","max",61366548));
var mad_sum1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28847__$1,new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937));
var p75_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28847__$1,new cljs.core.Keyword(null,"p75","p75",-552641530));
var min1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28847__$1,new cljs.core.Keyword(null,"min","min",444991522));
var p50_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28847__$1,new cljs.core.Keyword(null,"p50","p50",-1500126372));
var p99_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28847__$1,new cljs.core.Keyword(null,"p99","p99",1592595400));
var p25_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28847__$1,new cljs.core.Keyword(null,"p25","p25",1907931661));
var p90_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28847__$1,new cljs.core.Keyword(null,"p90","p90",313918962));
var ___$2 = (((n0 > (0)))?null:(function(){throw (new Error("Assert failed: (pos? n0)"))})());
var ___$3 = (((n1 > (0)))?null:(function(){throw (new Error("Assert failed: (pos? n1)"))})());
var n2 = (n1 + n0);
var n0_ratio = (n0 / n2);
var n1_ratio = (n1 / n2);
var sum2 = (sum0 + sum1);
var mean2 = (sum2 / n2);
var min2 = (((min0 < min1))?min0:min1);
var max2 = (((max0 > max1))?max0:max1);
var mad_sum2 = (mad_sum0 + mad_sum1);
var p25_2 = (function (){var G__28851 = ((n0_ratio * p25_0) + (n1_ratio * p25_1));
return Math.round(G__28851);
})();
var p50_2 = (function (){var G__28852 = ((n0_ratio * p50_0) + (n1_ratio * p50_1));
return Math.round(G__28852);
})();
var p75_2 = (function (){var G__28853 = ((n0_ratio * p75_0) + (n1_ratio * p75_1));
return Math.round(G__28853);
})();
var p90_2 = (function (){var G__28854 = ((n0_ratio * p90_0) + (n1_ratio * p90_1));
return Math.round(G__28854);
})();
var p95_2 = (function (){var G__28855 = ((n0_ratio * p95_0) + (n1_ratio * p95_1));
return Math.round(G__28855);
})();
var p99_2 = (function (){var G__28856 = ((n0_ratio * p99_0) + (n1_ratio * p99_1));
return Math.round(G__28856);
})();
var mad2 = (mad_sum2 / n2);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"p95","p95",-1078985474)],[min2,mean2,p75_2,mad_sum2,p99_2,n2,p25_2,p90_2,max2,mad2,p50_2,sum2,p95_2]);
} else {
return m0;
}
} else {
return m1;
}
});
taoensso.tufte.stats.perc = (function taoensso$tufte$stats$perc(n,d){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__28858 = ((n / d) * 100.0);
return Math.round(G__28858);
})()),"%"].join('');
});
var round2_28989 = taoensso.encore.round2;
taoensso.tufte.stats.fmt = (function taoensso$tufte$stats$fmt(nanosecs){
var ns = nanosecs;
if((ns >= 6.0E10)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__28860 = (ns / 6.0E10);
return (round2_28989.cljs$core$IFn$_invoke$arity$1 ? round2_28989.cljs$core$IFn$_invoke$arity$1(G__28860) : round2_28989.call(null,G__28860));
})()),"m "].join('');
} else {
if((ns >= 1.0E9)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__28862 = (ns / 1.0E9);
return (round2_28989.cljs$core$IFn$_invoke$arity$1 ? round2_28989.cljs$core$IFn$_invoke$arity$1(G__28862) : round2_28989.call(null,G__28862));
})()),"s "].join('');
} else {
if((ns >= 1000000.0)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__28864 = (ns / 1000000.0);
return (round2_28989.cljs$core$IFn$_invoke$arity$1 ? round2_28989.cljs$core$IFn$_invoke$arity$1(G__28864) : round2_28989.call(null,G__28864));
})()),"ms"].join('');
} else {
if((ns >= 1000.0)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__28866 = (ns / 1000.0);
return (round2_28989.cljs$core$IFn$_invoke$arity$1 ? round2_28989.cljs$core$IFn$_invoke$arity$1(G__28866) : round2_28989.call(null,G__28866));
})()),"\u03BCs"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((round2_28989.cljs$core$IFn$_invoke$arity$1 ? round2_28989.cljs$core$IFn$_invoke$arity$1(ns) : round2_28989.call(null,ns))),"ns"].join('');

}
}
}
}
});
taoensso.tufte.stats.fmt_comma = (function taoensso$tufte$stats$fmt_comma(n){
return [(((n < (0)))?"-":null),clojure.string.reverse(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.join,cljs.core.partition.cljs$core$IFn$_invoke$arity$4((3),(3),"",cljs.core.reverse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(n)))))))].join('');
});
taoensso.tufte.stats.all_format_columns = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n-calls","n-calls",-422780724),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"p95","p95",-1078985474),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"total","total",1916810418)], null);
taoensso.tufte.stats.default_format_columns = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n-calls","n-calls",-422780724),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"p95","p95",-1078985474),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"total","total",1916810418)], null);
taoensso.tufte.stats.default_format_id_fn = (function taoensso$tufte$stats$default_format_id_fn(id){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(id);
});
taoensso.tufte.stats.get_max_id_width = (function taoensso$tufte$stats$get_max_id_width(stats,p__28867){
var map__28868 = p__28867;
var map__28868__$1 = (((((!((map__28868 == null))))?(((((map__28868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28868):map__28868);
var format_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28868__$1,new cljs.core.Keyword(null,"format-id-fn","format-id-fn",513589829),taoensso.tufte.stats.default_format_id_fn);
if(cljs.core.truth_(stats)){
return cljs.core.reduce_kv((function (acc,k,v){
var c = cljs.core.count((format_id_fn.cljs$core$IFn$_invoke$arity$1 ? format_id_fn.cljs$core$IFn$_invoke$arity$1(k) : format_id_fn.call(null,k)));
if((c > acc)){
return c;
} else {
return acc;
}
}),(9),stats);
} else {
return null;
}
});
/**
 * Returns a formatted table string for given `{<id> <stats>}` map.
 *   Assumes nanosecond clock, stats based on profiling id'd nanosecond times.
 */
taoensso.tufte.stats.format_stats = (function taoensso$tufte$stats$format_stats(clock_total,id_stats,p__28870){
var map__28871 = p__28870;
var map__28871__$1 = (((((!((map__28871 == null))))?(((((map__28871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28871):map__28871);
var opts = map__28871__$1;
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28871__$1,new cljs.core.Keyword(null,"columns","columns",1998437288),taoensso.tufte.stats.default_format_columns);
var sort_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28871__$1,new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),(function (m){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"sum","sum",136986814));
}));
var format_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28871__$1,new cljs.core.Keyword(null,"format-id-fn","format-id-fn",513589829),taoensso.tufte.stats.default_format_id_fn);
var max_id_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28871__$1,new cljs.core.Keyword(null,"max-id-width","max-id-width",-1761362373));
if(cljs.core.truth_(id_stats)){
taoensso.truss.impl.revery_QMARK_((function (__in){
var e = (function (){try{if((function (){var fexpr__28874 = (function (x){
return cljs.core.contains_QMARK_((taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(taoensso.tufte.stats.all_format_columns) : taoensso.truss.impl.set_STAR_.call(null,taoensso.tufte.stats.all_format_columns)),x);
});
return fexpr__28874(__in);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e28873){if((e28873 instanceof Error)){
var e = e28873;
return e;
} else {
throw e28873;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tufte.stats",276,"([:el all-format-columns] __in)",__in,e,null);
}
}),columns);

var clock_total__$1 = cljs.core.long$(clock_total);
var accounted_total = cljs.core.reduce_kv((function (acc,_id,s){
return (acc + cljs.core.long$(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"sum","sum",136986814))));
}),(0),id_stats);
var sorted_ids = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (id){
var G__28875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_stats,id);
return (sort_fn.cljs$core$IFn$_invoke$arity$1 ? sort_fn.cljs$core$IFn$_invoke$arity$1(G__28875) : sort_fn.call(null,G__28875));
}),taoensso.encore.rcompare,cljs.core.keys(id_stats));
var max_id_width__$1 = (function (){var or__4185__auto__ = max_id_width;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return taoensso.tufte.stats.get_max_id_width(id_stats,opts);
}
})();
var column__GT_pattern = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"n-calls","n-calls",-422780724),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"p95","p95",-1078985474)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Min"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Mean"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"75% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"99% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"nCalls"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"25% \u2264"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Total",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"90% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Max"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"pId",new cljs.core.Keyword(null,"min-width","min-width",1926193728),max_id_width__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"left","left",-399115937)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"MAD",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(5)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"Clock"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"50% \u2264"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"95% \u2264"], null)]);
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1("");
var append_col = (function (column,s){
var map__28876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(column__GT_pattern,column);
var map__28876__$1 = (((((!((map__28876 == null))))?(((((map__28876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28876):map__28876);
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28876__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728),(10));
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28876__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"right","right",-452581833));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__28879 = align;
var G__28879__$1 = (((G__28879 instanceof cljs.core.Keyword))?G__28879.fqn:null);
switch (G__28879__$1) {
case "left":
return "-";

break;
case "right":
return "";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28879__$1)].join('')));

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(min_width),"s"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0)));
});
var seq__28880_29020 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),columns));
var chunk__28881_29021 = null;
var count__28882_29022 = (0);
var i__28883_29023 = (0);
while(true){
if((i__28883_29023 < count__28882_29022)){
var column_29025 = chunk__28881_29021.cljs$core$IIndexed$_nth$arity$2(null,i__28883_29023);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),column_29025)){
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");
}

append_col(column_29025,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(column__GT_pattern,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_29025,new cljs.core.Keyword(null,"heading","heading",-1312171873)], null)));


var G__29029 = seq__28880_29020;
var G__29030 = chunk__28881_29021;
var G__29031 = count__28882_29022;
var G__29032 = (i__28883_29023 + (1));
seq__28880_29020 = G__29029;
chunk__28881_29021 = G__29030;
count__28882_29022 = G__29031;
i__28883_29023 = G__29032;
continue;
} else {
var temp__5735__auto___29033 = cljs.core.seq(seq__28880_29020);
if(temp__5735__auto___29033){
var seq__28880_29034__$1 = temp__5735__auto___29033;
if(cljs.core.chunked_seq_QMARK_(seq__28880_29034__$1)){
var c__4609__auto___29036 = cljs.core.chunk_first(seq__28880_29034__$1);
var G__29037 = cljs.core.chunk_rest(seq__28880_29034__$1);
var G__29038 = c__4609__auto___29036;
var G__29039 = cljs.core.count(c__4609__auto___29036);
var G__29040 = (0);
seq__28880_29020 = G__29037;
chunk__28881_29021 = G__29038;
count__28882_29022 = G__29039;
i__28883_29023 = G__29040;
continue;
} else {
var column_29042 = cljs.core.first(seq__28880_29034__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),column_29042)){
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");
}

append_col(column_29042,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(column__GT_pattern,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_29042,new cljs.core.Keyword(null,"heading","heading",-1312171873)], null)));


var G__29045 = cljs.core.next(seq__28880_29034__$1);
var G__29046 = null;
var G__29047 = (0);
var G__29048 = (0);
seq__28880_29020 = G__29045;
chunk__28881_29021 = G__29046;
count__28882_29022 = G__29047;
i__28883_29023 = G__29048;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n\n");

var seq__28884_29049 = cljs.core.seq(sorted_ids);
var chunk__28885_29050 = null;
var count__28886_29051 = (0);
var i__28887_29052 = (0);
while(true){
if((i__28887_29052 < count__28886_29051)){
var id_29055 = chunk__28885_29050.cljs$core$IIndexed$_nth$arity$2(null,i__28887_29052);
var s_29057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_stats,id_29055);
var sum_29058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_29057,new cljs.core.Keyword(null,"sum","sum",136986814));
var mean_29059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_29057,new cljs.core.Keyword(null,"mean","mean",-1359234715));
append_col(new cljs.core.Keyword(null,"id","id",-1388402092),(format_id_fn.cljs$core$IFn$_invoke$arity$1 ? format_id_fn.cljs$core$IFn$_invoke$arity$1(id_29055) : format_id_fn.call(null,id_29055)));

var seq__28906_29061 = cljs.core.seq(columns);
var chunk__28907_29062 = null;
var count__28908_29063 = (0);
var i__28909_29064 = (0);
while(true){
if((i__28909_29064 < count__28908_29063)){
var column_29065 = chunk__28907_29062.cljs$core$IIndexed$_nth$arity$2(null,i__28909_29064);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__28914_29067 = column_29065;
var G__28914_29068__$1 = (((G__28914_29067 instanceof cljs.core.Keyword))?G__28914_29067.fqn:null);
switch (G__28914_29068__$1) {
case "n-calls":
append_col(column_29065,taoensso.tufte.stats.fmt_comma(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_29057,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col(column_29065,taoensso.tufte.stats.fmt(mean_29059));

break;
case "mad":
append_col(column_29065,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_29057,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_29059)].join(''));

break;
case "total":
append_col(column_29065,taoensso.tufte.stats.perc(sum_29058,clock_total__$1));

break;
case "clock":
append_col(column_29065,taoensso.tufte.stats.fmt(sum_29058));

break;
default:
append_col(column_29065,taoensso.tufte.stats.fmt(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_29057,column_29065)));

}


var G__29076 = seq__28906_29061;
var G__29077 = chunk__28907_29062;
var G__29078 = count__28908_29063;
var G__29079 = (i__28909_29064 + (1));
seq__28906_29061 = G__29076;
chunk__28907_29062 = G__29077;
count__28908_29063 = G__29078;
i__28909_29064 = G__29079;
continue;
} else {
var temp__5735__auto___29080 = cljs.core.seq(seq__28906_29061);
if(temp__5735__auto___29080){
var seq__28906_29081__$1 = temp__5735__auto___29080;
if(cljs.core.chunked_seq_QMARK_(seq__28906_29081__$1)){
var c__4609__auto___29082 = cljs.core.chunk_first(seq__28906_29081__$1);
var G__29083 = cljs.core.chunk_rest(seq__28906_29081__$1);
var G__29084 = c__4609__auto___29082;
var G__29085 = cljs.core.count(c__4609__auto___29082);
var G__29086 = (0);
seq__28906_29061 = G__29083;
chunk__28907_29062 = G__29084;
count__28908_29063 = G__29085;
i__28909_29064 = G__29086;
continue;
} else {
var column_29087 = cljs.core.first(seq__28906_29081__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__28915_29090 = column_29087;
var G__28915_29091__$1 = (((G__28915_29090 instanceof cljs.core.Keyword))?G__28915_29090.fqn:null);
switch (G__28915_29091__$1) {
case "n-calls":
append_col(column_29087,taoensso.tufte.stats.fmt_comma(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_29057,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col(column_29087,taoensso.tufte.stats.fmt(mean_29059));

break;
case "mad":
append_col(column_29087,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_29057,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_29059)].join(''));

break;
case "total":
append_col(column_29087,taoensso.tufte.stats.perc(sum_29058,clock_total__$1));

break;
case "clock":
append_col(column_29087,taoensso.tufte.stats.fmt(sum_29058));

break;
default:
append_col(column_29087,taoensso.tufte.stats.fmt(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_29057,column_29087)));

}


var G__29103 = cljs.core.next(seq__28906_29081__$1);
var G__29104 = null;
var G__29105 = (0);
var G__29106 = (0);
seq__28906_29061 = G__29103;
chunk__28907_29062 = G__29104;
count__28908_29063 = G__29105;
i__28909_29064 = G__29106;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");


var G__29107 = seq__28884_29049;
var G__29108 = chunk__28885_29050;
var G__29109 = count__28886_29051;
var G__29110 = (i__28887_29052 + (1));
seq__28884_29049 = G__29107;
chunk__28885_29050 = G__29108;
count__28886_29051 = G__29109;
i__28887_29052 = G__29110;
continue;
} else {
var temp__5735__auto___29113 = cljs.core.seq(seq__28884_29049);
if(temp__5735__auto___29113){
var seq__28884_29114__$1 = temp__5735__auto___29113;
if(cljs.core.chunked_seq_QMARK_(seq__28884_29114__$1)){
var c__4609__auto___29115 = cljs.core.chunk_first(seq__28884_29114__$1);
var G__29118 = cljs.core.chunk_rest(seq__28884_29114__$1);
var G__29119 = c__4609__auto___29115;
var G__29120 = cljs.core.count(c__4609__auto___29115);
var G__29121 = (0);
seq__28884_29049 = G__29118;
chunk__28885_29050 = G__29119;
count__28886_29051 = G__29120;
i__28887_29052 = G__29121;
continue;
} else {
var id_29124 = cljs.core.first(seq__28884_29114__$1);
var s_29125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id_stats,id_29124);
var sum_29126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_29125,new cljs.core.Keyword(null,"sum","sum",136986814));
var mean_29127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_29125,new cljs.core.Keyword(null,"mean","mean",-1359234715));
append_col(new cljs.core.Keyword(null,"id","id",-1388402092),(format_id_fn.cljs$core$IFn$_invoke$arity$1 ? format_id_fn.cljs$core$IFn$_invoke$arity$1(id_29124) : format_id_fn.call(null,id_29124)));

var seq__28916_29134 = cljs.core.seq(columns);
var chunk__28917_29135 = null;
var count__28918_29136 = (0);
var i__28919_29137 = (0);
while(true){
if((i__28919_29137 < count__28918_29136)){
var column_29140 = chunk__28917_29135.cljs$core$IIndexed$_nth$arity$2(null,i__28919_29137);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__28922_29141 = column_29140;
var G__28922_29142__$1 = (((G__28922_29141 instanceof cljs.core.Keyword))?G__28922_29141.fqn:null);
switch (G__28922_29142__$1) {
case "n-calls":
append_col(column_29140,taoensso.tufte.stats.fmt_comma(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_29125,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col(column_29140,taoensso.tufte.stats.fmt(mean_29127));

break;
case "mad":
append_col(column_29140,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_29125,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_29127)].join(''));

break;
case "total":
append_col(column_29140,taoensso.tufte.stats.perc(sum_29126,clock_total__$1));

break;
case "clock":
append_col(column_29140,taoensso.tufte.stats.fmt(sum_29126));

break;
default:
append_col(column_29140,taoensso.tufte.stats.fmt(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_29125,column_29140)));

}


var G__29157 = seq__28916_29134;
var G__29158 = chunk__28917_29135;
var G__29159 = count__28918_29136;
var G__29160 = (i__28919_29137 + (1));
seq__28916_29134 = G__29157;
chunk__28917_29135 = G__29158;
count__28918_29136 = G__29159;
i__28919_29137 = G__29160;
continue;
} else {
var temp__5735__auto___29161__$1 = cljs.core.seq(seq__28916_29134);
if(temp__5735__auto___29161__$1){
var seq__28916_29163__$1 = temp__5735__auto___29161__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28916_29163__$1)){
var c__4609__auto___29164 = cljs.core.chunk_first(seq__28916_29163__$1);
var G__29165 = cljs.core.chunk_rest(seq__28916_29163__$1);
var G__29166 = c__4609__auto___29164;
var G__29167 = cljs.core.count(c__4609__auto___29164);
var G__29168 = (0);
seq__28916_29134 = G__29165;
chunk__28917_29135 = G__29166;
count__28918_29136 = G__29167;
i__28919_29137 = G__29168;
continue;
} else {
var column_29171 = cljs.core.first(seq__28916_29163__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__28923_29173 = column_29171;
var G__28923_29174__$1 = (((G__28923_29173 instanceof cljs.core.Keyword))?G__28923_29173.fqn:null);
switch (G__28923_29174__$1) {
case "n-calls":
append_col(column_29171,taoensso.tufte.stats.fmt_comma(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_29125,new cljs.core.Keyword(null,"n","n",562130025))));

break;
case "mean":
append_col(column_29171,taoensso.tufte.stats.fmt(mean_29127));

break;
case "mad":
append_col(column_29171,["\u00B1",taoensso.tufte.stats.perc(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_29125,new cljs.core.Keyword(null,"mad","mad",-1963165801)),mean_29127)].join(''));

break;
case "total":
append_col(column_29171,taoensso.tufte.stats.perc(sum_29126,clock_total__$1));

break;
case "clock":
append_col(column_29171,taoensso.tufte.stats.fmt(sum_29126));

break;
default:
append_col(column_29171,taoensso.tufte.stats.fmt(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_29125,column_29171)));

}


var G__29177 = cljs.core.next(seq__28916_29163__$1);
var G__29178 = null;
var G__29179 = (0);
var G__29180 = (0);
seq__28916_29134 = G__29177;
chunk__28917_29135 = G__29178;
count__28918_29136 = G__29179;
i__28919_29137 = G__29180;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");


var G__29181 = cljs.core.next(seq__28884_29114__$1);
var G__29182 = null;
var G__29183 = (0);
var G__29184 = (0);
seq__28884_29049 = G__29181;
chunk__28885_29050 = G__29182;
count__28886_29051 = G__29183;
i__28887_29052 = G__29184;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");

append_col(new cljs.core.Keyword(null,"id","id",-1388402092),"Accounted");

var seq__28924_29191 = cljs.core.seq(columns);
var chunk__28925_29192 = null;
var count__28926_29193 = (0);
var i__28927_29194 = (0);
while(true){
if((i__28927_29194 < count__28926_29193)){
var column_29197 = chunk__28925_29192.cljs$core$IIndexed$_nth$arity$2(null,i__28927_29194);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__28932_29199 = column_29197;
var G__28932_29200__$1 = (((G__28932_29199 instanceof cljs.core.Keyword))?G__28932_29199.fqn:null);
switch (G__28932_29200__$1) {
case "total":
append_col(column_29197,taoensso.tufte.stats.perc(accounted_total,clock_total__$1));

break;
case "clock":
append_col(column_29197,taoensso.tufte.stats.fmt(accounted_total));

break;
default:
append_col(column_29197,"");

}


var G__29203 = seq__28924_29191;
var G__29204 = chunk__28925_29192;
var G__29205 = count__28926_29193;
var G__29206 = (i__28927_29194 + (1));
seq__28924_29191 = G__29203;
chunk__28925_29192 = G__29204;
count__28926_29193 = G__29205;
i__28927_29194 = G__29206;
continue;
} else {
var temp__5735__auto___29207 = cljs.core.seq(seq__28924_29191);
if(temp__5735__auto___29207){
var seq__28924_29208__$1 = temp__5735__auto___29207;
if(cljs.core.chunked_seq_QMARK_(seq__28924_29208__$1)){
var c__4609__auto___29209 = cljs.core.chunk_first(seq__28924_29208__$1);
var G__29210 = cljs.core.chunk_rest(seq__28924_29208__$1);
var G__29211 = c__4609__auto___29209;
var G__29212 = cljs.core.count(c__4609__auto___29209);
var G__29213 = (0);
seq__28924_29191 = G__29210;
chunk__28925_29192 = G__29211;
count__28926_29193 = G__29212;
i__28927_29194 = G__29213;
continue;
} else {
var column_29214 = cljs.core.first(seq__28924_29208__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__28933_29215 = column_29214;
var G__28933_29216__$1 = (((G__28933_29215 instanceof cljs.core.Keyword))?G__28933_29215.fqn:null);
switch (G__28933_29216__$1) {
case "total":
append_col(column_29214,taoensso.tufte.stats.perc(accounted_total,clock_total__$1));

break;
case "clock":
append_col(column_29214,taoensso.tufte.stats.fmt(accounted_total));

break;
default:
append_col(column_29214,"");

}


var G__29223 = cljs.core.next(seq__28924_29208__$1);
var G__29224 = null;
var G__29225 = (0);
var G__29226 = (0);
seq__28924_29191 = G__29223;
chunk__28925_29192 = G__29224;
count__28926_29193 = G__29225;
i__28927_29194 = G__29226;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");

append_col(new cljs.core.Keyword(null,"id","id",-1388402092),"Clock");

var seq__28934_29228 = cljs.core.seq(columns);
var chunk__28935_29229 = null;
var count__28936_29230 = (0);
var i__28937_29231 = (0);
while(true){
if((i__28937_29231 < count__28936_29230)){
var column_29238 = chunk__28935_29229.cljs$core$IIndexed$_nth$arity$2(null,i__28937_29231);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__28941_29239 = column_29238;
var G__28941_29240__$1 = (((G__28941_29239 instanceof cljs.core.Keyword))?G__28941_29239.fqn:null);
switch (G__28941_29240__$1) {
case "total":
append_col(column_29238,"100%");

break;
case "clock":
append_col(column_29238,taoensso.tufte.stats.fmt(clock_total__$1));

break;
default:
append_col(column_29238,"");

}


var G__29246 = seq__28934_29228;
var G__29247 = chunk__28935_29229;
var G__29248 = count__28936_29230;
var G__29249 = (i__28937_29231 + (1));
seq__28934_29228 = G__29246;
chunk__28935_29229 = G__29247;
count__28936_29230 = G__29248;
i__28937_29231 = G__29249;
continue;
} else {
var temp__5735__auto___29251 = cljs.core.seq(seq__28934_29228);
if(temp__5735__auto___29251){
var seq__28934_29253__$1 = temp__5735__auto___29251;
if(cljs.core.chunked_seq_QMARK_(seq__28934_29253__$1)){
var c__4609__auto___29256 = cljs.core.chunk_first(seq__28934_29253__$1);
var G__29257 = cljs.core.chunk_rest(seq__28934_29253__$1);
var G__29258 = c__4609__auto___29256;
var G__29259 = cljs.core.count(c__4609__auto___29256);
var G__29260 = (0);
seq__28934_29228 = G__29257;
chunk__28935_29229 = G__29258;
count__28936_29230 = G__29259;
i__28937_29231 = G__29260;
continue;
} else {
var column_29264 = cljs.core.first(seq__28934_29253__$1);
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb," ");

var G__28943_29268 = column_29264;
var G__28943_29269__$1 = (((G__28943_29268 instanceof cljs.core.Keyword))?G__28943_29268.fqn:null);
switch (G__28943_29269__$1) {
case "total":
append_col(column_29264,"100%");

break;
case "clock":
append_col(column_29264,taoensso.tufte.stats.fmt(clock_total__$1));

break;
default:
append_col(column_29264,"");

}


var G__29275 = cljs.core.next(seq__28934_29253__$1);
var G__29276 = null;
var G__29277 = (0);
var G__29278 = (0);
seq__28934_29228 = G__29275;
chunk__28935_29229 = G__29276;
count__28936_29230 = G__29277;
i__28937_29231 = G__29278;
continue;
}
} else {
}
}
break;
}

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,"\n");

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
});

//# sourceMappingURL=taoensso.tufte.stats.js.map
