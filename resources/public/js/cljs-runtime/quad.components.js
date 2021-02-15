goog.provide('quad.components');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('quad.util');
goog.require('cljs.core.async');
goog.require('quad.resizable_rect');
quad.components.show_rects = (function quad$components$show_rects(var_args){
var G__65621 = arguments.length;
switch (G__65621) {
case 2:
return quad.components.show_rects.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return quad.components.show_rects.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quad.components.show_rects.cljs$core$IFn$_invoke$arity$2 = (function (p__65622,id){
var map__65623 = p__65622;
var map__65623__$1 = (((((!((map__65623 == null))))?(((((map__65623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65623):map__65623);
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65623__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65623__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var nw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65623__$1,new cljs.core.Keyword(null,"nw","nw",487743706));
var ne = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65623__$1,new cljs.core.Keyword(null,"ne","ne",-1792628743));
var se = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65623__$1,new cljs.core.Keyword(null,"se","se",-1419643721));
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65623__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65623__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if((bounds == null)){
return null;
} else {
var map__65635 = bounds;
var map__65635__$1 = (((((!((map__65635 == null))))?(((((map__65635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65635):map__65635);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65635__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65635__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65635__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65635__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(x - width),new cljs.core.Keyword(null,"y","y",-1757859776),(y - height),new cljs.core.Keyword(null,"width","width",-384071477),((2) * width),new cljs.core.Keyword(null,"height","height",1025178622),((2) * height),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.8], null),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"gray",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null)], null)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__65682){
var map__65688 = p__65682;
var map__65688__$1 = (((((!((map__65688 == null))))?(((((map__65688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65688):map__65688);
var x__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65688__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65688__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),x__$1,new cljs.core.Keyword(null,"cy","cy",755331060),y__$1,new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.4], null)], null)], null)], null);
}),cells),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quad.components.show_rects.cljs$core$IFn$_invoke$arity$2(nw,(1)),quad.components.show_rects.cljs$core$IFn$_invoke$arity$2(ne,(2)),quad.components.show_rects.cljs$core$IFn$_invoke$arity$2(se,(3)),quad.components.show_rects.cljs$core$IFn$_invoke$arity$2(sw,(4))], 0));
}
}));

(quad.components.show_rects.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return quad.components.show_rects.cljs$core$IFn$_invoke$arity$2(tree,(0));
}));

(quad.components.show_rects.cljs$lang$maxFixedArity = 2);

