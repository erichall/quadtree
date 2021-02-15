goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28668 = arguments.length;
switch (G__28668) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28680 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28680 = (function (f,blockable,meta28681){
this.f = f;
this.blockable = blockable;
this.meta28681 = meta28681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28682,meta28681__$1){
var self__ = this;
var _28682__$1 = this;
return (new cljs.core.async.t_cljs$core$async28680(self__.f,self__.blockable,meta28681__$1));
}));

(cljs.core.async.t_cljs$core$async28680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28682){
var self__ = this;
var _28682__$1 = this;
return self__.meta28681;
}));

(cljs.core.async.t_cljs$core$async28680.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28680.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28680.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28680.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28681","meta28681",-1271147462,null)], null);
}));

(cljs.core.async.t_cljs$core$async28680.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28680");

(cljs.core.async.t_cljs$core$async28680.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async28680");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28680.
 */
cljs.core.async.__GT_t_cljs$core$async28680 = (function cljs$core$async$__GT_t_cljs$core$async28680(f__$1,blockable__$1,meta28681){
return (new cljs.core.async.t_cljs$core$async28680(f__$1,blockable__$1,meta28681));
});

}

return (new cljs.core.async.t_cljs$core$async28680(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28731 = arguments.length;
switch (G__28731) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28739 = arguments.length;
switch (G__28739) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28766 = arguments.length;
switch (G__28766) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_31642 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31642) : fn1.call(null,val_31642));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31642) : fn1.call(null,val_31642));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28811 = arguments.length;
switch (G__28811) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___31672 = n;
var x_31673 = (0);
while(true){
if((x_31673 < n__4666__auto___31672)){
(a[x_31673] = x_31673);

var G__31675 = (x_31673 + (1));
x_31673 = G__31675;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28843 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28843 = (function (flag,meta28844){
this.flag = flag;
this.meta28844 = meta28844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28845,meta28844__$1){
var self__ = this;
var _28845__$1 = this;
return (new cljs.core.async.t_cljs$core$async28843(self__.flag,meta28844__$1));
}));

(cljs.core.async.t_cljs$core$async28843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28845){
var self__ = this;
var _28845__$1 = this;
return self__.meta28844;
}));

(cljs.core.async.t_cljs$core$async28843.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28843.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28844","meta28844",93069384,null)], null);
}));

(cljs.core.async.t_cljs$core$async28843.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28843");

(cljs.core.async.t_cljs$core$async28843.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async28843");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28843.
 */
cljs.core.async.__GT_t_cljs$core$async28843 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28843(flag__$1,meta28844){
return (new cljs.core.async.t_cljs$core$async28843(flag__$1,meta28844));
});

}

return (new cljs.core.async.t_cljs$core$async28843(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28858 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28858 = (function (flag,cb,meta28859){
this.flag = flag;
this.cb = cb;
this.meta28859 = meta28859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28860,meta28859__$1){
var self__ = this;
var _28860__$1 = this;
return (new cljs.core.async.t_cljs$core$async28858(self__.flag,self__.cb,meta28859__$1));
}));

(cljs.core.async.t_cljs$core$async28858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28860){
var self__ = this;
var _28860__$1 = this;
return self__.meta28859;
}));

(cljs.core.async.t_cljs$core$async28858.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28858.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28858.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28858.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28859","meta28859",-1590734957,null)], null);
}));

(cljs.core.async.t_cljs$core$async28858.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28858");

(cljs.core.async.t_cljs$core$async28858.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async28858");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28858.
 */
cljs.core.async.__GT_t_cljs$core$async28858 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28858(flag__$1,cb__$1,meta28859){
return (new cljs.core.async.t_cljs$core$async28858(flag__$1,cb__$1,meta28859));
});

}

