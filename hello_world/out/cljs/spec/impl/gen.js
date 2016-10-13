// Compiled by ClojureScript 1.9.230 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__3343__auto__,writer__3344__auto__,opt__3345__auto__){
return cljs.core._write.call(null,writer__3344__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__3647__auto__ = [];
var len__3644__auto___167 = arguments.length;
var i__3645__auto___168 = (0);
while(true){
if((i__3645__auto___168 < len__3644__auto___167)){
args__3647__auto__.push((arguments[i__3645__auto___168]));

var G__169 = (i__3645__auto___168 + (1));
i__3645__auto___168 = G__169;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq166){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__3647__auto__ = [];
var len__3644__auto___171 = arguments.length;
var i__3645__auto___172 = (0);
while(true){
if((i__3645__auto___172 < len__3644__auto___171)){
args__3647__auto__.push((arguments[i__3645__auto___172]));

var G__173 = (i__3645__auto___172 + (1));
i__3645__auto___172 = G__173;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq170){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq170));
});

var g_QMARK__174 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_175 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__174){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__174))
,null));
var mkg_176 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__174,g_175){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__174,g_175))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__174,g_175,mkg_176){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__174).call(null,x);
});})(g_QMARK__174,g_175,mkg_176))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__174,g_175,mkg_176){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_176).call(null,gfn);
});})(g_QMARK__174,g_175,mkg_176))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__174,g_175,mkg_176){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_175).call(null,generator);
});})(g_QMARK__174,g_175,mkg_176))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__5924__auto___195 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__5924__auto___195){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__3647__auto__ = [];
var len__3644__auto___196 = arguments.length;
var i__3645__auto___197 = (0);
while(true){
if((i__3645__auto___197 < len__3644__auto___196)){
args__3647__auto__.push((arguments[i__3645__auto___197]));

var G__198 = (i__3645__auto___197 + (1));
i__3645__auto___197 = G__198;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___195))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___195){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___195),args);
});})(g__5924__auto___195))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__5924__auto___195){
return (function (seq177){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq177));
});})(g__5924__auto___195))
;


var g__5924__auto___199 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__5924__auto___199){
return (function cljs$spec$impl$gen$list(var_args){
var args__3647__auto__ = [];
var len__3644__auto___200 = arguments.length;
var i__3645__auto___201 = (0);
while(true){
if((i__3645__auto___201 < len__3644__auto___200)){
args__3647__auto__.push((arguments[i__3645__auto___201]));

var G__202 = (i__3645__auto___201 + (1));
i__3645__auto___201 = G__202;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___199))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___199){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___199),args);
});})(g__5924__auto___199))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__5924__auto___199){
return (function (seq178){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq178));
});})(g__5924__auto___199))
;


var g__5924__auto___203 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__5924__auto___203){
return (function cljs$spec$impl$gen$map(var_args){
var args__3647__auto__ = [];
var len__3644__auto___204 = arguments.length;
var i__3645__auto___205 = (0);
while(true){
if((i__3645__auto___205 < len__3644__auto___204)){
args__3647__auto__.push((arguments[i__3645__auto___205]));

var G__206 = (i__3645__auto___205 + (1));
i__3645__auto___205 = G__206;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___203))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___203){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___203),args);
});})(g__5924__auto___203))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__5924__auto___203){
return (function (seq179){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq179));
});})(g__5924__auto___203))
;


var g__5924__auto___207 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__5924__auto___207){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__3647__auto__ = [];
var len__3644__auto___208 = arguments.length;
var i__3645__auto___209 = (0);
while(true){
if((i__3645__auto___209 < len__3644__auto___208)){
args__3647__auto__.push((arguments[i__3645__auto___209]));

var G__210 = (i__3645__auto___209 + (1));
i__3645__auto___209 = G__210;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___207))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___207){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___207),args);
});})(g__5924__auto___207))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__5924__auto___207){
return (function (seq180){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq180));
});})(g__5924__auto___207))
;


var g__5924__auto___211 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__5924__auto___211){
return (function cljs$spec$impl$gen$set(var_args){
var args__3647__auto__ = [];
var len__3644__auto___212 = arguments.length;
var i__3645__auto___213 = (0);
while(true){
if((i__3645__auto___213 < len__3644__auto___212)){
args__3647__auto__.push((arguments[i__3645__auto___213]));

var G__214 = (i__3645__auto___213 + (1));
i__3645__auto___213 = G__214;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___211))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___211){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___211),args);
});})(g__5924__auto___211))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__5924__auto___211){
return (function (seq181){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq181));
});})(g__5924__auto___211))
;


