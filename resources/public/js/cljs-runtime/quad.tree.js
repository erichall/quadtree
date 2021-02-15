goog.provide('quad.tree');
goog.require('cljs.core');
goog.require('cljs.test');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
quad.tree.Cell = (function (x,y,data,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(quad.tree.Cell.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(quad.tree.Cell.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k43184,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__43188 = k43184;
var G__43188__$1 = (((G__43188 instanceof cljs.core.Keyword))?G__43188.fqn:null);
switch (G__43188__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43184,else__4442__auto__);

}
}));

(quad.tree.Cell.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__43189){
var vec__43190 = p__43189;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43190,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43190,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(quad.tree.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#quad.tree.Cell{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(quad.tree.Cell.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43183){
var self__ = this;
var G__43183__$1 = this;
return (new cljs.core.RecordIter((0),G__43183__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(quad.tree.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(quad.tree.Cell.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new quad.tree.Cell(self__.x,self__.y,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(quad.tree.Cell.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(quad.tree.Cell.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__43193 = (function (coll__4436__auto__){
return (-277070524 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__43193(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(quad.tree.Cell.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43185,other43186){
var self__ = this;
var this43185__$1 = this;
return (((!((other43186 == null)))) && ((this43185__$1.constructor === other43186.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43185__$1.x,other43186.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43185__$1.y,other43186.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43185__$1.data,other43186.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43185__$1.__extmap,other43186.__extmap)));
}));

(quad.tree.Cell.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new quad.tree.Cell(self__.x,self__.y,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(quad.tree.Cell.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__43183){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__43194 = cljs.core.keyword_identical_QMARK_;
var expr__43195 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__43197 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__43198 = expr__43195;
return (pred__43194.cljs$core$IFn$_invoke$arity$2 ? pred__43194.cljs$core$IFn$_invoke$arity$2(G__43197,G__43198) : pred__43194.call(null,G__43197,G__43198));
})())){
return (new quad.tree.Cell(G__43183,self__.y,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43199 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__43200 = expr__43195;
return (pred__43194.cljs$core$IFn$_invoke$arity$2 ? pred__43194.cljs$core$IFn$_invoke$arity$2(G__43199,G__43200) : pred__43194.call(null,G__43199,G__43200));
})())){
return (new quad.tree.Cell(self__.x,G__43183,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43201 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__43202 = expr__43195;
return (pred__43194.cljs$core$IFn$_invoke$arity$2 ? pred__43194.cljs$core$IFn$_invoke$arity$2(G__43201,G__43202) : pred__43194.call(null,G__43201,G__43202));
})())){
return (new quad.tree.Cell(self__.x,self__.y,G__43183,self__.__meta,self__.__extmap,null));
} else {
return (new quad.tree.Cell(self__.x,self__.y,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__43183),null));
}
}
}
}));

(quad.tree.Cell.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(quad.tree.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__43183){
var self__ = this;
var this__4438__auto____$1 = this;
return (new quad.tree.Cell(self__.x,self__.y,self__.data,G__43183,self__.__extmap,self__.__hash));
}));

(quad.tree.Cell.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(quad.tree.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(quad.tree.Cell.cljs$lang$type = true);

(quad.tree.Cell.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"quad.tree/Cell",null,(1),null));
}));

(quad.tree.Cell.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"quad.tree/Cell");
}));

/**
 * Positional factory function for quad.tree/Cell.
 */
quad.tree.__GT_Cell = (function quad$tree$__GT_Cell(x,y,data){
return (new quad.tree.Cell(x,y,data,null,null,null));
});

/**
 * Factory function for quad.tree/Cell, taking a map of keywords to field values.
 */
quad.tree.map__GT_Cell = (function quad$tree$map__GT_Cell(G__43187){
var extmap__4478__auto__ = (function (){var G__43203 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43187,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__43187)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43203);
} else {
return G__43203;
}
})();
return (new quad.tree.Cell(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__43187),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__43187),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__43187),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
quad.tree.Quadtree = (function (capacity,bounds,cells,nw,ne,sw,se,name,depth,__meta,__extmap,__hash){
this.capacity = capacity;
this.bounds = bounds;
this.cells = cells;
this.nw = nw;
this.ne = ne;
this.sw = sw;
this.se = se;
this.name = name;
this.depth = depth;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(quad.tree.Quadtree.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(quad.tree.Quadtree.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k43205,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__43209 = k43205;
var G__43209__$1 = (((G__43209 instanceof cljs.core.Keyword))?G__43209.fqn:null);
switch (G__43209__$1) {
case "capacity":
return self__.capacity;

break;
case "bounds":
return self__.bounds;

break;
case "cells":
return self__.cells;

break;
case "nw":
return self__.nw;

break;
case "ne":
return self__.ne;

break;
case "sw":
return self__.sw;

break;
case "se":
return self__.se;

break;
case "name":
return self__.name;

break;
case "depth":
return self__.depth;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43205,else__4442__auto__);

}
}));

(quad.tree.Quadtree.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__43210){
var vec__43211 = p__43210;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43211,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43211,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(quad.tree.Quadtree.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#quad.tree.Quadtree{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"capacity","capacity",72689734),self__.capacity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bounds","bounds",1691609455),self__.bounds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cells","cells",-985166822),self__.cells],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nw","nw",487743706),self__.nw],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ne","ne",-1792628743),self__.ne],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sw","sw",833113913),self__.sw],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"se","se",-1419643721),self__.se],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"depth","depth",1768663640),self__.depth],null))], null),self__.__extmap));
}));

(quad.tree.Quadtree.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43204){
var self__ = this;
var G__43204__$1 = this;
return (new cljs.core.RecordIter((0),G__43204__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capacity","capacity",72689734),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.Keyword(null,"nw","nw",487743706),new cljs.core.Keyword(null,"ne","ne",-1792628743),new cljs.core.Keyword(null,"sw","sw",833113913),new cljs.core.Keyword(null,"se","se",-1419643721),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"depth","depth",1768663640)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(quad.tree.Quadtree.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(quad.tree.Quadtree.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new quad.tree.Quadtree(self__.capacity,self__.bounds,self__.cells,self__.nw,self__.ne,self__.sw,self__.se,self__.name,self__.depth,self__.__meta,self__.__extmap,self__.__hash));
}));

(quad.tree.Quadtree.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (9 + cljs.core.count(self__.__extmap));
}));

(quad.tree.Quadtree.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__43214 = (function (coll__4436__auto__){
return (1678655725 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__43214(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(quad.tree.Quadtree.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43206,other43207){
var self__ = this;
var this43206__$1 = this;
return (((!((other43207 == null)))) && ((this43206__$1.constructor === other43207.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43206__$1.capacity,other43207.capacity)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43206__$1.bounds,other43207.bounds)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43206__$1.cells,other43207.cells)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43206__$1.nw,other43207.nw)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43206__$1.ne,other43207.ne)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43206__$1.sw,other43207.sw)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43206__$1.se,other43207.se)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43206__$1.name,other43207.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43206__$1.depth,other43207.depth)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43206__$1.__extmap,other43207.__extmap)));
}));