return (new cljs.core.async.t_cljs$core$async28858(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28879_SHARP_){
var G__28881 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28879_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28881) : fret.call(null,G__28881));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28880_SHARP_){
var G__28882 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28880_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28882) : fret.call(null,G__28882));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31735 = (i + (1));
i = G__31735;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___31739 = arguments.length;
var i__4790__auto___31740 = (0);
while(true){
if((i__4790__auto___31740 < len__4789__auto___31739)){
args__4795__auto__.push((arguments[i__4790__auto___31740]));

var G__31741 = (i__4790__auto___31740 + (1));
i__4790__auto___31740 = G__31741;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28907){
var map__28908 = p__28907;
var map__28908__$1 = (((((!((map__28908 == null))))?(((((map__28908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28908):map__28908);
var opts = map__28908__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28902){
var G__28904 = cljs.core.first(seq28902);
var seq28902__$1 = cljs.core.next(seq28902);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28904,seq28902__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28919 = arguments.length;
switch (G__28919) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28501__auto___31752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_29012){
var state_val_29013 = (state_29012[(1)]);
if((state_val_29013 === (7))){
var inst_29001 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
var statearr_29019_31754 = state_29012__$1;
(statearr_29019_31754[(2)] = inst_29001);

(statearr_29019_31754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (1))){
var state_29012__$1 = state_29012;
var statearr_29020_31759 = state_29012__$1;
(statearr_29020_31759[(2)] = null);

(statearr_29020_31759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (4))){
var inst_28960 = (state_29012[(7)]);
var inst_28960__$1 = (state_29012[(2)]);
var inst_28974 = (inst_28960__$1 == null);
var state_29012__$1 = (function (){var statearr_29023 = state_29012;
(statearr_29023[(7)] = inst_28960__$1);

return statearr_29023;
})();
if(cljs.core.truth_(inst_28974)){
var statearr_29024_31763 = state_29012__$1;
(statearr_29024_31763[(1)] = (5));

} else {
var statearr_29025_31765 = state_29012__$1;
(statearr_29025_31765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (13))){
var state_29012__$1 = state_29012;
var statearr_29028_31766 = state_29012__$1;
(statearr_29028_31766[(2)] = null);

(statearr_29028_31766[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (6))){
var inst_28960 = (state_29012[(7)]);
var state_29012__$1 = state_29012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29012__$1,(11),to,inst_28960);
} else {
if((state_val_29013 === (3))){
var inst_29007 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29012__$1,inst_29007);
} else {
if((state_val_29013 === (12))){
var state_29012__$1 = state_29012;
var statearr_29034_31769 = state_29012__$1;
(statearr_29034_31769[(2)] = null);

(statearr_29034_31769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (2))){
var state_29012__$1 = state_29012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29012__$1,(4),from);
} else {
if((state_val_29013 === (11))){
var inst_28989 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
if(cljs.core.truth_(inst_28989)){
var statearr_29041_31775 = state_29012__$1;
(statearr_29041_31775[(1)] = (12));

} else {
var statearr_29046_31776 = state_29012__$1;
(statearr_29046_31776[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (9))){
var state_29012__$1 = state_29012;
var statearr_29050_31777 = state_29012__$1;
(statearr_29050_31777[(2)] = null);

(statearr_29050_31777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (5))){
var state_29012__$1 = state_29012;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29052_31778 = state_29012__$1;
(statearr_29052_31778[(1)] = (8));

} else {
var statearr_29053_31780 = state_29012__$1;
(statearr_29053_31780[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (14))){
var inst_28999 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
var statearr_29059_31782 = state_29012__$1;
(statearr_29059_31782[(2)] = inst_28999);

(statearr_29059_31782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (10))){
var inst_28983 = (state_29012[(2)]);
var state_29012__$1 = state_29012;
var statearr_29063_31788 = state_29012__$1;
(statearr_29063_31788[(2)] = inst_28983);

(statearr_29063_31788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29013 === (8))){
var inst_28977 = cljs.core.async.close_BANG_(to);
var state_29012__$1 = state_29012;
var statearr_29071_31791 = state_29012__$1;
(statearr_29071_31791[(2)] = inst_28977);

(statearr_29071_31791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28189__auto__ = null;
var cljs$core$async$state_machine__28189__auto____0 = (function (){
var statearr_29077 = [null,null,null,null,null,null,null,null];
(statearr_29077[(0)] = cljs$core$async$state_machine__28189__auto__);

(statearr_29077[(1)] = (1));

return statearr_29077;
});
var cljs$core$async$state_machine__28189__auto____1 = (function (state_29012){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_29012);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e29079){if((e29079 instanceof Object)){
var ex__28192__auto__ = e29079;
var statearr_29080_31799 = state_29012;
(statearr_29080_31799[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29079;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31808 = state_29012;
state_29012 = G__31808;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$state_machine__28189__auto__ = function(state_29012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28189__auto____1.call(this,state_29012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28189__auto____0;
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28189__auto____1;
return cljs$core$async$state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_29082 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_29082[(6)] = c__28501__auto___31752);

return statearr_29082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29087){
var vec__29088 = p__29087;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29088,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29088,(1),null);
var job = vec__29088;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28501__auto___31815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_29095){
var state_val_29096 = (state_29095[(1)]);
if((state_val_29096 === (1))){
var state_29095__$1 = state_29095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29095__$1,(2),res,v);
} else {
if((state_val_29096 === (2))){
var inst_29092 = (state_29095[(2)]);
var inst_29093 = cljs.core.async.close_BANG_(res);
var state_29095__$1 = (function (){var statearr_29097 = state_29095;
(statearr_29097[(7)] = inst_29092);

return statearr_29097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29095__$1,inst_29093);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____0 = (function (){
var statearr_29098 = [null,null,null,null,null,null,null,null];
(statearr_29098[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__);

(statearr_29098[(1)] = (1));

return statearr_29098;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____1 = (function (state_29095){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_29095);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e29099){if((e29099 instanceof Object)){
var ex__28192__auto__ = e29099;
var statearr_29100_31822 = state_29095;
(statearr_29100_31822[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29099;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31823 = state_29095;
state_29095 = G__31823;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__ = function(state_29095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____1.call(this,state_29095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_29104 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_29104[(6)] = c__28501__auto___31815);

return statearr_29104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29111){
var vec__29112 = p__29111;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29112,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29112,(1),null);
var job = vec__29112;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___31830 = n;
var __31832 = (0);
while(true){
if((__31832 < n__4666__auto___31830)){
var G__29119_31833 = type;
var G__29119_31834__$1 = (((G__29119_31833 instanceof cljs.core.Keyword))?G__29119_31833.fqn:null);
switch (G__29119_31834__$1) {
case "compute":
var c__28501__auto___31839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31832,c__28501__auto___31839,G__29119_31833,G__29119_31834__$1,n__4666__auto___31830,jobs,results,process,async){
return (function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = ((function (__31832,c__28501__auto___31839,G__29119_31833,G__29119_31834__$1,n__4666__auto___31830,jobs,results,process,async){
return (function (state_29134){
var state_val_29135 = (state_29134[(1)]);
if((state_val_29135 === (1))){
var state_29134__$1 = state_29134;
var statearr_29137_31850 = state_29134__$1;
(statearr_29137_31850[(2)] = null);

(statearr_29137_31850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (2))){
var state_29134__$1 = state_29134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29134__$1,(4),jobs);
} else {
if((state_val_29135 === (3))){
var inst_29132 = (state_29134[(2)]);
var state_29134__$1 = state_29134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29134__$1,inst_29132);
} else {
if((state_val_29135 === (4))){
var inst_29123 = (state_29134[(2)]);
var inst_29125 = process(inst_29123);
var state_29134__$1 = state_29134;
if(cljs.core.truth_(inst_29125)){
var statearr_29139_31858 = state_29134__$1;
(statearr_29139_31858[(1)] = (5));

} else {
var statearr_29140_31863 = state_29134__$1;
(statearr_29140_31863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (5))){
var state_29134__$1 = state_29134;
var statearr_29141_31867 = state_29134__$1;
(statearr_29141_31867[(2)] = null);

(statearr_29141_31867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (6))){
var state_29134__$1 = state_29134;
var statearr_29142_31870 = state_29134__$1;
(statearr_29142_31870[(2)] = null);

(statearr_29142_31870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29135 === (7))){
var inst_29130 = (state_29134[(2)]);
var state_29134__$1 = state_29134;
var statearr_29144_31872 = state_29134__$1;
(statearr_29144_31872[(2)] = inst_29130);

(statearr_29144_31872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31832,c__28501__auto___31839,G__29119_31833,G__29119_31834__$1,n__4666__auto___31830,jobs,results,process,async))
;
return ((function (__31832,switch__28188__auto__,c__28501__auto___31839,G__29119_31833,G__29119_31834__$1,n__4666__auto___31830,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____0 = (function (){
var statearr_29146 = [null,null,null,null,null,null,null];
(statearr_29146[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__);

(statearr_29146[(1)] = (1));

return statearr_29146;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____1 = (function (state_29134){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_29134);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e29147){if((e29147 instanceof Object)){
var ex__28192__auto__ = e29147;
var statearr_29148_31878 = state_29134;
(statearr_29148_31878[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29147;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31879 = state_29134;
state_29134 = G__31879;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__ = function(state_29134){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____1.call(this,state_29134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__;
})()
;})(__31832,switch__28188__auto__,c__28501__auto___31839,G__29119_31833,G__29119_31834__$1,n__4666__auto___31830,jobs,results,process,async))
})();
var state__28503__auto__ = (function (){var statearr_29152 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_29152[(6)] = c__28501__auto___31839);

return statearr_29152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
});})(__31832,c__28501__auto___31839,G__29119_31833,G__29119_31834__$1,n__4666__auto___31830,jobs,results,process,async))
);


break;
case "async":
var c__28501__auto___31880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31832,c__28501__auto___31880,G__29119_31833,G__29119_31834__$1,n__4666__auto___31830,jobs,results,process,async){
return (function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = ((function (__31832,c__28501__auto___31880,G__29119_31833,G__29119_31834__$1,n__4666__auto___31830,jobs,results,process,async){
return (function (state_29165){
var state_val_29166 = (state_29165[(1)]);
if((state_val_29166 === (1))){
var state_29165__$1 = state_29165;
var statearr_29175_31883 = state_29165__$1;
(statearr_29175_31883[(2)] = null);

(statearr_29175_31883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (2))){
var state_29165__$1 = state_29165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29165__$1,(4),jobs);
} else {
if((state_val_29166 === (3))){
var inst_29163 = (state_29165[(2)]);
var state_29165__$1 = state_29165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29165__$1,inst_29163);
} else {
if((state_val_29166 === (4))){
var inst_29155 = (state_29165[(2)]);
var inst_29156 = async(inst_29155);
var state_29165__$1 = state_29165;
if(cljs.core.truth_(inst_29156)){
var statearr_29179_31886 = state_29165__$1;
(statearr_29179_31886[(1)] = (5));

} else {
var statearr_29180_31888 = state_29165__$1;
(statearr_29180_31888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (5))){
var state_29165__$1 = state_29165;
var statearr_29181_31889 = state_29165__$1;
(statearr_29181_31889[(2)] = null);

(statearr_29181_31889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (6))){
var state_29165__$1 = state_29165;
var statearr_29185_31890 = state_29165__$1;
(statearr_29185_31890[(2)] = null);

(statearr_29185_31890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29166 === (7))){
var inst_29161 = (state_29165[(2)]);
var state_29165__$1 = state_29165;
var statearr_29187_31896 = state_29165__$1;
(statearr_29187_31896[(2)] = inst_29161);

(statearr_29187_31896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31832,c__28501__auto___31880,G__29119_31833,G__29119_31834__$1,n__4666__auto___31830,jobs,results,process,async))
;
return ((function (__31832,switch__28188__auto__,c__28501__auto___31880,G__29119_31833,G__29119_31834__$1,n__4666__auto___31830,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____0 = (function (){
var statearr_29190 = [null,null,null,null,null,null,null];
(statearr_29190[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__);

(statearr_29190[(1)] = (1));

return statearr_29190;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____1 = (function (state_29165){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_29165);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e29194){if((e29194 instanceof Object)){
var ex__28192__auto__ = e29194;
var statearr_29198_31907 = state_29165;
(statearr_29198_31907[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29194;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31910 = state_29165;
state_29165 = G__31910;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__ = function(state_29165){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____1.call(this,state_29165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__;
})()
;})(__31832,switch__28188__auto__,c__28501__auto___31880,G__29119_31833,G__29119_31834__$1,n__4666__auto___31830,jobs,results,process,async))
})();
var state__28503__auto__ = (function (){var statearr_29199 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_29199[(6)] = c__28501__auto___31880);

return statearr_29199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
});})(__31832,c__28501__auto___31880,G__29119_31833,G__29119_31834__$1,n__4666__auto___31830,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29119_31834__$1)].join('')));

}

var G__31919 = (__31832 + (1));
__31832 = G__31919;
continue;
} else {
}
break;
}

var c__28501__auto___31921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_29224){
var state_val_29225 = (state_29224[(1)]);
if((state_val_29225 === (7))){
var inst_29219 = (state_29224[(2)]);
var state_29224__$1 = state_29224;
var statearr_29230_31929 = state_29224__$1;
(statearr_29230_31929[(2)] = inst_29219);

(statearr_29230_31929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (1))){
var state_29224__$1 = state_29224;
var statearr_29231_31931 = state_29224__$1;
(statearr_29231_31931[(2)] = null);

(statearr_29231_31931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (4))){
var inst_29203 = (state_29224[(7)]);
var inst_29203__$1 = (state_29224[(2)]);
var inst_29204 = (inst_29203__$1 == null);
var state_29224__$1 = (function (){var statearr_29233 = state_29224;
(statearr_29233[(7)] = inst_29203__$1);

return statearr_29233;
})();
if(cljs.core.truth_(inst_29204)){
var statearr_29234_31937 = state_29224__$1;
(statearr_29234_31937[(1)] = (5));

} else {
var statearr_29239_31939 = state_29224__$1;
(statearr_29239_31939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (6))){
var inst_29203 = (state_29224[(7)]);
var inst_29208 = (state_29224[(8)]);
var inst_29208__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29210 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29211 = [inst_29203,inst_29208__$1];
var inst_29212 = (new cljs.core.PersistentVector(null,2,(5),inst_29210,inst_29211,null));
var state_29224__$1 = (function (){var statearr_29240 = state_29224;
(statearr_29240[(8)] = inst_29208__$1);

return statearr_29240;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29224__$1,(8),jobs,inst_29212);
} else {
if((state_val_29225 === (3))){
var inst_29221 = (state_29224[(2)]);
var state_29224__$1 = state_29224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29224__$1,inst_29221);
} else {
if((state_val_29225 === (2))){
var state_29224__$1 = state_29224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29224__$1,(4),from);
} else {
if((state_val_29225 === (9))){
var inst_29216 = (state_29224[(2)]);
var state_29224__$1 = (function (){var statearr_29245 = state_29224;
(statearr_29245[(9)] = inst_29216);

return statearr_29245;
})();
var statearr_29246_31946 = state_29224__$1;
(statearr_29246_31946[(2)] = null);

(statearr_29246_31946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (5))){
var inst_29206 = cljs.core.async.close_BANG_(jobs);
var state_29224__$1 = state_29224;
var statearr_29249_31951 = state_29224__$1;
(statearr_29249_31951[(2)] = inst_29206);

(statearr_29249_31951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29225 === (8))){
var inst_29208 = (state_29224[(8)]);
var inst_29214 = (state_29224[(2)]);
var state_29224__$1 = (function (){var statearr_29250 = state_29224;
(statearr_29250[(10)] = inst_29214);

return statearr_29250;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29224__$1,(9),results,inst_29208);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____0 = (function (){
var statearr_29251 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__);

(statearr_29251[(1)] = (1));

return statearr_29251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____1 = (function (state_29224){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_29224);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e29252){if((e29252 instanceof Object)){
var ex__28192__auto__ = e29252;
var statearr_29253_31954 = state_29224;
(statearr_29253_31954[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29252;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31957 = state_29224;
state_29224 = G__31957;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__ = function(state_29224){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____1.call(this,state_29224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_29261 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_29261[(6)] = c__28501__auto___31921);

return statearr_29261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));


var c__28501__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_29308){
var state_val_29309 = (state_29308[(1)]);
if((state_val_29309 === (7))){
var inst_29304 = (state_29308[(2)]);
var state_29308__$1 = state_29308;
var statearr_29317_31969 = state_29308__$1;
(statearr_29317_31969[(2)] = inst_29304);

(statearr_29317_31969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (20))){
var state_29308__$1 = state_29308;
var statearr_29318_31977 = state_29308__$1;
(statearr_29318_31977[(2)] = null);

(statearr_29318_31977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (1))){
var state_29308__$1 = state_29308;
var statearr_29325_31981 = state_29308__$1;
(statearr_29325_31981[(2)] = null);

(statearr_29325_31981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (4))){
var inst_29265 = (state_29308[(7)]);
var inst_29265__$1 = (state_29308[(2)]);
var inst_29267 = (inst_29265__$1 == null);
var state_29308__$1 = (function (){var statearr_29329 = state_29308;
(statearr_29329[(7)] = inst_29265__$1);

return statearr_29329;
})();
if(cljs.core.truth_(inst_29267)){
var statearr_29331_31988 = state_29308__$1;
(statearr_29331_31988[(1)] = (5));

} else {
var statearr_29332_31997 = state_29308__$1;
(statearr_29332_31997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (15))){
var inst_29281 = (state_29308[(8)]);
var state_29308__$1 = state_29308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29308__$1,(18),to,inst_29281);
} else {
if((state_val_29309 === (21))){
var inst_29299 = (state_29308[(2)]);
var state_29308__$1 = state_29308;
var statearr_29333_32006 = state_29308__$1;
(statearr_29333_32006[(2)] = inst_29299);

(statearr_29333_32006[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (13))){
var inst_29301 = (state_29308[(2)]);
var state_29308__$1 = (function (){var statearr_29334 = state_29308;
(statearr_29334[(9)] = inst_29301);

return statearr_29334;
})();
var statearr_29347_32015 = state_29308__$1;
(statearr_29347_32015[(2)] = null);

(statearr_29347_32015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (6))){
var inst_29265 = (state_29308[(7)]);
var state_29308__$1 = state_29308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29308__$1,(11),inst_29265);
} else {
if((state_val_29309 === (17))){
var inst_29290 = (state_29308[(2)]);
var state_29308__$1 = state_29308;
if(cljs.core.truth_(inst_29290)){
var statearr_29348_32037 = state_29308__$1;
(statearr_29348_32037[(1)] = (19));

} else {
var statearr_29350_32039 = state_29308__$1;
(statearr_29350_32039[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (3))){
var inst_29306 = (state_29308[(2)]);
var state_29308__$1 = state_29308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29308__$1,inst_29306);
} else {
if((state_val_29309 === (12))){
var inst_29278 = (state_29308[(10)]);
var state_29308__$1 = state_29308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29308__$1,(14),inst_29278);
} else {
if((state_val_29309 === (2))){
var state_29308__$1 = state_29308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29308__$1,(4),results);
} else {
if((state_val_29309 === (19))){
var state_29308__$1 = state_29308;
var statearr_29354_32063 = state_29308__$1;
(statearr_29354_32063[(2)] = null);

(statearr_29354_32063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (11))){
var inst_29278 = (state_29308[(2)]);
var state_29308__$1 = (function (){var statearr_29356 = state_29308;
(statearr_29356[(10)] = inst_29278);

return statearr_29356;
})();
var statearr_29357_32065 = state_29308__$1;
(statearr_29357_32065[(2)] = null);

(statearr_29357_32065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (9))){
var state_29308__$1 = state_29308;
var statearr_29358_32076 = state_29308__$1;
(statearr_29358_32076[(2)] = null);

(statearr_29358_32076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (5))){
var state_29308__$1 = state_29308;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29359_32086 = state_29308__$1;
(statearr_29359_32086[(1)] = (8));

} else {
var statearr_29360_32089 = state_29308__$1;
(statearr_29360_32089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (14))){
var inst_29281 = (state_29308[(8)]);
var inst_29281__$1 = (state_29308[(2)]);
var inst_29283 = (inst_29281__$1 == null);
var inst_29284 = cljs.core.not(inst_29283);
var state_29308__$1 = (function (){var statearr_29361 = state_29308;
(statearr_29361[(8)] = inst_29281__$1);

return statearr_29361;
})();
if(inst_29284){
var statearr_29362_32094 = state_29308__$1;
(statearr_29362_32094[(1)] = (15));

} else {
var statearr_29363_32101 = state_29308__$1;
(statearr_29363_32101[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (16))){
var state_29308__$1 = state_29308;
var statearr_29364_32106 = state_29308__$1;
(statearr_29364_32106[(2)] = false);

(statearr_29364_32106[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (10))){
var inst_29273 = (state_29308[(2)]);
var state_29308__$1 = state_29308;
var statearr_29365_32113 = state_29308__$1;
(statearr_29365_32113[(2)] = inst_29273);

(statearr_29365_32113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (18))){
var inst_29287 = (state_29308[(2)]);
var state_29308__$1 = state_29308;
var statearr_29366_32117 = state_29308__$1;
(statearr_29366_32117[(2)] = inst_29287);

(statearr_29366_32117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (8))){
var inst_29270 = cljs.core.async.close_BANG_(to);
var state_29308__$1 = state_29308;
var statearr_29367_32119 = state_29308__$1;
(statearr_29367_32119[(2)] = inst_29270);

(statearr_29367_32119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____0 = (function (){
var statearr_29371 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29371[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__);

(statearr_29371[(1)] = (1));

return statearr_29371;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____1 = (function (state_29308){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_29308);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e29373){if((e29373 instanceof Object)){
var ex__28192__auto__ = e29373;
var statearr_29374_32130 = state_29308;
(statearr_29374_32130[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29373;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32135 = state_29308;
state_29308 = G__32135;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__ = function(state_29308){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____1.call(this,state_29308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28189__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_29376 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_29376[(6)] = c__28501__auto__);

return statearr_29376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));

return c__28501__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29378 = arguments.length;
switch (G__29378) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29396 = arguments.length;
switch (G__29396) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29411 = arguments.length;
switch (G__29411) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__28501__auto___32191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_29447){
var state_val_29448 = (state_29447[(1)]);
if((state_val_29448 === (7))){
var inst_29443 = (state_29447[(2)]);
var state_29447__$1 = state_29447;
var statearr_29450_32194 = state_29447__$1;
(statearr_29450_32194[(2)] = inst_29443);

(statearr_29450_32194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (1))){
var state_29447__$1 = state_29447;
var statearr_29452_32197 = state_29447__$1;
(statearr_29452_32197[(2)] = null);

(statearr_29452_32197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (4))){
var inst_29424 = (state_29447[(7)]);
var inst_29424__$1 = (state_29447[(2)]);
var inst_29425 = (inst_29424__$1 == null);
var state_29447__$1 = (function (){var statearr_29453 = state_29447;
(statearr_29453[(7)] = inst_29424__$1);

return statearr_29453;
})();
if(cljs.core.truth_(inst_29425)){
var statearr_29454_32203 = state_29447__$1;
(statearr_29454_32203[(1)] = (5));

} else {
var statearr_29455_32207 = state_29447__$1;
(statearr_29455_32207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (13))){
var state_29447__$1 = state_29447;
var statearr_29456_32209 = state_29447__$1;
(statearr_29456_32209[(2)] = null);

(statearr_29456_32209[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (6))){
var inst_29424 = (state_29447[(7)]);
var inst_29430 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29424) : p.call(null,inst_29424));
var state_29447__$1 = state_29447;
if(cljs.core.truth_(inst_29430)){
var statearr_29458_32214 = state_29447__$1;
(statearr_29458_32214[(1)] = (9));

} else {
var statearr_29460_32215 = state_29447__$1;
(statearr_29460_32215[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (3))){
var inst_29445 = (state_29447[(2)]);
var state_29447__$1 = state_29447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29447__$1,inst_29445);
} else {
if((state_val_29448 === (12))){
var state_29447__$1 = state_29447;
var statearr_29462_32222 = state_29447__$1;
(statearr_29462_32222[(2)] = null);

(statearr_29462_32222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (2))){
var state_29447__$1 = state_29447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29447__$1,(4),ch);
} else {
if((state_val_29448 === (11))){
var inst_29424 = (state_29447[(7)]);
var inst_29434 = (state_29447[(2)]);
var state_29447__$1 = state_29447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29447__$1,(8),inst_29434,inst_29424);
} else {
if((state_val_29448 === (9))){
var state_29447__$1 = state_29447;
var statearr_29463_32236 = state_29447__$1;
(statearr_29463_32236[(2)] = tc);

(statearr_29463_32236[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (5))){
var inst_29427 = cljs.core.async.close_BANG_(tc);
var inst_29428 = cljs.core.async.close_BANG_(fc);
var state_29447__$1 = (function (){var statearr_29466 = state_29447;
(statearr_29466[(8)] = inst_29427);

return statearr_29466;
})();
var statearr_29469_32244 = state_29447__$1;
(statearr_29469_32244[(2)] = inst_29428);

(statearr_29469_32244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (14))){
var inst_29441 = (state_29447[(2)]);
var state_29447__$1 = state_29447;
var statearr_29470_32249 = state_29447__$1;
(statearr_29470_32249[(2)] = inst_29441);

(statearr_29470_32249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (10))){
var state_29447__$1 = state_29447;
var statearr_29471_32257 = state_29447__$1;
(statearr_29471_32257[(2)] = fc);

(statearr_29471_32257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (8))){
var inst_29436 = (state_29447[(2)]);
var state_29447__$1 = state_29447;
if(cljs.core.truth_(inst_29436)){
var statearr_29472_32262 = state_29447__$1;
(statearr_29472_32262[(1)] = (12));

} else {
var statearr_29473_32264 = state_29447__$1;
(statearr_29473_32264[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28189__auto__ = null;
var cljs$core$async$state_machine__28189__auto____0 = (function (){
var statearr_29482 = [null,null,null,null,null,null,null,null,null];
(statearr_29482[(0)] = cljs$core$async$state_machine__28189__auto__);

(statearr_29482[(1)] = (1));

return statearr_29482;
});
var cljs$core$async$state_machine__28189__auto____1 = (function (state_29447){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_29447);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e29484){if((e29484 instanceof Object)){
var ex__28192__auto__ = e29484;
var statearr_29485_32280 = state_29447;
(statearr_29485_32280[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32281 = state_29447;
state_29447 = G__32281;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$state_machine__28189__auto__ = function(state_29447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28189__auto____1.call(this,state_29447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28189__auto____0;
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28189__auto____1;
return cljs$core$async$state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_29488 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_29488[(6)] = c__28501__auto___32191);

return statearr_29488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28501__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_29511){
var state_val_29512 = (state_29511[(1)]);
if((state_val_29512 === (7))){
var inst_29507 = (state_29511[(2)]);
var state_29511__$1 = state_29511;
var statearr_29517_32291 = state_29511__$1;
(statearr_29517_32291[(2)] = inst_29507);

(statearr_29517_32291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (1))){
var inst_29490 = init;
var state_29511__$1 = (function (){var statearr_29518 = state_29511;
(statearr_29518[(7)] = inst_29490);

return statearr_29518;
})();
var statearr_29520_32294 = state_29511__$1;
(statearr_29520_32294[(2)] = null);

(statearr_29520_32294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (4))){
var inst_29494 = (state_29511[(8)]);
var inst_29494__$1 = (state_29511[(2)]);
var inst_29495 = (inst_29494__$1 == null);
var state_29511__$1 = (function (){var statearr_29521 = state_29511;
(statearr_29521[(8)] = inst_29494__$1);

return statearr_29521;
})();
if(cljs.core.truth_(inst_29495)){
var statearr_29522_32297 = state_29511__$1;
(statearr_29522_32297[(1)] = (5));

} else {
var statearr_29523_32298 = state_29511__$1;
(statearr_29523_32298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (6))){
var inst_29490 = (state_29511[(7)]);
var inst_29498 = (state_29511[(9)]);
var inst_29494 = (state_29511[(8)]);
var inst_29498__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29490,inst_29494) : f.call(null,inst_29490,inst_29494));
var inst_29499 = cljs.core.reduced_QMARK_(inst_29498__$1);
var state_29511__$1 = (function (){var statearr_29524 = state_29511;
(statearr_29524[(9)] = inst_29498__$1);

return statearr_29524;
})();
if(inst_29499){
var statearr_29525_32307 = state_29511__$1;
(statearr_29525_32307[(1)] = (8));

} else {
var statearr_29529_32308 = state_29511__$1;
(statearr_29529_32308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (3))){
var inst_29509 = (state_29511[(2)]);
var state_29511__$1 = state_29511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29511__$1,inst_29509);
} else {
if((state_val_29512 === (2))){
var state_29511__$1 = state_29511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29511__$1,(4),ch);
} else {
if((state_val_29512 === (9))){
var inst_29498 = (state_29511[(9)]);
var inst_29490 = inst_29498;
var state_29511__$1 = (function (){var statearr_29531 = state_29511;
(statearr_29531[(7)] = inst_29490);

return statearr_29531;
})();
var statearr_29532_32315 = state_29511__$1;
(statearr_29532_32315[(2)] = null);

(statearr_29532_32315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (5))){
var inst_29490 = (state_29511[(7)]);
var state_29511__$1 = state_29511;
var statearr_29537_32316 = state_29511__$1;
(statearr_29537_32316[(2)] = inst_29490);

(statearr_29537_32316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (10))){
var inst_29505 = (state_29511[(2)]);
var state_29511__$1 = state_29511;
var statearr_29539_32320 = state_29511__$1;
(statearr_29539_32320[(2)] = inst_29505);

(statearr_29539_32320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29512 === (8))){
var inst_29498 = (state_29511[(9)]);
var inst_29501 = cljs.core.deref(inst_29498);
var state_29511__$1 = state_29511;
var statearr_29540_32321 = state_29511__$1;
(statearr_29540_32321[(2)] = inst_29501);

(statearr_29540_32321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28189__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28189__auto____0 = (function (){
var statearr_29544 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29544[(0)] = cljs$core$async$reduce_$_state_machine__28189__auto__);

(statearr_29544[(1)] = (1));

return statearr_29544;
});
var cljs$core$async$reduce_$_state_machine__28189__auto____1 = (function (state_29511){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_29511);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e29548){if((e29548 instanceof Object)){
var ex__28192__auto__ = e29548;
var statearr_29549_32331 = state_29511;
(statearr_29549_32331[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29548;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32335 = state_29511;
state_29511 = G__32335;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28189__auto__ = function(state_29511){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28189__auto____1.call(this,state_29511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28189__auto____0;
cljs$core$async$reduce_$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28189__auto____1;
return cljs$core$async$reduce_$_state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_29551 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_29551[(6)] = c__28501__auto__);

return statearr_29551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));

return c__28501__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28501__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_29565){
var state_val_29566 = (state_29565[(1)]);
if((state_val_29566 === (1))){
var inst_29558 = cljs.core.async.reduce(f__$1,init,ch);
var state_29565__$1 = state_29565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29565__$1,(2),inst_29558);
} else {
if((state_val_29566 === (2))){
var inst_29560 = (state_29565[(2)]);
var inst_29562 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29560) : f__$1.call(null,inst_29560));
var state_29565__$1 = state_29565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29565__$1,inst_29562);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28189__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28189__auto____0 = (function (){
var statearr_29571 = [null,null,null,null,null,null,null];
(statearr_29571[(0)] = cljs$core$async$transduce_$_state_machine__28189__auto__);

(statearr_29571[(1)] = (1));

return statearr_29571;
});
var cljs$core$async$transduce_$_state_machine__28189__auto____1 = (function (state_29565){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_29565);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e29572){if((e29572 instanceof Object)){
var ex__28192__auto__ = e29572;
var statearr_29574_32343 = state_29565;
(statearr_29574_32343[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32349 = state_29565;
state_29565 = G__32349;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28189__auto__ = function(state_29565){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28189__auto____1.call(this,state_29565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28189__auto____0;
cljs$core$async$transduce_$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28189__auto____1;
return cljs$core$async$transduce_$_state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_29584 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_29584[(6)] = c__28501__auto__);

return statearr_29584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));

return c__28501__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29591 = arguments.length;
switch (G__29591) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28501__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_29631){
var state_val_29632 = (state_29631[(1)]);
if((state_val_29632 === (7))){
var inst_29613 = (state_29631[(2)]);
var state_29631__$1 = state_29631;
var statearr_29637_32352 = state_29631__$1;
(statearr_29637_32352[(2)] = inst_29613);

(statearr_29637_32352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (1))){
var inst_29606 = cljs.core.seq(coll);
var inst_29607 = inst_29606;
var state_29631__$1 = (function (){var statearr_29640 = state_29631;
(statearr_29640[(7)] = inst_29607);

return statearr_29640;
})();
var statearr_29642_32358 = state_29631__$1;
(statearr_29642_32358[(2)] = null);

(statearr_29642_32358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (4))){
var inst_29607 = (state_29631[(7)]);
var inst_29611 = cljs.core.first(inst_29607);
var state_29631__$1 = state_29631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29631__$1,(7),ch,inst_29611);
} else {
if((state_val_29632 === (13))){
var inst_29625 = (state_29631[(2)]);
var state_29631__$1 = state_29631;
var statearr_29646_32383 = state_29631__$1;
(statearr_29646_32383[(2)] = inst_29625);

(statearr_29646_32383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (6))){
var inst_29616 = (state_29631[(2)]);
var state_29631__$1 = state_29631;
if(cljs.core.truth_(inst_29616)){
var statearr_29649_32385 = state_29631__$1;
(statearr_29649_32385[(1)] = (8));

} else {
var statearr_29650_32387 = state_29631__$1;
(statearr_29650_32387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (3))){
var inst_29629 = (state_29631[(2)]);
var state_29631__$1 = state_29631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29631__$1,inst_29629);
} else {
if((state_val_29632 === (12))){
var state_29631__$1 = state_29631;
var statearr_29652_32388 = state_29631__$1;
(statearr_29652_32388[(2)] = null);

(statearr_29652_32388[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (2))){
var inst_29607 = (state_29631[(7)]);
var state_29631__$1 = state_29631;
if(cljs.core.truth_(inst_29607)){
var statearr_29661_32389 = state_29631__$1;
(statearr_29661_32389[(1)] = (4));

} else {
var statearr_29662_32390 = state_29631__$1;
(statearr_29662_32390[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (11))){
var inst_29622 = cljs.core.async.close_BANG_(ch);
var state_29631__$1 = state_29631;
var statearr_29664_32392 = state_29631__$1;
(statearr_29664_32392[(2)] = inst_29622);

(statearr_29664_32392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (9))){
var state_29631__$1 = state_29631;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29665_32397 = state_29631__$1;
(statearr_29665_32397[(1)] = (11));

} else {
var statearr_29667_32398 = state_29631__$1;
(statearr_29667_32398[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (5))){
var inst_29607 = (state_29631[(7)]);
var state_29631__$1 = state_29631;
var statearr_29669_32403 = state_29631__$1;
(statearr_29669_32403[(2)] = inst_29607);

(statearr_29669_32403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (10))){
var inst_29627 = (state_29631[(2)]);
var state_29631__$1 = state_29631;
var statearr_29672_32410 = state_29631__$1;
(statearr_29672_32410[(2)] = inst_29627);

(statearr_29672_32410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29632 === (8))){
var inst_29607 = (state_29631[(7)]);
var inst_29618 = cljs.core.next(inst_29607);
var inst_29607__$1 = inst_29618;
var state_29631__$1 = (function (){var statearr_29675 = state_29631;
(statearr_29675[(7)] = inst_29607__$1);

return statearr_29675;
})();
var statearr_29676_32412 = state_29631__$1;
(statearr_29676_32412[(2)] = null);

(statearr_29676_32412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28189__auto__ = null;
var cljs$core$async$state_machine__28189__auto____0 = (function (){
var statearr_29677 = [null,null,null,null,null,null,null,null];
(statearr_29677[(0)] = cljs$core$async$state_machine__28189__auto__);

(statearr_29677[(1)] = (1));

return statearr_29677;
});
var cljs$core$async$state_machine__28189__auto____1 = (function (state_29631){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_29631);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e29678){if((e29678 instanceof Object)){
var ex__28192__auto__ = e29678;
var statearr_29680_32418 = state_29631;
(statearr_29680_32418[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29678;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32421 = state_29631;
state_29631 = G__32421;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$state_machine__28189__auto__ = function(state_29631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28189__auto____1.call(this,state_29631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28189__auto____0;
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28189__auto____1;
return cljs$core$async$state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_29682 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_29682[(6)] = c__28501__auto__);

return statearr_29682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));

return c__28501__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29751 = (function (ch,cs,meta29752){
this.ch = ch;
this.cs = cs;
this.meta29752 = meta29752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29753,meta29752__$1){
var self__ = this;
var _29753__$1 = this;
return (new cljs.core.async.t_cljs$core$async29751(self__.ch,self__.cs,meta29752__$1));
}));

(cljs.core.async.t_cljs$core$async29751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29753){
var self__ = this;
var _29753__$1 = this;
return self__.meta29752;
}));

(cljs.core.async.t_cljs$core$async29751.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29751.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29751.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29751.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29751.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29751.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29752","meta29752",-844177709,null)], null);
}));

(cljs.core.async.t_cljs$core$async29751.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29751");

(cljs.core.async.t_cljs$core$async29751.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29751");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29751.
 */
cljs.core.async.__GT_t_cljs$core$async29751 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29751(ch__$1,cs__$1,meta29752){
return (new cljs.core.async.t_cljs$core$async29751(ch__$1,cs__$1,meta29752));
});

}

return (new cljs.core.async.t_cljs$core$async29751(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__28501__auto___32451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_29934){
var state_val_29935 = (state_29934[(1)]);
if((state_val_29935 === (7))){
var inst_29927 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_29943_32454 = state_29934__$1;
(statearr_29943_32454[(2)] = inst_29927);

(statearr_29943_32454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (20))){
var inst_29806 = (state_29934[(7)]);
var inst_29825 = cljs.core.first(inst_29806);
var inst_29826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29825,(0),null);
var inst_29827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29825,(1),null);
var state_29934__$1 = (function (){var statearr_29944 = state_29934;
(statearr_29944[(8)] = inst_29826);

return statearr_29944;
})();
if(cljs.core.truth_(inst_29827)){
var statearr_29945_32455 = state_29934__$1;
(statearr_29945_32455[(1)] = (22));

} else {
var statearr_29946_32456 = state_29934__$1;
(statearr_29946_32456[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (27))){
var inst_29861 = (state_29934[(9)]);
var inst_29859 = (state_29934[(10)]);
var inst_29875 = (state_29934[(11)]);
var inst_29773 = (state_29934[(12)]);
var inst_29875__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29859,inst_29861);
var inst_29876 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29875__$1,inst_29773,done);
var state_29934__$1 = (function (){var statearr_29947 = state_29934;
(statearr_29947[(11)] = inst_29875__$1);

return statearr_29947;
})();
if(cljs.core.truth_(inst_29876)){
var statearr_29948_32467 = state_29934__$1;
(statearr_29948_32467[(1)] = (30));

} else {
var statearr_29952_32468 = state_29934__$1;
(statearr_29952_32468[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (1))){
var state_29934__$1 = state_29934;
var statearr_29955_32472 = state_29934__$1;
(statearr_29955_32472[(2)] = null);

(statearr_29955_32472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (24))){
var inst_29806 = (state_29934[(7)]);
var inst_29832 = (state_29934[(2)]);
var inst_29833 = cljs.core.next(inst_29806);
var inst_29782 = inst_29833;
var inst_29783 = null;
var inst_29784 = (0);
var inst_29785 = (0);
var state_29934__$1 = (function (){var statearr_29959 = state_29934;
(statearr_29959[(13)] = inst_29782);

(statearr_29959[(14)] = inst_29832);

(statearr_29959[(15)] = inst_29783);

(statearr_29959[(16)] = inst_29785);

(statearr_29959[(17)] = inst_29784);

return statearr_29959;
})();
var statearr_29960_32481 = state_29934__$1;
(statearr_29960_32481[(2)] = null);

(statearr_29960_32481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (39))){
var state_29934__$1 = state_29934;
var statearr_29970_32501 = state_29934__$1;
(statearr_29970_32501[(2)] = null);

(statearr_29970_32501[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (4))){
var inst_29773 = (state_29934[(12)]);
var inst_29773__$1 = (state_29934[(2)]);
var inst_29774 = (inst_29773__$1 == null);
var state_29934__$1 = (function (){var statearr_29971 = state_29934;
(statearr_29971[(12)] = inst_29773__$1);

return statearr_29971;
})();
if(cljs.core.truth_(inst_29774)){
var statearr_29972_32511 = state_29934__$1;
(statearr_29972_32511[(1)] = (5));

} else {
var statearr_29973_32512 = state_29934__$1;
(statearr_29973_32512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (15))){
var inst_29782 = (state_29934[(13)]);
var inst_29783 = (state_29934[(15)]);
var inst_29785 = (state_29934[(16)]);
var inst_29784 = (state_29934[(17)]);
var inst_29801 = (state_29934[(2)]);
var inst_29803 = (inst_29785 + (1));
var tmp29966 = inst_29782;
var tmp29967 = inst_29783;
var tmp29968 = inst_29784;
var inst_29782__$1 = tmp29966;
var inst_29783__$1 = tmp29967;
var inst_29784__$1 = tmp29968;
var inst_29785__$1 = inst_29803;
var state_29934__$1 = (function (){var statearr_29974 = state_29934;
(statearr_29974[(13)] = inst_29782__$1);

(statearr_29974[(15)] = inst_29783__$1);

(statearr_29974[(18)] = inst_29801);

(statearr_29974[(16)] = inst_29785__$1);

(statearr_29974[(17)] = inst_29784__$1);

return statearr_29974;
})();
var statearr_29975_32528 = state_29934__$1;
(statearr_29975_32528[(2)] = null);

(statearr_29975_32528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (21))){
var inst_29836 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_29979_32531 = state_29934__$1;
(statearr_29979_32531[(2)] = inst_29836);

(statearr_29979_32531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (31))){
var inst_29875 = (state_29934[(11)]);
var inst_29879 = done(null);
var inst_29880 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29875);
var state_29934__$1 = (function (){var statearr_29981 = state_29934;
(statearr_29981[(19)] = inst_29879);

return statearr_29981;
})();
var statearr_29982_32535 = state_29934__$1;
(statearr_29982_32535[(2)] = inst_29880);

(statearr_29982_32535[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (32))){
var inst_29861 = (state_29934[(9)]);
var inst_29859 = (state_29934[(10)]);
var inst_29858 = (state_29934[(20)]);
var inst_29860 = (state_29934[(21)]);
var inst_29882 = (state_29934[(2)]);
var inst_29883 = (inst_29861 + (1));
var tmp29976 = inst_29859;
var tmp29977 = inst_29858;
var tmp29978 = inst_29860;
var inst_29858__$1 = tmp29977;
var inst_29859__$1 = tmp29976;
var inst_29860__$1 = tmp29978;
var inst_29861__$1 = inst_29883;
var state_29934__$1 = (function (){var statearr_29993 = state_29934;
(statearr_29993[(9)] = inst_29861__$1);

(statearr_29993[(10)] = inst_29859__$1);

(statearr_29993[(20)] = inst_29858__$1);

(statearr_29993[(21)] = inst_29860__$1);

(statearr_29993[(22)] = inst_29882);

return statearr_29993;
})();
var statearr_29997_32541 = state_29934__$1;
(statearr_29997_32541[(2)] = null);

(statearr_29997_32541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (40))){
var inst_29899 = (state_29934[(23)]);
var inst_29903 = done(null);
var inst_29904 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29899);
var state_29934__$1 = (function (){var statearr_29998 = state_29934;
(statearr_29998[(24)] = inst_29903);

return statearr_29998;
})();
var statearr_30000_32543 = state_29934__$1;
(statearr_30000_32543[(2)] = inst_29904);

(statearr_30000_32543[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (33))){
var inst_29886 = (state_29934[(25)]);
var inst_29888 = cljs.core.chunked_seq_QMARK_(inst_29886);
var state_29934__$1 = state_29934;
if(inst_29888){
var statearr_30007_32548 = state_29934__$1;
(statearr_30007_32548[(1)] = (36));

} else {
var statearr_30008_32549 = state_29934__$1;
(statearr_30008_32549[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (13))){
var inst_29795 = (state_29934[(26)]);
var inst_29798 = cljs.core.async.close_BANG_(inst_29795);
var state_29934__$1 = state_29934;
var statearr_30015_32550 = state_29934__$1;
(statearr_30015_32550[(2)] = inst_29798);

(statearr_30015_32550[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (22))){
var inst_29826 = (state_29934[(8)]);
var inst_29829 = cljs.core.async.close_BANG_(inst_29826);
var state_29934__$1 = state_29934;
var statearr_30017_32555 = state_29934__$1;
(statearr_30017_32555[(2)] = inst_29829);

(statearr_30017_32555[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (36))){
var inst_29886 = (state_29934[(25)]);
var inst_29894 = cljs.core.chunk_first(inst_29886);
var inst_29895 = cljs.core.chunk_rest(inst_29886);
var inst_29896 = cljs.core.count(inst_29894);
var inst_29858 = inst_29895;
var inst_29859 = inst_29894;
var inst_29860 = inst_29896;
var inst_29861 = (0);
var state_29934__$1 = (function (){var statearr_30024 = state_29934;
(statearr_30024[(9)] = inst_29861);

(statearr_30024[(10)] = inst_29859);

(statearr_30024[(20)] = inst_29858);

(statearr_30024[(21)] = inst_29860);

return statearr_30024;
})();
var statearr_30025_32556 = state_29934__$1;
(statearr_30025_32556[(2)] = null);

(statearr_30025_32556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (41))){
var inst_29886 = (state_29934[(25)]);
var inst_29906 = (state_29934[(2)]);
var inst_29907 = cljs.core.next(inst_29886);
var inst_29858 = inst_29907;
var inst_29859 = null;
var inst_29860 = (0);
var inst_29861 = (0);
var state_29934__$1 = (function (){var statearr_30036 = state_29934;
(statearr_30036[(9)] = inst_29861);

(statearr_30036[(10)] = inst_29859);

(statearr_30036[(20)] = inst_29858);

(statearr_30036[(21)] = inst_29860);

(statearr_30036[(27)] = inst_29906);

return statearr_30036;
})();
var statearr_30038_32564 = state_29934__$1;
(statearr_30038_32564[(2)] = null);

(statearr_30038_32564[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (43))){
var state_29934__$1 = state_29934;
var statearr_30043_32565 = state_29934__$1;
(statearr_30043_32565[(2)] = null);

(statearr_30043_32565[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (29))){
var inst_29915 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_30045_32574 = state_29934__$1;
(statearr_30045_32574[(2)] = inst_29915);

(statearr_30045_32574[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (44))){
var inst_29924 = (state_29934[(2)]);
var state_29934__$1 = (function (){var statearr_30050 = state_29934;
(statearr_30050[(28)] = inst_29924);

return statearr_30050;
})();
var statearr_30051_32578 = state_29934__$1;
(statearr_30051_32578[(2)] = null);

(statearr_30051_32578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (6))){
var inst_29847 = (state_29934[(29)]);
var inst_29846 = cljs.core.deref(cs);
var inst_29847__$1 = cljs.core.keys(inst_29846);
var inst_29851 = cljs.core.count(inst_29847__$1);
var inst_29852 = cljs.core.reset_BANG_(dctr,inst_29851);
var inst_29857 = cljs.core.seq(inst_29847__$1);
var inst_29858 = inst_29857;
var inst_29859 = null;
var inst_29860 = (0);
var inst_29861 = (0);
var state_29934__$1 = (function (){var statearr_30055 = state_29934;
(statearr_30055[(9)] = inst_29861);

(statearr_30055[(10)] = inst_29859);

(statearr_30055[(20)] = inst_29858);

(statearr_30055[(21)] = inst_29860);

(statearr_30055[(29)] = inst_29847__$1);

(statearr_30055[(30)] = inst_29852);

return statearr_30055;
})();
var statearr_30058_32583 = state_29934__$1;
(statearr_30058_32583[(2)] = null);

(statearr_30058_32583[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (28))){
var inst_29858 = (state_29934[(20)]);
var inst_29886 = (state_29934[(25)]);
var inst_29886__$1 = cljs.core.seq(inst_29858);
var state_29934__$1 = (function (){var statearr_30060 = state_29934;
(statearr_30060[(25)] = inst_29886__$1);

return statearr_30060;
})();
if(inst_29886__$1){
var statearr_30061_32588 = state_29934__$1;
(statearr_30061_32588[(1)] = (33));

} else {
var statearr_30062_32589 = state_29934__$1;
(statearr_30062_32589[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (25))){
var inst_29861 = (state_29934[(9)]);
var inst_29860 = (state_29934[(21)]);
var inst_29872 = (inst_29861 < inst_29860);
var inst_29873 = inst_29872;
var state_29934__$1 = state_29934;
if(cljs.core.truth_(inst_29873)){
var statearr_30064_32590 = state_29934__$1;
(statearr_30064_32590[(1)] = (27));

} else {
var statearr_30066_32595 = state_29934__$1;
(statearr_30066_32595[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (34))){
var state_29934__$1 = state_29934;
var statearr_30072_32596 = state_29934__$1;
(statearr_30072_32596[(2)] = null);

(statearr_30072_32596[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (17))){
var state_29934__$1 = state_29934;
var statearr_30078_32597 = state_29934__$1;
(statearr_30078_32597[(2)] = null);

(statearr_30078_32597[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (3))){
var inst_29929 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29934__$1,inst_29929);
} else {
if((state_val_29935 === (12))){
var inst_29841 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_30080_32599 = state_29934__$1;
(statearr_30080_32599[(2)] = inst_29841);

(statearr_30080_32599[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (2))){
var state_29934__$1 = state_29934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29934__$1,(4),ch);
} else {
if((state_val_29935 === (23))){
var state_29934__$1 = state_29934;
var statearr_30081_32605 = state_29934__$1;
(statearr_30081_32605[(2)] = null);

(statearr_30081_32605[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (35))){
var inst_29913 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_30083_32606 = state_29934__$1;
(statearr_30083_32606[(2)] = inst_29913);

(statearr_30083_32606[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (19))){
var inst_29806 = (state_29934[(7)]);
var inst_29814 = cljs.core.chunk_first(inst_29806);
var inst_29815 = cljs.core.chunk_rest(inst_29806);
var inst_29816 = cljs.core.count(inst_29814);
var inst_29782 = inst_29815;
var inst_29783 = inst_29814;
var inst_29784 = inst_29816;
var inst_29785 = (0);
var state_29934__$1 = (function (){var statearr_30084 = state_29934;
(statearr_30084[(13)] = inst_29782);

(statearr_30084[(15)] = inst_29783);

(statearr_30084[(16)] = inst_29785);

(statearr_30084[(17)] = inst_29784);

return statearr_30084;
})();
var statearr_30085_32613 = state_29934__$1;
(statearr_30085_32613[(2)] = null);

(statearr_30085_32613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (11))){
var inst_29782 = (state_29934[(13)]);
var inst_29806 = (state_29934[(7)]);
var inst_29806__$1 = cljs.core.seq(inst_29782);
var state_29934__$1 = (function (){var statearr_30086 = state_29934;
(statearr_30086[(7)] = inst_29806__$1);

return statearr_30086;
})();
if(inst_29806__$1){
var statearr_30091_32615 = state_29934__$1;
(statearr_30091_32615[(1)] = (16));

} else {
var statearr_30092_32616 = state_29934__$1;
(statearr_30092_32616[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (9))){
var inst_29843 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_30093_32618 = state_29934__$1;
(statearr_30093_32618[(2)] = inst_29843);

(statearr_30093_32618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (5))){
var inst_29780 = cljs.core.deref(cs);
var inst_29781 = cljs.core.seq(inst_29780);
var inst_29782 = inst_29781;
var inst_29783 = null;
var inst_29784 = (0);
var inst_29785 = (0);
var state_29934__$1 = (function (){var statearr_30094 = state_29934;
(statearr_30094[(13)] = inst_29782);

(statearr_30094[(15)] = inst_29783);

(statearr_30094[(16)] = inst_29785);

(statearr_30094[(17)] = inst_29784);

return statearr_30094;
})();
var statearr_30096_32619 = state_29934__$1;
(statearr_30096_32619[(2)] = null);

(statearr_30096_32619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (14))){
var state_29934__$1 = state_29934;
var statearr_30098_32620 = state_29934__$1;
(statearr_30098_32620[(2)] = null);

(statearr_30098_32620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (45))){
var inst_29921 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_30099_32626 = state_29934__$1;
(statearr_30099_32626[(2)] = inst_29921);

(statearr_30099_32626[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (26))){
var inst_29847 = (state_29934[(29)]);
var inst_29917 = (state_29934[(2)]);
var inst_29918 = cljs.core.seq(inst_29847);
var state_29934__$1 = (function (){var statearr_30100 = state_29934;
(statearr_30100[(31)] = inst_29917);

return statearr_30100;
})();
if(inst_29918){
var statearr_30103_32629 = state_29934__$1;
(statearr_30103_32629[(1)] = (42));

} else {
var statearr_30104_32630 = state_29934__$1;
(statearr_30104_32630[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (16))){
var inst_29806 = (state_29934[(7)]);
var inst_29810 = cljs.core.chunked_seq_QMARK_(inst_29806);
var state_29934__$1 = state_29934;
if(inst_29810){
var statearr_30106_32631 = state_29934__$1;
(statearr_30106_32631[(1)] = (19));

} else {
var statearr_30107_32632 = state_29934__$1;
(statearr_30107_32632[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (38))){
var inst_29910 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_30108_32633 = state_29934__$1;
(statearr_30108_32633[(2)] = inst_29910);

(statearr_30108_32633[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (30))){
var state_29934__$1 = state_29934;
var statearr_30109_32634 = state_29934__$1;
(statearr_30109_32634[(2)] = null);

(statearr_30109_32634[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (10))){
var inst_29783 = (state_29934[(15)]);
var inst_29785 = (state_29934[(16)]);
var inst_29794 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29783,inst_29785);
var inst_29795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29794,(0),null);
var inst_29796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29794,(1),null);
var state_29934__$1 = (function (){var statearr_30110 = state_29934;
(statearr_30110[(26)] = inst_29795);

return statearr_30110;
})();
if(cljs.core.truth_(inst_29796)){
var statearr_30111_32635 = state_29934__$1;
(statearr_30111_32635[(1)] = (13));

} else {
var statearr_30112_32638 = state_29934__$1;
(statearr_30112_32638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (18))){
var inst_29839 = (state_29934[(2)]);
var state_29934__$1 = state_29934;
var statearr_30113_32643 = state_29934__$1;
(statearr_30113_32643[(2)] = inst_29839);

(statearr_30113_32643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (42))){
var state_29934__$1 = state_29934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29934__$1,(45),dchan);
} else {
if((state_val_29935 === (37))){
var inst_29773 = (state_29934[(12)]);
var inst_29899 = (state_29934[(23)]);
var inst_29886 = (state_29934[(25)]);
var inst_29899__$1 = cljs.core.first(inst_29886);
var inst_29900 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29899__$1,inst_29773,done);
var state_29934__$1 = (function (){var statearr_30118 = state_29934;
(statearr_30118[(23)] = inst_29899__$1);

return statearr_30118;
})();
if(cljs.core.truth_(inst_29900)){
var statearr_30119_32647 = state_29934__$1;
(statearr_30119_32647[(1)] = (39));

} else {
var statearr_30120_32648 = state_29934__$1;
(statearr_30120_32648[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29935 === (8))){
var inst_29785 = (state_29934[(16)]);
var inst_29784 = (state_29934[(17)]);
var inst_29787 = (inst_29785 < inst_29784);
var inst_29788 = inst_29787;
var state_29934__$1 = state_29934;
if(cljs.core.truth_(inst_29788)){
var statearr_30122_32650 = state_29934__$1;
(statearr_30122_32650[(1)] = (10));

} else {
var statearr_30127_32651 = state_29934__$1;
(statearr_30127_32651[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__28189__auto__ = null;
var cljs$core$async$mult_$_state_machine__28189__auto____0 = (function (){
var statearr_30128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30128[(0)] = cljs$core$async$mult_$_state_machine__28189__auto__);

(statearr_30128[(1)] = (1));

return statearr_30128;
});
var cljs$core$async$mult_$_state_machine__28189__auto____1 = (function (state_29934){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_29934);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e30129){if((e30129 instanceof Object)){
var ex__28192__auto__ = e30129;
var statearr_30130_32664 = state_29934;
(statearr_30130_32664[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30129;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32670 = state_29934;
state_29934 = G__32670;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28189__auto__ = function(state_29934){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28189__auto____1.call(this,state_29934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28189__auto____0;
cljs$core$async$mult_$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28189__auto____1;
return cljs$core$async$mult_$_state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_30131 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_30131[(6)] = c__28501__auto___32451);

return statearr_30131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30133 = arguments.length;
switch (G__30133) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32694 = arguments.length;
var i__4790__auto___32695 = (0);
while(true){
if((i__4790__auto___32695 < len__4789__auto___32694)){
args__4795__auto__.push((arguments[i__4790__auto___32695]));

var G__32696 = (i__4790__auto___32695 + (1));
i__4790__auto___32695 = G__32696;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30225){
var map__30226 = p__30225;
var map__30226__$1 = (((((!((map__30226 == null))))?(((((map__30226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30226):map__30226);
var opts = map__30226__$1;
var statearr_30228_32700 = state;
(statearr_30228_32700[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30230_32706 = state;
(statearr_30230_32706[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30231_32708 = state;
(statearr_30231_32708[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30213){
var G__30214 = cljs.core.first(seq30213);
var seq30213__$1 = cljs.core.next(seq30213);
var G__30215 = cljs.core.first(seq30213__$1);
var seq30213__$2 = cljs.core.next(seq30213__$1);
var G__30216 = cljs.core.first(seq30213__$2);
var seq30213__$3 = cljs.core.next(seq30213__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30214,G__30215,G__30216,seq30213__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30236 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30236 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30237){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30237 = meta30237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30238,meta30237__$1){
var self__ = this;
var _30238__$1 = this;
return (new cljs.core.async.t_cljs$core$async30236(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30237__$1));
}));

(cljs.core.async.t_cljs$core$async30236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30238){
var self__ = this;
var _30238__$1 = this;
return self__.meta30237;
}));

(cljs.core.async.t_cljs$core$async30236.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30236.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30236.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30236.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30236.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30236.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30236.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30236.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30237","meta30237",-1835710092,null)], null);
}));

(cljs.core.async.t_cljs$core$async30236.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30236");

(cljs.core.async.t_cljs$core$async30236.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30236");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30236.
 */
cljs.core.async.__GT_t_cljs$core$async30236 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30236(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30237){
return (new cljs.core.async.t_cljs$core$async30236(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30237));
});

}

return (new cljs.core.async.t_cljs$core$async30236(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28501__auto___32744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_30370){
var state_val_30371 = (state_30370[(1)]);
if((state_val_30371 === (7))){
var inst_30269 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30376_32747 = state_30370__$1;
(statearr_30376_32747[(2)] = inst_30269);

(statearr_30376_32747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (20))){
var inst_30284 = (state_30370[(7)]);
var state_30370__$1 = state_30370;
var statearr_30377_32748 = state_30370__$1;
(statearr_30377_32748[(2)] = inst_30284);

(statearr_30377_32748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (27))){
var state_30370__$1 = state_30370;
var statearr_30378_32751 = state_30370__$1;
(statearr_30378_32751[(2)] = null);

(statearr_30378_32751[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (1))){
var inst_30256 = (state_30370[(8)]);
var inst_30256__$1 = calc_state();
var inst_30258 = (inst_30256__$1 == null);
var inst_30259 = cljs.core.not(inst_30258);
var state_30370__$1 = (function (){var statearr_30379 = state_30370;
(statearr_30379[(8)] = inst_30256__$1);

return statearr_30379;
})();
if(inst_30259){
var statearr_30380_32752 = state_30370__$1;
(statearr_30380_32752[(1)] = (2));

} else {
var statearr_30381_32754 = state_30370__$1;
(statearr_30381_32754[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (24))){
var inst_30338 = (state_30370[(9)]);
var inst_30324 = (state_30370[(10)]);
var inst_30315 = (state_30370[(11)]);
var inst_30338__$1 = (inst_30315.cljs$core$IFn$_invoke$arity$1 ? inst_30315.cljs$core$IFn$_invoke$arity$1(inst_30324) : inst_30315.call(null,inst_30324));
var state_30370__$1 = (function (){var statearr_30385 = state_30370;
(statearr_30385[(9)] = inst_30338__$1);

return statearr_30385;
})();
if(cljs.core.truth_(inst_30338__$1)){
var statearr_30386_32756 = state_30370__$1;
(statearr_30386_32756[(1)] = (29));

} else {
var statearr_30387_32757 = state_30370__$1;
(statearr_30387_32757[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (4))){
var inst_30275 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
if(cljs.core.truth_(inst_30275)){
var statearr_30388_32758 = state_30370__$1;
(statearr_30388_32758[(1)] = (8));

} else {
var statearr_30390_32759 = state_30370__$1;
(statearr_30390_32759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (15))){
var inst_30305 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
if(cljs.core.truth_(inst_30305)){
var statearr_30393_32763 = state_30370__$1;
(statearr_30393_32763[(1)] = (19));

} else {
var statearr_30394_32764 = state_30370__$1;
(statearr_30394_32764[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (21))){
var inst_30314 = (state_30370[(12)]);
var inst_30314__$1 = (state_30370[(2)]);
var inst_30315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30314__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30314__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30314__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30370__$1 = (function (){var statearr_30395 = state_30370;
(statearr_30395[(12)] = inst_30314__$1);

(statearr_30395[(13)] = inst_30316);

(statearr_30395[(11)] = inst_30315);

return statearr_30395;
})();
return cljs.core.async.ioc_alts_BANG_(state_30370__$1,(22),inst_30317);
} else {
if((state_val_30371 === (31))){
var inst_30349 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
if(cljs.core.truth_(inst_30349)){
var statearr_30396_32768 = state_30370__$1;
(statearr_30396_32768[(1)] = (32));

} else {
var statearr_30398_32769 = state_30370__$1;
(statearr_30398_32769[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (32))){
var inst_30323 = (state_30370[(14)]);
var state_30370__$1 = state_30370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30370__$1,(35),out,inst_30323);
} else {
if((state_val_30371 === (33))){
var inst_30314 = (state_30370[(12)]);
var inst_30284 = inst_30314;
var state_30370__$1 = (function (){var statearr_30402 = state_30370;
(statearr_30402[(7)] = inst_30284);

return statearr_30402;
})();
var statearr_30403_32770 = state_30370__$1;
(statearr_30403_32770[(2)] = null);

(statearr_30403_32770[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (13))){
var inst_30284 = (state_30370[(7)]);
var inst_30294 = inst_30284.cljs$lang$protocol_mask$partition0$;
var inst_30295 = (inst_30294 & (64));
var inst_30296 = inst_30284.cljs$core$ISeq$;
var inst_30297 = (cljs.core.PROTOCOL_SENTINEL === inst_30296);
var inst_30298 = ((inst_30295) || (inst_30297));
var state_30370__$1 = state_30370;
if(cljs.core.truth_(inst_30298)){
var statearr_30407_32782 = state_30370__$1;
(statearr_30407_32782[(1)] = (16));

} else {
var statearr_30408_32786 = state_30370__$1;
(statearr_30408_32786[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (22))){
var inst_30323 = (state_30370[(14)]);
var inst_30324 = (state_30370[(10)]);
var inst_30322 = (state_30370[(2)]);
var inst_30323__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30322,(0),null);
var inst_30324__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30322,(1),null);
var inst_30325 = (inst_30323__$1 == null);
var inst_30326 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30324__$1,change);
var inst_30327 = ((inst_30325) || (inst_30326));
var state_30370__$1 = (function (){var statearr_30411 = state_30370;
(statearr_30411[(14)] = inst_30323__$1);

(statearr_30411[(10)] = inst_30324__$1);

return statearr_30411;
})();
if(cljs.core.truth_(inst_30327)){
var statearr_30413_32787 = state_30370__$1;
(statearr_30413_32787[(1)] = (23));

} else {
var statearr_30415_32788 = state_30370__$1;
(statearr_30415_32788[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (36))){
var inst_30314 = (state_30370[(12)]);
var inst_30284 = inst_30314;
var state_30370__$1 = (function (){var statearr_30416 = state_30370;
(statearr_30416[(7)] = inst_30284);

return statearr_30416;
})();
var statearr_30417_32792 = state_30370__$1;
(statearr_30417_32792[(2)] = null);

(statearr_30417_32792[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (29))){
var inst_30338 = (state_30370[(9)]);
var state_30370__$1 = state_30370;
var statearr_30418_32796 = state_30370__$1;
(statearr_30418_32796[(2)] = inst_30338);

(statearr_30418_32796[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (6))){
var state_30370__$1 = state_30370;
var statearr_30419_32797 = state_30370__$1;
(statearr_30419_32797[(2)] = false);

(statearr_30419_32797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (28))){
var inst_30334 = (state_30370[(2)]);
var inst_30335 = calc_state();
var inst_30284 = inst_30335;
var state_30370__$1 = (function (){var statearr_30420 = state_30370;
(statearr_30420[(15)] = inst_30334);

(statearr_30420[(7)] = inst_30284);

return statearr_30420;
})();
var statearr_30421_32801 = state_30370__$1;
(statearr_30421_32801[(2)] = null);

(statearr_30421_32801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (25))){
var inst_30363 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30422_32802 = state_30370__$1;
(statearr_30422_32802[(2)] = inst_30363);

(statearr_30422_32802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (34))){
var inst_30361 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30423_32804 = state_30370__$1;
(statearr_30423_32804[(2)] = inst_30361);

(statearr_30423_32804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (17))){
var state_30370__$1 = state_30370;
var statearr_30430_32805 = state_30370__$1;
(statearr_30430_32805[(2)] = false);

(statearr_30430_32805[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (3))){
var state_30370__$1 = state_30370;
var statearr_30431_32806 = state_30370__$1;
(statearr_30431_32806[(2)] = false);

(statearr_30431_32806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (12))){
var inst_30365 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30370__$1,inst_30365);
} else {
if((state_val_30371 === (2))){
var inst_30256 = (state_30370[(8)]);
var inst_30261 = inst_30256.cljs$lang$protocol_mask$partition0$;
var inst_30262 = (inst_30261 & (64));
var inst_30263 = inst_30256.cljs$core$ISeq$;
var inst_30264 = (cljs.core.PROTOCOL_SENTINEL === inst_30263);
var inst_30265 = ((inst_30262) || (inst_30264));
var state_30370__$1 = state_30370;
if(cljs.core.truth_(inst_30265)){
var statearr_30439_32836 = state_30370__$1;
(statearr_30439_32836[(1)] = (5));

} else {
var statearr_30440_32837 = state_30370__$1;
(statearr_30440_32837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (23))){
var inst_30323 = (state_30370[(14)]);
var inst_30329 = (inst_30323 == null);
var state_30370__$1 = state_30370;
if(cljs.core.truth_(inst_30329)){
var statearr_30444_32846 = state_30370__$1;
(statearr_30444_32846[(1)] = (26));

} else {
var statearr_30445_32848 = state_30370__$1;
(statearr_30445_32848[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (35))){
var inst_30352 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
if(cljs.core.truth_(inst_30352)){
var statearr_30447_32849 = state_30370__$1;
(statearr_30447_32849[(1)] = (36));

} else {
var statearr_30448_32850 = state_30370__$1;
(statearr_30448_32850[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (19))){
var inst_30284 = (state_30370[(7)]);
var inst_30311 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30284);
var state_30370__$1 = state_30370;
var statearr_30452_32867 = state_30370__$1;
(statearr_30452_32867[(2)] = inst_30311);

(statearr_30452_32867[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (11))){
var inst_30284 = (state_30370[(7)]);
var inst_30291 = (inst_30284 == null);
var inst_30292 = cljs.core.not(inst_30291);
var state_30370__$1 = state_30370;
if(inst_30292){
var statearr_30454_32871 = state_30370__$1;
(statearr_30454_32871[(1)] = (13));

} else {
var statearr_30456_32878 = state_30370__$1;
(statearr_30456_32878[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (9))){
var inst_30256 = (state_30370[(8)]);
var state_30370__$1 = state_30370;
var statearr_30457_32881 = state_30370__$1;
(statearr_30457_32881[(2)] = inst_30256);

(statearr_30457_32881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (5))){
var state_30370__$1 = state_30370;
var statearr_30459_32885 = state_30370__$1;
(statearr_30459_32885[(2)] = true);

(statearr_30459_32885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (14))){
var state_30370__$1 = state_30370;
var statearr_30460_32886 = state_30370__$1;
(statearr_30460_32886[(2)] = false);

(statearr_30460_32886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (26))){
var inst_30324 = (state_30370[(10)]);
var inst_30331 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30324);
var state_30370__$1 = state_30370;
var statearr_30461_32890 = state_30370__$1;
(statearr_30461_32890[(2)] = inst_30331);

(statearr_30461_32890[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (16))){
var state_30370__$1 = state_30370;
var statearr_30462_32892 = state_30370__$1;
(statearr_30462_32892[(2)] = true);

(statearr_30462_32892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (38))){
var inst_30357 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30463_32894 = state_30370__$1;
(statearr_30463_32894[(2)] = inst_30357);

(statearr_30463_32894[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (30))){
var inst_30316 = (state_30370[(13)]);
var inst_30324 = (state_30370[(10)]);
var inst_30315 = (state_30370[(11)]);
var inst_30344 = cljs.core.empty_QMARK_(inst_30315);
var inst_30345 = (inst_30316.cljs$core$IFn$_invoke$arity$1 ? inst_30316.cljs$core$IFn$_invoke$arity$1(inst_30324) : inst_30316.call(null,inst_30324));
var inst_30346 = cljs.core.not(inst_30345);
var inst_30347 = ((inst_30344) && (inst_30346));
var state_30370__$1 = state_30370;
var statearr_30467_32901 = state_30370__$1;
(statearr_30467_32901[(2)] = inst_30347);

(statearr_30467_32901[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (10))){
var inst_30256 = (state_30370[(8)]);
var inst_30280 = (state_30370[(2)]);
var inst_30281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30280,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30280,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30280,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30284 = inst_30256;
var state_30370__$1 = (function (){var statearr_30469 = state_30370;
(statearr_30469[(16)] = inst_30281);

(statearr_30469[(17)] = inst_30282);

(statearr_30469[(18)] = inst_30283);

(statearr_30469[(7)] = inst_30284);

return statearr_30469;
})();
var statearr_30470_32907 = state_30370__$1;
(statearr_30470_32907[(2)] = null);

(statearr_30470_32907[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (18))){
var inst_30302 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30471_32908 = state_30370__$1;
(statearr_30471_32908[(2)] = inst_30302);

(statearr_30471_32908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (37))){
var state_30370__$1 = state_30370;
var statearr_30475_32911 = state_30370__$1;
(statearr_30475_32911[(2)] = null);

(statearr_30475_32911[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (8))){
var inst_30256 = (state_30370[(8)]);
var inst_30277 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30256);
var state_30370__$1 = state_30370;
var statearr_30476_32912 = state_30370__$1;
(statearr_30476_32912[(2)] = inst_30277);

(statearr_30476_32912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__28189__auto__ = null;
var cljs$core$async$mix_$_state_machine__28189__auto____0 = (function (){
var statearr_30477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30477[(0)] = cljs$core$async$mix_$_state_machine__28189__auto__);

(statearr_30477[(1)] = (1));

return statearr_30477;
});
var cljs$core$async$mix_$_state_machine__28189__auto____1 = (function (state_30370){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_30370);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e30479){if((e30479 instanceof Object)){
var ex__28192__auto__ = e30479;
var statearr_30481_32920 = state_30370;
(statearr_30481_32920[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30479;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32921 = state_30370;
state_30370 = G__32921;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28189__auto__ = function(state_30370){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28189__auto____1.call(this,state_30370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28189__auto____0;
cljs$core$async$mix_$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28189__auto____1;
return cljs$core$async$mix_$_state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_30482 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_30482[(6)] = c__28501__auto___32744);

return statearr_30482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30521 = arguments.length;
switch (G__30521) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30541 = arguments.length;
switch (G__30541) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30534_SHARP_){
if(cljs.core.truth_((p1__30534_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30534_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30534_SHARP_.call(null,topic)))){
return p1__30534_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30534_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30552 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30553){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30553 = meta30553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30554,meta30553__$1){
var self__ = this;
var _30554__$1 = this;
return (new cljs.core.async.t_cljs$core$async30552(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30553__$1));
}));

(cljs.core.async.t_cljs$core$async30552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30554){
var self__ = this;
var _30554__$1 = this;
return self__.meta30553;
}));

(cljs.core.async.t_cljs$core$async30552.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30552.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30552.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30552.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30552.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30552.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30552.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30553","meta30553",260966463,null)], null);
}));

(cljs.core.async.t_cljs$core$async30552.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30552");

(cljs.core.async.t_cljs$core$async30552.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30552");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30552.
 */
cljs.core.async.__GT_t_cljs$core$async30552 = (function cljs$core$async$__GT_t_cljs$core$async30552(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30553){
return (new cljs.core.async.t_cljs$core$async30552(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30553));
});

}

return (new cljs.core.async.t_cljs$core$async30552(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28501__auto___32973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_30681){
var state_val_30682 = (state_30681[(1)]);
if((state_val_30682 === (7))){
var inst_30674 = (state_30681[(2)]);
var state_30681__$1 = state_30681;
var statearr_30686_32974 = state_30681__$1;
(statearr_30686_32974[(2)] = inst_30674);

(statearr_30686_32974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (20))){
var state_30681__$1 = state_30681;
var statearr_30689_32977 = state_30681__$1;
(statearr_30689_32977[(2)] = null);

(statearr_30689_32977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (1))){
var state_30681__$1 = state_30681;
var statearr_30690_32978 = state_30681__$1;
(statearr_30690_32978[(2)] = null);

(statearr_30690_32978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (24))){
var inst_30654 = (state_30681[(7)]);
var inst_30665 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30654);
var state_30681__$1 = state_30681;
var statearr_30692_32981 = state_30681__$1;
(statearr_30692_32981[(2)] = inst_30665);

(statearr_30692_32981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (4))){
var inst_30596 = (state_30681[(8)]);
var inst_30596__$1 = (state_30681[(2)]);
var inst_30598 = (inst_30596__$1 == null);
var state_30681__$1 = (function (){var statearr_30693 = state_30681;
(statearr_30693[(8)] = inst_30596__$1);

return statearr_30693;
})();
if(cljs.core.truth_(inst_30598)){
var statearr_30694_32982 = state_30681__$1;
(statearr_30694_32982[(1)] = (5));

} else {
var statearr_30695_32984 = state_30681__$1;
(statearr_30695_32984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (15))){
var inst_30648 = (state_30681[(2)]);
var state_30681__$1 = state_30681;
var statearr_30697_32987 = state_30681__$1;
(statearr_30697_32987[(2)] = inst_30648);

(statearr_30697_32987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (21))){
var inst_30670 = (state_30681[(2)]);
var state_30681__$1 = (function (){var statearr_30698 = state_30681;
(statearr_30698[(9)] = inst_30670);

return statearr_30698;
})();
var statearr_30699_32988 = state_30681__$1;
(statearr_30699_32988[(2)] = null);

(statearr_30699_32988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (13))){
var inst_30626 = (state_30681[(10)]);
var inst_30631 = cljs.core.chunked_seq_QMARK_(inst_30626);
var state_30681__$1 = state_30681;
if(inst_30631){
var statearr_30700_32990 = state_30681__$1;
(statearr_30700_32990[(1)] = (16));

} else {
var statearr_30701_32991 = state_30681__$1;
(statearr_30701_32991[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (22))){
var inst_30661 = (state_30681[(2)]);
var state_30681__$1 = state_30681;
if(cljs.core.truth_(inst_30661)){
var statearr_30702_32992 = state_30681__$1;
(statearr_30702_32992[(1)] = (23));

} else {
var statearr_30708_32993 = state_30681__$1;
(statearr_30708_32993[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (6))){
var inst_30596 = (state_30681[(8)]);
var inst_30654 = (state_30681[(7)]);
var inst_30656 = (state_30681[(11)]);
var inst_30654__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30596) : topic_fn.call(null,inst_30596));
var inst_30655 = cljs.core.deref(mults);
var inst_30656__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30655,inst_30654__$1);
var state_30681__$1 = (function (){var statearr_30711 = state_30681;
(statearr_30711[(7)] = inst_30654__$1);

(statearr_30711[(11)] = inst_30656__$1);

return statearr_30711;
})();
if(cljs.core.truth_(inst_30656__$1)){
var statearr_30712_33008 = state_30681__$1;
(statearr_30712_33008[(1)] = (19));

} else {
var statearr_30713_33009 = state_30681__$1;
(statearr_30713_33009[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (25))){
var inst_30667 = (state_30681[(2)]);
var state_30681__$1 = state_30681;
var statearr_30714_33010 = state_30681__$1;
(statearr_30714_33010[(2)] = inst_30667);

(statearr_30714_33010[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (17))){
var inst_30626 = (state_30681[(10)]);
var inst_30639 = cljs.core.first(inst_30626);
var inst_30640 = cljs.core.async.muxch_STAR_(inst_30639);
var inst_30641 = cljs.core.async.close_BANG_(inst_30640);
var inst_30642 = cljs.core.next(inst_30626);
var inst_30607 = inst_30642;
var inst_30608 = null;
var inst_30609 = (0);
var inst_30610 = (0);
var state_30681__$1 = (function (){var statearr_30717 = state_30681;
(statearr_30717[(12)] = inst_30609);

(statearr_30717[(13)] = inst_30610);

(statearr_30717[(14)] = inst_30607);

(statearr_30717[(15)] = inst_30608);

(statearr_30717[(16)] = inst_30641);

return statearr_30717;
})();
var statearr_30719_33012 = state_30681__$1;
(statearr_30719_33012[(2)] = null);

(statearr_30719_33012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (3))){
var inst_30676 = (state_30681[(2)]);
var state_30681__$1 = state_30681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30681__$1,inst_30676);
} else {
if((state_val_30682 === (12))){
var inst_30650 = (state_30681[(2)]);
var state_30681__$1 = state_30681;
var statearr_30720_33016 = state_30681__$1;
(statearr_30720_33016[(2)] = inst_30650);

(statearr_30720_33016[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (2))){
var state_30681__$1 = state_30681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30681__$1,(4),ch);
} else {
if((state_val_30682 === (23))){
var state_30681__$1 = state_30681;
var statearr_30721_33020 = state_30681__$1;
(statearr_30721_33020[(2)] = null);

(statearr_30721_33020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (19))){
var inst_30596 = (state_30681[(8)]);
var inst_30656 = (state_30681[(11)]);
var inst_30659 = cljs.core.async.muxch_STAR_(inst_30656);
var state_30681__$1 = state_30681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30681__$1,(22),inst_30659,inst_30596);
} else {
if((state_val_30682 === (11))){
var inst_30626 = (state_30681[(10)]);
var inst_30607 = (state_30681[(14)]);
var inst_30626__$1 = cljs.core.seq(inst_30607);
var state_30681__$1 = (function (){var statearr_30725 = state_30681;
(statearr_30725[(10)] = inst_30626__$1);

return statearr_30725;
})();
if(inst_30626__$1){
var statearr_30726_33024 = state_30681__$1;
(statearr_30726_33024[(1)] = (13));

} else {
var statearr_30727_33026 = state_30681__$1;
(statearr_30727_33026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (9))){
var inst_30652 = (state_30681[(2)]);
var state_30681__$1 = state_30681;
var statearr_30730_33027 = state_30681__$1;
(statearr_30730_33027[(2)] = inst_30652);

(statearr_30730_33027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (5))){
var inst_30604 = cljs.core.deref(mults);
var inst_30605 = cljs.core.vals(inst_30604);
var inst_30606 = cljs.core.seq(inst_30605);
var inst_30607 = inst_30606;
var inst_30608 = null;
var inst_30609 = (0);
var inst_30610 = (0);
var state_30681__$1 = (function (){var statearr_30732 = state_30681;
(statearr_30732[(12)] = inst_30609);

(statearr_30732[(13)] = inst_30610);

(statearr_30732[(14)] = inst_30607);

(statearr_30732[(15)] = inst_30608);

return statearr_30732;
})();
var statearr_30733_33042 = state_30681__$1;
(statearr_30733_33042[(2)] = null);

(statearr_30733_33042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (14))){
var state_30681__$1 = state_30681;
var statearr_30738_33043 = state_30681__$1;
(statearr_30738_33043[(2)] = null);

(statearr_30738_33043[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (16))){
var inst_30626 = (state_30681[(10)]);
var inst_30633 = cljs.core.chunk_first(inst_30626);
var inst_30634 = cljs.core.chunk_rest(inst_30626);
var inst_30635 = cljs.core.count(inst_30633);
var inst_30607 = inst_30634;
var inst_30608 = inst_30633;
var inst_30609 = inst_30635;
var inst_30610 = (0);
var state_30681__$1 = (function (){var statearr_30742 = state_30681;
(statearr_30742[(12)] = inst_30609);

(statearr_30742[(13)] = inst_30610);

(statearr_30742[(14)] = inst_30607);

(statearr_30742[(15)] = inst_30608);

return statearr_30742;
})();
var statearr_30744_33058 = state_30681__$1;
(statearr_30744_33058[(2)] = null);

(statearr_30744_33058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (10))){
var inst_30609 = (state_30681[(12)]);
var inst_30610 = (state_30681[(13)]);
var inst_30607 = (state_30681[(14)]);
var inst_30608 = (state_30681[(15)]);
var inst_30619 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30608,inst_30610);
var inst_30620 = cljs.core.async.muxch_STAR_(inst_30619);
var inst_30621 = cljs.core.async.close_BANG_(inst_30620);
var inst_30622 = (inst_30610 + (1));
var tmp30735 = inst_30609;
var tmp30736 = inst_30607;
var tmp30737 = inst_30608;
var inst_30607__$1 = tmp30736;
var inst_30608__$1 = tmp30737;
var inst_30609__$1 = tmp30735;
var inst_30610__$1 = inst_30622;
var state_30681__$1 = (function (){var statearr_30751 = state_30681;
(statearr_30751[(12)] = inst_30609__$1);

(statearr_30751[(13)] = inst_30610__$1);

(statearr_30751[(17)] = inst_30621);

(statearr_30751[(14)] = inst_30607__$1);

(statearr_30751[(15)] = inst_30608__$1);

return statearr_30751;
})();
var statearr_30752_33078 = state_30681__$1;
(statearr_30752_33078[(2)] = null);

(statearr_30752_33078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (18))){
var inst_30645 = (state_30681[(2)]);
var state_30681__$1 = state_30681;
var statearr_30754_33080 = state_30681__$1;
(statearr_30754_33080[(2)] = inst_30645);

(statearr_30754_33080[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (8))){
var inst_30609 = (state_30681[(12)]);
var inst_30610 = (state_30681[(13)]);
var inst_30612 = (inst_30610 < inst_30609);
var inst_30613 = inst_30612;
var state_30681__$1 = state_30681;
if(cljs.core.truth_(inst_30613)){
var statearr_30755_33088 = state_30681__$1;
(statearr_30755_33088[(1)] = (10));

} else {
var statearr_30757_33089 = state_30681__$1;
(statearr_30757_33089[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28189__auto__ = null;
var cljs$core$async$state_machine__28189__auto____0 = (function (){
var statearr_30759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30759[(0)] = cljs$core$async$state_machine__28189__auto__);

(statearr_30759[(1)] = (1));

return statearr_30759;
});
var cljs$core$async$state_machine__28189__auto____1 = (function (state_30681){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_30681);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e30760){if((e30760 instanceof Object)){
var ex__28192__auto__ = e30760;
var statearr_30762_33098 = state_30681;
(statearr_30762_33098[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33105 = state_30681;
state_30681 = G__33105;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$state_machine__28189__auto__ = function(state_30681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28189__auto____1.call(this,state_30681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28189__auto____0;
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28189__auto____1;
return cljs$core$async$state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_30763 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_30763[(6)] = c__28501__auto___32973);

return statearr_30763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30768 = arguments.length;
switch (G__30768) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__30773 = arguments.length;
switch (G__30773) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__30779 = arguments.length;
switch (G__30779) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__28501__auto___33139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_30827){
var state_val_30828 = (state_30827[(1)]);
if((state_val_30828 === (7))){
var state_30827__$1 = state_30827;
var statearr_30833_33148 = state_30827__$1;
(statearr_30833_33148[(2)] = null);

(statearr_30833_33148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (1))){
var state_30827__$1 = state_30827;
var statearr_30838_33153 = state_30827__$1;
(statearr_30838_33153[(2)] = null);

(statearr_30838_33153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (4))){
var inst_30783 = (state_30827[(7)]);
var inst_30785 = (inst_30783 < cnt);
var state_30827__$1 = state_30827;
if(cljs.core.truth_(inst_30785)){
var statearr_30843_33172 = state_30827__$1;
(statearr_30843_33172[(1)] = (6));

} else {
var statearr_30848_33174 = state_30827__$1;
(statearr_30848_33174[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (15))){
var inst_30819 = (state_30827[(2)]);
var state_30827__$1 = state_30827;
var statearr_30849_33187 = state_30827__$1;
(statearr_30849_33187[(2)] = inst_30819);

(statearr_30849_33187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (13))){
var inst_30812 = cljs.core.async.close_BANG_(out);
var state_30827__$1 = state_30827;
var statearr_30850_33194 = state_30827__$1;
(statearr_30850_33194[(2)] = inst_30812);

(statearr_30850_33194[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (6))){
var state_30827__$1 = state_30827;
var statearr_30851_33197 = state_30827__$1;
(statearr_30851_33197[(2)] = null);

(statearr_30851_33197[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (3))){
var inst_30821 = (state_30827[(2)]);
var state_30827__$1 = state_30827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30827__$1,inst_30821);
} else {
if((state_val_30828 === (12))){
var inst_30809 = (state_30827[(8)]);
var inst_30809__$1 = (state_30827[(2)]);
var inst_30810 = cljs.core.some(cljs.core.nil_QMARK_,inst_30809__$1);
var state_30827__$1 = (function (){var statearr_30866 = state_30827;
(statearr_30866[(8)] = inst_30809__$1);

return statearr_30866;
})();
if(cljs.core.truth_(inst_30810)){
var statearr_30868_33208 = state_30827__$1;
(statearr_30868_33208[(1)] = (13));

} else {
var statearr_30873_33210 = state_30827__$1;
(statearr_30873_33210[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (2))){
var inst_30782 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30783 = (0);
var state_30827__$1 = (function (){var statearr_30875 = state_30827;
(statearr_30875[(9)] = inst_30782);

(statearr_30875[(7)] = inst_30783);

return statearr_30875;
})();
var statearr_30876_33213 = state_30827__$1;
(statearr_30876_33213[(2)] = null);

(statearr_30876_33213[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (11))){
var inst_30783 = (state_30827[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_30827,(10),Object,null,(9));
var inst_30792 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30783) : chs__$1.call(null,inst_30783));
var inst_30793 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30783) : done.call(null,inst_30783));
var inst_30794 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30792,inst_30793);
var state_30827__$1 = state_30827;
var statearr_30877_33220 = state_30827__$1;
(statearr_30877_33220[(2)] = inst_30794);


cljs.core.async.impl.ioc_helpers.process_exception(state_30827__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (9))){
var inst_30783 = (state_30827[(7)]);
var inst_30796 = (state_30827[(2)]);
var inst_30797 = (inst_30783 + (1));
var inst_30783__$1 = inst_30797;
var state_30827__$1 = (function (){var statearr_30879 = state_30827;
(statearr_30879[(7)] = inst_30783__$1);

(statearr_30879[(10)] = inst_30796);

return statearr_30879;
})();
var statearr_30880_33222 = state_30827__$1;
(statearr_30880_33222[(2)] = null);

(statearr_30880_33222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (5))){
var inst_30803 = (state_30827[(2)]);
var state_30827__$1 = (function (){var statearr_30882 = state_30827;
(statearr_30882[(11)] = inst_30803);

return statearr_30882;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30827__$1,(12),dchan);
} else {
if((state_val_30828 === (14))){
var inst_30809 = (state_30827[(8)]);
var inst_30814 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30809);
var state_30827__$1 = state_30827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30827__$1,(16),out,inst_30814);
} else {
if((state_val_30828 === (16))){
var inst_30816 = (state_30827[(2)]);
var state_30827__$1 = (function (){var statearr_30886 = state_30827;
(statearr_30886[(12)] = inst_30816);

return statearr_30886;
})();
var statearr_30887_33227 = state_30827__$1;
(statearr_30887_33227[(2)] = null);

(statearr_30887_33227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (10))){
var inst_30787 = (state_30827[(2)]);
var inst_30788 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30827__$1 = (function (){var statearr_30888 = state_30827;
(statearr_30888[(13)] = inst_30787);

return statearr_30888;
})();
var statearr_30889_33229 = state_30827__$1;
(statearr_30889_33229[(2)] = inst_30788);


cljs.core.async.impl.ioc_helpers.process_exception(state_30827__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (8))){
var inst_30801 = (state_30827[(2)]);
var state_30827__$1 = state_30827;
var statearr_30890_33234 = state_30827__$1;
(statearr_30890_33234[(2)] = inst_30801);

(statearr_30890_33234[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28189__auto__ = null;
var cljs$core$async$state_machine__28189__auto____0 = (function (){
var statearr_30892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30892[(0)] = cljs$core$async$state_machine__28189__auto__);

(statearr_30892[(1)] = (1));

return statearr_30892;
});
var cljs$core$async$state_machine__28189__auto____1 = (function (state_30827){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_30827);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e30894){if((e30894 instanceof Object)){
var ex__28192__auto__ = e30894;
var statearr_30895_33238 = state_30827;
(statearr_30895_33238[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30894;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33240 = state_30827;
state_30827 = G__33240;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$state_machine__28189__auto__ = function(state_30827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28189__auto____1.call(this,state_30827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28189__auto____0;
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28189__auto____1;
return cljs$core$async$state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_30897 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_30897[(6)] = c__28501__auto___33139);

return statearr_30897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30901 = arguments.length;
switch (G__30901) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28501__auto___33256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_30938){
var state_val_30939 = (state_30938[(1)]);
if((state_val_30939 === (7))){
var inst_30918 = (state_30938[(7)]);
var inst_30917 = (state_30938[(8)]);
var inst_30917__$1 = (state_30938[(2)]);
var inst_30918__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30917__$1,(0),null);
var inst_30919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30917__$1,(1),null);
var inst_30920 = (inst_30918__$1 == null);
var state_30938__$1 = (function (){var statearr_30940 = state_30938;
(statearr_30940[(9)] = inst_30919);

(statearr_30940[(7)] = inst_30918__$1);

(statearr_30940[(8)] = inst_30917__$1);

return statearr_30940;
})();
if(cljs.core.truth_(inst_30920)){
var statearr_30941_33264 = state_30938__$1;
(statearr_30941_33264[(1)] = (8));

} else {
var statearr_30943_33270 = state_30938__$1;
(statearr_30943_33270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (1))){
var inst_30907 = cljs.core.vec(chs);
var inst_30908 = inst_30907;
var state_30938__$1 = (function (){var statearr_30944 = state_30938;
(statearr_30944[(10)] = inst_30908);

return statearr_30944;
})();
var statearr_30945_33276 = state_30938__$1;
(statearr_30945_33276[(2)] = null);

(statearr_30945_33276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (4))){
var inst_30908 = (state_30938[(10)]);
var state_30938__$1 = state_30938;
return cljs.core.async.ioc_alts_BANG_(state_30938__$1,(7),inst_30908);
} else {
if((state_val_30939 === (6))){
var inst_30934 = (state_30938[(2)]);
var state_30938__$1 = state_30938;
var statearr_30946_33294 = state_30938__$1;
(statearr_30946_33294[(2)] = inst_30934);

(statearr_30946_33294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (3))){
var inst_30936 = (state_30938[(2)]);
var state_30938__$1 = state_30938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30938__$1,inst_30936);
} else {
if((state_val_30939 === (2))){
var inst_30908 = (state_30938[(10)]);
var inst_30910 = cljs.core.count(inst_30908);
var inst_30911 = (inst_30910 > (0));
var state_30938__$1 = state_30938;
if(cljs.core.truth_(inst_30911)){
var statearr_30948_33306 = state_30938__$1;
(statearr_30948_33306[(1)] = (4));

} else {
var statearr_30949_33308 = state_30938__$1;
(statearr_30949_33308[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (11))){
var inst_30908 = (state_30938[(10)]);
var inst_30927 = (state_30938[(2)]);
var tmp30947 = inst_30908;
var inst_30908__$1 = tmp30947;
var state_30938__$1 = (function (){var statearr_30950 = state_30938;
(statearr_30950[(10)] = inst_30908__$1);

(statearr_30950[(11)] = inst_30927);

return statearr_30950;
})();
var statearr_30952_33326 = state_30938__$1;
(statearr_30952_33326[(2)] = null);

(statearr_30952_33326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (9))){
var inst_30918 = (state_30938[(7)]);
var state_30938__$1 = state_30938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30938__$1,(11),out,inst_30918);
} else {
if((state_val_30939 === (5))){
var inst_30932 = cljs.core.async.close_BANG_(out);
var state_30938__$1 = state_30938;
var statearr_30953_33343 = state_30938__$1;
(statearr_30953_33343[(2)] = inst_30932);

(statearr_30953_33343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (10))){
var inst_30930 = (state_30938[(2)]);
var state_30938__$1 = state_30938;
var statearr_30954_33348 = state_30938__$1;
(statearr_30954_33348[(2)] = inst_30930);

(statearr_30954_33348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (8))){
var inst_30908 = (state_30938[(10)]);
var inst_30919 = (state_30938[(9)]);
var inst_30918 = (state_30938[(7)]);
var inst_30917 = (state_30938[(8)]);
var inst_30922 = (function (){var cs = inst_30908;
var vec__30913 = inst_30917;
var v = inst_30918;
var c = inst_30919;
return (function (p1__30899_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30899_SHARP_);
});
})();
var inst_30923 = cljs.core.filterv(inst_30922,inst_30908);
var inst_30908__$1 = inst_30923;
var state_30938__$1 = (function (){var statearr_30957 = state_30938;
(statearr_30957[(10)] = inst_30908__$1);

return statearr_30957;
})();
var statearr_30959_33381 = state_30938__$1;
(statearr_30959_33381[(2)] = null);

(statearr_30959_33381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});
return (function() {
var cljs$core$async$state_machine__28189__auto__ = null;
var cljs$core$async$state_machine__28189__auto____0 = (function (){
var statearr_30961 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30961[(0)] = cljs$core$async$state_machine__28189__auto__);

(statearr_30961[(1)] = (1));

return statearr_30961;
});
var cljs$core$async$state_machine__28189__auto____1 = (function (state_30938){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_30938);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e30962){if((e30962 instanceof Object)){
var ex__28192__auto__ = e30962;
var statearr_30963_33403 = state_30938;
(statearr_30963_33403[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30962;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33405 = state_30938;
state_30938 = G__33405;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$state_machine__28189__auto__ = function(state_30938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28189__auto____1.call(this,state_30938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28189__auto____0;
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28189__auto____1;
return cljs$core$async$state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_30964 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_30964[(6)] = c__28501__auto___33256);

return statearr_30964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__30971 = arguments.length;
switch (G__30971) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28501__auto___33417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_31000){
var state_val_31001 = (state_31000[(1)]);
if((state_val_31001 === (7))){
var inst_30980 = (state_31000[(7)]);
var inst_30980__$1 = (state_31000[(2)]);
var inst_30983 = (inst_30980__$1 == null);
var inst_30984 = cljs.core.not(inst_30983);
var state_31000__$1 = (function (){var statearr_31002 = state_31000;
(statearr_31002[(7)] = inst_30980__$1);

return statearr_31002;
})();
if(inst_30984){
var statearr_31003_33436 = state_31000__$1;
(statearr_31003_33436[(1)] = (8));

} else {
var statearr_31004_33437 = state_31000__$1;
(statearr_31004_33437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (1))){
var inst_30973 = (0);
var state_31000__$1 = (function (){var statearr_31005 = state_31000;
(statearr_31005[(8)] = inst_30973);

return statearr_31005;
})();
var statearr_31007_33450 = state_31000__$1;
(statearr_31007_33450[(2)] = null);

(statearr_31007_33450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (4))){
var state_31000__$1 = state_31000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31000__$1,(7),ch);
} else {
if((state_val_31001 === (6))){
var inst_30995 = (state_31000[(2)]);
var state_31000__$1 = state_31000;
var statearr_31011_33460 = state_31000__$1;
(statearr_31011_33460[(2)] = inst_30995);

(statearr_31011_33460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (3))){
var inst_30997 = (state_31000[(2)]);
var inst_30998 = cljs.core.async.close_BANG_(out);
var state_31000__$1 = (function (){var statearr_31014 = state_31000;
(statearr_31014[(9)] = inst_30997);

return statearr_31014;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31000__$1,inst_30998);
} else {
if((state_val_31001 === (2))){
var inst_30973 = (state_31000[(8)]);
var inst_30975 = (inst_30973 < n);
var state_31000__$1 = state_31000;
if(cljs.core.truth_(inst_30975)){
var statearr_31015_33472 = state_31000__$1;
(statearr_31015_33472[(1)] = (4));

} else {
var statearr_31016_33480 = state_31000__$1;
(statearr_31016_33480[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (11))){
var inst_30973 = (state_31000[(8)]);
var inst_30987 = (state_31000[(2)]);
var inst_30988 = (inst_30973 + (1));
var inst_30973__$1 = inst_30988;
var state_31000__$1 = (function (){var statearr_31017 = state_31000;
(statearr_31017[(10)] = inst_30987);

(statearr_31017[(8)] = inst_30973__$1);

return statearr_31017;
})();
var statearr_31018_33486 = state_31000__$1;
(statearr_31018_33486[(2)] = null);

(statearr_31018_33486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (9))){
var state_31000__$1 = state_31000;
var statearr_31019_33488 = state_31000__$1;
(statearr_31019_33488[(2)] = null);

(statearr_31019_33488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (5))){
var state_31000__$1 = state_31000;
var statearr_31021_33489 = state_31000__$1;
(statearr_31021_33489[(2)] = null);

(statearr_31021_33489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (10))){
var inst_30992 = (state_31000[(2)]);
var state_31000__$1 = state_31000;
var statearr_31022_33490 = state_31000__$1;
(statearr_31022_33490[(2)] = inst_30992);

(statearr_31022_33490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (8))){
var inst_30980 = (state_31000[(7)]);
var state_31000__$1 = state_31000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31000__$1,(11),out,inst_30980);
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
}
}
});
return (function() {
var cljs$core$async$state_machine__28189__auto__ = null;
var cljs$core$async$state_machine__28189__auto____0 = (function (){
var statearr_31024 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31024[(0)] = cljs$core$async$state_machine__28189__auto__);

(statearr_31024[(1)] = (1));

return statearr_31024;
});
var cljs$core$async$state_machine__28189__auto____1 = (function (state_31000){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_31000);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e31025){if((e31025 instanceof Object)){
var ex__28192__auto__ = e31025;
var statearr_31026_33505 = state_31000;
(statearr_31026_33505[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31025;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33506 = state_31000;
state_31000 = G__33506;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$state_machine__28189__auto__ = function(state_31000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28189__auto____1.call(this,state_31000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28189__auto____0;
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28189__auto____1;
return cljs$core$async$state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_31030 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_31030[(6)] = c__28501__auto___33417);

return statearr_31030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31034 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31034 = (function (f,ch,meta31035){
this.f = f;
this.ch = ch;
this.meta31035 = meta31035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31036,meta31035__$1){
var self__ = this;
var _31036__$1 = this;
return (new cljs.core.async.t_cljs$core$async31034(self__.f,self__.ch,meta31035__$1));
}));

(cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31036){
var self__ = this;
var _31036__$1 = this;
return self__.meta31035;
}));

(cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31039 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31039 = (function (f,ch,meta31035,_,fn1,meta31040){
this.f = f;
this.ch = ch;
this.meta31035 = meta31035;
this._ = _;
this.fn1 = fn1;
this.meta31040 = meta31040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31041,meta31040__$1){
var self__ = this;
var _31041__$1 = this;
return (new cljs.core.async.t_cljs$core$async31039(self__.f,self__.ch,self__.meta31035,self__._,self__.fn1,meta31040__$1));
}));

(cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31041){
var self__ = this;
var _31041__$1 = this;
return self__.meta31040;
}));

(cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31033_SHARP_){
var G__31045 = (((p1__31033_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31033_SHARP_) : self__.f.call(null,p1__31033_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31045) : f1.call(null,G__31045));
});
}));

(cljs.core.async.t_cljs$core$async31039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31035","meta31035",-1745925041,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31034","cljs.core.async/t_cljs$core$async31034",1421442942,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31040","meta31040",-1735126441,null)], null);
}));

(cljs.core.async.t_cljs$core$async31039.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31039");

(cljs.core.async.t_cljs$core$async31039.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31039");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31039.
 */
cljs.core.async.__GT_t_cljs$core$async31039 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31039(f__$1,ch__$1,meta31035__$1,___$2,fn1__$1,meta31040){
return (new cljs.core.async.t_cljs$core$async31039(f__$1,ch__$1,meta31035__$1,___$2,fn1__$1,meta31040));
});

}

return (new cljs.core.async.t_cljs$core$async31039(self__.f,self__.ch,self__.meta31035,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31049 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31049) : self__.f.call(null,G__31049));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31035","meta31035",-1745925041,null)], null);
}));

(cljs.core.async.t_cljs$core$async31034.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31034");

(cljs.core.async.t_cljs$core$async31034.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31034");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31034.
 */
cljs.core.async.__GT_t_cljs$core$async31034 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31034(f__$1,ch__$1,meta31035){
return (new cljs.core.async.t_cljs$core$async31034(f__$1,ch__$1,meta31035));
});

}

return (new cljs.core.async.t_cljs$core$async31034(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31056 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31056 = (function (f,ch,meta31057){
this.f = f;
this.ch = ch;
this.meta31057 = meta31057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31058,meta31057__$1){
var self__ = this;
var _31058__$1 = this;
return (new cljs.core.async.t_cljs$core$async31056(self__.f,self__.ch,meta31057__$1));
}));

(cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31058){
var self__ = this;
var _31058__$1 = this;
return self__.meta31057;
}));

(cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31057","meta31057",1649658001,null)], null);
}));

(cljs.core.async.t_cljs$core$async31056.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31056");

(cljs.core.async.t_cljs$core$async31056.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31056");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31056.
 */
cljs.core.async.__GT_t_cljs$core$async31056 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31056(f__$1,ch__$1,meta31057){
return (new cljs.core.async.t_cljs$core$async31056(f__$1,ch__$1,meta31057));
});

}

return (new cljs.core.async.t_cljs$core$async31056(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31068 = (function (p,ch,meta31069){
this.p = p;
this.ch = ch;
this.meta31069 = meta31069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31070,meta31069__$1){
var self__ = this;
var _31070__$1 = this;
return (new cljs.core.async.t_cljs$core$async31068(self__.p,self__.ch,meta31069__$1));
}));

(cljs.core.async.t_cljs$core$async31068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31070){
var self__ = this;
var _31070__$1 = this;
return self__.meta31069;
}));

(cljs.core.async.t_cljs$core$async31068.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31068.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31068.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31068.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31068.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31068.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31068.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31069","meta31069",1620314950,null)], null);
}));

(cljs.core.async.t_cljs$core$async31068.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31068");

(cljs.core.async.t_cljs$core$async31068.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31068");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31068.
 */
cljs.core.async.__GT_t_cljs$core$async31068 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31068(p__$1,ch__$1,meta31069){
return (new cljs.core.async.t_cljs$core$async31068(p__$1,ch__$1,meta31069));
});

}

return (new cljs.core.async.t_cljs$core$async31068(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31082 = arguments.length;
switch (G__31082) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28501__auto___33687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_31104){
var state_val_31105 = (state_31104[(1)]);
if((state_val_31105 === (7))){
var inst_31100 = (state_31104[(2)]);
var state_31104__$1 = state_31104;
var statearr_31107_33689 = state_31104__$1;
(statearr_31107_33689[(2)] = inst_31100);

(statearr_31107_33689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (1))){
var state_31104__$1 = state_31104;
var statearr_31108_33698 = state_31104__$1;
(statearr_31108_33698[(2)] = null);

(statearr_31108_33698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (4))){
var inst_31086 = (state_31104[(7)]);
var inst_31086__$1 = (state_31104[(2)]);
var inst_31087 = (inst_31086__$1 == null);
var state_31104__$1 = (function (){var statearr_31109 = state_31104;
(statearr_31109[(7)] = inst_31086__$1);

return statearr_31109;
})();
if(cljs.core.truth_(inst_31087)){
var statearr_31110_33701 = state_31104__$1;
(statearr_31110_33701[(1)] = (5));

} else {
var statearr_31111_33702 = state_31104__$1;
(statearr_31111_33702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (6))){
var inst_31086 = (state_31104[(7)]);
var inst_31091 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31086) : p.call(null,inst_31086));
var state_31104__$1 = state_31104;
if(cljs.core.truth_(inst_31091)){
var statearr_31112_33712 = state_31104__$1;
(statearr_31112_33712[(1)] = (8));

} else {
var statearr_31114_33713 = state_31104__$1;
(statearr_31114_33713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (3))){
var inst_31102 = (state_31104[(2)]);
var state_31104__$1 = state_31104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31104__$1,inst_31102);
} else {
if((state_val_31105 === (2))){
var state_31104__$1 = state_31104;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31104__$1,(4),ch);
} else {
if((state_val_31105 === (11))){
var inst_31094 = (state_31104[(2)]);
var state_31104__$1 = state_31104;
var statearr_31116_33717 = state_31104__$1;
(statearr_31116_33717[(2)] = inst_31094);

(statearr_31116_33717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (9))){
var state_31104__$1 = state_31104;
var statearr_31118_33721 = state_31104__$1;
(statearr_31118_33721[(2)] = null);

(statearr_31118_33721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (5))){
var inst_31089 = cljs.core.async.close_BANG_(out);
var state_31104__$1 = state_31104;
var statearr_31120_33727 = state_31104__$1;
(statearr_31120_33727[(2)] = inst_31089);

(statearr_31120_33727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (10))){
var inst_31097 = (state_31104[(2)]);
var state_31104__$1 = (function (){var statearr_31123 = state_31104;
(statearr_31123[(8)] = inst_31097);

return statearr_31123;
})();
var statearr_31124_33732 = state_31104__$1;
(statearr_31124_33732[(2)] = null);

(statearr_31124_33732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31105 === (8))){
var inst_31086 = (state_31104[(7)]);
var state_31104__$1 = state_31104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31104__$1,(11),out,inst_31086);
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
}
}
});
return (function() {
var cljs$core$async$state_machine__28189__auto__ = null;
var cljs$core$async$state_machine__28189__auto____0 = (function (){
var statearr_31125 = [null,null,null,null,null,null,null,null,null];
(statearr_31125[(0)] = cljs$core$async$state_machine__28189__auto__);

(statearr_31125[(1)] = (1));

return statearr_31125;
});
var cljs$core$async$state_machine__28189__auto____1 = (function (state_31104){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_31104);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e31126){if((e31126 instanceof Object)){
var ex__28192__auto__ = e31126;
var statearr_31128_33747 = state_31104;
(statearr_31128_33747[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31126;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33749 = state_31104;
state_31104 = G__33749;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$state_machine__28189__auto__ = function(state_31104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28189__auto____1.call(this,state_31104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28189__auto____0;
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28189__auto____1;
return cljs$core$async$state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_31129 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_31129[(6)] = c__28501__auto___33687);

return statearr_31129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31132 = arguments.length;
switch (G__31132) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28501__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_31211){
var state_val_31213 = (state_31211[(1)]);
if((state_val_31213 === (7))){
var inst_31205 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
var statearr_31218_33777 = state_31211__$1;
(statearr_31218_33777[(2)] = inst_31205);

(statearr_31218_33777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (20))){
var inst_31173 = (state_31211[(7)]);
var inst_31185 = (state_31211[(2)]);
var inst_31186 = cljs.core.next(inst_31173);
var inst_31155 = inst_31186;
var inst_31156 = null;
var inst_31157 = (0);
var inst_31158 = (0);
var state_31211__$1 = (function (){var statearr_31221 = state_31211;
(statearr_31221[(8)] = inst_31157);

(statearr_31221[(9)] = inst_31158);

(statearr_31221[(10)] = inst_31185);

(statearr_31221[(11)] = inst_31155);

(statearr_31221[(12)] = inst_31156);

return statearr_31221;
})();
var statearr_31222_33791 = state_31211__$1;
(statearr_31222_33791[(2)] = null);

(statearr_31222_33791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (1))){
var state_31211__$1 = state_31211;
var statearr_31223_33794 = state_31211__$1;
(statearr_31223_33794[(2)] = null);

(statearr_31223_33794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (4))){
var inst_31141 = (state_31211[(13)]);
var inst_31141__$1 = (state_31211[(2)]);
var inst_31143 = (inst_31141__$1 == null);
var state_31211__$1 = (function (){var statearr_31227 = state_31211;
(statearr_31227[(13)] = inst_31141__$1);

return statearr_31227;
})();
if(cljs.core.truth_(inst_31143)){
var statearr_31229_33802 = state_31211__$1;
(statearr_31229_33802[(1)] = (5));

} else {
var statearr_31230_33803 = state_31211__$1;
(statearr_31230_33803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (15))){
var state_31211__$1 = state_31211;
var statearr_31234_33805 = state_31211__$1;
(statearr_31234_33805[(2)] = null);

(statearr_31234_33805[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (21))){
var state_31211__$1 = state_31211;
var statearr_31235_33807 = state_31211__$1;
(statearr_31235_33807[(2)] = null);

(statearr_31235_33807[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (13))){
var inst_31157 = (state_31211[(8)]);
var inst_31158 = (state_31211[(9)]);
var inst_31155 = (state_31211[(11)]);
var inst_31156 = (state_31211[(12)]);
var inst_31166 = (state_31211[(2)]);
var inst_31168 = (inst_31158 + (1));
var tmp31231 = inst_31157;
var tmp31232 = inst_31155;
var tmp31233 = inst_31156;
var inst_31155__$1 = tmp31232;
var inst_31156__$1 = tmp31233;
var inst_31157__$1 = tmp31231;
var inst_31158__$1 = inst_31168;
var state_31211__$1 = (function (){var statearr_31238 = state_31211;
(statearr_31238[(14)] = inst_31166);

(statearr_31238[(8)] = inst_31157__$1);

(statearr_31238[(9)] = inst_31158__$1);

(statearr_31238[(11)] = inst_31155__$1);

(statearr_31238[(12)] = inst_31156__$1);

return statearr_31238;
})();
var statearr_31239_33826 = state_31211__$1;
(statearr_31239_33826[(2)] = null);

(statearr_31239_33826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (22))){
var state_31211__$1 = state_31211;
var statearr_31241_33829 = state_31211__$1;
(statearr_31241_33829[(2)] = null);

(statearr_31241_33829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (6))){
var inst_31141 = (state_31211[(13)]);
var inst_31152 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31141) : f.call(null,inst_31141));
var inst_31153 = cljs.core.seq(inst_31152);
var inst_31155 = inst_31153;
var inst_31156 = null;
var inst_31157 = (0);
var inst_31158 = (0);
var state_31211__$1 = (function (){var statearr_31244 = state_31211;
(statearr_31244[(8)] = inst_31157);

(statearr_31244[(9)] = inst_31158);

(statearr_31244[(11)] = inst_31155);

(statearr_31244[(12)] = inst_31156);

return statearr_31244;
})();
var statearr_31245_33833 = state_31211__$1;
(statearr_31245_33833[(2)] = null);

(statearr_31245_33833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (17))){
var inst_31173 = (state_31211[(7)]);
var inst_31178 = cljs.core.chunk_first(inst_31173);
var inst_31179 = cljs.core.chunk_rest(inst_31173);
var inst_31180 = cljs.core.count(inst_31178);
var inst_31155 = inst_31179;
var inst_31156 = inst_31178;
var inst_31157 = inst_31180;
var inst_31158 = (0);
var state_31211__$1 = (function (){var statearr_31247 = state_31211;
(statearr_31247[(8)] = inst_31157);

(statearr_31247[(9)] = inst_31158);

(statearr_31247[(11)] = inst_31155);

(statearr_31247[(12)] = inst_31156);

return statearr_31247;
})();
var statearr_31248_33838 = state_31211__$1;
(statearr_31248_33838[(2)] = null);

(statearr_31248_33838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (3))){
var inst_31207 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31211__$1,inst_31207);
} else {
if((state_val_31213 === (12))){
var inst_31194 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
var statearr_31253_33839 = state_31211__$1;
(statearr_31253_33839[(2)] = inst_31194);

(statearr_31253_33839[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (2))){
var state_31211__$1 = state_31211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31211__$1,(4),in$);
} else {
if((state_val_31213 === (23))){
var inst_31203 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
var statearr_31259_33846 = state_31211__$1;
(statearr_31259_33846[(2)] = inst_31203);

(statearr_31259_33846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (19))){
var inst_31189 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
var statearr_31261_33847 = state_31211__$1;
(statearr_31261_33847[(2)] = inst_31189);

(statearr_31261_33847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (11))){
var inst_31173 = (state_31211[(7)]);
var inst_31155 = (state_31211[(11)]);
var inst_31173__$1 = cljs.core.seq(inst_31155);
var state_31211__$1 = (function (){var statearr_31264 = state_31211;
(statearr_31264[(7)] = inst_31173__$1);

return statearr_31264;
})();
if(inst_31173__$1){
var statearr_31265_33850 = state_31211__$1;
(statearr_31265_33850[(1)] = (14));

} else {
var statearr_31266_33851 = state_31211__$1;
(statearr_31266_33851[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (9))){
var inst_31196 = (state_31211[(2)]);
var inst_31197 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31211__$1 = (function (){var statearr_31269 = state_31211;
(statearr_31269[(15)] = inst_31196);

return statearr_31269;
})();
if(cljs.core.truth_(inst_31197)){
var statearr_31270_33854 = state_31211__$1;
(statearr_31270_33854[(1)] = (21));

} else {
var statearr_31271_33857 = state_31211__$1;
(statearr_31271_33857[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (5))){
var inst_31145 = cljs.core.async.close_BANG_(out);
var state_31211__$1 = state_31211;
var statearr_31276_33860 = state_31211__$1;
(statearr_31276_33860[(2)] = inst_31145);

(statearr_31276_33860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (14))){
var inst_31173 = (state_31211[(7)]);
var inst_31176 = cljs.core.chunked_seq_QMARK_(inst_31173);
var state_31211__$1 = state_31211;
if(inst_31176){
var statearr_31278_33864 = state_31211__$1;
(statearr_31278_33864[(1)] = (17));

} else {
var statearr_31279_33866 = state_31211__$1;
(statearr_31279_33866[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (16))){
var inst_31192 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
var statearr_31280_33868 = state_31211__$1;
(statearr_31280_33868[(2)] = inst_31192);

(statearr_31280_33868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (10))){
var inst_31158 = (state_31211[(9)]);
var inst_31156 = (state_31211[(12)]);
var inst_31163 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31156,inst_31158);
var state_31211__$1 = state_31211;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31211__$1,(13),out,inst_31163);
} else {
if((state_val_31213 === (18))){
var inst_31173 = (state_31211[(7)]);
var inst_31183 = cljs.core.first(inst_31173);
var state_31211__$1 = state_31211;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31211__$1,(20),out,inst_31183);
} else {
if((state_val_31213 === (8))){
var inst_31157 = (state_31211[(8)]);
var inst_31158 = (state_31211[(9)]);
var inst_31160 = (inst_31158 < inst_31157);
var inst_31161 = inst_31160;
var state_31211__$1 = state_31211;
if(cljs.core.truth_(inst_31161)){
var statearr_31283_33873 = state_31211__$1;
(statearr_31283_33873[(1)] = (10));

} else {
var statearr_31284_33874 = state_31211__$1;
(statearr_31284_33874[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28189__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28189__auto____0 = (function (){
var statearr_31286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31286[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28189__auto__);

(statearr_31286[(1)] = (1));

return statearr_31286;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28189__auto____1 = (function (state_31211){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_31211);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e31287){if((e31287 instanceof Object)){
var ex__28192__auto__ = e31287;
var statearr_31290_33884 = state_31211;
(statearr_31290_33884[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31287;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33890 = state_31211;
state_31211 = G__33890;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28189__auto__ = function(state_31211){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28189__auto____1.call(this,state_31211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28189__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28189__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_31292 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_31292[(6)] = c__28501__auto__);

return statearr_31292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));

return c__28501__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31294 = arguments.length;
switch (G__31294) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31301 = arguments.length;
switch (G__31301) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31308 = arguments.length;
switch (G__31308) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28501__auto___33928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_31337){
var state_val_31338 = (state_31337[(1)]);
if((state_val_31338 === (7))){
var inst_31330 = (state_31337[(2)]);
var state_31337__$1 = state_31337;
var statearr_31341_33941 = state_31337__$1;
(statearr_31341_33941[(2)] = inst_31330);

(statearr_31341_33941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (1))){
var inst_31312 = null;
var state_31337__$1 = (function (){var statearr_31342 = state_31337;
(statearr_31342[(7)] = inst_31312);

return statearr_31342;
})();
var statearr_31343_33950 = state_31337__$1;
(statearr_31343_33950[(2)] = null);

(statearr_31343_33950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (4))){
var inst_31315 = (state_31337[(8)]);
var inst_31315__$1 = (state_31337[(2)]);
var inst_31316 = (inst_31315__$1 == null);
var inst_31317 = cljs.core.not(inst_31316);
var state_31337__$1 = (function (){var statearr_31346 = state_31337;
(statearr_31346[(8)] = inst_31315__$1);

return statearr_31346;
})();
if(inst_31317){
var statearr_31347_33965 = state_31337__$1;
(statearr_31347_33965[(1)] = (5));

} else {
var statearr_31348_33973 = state_31337__$1;
(statearr_31348_33973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (6))){
var state_31337__$1 = state_31337;
var statearr_31349_33979 = state_31337__$1;
(statearr_31349_33979[(2)] = null);

(statearr_31349_33979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (3))){
var inst_31332 = (state_31337[(2)]);
var inst_31333 = cljs.core.async.close_BANG_(out);
var state_31337__$1 = (function (){var statearr_31350 = state_31337;
(statearr_31350[(9)] = inst_31332);

return statearr_31350;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31337__$1,inst_31333);
} else {
if((state_val_31338 === (2))){
var state_31337__$1 = state_31337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31337__$1,(4),ch);
} else {
if((state_val_31338 === (11))){
var inst_31315 = (state_31337[(8)]);
var inst_31324 = (state_31337[(2)]);
var inst_31312 = inst_31315;
var state_31337__$1 = (function (){var statearr_31351 = state_31337;
(statearr_31351[(7)] = inst_31312);

(statearr_31351[(10)] = inst_31324);

return statearr_31351;
})();
var statearr_31352_33997 = state_31337__$1;
(statearr_31352_33997[(2)] = null);

(statearr_31352_33997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (9))){
var inst_31315 = (state_31337[(8)]);
var state_31337__$1 = state_31337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31337__$1,(11),out,inst_31315);
} else {
if((state_val_31338 === (5))){
var inst_31312 = (state_31337[(7)]);
var inst_31315 = (state_31337[(8)]);
var inst_31319 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31315,inst_31312);
var state_31337__$1 = state_31337;
if(inst_31319){
var statearr_31355_34005 = state_31337__$1;
(statearr_31355_34005[(1)] = (8));

} else {
var statearr_31356_34009 = state_31337__$1;
(statearr_31356_34009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (10))){
var inst_31327 = (state_31337[(2)]);
var state_31337__$1 = state_31337;
var statearr_31359_34016 = state_31337__$1;
(statearr_31359_34016[(2)] = inst_31327);

(statearr_31359_34016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31338 === (8))){
var inst_31312 = (state_31337[(7)]);
var tmp31354 = inst_31312;
var inst_31312__$1 = tmp31354;
var state_31337__$1 = (function (){var statearr_31360 = state_31337;
(statearr_31360[(7)] = inst_31312__$1);

return statearr_31360;
})();
var statearr_31362_34031 = state_31337__$1;
(statearr_31362_34031[(2)] = null);

(statearr_31362_34031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});
return (function() {
var cljs$core$async$state_machine__28189__auto__ = null;
var cljs$core$async$state_machine__28189__auto____0 = (function (){
var statearr_31367 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31367[(0)] = cljs$core$async$state_machine__28189__auto__);

(statearr_31367[(1)] = (1));

return statearr_31367;
});
var cljs$core$async$state_machine__28189__auto____1 = (function (state_31337){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_31337);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e31370){if((e31370 instanceof Object)){
var ex__28192__auto__ = e31370;
var statearr_31372_34061 = state_31337;
(statearr_31372_34061[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31370;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34071 = state_31337;
state_31337 = G__34071;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$state_machine__28189__auto__ = function(state_31337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28189__auto____1.call(this,state_31337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28189__auto____0;
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28189__auto____1;
return cljs$core$async$state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_31377 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_31377[(6)] = c__28501__auto___33928);

return statearr_31377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31387 = arguments.length;
switch (G__31387) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28501__auto___34099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_31434){
var state_val_31435 = (state_31434[(1)]);
if((state_val_31435 === (7))){
var inst_31430 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31439_34103 = state_31434__$1;
(statearr_31439_34103[(2)] = inst_31430);

(statearr_31439_34103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (1))){
var inst_31394 = (new Array(n));
var inst_31397 = inst_31394;
var inst_31398 = (0);
var state_31434__$1 = (function (){var statearr_31440 = state_31434;
(statearr_31440[(7)] = inst_31397);

(statearr_31440[(8)] = inst_31398);

return statearr_31440;
})();
var statearr_31441_34114 = state_31434__$1;
(statearr_31441_34114[(2)] = null);

(statearr_31441_34114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (4))){
var inst_31401 = (state_31434[(9)]);
var inst_31401__$1 = (state_31434[(2)]);
var inst_31402 = (inst_31401__$1 == null);
var inst_31403 = cljs.core.not(inst_31402);
var state_31434__$1 = (function (){var statearr_31442 = state_31434;
(statearr_31442[(9)] = inst_31401__$1);

return statearr_31442;
})();
if(inst_31403){
var statearr_31443_34131 = state_31434__$1;
(statearr_31443_34131[(1)] = (5));

} else {
var statearr_31444_34136 = state_31434__$1;
(statearr_31444_34136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (15))){
var inst_31424 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31445_34140 = state_31434__$1;
(statearr_31445_34140[(2)] = inst_31424);

(statearr_31445_34140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (13))){
var state_31434__$1 = state_31434;
var statearr_31448_34145 = state_31434__$1;
(statearr_31448_34145[(2)] = null);

(statearr_31448_34145[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (6))){
var inst_31398 = (state_31434[(8)]);
var inst_31420 = (inst_31398 > (0));
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31420)){
var statearr_31449_34147 = state_31434__$1;
(statearr_31449_34147[(1)] = (12));

} else {
var statearr_31450_34150 = state_31434__$1;
(statearr_31450_34150[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (3))){
var inst_31432 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31434__$1,inst_31432);
} else {
if((state_val_31435 === (12))){
var inst_31397 = (state_31434[(7)]);
var inst_31422 = cljs.core.vec(inst_31397);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31434__$1,(15),out,inst_31422);
} else {
if((state_val_31435 === (2))){
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31434__$1,(4),ch);
} else {
if((state_val_31435 === (11))){
var inst_31413 = (state_31434[(2)]);
var inst_31414 = (new Array(n));
var inst_31397 = inst_31414;
var inst_31398 = (0);
var state_31434__$1 = (function (){var statearr_31452 = state_31434;
(statearr_31452[(7)] = inst_31397);

(statearr_31452[(8)] = inst_31398);

(statearr_31452[(10)] = inst_31413);

return statearr_31452;
})();
var statearr_31453_34174 = state_31434__$1;
(statearr_31453_34174[(2)] = null);

(statearr_31453_34174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (9))){
var inst_31397 = (state_31434[(7)]);
var inst_31411 = cljs.core.vec(inst_31397);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31434__$1,(11),out,inst_31411);
} else {
if((state_val_31435 === (5))){
var inst_31397 = (state_31434[(7)]);
var inst_31398 = (state_31434[(8)]);
var inst_31406 = (state_31434[(11)]);
var inst_31401 = (state_31434[(9)]);
var inst_31405 = (inst_31397[inst_31398] = inst_31401);
var inst_31406__$1 = (inst_31398 + (1));
var inst_31407 = (inst_31406__$1 < n);
var state_31434__$1 = (function (){var statearr_31455 = state_31434;
(statearr_31455[(11)] = inst_31406__$1);

(statearr_31455[(12)] = inst_31405);

return statearr_31455;
})();
if(cljs.core.truth_(inst_31407)){
var statearr_31456_34181 = state_31434__$1;
(statearr_31456_34181[(1)] = (8));

} else {
var statearr_31457_34182 = state_31434__$1;
(statearr_31457_34182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (14))){
var inst_31427 = (state_31434[(2)]);
var inst_31428 = cljs.core.async.close_BANG_(out);
var state_31434__$1 = (function (){var statearr_31459 = state_31434;
(statearr_31459[(13)] = inst_31427);

return statearr_31459;
})();
var statearr_31460_34185 = state_31434__$1;
(statearr_31460_34185[(2)] = inst_31428);

(statearr_31460_34185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (10))){
var inst_31417 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31461_34186 = state_31434__$1;
(statearr_31461_34186[(2)] = inst_31417);

(statearr_31461_34186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (8))){
var inst_31397 = (state_31434[(7)]);
var inst_31406 = (state_31434[(11)]);
var tmp31458 = inst_31397;
var inst_31397__$1 = tmp31458;
var inst_31398 = inst_31406;
var state_31434__$1 = (function (){var statearr_31462 = state_31434;
(statearr_31462[(7)] = inst_31397__$1);

(statearr_31462[(8)] = inst_31398);

return statearr_31462;
})();
var statearr_31465_34187 = state_31434__$1;
(statearr_31465_34187[(2)] = null);

(statearr_31465_34187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28189__auto__ = null;
var cljs$core$async$state_machine__28189__auto____0 = (function (){
var statearr_31468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31468[(0)] = cljs$core$async$state_machine__28189__auto__);

(statearr_31468[(1)] = (1));

return statearr_31468;
});
var cljs$core$async$state_machine__28189__auto____1 = (function (state_31434){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_31434);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e31473){if((e31473 instanceof Object)){
var ex__28192__auto__ = e31473;
var statearr_31474_34199 = state_31434;
(statearr_31474_34199[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31473;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34201 = state_31434;
state_31434 = G__34201;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$state_machine__28189__auto__ = function(state_31434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28189__auto____1.call(this,state_31434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28189__auto____0;
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28189__auto____1;
return cljs$core$async$state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_31475 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_31475[(6)] = c__28501__auto___34099);

return statearr_31475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31479 = arguments.length;
switch (G__31479) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28501__auto___34211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28502__auto__ = (function (){var switch__28188__auto__ = (function (state_31530){
var state_val_31531 = (state_31530[(1)]);
if((state_val_31531 === (7))){
var inst_31526 = (state_31530[(2)]);
var state_31530__$1 = state_31530;
var statearr_31532_34212 = state_31530__$1;
(statearr_31532_34212[(2)] = inst_31526);

(statearr_31532_34212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (1))){
var inst_31485 = [];
var inst_31486 = inst_31485;
var inst_31487 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31530__$1 = (function (){var statearr_31533 = state_31530;
(statearr_31533[(7)] = inst_31486);

(statearr_31533[(8)] = inst_31487);

return statearr_31533;
})();
var statearr_31535_34214 = state_31530__$1;
(statearr_31535_34214[(2)] = null);

(statearr_31535_34214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (4))){
var inst_31492 = (state_31530[(9)]);
var inst_31492__$1 = (state_31530[(2)]);
var inst_31493 = (inst_31492__$1 == null);
var inst_31494 = cljs.core.not(inst_31493);
var state_31530__$1 = (function (){var statearr_31536 = state_31530;
(statearr_31536[(9)] = inst_31492__$1);

return statearr_31536;
})();
if(inst_31494){
var statearr_31537_34219 = state_31530__$1;
(statearr_31537_34219[(1)] = (5));

} else {
var statearr_31539_34221 = state_31530__$1;
(statearr_31539_34221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (15))){
var inst_31520 = (state_31530[(2)]);
var state_31530__$1 = state_31530;
var statearr_31541_34227 = state_31530__$1;
(statearr_31541_34227[(2)] = inst_31520);

(statearr_31541_34227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (13))){
var state_31530__$1 = state_31530;
var statearr_31542_34235 = state_31530__$1;
(statearr_31542_34235[(2)] = null);

(statearr_31542_34235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (6))){
var inst_31486 = (state_31530[(7)]);
var inst_31515 = inst_31486.length;
var inst_31516 = (inst_31515 > (0));
var state_31530__$1 = state_31530;
if(cljs.core.truth_(inst_31516)){
var statearr_31545_34236 = state_31530__$1;
(statearr_31545_34236[(1)] = (12));

} else {
var statearr_31546_34241 = state_31530__$1;
(statearr_31546_34241[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (3))){
var inst_31528 = (state_31530[(2)]);
var state_31530__$1 = state_31530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31530__$1,inst_31528);
} else {
if((state_val_31531 === (12))){
var inst_31486 = (state_31530[(7)]);
var inst_31518 = cljs.core.vec(inst_31486);
var state_31530__$1 = state_31530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31530__$1,(15),out,inst_31518);
} else {
if((state_val_31531 === (2))){
var state_31530__$1 = state_31530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31530__$1,(4),ch);
} else {
if((state_val_31531 === (11))){
var inst_31492 = (state_31530[(9)]);
var inst_31497 = (state_31530[(10)]);
var inst_31508 = (state_31530[(2)]);
var inst_31509 = [];
var inst_31510 = inst_31509.push(inst_31492);
var inst_31486 = inst_31509;
var inst_31487 = inst_31497;
var state_31530__$1 = (function (){var statearr_31547 = state_31530;
(statearr_31547[(7)] = inst_31486);

(statearr_31547[(11)] = inst_31508);

(statearr_31547[(8)] = inst_31487);

(statearr_31547[(12)] = inst_31510);

return statearr_31547;
})();
var statearr_31549_34256 = state_31530__$1;
(statearr_31549_34256[(2)] = null);

(statearr_31549_34256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (9))){
var inst_31486 = (state_31530[(7)]);
var inst_31506 = cljs.core.vec(inst_31486);
var state_31530__$1 = state_31530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31530__$1,(11),out,inst_31506);
} else {
if((state_val_31531 === (5))){
var inst_31492 = (state_31530[(9)]);
var inst_31487 = (state_31530[(8)]);
var inst_31497 = (state_31530[(10)]);
var inst_31497__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31492) : f.call(null,inst_31492));
var inst_31499 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31497__$1,inst_31487);
var inst_31500 = cljs.core.keyword_identical_QMARK_(inst_31487,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31501 = ((inst_31499) || (inst_31500));
var state_31530__$1 = (function (){var statearr_31558 = state_31530;
(statearr_31558[(10)] = inst_31497__$1);

return statearr_31558;
})();
if(cljs.core.truth_(inst_31501)){
var statearr_31559_34264 = state_31530__$1;
(statearr_31559_34264[(1)] = (8));

} else {
var statearr_31560_34266 = state_31530__$1;
(statearr_31560_34266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (14))){
var inst_31523 = (state_31530[(2)]);
var inst_31524 = cljs.core.async.close_BANG_(out);
var state_31530__$1 = (function (){var statearr_31562 = state_31530;
(statearr_31562[(13)] = inst_31523);

return statearr_31562;
})();
var statearr_31563_34267 = state_31530__$1;
(statearr_31563_34267[(2)] = inst_31524);

(statearr_31563_34267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (10))){
var inst_31513 = (state_31530[(2)]);
var state_31530__$1 = state_31530;
var statearr_31565_34272 = state_31530__$1;
(statearr_31565_34272[(2)] = inst_31513);

(statearr_31565_34272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31531 === (8))){
var inst_31486 = (state_31530[(7)]);
var inst_31492 = (state_31530[(9)]);
var inst_31497 = (state_31530[(10)]);
var inst_31503 = inst_31486.push(inst_31492);
var tmp31561 = inst_31486;
var inst_31486__$1 = tmp31561;
var inst_31487 = inst_31497;
var state_31530__$1 = (function (){var statearr_31567 = state_31530;
(statearr_31567[(7)] = inst_31486__$1);

(statearr_31567[(8)] = inst_31487);

(statearr_31567[(14)] = inst_31503);

return statearr_31567;
})();
var statearr_31568_34277 = state_31530__$1;
(statearr_31568_34277[(2)] = null);

(statearr_31568_34277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28189__auto__ = null;
var cljs$core$async$state_machine__28189__auto____0 = (function (){
var statearr_31569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31569[(0)] = cljs$core$async$state_machine__28189__auto__);

(statearr_31569[(1)] = (1));

return statearr_31569;
});
var cljs$core$async$state_machine__28189__auto____1 = (function (state_31530){
while(true){
var ret_value__28190__auto__ = (function (){try{while(true){
var result__28191__auto__ = switch__28188__auto__(state_31530);
if(cljs.core.keyword_identical_QMARK_(result__28191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28191__auto__;
}
break;
}
}catch (e31570){if((e31570 instanceof Object)){
var ex__28192__auto__ = e31570;
var statearr_31571_34290 = state_31530;
(statearr_31571_34290[(5)] = ex__28192__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31570;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34295 = state_31530;
state_31530 = G__34295;
continue;
} else {
return ret_value__28190__auto__;
}
break;
}
});
cljs$core$async$state_machine__28189__auto__ = function(state_31530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28189__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28189__auto____1.call(this,state_31530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28189__auto____0;
cljs$core$async$state_machine__28189__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28189__auto____1;
return cljs$core$async$state_machine__28189__auto__;
})()
})();
var state__28503__auto__ = (function (){var statearr_31576 = (f__28502__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28502__auto__.cljs$core$IFn$_invoke$arity$0() : f__28502__auto__.call(null));
(statearr_31576[(6)] = c__28501__auto___34211);

return statearr_31576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28503__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