var g__5924__auto___215 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__5924__auto___215){
return (function cljs$spec$impl$gen$vector(var_args){
var args__3647__auto__ = [];
var len__3644__auto___216 = arguments.length;
var i__3645__auto___217 = (0);
while(true){
if((i__3645__auto___217 < len__3644__auto___216)){
args__3647__auto__.push((arguments[i__3645__auto___217]));

var G__218 = (i__3645__auto___217 + (1));
i__3645__auto___217 = G__218;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___215))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___215){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___215),args);
});})(g__5924__auto___215))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__5924__auto___215){
return (function (seq182){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq182));
});})(g__5924__auto___215))
;


var g__5924__auto___219 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__5924__auto___219){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__3647__auto__ = [];
var len__3644__auto___220 = arguments.length;
var i__3645__auto___221 = (0);
while(true){
if((i__3645__auto___221 < len__3644__auto___220)){
args__3647__auto__.push((arguments[i__3645__auto___221]));

var G__222 = (i__3645__auto___221 + (1));
i__3645__auto___221 = G__222;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___219))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___219){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___219),args);
});})(g__5924__auto___219))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__5924__auto___219){
return (function (seq183){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq183));
});})(g__5924__auto___219))
;


var g__5924__auto___223 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__5924__auto___223){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__3647__auto__ = [];
var len__3644__auto___224 = arguments.length;
var i__3645__auto___225 = (0);
while(true){
if((i__3645__auto___225 < len__3644__auto___224)){
args__3647__auto__.push((arguments[i__3645__auto___225]));

var G__226 = (i__3645__auto___225 + (1));
i__3645__auto___225 = G__226;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___223))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___223){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___223),args);
});})(g__5924__auto___223))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__5924__auto___223){
return (function (seq184){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq184));
});})(g__5924__auto___223))
;


var g__5924__auto___227 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__5924__auto___227){
return (function cljs$spec$impl$gen$elements(var_args){
var args__3647__auto__ = [];
var len__3644__auto___228 = arguments.length;
var i__3645__auto___229 = (0);
while(true){
if((i__3645__auto___229 < len__3644__auto___228)){
args__3647__auto__.push((arguments[i__3645__auto___229]));

var G__230 = (i__3645__auto___229 + (1));
i__3645__auto___229 = G__230;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___227))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___227){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___227),args);
});})(g__5924__auto___227))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__5924__auto___227){
return (function (seq185){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq185));
});})(g__5924__auto___227))
;


var g__5924__auto___231 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__5924__auto___231){
return (function cljs$spec$impl$gen$bind(var_args){
var args__3647__auto__ = [];
var len__3644__auto___232 = arguments.length;
var i__3645__auto___233 = (0);
while(true){
if((i__3645__auto___233 < len__3644__auto___232)){
args__3647__auto__.push((arguments[i__3645__auto___233]));

var G__234 = (i__3645__auto___233 + (1));
i__3645__auto___233 = G__234;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___231))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___231){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___231),args);
});})(g__5924__auto___231))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__5924__auto___231){
return (function (seq186){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq186));
});})(g__5924__auto___231))
;


var g__5924__auto___235 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__5924__auto___235){
return (function cljs$spec$impl$gen$choose(var_args){
var args__3647__auto__ = [];
var len__3644__auto___236 = arguments.length;
var i__3645__auto___237 = (0);
while(true){
if((i__3645__auto___237 < len__3644__auto___236)){
args__3647__auto__.push((arguments[i__3645__auto___237]));

var G__238 = (i__3645__auto___237 + (1));
i__3645__auto___237 = G__238;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___235))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___235){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___235),args);
});})(g__5924__auto___235))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__5924__auto___235){
return (function (seq187){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq187));
});})(g__5924__auto___235))
;


