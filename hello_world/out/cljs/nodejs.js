// Compiled by ClojureScript 1.9.230 {}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__185__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__185 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__186__i = 0, G__186__a = new Array(arguments.length -  0);
while (G__186__i < G__186__a.length) {G__186__a[G__186__i] = arguments[G__186__i + 0]; ++G__186__i;}
  args = new cljs.core.IndexedSeq(G__186__a,0);
} 
return G__185__delegate.call(this,args);};
G__185.cljs$lang$maxFixedArity = 0;
G__185.cljs$lang$applyTo = (function (arglist__187){
var args = cljs.core.seq(arglist__187);
return G__185__delegate(args);
});
G__185.cljs$core$IFn$_invoke$arity$variadic = G__185__delegate;
return G__185;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__188__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__189__i = 0, G__189__a = new Array(arguments.length -  0);
while (G__189__i < G__189__a.length) {G__189__a[G__189__i] = arguments[G__189__i + 0]; ++G__189__i;}
  args = new cljs.core.IndexedSeq(G__189__a,0);
} 
return G__188__delegate.call(this,args);};
G__188.cljs$lang$maxFixedArity = 0;
G__188.cljs$lang$applyTo = (function (arglist__190){
var args = cljs.core.seq(arglist__190);
return G__188__delegate(args);
});
G__188.cljs$core$IFn$_invoke$arity$variadic = G__188__delegate;
return G__188;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map