(quad.tree.Quadtree.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"capacity","capacity",72689734),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"bounds","bounds",1691609455),null,new cljs.core.Keyword(null,"se","se",-1419643721),null,new cljs.core.Keyword(null,"depth","depth",1768663640),null,new cljs.core.Keyword(null,"sw","sw",833113913),null,new cljs.core.Keyword(null,"ne","ne",-1792628743),null,new cljs.core.Keyword(null,"cells","cells",-985166822),null,new cljs.core.Keyword(null,"nw","nw",487743706),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new quad.tree.Quadtree(self__.capacity,self__.bounds,self__.cells,self__.nw,self__.ne,self__.sw,self__.se,self__.name,self__.depth,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(quad.tree.Quadtree.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__43204){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__43215 = cljs.core.keyword_identical_QMARK_;
var expr__43216 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__43218 = new cljs.core.Keyword(null,"capacity","capacity",72689734);
var G__43219 = expr__43216;
return (pred__43215.cljs$core$IFn$_invoke$arity$2 ? pred__43215.cljs$core$IFn$_invoke$arity$2(G__43218,G__43219) : pred__43215.call(null,G__43218,G__43219));
})())){
return (new quad.tree.Quadtree(G__43204,self__.bounds,self__.cells,self__.nw,self__.ne,self__.sw,self__.se,self__.name,self__.depth,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43220 = new cljs.core.Keyword(null,"bounds","bounds",1691609455);
var G__43221 = expr__43216;
return (pred__43215.cljs$core$IFn$_invoke$arity$2 ? pred__43215.cljs$core$IFn$_invoke$arity$2(G__43220,G__43221) : pred__43215.call(null,G__43220,G__43221));
})())){
return (new quad.tree.Quadtree(self__.capacity,G__43204,self__.cells,self__.nw,self__.ne,self__.sw,self__.se,self__.name,self__.depth,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43222 = new cljs.core.Keyword(null,"cells","cells",-985166822);
var G__43223 = expr__43216;
return (pred__43215.cljs$core$IFn$_invoke$arity$2 ? pred__43215.cljs$core$IFn$_invoke$arity$2(G__43222,G__43223) : pred__43215.call(null,G__43222,G__43223));
})())){
return (new quad.tree.Quadtree(self__.capacity,self__.bounds,G__43204,self__.nw,self__.ne,self__.sw,self__.se,self__.name,self__.depth,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43224 = new cljs.core.Keyword(null,"nw","nw",487743706);
var G__43225 = expr__43216;
return (pred__43215.cljs$core$IFn$_invoke$arity$2 ? pred__43215.cljs$core$IFn$_invoke$arity$2(G__43224,G__43225) : pred__43215.call(null,G__43224,G__43225));
})())){
return (new quad.tree.Quadtree(self__.capacity,self__.bounds,self__.cells,G__43204,self__.ne,self__.sw,self__.se,self__.name,self__.depth,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43226 = new cljs.core.Keyword(null,"ne","ne",-1792628743);
var G__43227 = expr__43216;
return (pred__43215.cljs$core$IFn$_invoke$arity$2 ? pred__43215.cljs$core$IFn$_invoke$arity$2(G__43226,G__43227) : pred__43215.call(null,G__43226,G__43227));
})())){
return (new quad.tree.Quadtree(self__.capacity,self__.bounds,self__.cells,self__.nw,G__43204,self__.sw,self__.se,self__.name,self__.depth,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43228 = new cljs.core.Keyword(null,"sw","sw",833113913);
var G__43229 = expr__43216;
return (pred__43215.cljs$core$IFn$_invoke$arity$2 ? pred__43215.cljs$core$IFn$_invoke$arity$2(G__43228,G__43229) : pred__43215.call(null,G__43228,G__43229));
})())){
return (new quad.tree.Quadtree(self__.capacity,self__.bounds,self__.cells,self__.nw,self__.ne,G__43204,self__.se,self__.name,self__.depth,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43230 = new cljs.core.Keyword(null,"se","se",-1419643721);
var G__43231 = expr__43216;
return (pred__43215.cljs$core$IFn$_invoke$arity$2 ? pred__43215.cljs$core$IFn$_invoke$arity$2(G__43230,G__43231) : pred__43215.call(null,G__43230,G__43231));
})())){
return (new quad.tree.Quadtree(self__.capacity,self__.bounds,self__.cells,self__.nw,self__.ne,self__.sw,G__43204,self__.name,self__.depth,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43232 = new cljs.core.Keyword(null,"name","name",1843675177);
var G__43233 = expr__43216;
return (pred__43215.cljs$core$IFn$_invoke$arity$2 ? pred__43215.cljs$core$IFn$_invoke$arity$2(G__43232,G__43233) : pred__43215.call(null,G__43232,G__43233));
})())){
return (new quad.tree.Quadtree(self__.capacity,self__.bounds,self__.cells,self__.nw,self__.ne,self__.sw,self__.se,G__43204,self__.depth,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43234 = new cljs.core.Keyword(null,"depth","depth",1768663640);
var G__43235 = expr__43216;
return (pred__43215.cljs$core$IFn$_invoke$arity$2 ? pred__43215.cljs$core$IFn$_invoke$arity$2(G__43234,G__43235) : pred__43215.call(null,G__43234,G__43235));
})())){
return (new quad.tree.Quadtree(self__.capacity,self__.bounds,self__.cells,self__.nw,self__.ne,self__.sw,self__.se,self__.name,G__43204,self__.__meta,self__.__extmap,null));
} else {
return (new quad.tree.Quadtree(self__.capacity,self__.bounds,self__.cells,self__.nw,self__.ne,self__.sw,self__.se,self__.name,self__.depth,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__43204),null));
}
}
}
}
}
}
}
}
}
}));

(quad.tree.Quadtree.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"capacity","capacity",72689734),self__.capacity,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bounds","bounds",1691609455),self__.bounds,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cells","cells",-985166822),self__.cells,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nw","nw",487743706),self__.nw,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ne","ne",-1792628743),self__.ne,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sw","sw",833113913),self__.sw,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"se","se",-1419643721),self__.se,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"depth","depth",1768663640),self__.depth,null))], null),self__.__extmap));
}));

(quad.tree.Quadtree.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__43204){
var self__ = this;
var this__4438__auto____$1 = this;
return (new quad.tree.Quadtree(self__.capacity,self__.bounds,self__.cells,self__.nw,self__.ne,self__.sw,self__.se,self__.name,self__.depth,G__43204,self__.__extmap,self__.__hash));
}));

(quad.tree.Quadtree.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(quad.tree.Quadtree.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"capacity","capacity",1713221261,null),new cljs.core.Symbol(null,"bounds","bounds",-962826314,null),new cljs.core.Symbol(null,"cells","cells",655364705,null),new cljs.core.Symbol(null,"nw","nw",2128275233,null),new cljs.core.Symbol(null,"ne","ne",-152097216,null),new cljs.core.Symbol(null,"sw","sw",-1821321856,null),new cljs.core.Symbol(null,"se","se",220887806,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"depth","depth",-885772129,null)], null);
}));

(quad.tree.Quadtree.cljs$lang$type = true);

(quad.tree.Quadtree.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"quad.tree/Quadtree",null,(1),null));
}));

(quad.tree.Quadtree.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"quad.tree/Quadtree");
}));

/**
 * Positional factory function for quad.tree/Quadtree.
 */
quad.tree.__GT_Quadtree = (function quad$tree$__GT_Quadtree(capacity,bounds,cells,nw,ne,sw,se,name,depth){
return (new quad.tree.Quadtree(capacity,bounds,cells,nw,ne,sw,se,name,depth,null,null,null));
});

/**
 * Factory function for quad.tree/Quadtree, taking a map of keywords to field values.
 */
quad.tree.map__GT_Quadtree = (function quad$tree$map__GT_Quadtree(G__43208){
var extmap__4478__auto__ = (function (){var G__43236 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43208,new cljs.core.Keyword(null,"capacity","capacity",72689734),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.Keyword(null,"nw","nw",487743706),new cljs.core.Keyword(null,"ne","ne",-1792628743),new cljs.core.Keyword(null,"sw","sw",833113913),new cljs.core.Keyword(null,"se","se",-1419643721),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"depth","depth",1768663640)], 0));
if(cljs.core.record_QMARK_(G__43208)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43236);
} else {
return G__43236;
}
})();
return (new quad.tree.Quadtree(new cljs.core.Keyword(null,"capacity","capacity",72689734).cljs$core$IFn$_invoke$arity$1(G__43208),new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(G__43208),new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(G__43208),new cljs.core.Keyword(null,"nw","nw",487743706).cljs$core$IFn$_invoke$arity$1(G__43208),new cljs.core.Keyword(null,"ne","ne",-1792628743).cljs$core$IFn$_invoke$arity$1(G__43208),new cljs.core.Keyword(null,"sw","sw",833113913).cljs$core$IFn$_invoke$arity$1(G__43208),new cljs.core.Keyword(null,"se","se",-1419643721).cljs$core$IFn$_invoke$arity$1(G__43208),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__43208),new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(G__43208),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

if((typeof quad !== 'undefined') && (typeof quad.tree !== 'undefined') && (typeof quad.tree.bounds_cache !== 'undefined')){
} else {
quad.tree.bounds_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(quad.tree.bounds_cache) == null)){
cljs.core.reset_BANG_(quad.tree.bounds_cache,cljs.core.PersistentArrayMap.EMPTY);
} else {
}
quad.tree.num_map_vals_QMARK_ = (function quad$tree$num_map_vals_QMARK_(m){
return cljs.core.every_QMARK_(cljs.core.number_QMARK_,cljs.core.vals(m));
});
quad.tree.condj = (function quad$tree$condj(v,val){
var G__43237 = v;
if(cljs.core.truth_(val)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__43237,val);
} else {
return G__43237;
}
});
quad.tree.make_tree = (function quad$tree$make_tree(p__43238){
var map__43239 = p__43238;
var map__43239__$1 = (((((!((map__43239 == null))))?(((((map__43239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43239):map__43239);
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43239__$1,new cljs.core.Keyword(null,"sw","sw",833113913),null);
var ne = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43239__$1,new cljs.core.Keyword(null,"ne","ne",-1792628743),null);
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43239__$1,new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.PersistentVector.EMPTY);
var nw = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43239__$1,new cljs.core.Keyword(null,"nw","nw",487743706),null);
var capacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43239__$1,new cljs.core.Keyword(null,"capacity","capacity",72689734));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43239__$1,new cljs.core.Keyword(null,"name","name",1843675177),"");
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43239__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var se = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43239__$1,new cljs.core.Keyword(null,"se","se",-1419643721),null);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43239__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),(0));
return (new quad.tree.Quadtree(capacity,bounds,cells,nw,ne,sw,se,name,depth,null,null,null));
});
/**
 * Check if a given cell is within a boundary.
 */