var g__5924__auto___239 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__5924__auto___239){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__3647__auto__ = [];
var len__3644__auto___240 = arguments.length;
var i__3645__auto___241 = (0);
while(true){
if((i__3645__auto___241 < len__3644__auto___240)){
args__3647__auto__.push((arguments[i__3645__auto___241]));

var G__242 = (i__3645__auto___241 + (1));
i__3645__auto___241 = G__242;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___239))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___239){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___239),args);
});})(g__5924__auto___239))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__5924__auto___239){
return (function (seq188){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq188));
});})(g__5924__auto___239))
;


var g__5924__auto___243 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__5924__auto___243){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__3647__auto__ = [];
var len__3644__auto___244 = arguments.length;
var i__3645__auto___245 = (0);
while(true){
if((i__3645__auto___245 < len__3644__auto___244)){
args__3647__auto__.push((arguments[i__3645__auto___245]));

var G__246 = (i__3645__auto___245 + (1));
i__3645__auto___245 = G__246;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___243))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___243){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___243),args);
});})(g__5924__auto___243))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__5924__auto___243){
return (function (seq189){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq189));
});})(g__5924__auto___243))
;


var g__5924__auto___247 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__5924__auto___247){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__3647__auto__ = [];
var len__3644__auto___248 = arguments.length;
var i__3645__auto___249 = (0);
while(true){
if((i__3645__auto___249 < len__3644__auto___248)){
args__3647__auto__.push((arguments[i__3645__auto___249]));

var G__250 = (i__3645__auto___249 + (1));
i__3645__auto___249 = G__250;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___247))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___247){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___247),args);
});})(g__5924__auto___247))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__5924__auto___247){
return (function (seq190){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq190));
});})(g__5924__auto___247))
;


var g__5924__auto___251 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__5924__auto___251){
return (function cljs$spec$impl$gen$sample(var_args){
var args__3647__auto__ = [];
var len__3644__auto___252 = arguments.length;
var i__3645__auto___253 = (0);
while(true){
if((i__3645__auto___253 < len__3644__auto___252)){
args__3647__auto__.push((arguments[i__3645__auto___253]));

var G__254 = (i__3645__auto___253 + (1));
i__3645__auto___253 = G__254;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___251))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___251){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___251),args);
});})(g__5924__auto___251))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__5924__auto___251){
return (function (seq191){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq191));
});})(g__5924__auto___251))
;


var g__5924__auto___255 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__5924__auto___255){
return (function cljs$spec$impl$gen$return(var_args){
var args__3647__auto__ = [];
var len__3644__auto___256 = arguments.length;
var i__3645__auto___257 = (0);
while(true){
if((i__3645__auto___257 < len__3644__auto___256)){
args__3647__auto__.push((arguments[i__3645__auto___257]));

var G__258 = (i__3645__auto___257 + (1));
i__3645__auto___257 = G__258;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___255))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___255){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___255),args);
});})(g__5924__auto___255))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__5924__auto___255){
return (function (seq192){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq192));
});})(g__5924__auto___255))
;


var g__5924__auto___259 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__5924__auto___259){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__3647__auto__ = [];
var len__3644__auto___260 = arguments.length;
var i__3645__auto___261 = (0);
while(true){
if((i__3645__auto___261 < len__3644__auto___260)){
args__3647__auto__.push((arguments[i__3645__auto___261]));

var G__262 = (i__3645__auto___261 + (1));
i__3645__auto___261 = G__262;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___259))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___259){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___259),args);
});})(g__5924__auto___259))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__5924__auto___259){
return (function (seq193){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq193));
});})(g__5924__auto___259))
;


var g__5924__auto___263 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__5924__auto___263){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__3647__auto__ = [];
var len__3644__auto___264 = arguments.length;
var i__3645__auto___265 = (0);
while(true){
if((i__3645__auto___265 < len__3644__auto___264)){
args__3647__auto__.push((arguments[i__3645__auto___265]));

var G__266 = (i__3645__auto___265 + (1));
i__3645__auto___265 = G__266;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5924__auto___263))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5924__auto___263){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__5924__auto___263),args);
});})(g__5924__auto___263))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__5924__auto___263){
return (function (seq194){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq194));
});})(g__5924__auto___263))
;

