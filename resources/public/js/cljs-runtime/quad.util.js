goog.provide('quad.util');
goog.require('cljs.core');
goog.require('cljs.core.async');
quad.util.setup_listener_BANG_ = (function quad$util$setup_listener_BANG_(var_args){
var G__65615 = arguments.length;
switch (G__65615) {
case 4:
return quad.util.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return quad.util.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return quad.util.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quad.util.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (obj,event_type,callback,args){
return obj.addEventListener(event_type,callback,args);
}));

(quad.util.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (obj,event_type,callback){
return obj.addEventListener(event_type,callback);
}));

(quad.util.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (event_type,callback){
return window.addEventListener(event_type,callback);
}));

(quad.util.setup_listener_BANG_.cljs$lang$maxFixedArity = 4);

quad.util.listen = (function quad$util$listen(var_args){
var G__65617 = arguments.length;
switch (G__65617) {
case 3:
return quad.util.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return quad.util.listen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quad.util.listen.cljs$core$IFn$_invoke$arity$3 = (function (element,type,prevent_default_QMARK_){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
quad.util.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$3(element,type,(function (evt){
if(cljs.core.truth_(prevent_default_QMARK_)){
evt.preventDefault();
} else {
}

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,evt);
}));

return out;
}));

(quad.util.listen.cljs$core$IFn$_invoke$arity$2 = (function (element,type){
return quad.util.listen.cljs$core$IFn$_invoke$arity$3(element,type,false);
}));

(quad.util.listen.cljs$lang$maxFixedArity = 3);

quad.util.random = (function quad$util$random(min,max){
return ((Math.random() * (max - min)) + min);
});

//# sourceMappingURL=quad.util.js.map