quad.tree.in_bounds_QMARK_ = (function quad$tree$in_bounds_QMARK_(p__43241,p__43242){
var map__43243 = p__43241;
var map__43243__$1 = (((((!((map__43243 == null))))?(((((map__43243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43243):map__43243);
var bb = map__43243__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43243__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43243__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43243__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43243__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__43244 = p__43242;
var map__43244__$1 = (((((!((map__43244 == null))))?(((((map__43244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43244):map__43244);
var p = map__43244__$1;
var cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43244__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43244__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
if((bb == null)){
return false;
} else {
return (((cx >= (x - width))) && ((cx <= (x + width))) && ((cy >= (y - height))) && ((cy <= (y + height))));
}
});
quad.tree.in_bounds_QMARK_.cljs$lang$test = (function (){
try{var values__8921__auto__ = (new cljs.core.List(null,quad.tree.in_bounds_QMARK_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(495),new cljs.core.Keyword(null,"y","y",-1757859776),(190),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(665),new cljs.core.Keyword(null,"y","y",-1757859776),(294)], null)),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"in-bounds?","in-bounds?",1332654330,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(495),new cljs.core.Keyword(null,"y","y",-1757859776),(190),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(665),new cljs.core.Keyword(null,"y","y",-1757859776),(294)], null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"in-bounds?","in-bounds?",1332654330,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(495),new cljs.core.Keyword(null,"y","y",-1757859776),(190),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(665),new cljs.core.Keyword(null,"y","y",-1757859776),(294)], null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e43247){var t__8952__auto__ = e43247;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"in-bounds?","in-bounds?",1332654330,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(495),new cljs.core.Keyword(null,"y","y",-1757859776),(190),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(665),new cljs.core.Keyword(null,"y","y",-1757859776),(294)], null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
quad.tree.intersects_QMARK_ = (function quad$tree$intersects_QMARK_(a,b){
return (!(((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(a)) > (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(b)))) || (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(a)) < (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(b)))) || (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(a)) > (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(b)))) || (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(a)) < (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(b)))))));
});
quad.tree.intersects_QMARK_.cljs$lang$test = (function (){
try{var values__8921__auto___43598 = (new cljs.core.List(null,quad.tree.intersects_QMARK_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(495),new cljs.core.Keyword(null,"y","y",-1757859776),(190),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(768),new cljs.core.Keyword(null,"y","y",-1757859776),(256),new cljs.core.Keyword(null,"height","height",1025178622),(256),new cljs.core.Keyword(null,"width","width",-384071477),(256)], null)),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__8922__auto___43599 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto___43598);
if(cljs.core.truth_(result__8922__auto___43599)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"intersects?","intersects?",-594819699,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(495),new cljs.core.Keyword(null,"y","y",-1757859776),(190),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(768),new cljs.core.Keyword(null,"y","y",-1757859776),(256),new cljs.core.Keyword(null,"height","height",1025178622),(256),new cljs.core.Keyword(null,"width","width",-384071477),(256)], null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto___43598),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"intersects?","intersects?",-594819699,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(495),new cljs.core.Keyword(null,"y","y",-1757859776),(190),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(768),new cljs.core.Keyword(null,"y","y",-1757859776),(256),new cljs.core.Keyword(null,"height","height",1025178622),(256),new cljs.core.Keyword(null,"width","width",-384071477),(256)], null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto___43598),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43248){var t__8952__auto___43610 = e43248;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"intersects?","intersects?",-594819699,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(495),new cljs.core.Keyword(null,"y","y",-1757859776),(190),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(768),new cljs.core.Keyword(null,"y","y",-1757859776),(256),new cljs.core.Keyword(null,"height","height",1025178622),(256),new cljs.core.Keyword(null,"width","width",-384071477),(256)], null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto___43610,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8921__auto___43614 = (new cljs.core.List(null,quad.tree.intersects_QMARK_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(495),new cljs.core.Keyword(null,"y","y",-1757859776),(190),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(256),new cljs.core.Keyword(null,"y","y",-1757859776),(768),new cljs.core.Keyword(null,"height","height",1025178622),(256),new cljs.core.Keyword(null,"width","width",-384071477),(256)], null)),(new cljs.core.List(null,false,null,(1),null)),(2),null));
var result__8922__auto___43615 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto___43614);
if(cljs.core.truth_(result__8922__auto___43615)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"intersects?","intersects?",-594819699,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(495),new cljs.core.Keyword(null,"y","y",-1757859776),(190),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(256),new cljs.core.Keyword(null,"y","y",-1757859776),(768),new cljs.core.Keyword(null,"height","height",1025178622),(256),new cljs.core.Keyword(null,"width","width",-384071477),(256)], null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto___43614),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"intersects?","intersects?",-594819699,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(495),new cljs.core.Keyword(null,"y","y",-1757859776),(190),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(256),new cljs.core.Keyword(null,"y","y",-1757859776),(768),new cljs.core.Keyword(null,"height","height",1025178622),(256),new cljs.core.Keyword(null,"width","width",-384071477),(256)], null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto___43614),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43249){var t__8952__auto___43625 = e43249;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"intersects?","intersects?",-594819699,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(495),new cljs.core.Keyword(null,"y","y",-1757859776),(190),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(256),new cljs.core.Keyword(null,"y","y",-1757859776),(768),new cljs.core.Keyword(null,"height","height",1025178622),(256),new cljs.core.Keyword(null,"width","width",-384071477),(256)], null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto___43625,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8921__auto___43627 = (new cljs.core.List(null,quad.tree.intersects_QMARK_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(298),new cljs.core.Keyword(null,"y","y",-1757859776),(374),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(512),new cljs.core.Keyword(null,"y","y",-1757859776),(512),new cljs.core.Keyword(null,"width","width",-384071477),(512),new cljs.core.Keyword(null,"height","height",1025178622),(512)], null)),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__8922__auto___43628 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto___43627);
if(cljs.core.truth_(result__8922__auto___43628)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"intersects?","intersects?",-594819699,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(298),new cljs.core.Keyword(null,"y","y",-1757859776),(374),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(512),new cljs.core.Keyword(null,"y","y",-1757859776),(512),new cljs.core.Keyword(null,"width","width",-384071477),(512),new cljs.core.Keyword(null,"height","height",1025178622),(512)], null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto___43627),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"intersects?","intersects?",-594819699,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(298),new cljs.core.Keyword(null,"y","y",-1757859776),(374),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(512),new cljs.core.Keyword(null,"y","y",-1757859776),(512),new cljs.core.Keyword(null,"width","width",-384071477),(512),new cljs.core.Keyword(null,"height","height",1025178622),(512)], null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto___43627),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43250){var t__8952__auto___43636 = e43250;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"intersects?","intersects?",-594819699,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(298),new cljs.core.Keyword(null,"y","y",-1757859776),(374),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(512),new cljs.core.Keyword(null,"y","y",-1757859776),(512),new cljs.core.Keyword(null,"width","width",-384071477),(512),new cljs.core.Keyword(null,"height","height",1025178622),(512)], null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto___43636,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8921__auto__ = (new cljs.core.List(null,quad.tree.intersects_QMARK_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(295),new cljs.core.Keyword(null,"y","y",-1757859776),(461),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(512),new cljs.core.Keyword(null,"y","y",-1757859776),(512),new cljs.core.Keyword(null,"width","width",-384071477),(512),new cljs.core.Keyword(null,"height","height",1025178622),(512)], null)),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"intersects?","intersects?",-594819699,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(295),new cljs.core.Keyword(null,"y","y",-1757859776),(461),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(512),new cljs.core.Keyword(null,"y","y",-1757859776),(512),new cljs.core.Keyword(null,"width","width",-384071477),(512),new cljs.core.Keyword(null,"height","height",1025178622),(512)], null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"intersects?","intersects?",-594819699,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(295),new cljs.core.Keyword(null,"y","y",-1757859776),(461),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(512),new cljs.core.Keyword(null,"y","y",-1757859776),(512),new cljs.core.Keyword(null,"width","width",-384071477),(512),new cljs.core.Keyword(null,"height","height",1025178622),(512)], null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e43251){var t__8952__auto__ = e43251;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"intersects?","intersects?",-594819699,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(295),new cljs.core.Keyword(null,"y","y",-1757859776),(461),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(512),new cljs.core.Keyword(null,"y","y",-1757859776),(512),new cljs.core.Keyword(null,"width","width",-384071477),(512),new cljs.core.Keyword(null,"height","height",1025178622),(512)], null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
/**
 * Split a boundary into four
 */
quad.tree.split = (function quad$tree$split(p__43252){
var map__43253 = p__43252;
var map__43253__$1 = (((((!((map__43253 == null))))?(((((map__43253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43253):map__43253);
var b = map__43253__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43253__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43253__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43253__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43253__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(quad.tree.num_map_vals_QMARK_(b)){
} else {
throw (new Error("Assert failed: (num-map-vals? b)"));
}

var w = (width / (2));
var h = (height / (2));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"b-nw","b-nw",-373346884),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x - w),new cljs.core.Keyword(null,"y","y",-1757859776),(y - h),new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w], null),new cljs.core.Keyword(null,"b-ne","b-ne",-2078853095),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x + w),new cljs.core.Keyword(null,"y","y",-1757859776),(y - h),new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w], null),new cljs.core.Keyword(null,"b-se","b-se",-573822851),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x + w),new cljs.core.Keyword(null,"y","y",-1757859776),(y + h),new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w], null),new cljs.core.Keyword(null,"b-sw","b-sw",1632313115),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x - w),new cljs.core.Keyword(null,"y","y",-1757859776),(y + h),new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w], null)], null);
});
/**
 * computes 2 ^ n
 */
