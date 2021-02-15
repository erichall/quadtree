goog.provide('quad.quad_worker');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('quad.util');
goog.require('quad.tree');
quad.quad_worker.post_msg = (function quad$quad_worker$post_msg(msg){
return postMessage(msg);
});
quad.quad_worker.init = (function quad$quad_worker$init(){
var msg_chan = quad.util.listen.cljs$core$IFn$_invoke$arity$2(self,"message");
var c__25764__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25765__auto__ = (function (){var switch__25637__auto__ = (function (state_65798){
var state_val_65799 = (state_65798[(1)]);
if((state_val_65799 === (7))){
var inst_65649 = (state_65798[(2)]);
var state_65798__$1 = state_65798;
if(cljs.core.truth_(inst_65649)){
var statearr_65803_65915 = state_65798__$1;
(statearr_65803_65915[(1)] = (11));

} else {
var statearr_65804_65916 = state_65798__$1;
(statearr_65804_65916[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (20))){
var inst_65656 = (state_65798[(7)]);
var inst_65674 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_65656);
var state_65798__$1 = state_65798;
var statearr_65805_65917 = state_65798__$1;
(statearr_65805_65917[(2)] = inst_65674);

(statearr_65805_65917[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (27))){
var inst_65690 = (state_65798[(8)]);
var inst_65734 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"incremental-random-cells","incremental-random-cells",-1913464725),inst_65690);
var state_65798__$1 = state_65798;
if(inst_65734){
var statearr_65806_65918 = state_65798__$1;
(statearr_65806_65918[(1)] = (34));

} else {
var statearr_65807_65919 = state_65798__$1;
(statearr_65807_65919[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (1))){
var state_65798__$1 = state_65798;
var statearr_65809_65920 = state_65798__$1;
(statearr_65809_65920[(2)] = null);

(statearr_65809_65920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (24))){
var inst_65690 = (state_65798[(8)]);
var inst_65706 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"batch-random-cells","batch-random-cells",-2044520958),inst_65690);
var state_65798__$1 = state_65798;
if(inst_65706){
var statearr_65812_65921 = state_65798__$1;
(statearr_65812_65921[(1)] = (26));

} else {
var statearr_65813_65922 = state_65798__$1;
(statearr_65813_65922[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (39))){
var state_65798__$1 = state_65798;
var statearr_65814_65923 = state_65798__$1;
(statearr_65814_65923[(2)] = null);

(statearr_65814_65923[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (4))){
var inst_65631 = (state_65798[(9)]);
var inst_65629 = (state_65798[(2)]);
var inst_65630 = (inst_65629["data"]);
var inst_65631__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_65630,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var inst_65633 = (inst_65631__$1 == null);
var inst_65634 = cljs.core.not(inst_65633);
var state_65798__$1 = (function (){var statearr_65815 = state_65798;
(statearr_65815[(9)] = inst_65631__$1);

return statearr_65815;
})();
if(inst_65634){
var statearr_65816_65924 = state_65798__$1;
(statearr_65816_65924[(1)] = (5));

} else {
var statearr_65817_65925 = state_65798__$1;
(statearr_65817_65925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (15))){
var state_65798__$1 = state_65798;
var statearr_65820_65926 = state_65798__$1;
(statearr_65820_65926[(2)] = false);

(statearr_65820_65926[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (21))){
var inst_65656 = (state_65798[(7)]);
var state_65798__$1 = state_65798;
var statearr_65822_65927 = state_65798__$1;
(statearr_65822_65927[(2)] = inst_65656);

(statearr_65822_65927[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (31))){
var state_65798__$1 = state_65798;
var statearr_65824_65928 = state_65798__$1;
(statearr_65824_65928[(2)] = null);

(statearr_65824_65928[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (32))){
var inst_65711 = (state_65798[(10)]);
var inst_65710 = (state_65798[(11)]);
var inst_65716 = cljs.core.first(inst_65711);
var inst_65717 = quad.tree.insert_cells(inst_65710,inst_65716);
var inst_65718 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_65719 = [new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.Keyword(null,"cells","cells",-985166822)];
var inst_65720 = cljs.core.first(inst_65711);
var inst_65721 = [inst_65717,inst_65720];
var inst_65722 = cljs.core.PersistentHashMap.fromArrays(inst_65719,inst_65721);
var inst_65723 = [new cljs.core.Keyword(null,"new-tree","new-tree",-1487310161),inst_65722];
var inst_65724 = cljs.core.PersistentHashMap.fromArrays(inst_65718,inst_65723);
var inst_65725 = cljs.core.clj__GT_js(inst_65724);
var inst_65726 = quad.quad_worker.post_msg(inst_65725);
var inst_65727 = cljs.core.rest(inst_65711);
var inst_65710__$1 = inst_65717;
var inst_65711__$1 = inst_65727;
var state_65798__$1 = (function (){var statearr_65829 = state_65798;
(statearr_65829[(10)] = inst_65711__$1);

(statearr_65829[(11)] = inst_65710__$1);

(statearr_65829[(12)] = inst_65726);

return statearr_65829;
})();
var statearr_65830_65929 = state_65798__$1;
(statearr_65830_65929[(2)] = null);

(statearr_65830_65929[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (40))){
var inst_65737 = (state_65798[(13)]);
var inst_65738 = (state_65798[(14)]);
var inst_65745 = cljs.core.first(inst_65738);
var inst_65746 = quad.tree.insert(inst_65737,inst_65745);
var inst_65748 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_65749 = [new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.Keyword(null,"cells","cells",-985166822)];
var inst_65750 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65751 = cljs.core.first(inst_65738);
var inst_65752 = [inst_65751];
var inst_65753 = (new cljs.core.PersistentVector(null,1,(5),inst_65750,inst_65752,null));
var inst_65754 = [inst_65746,inst_65753];
var inst_65755 = cljs.core.PersistentHashMap.fromArrays(inst_65749,inst_65754);
var inst_65756 = [new cljs.core.Keyword(null,"new-tree","new-tree",-1487310161),inst_65755];
var inst_65757 = cljs.core.PersistentHashMap.fromArrays(inst_65748,inst_65756);
var inst_65758 = cljs.core.clj__GT_js(inst_65757);
var inst_65759 = quad.quad_worker.post_msg(inst_65758);
var inst_65760 = cljs.core.rest(inst_65738);
var inst_65737__$1 = inst_65746;
var inst_65738__$1 = inst_65760;
var state_65798__$1 = (function (){var statearr_65835 = state_65798;
(statearr_65835[(13)] = inst_65737__$1);

(statearr_65835[(14)] = inst_65738__$1);

(statearr_65835[(15)] = inst_65759);

return statearr_65835;
})();
var statearr_65838_65930 = state_65798__$1;
(statearr_65838_65930[(2)] = null);

(statearr_65838_65930[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (33))){
var inst_65730 = (state_65798[(2)]);
var state_65798__$1 = state_65798;
var statearr_65841_65931 = state_65798__$1;
(statearr_65841_65931[(2)] = inst_65730);

(statearr_65841_65931[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (13))){
var inst_65656 = (state_65798[(7)]);
var inst_65654 = (state_65798[(2)]);
var inst_65655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65654,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_65656__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65654,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_65658 = (inst_65656__$1 == null);
var inst_65659 = cljs.core.not(inst_65658);
var state_65798__$1 = (function (){var statearr_65842 = state_65798;
(statearr_65842[(7)] = inst_65656__$1);

(statearr_65842[(16)] = inst_65655);

return statearr_65842;
})();
if(inst_65659){
var statearr_65843_65932 = state_65798__$1;
(statearr_65843_65932[(1)] = (14));

} else {
var statearr_65844_65933 = state_65798__$1;
(statearr_65844_65933[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (22))){
var inst_65655 = (state_65798[(16)]);
var inst_65690 = (state_65798[(8)]);
var inst_65677 = (state_65798[(2)]);
var inst_65678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65677,new cljs.core.Keyword(null,"n","n",562130025));
var inst_65679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65677,new cljs.core.Keyword(null,"height","height",1025178622));
var inst_65680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65677,new cljs.core.Keyword(null,"width","width",-384071477));
var inst_65681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65677,new cljs.core.Keyword(null,"tree","tree",-196312028));
var inst_65683 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_65655);
var inst_65684 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Worker got name :: ",inst_65683], 0));
var inst_65690__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_65655);
var inst_65691 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"query-rect","query-rect",-286613358),inst_65690__$1);
var state_65798__$1 = (function (){var statearr_65845 = state_65798;
(statearr_65845[(17)] = inst_65684);

(statearr_65845[(18)] = inst_65681);

(statearr_65845[(19)] = inst_65679);

(statearr_65845[(8)] = inst_65690__$1);

(statearr_65845[(20)] = inst_65680);

(statearr_65845[(21)] = inst_65678);

return statearr_65845;
})();
if(inst_65691){
var statearr_65846_65934 = state_65798__$1;
(statearr_65846_65934[(1)] = (23));

} else {
var statearr_65848_65935 = state_65798__$1;
(statearr_65848_65935[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (36))){
var inst_65786 = (state_65798[(2)]);
var state_65798__$1 = state_65798;
var statearr_65851_65936 = state_65798__$1;
(statearr_65851_65936[(2)] = inst_65786);

(statearr_65851_65936[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (41))){
var inst_65763 = (state_65798[(2)]);
var state_65798__$1 = state_65798;
var statearr_65852_65937 = state_65798__$1;
(statearr_65852_65937[(2)] = inst_65763);

(statearr_65852_65937[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (43))){
var inst_65690 = (state_65798[(8)]);
var inst_65780 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_65690)].join('');
var inst_65781 = (new Error(inst_65780));
var inst_65782 = (function(){throw inst_65781})();
var state_65798__$1 = state_65798;
var statearr_65856_65938 = state_65798__$1;
(statearr_65856_65938[(2)] = inst_65782);

(statearr_65856_65938[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (29))){
var inst_65711 = (state_65798[(10)]);
var inst_65713 = cljs.core.empty_QMARK_(inst_65711);
var state_65798__$1 = state_65798;
if(inst_65713){
var statearr_65857_65939 = state_65798__$1;
(statearr_65857_65939[(1)] = (31));

} else {
var statearr_65858_65940 = state_65798__$1;
(statearr_65858_65940[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (44))){
var inst_65784 = (state_65798[(2)]);
var state_65798__$1 = state_65798;
var statearr_65862_65941 = state_65798__$1;
(statearr_65862_65941[(2)] = inst_65784);

(statearr_65862_65941[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (6))){
var state_65798__$1 = state_65798;
var statearr_65863_65942 = state_65798__$1;
(statearr_65863_65942[(2)] = false);

(statearr_65863_65942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (28))){
var inst_65788 = (state_65798[(2)]);
var state_65798__$1 = state_65798;
var statearr_65864_65943 = state_65798__$1;
(statearr_65864_65943[(2)] = inst_65788);

(statearr_65864_65943[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (25))){
var inst_65790 = (state_65798[(2)]);
var state_65798__$1 = (function (){var statearr_65865 = state_65798;
(statearr_65865[(22)] = inst_65790);

return statearr_65865;
})();
var statearr_65866_65944 = state_65798__$1;
(statearr_65866_65944[(2)] = null);

(statearr_65866_65944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (34))){
var inst_65681 = (state_65798[(18)]);
var inst_65679 = (state_65798[(19)]);
var inst_65680 = (state_65798[(20)]);
var inst_65678 = (state_65798[(21)]);
var inst_65736 = quad.tree.random_cells(inst_65678,inst_65680,inst_65679);
var inst_65737 = inst_65681;
var inst_65738 = inst_65736;
var state_65798__$1 = (function (){var statearr_65867 = state_65798;
(statearr_65867[(13)] = inst_65737);

(statearr_65867[(14)] = inst_65738);

return statearr_65867;
})();
var statearr_65869_65945 = state_65798__$1;
(statearr_65869_65945[(2)] = null);

(statearr_65869_65945[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (17))){
var state_65798__$1 = state_65798;
var statearr_65878_65946 = state_65798__$1;
(statearr_65878_65946[(2)] = true);

(statearr_65878_65946[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (3))){
var inst_65794 = (state_65798[(2)]);
var state_65798__$1 = state_65798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65798__$1,inst_65794);
} else {
if((state_val_65799 === (12))){
var inst_65631 = (state_65798[(9)]);
var state_65798__$1 = state_65798;
var statearr_65880_65947 = state_65798__$1;
(statearr_65880_65947[(2)] = inst_65631);

(statearr_65880_65947[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (2))){
var state_65798__$1 = state_65798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65798__$1,(4),msg_chan);
} else {
if((state_val_65799 === (23))){
var inst_65656 = (state_65798[(7)]);
var inst_65693 = new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(inst_65656);
var inst_65694 = new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(inst_65656);
var inst_65695 = quad.tree.query.cljs$core$IFn$_invoke$arity$2(inst_65693,inst_65694);
var inst_65696 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_65697 = new cljs.core.Keyword(null,"cb-name","cb-name",980535907).cljs$core$IFn$_invoke$arity$1(inst_65656);
var inst_65698 = [new cljs.core.Keyword(null,"cells-in-rect","cells-in-rect",-1670186043)];
var inst_65699 = [inst_65695];
var inst_65700 = cljs.core.PersistentHashMap.fromArrays(inst_65698,inst_65699);
var inst_65701 = [inst_65697,inst_65700];
var inst_65702 = cljs.core.PersistentHashMap.fromArrays(inst_65696,inst_65701);
var inst_65703 = cljs.core.clj__GT_js(inst_65702);
var inst_65704 = quad.quad_worker.post_msg(inst_65703);
var state_65798__$1 = state_65798;
var statearr_65884_65950 = state_65798__$1;
(statearr_65884_65950[(2)] = inst_65704);

(statearr_65884_65950[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (35))){
var inst_65690 = (state_65798[(8)]);
var inst_65767 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"random-cells","random-cells",-1343560544),inst_65690);
var state_65798__$1 = state_65798;
if(inst_65767){
var statearr_65886_65951 = state_65798__$1;
(statearr_65886_65951[(1)] = (42));

} else {
var statearr_65887_65952 = state_65798__$1;
(statearr_65887_65952[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (19))){
var inst_65669 = (state_65798[(2)]);
var state_65798__$1 = state_65798;
var statearr_65890_65953 = state_65798__$1;
(statearr_65890_65953[(2)] = inst_65669);

(statearr_65890_65953[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (11))){
var inst_65631 = (state_65798[(9)]);
var inst_65651 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_65631);
var state_65798__$1 = state_65798;
var statearr_65891_65955 = state_65798__$1;
(statearr_65891_65955[(2)] = inst_65651);

(statearr_65891_65955[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (9))){
var state_65798__$1 = state_65798;
var statearr_65893_65957 = state_65798__$1;
(statearr_65893_65957[(2)] = false);

(statearr_65893_65957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (5))){
var inst_65631 = (state_65798[(9)]);
var inst_65638 = inst_65631.cljs$lang$protocol_mask$partition0$;
var inst_65639 = (inst_65638 & (64));
var inst_65640 = inst_65631.cljs$core$ISeq$;
var inst_65641 = (cljs.core.PROTOCOL_SENTINEL === inst_65640);
var inst_65642 = ((inst_65639) || (inst_65641));
var state_65798__$1 = state_65798;
if(cljs.core.truth_(inst_65642)){
var statearr_65894_65958 = state_65798__$1;
(statearr_65894_65958[(1)] = (8));

} else {
var statearr_65895_65959 = state_65798__$1;
(statearr_65895_65959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (14))){
var inst_65656 = (state_65798[(7)]);
var inst_65661 = inst_65656.cljs$lang$protocol_mask$partition0$;
var inst_65662 = (inst_65661 & (64));
var inst_65663 = inst_65656.cljs$core$ISeq$;
var inst_65664 = (cljs.core.PROTOCOL_SENTINEL === inst_65663);
var inst_65665 = ((inst_65662) || (inst_65664));
var state_65798__$1 = state_65798;
if(cljs.core.truth_(inst_65665)){
var statearr_65896_65960 = state_65798__$1;
(statearr_65896_65960[(1)] = (17));

} else {
var statearr_65897_65961 = state_65798__$1;
(statearr_65897_65961[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (26))){
var inst_65681 = (state_65798[(18)]);
var inst_65679 = (state_65798[(19)]);
var inst_65680 = (state_65798[(20)]);
var inst_65678 = (state_65798[(21)]);
var inst_65708 = quad.tree.random_cells(inst_65678,inst_65680,inst_65679);
var inst_65709 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((50),inst_65708);
var inst_65710 = inst_65681;
var inst_65711 = inst_65709;
var state_65798__$1 = (function (){var statearr_65898 = state_65798;
(statearr_65898[(10)] = inst_65711);

(statearr_65898[(11)] = inst_65710);

return statearr_65898;
})();
var statearr_65899_65962 = state_65798__$1;
(statearr_65899_65962[(2)] = null);

(statearr_65899_65962[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (16))){
var inst_65672 = (state_65798[(2)]);
var state_65798__$1 = state_65798;
if(cljs.core.truth_(inst_65672)){
var statearr_65900_65963 = state_65798__$1;
(statearr_65900_65963[(1)] = (20));

} else {
var statearr_65901_65964 = state_65798__$1;
(statearr_65901_65964[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (38))){
var inst_65765 = (state_65798[(2)]);
var state_65798__$1 = state_65798;
var statearr_65902_65965 = state_65798__$1;
(statearr_65902_65965[(2)] = inst_65765);

(statearr_65902_65965[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (30))){
var inst_65732 = (state_65798[(2)]);
var state_65798__$1 = state_65798;
var statearr_65903_65966 = state_65798__$1;
(statearr_65903_65966[(2)] = inst_65732);

(statearr_65903_65966[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (10))){
var inst_65646 = (state_65798[(2)]);
var state_65798__$1 = state_65798;
var statearr_65905_65967 = state_65798__$1;
(statearr_65905_65967[(2)] = inst_65646);

(statearr_65905_65967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (18))){
var state_65798__$1 = state_65798;
var statearr_65906_65968 = state_65798__$1;
(statearr_65906_65968[(2)] = false);

(statearr_65906_65968[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (42))){
var inst_65681 = (state_65798[(18)]);
var inst_65679 = (state_65798[(19)]);
var inst_65680 = (state_65798[(20)]);
var inst_65678 = (state_65798[(21)]);
var inst_65769 = quad.tree.random_cells(inst_65678,inst_65680,inst_65679);
var inst_65770 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_65771 = [new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.Keyword(null,"cells","cells",-985166822)];
var inst_65772 = quad.tree.insert_cells(inst_65681,inst_65769);
var inst_65773 = [inst_65772,inst_65769];
var inst_65774 = cljs.core.PersistentHashMap.fromArrays(inst_65771,inst_65773);
var inst_65775 = [new cljs.core.Keyword(null,"new-tree","new-tree",-1487310161),inst_65774];
var inst_65776 = cljs.core.PersistentHashMap.fromArrays(inst_65770,inst_65775);
var inst_65777 = cljs.core.clj__GT_js(inst_65776);
var inst_65778 = quad.quad_worker.post_msg(inst_65777);
var state_65798__$1 = state_65798;
var statearr_65907_65969 = state_65798__$1;
(statearr_65907_65969[(2)] = inst_65778);

(statearr_65907_65969[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (37))){
var inst_65738 = (state_65798[(14)]);
var inst_65740 = cljs.core.empty_QMARK_(inst_65738);
var state_65798__$1 = state_65798;
if(inst_65740){
var statearr_65908_65970 = state_65798__$1;
(statearr_65908_65970[(1)] = (39));

} else {
var statearr_65909_65971 = state_65798__$1;
(statearr_65909_65971[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65799 === (8))){
var state_65798__$1 = state_65798;
var statearr_65910_65972 = state_65798__$1;
(statearr_65910_65972[(2)] = true);

(statearr_65910_65972[(1)] = (10));


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
});
return (function() {
var quad$quad_worker$init_$_state_machine__25638__auto__ = null;
var quad$quad_worker$init_$_state_machine__25638__auto____0 = (function (){
var statearr_65911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65911[(0)] = quad$quad_worker$init_$_state_machine__25638__auto__);

(statearr_65911[(1)] = (1));

return statearr_65911;
});
var quad$quad_worker$init_$_state_machine__25638__auto____1 = (function (state_65798){
while(true){
var ret_value__25639__auto__ = (function (){try{while(true){
var result__25640__auto__ = switch__25637__auto__(state_65798);
if(cljs.core.keyword_identical_QMARK_(result__25640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25640__auto__;
}
break;
}
}catch (e65912){if((e65912 instanceof Object)){
var ex__25641__auto__ = e65912;
var statearr_65913_65973 = state_65798;
(statearr_65913_65973[(5)] = ex__25641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65912;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65974 = state_65798;
state_65798 = G__65974;
continue;
} else {
return ret_value__25639__auto__;
}
break;
}
});
quad$quad_worker$init_$_state_machine__25638__auto__ = function(state_65798){
switch(arguments.length){
case 0:
return quad$quad_worker$init_$_state_machine__25638__auto____0.call(this);
case 1:
return quad$quad_worker$init_$_state_machine__25638__auto____1.call(this,state_65798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
quad$quad_worker$init_$_state_machine__25638__auto__.cljs$core$IFn$_invoke$arity$0 = quad$quad_worker$init_$_state_machine__25638__auto____0;
quad$quad_worker$init_$_state_machine__25638__auto__.cljs$core$IFn$_invoke$arity$1 = quad$quad_worker$init_$_state_machine__25638__auto____1;
return quad$quad_worker$init_$_state_machine__25638__auto__;
})()
})();
var state__25766__auto__ = (function (){var statearr_65914 = (f__25765__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25765__auto__.cljs$core$IFn$_invoke$arity$0() : f__25765__auto__.call(null));
(statearr_65914[(6)] = c__25764__auto__);

return statearr_65914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25766__auto__);
}));

return c__25764__auto__;
});

//# sourceMappingURL=quad.quad_worker.js.map