var g__5929__auto___288 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__5929__auto___288){
return (function cljs$spec$impl$gen$any(var_args){
var args__3647__auto__ = [];
var len__3644__auto___289 = arguments.length;
var i__3645__auto___290 = (0);
while(true){
if((i__3645__auto___290 < len__3644__auto___289)){
args__3647__auto__.push((arguments[i__3645__auto___290]));

var G__291 = (i__3645__auto___290 + (1));
i__3645__auto___290 = G__291;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___288))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___288){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___288);
});})(g__5929__auto___288))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__5929__auto___288){
return (function (seq267){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq267));
});})(g__5929__auto___288))
;


var g__5929__auto___292 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__5929__auto___292){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__3647__auto__ = [];
var len__3644__auto___293 = arguments.length;
var i__3645__auto___294 = (0);
while(true){
if((i__3645__auto___294 < len__3644__auto___293)){
args__3647__auto__.push((arguments[i__3645__auto___294]));

var G__295 = (i__3645__auto___294 + (1));
i__3645__auto___294 = G__295;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___292))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___292){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___292);
});})(g__5929__auto___292))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__5929__auto___292){
return (function (seq268){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq268));
});})(g__5929__auto___292))
;


var g__5929__auto___296 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__5929__auto___296){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__3647__auto__ = [];
var len__3644__auto___297 = arguments.length;
var i__3645__auto___298 = (0);
while(true){
if((i__3645__auto___298 < len__3644__auto___297)){
args__3647__auto__.push((arguments[i__3645__auto___298]));

var G__299 = (i__3645__auto___298 + (1));
i__3645__auto___298 = G__299;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___296))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___296){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___296);
});})(g__5929__auto___296))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__5929__auto___296){
return (function (seq269){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq269));
});})(g__5929__auto___296))
;


var g__5929__auto___300 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__5929__auto___300){
return (function cljs$spec$impl$gen$char(var_args){
var args__3647__auto__ = [];
var len__3644__auto___301 = arguments.length;
var i__3645__auto___302 = (0);
while(true){
if((i__3645__auto___302 < len__3644__auto___301)){
args__3647__auto__.push((arguments[i__3645__auto___302]));

var G__303 = (i__3645__auto___302 + (1));
i__3645__auto___302 = G__303;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___300))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___300){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___300);
});})(g__5929__auto___300))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__5929__auto___300){
return (function (seq270){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq270));
});})(g__5929__auto___300))
;


var g__5929__auto___304 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__5929__auto___304){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__3647__auto__ = [];
var len__3644__auto___305 = arguments.length;
var i__3645__auto___306 = (0);
while(true){
if((i__3645__auto___306 < len__3644__auto___305)){
args__3647__auto__.push((arguments[i__3645__auto___306]));

var G__307 = (i__3645__auto___306 + (1));
i__3645__auto___306 = G__307;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___304))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___304){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___304);
});})(g__5929__auto___304))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__5929__auto___304){
return (function (seq271){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq271));
});})(g__5929__auto___304))
;


var g__5929__auto___308 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__5929__auto___308){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__3647__auto__ = [];
var len__3644__auto___309 = arguments.length;
var i__3645__auto___310 = (0);
while(true){
if((i__3645__auto___310 < len__3644__auto___309)){
args__3647__auto__.push((arguments[i__3645__auto___310]));

var G__311 = (i__3645__auto___310 + (1));
i__3645__auto___310 = G__311;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___308))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___308){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___308);
});})(g__5929__auto___308))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__5929__auto___308){
return (function (seq272){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq272));
});})(g__5929__auto___308))
;


var g__5929__auto___312 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__5929__auto___312){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__3647__auto__ = [];
var len__3644__auto___313 = arguments.length;
var i__3645__auto___314 = (0);
while(true){
if((i__3645__auto___314 < len__3644__auto___313)){
args__3647__auto__.push((arguments[i__3645__auto___314]));

var G__315 = (i__3645__auto___314 + (1));
i__3645__auto___314 = G__315;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___312))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___312){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___312);
});})(g__5929__auto___312))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__5929__auto___312){
return (function (seq273){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq273));
});})(g__5929__auto___312))
;


var g__5929__auto___316 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__5929__auto___316){
return (function cljs$spec$impl$gen$double(var_args){
var args__3647__auto__ = [];
var len__3644__auto___317 = arguments.length;
var i__3645__auto___318 = (0);
while(true){
if((i__3645__auto___318 < len__3644__auto___317)){
args__3647__auto__.push((arguments[i__3645__auto___318]));

var G__319 = (i__3645__auto___318 + (1));
i__3645__auto___318 = G__319;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___316))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___316){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___316);
});})(g__5929__auto___316))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__5929__auto___316){
return (function (seq274){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq274));
});})(g__5929__auto___316))
;