quad.tree.two_pow = (function quad$tree$two_pow(n){
return ((1) << n);
});
quad.tree.two_pow.cljs$lang$test = (function (){
try{var values__8921__auto___43670 = (new cljs.core.List(null,quad.tree.two_pow((2)),(new cljs.core.List(null,(4),null,(1),null)),(2),null));
var result__8922__auto___43671 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto___43670);
if(cljs.core.truth_(result__8922__auto___43671)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"two-pow","two-pow",1331032107,null),(2)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto___43670),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"two-pow","two-pow",1331032107,null),(2)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto___43670),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43255){var t__8952__auto___43675 = e43255;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"two-pow","two-pow",1331032107,null),(2)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto___43675,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8921__auto___43678 = (new cljs.core.List(null,quad.tree.two_pow((3)),(new cljs.core.List(null,(Math.pow((2),(3)) | (0)),null,(1),null)),(2),null));
var result__8922__auto___43679 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto___43678);
if(cljs.core.truth_(result__8922__auto___43679)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"two-pow","two-pow",1331032107,null),(3)),cljs.core.list(new cljs.core.Symbol(null,"int","int",-100885395,null),cljs.core.list(new cljs.core.Symbol("Math","pow","Math/pow",193807960,null),(2),(3)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto___43678),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"two-pow","two-pow",1331032107,null),(3)),cljs.core.list(new cljs.core.Symbol(null,"int","int",-100885395,null),cljs.core.list(new cljs.core.Symbol("Math","pow","Math/pow",193807960,null),(2),(3)))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto___43678),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43256){var t__8952__auto___43692 = e43256;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"two-pow","two-pow",1331032107,null),(3)),cljs.core.list(new cljs.core.Symbol(null,"int","int",-100885395,null),cljs.core.list(new cljs.core.Symbol("Math","pow","Math/pow",193807960,null),(2),(3)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto___43692,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8921__auto__ = (new cljs.core.List(null,quad.tree.two_pow((4)),(new cljs.core.List(null,(Math.pow((2),(4)) | (0)),null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"two-pow","two-pow",1331032107,null),(4)),cljs.core.list(new cljs.core.Symbol(null,"int","int",-100885395,null),cljs.core.list(new cljs.core.Symbol("Math","pow","Math/pow",193807960,null),(2),(4)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"two-pow","two-pow",1331032107,null),(4)),cljs.core.list(new cljs.core.Symbol(null,"int","int",-100885395,null),cljs.core.list(new cljs.core.Symbol("Math","pow","Math/pow",193807960,null),(2),(4)))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e43257){var t__8952__auto__ = e43257;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"two-pow","two-pow",1331032107,null),(4)),cljs.core.list(new cljs.core.Symbol(null,"int","int",-100885395,null),cljs.core.list(new cljs.core.Symbol("Math","pow","Math/pow",193807960,null),(2),(4)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
quad.tree.split_by_root_bounds = (function quad$tree$split_by_root_bounds(p__43258,depth){
var map__43259 = p__43258;
var map__43259__$1 = (((((!((map__43259 == null))))?(((((map__43259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43259):map__43259);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43259__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43259__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43259__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43259__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var td = quad.tree.two_pow(depth);
var w = (width / td);
var h = (height / td);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"b-nw","b-nw",-373346884),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x - w),new cljs.core.Keyword(null,"y","y",-1757859776),(y - h),new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w], null),new cljs.core.Keyword(null,"b-ne","b-ne",-2078853095),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x + w),new cljs.core.Keyword(null,"y","y",-1757859776),(y - h),new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w], null),new cljs.core.Keyword(null,"b-se","b-se",-573822851),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x + w),new cljs.core.Keyword(null,"y","y",-1757859776),(y + h),new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w], null),new cljs.core.Keyword(null,"b-sw","b-sw",1632313115),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x - w),new cljs.core.Keyword(null,"y","y",-1757859776),(y + h),new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w], null)], null);
});
quad.tree.bounds_by_depth = (function quad$tree$bounds_by_depth(p__43261,depth){
var map__43262 = p__43261;
var map__43262__$1 = (((((!((map__43262 == null))))?(((((map__43262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43262):map__43262);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43262__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43262__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43262__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43262__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var td = quad.tree.two_pow(depth);
var w = (width / td);
var h = (height / td);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x - w),new cljs.core.Keyword(null,"y","y",-1757859776),(y - h),new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w], null);
});
quad.tree.bounds_by_depth.cljs$lang$test = (function (){
try{var values__8921__auto__ = (new cljs.core.List(null,quad.tree.bounds_by_depth(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null),(0)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null),null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"bounds-by-depth","bounds-by-depth",1889304697,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null),(0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"bounds-by-depth","bounds-by-depth",1889304697,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null),(0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e43264){var t__8952__auto__ = e43264;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"bounds-by-depth","bounds-by-depth",1889304697,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null),(0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
quad.tree.memo_split = cljs.core.memoize(quad.tree.split);
quad.tree.split_QMARK_ = (function quad$tree$split_QMARK_(p__43265){
var map__43266 = p__43265;
var map__43266__$1 = (((((!((map__43266 == null))))?(((((map__43266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43266):map__43266);
var nw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43266__$1,new cljs.core.Keyword(null,"nw","nw",487743706));
return (nw == null);
});
quad.tree.split_QMARK_.cljs$lang$test = (function (){
try{var values__8921__auto___43725 = (new cljs.core.List(null,quad.tree.split_QMARK_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nw","nw",487743706),(1),new cljs.core.Keyword(null,"ne","ne",-1792628743),(1),new cljs.core.Keyword(null,"sw","sw",833113913),(1),new cljs.core.Keyword(null,"se","se",-1419643721),(1)], null)),(new cljs.core.List(null,false,null,(1),null)),(2),null));
var result__8922__auto___43726 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto___43725);
if(cljs.core.truth_(result__8922__auto___43726)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"split?","split?",7256786,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nw","nw",487743706),(1),new cljs.core.Keyword(null,"ne","ne",-1792628743),(1),new cljs.core.Keyword(null,"sw","sw",833113913),(1),new cljs.core.Keyword(null,"se","se",-1419643721),(1)], null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto___43725),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"split?","split?",7256786,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nw","nw",487743706),(1),new cljs.core.Keyword(null,"ne","ne",-1792628743),(1),new cljs.core.Keyword(null,"sw","sw",833113913),(1),new cljs.core.Keyword(null,"se","se",-1419643721),(1)], null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto___43725),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43268){var t__8952__auto___43733 = e43268;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"split?","split?",7256786,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nw","nw",487743706),(1),new cljs.core.Keyword(null,"ne","ne",-1792628743),(1),new cljs.core.Keyword(null,"sw","sw",833113913),(1),new cljs.core.Keyword(null,"se","se",-1419643721),(1)], null)),false),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto___43733,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8921__auto__ = (new cljs.core.List(null,quad.tree.split_QMARK_(null),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"split?","split?",7256786,null),null),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"split?","split?",7256786,null),null),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e43269){var t__8952__auto__ = e43269;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"split?","split?",7256786,null),null),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
quad.tree.insert_cells = (function quad$tree$insert_cells(tree,cells){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc_tree,c){
return (quad.tree.insert.cljs$core$IFn$_invoke$arity$2 ? quad.tree.insert.cljs$core$IFn$_invoke$arity$2(acc_tree,c) : quad.tree.insert.call(null,acc_tree,c));
}),tree,cells);
});
quad.tree.make_cells = (function quad$tree$make_cells(n){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cells,i){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cells,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),i,new cljs.core.Keyword(null,"y","y",-1757859776),i], null));
}),cljs.core.PersistentVector.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1((n + (1))));
});
quad.tree.cache_bounds_BANG_ = (function quad$tree$cache_bounds_BANG_(bounds){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(quad.tree.bounds_cache,(function (bb){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (bbs,b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bbs,b,(1));
}),bb,cljs.core.vals(bounds));
}));
});
quad.tree.room_order = (function quad$tree$room_order(p__43270){
var map__43271 = p__43270;
var map__43271__$1 = (((((!((map__43271 == null))))?(((((map__43271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43271):map__43271);
var t = map__43271__$1;
var nw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43271__$1,new cljs.core.Keyword(null,"nw","nw",487743706));
var ne = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43271__$1,new cljs.core.Keyword(null,"ne","ne",-1792628743));
var se = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43271__$1,new cljs.core.Keyword(null,"se","se",-1419643721));
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43271__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nw","nw",487743706),new cljs.core.Keyword(null,"ne","ne",-1792628743),new cljs.core.Keyword(null,"se","se",-1419643721),new cljs.core.Keyword(null,"sw","sw",833113913)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(nw);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(ne);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(se);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(sw);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()], null))));
});
quad.tree.insert = (function quad$tree$insert(p__43273,cell){
var map__43274 = p__43273;
var map__43274__$1 = (((((!((map__43274 == null))))?(((((map__43274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43274):map__43274);
var tree = map__43274__$1;
var capacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43274__$1,new cljs.core.Keyword(null,"capacity","capacity",72689734));
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43274__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43274__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var nw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43274__$1,new cljs.core.Keyword(null,"nw","nw",487743706));
var ne = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43274__$1,new cljs.core.Keyword(null,"ne","ne",-1792628743));
var se = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43274__$1,new cljs.core.Keyword(null,"se","se",-1419643721));
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43274__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43274__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
if((!(quad.tree.in_bounds_QMARK_(bounds,cell)))){
return tree;
} else {
if(((quad.tree.split_QMARK_(tree)) && ((cljs.core.count(cells) < capacity)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tree,new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.conj,cell);
} else {
if(quad.tree.split_QMARK_(tree)){
var new_depth = (depth + (1));
var map__43276 = (quad.tree.memo_split.cljs$core$IFn$_invoke$arity$1 ? quad.tree.memo_split.cljs$core$IFn$_invoke$arity$1(bounds) : quad.tree.memo_split.call(null,bounds));
var map__43276__$1 = (((((!((map__43276 == null))))?(((((map__43276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43276):map__43276);
var b_nw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43276__$1,new cljs.core.Keyword(null,"b-nw","b-nw",-373346884));
var b_ne = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43276__$1,new cljs.core.Keyword(null,"b-ne","b-ne",-2078853095));
var b_se = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43276__$1,new cljs.core.Keyword(null,"b-se","b-se",-573822851));
var b_sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43276__$1,new cljs.core.Keyword(null,"b-sw","b-sw",1632313115));
return quad.tree.insert_cells(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tree,new cljs.core.Keyword(null,"cells","cells",-985166822),null),new cljs.core.Keyword(null,"nw","nw",487743706),quad.tree.make_tree(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"capacity","capacity",72689734),capacity,new cljs.core.Keyword(null,"bounds","bounds",1691609455),b_nw,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"nw","nw",487743706),new cljs.core.Keyword(null,"depth","depth",1768663640),new_depth], null))),new cljs.core.Keyword(null,"ne","ne",-1792628743),quad.tree.make_tree(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"capacity","capacity",72689734),capacity,new cljs.core.Keyword(null,"bounds","bounds",1691609455),b_ne,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"ne","ne",-1792628743),new cljs.core.Keyword(null,"depth","depth",1768663640),new_depth], null))),new cljs.core.Keyword(null,"se","se",-1419643721),quad.tree.make_tree(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"capacity","capacity",72689734),capacity,new cljs.core.Keyword(null,"bounds","bounds",1691609455),b_se,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"se","se",-1419643721),new cljs.core.Keyword(null,"depth","depth",1768663640),new_depth], null))),new cljs.core.Keyword(null,"sw","sw",833113913),quad.tree.make_tree(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"capacity","capacity",72689734),capacity,new cljs.core.Keyword(null,"bounds","bounds",1691609455),b_sw,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sw","sw",833113913),new cljs.core.Keyword(null,"depth","depth",1768663640),new_depth], null))),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cells,cell));
} else {
if(quad.tree.in_bounds_QMARK_(new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(nw),cell)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tree,new cljs.core.Keyword(null,"nw","nw",487743706),(quad.tree.insert.cljs$core$IFn$_invoke$arity$2 ? quad.tree.insert.cljs$core$IFn$_invoke$arity$2(nw,cell) : quad.tree.insert.call(null,nw,cell)));
} else {
if(quad.tree.in_bounds_QMARK_(new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(ne),cell)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tree,new cljs.core.Keyword(null,"ne","ne",-1792628743),(quad.tree.insert.cljs$core$IFn$_invoke$arity$2 ? quad.tree.insert.cljs$core$IFn$_invoke$arity$2(ne,cell) : quad.tree.insert.call(null,ne,cell)));
} else {
if(quad.tree.in_bounds_QMARK_(new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(se),cell)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tree,new cljs.core.Keyword(null,"se","se",-1419643721),(quad.tree.insert.cljs$core$IFn$_invoke$arity$2 ? quad.tree.insert.cljs$core$IFn$_invoke$arity$2(se,cell) : quad.tree.insert.call(null,se,cell)));
} else {
if(quad.tree.in_bounds_QMARK_(new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(sw),cell)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tree,new cljs.core.Keyword(null,"sw","sw",833113913),(quad.tree.insert.cljs$core$IFn$_invoke$arity$2 ? quad.tree.insert.cljs$core$IFn$_invoke$arity$2(sw,cell) : quad.tree.insert.call(null,sw,cell)));
} else {
return tree;

}
}
}
}
}
}
}
});
quad.tree.insert.cljs$lang$test = (function (){
var tree = quad.tree.make_tree(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"capacity","capacity",72689734),(4),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null)], null));
try{var values__8921__auto___43758 = (new cljs.core.List(null,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(quad.tree.insert(tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null))),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),null,(1),null)),(2),null));
var result__8922__auto___43759 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto___43758);
if(cljs.core.truth_(result__8922__auto___43759)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),new cljs.core.Keyword(null,"cells","cells",-985166822)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto___43758),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),new cljs.core.Keyword(null,"cells","cells",-985166822)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto___43758),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43278){var t__8952__auto___43762 = e43278;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),new cljs.core.Keyword(null,"cells","cells",-985166822)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto___43762,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8921__auto___43769 = (new cljs.core.List(null,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(quad.tree.insert(quad.tree.insert(tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null))),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)], null),null,(1),null)),(2),null));
var result__8922__auto___43770 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto___43769);
if(cljs.core.truth_(result__8922__auto___43770)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)),new cljs.core.Keyword(null,"cells","cells",-985166822)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto___43769),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)),new cljs.core.Keyword(null,"cells","cells",-985166822)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto___43769),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43279){var t__8952__auto___43798 = e43279;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)),new cljs.core.Keyword(null,"cells","cells",-985166822)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto___43798,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8921__auto___43803 = (new cljs.core.List(null,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(quad.tree.insert(quad.tree.insert(quad.tree.insert(tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null))),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null)], null),null,(1),null)),(2),null));
var result__8922__auto___43804 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto___43803);
if(cljs.core.truth_(result__8922__auto___43804)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null)),new cljs.core.Keyword(null,"cells","cells",-985166822)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto___43803),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null)),new cljs.core.Keyword(null,"cells","cells",-985166822)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto___43803),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43280){var t__8952__auto___43836 = e43280;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null)),new cljs.core.Keyword(null,"cells","cells",-985166822)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto___43836,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8921__auto__ = (new cljs.core.List(null,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(quad.tree.insert(quad.tree.insert(quad.tree.insert(quad.tree.insert(tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(3)], null))),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(3)], null)], null),null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(3)], null)),new cljs.core.Keyword(null,"cells","cells",-985166822)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(3)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(3)], null)),new cljs.core.Keyword(null,"cells","cells",-985166822)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(3)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e43281){var t__8952__auto__ = e43281;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(3)], null)),new cljs.core.Keyword(null,"cells","cells",-985166822)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(3)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
quad.tree.print_tree = (function quad$tree$print_tree(p__43282){
var map__43283 = p__43282;
var map__43283__$1 = (((((!((map__43283 == null))))?(((((map__43283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43283):map__43283);
var tree = map__43283__$1;
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43283__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43283__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var nw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43283__$1,new cljs.core.Keyword(null,"nw","nw",487743706));
var ne = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43283__$1,new cljs.core.Keyword(null,"ne","ne",-1792628743));
var se = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43283__$1,new cljs.core.Keyword(null,"se","se",-1419643721));
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43283__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43283__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43283__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var spaces = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join('');
}),"",cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = depth;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})()));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(spaces)," | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cells),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spaces)," | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bounds),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spaces),"  ____"].join('')], 0));