quad.components.render_bounds = (function quad$components$render_bounds(bounds){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__65743){
var map__65744 = p__65743;
var map__65744__$1 = (((((!((map__65744 == null))))?(((((map__65744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65744):map__65744);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65744__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65744__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65744__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65744__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),(x - width),new cljs.core.Keyword(null,"y","y",-1757859776),(y - height),new cljs.core.Keyword(null,"width","width",-384071477),((2) * width),new cljs.core.Keyword(null,"height","height",1025178622),((2) * height),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.8], null),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"gray",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null)], null);
}),bounds);
});
quad.components.render_cells = (function quad$components$render_cells(p__65793){
var map__65796 = p__65793;
var map__65796__$1 = (((((!((map__65796 == null))))?(((((map__65796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65796):map__65796);
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65796__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65796__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65796__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__65800){
var map__65801 = p__65800;
var map__65801__$1 = (((((!((map__65801 == null))))?(((((map__65801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65801):map__65801);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65801__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65801__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.4], null)], null)], null)], null);
}),cells);
});
quad.components.show = (function quad$components$show(p__65808,bounds){
var map__65810 = p__65808;
var map__65810__$1 = (((((!((map__65810 == null))))?(((((map__65810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65810):map__65810);
var state = map__65810__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65810__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65810__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"width","width",-384071477),width], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"id","id",-1388402092),"svg-world",new cljs.core.Keyword(null,"viewport","viewport",443342715),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px dashed green",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null)], null),quad.components.render_bounds(bounds),quad.components.render_cells(state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null),new cljs.core.Keyword(null,"id","id",-1388402092),"svg-world-clicker"], null)], null)], null)], null);
});
quad.components.action_bar = (function quad$components$action_bar(p__65818){
var map__65819 = p__65818;
var map__65819__$1 = (((((!((map__65819 == null))))?(((((map__65819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65819):map__65819);
var trigger_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65819__$1,new cljs.core.Keyword(null,"trigger-event","trigger-event",772166906));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(20),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__65823 = new cljs.core.Keyword(null,"print-tree","print-tree",-2044075251);
return (trigger_event.cljs$core$IFn$_invoke$arity$1 ? trigger_event.cljs$core$IFn$_invoke$arity$1(G__65823) : trigger_event.call(null,G__65823));
})], null),"Tree"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__65825 = new cljs.core.Keyword(null,"random-cells","random-cells",-1343560544);
var G__65826 = (10);
return (trigger_event.cljs$core$IFn$_invoke$arity$2 ? trigger_event.cljs$core$IFn$_invoke$arity$2(G__65825,G__65826) : trigger_event.call(null,G__65825,G__65826));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null)], null),"10"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__65827 = new cljs.core.Keyword(null,"random-cells","random-cells",-1343560544);
var G__65828 = (100);
return (trigger_event.cljs$core$IFn$_invoke$arity$2 ? trigger_event.cljs$core$IFn$_invoke$arity$2(G__65827,G__65828) : trigger_event.call(null,G__65827,G__65828));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null)], null),"100"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__65831 = new cljs.core.Keyword(null,"random-cells","random-cells",-1343560544);
var G__65832 = (1000);
return (trigger_event.cljs$core$IFn$_invoke$arity$2 ? trigger_event.cljs$core$IFn$_invoke$arity$2(G__65831,G__65832) : trigger_event.call(null,G__65831,G__65832));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null)], null),"1000"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__65833 = new cljs.core.Keyword(null,"random-cells","random-cells",-1343560544);
var G__65834 = (10000);
return (trigger_event.cljs$core$IFn$_invoke$arity$2 ? trigger_event.cljs$core$IFn$_invoke$arity$2(G__65833,G__65834) : trigger_event.call(null,G__65833,G__65834));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null)], null),"10000"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__65836 = new cljs.core.Keyword(null,"random-cells","random-cells",-1343560544);
var G__65837 = (100000);
return (trigger_event.cljs$core$IFn$_invoke$arity$2 ? trigger_event.cljs$core$IFn$_invoke$arity$2(G__65836,G__65837) : trigger_event.call(null,G__65836,G__65837));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null)], null),"100000"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__65839 = new cljs.core.Keyword(null,"random-cells","random-cells",-1343560544);
var G__65840 = (1000000);
return (trigger_event.cljs$core$IFn$_invoke$arity$2 ? trigger_event.cljs$core$IFn$_invoke$arity$2(G__65839,G__65840) : trigger_event.call(null,G__65839,G__65840));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null)], null),"1000000"], null)], null);
});
quad.components.rect_maker = (function quad$components$rect_maker(props){
return quad.resizable_rect.rect_maker(props);
});
quad.components.is_resizing_rect_QMARK_ = (function quad$components$is_resizing_rect_QMARK_(){
return quad.resizable_rect.is_resizing_QMARK_();
});
quad.components.is_moving_rect_QMARK_ = (function quad$components$is_moving_rect_QMARK_(){
return quad.resizable_rect.is_moving_QMARK_();
});
quad.components.app = (function quad$components$app(p__65847,bounds,trigger_event){
var map__65849 = p__65847;
var map__65849__$1 = (((((!((map__65849 == null))))?(((((map__65849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65849):map__65849);
var state = map__65849__$1;
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65849__$1,new cljs.core.Keyword(null,"tree","tree",-196312028));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65849__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65849__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"width","width",-384071477),width], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quad.components.show,state,bounds], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quad.resizable_rect.rect_maker,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"movable-area-width","movable-area-width",-823404271),width,new cljs.core.Keyword(null,"movable-area-height","movable-area-height",-1205421835),height,new cljs.core.Keyword(null,"on-move","on-move",-1779179710),(function (p__65853){
var map__65854 = p__65853;
var map__65854__$1 = (((((!((map__65854 == null))))?(((((map__65854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65854):map__65854);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65854__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65854__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65854__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65854__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return null;
}),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),(function (p__65859){
var map__65860 = p__65859;
var map__65860__$1 = (((((!((map__65860 == null))))?(((((map__65860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65860):map__65860);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65860__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65860__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65860__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65860__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return null;
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quad.components.action_bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"trigger-event","trigger-event",772166906),trigger_event], null)], null)], null);
});
quad.components.add_mouse_window_handlers_BANG_ = (function quad$components$add_mouse_window_handlers_BANG_(handler){
var chans = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quad.util.listen.cljs$core$IFn$_invoke$arity$2(window,"mousedown"),quad.util.listen.cljs$core$IFn$_invoke$arity$2(window,"mouseup"),quad.util.listen.cljs$core$IFn$_invoke$arity$2(window,"mousemove")], null));
var c__25764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25765__auto__ = (function (){var switch__25637__auto__ = (function (state_65877){
var state_val_65879 = (state_65877[(1)]);
if((state_val_65879 === (1))){
var state_65877__$1 = state_65877;
var statearr_65881_65948 = state_65877__$1;
(statearr_65881_65948[(2)] = null);

(statearr_65881_65948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65879 === (2))){
var state_65877__$1 = state_65877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65877__$1,(4),chans);
} else {
if((state_val_65879 === (3))){
var inst_65875 = (state_65877[(2)]);
var state_65877__$1 = state_65877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65877__$1,inst_65875);
} else {
if((state_val_65879 === (4))){
var inst_65871 = (state_65877[(2)]);
var inst_65872 = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(inst_65871) : handler.call(null,inst_65871));
var state_65877__$1 = (function (){var statearr_65882 = state_65877;
(statearr_65882[(7)] = inst_65872);

return statearr_65882;
})();
var statearr_65883_65949 = state_65877__$1;
(statearr_65883_65949[(2)] = null);

(statearr_65883_65949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var quad$components$add_mouse_window_handlers_BANG__$_state_machine__25638__auto__ = null;
var quad$components$add_mouse_window_handlers_BANG__$_state_machine__25638__auto____0 = (function (){
var statearr_65885 = [null,null,null,null,null,null,null,null];
(statearr_65885[(0)] = quad$components$add_mouse_window_handlers_BANG__$_state_machine__25638__auto__);

(statearr_65885[(1)] = (1));

return statearr_65885;
});
var quad$components$add_mouse_window_handlers_BANG__$_state_machine__25638__auto____1 = (function (state_65877){
while(true){
var ret_value__25639__auto__ = (function (){try{while(true){
var result__25640__auto__ = switch__25637__auto__(state_65877);
if(cljs.core.keyword_identical_QMARK_(result__25640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25640__auto__;
}
break;
}
}catch (e65888){if((e65888 instanceof Object)){
var ex__25641__auto__ = e65888;
var statearr_65889_65954 = state_65877;
(statearr_65889_65954[(5)] = ex__25641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65888;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65956 = state_65877;
state_65877 = G__65956;
continue;
} else {
return ret_value__25639__auto__;
}
break;
}
});
quad$components$add_mouse_window_handlers_BANG__$_state_machine__25638__auto__ = function(state_65877){
switch(arguments.length){
case 0:
return quad$components$add_mouse_window_handlers_BANG__$_state_machine__25638__auto____0.call(this);
case 1:
return quad$components$add_mouse_window_handlers_BANG__$_state_machine__25638__auto____1.call(this,state_65877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
quad$components$add_mouse_window_handlers_BANG__$_state_machine__25638__auto__.cljs$core$IFn$_invoke$arity$0 = quad$components$add_mouse_window_handlers_BANG__$_state_machine__25638__auto____0;
quad$components$add_mouse_window_handlers_BANG__$_state_machine__25638__auto__.cljs$core$IFn$_invoke$arity$1 = quad$components$add_mouse_window_handlers_BANG__$_state_machine__25638__auto____1;
return quad$components$add_mouse_window_handlers_BANG__$_state_machine__25638__auto__;
})()
})();
var state__25766__auto__ = (function (){var statearr_65892 = (f__25765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25765__auto__.cljs$core$IFn$_invoke$arity$0() : f__25765__auto__.call(null));
(statearr_65892[(6)] = c__25764__auto__);

return statearr_65892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25766__auto__);
}));

return c__25764__auto__;
});
quad.components.mouse_handler = (function quad$components$mouse_handler(e){
var target = (e["target"]["id"]);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target], 0));
});
quad.components.controls = (function quad$components$controls(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"500px",new cljs.core.Keyword(null,"height","height",1025178622),"100px",new cljs.core.Keyword(null,"background","background",-863952629),"green"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Dude!"], 0));
}),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (e){
return null;
}),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function (e){
return null;
})], null)], null);
});

//# sourceMappingURL=quad.components.js.map
