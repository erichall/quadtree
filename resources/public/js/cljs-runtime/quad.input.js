goog.provide('quad.input');
goog.require('cljs.core');
goog.require('cljs.core.async');
quad.input.setup_listener_BANG_ = (function quad$input$setup_listener_BANG_(var_args){
var G__34451 = arguments.length;
switch (G__34451) {
case 4:
return quad.input.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return quad.input.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return quad.input.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quad.input.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (obj,event_type,callback,args){
return obj.addEventListener(event_type,callback,args);
}));

(quad.input.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (obj,event_type,callback){
return obj.addEventListener(event_type,callback);
}));

(quad.input.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (event_type,callback){
return window.addEventListener(event_type,callback);
}));

(quad.input.setup_listener_BANG_.cljs$lang$maxFixedArity = 4);

quad.input.listen = (function quad$input$listen(var_args){
var G__34453 = arguments.length;
switch (G__34453) {
case 3:
return quad.input.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return quad.input.listen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quad.input.listen.cljs$core$IFn$_invoke$arity$3 = (function (element,type,prevent_default_QMARK_){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
quad.input.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$3(element,type,(function (evt){
if(cljs.core.truth_(prevent_default_QMARK_)){
evt.preventDefault();
} else {
}

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,evt);
}));

return out;
}));

(quad.input.listen.cljs$core$IFn$_invoke$arity$2 = (function (element,type){
return quad.input.listen.cljs$core$IFn$_invoke$arity$3(element,type,false);
}));

(quad.input.listen.cljs$lang$maxFixedArity = 3);

quad.input.dispatcher = (function quad$input$dispatcher(el,type,on_dispatch){
var c = quad.input.listen.cljs$core$IFn$_invoke$arity$2(el,type);
var c__25660__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25661__auto__ = (function (){var switch__25543__auto__ = (function (state_34462){
var state_val_34463 = (state_34462[(1)]);
if((state_val_34463 === (1))){
var state_34462__$1 = state_34462;
var statearr_34464_34473 = state_34462__$1;
(statearr_34464_34473[(2)] = null);

(statearr_34464_34473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34463 === (2))){
var state_34462__$1 = state_34462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34462__$1,(4),c);
} else {
if((state_val_34463 === (3))){
var inst_34460 = (state_34462[(2)]);
var state_34462__$1 = state_34462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34462__$1,inst_34460);
} else {
if((state_val_34463 === (4))){
var inst_34456 = (state_34462[(2)]);
var inst_34457 = (on_dispatch.cljs$core$IFn$_invoke$arity$1 ? on_dispatch.cljs$core$IFn$_invoke$arity$1(inst_34456) : on_dispatch.call(null,inst_34456));
var state_34462__$1 = (function (){var statearr_34465 = state_34462;
(statearr_34465[(7)] = inst_34457);

return statearr_34465;
})();
var statearr_34466_34474 = state_34462__$1;
(statearr_34466_34474[(2)] = null);

(statearr_34466_34474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var quad$input$dispatcher_$_state_machine__25544__auto__ = null;
var quad$input$dispatcher_$_state_machine__25544__auto____0 = (function (){
var statearr_34467 = [null,null,null,null,null,null,null,null];
(statearr_34467[(0)] = quad$input$dispatcher_$_state_machine__25544__auto__);

(statearr_34467[(1)] = (1));

return statearr_34467;
});
var quad$input$dispatcher_$_state_machine__25544__auto____1 = (function (state_34462){
while(true){
var ret_value__25545__auto__ = (function (){try{while(true){
var result__25546__auto__ = switch__25543__auto__(state_34462);
if(cljs.core.keyword_identical_QMARK_(result__25546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25546__auto__;
}
break;
}
}catch (e34468){if((e34468 instanceof Object)){
var ex__25547__auto__ = e34468;
var statearr_34469_34475 = state_34462;
(statearr_34469_34475[(5)] = ex__25547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34468;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34476 = state_34462;
state_34462 = G__34476;
continue;
} else {
return ret_value__25545__auto__;
}
break;
}
});
quad$input$dispatcher_$_state_machine__25544__auto__ = function(state_34462){
switch(arguments.length){
case 0:
return quad$input$dispatcher_$_state_machine__25544__auto____0.call(this);
case 1:
return quad$input$dispatcher_$_state_machine__25544__auto____1.call(this,state_34462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
quad$input$dispatcher_$_state_machine__25544__auto__.cljs$core$IFn$_invoke$arity$0 = quad$input$dispatcher_$_state_machine__25544__auto____0;
quad$input$dispatcher_$_state_machine__25544__auto__.cljs$core$IFn$_invoke$arity$1 = quad$input$dispatcher_$_state_machine__25544__auto____1;
return quad$input$dispatcher_$_state_machine__25544__auto__;
})()
})();
var state__25662__auto__ = (function (){var statearr_34470 = (f__25661__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25661__auto__.cljs$core$IFn$_invoke$arity$0() : f__25661__auto__.call(null));
(statearr_34470[(6)] = c__25660__auto__);

return statearr_34470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25662__auto__);
}));

return c__25660__auto__;
});
quad.input.mouse_move = (function quad$input$mouse_move(el,on_move){
return quad.input.dispatcher(el,"mousemove",on_move);
});
quad.input.mouse_click = (function quad$input$mouse_click(el,on_move){
return quad.input.dispatcher(el,"click",on_move);
});
quad.input.mouse_down_move = (function quad$input$mouse_down_move(el,on_move){
return quad.input.dispatcher(el,"mousemove",(function (evt){
var btn = (evt["buttons"]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),btn)){
return (on_move.cljs$core$IFn$_invoke$arity$1 ? on_move.cljs$core$IFn$_invoke$arity$1(evt) : on_move.call(null,evt));
} else {
return null;
}
}));
});

//# sourceMappingURL=quad.input.js.map