if((!((nw == null)))){
(quad.tree.print_tree.cljs$core$IFn$_invoke$arity$1 ? quad.tree.print_tree.cljs$core$IFn$_invoke$arity$1(nw) : quad.tree.print_tree.call(null,nw));
} else {
}

if((!((ne == null)))){
(quad.tree.print_tree.cljs$core$IFn$_invoke$arity$1 ? quad.tree.print_tree.cljs$core$IFn$_invoke$arity$1(ne) : quad.tree.print_tree.call(null,ne));
} else {
}

if((!((se == null)))){
(quad.tree.print_tree.cljs$core$IFn$_invoke$arity$1 ? quad.tree.print_tree.cljs$core$IFn$_invoke$arity$1(se) : quad.tree.print_tree.call(null,se));
} else {
}

if((!((sw == null)))){
return (quad.tree.print_tree.cljs$core$IFn$_invoke$arity$1 ? quad.tree.print_tree.cljs$core$IFn$_invoke$arity$1(sw) : quad.tree.print_tree.call(null,sw));
} else {
return null;
}
});
quad.tree.flatten_tree = (function quad$tree$flatten_tree(tree){
var G__43286 = tree;
var map__43287 = G__43286;
var map__43287__$1 = (((((!((map__43287 == null))))?(((((map__43287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43287):map__43287);
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43287__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43287__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var nw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43287__$1,new cljs.core.Keyword(null,"nw","nw",487743706));
var ne = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43287__$1,new cljs.core.Keyword(null,"ne","ne",-1792628743));
var se = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43287__$1,new cljs.core.Keyword(null,"se","se",-1419643721));
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43287__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
var flat_tree = cljs.core.PersistentVector.EMPTY;
var G__43286__$1 = G__43286;
var flat_tree__$1 = flat_tree;
while(true){
var map__43289 = G__43286__$1;
var map__43289__$1 = (((((!((map__43289 == null))))?(((((map__43289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43289):map__43289);
var cells__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43289__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var bounds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43289__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var nw__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43289__$1,new cljs.core.Keyword(null,"nw","nw",487743706));
var ne__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43289__$1,new cljs.core.Keyword(null,"ne","ne",-1792628743));
var se__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43289__$1,new cljs.core.Keyword(null,"se","se",-1419643721));
var sw__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43289__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
var flat_tree__$2 = flat_tree__$1;
if((tree == null)){
return null;
} else {
if(cljs.core.empty_QMARK_(cells__$1)){
return null;
} else {
return quad.tree.condj(quad.tree.condj(quad.tree.condj(quad.tree.condj(quad.tree.condj(flat_tree__$2,((cljs.core.seq(cells__$1))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cells","cells",-985166822),cells__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds__$1], null):null)),(quad.tree.flatten_tree.cljs$core$IFn$_invoke$arity$1 ? quad.tree.flatten_tree.cljs$core$IFn$_invoke$arity$1(nw__$1) : quad.tree.flatten_tree.call(null,nw__$1))),(quad.tree.flatten_tree.cljs$core$IFn$_invoke$arity$1 ? quad.tree.flatten_tree.cljs$core$IFn$_invoke$arity$1(ne__$1) : quad.tree.flatten_tree.call(null,ne__$1))),(quad.tree.flatten_tree.cljs$core$IFn$_invoke$arity$1 ? quad.tree.flatten_tree.cljs$core$IFn$_invoke$arity$1(se__$1) : quad.tree.flatten_tree.call(null,se__$1))),(quad.tree.flatten_tree.cljs$core$IFn$_invoke$arity$1 ? quad.tree.flatten_tree.cljs$core$IFn$_invoke$arity$1(sw__$1) : quad.tree.flatten_tree.call(null,sw__$1)));

}
}
break;
}
});
if((typeof quad !== 'undefined') && (typeof quad.tree !== 'undefined') && (typeof quad.tree.random_seed_atom !== 'undefined')){
} else {
quad.tree.random_seed_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
}
quad.tree.random_int = (function quad$tree$random_int(var_args){
var G__43292 = arguments.length;
switch (G__43292) {
case 1:
return quad.tree.random_int.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quad.tree.random_int.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quad.tree.random_int.cljs$core$IFn$_invoke$arity$1 = (function (max){
return quad.tree.random_int.cljs$core$IFn$_invoke$arity$2((0),max);
}));

(quad.tree.random_int.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
var xx = (function (){var G__43293 = (function (){var G__43294 = cljs.core.deref(quad.tree.random_seed_atom);
return Math.sin(G__43294);
})();
return Math.abs(G__43293);
})();
cljs.core.reset_BANG_(quad.tree.random_seed_atom,(cljs.core.deref(quad.tree.random_seed_atom) + (1)));

var G__43295 = (min + (xx * (max - min)));
return Math.floor(G__43295);
}));

(quad.tree.random_int.cljs$lang$maxFixedArity = 2);

quad.tree.rand_xy = (function quad$tree$rand_xy(w,h){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand_int(w),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.rand_int(h)], null);
});
quad.tree.random_cells = (function quad$tree$random_cells(n,width,height){
if(typeof n === 'number'){
} else {
throw (new Error("Assert failed: (number? n)"));
}

var _PERCENT_ = (function (){var rands = cljs.core.PersistentHashSet.EMPTY;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rands),n)){
return rands;
} else {
var xy = quad.tree.rand_xy(width,height);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(rands,xy) == null)){
var G__43910 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rands,xy);
var G__43911 = (i + (1));
rands = G__43910;
i = G__43911;
continue;
} else {
var G__43912 = rands;
var G__43913 = i;
rands = G__43912;
i = G__43913;
continue;
}
}
break;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.count(_PERCENT_))){
} else {
throw (new Error("Assert failed: (= n (count %))"));
}

return _PERCENT_;
});
quad.tree.in_QMARK_ = (function quad$tree$in_QMARK_(v,x){
if((v == null)){
return false;
} else {
return cljs.core.some((function (a){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,x);
}),v);
}
});
/**
 * Check if cell is in tree
 */
quad.tree.in_tree_QMARK_ = (function quad$tree$in_tree_QMARK_(p__43296,cell){
var map__43297 = p__43296;
var map__43297__$1 = (((((!((map__43297 == null))))?(((((map__43297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43297):map__43297);
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43297__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var nw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43297__$1,new cljs.core.Keyword(null,"nw","nw",487743706));
var ne = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43297__$1,new cljs.core.Keyword(null,"ne","ne",-1792628743));
var se = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43297__$1,new cljs.core.Keyword(null,"se","se",-1419643721));
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43297__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
if(cljs.core.truth_(quad.tree.in_QMARK_(cells,cell))){
return true;
} else {
if((nw == null)){
return false;
} else {
var or__4185__auto__ = (quad.tree.in_tree_QMARK_.cljs$core$IFn$_invoke$arity$2 ? quad.tree.in_tree_QMARK_.cljs$core$IFn$_invoke$arity$2(nw,cell) : quad.tree.in_tree_QMARK_.call(null,nw,cell));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (quad.tree.in_tree_QMARK_.cljs$core$IFn$_invoke$arity$2 ? quad.tree.in_tree_QMARK_.cljs$core$IFn$_invoke$arity$2(ne,cell) : quad.tree.in_tree_QMARK_.call(null,ne,cell));
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = (quad.tree.in_tree_QMARK_.cljs$core$IFn$_invoke$arity$2 ? quad.tree.in_tree_QMARK_.cljs$core$IFn$_invoke$arity$2(se,cell) : quad.tree.in_tree_QMARK_.call(null,se,cell));
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
return (quad.tree.in_tree_QMARK_.cljs$core$IFn$_invoke$arity$2 ? quad.tree.in_tree_QMARK_.cljs$core$IFn$_invoke$arity$2(sw,cell) : quad.tree.in_tree_QMARK_.call(null,sw,cell));
}
}
}

}
}
});
quad.tree.in_tree_QMARK_.cljs$lang$test = (function (){
var tree = quad.tree.make_tree(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"capacity","capacity",72689734),(4),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null)], null));
try{var values__8921__auto__ = (new cljs.core.List(null,quad.tree.in_tree_QMARK_(quad.tree.insert(tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),cljs.core.list(new cljs.core.Symbol(null,"in-tree?","in-tree?",1029600692,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null))),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),cljs.core.list(new cljs.core.Symbol(null,"in-tree?","in-tree?",1029600692,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null))),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e43299){var t__8952__auto__ = e43299;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),cljs.core.list(new cljs.core.Symbol(null,"in-tree?","in-tree?",1029600692,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null))),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
quad.tree.tree__GT_cells = (function quad$tree$tree__GT_cells(var_args){
var G__43301 = arguments.length;
switch (G__43301) {
case 1:
return quad.tree.tree__GT_cells.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quad.tree.tree__GT_cells.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
quad.tree.tree__GT_cells.cljs$lang$test = (function (){
var tree = quad.tree.make_tree(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"capacity","capacity",72689734),(4),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null)], null));
try{var values__8921__auto___43915 = (new cljs.core.List(null,quad.tree.tree__GT_cells.cljs$core$IFn$_invoke$arity$1(quad.tree.insert(tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null))),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),null,(1),null)),(2),null));
var result__8922__auto___43916 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto___43915);
if(cljs.core.truth_(result__8922__auto___43916)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),new cljs.core.Symbol(null,"tree->cells","tree->cells",-711574941,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto___43915),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),new cljs.core.Symbol(null,"tree->cells","tree->cells",-711574941,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto___43915),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43302){var t__8952__auto___43917 = e43302;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),new cljs.core.Symbol(null,"tree->cells","tree->cells",-711574941,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto___43917,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var r_43918 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(41)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(153),new cljs.core.Keyword(null,"y","y",-1757859776),(46)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(129),new cljs.core.Keyword(null,"y","y",-1757859776),(56)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(122),new cljs.core.Keyword(null,"y","y",-1757859776),(69)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(59),new cljs.core.Keyword(null,"y","y",-1757859776),(72)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(178),new cljs.core.Keyword(null,"y","y",-1757859776),(83)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(95)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(172),new cljs.core.Keyword(null,"y","y",-1757859776),(97)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(54),new cljs.core.Keyword(null,"y","y",-1757859776),(192)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(147),new cljs.core.Keyword(null,"y","y",-1757859776),(194)], null)], null)));
try{var values__8921__auto___43919 = (new cljs.core.List(null,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),quad.tree.tree__GT_cells.cljs$core$IFn$_invoke$arity$1(quad.tree.insert_cells(tree,r_43918)))),(new cljs.core.List(null,r_43918,null,(1),null)),(2),null));
var result__8922__auto___43920 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto___43919);
if(cljs.core.truth_(result__8922__auto___43920)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),cljs.core.list(new cljs.core.Symbol(null,"insert-cells","insert-cells",1789553361,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.Symbol(null,"r","r",1169147337,null)),new cljs.core.Symbol(null,"tree->cells","tree->cells",-711574941,null),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Keyword(null,"x","x",2099068185)),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Keyword(null,"y","y",-1757859776))),new cljs.core.Symbol(null,"r","r",1169147337,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto___43919),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),cljs.core.list(new cljs.core.Symbol(null,"insert-cells","insert-cells",1789553361,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.Symbol(null,"r","r",1169147337,null)),new cljs.core.Symbol(null,"tree->cells","tree->cells",-711574941,null),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Keyword(null,"x","x",2099068185)),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Keyword(null,"y","y",-1757859776))),new cljs.core.Symbol(null,"r","r",1169147337,null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto___43919),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43303){var t__8952__auto___43921 = e43303;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),cljs.core.list(new cljs.core.Symbol(null,"insert-cells","insert-cells",1789553361,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.Symbol(null,"r","r",1169147337,null)),new cljs.core.Symbol(null,"tree->cells","tree->cells",-711574941,null),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Keyword(null,"x","x",2099068185)),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Keyword(null,"y","y",-1757859776))),new cljs.core.Symbol(null,"r","r",1169147337,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto___43921,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var r = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,quad.tree.random_cells((200),(200),(200)))));
try{var values__8921__auto__ = (new cljs.core.List(null,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),quad.tree.tree__GT_cells.cljs$core$IFn$_invoke$arity$1(quad.tree.insert_cells(tree,r)))),(new cljs.core.List(null,r,null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),cljs.core.list(new cljs.core.Symbol(null,"insert-cells","insert-cells",1789553361,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.Symbol(null,"r","r",1169147337,null)),new cljs.core.Symbol(null,"tree->cells","tree->cells",-711574941,null),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Keyword(null,"x","x",2099068185)),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Keyword(null,"y","y",-1757859776))),new cljs.core.Symbol(null,"r","r",1169147337,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),cljs.core.list(new cljs.core.Symbol(null,"insert-cells","insert-cells",1789553361,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.Symbol(null,"r","r",1169147337,null)),new cljs.core.Symbol(null,"tree->cells","tree->cells",-711574941,null),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Keyword(null,"x","x",2099068185)),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Keyword(null,"y","y",-1757859776))),new cljs.core.Symbol(null,"r","r",1169147337,null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e43304){var t__8952__auto__ = e43304;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),cljs.core.list(new cljs.core.Symbol(null,"insert-cells","insert-cells",1789553361,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.Symbol(null,"r","r",1169147337,null)),new cljs.core.Symbol(null,"tree->cells","tree->cells",-711574941,null),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Keyword(null,"x","x",2099068185)),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Keyword(null,"y","y",-1757859776))),new cljs.core.Symbol(null,"r","r",1169147337,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

(quad.tree.tree__GT_cells.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return quad.tree.tree__GT_cells.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.PersistentVector.EMPTY);
}));

