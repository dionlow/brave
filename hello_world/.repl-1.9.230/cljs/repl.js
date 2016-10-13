// Compiled by ClojureScript 1.9.230 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__6723){
var map__6748 = p__6723;
var map__6748__$1 = ((((!((map__6748 == null)))?((((map__6748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6748):map__6748);
var m = map__6748__$1;
var n = cljs.core.get.call(null,map__6748__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__6748__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6750_6772 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6751_6773 = null;
var count__6752_6774 = (0);
var i__6753_6775 = (0);
while(true){
if((i__6753_6775 < count__6752_6774)){
var f_6776 = cljs.core._nth.call(null,chunk__6751_6773,i__6753_6775);
cljs.core.println.call(null,"  ",f_6776);

var G__6777 = seq__6750_6772;
var G__6778 = chunk__6751_6773;
var G__6779 = count__6752_6774;
var G__6780 = (i__6753_6775 + (1));
seq__6750_6772 = G__6777;
chunk__6751_6773 = G__6778;
count__6752_6774 = G__6779;
i__6753_6775 = G__6780;
continue;
} else {
var temp__4657__auto___6781 = cljs.core.seq.call(null,seq__6750_6772);
if(temp__4657__auto___6781){
var seq__6750_6782__$1 = temp__4657__auto___6781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6750_6782__$1)){
var c__3496__auto___6783 = cljs.core.chunk_first.call(null,seq__6750_6782__$1);
var G__6784 = cljs.core.chunk_rest.call(null,seq__6750_6782__$1);
var G__6785 = c__3496__auto___6783;
var G__6786 = cljs.core.count.call(null,c__3496__auto___6783);
var G__6787 = (0);
seq__6750_6772 = G__6784;
chunk__6751_6773 = G__6785;
count__6752_6774 = G__6786;
i__6753_6775 = G__6787;
continue;
} else {
var f_6788 = cljs.core.first.call(null,seq__6750_6782__$1);
cljs.core.println.call(null,"  ",f_6788);

var G__6789 = cljs.core.next.call(null,seq__6750_6782__$1);
var G__6790 = null;
var G__6791 = (0);
var G__6792 = (0);
seq__6750_6772 = G__6789;
chunk__6751_6773 = G__6790;
count__6752_6774 = G__6791;
i__6753_6775 = G__6792;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_6793 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3113__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3113__auto__)){
return or__3113__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_6793);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_6793)))?cljs.core.second.call(null,arglists_6793):arglists_6793));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6754_6794 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6755_6795 = null;
var count__6756_6796 = (0);
var i__6757_6797 = (0);
while(true){
if((i__6757_6797 < count__6756_6796)){
var vec__6758_6798 = cljs.core._nth.call(null,chunk__6755_6795,i__6757_6797);
var name_6799 = cljs.core.nth.call(null,vec__6758_6798,(0),null);
var map__6761_6800 = cljs.core.nth.call(null,vec__6758_6798,(1),null);
var map__6761_6801__$1 = ((((!((map__6761_6800 == null)))?((((map__6761_6800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6761_6800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6761_6800):map__6761_6800);
var doc_6802 = cljs.core.get.call(null,map__6761_6801__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_6803 = cljs.core.get.call(null,map__6761_6801__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_6799);

cljs.core.println.call(null," ",arglists_6803);

if(cljs.core.truth_(doc_6802)){
cljs.core.println.call(null," ",doc_6802);
} else {
}

var G__6804 = seq__6754_6794;
var G__6805 = chunk__6755_6795;
var G__6806 = count__6756_6796;
var G__6807 = (i__6757_6797 + (1));
seq__6754_6794 = G__6804;
chunk__6755_6795 = G__6805;
count__6756_6796 = G__6806;
i__6757_6797 = G__6807;
continue;
} else {
var temp__4657__auto___6808 = cljs.core.seq.call(null,seq__6754_6794);
if(temp__4657__auto___6808){
var seq__6754_6809__$1 = temp__4657__auto___6808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6754_6809__$1)){
var c__3496__auto___6810 = cljs.core.chunk_first.call(null,seq__6754_6809__$1);
var G__6811 = cljs.core.chunk_rest.call(null,seq__6754_6809__$1);
var G__6812 = c__3496__auto___6810;
var G__6813 = cljs.core.count.call(null,c__3496__auto___6810);
var G__6814 = (0);
seq__6754_6794 = G__6811;
chunk__6755_6795 = G__6812;
count__6756_6796 = G__6813;
i__6757_6797 = G__6814;
continue;
} else {
var vec__6763_6815 = cljs.core.first.call(null,seq__6754_6809__$1);
var name_6816 = cljs.core.nth.call(null,vec__6763_6815,(0),null);
var map__6766_6817 = cljs.core.nth.call(null,vec__6763_6815,(1),null);
var map__6766_6818__$1 = ((((!((map__6766_6817 == null)))?((((map__6766_6817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6766_6817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6766_6817):map__6766_6817);
var doc_6819 = cljs.core.get.call(null,map__6766_6818__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_6820 = cljs.core.get.call(null,map__6766_6818__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_6816);

cljs.core.println.call(null," ",arglists_6820);

if(cljs.core.truth_(doc_6819)){
cljs.core.println.call(null," ",doc_6819);
} else {
}

var G__6821 = cljs.core.next.call(null,seq__6754_6809__$1);
var G__6822 = null;
var G__6823 = (0);
var G__6824 = (0);
seq__6754_6794 = G__6821;
chunk__6755_6795 = G__6822;
count__6756_6796 = G__6823;
i__6757_6797 = G__6824;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__6768 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__6769 = null;
var count__6770 = (0);
var i__6771 = (0);
while(true){
if((i__6771 < count__6770)){
var role = cljs.core._nth.call(null,chunk__6769,i__6771);
var temp__4657__auto___6825__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___6825__$1)){
var spec_6826 = temp__4657__auto___6825__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_6826));
} else {
}

var G__6827 = seq__6768;
var G__6828 = chunk__6769;
var G__6829 = count__6770;
var G__6830 = (i__6771 + (1));
seq__6768 = G__6827;
chunk__6769 = G__6828;
count__6770 = G__6829;
i__6771 = G__6830;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__6768);
if(temp__4657__auto____$1){
var seq__6768__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6768__$1)){
var c__3496__auto__ = cljs.core.chunk_first.call(null,seq__6768__$1);
var G__6831 = cljs.core.chunk_rest.call(null,seq__6768__$1);
var G__6832 = c__3496__auto__;
var G__6833 = cljs.core.count.call(null,c__3496__auto__);
var G__6834 = (0);
seq__6768 = G__6831;
chunk__6769 = G__6832;
count__6770 = G__6833;
i__6771 = G__6834;
continue;
} else {
var role = cljs.core.first.call(null,seq__6768__$1);
var temp__4657__auto___6835__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___6835__$2)){
var spec_6836 = temp__4657__auto___6835__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_6836));
} else {
}

var G__6837 = cljs.core.next.call(null,seq__6768__$1);
var G__6838 = null;
var G__6839 = (0);
var G__6840 = (0);
seq__6768 = G__6837;
chunk__6769 = G__6838;
count__6770 = G__6839;
i__6771 = G__6840;
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