var g__5929__auto___320 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__5929__auto___320){
return (function cljs$spec$impl$gen$int(var_args){
var args__3647__auto__ = [];
var len__3644__auto___321 = arguments.length;
var i__3645__auto___322 = (0);
while(true){
if((i__3645__auto___322 < len__3644__auto___321)){
args__3647__auto__.push((arguments[i__3645__auto___322]));

var G__323 = (i__3645__auto___322 + (1));
i__3645__auto___322 = G__323;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___320))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___320){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___320);
});})(g__5929__auto___320))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__5929__auto___320){
return (function (seq275){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq275));
});})(g__5929__auto___320))
;


var g__5929__auto___324 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__5929__auto___324){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__3647__auto__ = [];
var len__3644__auto___325 = arguments.length;
var i__3645__auto___326 = (0);
while(true){
if((i__3645__auto___326 < len__3644__auto___325)){
args__3647__auto__.push((arguments[i__3645__auto___326]));

var G__327 = (i__3645__auto___326 + (1));
i__3645__auto___326 = G__327;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___324))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___324){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___324);
});})(g__5929__auto___324))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__5929__auto___324){
return (function (seq276){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq276));
});})(g__5929__auto___324))
;


var g__5929__auto___328 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__5929__auto___328){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__3647__auto__ = [];
var len__3644__auto___329 = arguments.length;
var i__3645__auto___330 = (0);
while(true){
if((i__3645__auto___330 < len__3644__auto___329)){
args__3647__auto__.push((arguments[i__3645__auto___330]));

var G__331 = (i__3645__auto___330 + (1));
i__3645__auto___330 = G__331;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___328))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___328){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___328);
});})(g__5929__auto___328))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__5929__auto___328){
return (function (seq277){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq277));
});})(g__5929__auto___328))
;


var g__5929__auto___332 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__5929__auto___332){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__3647__auto__ = [];
var len__3644__auto___333 = arguments.length;
var i__3645__auto___334 = (0);
while(true){
if((i__3645__auto___334 < len__3644__auto___333)){
args__3647__auto__.push((arguments[i__3645__auto___334]));

var G__335 = (i__3645__auto___334 + (1));
i__3645__auto___334 = G__335;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___332))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___332){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___332);
});})(g__5929__auto___332))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__5929__auto___332){
return (function (seq278){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq278));
});})(g__5929__auto___332))
;


var g__5929__auto___336 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__5929__auto___336){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__3647__auto__ = [];
var len__3644__auto___337 = arguments.length;
var i__3645__auto___338 = (0);
while(true){
if((i__3645__auto___338 < len__3644__auto___337)){
args__3647__auto__.push((arguments[i__3645__auto___338]));

var G__339 = (i__3645__auto___338 + (1));
i__3645__auto___338 = G__339;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___336))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___336){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___336);
});})(g__5929__auto___336))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__5929__auto___336){
return (function (seq279){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq279));
});})(g__5929__auto___336))
;


var g__5929__auto___340 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__5929__auto___340){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__3647__auto__ = [];
var len__3644__auto___341 = arguments.length;
var i__3645__auto___342 = (0);
while(true){
if((i__3645__auto___342 < len__3644__auto___341)){
args__3647__auto__.push((arguments[i__3645__auto___342]));

var G__343 = (i__3645__auto___342 + (1));
i__3645__auto___342 = G__343;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___340))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___340){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___340);
});})(g__5929__auto___340))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__5929__auto___340){
return (function (seq280){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq280));
});})(g__5929__auto___340))
;


var g__5929__auto___344 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__5929__auto___344){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__3647__auto__ = [];
var len__3644__auto___345 = arguments.length;
var i__3645__auto___346 = (0);
while(true){
if((i__3645__auto___346 < len__3644__auto___345)){
args__3647__auto__.push((arguments[i__3645__auto___346]));

var G__347 = (i__3645__auto___346 + (1));
i__3645__auto___346 = G__347;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___344))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___344){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___344);
});})(g__5929__auto___344))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__5929__auto___344){
return (function (seq281){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq281));
});})(g__5929__auto___344))
;