(quad.tree.tree__GT_cells.cljs$core$IFn$_invoke$arity$2 = (function (p__43305,acc_cells){
var map__43306 = p__43305;
var map__43306__$1 = (((((!((map__43306 == null))))?(((((map__43306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43306):map__43306);
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43306__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var nw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43306__$1,new cljs.core.Keyword(null,"nw","nw",487743706));
var ne = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43306__$1,new cljs.core.Keyword(null,"ne","ne",-1792628743));
var se = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43306__$1,new cljs.core.Keyword(null,"se","se",-1419643721));
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43306__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
if((nw == null)){
if(cljs.core.empty_QMARK_(cells)){
return acc_cells;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc_cells,cells);
}
} else {
if(cljs.core.empty_QMARK_(cells)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(quad.tree.tree__GT_cells.cljs$core$IFn$_invoke$arity$2(nw,acc_cells),quad.tree.tree__GT_cells.cljs$core$IFn$_invoke$arity$2(ne,acc_cells),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quad.tree.tree__GT_cells.cljs$core$IFn$_invoke$arity$2(se,acc_cells),quad.tree.tree__GT_cells.cljs$core$IFn$_invoke$arity$2(sw,acc_cells)], 0));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cells,quad.tree.tree__GT_cells.cljs$core$IFn$_invoke$arity$2(nw,acc_cells),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quad.tree.tree__GT_cells.cljs$core$IFn$_invoke$arity$2(ne,acc_cells),quad.tree.tree__GT_cells.cljs$core$IFn$_invoke$arity$2(se,acc_cells),quad.tree.tree__GT_cells.cljs$core$IFn$_invoke$arity$2(sw,acc_cells)], 0));

}
}
}));

