// Compiled by ClojureScript 1.9.230 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1247){
var map__1272 = p__1247;
var map__1272__$1 = ((((!((map__1272 == null)))?((((map__1272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1272):map__1272);
var m = map__1272__$1;
var n = cljs.core.get.call(null,map__1272__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1272__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__1274_1296 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1275_1297 = null;
var count__1276_1298 = (0);
var i__1277_1299 = (0);
while(true){
if((i__1277_1299 < count__1276_1298)){
var f_1300 = cljs.core._nth.call(null,chunk__1275_1297,i__1277_1299);
cljs.core.println.call(null,"  ",f_1300);

var G__1301 = seq__1274_1296;
var G__1302 = chunk__1275_1297;
var G__1303 = count__1276_1298;
var G__1304 = (i__1277_1299 + (1));
seq__1274_1296 = G__1301;
chunk__1275_1297 = G__1302;
count__1276_1298 = G__1303;
i__1277_1299 = G__1304;
continue;
} else {
var temp__4657__auto___1305 = cljs.core.seq.call(null,seq__1274_1296);
if(temp__4657__auto___1305){
var seq__1274_1306__$1 = temp__4657__auto___1305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1274_1306__$1)){
var c__3496__auto___1307 = cljs.core.chunk_first.call(null,seq__1274_1306__$1);
var G__1308 = cljs.core.chunk_rest.call(null,seq__1274_1306__$1);
var G__1309 = c__3496__auto___1307;
var G__1310 = cljs.core.count.call(null,c__3496__auto___1307);
var G__1311 = (0);
seq__1274_1296 = G__1308;
chunk__1275_1297 = G__1309;
count__1276_1298 = G__1310;
i__1277_1299 = G__1311;
continue;
} else {
var f_1312 = cljs.core.first.call(null,seq__1274_1306__$1);
cljs.core.println.call(null,"  ",f_1312);

var G__1313 = cljs.core.next.call(null,seq__1274_1306__$1);
var G__1314 = null;
var G__1315 = (0);
var G__1316 = (0);
seq__1274_1296 = G__1313;
chunk__1275_1297 = G__1314;
count__1276_1298 = G__1315;
i__1277_1299 = G__1316;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1317 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3113__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3113__auto__)){
return or__3113__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1317);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1317)))?cljs.core.second.call(null,arglists_1317):arglists_1317));
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
var seq__1278_1318 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1279_1319 = null;
var count__1280_1320 = (0);
var i__1281_1321 = (0);
while(true){
if((i__1281_1321 < count__1280_1320)){
var vec__1282_1322 = cljs.core._nth.call(null,chunk__1279_1319,i__1281_1321);
var name_1323 = cljs.core.nth.call(null,vec__1282_1322,(0),null);
var map__1285_1324 = cljs.core.nth.call(null,vec__1282_1322,(1),null);
var map__1285_1325__$1 = ((((!((map__1285_1324 == null)))?((((map__1285_1324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1285_1324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1285_1324):map__1285_1324);
var doc_1326 = cljs.core.get.call(null,map__1285_1325__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1327 = cljs.core.get.call(null,map__1285_1325__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1323);

cljs.core.println.call(null," ",arglists_1327);

if(cljs.core.truth_(doc_1326)){
cljs.core.println.call(null," ",doc_1326);
} else {
}

var G__1328 = seq__1278_1318;
var G__1329 = chunk__1279_1319;
var G__1330 = count__1280_1320;
var G__1331 = (i__1281_1321 + (1));
seq__1278_1318 = G__1328;
chunk__1279_1319 = G__1329;
count__1280_1320 = G__1330;
i__1281_1321 = G__1331;
continue;
} else {
var temp__4657__auto___1332 = cljs.core.seq.call(null,seq__1278_1318);
if(temp__4657__auto___1332){
var seq__1278_1333__$1 = temp__4657__auto___1332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1278_1333__$1)){
var c__3496__auto___1334 = cljs.core.chunk_first.call(null,seq__1278_1333__$1);
var G__1335 = cljs.core.chunk_rest.call(null,seq__1278_1333__$1);
var G__1336 = c__3496__auto___1334;
var G__1337 = cljs.core.count.call(null,c__3496__auto___1334);
var G__1338 = (0);
seq__1278_1318 = G__1335;
chunk__1279_1319 = G__1336;
count__1280_1320 = G__1337;
i__1281_1321 = G__1338;
continue;
} else {
var vec__1287_1339 = cljs.core.first.call(null,seq__1278_1333__$1);
var name_1340 = cljs.core.nth.call(null,vec__1287_1339,(0),null);
var map__1290_1341 = cljs.core.nth.call(null,vec__1287_1339,(1),null);
var map__1290_1342__$1 = ((((!((map__1290_1341 == null)))?((((map__1290_1341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1290_1341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1290_1341):map__1290_1341);
var doc_1343 = cljs.core.get.call(null,map__1290_1342__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1344 = cljs.core.get.call(null,map__1290_1342__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1340);

cljs.core.println.call(null," ",arglists_1344);

if(cljs.core.truth_(doc_1343)){
cljs.core.println.call(null," ",doc_1343);
} else {
}

var G__1345 = cljs.core.next.call(null,seq__1278_1333__$1);
var G__1346 = null;
var G__1347 = (0);
var G__1348 = (0);
seq__1278_1318 = G__1345;
chunk__1279_1319 = G__1346;
count__1280_1320 = G__1347;
i__1281_1321 = G__1348;
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

var seq__1292 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1293 = null;
var count__1294 = (0);
var i__1295 = (0);
while(true){
if((i__1295 < count__1294)){
var role = cljs.core._nth.call(null,chunk__1293,i__1295);
var temp__4657__auto___1349__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1349__$1)){
var spec_1350 = temp__4657__auto___1349__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_1350));
} else {
}

var G__1351 = seq__1292;
var G__1352 = chunk__1293;
var G__1353 = count__1294;
var G__1354 = (i__1295 + (1));
seq__1292 = G__1351;
chunk__1293 = G__1352;
count__1294 = G__1353;
i__1295 = G__1354;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__1292);
if(temp__4657__auto____$1){
var seq__1292__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1292__$1)){
var c__3496__auto__ = cljs.core.chunk_first.call(null,seq__1292__$1);
var G__1355 = cljs.core.chunk_rest.call(null,seq__1292__$1);
var G__1356 = c__3496__auto__;
var G__1357 = cljs.core.count.call(null,c__3496__auto__);
var G__1358 = (0);
seq__1292 = G__1355;
chunk__1293 = G__1356;
count__1294 = G__1357;
i__1295 = G__1358;
continue;
} else {
var role = cljs.core.first.call(null,seq__1292__$1);
var temp__4657__auto___1359__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1359__$2)){
var spec_1360 = temp__4657__auto___1359__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_1360));
} else {
}

var G__1361 = cljs.core.next.call(null,seq__1292__$1);
var G__1362 = null;
var G__1363 = (0);
var G__1364 = (0);
seq__1292 = G__1361;
chunk__1293 = G__1362;
count__1294 = G__1363;
i__1295 = G__1364;
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

//# sourceMappingURL=repl.js.map