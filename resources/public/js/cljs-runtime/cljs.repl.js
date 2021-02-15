goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34331){
var map__34332 = p__34331;
var map__34332__$1 = (((((!((map__34332 == null))))?(((((map__34332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34332):map__34332);
var m = map__34332__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34332__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34332__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34334_34744 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34335_34745 = null;
var count__34336_34746 = (0);
var i__34337_34747 = (0);
while(true){
if((i__34337_34747 < count__34336_34746)){
var f_34753 = chunk__34335_34745.cljs$core$IIndexed$_nth$arity$2(null,i__34337_34747);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34753], 0));


var G__34757 = seq__34334_34744;
var G__34758 = chunk__34335_34745;
var G__34759 = count__34336_34746;
var G__34760 = (i__34337_34747 + (1));
seq__34334_34744 = G__34757;
chunk__34335_34745 = G__34758;
count__34336_34746 = G__34759;
i__34337_34747 = G__34760;
continue;
} else {
var temp__5735__auto___34764 = cljs.core.seq(seq__34334_34744);
if(temp__5735__auto___34764){
var seq__34334_34766__$1 = temp__5735__auto___34764;
if(cljs.core.chunked_seq_QMARK_(seq__34334_34766__$1)){
var c__4609__auto___34767 = cljs.core.chunk_first(seq__34334_34766__$1);
var G__34768 = cljs.core.chunk_rest(seq__34334_34766__$1);
var G__34769 = c__4609__auto___34767;
var G__34770 = cljs.core.count(c__4609__auto___34767);
var G__34771 = (0);
seq__34334_34744 = G__34768;
chunk__34335_34745 = G__34769;
count__34336_34746 = G__34770;
i__34337_34747 = G__34771;
continue;
} else {
var f_34772 = cljs.core.first(seq__34334_34766__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34772], 0));


var G__34777 = cljs.core.next(seq__34334_34766__$1);
var G__34778 = null;
var G__34779 = (0);
var G__34780 = (0);
seq__34334_34744 = G__34777;
chunk__34335_34745 = G__34778;
count__34336_34746 = G__34779;
i__34337_34747 = G__34780;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34782 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34782], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34782)))?cljs.core.second(arglists_34782):arglists_34782)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34355_34787 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34356_34788 = null;
var count__34357_34789 = (0);
var i__34358_34790 = (0);
while(true){
if((i__34358_34790 < count__34357_34789)){
var vec__34382_34792 = chunk__34356_34788.cljs$core$IIndexed$_nth$arity$2(null,i__34358_34790);
var name_34793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34382_34792,(0),null);
var map__34385_34794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34382_34792,(1),null);
var map__34385_34795__$1 = (((((!((map__34385_34794 == null))))?(((((map__34385_34794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34385_34794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34385_34794):map__34385_34794);
var doc_34796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34385_34795__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34385_34795__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34793], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34797], 0));

if(cljs.core.truth_(doc_34796)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34796], 0));
} else {
}


var G__34800 = seq__34355_34787;
var G__34801 = chunk__34356_34788;
var G__34802 = count__34357_34789;
var G__34803 = (i__34358_34790 + (1));
seq__34355_34787 = G__34800;
chunk__34356_34788 = G__34801;
count__34357_34789 = G__34802;
i__34358_34790 = G__34803;
continue;
} else {
var temp__5735__auto___34804 = cljs.core.seq(seq__34355_34787);
if(temp__5735__auto___34804){
var seq__34355_34805__$1 = temp__5735__auto___34804;
if(cljs.core.chunked_seq_QMARK_(seq__34355_34805__$1)){
var c__4609__auto___34809 = cljs.core.chunk_first(seq__34355_34805__$1);
var G__34810 = cljs.core.chunk_rest(seq__34355_34805__$1);
var G__34811 = c__4609__auto___34809;
var G__34812 = cljs.core.count(c__4609__auto___34809);
var G__34813 = (0);
seq__34355_34787 = G__34810;
chunk__34356_34788 = G__34811;
count__34357_34789 = G__34812;
i__34358_34790 = G__34813;
continue;
} else {
var vec__34393_34814 = cljs.core.first(seq__34355_34805__$1);
var name_34815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34393_34814,(0),null);
var map__34397_34816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34393_34814,(1),null);
var map__34397_34817__$1 = (((((!((map__34397_34816 == null))))?(((((map__34397_34816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34397_34816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34397_34816):map__34397_34816);
var doc_34818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34397_34817__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34397_34817__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34815], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34819], 0));

if(cljs.core.truth_(doc_34818)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34818], 0));
} else {
}


var G__34825 = cljs.core.next(seq__34355_34805__$1);
var G__34826 = null;
var G__34827 = (0);
var G__34828 = (0);
seq__34355_34787 = G__34825;
chunk__34356_34788 = G__34826;
count__34357_34789 = G__34827;
i__34358_34790 = G__34828;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34410 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34411 = null;
var count__34412 = (0);
var i__34413 = (0);
while(true){
if((i__34413 < count__34412)){
var role = chunk__34411.cljs$core$IIndexed$_nth$arity$2(null,i__34413);
var temp__5735__auto___34830__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34830__$1)){
var spec_34831 = temp__5735__auto___34830__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34831)], 0));
} else {
}