(quad.tree.tree__GT_cells.cljs$lang$maxFixedArity = 2);

/**
 * Give you a list of all the bounds contained within a tree.
 */
quad.tree.tree__GT_bounds = (function quad$tree$tree__GT_bounds(var_args){
var G__43309 = arguments.length;
switch (G__43309) {
case 1:
return quad.tree.tree__GT_bounds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quad.tree.tree__GT_bounds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
quad.tree.tree__GT_bounds.cljs$lang$test = (function (){
var tree = quad.tree.make_tree(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"capacity","capacity",72689734),(4),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null)], null));
try{var values__8921__auto__ = (new cljs.core.List(null,quad.tree.tree__GT_bounds.cljs$core$IFn$_invoke$arity$1(quad.tree.insert(tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null))),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null)], null),null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),new cljs.core.Symbol(null,"tree->bounds","tree->bounds",817831122,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),new cljs.core.Symbol(null,"tree->bounds","tree->bounds",817831122,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e43310){var t__8952__auto__ = e43310;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),new cljs.core.Symbol(null,"tree->bounds","tree->bounds",817831122,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

(quad.tree.tree__GT_bounds.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return quad.tree.tree__GT_bounds.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.PersistentVector.EMPTY);
}));

(quad.tree.tree__GT_bounds.cljs$core$IFn$_invoke$arity$2 = (function (p__43311,bounds_acc){
var map__43312 = p__43311;
var map__43312__$1 = (((((!((map__43312 == null))))?(((((map__43312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43312):map__43312);
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43312__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var nw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43312__$1,new cljs.core.Keyword(null,"nw","nw",487743706));
var ne = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43312__$1,new cljs.core.Keyword(null,"ne","ne",-1792628743));
var se = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43312__$1,new cljs.core.Keyword(null,"se","se",-1419643721));
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43312__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
if((nw == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bounds_acc,bounds);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bounds], null),quad.tree.tree__GT_bounds.cljs$core$IFn$_invoke$arity$2(nw,bounds_acc),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quad.tree.tree__GT_bounds.cljs$core$IFn$_invoke$arity$2(ne,bounds_acc),quad.tree.tree__GT_bounds.cljs$core$IFn$_invoke$arity$2(se,bounds_acc),quad.tree.tree__GT_bounds.cljs$core$IFn$_invoke$arity$2(sw,bounds_acc)], 0));
}
}));

(quad.tree.tree__GT_bounds.cljs$lang$maxFixedArity = 2);

