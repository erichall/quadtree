goog.provide('quad.main');
goog.require('cljs.core');
goog.require('quad.tree');
goog.require('quad.input');
goog.require('quad.components');
goog.require('quad.canvas');
goog.require('quad.util');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('shodan.console');
goog.require('taoensso.tufte');
taoensso.tufte.add_basic_println_handler_BANG_(cljs.core.PersistentArrayMap.EMPTY);

cljs.core.enable_console_print_BANG_();
if((typeof quad !== 'undefined') && (typeof quad.main !== 'undefined') && (typeof quad.main.state_atom !== 'undefined')){
} else {
quad.main.state_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(quad.main.state_atom) == null)){
cljs.core.reset_BANG_(quad.main.state_atom,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"width","width",-384071477),(1024),new cljs.core.Keyword(null,"height","height",1025178622),(1024),new cljs.core.Keyword(null,"is-drawing-points","is-drawing-points",1554174399),false,new cljs.core.Keyword(null,"target-bounds","target-bounds",1590618585),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null),new cljs.core.Keyword(null,"tree","tree",-196312028),null], null));
} else {
}
quad.main.initial_tree = quad.tree.make_tree(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"capacity","capacity",72689734),(4),new cljs.core.Keyword(null,"name","name",1843675177),"start",new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quad.main.state_atom)) / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quad.main.state_atom)) / (2)),new cljs.core.Keyword(null,"width","width",-384071477),(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quad.main.state_atom)) / (2)),new cljs.core.Keyword(null,"height","height",1025178622),(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quad.main.state_atom)) / (2))], null)], null));
quad.main.raf_render = (function quad$main$raf_render(state){
return requestAnimationFrame((function (timestamp){
return (quad.main.render.cljs$core$IFn$_invoke$arity$1 ? quad.main.render.cljs$core$IFn$_invoke$arity$1(state) : quad.main.render.call(null,state));
}));
});
quad.main.raf_render_rect = (function quad$main$raf_render_rect(state){
return requestAnimationFrame((function (timestamp){
return (quad.main.render_rect.cljs$core$IFn$_invoke$arity$1 ? quad.main.render_rect.cljs$core$IFn$_invoke$arity$1(state) : quad.main.render_rect.call(null,state));
}));
});
quad.main.handle_event_BANG_ = (function quad$main$handle_event_BANG_(name,data){
var map__66525 = cljs.core.deref(quad.main.state_atom);
var map__66525__$1 = (((((!((map__66525 == null))))?(((((map__66525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66525):map__66525);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66525__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66525__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var pred__66527 = cljs.core._EQ_;
var expr__66528 = name;
if(cljs.core.truth_((function (){var G__66530 = new cljs.core.Keyword(null,"print-tree","print-tree",-2044075251);
var G__66531 = expr__66528;
return (pred__66527.cljs$core$IFn$_invoke$arity$2 ? pred__66527.cljs$core$IFn$_invoke$arity$2(G__66530,G__66531) : pred__66527.call(null,G__66530,G__66531));
})())){
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quad.main.state_atom)));
} else {
if(cljs.core.truth_((function (){var G__66532 = new cljs.core.Keyword(null,"random-cells","random-cells",-1343560544);
var G__66533 = expr__66528;
return (pred__66527.cljs$core$IFn$_invoke$arity$2 ? pred__66527.cljs$core$IFn$_invoke$arity$2(G__66532,G__66533) : pred__66527.call(null,G__66532,G__66533));
})())){
var cells = quad.tree.random_cells(data,width,height);
console.time("insert-random-cells");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(quad.main.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"cells","cells",-985166822),cells,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quad.main.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"tree","tree",-196312028),quad.tree.insert_cells(quad.main.initial_tree,cells))], 0));

console.timeEnd("insert-random-cells");

return quad.main.raf_render(cljs.core.deref(quad.main.state_atom));
} else {
if(cljs.core.truth_((function (){var G__66534 = new cljs.core.Keyword(null,"rect-drag","rect-drag",191566554);
var G__66535 = expr__66528;
return (pred__66527.cljs$core$IFn$_invoke$arity$2 ? pred__66527.cljs$core$IFn$_invoke$arity$2(G__66534,G__66535) : pred__66527.call(null,G__66534,G__66535));
})())){
return quad.main.raf_render_rect(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quad.main.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"resizable-rect-pos","resizable-rect-pos",-1597164174),data));
} else {
if(cljs.core.truth_((function (){var G__66536 = new cljs.core.Keyword(null,"mouse-click","mouse-click",1256722350);
var G__66537 = expr__66528;
return (pred__66527.cljs$core$IFn$_invoke$arity$2 ? pred__66527.cljs$core$IFn$_invoke$arity$2(G__66536,G__66537) : pred__66527.call(null,G__66536,G__66537));
})())){
var cell = quad.canvas.mouse_xy(data);
var G__66538 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(quad.main.state_atom,(function (p__66539){
var map__66540 = p__66539;
var map__66540__$1 = (((((!((map__66540 == null))))?(((((map__66540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66540):map__66540);
var state = map__66540__$1;
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66540__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66540__$1,new cljs.core.Keyword(null,"tree","tree",-196312028));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"tree","tree",-196312028),quad.tree.insert(tree,cell)),new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cells,cell));
}));
return (quad.main.render.cljs$core$IFn$_invoke$arity$1 ? quad.main.render.cljs$core$IFn$_invoke$arity$1(G__66538) : quad.main.render.call(null,G__66538));
} else {
if(cljs.core.truth_((function (){var G__66542 = new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567);
var G__66543 = expr__66528;
return (pred__66527.cljs$core$IFn$_invoke$arity$2 ? pred__66527.cljs$core$IFn$_invoke$arity$2(G__66542,G__66543) : pred__66527.call(null,G__66542,G__66543));
})())){
var map__66544 = quad.canvas.mouse_xy(data);
var map__66544__$1 = (((((!((map__66544 == null))))?(((((map__66544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66544):map__66544);
var cell = map__66544__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66544__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66544__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var random_cells = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var iter__4582__auto__ = (function quad$main$handle_event_BANG__$_iter__66546(s__66547){
return (new cljs.core.LazySeq(null,(function (){
var s__66547__$1 = s__66547;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__66547__$1);
if(temp__5735__auto__){
var s__66547__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66547__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__66547__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__66549 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__66548 = (0);
while(true){
if((i__66548 < size__4581__auto__)){
var _ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__66548);
cljs.core.chunk_append(b__66549,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),quad.util.random((x - (20)),(x + (20))),new cljs.core.Keyword(null,"y","y",-1757859776),quad.util.random((y - (20)),(y + (20)))], null));

var G__66661 = (i__66548 + (1));
i__66548 = G__66661;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66549),quad$main$handle_event_BANG__$_iter__66546(cljs.core.chunk_rest(s__66547__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66549),null);
}
} else {
var _ = cljs.core.first(s__66547__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),quad.util.random((x - (20)),(x + (20))),new cljs.core.Keyword(null,"y","y",-1757859776),quad.util.random((y - (20)),(y + (20)))], null),quad$main$handle_event_BANG__$_iter__66546(cljs.core.rest(s__66547__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})(),cell));
var G__66550 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(quad.main.state_atom,(function (p__66551){
var map__66552 = p__66551;
var map__66552__$1 = (((((!((map__66552 == null))))?(((((map__66552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66552):map__66552);
var state = map__66552__$1;
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66552__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66552__$1,new cljs.core.Keyword(null,"tree","tree",-196312028));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"tree","tree",-196312028),quad.tree.insert_cells(tree,random_cells)),new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cells,random_cells)),new cljs.core.Keyword(null,"is-drawing-points","is-drawing-points",1554174399),true);
}));
return (quad.main.render.cljs$core$IFn$_invoke$arity$1 ? quad.main.render.cljs$core$IFn$_invoke$arity$1(G__66550) : quad.main.render.call(null,G__66550));
} else {
if(cljs.core.truth_((function (){var G__66554 = new cljs.core.Keyword(null,"new-tree","new-tree",-1487310161);
var G__66555 = expr__66528;
return (pred__66527.cljs$core$IFn$_invoke$arity$2 ? pred__66527.cljs$core$IFn$_invoke$arity$2(G__66554,G__66555) : pred__66527.call(null,G__66554,G__66555));
})())){
var new_tree = new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(data);
var cells = new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(data);
var G__66556 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(quad.main.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"tree","tree",-196312028),new_tree,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quad.main.state_atom)),cells)], 0));
return (quad.main.render.cljs$core$IFn$_invoke$arity$1 ? quad.main.render.cljs$core$IFn$_invoke$arity$1(G__66556) : quad.main.render.call(null,G__66556));
} else {
if(cljs.core.truth_((function (){var G__66557 = new cljs.core.Keyword(null,"cells-in-rect","cells-in-rect",-1670186043);
var G__66558 = expr__66528;
return (pred__66527.cljs$core$IFn$_invoke$arity$2 ? pred__66527.cljs$core$IFn$_invoke$arity$2(G__66557,G__66558) : pred__66527.call(null,G__66557,G__66558));
})())){
var in_rect = new cljs.core.Keyword(null,"cells-in-rect","cells-in-rect",-1670186043).cljs$core$IFn$_invoke$arity$1(data);
var G__66559 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quad.main.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"cells-in-rect","cells-in-rect",-1670186043),in_rect);
return (quad.main.render.cljs$core$IFn$_invoke$arity$1 ? quad.main.render.cljs$core$IFn$_invoke$arity$1(G__66559) : quad.main.render.call(null,G__66559));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__66528)].join('')));
}
}
}
}
}
}
}
});
quad.main.render = (function quad$main$render(p__66560){
var map__66561 = p__66560;
var map__66561__$1 = (((((!((map__66561 == null))))?(((((map__66561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66561):map__66561);
var state = map__66561__$1;
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66561__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66561__$1,new cljs.core.Keyword(null,"tree","tree",-196312028));
var cells_in_rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66561__$1,new cljs.core.Keyword(null,"cells-in-rect","cells-in-rect",-1670186043));
var seq__66563_66662 = cljs.core.seq(cells);
var chunk__66564_66663 = null;
var count__66565_66664 = (0);
var i__66566_66665 = (0);
while(true){
if((i__66566_66665 < count__66565_66664)){
var map__66571_66666 = chunk__66564_66663.cljs$core$IIndexed$_nth$arity$2(null,i__66566_66665);
var map__66571_66667__$1 = (((((!((map__66571_66666 == null))))?(((((map__66571_66666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66571_66666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66571_66666):map__66571_66666);
var x_66668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66571_66667__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_66669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66571_66667__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
quad.canvas.fill_rect(x_66668,y_66669,(3),(3),"pink");


var G__66670 = seq__66563_66662;
var G__66671 = chunk__66564_66663;
var G__66672 = count__66565_66664;
var G__66673 = (i__66566_66665 + (1));
seq__66563_66662 = G__66670;
chunk__66564_66663 = G__66671;
count__66565_66664 = G__66672;
i__66566_66665 = G__66673;
continue;
} else {
var temp__5735__auto___66674 = cljs.core.seq(seq__66563_66662);
if(temp__5735__auto___66674){
var seq__66563_66675__$1 = temp__5735__auto___66674;
if(cljs.core.chunked_seq_QMARK_(seq__66563_66675__$1)){
var c__4609__auto___66676 = cljs.core.chunk_first(seq__66563_66675__$1);
var G__66677 = cljs.core.chunk_rest(seq__66563_66675__$1);
var G__66678 = c__4609__auto___66676;
var G__66679 = cljs.core.count(c__4609__auto___66676);
var G__66680 = (0);
seq__66563_66662 = G__66677;
chunk__66564_66663 = G__66678;
count__66565_66664 = G__66679;
i__66566_66665 = G__66680;
continue;
} else {
var map__66573_66681 = cljs.core.first(seq__66563_66675__$1);
var map__66573_66682__$1 = (((((!((map__66573_66681 == null))))?(((((map__66573_66681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66573_66681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66573_66681):map__66573_66681);
var x_66683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66573_66682__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_66684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66573_66682__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
quad.canvas.fill_rect(x_66683,y_66684,(3),(3),"pink");


var G__66685 = cljs.core.next(seq__66563_66675__$1);
var G__66686 = null;
var G__66687 = (0);
var G__66688 = (0);
seq__66563_66662 = G__66685;
chunk__66564_66663 = G__66686;
count__66565_66664 = G__66687;
i__66566_66665 = G__66688;
continue;
}
} else {
}
}
break;
}

var seq__66575_66689 = cljs.core.seq(cells_in_rect);
var chunk__66576_66690 = null;
var count__66577_66691 = (0);
var i__66578_66692 = (0);
while(true){
if((i__66578_66692 < count__66577_66691)){
var map__66583_66693 = chunk__66576_66690.cljs$core$IIndexed$_nth$arity$2(null,i__66578_66692);
var map__66583_66694__$1 = (((((!((map__66583_66693 == null))))?(((((map__66583_66693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66583_66693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66583_66693):map__66583_66693);
var x_66695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66583_66694__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_66696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66583_66694__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
quad.canvas.fill_rect(x_66695,y_66696,(3),(3),"red");


var G__66697 = seq__66575_66689;
var G__66698 = chunk__66576_66690;
var G__66699 = count__66577_66691;
var G__66700 = (i__66578_66692 + (1));
seq__66575_66689 = G__66697;
chunk__66576_66690 = G__66698;
count__66577_66691 = G__66699;
i__66578_66692 = G__66700;
continue;
} else {
var temp__5735__auto___66701 = cljs.core.seq(seq__66575_66689);
if(temp__5735__auto___66701){
var seq__66575_66702__$1 = temp__5735__auto___66701;
if(cljs.core.chunked_seq_QMARK_(seq__66575_66702__$1)){
var c__4609__auto___66703 = cljs.core.chunk_first(seq__66575_66702__$1);
var G__66704 = cljs.core.chunk_rest(seq__66575_66702__$1);
var G__66705 = c__4609__auto___66703;
var G__66706 = cljs.core.count(c__4609__auto___66703);
var G__66707 = (0);
seq__66575_66689 = G__66704;
chunk__66576_66690 = G__66705;
count__66577_66691 = G__66706;
i__66578_66692 = G__66707;
continue;
} else {
var map__66585_66708 = cljs.core.first(seq__66575_66702__$1);
var map__66585_66709__$1 = (((((!((map__66585_66708 == null))))?(((((map__66585_66708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66585_66708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66585_66708):map__66585_66708);
var x_66710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66585_66709__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_66711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66585_66709__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
quad.canvas.fill_rect(x_66710,y_66711,(3),(3),"red");


var G__66712 = cljs.core.next(seq__66575_66702__$1);
var G__66713 = null;
var G__66714 = (0);
var G__66715 = (0);
seq__66575_66689 = G__66712;
chunk__66576_66690 = G__66713;
count__66577_66691 = G__66714;
i__66578_66692 = G__66715;
continue;
}
} else {
}
}
break;
}

quad.canvas.stroke_style("yellow");

var seq__66587_66716 = cljs.core.seq(quad.tree.tree__GT_bounds.cljs$core$IFn$_invoke$arity$1(tree));
var chunk__66588_66717 = null;
var count__66589_66718 = (0);
var i__66590_66719 = (0);
while(true){
if((i__66590_66719 < count__66589_66718)){
var map__66595_66720 = chunk__66588_66717.cljs$core$IIndexed$_nth$arity$2(null,i__66590_66719);
var map__66595_66721__$1 = (((((!((map__66595_66720 == null))))?(((((map__66595_66720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66595_66720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66595_66720):map__66595_66720);
var x_66722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66595_66721__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_66723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66595_66721__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width_66724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66595_66721__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_66725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66595_66721__$1,new cljs.core.Keyword(null,"height","height",1025178622));
quad.canvas.rect.cljs$core$IFn$_invoke$arity$variadic((x_66722 - width_66724),(y_66723 - height_66725),((2) * width_66724),((2) * height_66725),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"batch?","batch?",-624482293),true], null)], 0));


var G__66726 = seq__66587_66716;
var G__66727 = chunk__66588_66717;
var G__66728 = count__66589_66718;
var G__66729 = (i__66590_66719 + (1));
seq__66587_66716 = G__66726;
chunk__66588_66717 = G__66727;
count__66589_66718 = G__66728;
i__66590_66719 = G__66729;
continue;
} else {
var temp__5735__auto___66730 = cljs.core.seq(seq__66587_66716);
if(temp__5735__auto___66730){
var seq__66587_66731__$1 = temp__5735__auto___66730;
if(cljs.core.chunked_seq_QMARK_(seq__66587_66731__$1)){
var c__4609__auto___66732 = cljs.core.chunk_first(seq__66587_66731__$1);
var G__66733 = cljs.core.chunk_rest(seq__66587_66731__$1);
var G__66734 = c__4609__auto___66732;
var G__66735 = cljs.core.count(c__4609__auto___66732);
var G__66736 = (0);
seq__66587_66716 = G__66733;
chunk__66588_66717 = G__66734;
count__66589_66718 = G__66735;
i__66590_66719 = G__66736;
continue;
} else {
var map__66597_66737 = cljs.core.first(seq__66587_66731__$1);
var map__66597_66738__$1 = (((((!((map__66597_66737 == null))))?(((((map__66597_66737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66597_66737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66597_66737):map__66597_66737);
var x_66739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66597_66738__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_66740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66597_66738__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width_66741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66597_66738__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_66742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66597_66738__$1,new cljs.core.Keyword(null,"height","height",1025178622));
quad.canvas.rect.cljs$core$IFn$_invoke$arity$variadic((x_66739 - width_66741),(y_66740 - height_66742),((2) * width_66741),((2) * height_66742),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"batch?","batch?",-624482293),true], null)], 0));


var G__66743 = cljs.core.next(seq__66587_66731__$1);
var G__66744 = null;
var G__66745 = (0);
var G__66746 = (0);
seq__66587_66716 = G__66743;
chunk__66588_66717 = G__66744;
count__66589_66718 = G__66745;
i__66590_66719 = G__66746;
continue;
}
} else {
}
}
break;
}

return quad.canvas.stroke();
});
quad.main.dispatch_worker = (function quad$main$dispatch_worker(data,trigger_event){
var worker = (new Worker("/js/worker.js"));
worker.addEventListener("message",(function (e){
var map__66599 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((e["data"]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__66599__$1 = (((((!((map__66599 == null))))?(((((map__66599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66599):map__66599);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66599__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66599__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var G__66601 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name);
var G__66602 = data__$1;
return (trigger_event.cljs$core$IFn$_invoke$arity$2 ? trigger_event.cljs$core$IFn$_invoke$arity$2(G__66601,G__66602) : trigger_event.call(null,G__66601,G__66602));
}));

return worker.postMessage(cljs.core.clj__GT_js(data));
});
quad.main.on_rect_move = (function quad$main$on_rect_move(p__66603){
var map__66604 = p__66603;
var map__66604__$1 = (((((!((map__66604 == null))))?(((((map__66604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66604):map__66604);
var bounds = map__66604__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66604__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66604__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66604__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66604__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return quad.main.raf_render_rect(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quad.main.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"target-bounds","target-bounds",1590618585),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x + (width / (2))),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (height / (2))),new cljs.core.Keyword(null,"width","width",-384071477),(width / (2)),new cljs.core.Keyword(null,"height","height",1025178622),(height / (2))], null)));
});
quad.main.on_rect_resize = (function quad$main$on_rect_resize(bounds){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quad.main.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"target-bounds","target-bounds",1590618585),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"event","event",301435442)));
});
quad.main.render_rect = (function quad$main$render_rect(p__66606){
var map__66607 = p__66606;
var map__66607__$1 = (((((!((map__66607 == null))))?(((((map__66607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66607):map__66607);
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66607__$1,new cljs.core.Keyword(null,"tree","tree",-196312028));
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66607__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var target_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66607__$1,new cljs.core.Keyword(null,"target-bounds","target-bounds",1590618585));
var cells_in_bounds = quad.tree.query.cljs$core$IFn$_invoke$arity$2(tree,target_bounds);
var seq__66609_66747 = cljs.core.seq(cells);
var chunk__66610_66748 = null;
var count__66611_66749 = (0);
var i__66612_66750 = (0);
while(true){
if((i__66612_66750 < count__66611_66749)){
var map__66617_66751 = chunk__66610_66748.cljs$core$IIndexed$_nth$arity$2(null,i__66612_66750);
var map__66617_66752__$1 = (((((!((map__66617_66751 == null))))?(((((map__66617_66751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66617_66751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66617_66751):map__66617_66751);
var x_66753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66617_66752__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_66754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66617_66752__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
quad.canvas.fill_rect(x_66753,y_66754,(3),(3),"pink");


var G__66755 = seq__66609_66747;
var G__66756 = chunk__66610_66748;
var G__66757 = count__66611_66749;
var G__66758 = (i__66612_66750 + (1));
seq__66609_66747 = G__66755;
chunk__66610_66748 = G__66756;
count__66611_66749 = G__66757;
i__66612_66750 = G__66758;
continue;
} else {
var temp__5735__auto___66759 = cljs.core.seq(seq__66609_66747);
if(temp__5735__auto___66759){
var seq__66609_66760__$1 = temp__5735__auto___66759;
if(cljs.core.chunked_seq_QMARK_(seq__66609_66760__$1)){
var c__4609__auto___66761 = cljs.core.chunk_first(seq__66609_66760__$1);
var G__66762 = cljs.core.chunk_rest(seq__66609_66760__$1);
var G__66763 = c__4609__auto___66761;
var G__66764 = cljs.core.count(c__4609__auto___66761);
var G__66765 = (0);
seq__66609_66747 = G__66762;
chunk__66610_66748 = G__66763;
count__66611_66749 = G__66764;
i__66612_66750 = G__66765;
continue;
} else {
var map__66619_66766 = cljs.core.first(seq__66609_66760__$1);
var map__66619_66767__$1 = (((((!((map__66619_66766 == null))))?(((((map__66619_66766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66619_66766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66619_66766):map__66619_66766);
var x_66768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66619_66767__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_66769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66619_66767__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
quad.canvas.fill_rect(x_66768,y_66769,(3),(3),"pink");


var G__66770 = cljs.core.next(seq__66609_66760__$1);
var G__66771 = null;
var G__66772 = (0);
var G__66773 = (0);
seq__66609_66747 = G__66770;
chunk__66610_66748 = G__66771;
count__66611_66749 = G__66772;
i__66612_66750 = G__66773;
continue;
}
} else {
}
}
break;
}

var seq__66621 = cljs.core.seq(cells_in_bounds);
var chunk__66622 = null;
var count__66623 = (0);
var i__66624 = (0);
while(true){
if((i__66624 < count__66623)){
var map__66629 = chunk__66622.cljs$core$IIndexed$_nth$arity$2(null,i__66624);
var map__66629__$1 = (((((!((map__66629 == null))))?(((((map__66629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66629):map__66629);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66629__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66629__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
quad.canvas.fill_rect(x,y,(3),(3),"red");


var G__66774 = seq__66621;
var G__66775 = chunk__66622;
var G__66776 = count__66623;
var G__66777 = (i__66624 + (1));
seq__66621 = G__66774;
chunk__66622 = G__66775;
count__66623 = G__66776;
i__66624 = G__66777;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66621);
if(temp__5735__auto__){
var seq__66621__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66621__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__66621__$1);
var G__66778 = cljs.core.chunk_rest(seq__66621__$1);
var G__66779 = c__4609__auto__;
var G__66780 = cljs.core.count(c__4609__auto__);
var G__66781 = (0);
seq__66621 = G__66778;
chunk__66622 = G__66779;
count__66623 = G__66780;
i__66624 = G__66781;
continue;
} else {
var map__66631 = cljs.core.first(seq__66621__$1);
var map__66631__$1 = (((((!((map__66631 == null))))?(((((map__66631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66631):map__66631);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66631__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66631__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
quad.canvas.fill_rect(x,y,(3),(3),"red");


var G__66782 = cljs.core.next(seq__66621__$1);
var G__66783 = null;
var G__66784 = (0);
var G__66785 = (0);
seq__66621 = G__66782;
chunk__66622 = G__66783;
count__66623 = G__66784;
i__66624 = G__66785;
continue;
}
} else {
return null;
}
}
break;
}
});
quad.main.mouse_down_QMARK_ = (function quad$main$mouse_down_QMARK_(js_evt){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(js_evt["buttons"]));
});
quad.main.mouse_handler_maker = (function quad$main$mouse_handler_maker(rect_mouse_handler){
return (function (js_evt){
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((js_evt["target"]["id"]));
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(js_evt.type);
var pred__66633 = cljs.core._EQ_;
var expr__66634 = id;
if(cljs.core.truth_((function (){var G__66636 = new cljs.core.Keyword(null,"overlay","overlay",-139131598);
var G__66637 = expr__66634;
return (pred__66633.cljs$core$IFn$_invoke$arity$2 ? pred__66633.cljs$core$IFn$_invoke$arity$2(G__66636,G__66637) : pred__66633.call(null,G__66636,G__66637));
})())){
if(((cljs.core.not(quad.components.is_resizing_rect_QMARK_())) && (cljs.core.not(quad.components.is_moving_rect_QMARK_())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734))) && (quad.main.mouse_down_QMARK_(js_evt)))){
return quad.main.handle_event_BANG_(new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),js_evt);
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__66638 = new cljs.core.Keyword(null,"movable-rect","movable-rect",2107786009);
var G__66639 = expr__66634;
return (pred__66633.cljs$core$IFn$_invoke$arity$2 ? pred__66633.cljs$core$IFn$_invoke$arity$2(G__66638,G__66639) : pred__66633.call(null,G__66638,G__66639));
})())){
return (rect_mouse_handler.cljs$core$IFn$_invoke$arity$1 ? rect_mouse_handler.cljs$core$IFn$_invoke$arity$1(js_evt) : rect_mouse_handler.call(null,js_evt));
} else {
if(cljs.core.truth_((function (){var G__66640 = new cljs.core.Keyword(null,"top","top",-1856271961);
var G__66641 = expr__66634;
return (pred__66633.cljs$core$IFn$_invoke$arity$2 ? pred__66633.cljs$core$IFn$_invoke$arity$2(G__66640,G__66641) : pred__66633.call(null,G__66640,G__66641));
})())){
return (rect_mouse_handler.cljs$core$IFn$_invoke$arity$1 ? rect_mouse_handler.cljs$core$IFn$_invoke$arity$1(js_evt) : rect_mouse_handler.call(null,js_evt));
} else {
if(cljs.core.truth_((function (){var G__66642 = new cljs.core.Keyword(null,"left","left",-399115937);
var G__66643 = expr__66634;
return (pred__66633.cljs$core$IFn$_invoke$arity$2 ? pred__66633.cljs$core$IFn$_invoke$arity$2(G__66642,G__66643) : pred__66633.call(null,G__66642,G__66643));
})())){
return (rect_mouse_handler.cljs$core$IFn$_invoke$arity$1 ? rect_mouse_handler.cljs$core$IFn$_invoke$arity$1(js_evt) : rect_mouse_handler.call(null,js_evt));
} else {
if(cljs.core.truth_((function (){var G__66644 = new cljs.core.Keyword(null,"bottom","bottom",-1550509018);
var G__66645 = expr__66634;
return (pred__66633.cljs$core$IFn$_invoke$arity$2 ? pred__66633.cljs$core$IFn$_invoke$arity$2(G__66644,G__66645) : pred__66633.call(null,G__66644,G__66645));
})())){
return (rect_mouse_handler.cljs$core$IFn$_invoke$arity$1 ? rect_mouse_handler.cljs$core$IFn$_invoke$arity$1(js_evt) : rect_mouse_handler.call(null,js_evt));
} else {
if(cljs.core.truth_((function (){var G__66646 = new cljs.core.Keyword(null,"right","right",-452581833);
var G__66647 = expr__66634;
return (pred__66633.cljs$core$IFn$_invoke$arity$2 ? pred__66633.cljs$core$IFn$_invoke$arity$2(G__66646,G__66647) : pred__66633.call(null,G__66646,G__66647));
})())){
return (rect_mouse_handler.cljs$core$IFn$_invoke$arity$1 ? rect_mouse_handler.cljs$core$IFn$_invoke$arity$1(js_evt) : rect_mouse_handler.call(null,js_evt));
} else {
if(cljs.core.truth_((function (){var G__66648 = new cljs.core.Keyword(null,"top-left","top-left",-1396159636);
var G__66649 = expr__66634;
return (pred__66633.cljs$core$IFn$_invoke$arity$2 ? pred__66633.cljs$core$IFn$_invoke$arity$2(G__66648,G__66649) : pred__66633.call(null,G__66648,G__66649));
})())){
return (rect_mouse_handler.cljs$core$IFn$_invoke$arity$1 ? rect_mouse_handler.cljs$core$IFn$_invoke$arity$1(js_evt) : rect_mouse_handler.call(null,js_evt));
} else {
if(cljs.core.truth_((function (){var G__66650 = new cljs.core.Keyword(null,"top-right","top-right",284698505);
var G__66651 = expr__66634;
return (pred__66633.cljs$core$IFn$_invoke$arity$2 ? pred__66633.cljs$core$IFn$_invoke$arity$2(G__66650,G__66651) : pred__66633.call(null,G__66650,G__66651));
})())){
return (rect_mouse_handler.cljs$core$IFn$_invoke$arity$1 ? rect_mouse_handler.cljs$core$IFn$_invoke$arity$1(js_evt) : rect_mouse_handler.call(null,js_evt));
} else {
if(cljs.core.truth_((function (){var G__66652 = new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488);
var G__66653 = expr__66634;
return (pred__66633.cljs$core$IFn$_invoke$arity$2 ? pred__66633.cljs$core$IFn$_invoke$arity$2(G__66652,G__66653) : pred__66633.call(null,G__66652,G__66653));
})())){
return (rect_mouse_handler.cljs$core$IFn$_invoke$arity$1 ? rect_mouse_handler.cljs$core$IFn$_invoke$arity$1(js_evt) : rect_mouse_handler.call(null,js_evt));
} else {
if(cljs.core.truth_((function (){var G__66654 = new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646);
var G__66655 = expr__66634;
return (pred__66633.cljs$core$IFn$_invoke$arity$2 ? pred__66633.cljs$core$IFn$_invoke$arity$2(G__66654,G__66655) : pred__66633.call(null,G__66654,G__66655));
})())){
return (rect_mouse_handler.cljs$core$IFn$_invoke$arity$1 ? rect_mouse_handler.cljs$core$IFn$_invoke$arity$1(js_evt) : rect_mouse_handler.call(null,js_evt));
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
});
quad.main.init_BANG_ = (function quad$main$init_BANG_(){
var map__66656 = cljs.core.deref(quad.main.state_atom);
var map__66656__$1 = (((((!((map__66656 == null))))?(((((map__66656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66656):map__66656);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66656__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66656__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var rect_thing = quad.components.rect_maker(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"movable-area-width","movable-area-width",-823404271),width,new cljs.core.Keyword(null,"movable-area-height","movable-area-height",-1205421835),height,new cljs.core.Keyword(null,"on-move","on-move",-1779179710),quad.main.on_rect_move,new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),quad.main.on_rect_resize], null));
var mouse_handler = quad.main.mouse_handler_maker(new cljs.core.Keyword(null,"mouse-handler","mouse-handler",-1958953119).cljs$core$IFn$_invoke$arity$1(rect_thing));
quad.canvas.create_canvas(width,height);

quad.canvas.resize_canvas();

quad.main.handle_event_BANG_(new cljs.core.Keyword(null,"random-cells","random-cells",-1343560544),(100));

quad.components.add_mouse_window_handlers_BANG_(mouse_handler);

quad.main.render(cljs.core.deref(quad.main.state_atom));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(rect_thing)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quad.components.controls], null)], null),document.getElementById("app"));
});
quad.main.reload_BANG_ = (function quad$main$reload_BANG_(){
return quad.main.render(cljs.core.deref(quad.main.state_atom));
});
quad.main.profile_insert_cells = (function quad$main$profile_insert_cells(n){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Profile insert-cells , n = ",n], 0));

var vec__66658 = ((taoensso.tufte.may_profile_QMARK_.cljs$core$IFn$_invoke$arity$2((5),"quad.main"))?(function (){var pd__29024__auto__ = taoensso.tufte.impl.new_pdata_local((800000));
try{taoensso.tufte.impl.pdata_proxy_push(pd__29024__auto__);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var n__4666__auto__ = (15);
var _ = (0);
while(true){
if((_ < n__4666__auto__)){
var __pd_dynamic_66786 = taoensso.tufte.impl._STAR_pdata_STAR_;
var temp__5733__auto___66787 = (function (){var or__4185__auto__ = __pd_dynamic_66786;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return taoensso.tufte.impl.pdata_proxy_get();
}
})();
if(cljs.core.truth_(temp__5733__auto___66787)){
var __pd_66788 = temp__5733__auto___66787;
var __t0_66789 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
var __result_66790 = null;
var __t1_66791 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
taoensso.tufte.impl.capture_time_BANG_(__pd_66788,quad.tree.insert_cells(quad.main.initial_tree,quad.tree.make_cells(n)),(__t1_66791 - __t0_66789));

} else {
}

var G__66792 = (_ + (1));
_ = G__66792;
continue;
} else {
return null;
}
break;
}
})()),cljs.core.deref(pd__29024__auto__)], null);
}finally {taoensso.tufte.impl.pdata_proxy_pop();
}})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var n__4666__auto__ = (15);
var _ = (0);
while(true){
if((_ < n__4666__auto__)){
var __pd_dynamic_66793 = taoensso.tufte.impl._STAR_pdata_STAR_;
var temp__5733__auto___66794 = (function (){var or__4185__auto__ = __pd_dynamic_66793;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return taoensso.tufte.impl.pdata_proxy_get();
}
})();
if(cljs.core.truth_(temp__5733__auto___66794)){
var __pd_66795 = temp__5733__auto___66794;
var __t0_66796 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
var __result_66797 = null;
var __t1_66798 = (taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0 ? taoensso.encore.now_nano.cljs$core$IFn$_invoke$arity$0() : taoensso.encore.now_nano.call(null));
taoensso.tufte.impl.capture_time_BANG_(__pd_66795,quad.tree.insert_cells(quad.main.initial_tree,quad.tree.make_cells(n)),(__t1_66798 - __t0_66796));

} else {
}

var G__66799 = (_ + (1));
_ = G__66799;
continue;
} else {
return null;
}
break;
}
})())], null));
var result__29030__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66658,(0),null);
var pstats__29031__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66658,(1),null);
if(cljs.core.truth_(pstats__29031__auto__)){
taoensso.tufte.impl.handle_BANG_((new taoensso.tufte.HandlerVal("quad.main",(5),null,null,pstats__29031__auto__,(new cljs.core.Delay((function (){
return taoensso.tufte.format_pstats.cljs$core$IFn$_invoke$arity$1(pstats__29031__auto__);
}),null)),"NO_SOURCE_PATH",221,null,null,null)));
} else {
}

return result__29030__auto__;
});

//# sourceMappingURL=quad.main.js.map