var g__5929__auto___348 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__5929__auto___348){
return (function cljs$spec$impl$gen$string(var_args){
var args__3647__auto__ = [];
var len__3644__auto___349 = arguments.length;
var i__3645__auto___350 = (0);
while(true){
if((i__3645__auto___350 < len__3644__auto___349)){
args__3647__auto__.push((arguments[i__3645__auto___350]));

var G__351 = (i__3645__auto___350 + (1));
i__3645__auto___350 = G__351;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___348))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___348){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___348);
});})(g__5929__auto___348))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__5929__auto___348){
return (function (seq282){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq282));
});})(g__5929__auto___348))
;


var g__5929__auto___352 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__5929__auto___352){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__3647__auto__ = [];
var len__3644__auto___353 = arguments.length;
var i__3645__auto___354 = (0);
while(true){
if((i__3645__auto___354 < len__3644__auto___353)){
args__3647__auto__.push((arguments[i__3645__auto___354]));

var G__355 = (i__3645__auto___354 + (1));
i__3645__auto___354 = G__355;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___352))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___352){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___352);
});})(g__5929__auto___352))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__5929__auto___352){
return (function (seq283){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq283));
});})(g__5929__auto___352))
;


var g__5929__auto___356 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__5929__auto___356){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__3647__auto__ = [];
var len__3644__auto___357 = arguments.length;
var i__3645__auto___358 = (0);
while(true){
if((i__3645__auto___358 < len__3644__auto___357)){
args__3647__auto__.push((arguments[i__3645__auto___358]));

var G__359 = (i__3645__auto___358 + (1));
i__3645__auto___358 = G__359;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___356))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___356){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___356);
});})(g__5929__auto___356))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__5929__auto___356){
return (function (seq284){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq284));
});})(g__5929__auto___356))
;


var g__5929__auto___360 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__5929__auto___360){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__3647__auto__ = [];
var len__3644__auto___361 = arguments.length;
var i__3645__auto___362 = (0);
while(true){
if((i__3645__auto___362 < len__3644__auto___361)){
args__3647__auto__.push((arguments[i__3645__auto___362]));

var G__363 = (i__3645__auto___362 + (1));
i__3645__auto___362 = G__363;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___360))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___360){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___360);
});})(g__5929__auto___360))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__5929__auto___360){
return (function (seq285){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq285));
});})(g__5929__auto___360))
;


var g__5929__auto___364 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__5929__auto___364){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__3647__auto__ = [];
var len__3644__auto___365 = arguments.length;
var i__3645__auto___366 = (0);
while(true){
if((i__3645__auto___366 < len__3644__auto___365)){
args__3647__auto__.push((arguments[i__3645__auto___366]));

var G__367 = (i__3645__auto___366 + (1));
i__3645__auto___366 = G__367;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___364))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___364){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___364);
});})(g__5929__auto___364))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__5929__auto___364){
return (function (seq286){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq286));
});})(g__5929__auto___364))
;


var g__5929__auto___368 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__5929__auto___368){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__3647__auto__ = [];
var len__3644__auto___369 = arguments.length;
var i__3645__auto___370 = (0);
while(true){
if((i__3645__auto___370 < len__3644__auto___369)){
args__3647__auto__.push((arguments[i__3645__auto___370]));

var G__371 = (i__3645__auto___370 + (1));
i__3645__auto___370 = G__371;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});})(g__5929__auto___368))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__5929__auto___368){
return (function (args){
return cljs.core.deref.call(null,g__5929__auto___368);
});})(g__5929__auto___368))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__5929__auto___368){
return (function (seq287){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq287));
});})(g__5929__auto___368))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__3647__auto__ = [];
var len__3644__auto___374 = arguments.length;
var i__3645__auto___375 = (0);
while(true){
if((i__3645__auto___375 < len__3644__auto___374)){
args__3647__auto__.push((arguments[i__3645__auto___375]));

var G__376 = (i__3645__auto___375 + (1));
i__3645__auto___375 = G__376;
continue;
} else {
}
break;
}

var argseq__3648__auto__ = ((((0) < args__3647__auto__.length))?(new cljs.core.IndexedSeq(args__3647__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__3648__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__372_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__372_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq373){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq373));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__377_SHARP_){
return (new Date(p1__377_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map