quad.tree.query = (function quad$tree$query(var_args){
var G__43315 = arguments.length;
switch (G__43315) {
case 2:
return quad.tree.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quad.tree.query.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
quad.tree.query.cljs$lang$test = (function (){
var tree = quad.tree.make_tree(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"capacity","capacity",72689734),(4),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null)], null));
var target = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null);
try{var values__8921__auto___43924 = (new cljs.core.List(null,quad.tree.query.cljs$core$IFn$_invoke$arity$2(quad.tree.insert(quad.tree.insert(quad.tree.insert(quad.tree.insert(quad.tree.insert(quad.tree.insert(quad.tree.insert(tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(11),new cljs.core.Keyword(null,"y","y",-1757859776),(11)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(12),new cljs.core.Keyword(null,"y","y",-1757859776),(11)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(13),new cljs.core.Keyword(null,"y","y",-1757859776),(11)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(14),new cljs.core.Keyword(null,"y","y",-1757859776),(11)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(4)], null)),target),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(4)], null)], null),null,(1),null)),(2),null));
var result__8922__auto___43925 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto___43924);
if(cljs.core.truth_(result__8922__auto___43925)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(11),new cljs.core.Keyword(null,"y","y",-1757859776),(11)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(12),new cljs.core.Keyword(null,"y","y",-1757859776),(11)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(13),new cljs.core.Keyword(null,"y","y",-1757859776),(11)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(14),new cljs.core.Keyword(null,"y","y",-1757859776),(11)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(4)], null)),cljs.core.list(new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Symbol(null,"target","target",1893533248,null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(4)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto___43924),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(11),new cljs.core.Keyword(null,"y","y",-1757859776),(11)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(12),new cljs.core.Keyword(null,"y","y",-1757859776),(11)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(13),new cljs.core.Keyword(null,"y","y",-1757859776),(11)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(14),new cljs.core.Keyword(null,"y","y",-1757859776),(11)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(4)], null)),cljs.core.list(new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Symbol(null,"target","target",1893533248,null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(4)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto___43924),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e43316){var t__8952__auto___43926 = e43316;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(11),new cljs.core.Keyword(null,"y","y",-1757859776),(11)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(12),new cljs.core.Keyword(null,"y","y",-1757859776),(11)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(13),new cljs.core.Keyword(null,"y","y",-1757859776),(11)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(14),new cljs.core.Keyword(null,"y","y",-1757859776),(11)], null)),cljs.core.list(new cljs.core.Symbol(null,"insert","insert",-1367960374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(4)], null)),cljs.core.list(new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Symbol(null,"target","target",1893533248,null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(4)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto___43926,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var test_tree = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"capacity","capacity",72689734),(4),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(512),new cljs.core.Keyword(null,"y","y",-1757859776),(512),new cljs.core.Keyword(null,"width","width",-384071477),(512),new cljs.core.Keyword(null,"height","height",1025178622),(512)], null),new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nw","nw",487743706),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"capacity","capacity",72689734),(4),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(256),new cljs.core.Keyword(null,"y","y",-1757859776),(256),new cljs.core.Keyword(null,"height","height",1025178622),(256),new cljs.core.Keyword(null,"width","width",-384071477),(256)], null),new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nw","nw",487743706),null,new cljs.core.Keyword(null,"ne","ne",-1792628743),null,new cljs.core.Keyword(null,"sw","sw",833113913),null,new cljs.core.Keyword(null,"se","se",-1419643721),null,new cljs.core.Keyword(null,"name","name",1843675177),"nw"], null),new cljs.core.Keyword(null,"ne","ne",-1792628743),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"capacity","capacity",72689734),(4),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(768),new cljs.core.Keyword(null,"y","y",-1757859776),(256),new cljs.core.Keyword(null,"height","height",1025178622),(256),new cljs.core.Keyword(null,"width","width",-384071477),(256)], null),new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(981),new cljs.core.Keyword(null,"y","y",-1757859776),(286)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(665),new cljs.core.Keyword(null,"y","y",-1757859776),(294)], null)], null),new cljs.core.Keyword(null,"nw","nw",487743706),null,new cljs.core.Keyword(null,"ne","ne",-1792628743),null,new cljs.core.Keyword(null,"sw","sw",833113913),null,new cljs.core.Keyword(null,"se","se",-1419643721),null,new cljs.core.Keyword(null,"name","name",1843675177),"ne"], null),new cljs.core.Keyword(null,"sw","sw",833113913),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"capacity","capacity",72689734),(4),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(256),new cljs.core.Keyword(null,"y","y",-1757859776),(768),new cljs.core.Keyword(null,"height","height",1025178622),(256),new cljs.core.Keyword(null,"width","width",-384071477),(256)], null),new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(422),new cljs.core.Keyword(null,"y","y",-1757859776),(557)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(430),new cljs.core.Keyword(null,"y","y",-1757859776),(1014)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(153),new cljs.core.Keyword(null,"y","y",-1757859776),(934)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(144),new cljs.core.Keyword(null,"y","y",-1757859776),(774)], null)], null),new cljs.core.Keyword(null,"nw","nw",487743706),null,new cljs.core.Keyword(null,"ne","ne",-1792628743),null,new cljs.core.Keyword(null,"sw","sw",833113913),null,new cljs.core.Keyword(null,"se","se",-1419643721),null,new cljs.core.Keyword(null,"name","name",1843675177),"sw"], null),new cljs.core.Keyword(null,"se","se",-1419643721),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"capacity","capacity",72689734),(4),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(768),new cljs.core.Keyword(null,"y","y",-1757859776),(768),new cljs.core.Keyword(null,"height","height",1025178622),(256),new cljs.core.Keyword(null,"width","width",-384071477),(256)], null),new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(672),new cljs.core.Keyword(null,"y","y",-1757859776),(1013)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1023),new cljs.core.Keyword(null,"y","y",-1757859776),(549)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(861),new cljs.core.Keyword(null,"y","y",-1757859776),(931)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(984),new cljs.core.Keyword(null,"y","y",-1757859776),(769)], null)], null),new cljs.core.Keyword(null,"nw","nw",487743706),null,new cljs.core.Keyword(null,"ne","ne",-1792628743),null,new cljs.core.Keyword(null,"sw","sw",833113913),null,new cljs.core.Keyword(null,"se","se",-1419643721),null,new cljs.core.Keyword(null,"name","name",1843675177),"se"], null),new cljs.core.Keyword(null,"name","name",1843675177),"start"], null);
try{var values__8921__auto__ = (new cljs.core.List(null,quad.tree.query.cljs$core$IFn$_invoke$arity$2(test_tree,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(295),new cljs.core.Keyword(null,"y","y",-1757859776),(461),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(422),new cljs.core.Keyword(null,"y","y",-1757859776),(557)], null)], null),null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Symbol(null,"test-tree","test-tree",1069299966,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(295),new cljs.core.Keyword(null,"y","y",-1757859776),(461),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(422),new cljs.core.Keyword(null,"y","y",-1757859776),(557)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Symbol(null,"test-tree","test-tree",1069299966,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(295),new cljs.core.Keyword(null,"y","y",-1757859776),(461),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(422),new cljs.core.Keyword(null,"y","y",-1757859776),(557)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e43317){var t__8952__auto__ = e43317;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Symbol(null,"test-tree","test-tree",1069299966,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(295),new cljs.core.Keyword(null,"y","y",-1757859776),(461),new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(422),new cljs.core.Keyword(null,"y","y",-1757859776),(557)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

(quad.tree.query.cljs$core$IFn$_invoke$arity$2 = (function (tree,target_bounds){
return quad.tree.query.cljs$core$IFn$_invoke$arity$3(tree,target_bounds,cljs.core.PersistentVector.EMPTY);
}));

(quad.tree.query.cljs$core$IFn$_invoke$arity$3 = (function (p__43318,target_bounds,found){
var map__43319 = p__43318;
var map__43319__$1 = (((((!((map__43319 == null))))?(((((map__43319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43319):map__43319);
var nw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43319__$1,new cljs.core.Keyword(null,"nw","nw",487743706));
var ne = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43319__$1,new cljs.core.Keyword(null,"ne","ne",-1792628743));
var se = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43319__$1,new cljs.core.Keyword(null,"se","se",-1419643721));
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43319__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43319__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43319__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
if((!(quad.tree.intersects_QMARK_(target_bounds,bounds)))){
return found;
} else {
if((nw == null)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(found,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (c){
return quad.tree.in_bounds_QMARK_(target_bounds,c);
}),cells));
} else {
var in_bounds = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (c){
return quad.tree.in_bounds_QMARK_(target_bounds,c);
}),cells);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(in_bounds,quad.tree.query.cljs$core$IFn$_invoke$arity$3(nw,target_bounds,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quad.tree.query.cljs$core$IFn$_invoke$arity$3(ne,target_bounds,cljs.core.PersistentVector.EMPTY),quad.tree.query.cljs$core$IFn$_invoke$arity$3(se,target_bounds,cljs.core.PersistentVector.EMPTY),quad.tree.query.cljs$core$IFn$_invoke$arity$3(sw,target_bounds,cljs.core.PersistentVector.EMPTY)], 0));

}
}
}));

(quad.tree.query.cljs$lang$maxFixedArity = 3);

quad.tree.masks = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16711935),(252645135),(858993459),(1431655765)], null);
quad.tree.shifts = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(4),(2),(1)], null);
quad.tree.shifter = (function quad$tree$shifter(v){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc_v,p__43321){
var vec__43322 = p__43321;
var mask = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43322,(0),null);
var shift = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43322,(1),null);
return ((acc_v | (acc_v << shift)) & mask);
}),v,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,quad.tree.masks,quad.tree.shifts));
});
quad.tree.xy__GT_z_order = (function quad$tree$xy__GT_z_order(p__43325){
var map__43326 = p__43325;
var map__43326__$1 = (((((!((map__43326 == null))))?(((((map__43326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43326):map__43326);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43326__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43326__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (quad.tree.shifter(x) | (quad.tree.shifter(y) << (1)));
});
quad.tree.sort_cells_by_z_order = (function quad$tree$sort_cells_by_z_order(cells){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"z-ord","z-ord",-834382610),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (cell){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"z-ord","z-ord",-834382610),quad.tree.xy__GT_z_order(cell));
}),cells));
});

//# sourceMappingURL=quad.tree.js.map