var G__34836 = seq__34410;
var G__34837 = chunk__34411;
var G__34838 = count__34412;
var G__34839 = (i__34413 + (1));
seq__34410 = G__34836;
chunk__34411 = G__34837;
count__34412 = G__34838;
i__34413 = G__34839;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__34410);
if(temp__5735__auto____$1){
var seq__34410__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34410__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34410__$1);
var G__34841 = cljs.core.chunk_rest(seq__34410__$1);
var G__34842 = c__4609__auto__;
var G__34843 = cljs.core.count(c__4609__auto__);
var G__34844 = (0);
seq__34410 = G__34841;
chunk__34411 = G__34842;
count__34412 = G__34843;
i__34413 = G__34844;
continue;
} else {
var role = cljs.core.first(seq__34410__$1);
var temp__5735__auto___34845__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34845__$2)){
var spec_34846 = temp__5735__auto___34845__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34846)], 0));
} else {
}


var G__34848 = cljs.core.next(seq__34410__$1);
var G__34849 = null;
var G__34850 = (0);
var G__34851 = (0);
seq__34410 = G__34848;
chunk__34411 = G__34849;
count__34412 = G__34850;
i__34413 = G__34851;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34858 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34859 = cljs.core.ex_cause(t);
via = G__34858;
t = G__34859;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34492 = datafied_throwable;
var map__34492__$1 = (((((!((map__34492 == null))))?(((((map__34492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34492):map__34492);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34492__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34492__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34492__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34493 = cljs.core.last(via);
var map__34493__$1 = (((((!((map__34493 == null))))?(((((map__34493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34493):map__34493);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34493__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34493__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34493__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34494 = data;
var map__34494__$1 = (((((!((map__34494 == null))))?(((((map__34494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34494):map__34494);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34494__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34494__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34494__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34495 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34495__$1 = (((((!((map__34495 == null))))?(((((map__34495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34495):map__34495);
var top_data = map__34495__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34495__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34515 = phase;
var G__34515__$1 = (((G__34515 instanceof cljs.core.Keyword))?G__34515.fqn:null);
switch (G__34515__$1) {
case "read-source":
var map__34519 = data;
var map__34519__$1 = (((((!((map__34519 == null))))?(((((map__34519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34519):map__34519);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34519__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34519__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34525 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34525__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34525,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34525);
var G__34525__$2 = (cljs.core.truth_((function (){var fexpr__34529 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34529.cljs$core$IFn$_invoke$arity$1 ? fexpr__34529.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34529.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34525__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34525__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34525__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34525__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34533 = top_data;
var G__34533__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34533,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34533);
var G__34533__$2 = (cljs.core.truth_((function (){var fexpr__34535 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34535.cljs$core$IFn$_invoke$arity$1 ? fexpr__34535.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34535.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34533__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34533__$1);
var G__34533__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34533__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34533__$2);
var G__34533__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34533__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34533__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34533__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34533__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34539 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34539,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34539,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34539,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34539,(3),null);
var G__34542 = top_data;
var G__34542__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34542,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34542);
var G__34542__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34542__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34542__$1);
var G__34542__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34542__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34542__$2);
var G__34542__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34542__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34542__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34542__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34542__$4;
}

break;
case "execution":
var vec__34556 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34556,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34556,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34556,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34556,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34483_SHARP_){
var or__4185__auto__ = (p1__34483_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__34573 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34573.cljs$core$IFn$_invoke$arity$1 ? fexpr__34573.cljs$core$IFn$_invoke$arity$1(p1__34483_SHARP_) : fexpr__34573.call(null,p1__34483_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__34574 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34574__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34574,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34574);
var G__34574__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34574__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34574__$1);
var G__34574__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34574__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34574__$2);
var G__34574__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34574__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34574__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34574__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34574__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34515__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34606){
var map__34607 = p__34606;
var map__34607__$1 = (((((!((map__34607 == null))))?(((((map__34607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34607):map__34607);
var triage_data = map__34607__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34607__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34607__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34607__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34607__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34607__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34607__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34607__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34607__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34639 = phase;
var G__34639__$1 = (((G__34639 instanceof cljs.core.Keyword))?G__34639.fqn:null);
switch (G__34639__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34650 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34651 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34652 = loc;
var G__34653 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34662_34968 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34663_34969 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34664_34970 = true;
var _STAR_print_fn_STAR__temp_val__34665_34971 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34664_34970);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34665_34971);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34591_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34591_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34663_34969);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34662_34968);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34650,G__34651,G__34652,G__34653) : format.call(null,G__34650,G__34651,G__34652,G__34653));

break;
case "macroexpansion":
var G__34679 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34680 = cause_type;
var G__34681 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34682 = loc;
var G__34683 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34679,G__34680,G__34681,G__34682,G__34683) : format.call(null,G__34679,G__34680,G__34681,G__34682,G__34683));

break;
case "compile-syntax-check":
var G__34686 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34687 = cause_type;
var G__34688 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34689 = loc;
var G__34690 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34686,G__34687,G__34688,G__34689,G__34690) : format.call(null,G__34686,G__34687,G__34688,G__34689,G__34690));

break;
case "compilation":
var G__34707 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34708 = cause_type;
var G__34709 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34710 = loc;
var G__34711 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34707,G__34708,G__34709,G__34710,G__34711) : format.call(null,G__34707,G__34708,G__34709,G__34710,G__34711));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34712 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34713 = symbol;
var G__34714 = loc;
var G__34715 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34716_34975 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34717_34977 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34718_34978 = true;
var _STAR_print_fn_STAR__temp_val__34719_34979 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34718_34978);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34719_34979);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34601_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34601_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34717_34977);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34716_34975);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34712,G__34713,G__34714,G__34715) : format.call(null,G__34712,G__34713,G__34714,G__34715));
} else {
var G__34721 = "Execution error%s at %s(%s).\n%s\n";
var G__34722 = cause_type;
var G__34723 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34724 = loc;
var G__34725 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34721,G__34722,G__34723,G__34724,G__34725) : format.call(null,G__34721,G__34722,G__34723,G__34724,G__34725));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34639__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
