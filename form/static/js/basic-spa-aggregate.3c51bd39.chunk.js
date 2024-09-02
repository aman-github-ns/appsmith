"use strict";(self.webpackChunkappsmith=self.webpackChunkappsmith||[]).push([[3586],{56777:function(t,e,n){n.d(e,{o:function(){return m}});var i=n(93433),r=n(15671),a=n(43144),o=n(82963),s=n(78814),u=n(61120),c=n(97326),h=n(60136),l=n(75284),d=n(9831),f=n(19198),v=n(99712),p=n(73198);var m=function(t){function e(t,n,i){var a,h,l,d,m;return(0,r.Z)(this,e),l=this,d=e,m=[i],d=(0,u.Z)(d),(h=(0,o.Z)(l,(0,s.Z)()?Reflect.construct(d,m||[],(0,u.Z)(l).constructor):d.apply(l,m))).endpoint=t,h.opts=n||{},h.started=!1,h.timeoutHandle=null,h.aborted=!1,h.harvest=new f.M(h.sharedContext),(0,v.L)(h.unload.bind((0,c.Z)(h))),null===(a=h.sharedContext)||void 0===a||a.ee.on(p.wO.RESET,(function(){return h.runHarvest({forceNoRetry:!0})})),h}return(0,h.Z)(e,t),(0,a.Z)(e,[{key:"unload",value:function(){this.aborted||(this.opts.onUnload&&this.opts.onUnload(),this.runHarvest({unload:!0}))}},{key:"startTimer",value:function(t,e){this.interval=t,this.started=!0,this.scheduleHarvest(null!=e?e:this.interval)}},{key:"stopTimer",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.aborted=t,this.started=!1,this.timeoutHandle&&clearTimeout(this.timeoutHandle)}},{key:"scheduleHarvest",value:function(t,e){var n=this;this.timeoutHandle||(null==t&&(t=this.interval),this.timeoutHandle=setTimeout((function(){n.timeoutHandle=null,n.runHarvest(e)}),1e3*t))}},{key:"runHarvest",value:function(t){var e=this;if(!this.aborted){var n,r,a=function(n){null!==t&&void 0!==t&&t.forceNoRetry&&(n.retry=!1),e.onHarvestFinished(t,n)},o=[];if(this.opts.getPayload){if(!(n=l.qD({isFinalHarvest:null===t||void 0===t?void 0:t.unload})))return!1;var s=!(null!==t&&void 0!==t&&t.unload)&&n===l.Be;if(!(r=this.opts.getPayload({retry:s,opts:t})))return void(this.started&&this.scheduleHarvest());r="[object Array]"===Object.prototype.toString.call(r)?r:[r],o.push.apply(o,(0,i.Z)(r))}var u=function(t){return e.harvest.sendX(t)};o.length?u=this.opts.raw?function(t){return e.harvest._send(t)}:function(t){return e.harvest.send(t)}:o.push(void 0),o.forEach((function(i){u({endpoint:e.endpoint,payload:i,opts:t,submitMethod:n,cbFinished:a,customUrl:e.opts.customUrl,raw:e.opts.raw})})),this.started&&this.scheduleHarvest()}}},{key:"onHarvestFinished",value:function(t,e){if(this.opts.onFinished&&this.opts.onFinished(e),e.sent&&e.retry){var n=e.delay||this.opts.retryDelay;this.started&&n?(clearTimeout(this.timeoutHandle),this.timeoutHandle=null,this.scheduleHarvest(n,t)):!this.started&&n&&this.scheduleHarvest(n,t)}}}]),e}(d.w)},84320:function(t,e,n){n.d(e,{AG:function(){return u},FX:function(){return h},n1:function(){return l},uR:function(){return c}});var i=n(44567),r=n(17610),a=n(34370),o=Object.prototype.hasOwnProperty,s=64;function u(t,e,n){return t||0===t||""===t?e(t)+(n?",":""):"!"}function c(t,e){return e?Math.floor(t).toString(36):void 0===t||0===t?"":Math.floor(t).toString(36)}function h(t){var e=Object.hasOwnProperty("create")?Object.create(null):{},n=0;return function(i){if("undefined"===typeof i||""===i)return"";var r=new a.RR({agentIdentifier:t});i=String(i),r.shouldObfuscate()&&(i=r.obfuscateString(i));return o.call(e,i)?c(e[i],!0):(e[i]=n++,function(t){return"'"+t.replace(d,"\\$1")}(i))}}function l(t,e){var n=[];return(0,i.D)(t,(function(t,i){if(!(n.length>=s)){var a,o=5;switch(t=e(t),typeof i){case"object":i?a=e((0,r.P)(i)):o=9;break;case"number":o=6,a=i%1?i:i+".";break;case"boolean":o=i?7:8;break;case"undefined":o=9;break;default:a=e(i)}n.push([o,t+(a?","+a:"")])}})),n}var d=/([,\\;])/g},9378:function(t,e,n){n.d(e,{uB:function(){return p},wu:function(){return v},zJ:function(){return f}});var i="Start",r="End",a="unloadEvent",o="redirect",s="domainLookup",u="onnect",c="request",h="response",l="loadEvent",d="domContentLoadedEvent",f=[];function v(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},f=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(e)return n.of=t,m(n.of,n,"n",!0),m(e[a+i],n,"u",f),m(e[o+i],n,"r",f),m(e[a+r],n,"ue",f),m(e[o+r],n,"re",f),m(e["fetch"+i],n,"f",f),m(e[s+i],n,"dn",f),m(e[s+r],n,"dne",f),m(e["c"+u+i],n,"c",f),m(e["secureC"+u+"ion"+i],n,"s",f),m(e["c"+u+r],n,"ce",f),m(e[c+i],n,"rq",f),m(e[h+i],n,"rp",f),m(e[h+r],n,"rpe",f),m(e.domLoading,n,"dl",f),m(e.domInteractive,n,"di",f),m(e[d+i],n,"ds",f),m(e[d+r],n,"de",f),m(e.domComplete,n,"dc",f),m(e[l+i],n,"l",f),m(e[l+r],n,"le",f),n}function p(t,e){var n;return m("number"===typeof(n=t.type)?n:{navigate:void 0,reload:1,back_forward:2,prerender:3}[n],e,"ty"),m(t.redirectCount,e,"rc"),e}function m(t,e,n,i){if("number"===typeof t&&t>0){if(i){var r=(null===e||void 0===e?void 0:e.of)>0?e.of:0;t=Math.max(t-r,0)}t=Math.round(t),e[n]=t,f.push(t)}else f.push(void 0)}},99712:function(t,e,n){n.d(e,{L:function(){return u}});var i=n(37762),r=n(98841),a=n(63711),o=n(73087);if(a.v6){a._A.cleanupTasks=[];var s=a._A.close;a._A.close=function(){var t,e=(0,i.Z)(a._A.cleanupTasks);try{for(e.s();!(t=e.n()).done;){(0,t.value)()}}catch(n){e.e(n)}finally{e.f()}s()}}function u(t){a.il?((0,o.N)(t,!0),(0,r.bP)("pagehide",t)):a.v6&&a._A.cleanupTasks.push(t)}},27168:function(t,e,n){function i(t){var e,n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=(null===r||void 0===r?void 0:r.leading)||!1;return function(){for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];a&&void 0===e&&(t.apply(n,o),e=setTimeout((function(){e=clearTimeout(e)}),i)),a||(clearTimeout(e),e=setTimeout((function(){t.apply(n,o)}),i))}}function r(t){var e=this,n=!1;return function(){if(!n){n=!0;for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];t.apply(e,r)}}}n.d(e,{D:function(){return i},Z:function(){return r}})},6291:function(t,e,n){n.d(e,{P:function(){return s}});var i=n(63711),r=n(33559),a=n(2052),o=n(99038),s=new a.U(r.S.TIME_TO_FIRST_BYTE);if(i.il&&"undefined"!==typeof PerformanceNavigationTiming&&!i.Tt)(0,o.mr)((function(t){var e=t.value,n=t.attribution;s.isValid||s.update({value:e,attrs:{navigationEntry:n.navigationEntry}})}));else if(!s.isValid){var u={};for(var c in(null===i._A||void 0===i._A||null===(h=i._A.performance)||void 0===h?void 0:h.timing)||{}){var h,l;u[c]=Math.max((null===i._A||void 0===i._A||null===(l=i._A.performance)||void 0===l?void 0:l.timing[c])-i.cv,0)}s.update({value:u.responseStart,attrs:{navigationEntry:u}})}},43159:function(t,e,n){n.r(e),n.d(e,{Aggregate:function(){return nt}});var i=n(93433),r=n(37762),a=n(29439),o=n(15671),s=n(43144),u=n(82963),c=n(78814),h=n(61120),l=n(97326),d=n(60136),f=n(40101),v=n(4942),p=n(43889),m=n(19435),g=n(21782),Z=n(38450),y=n(68295),I=n(56777),b=n(27168),T=n(6291),A=n(30733),R=n(12088),k=n(14415),w=A.D.softNav,P="",H=1,S=2,N=1,D=2,E="in progress",L="finished",C="cancelled",_=n(84320),U=n(51185),F=0,x=function(){function t(e){if((0,o.Z)(this,t),(0,v.Z)(this,"belType",void 0),(0,v.Z)(this,"children",[]),(0,v.Z)(this,"start",(0,U.z)()),(0,v.Z)(this,"end",void 0),(0,v.Z)(this,"callbackEnd",0),(0,v.Z)(this,"callbackDuration",0),(0,v.Z)(this,"nodeId",++F),!e)throw new Error("Interaction is missing core attributes");this.agentIdentifier=e}return(0,s.Z)(t,[{key:"addChild",value:function(t){this.children.push(t)}},{key:"serialize",value:function(){}}]),t}();var j=function(t){function e(t,n){var i,r,a,s;return(0,o.Z)(this,e),r=this,a=e,s=[t],a=(0,h.Z)(a),(i=(0,u.Z)(r,(0,c.Z)()?Reflect.construct(a,s||[],(0,h.Z)(r).constructor):a.apply(r,s))).belType=D,i.method=n.method,i.status=n.status,i.domain=n.domain,i.path=n.path,i.txSize=n.requestSize,i.rxSize=n.responseSize,i.requestedWith="fetch"===n.type?1:"",i.spanId=n.spanId,i.traceId=n.traceId,i.spanTimestamp=n.spanTimestamp,i.gql=n.gql,i.start=n.startTime,i.end=n.endTime,i}return(0,d.Z)(e,t),(0,s.Z)(e,[{key:"serialize",value:function(t){var e=(0,_.FX)(this.agentIdentifier),n=[],i=[(0,_.uR)(this.belType),0,(0,_.uR)(this.start-t),(0,_.uR)(this.end-this.start),(0,_.uR)(this.callbackEnd),(0,_.uR)(this.callbackDuration),e(this.method),(0,_.uR)(this.status),e(this.domain),e(this.path),(0,_.uR)(this.txSize),(0,_.uR)(this.rxSize),this.requestedWith,e(this.nodeId),(0,_.AG)(this.spanId,e,!0)+(0,_.AG)(this.traceId,e,!0)+(0,_.AG)(this.spanTimestamp,_.uR)],r=[];return"object"===typeof this.gql&&(r=(0,_.n1)(this.gql,e)),this.children.forEach((function(t){return r.push(t.serialize())})),i[1]=(0,_.uR)(r.length),n.push(i),r.length&&n.push(r.join(";")),n.join(";")}}]),e}(x),M=n(9378),X=n(1413),O=n(63711),z=n(42437),q=n(69292);var B=new WeakSet,G=new WeakSet,W=function(t){function e(t,n,i,r){var a,s,d,p;return(0,o.Z)(this,e),s=this,d=e,p=[t],d=(0,h.Z)(d),a=(0,u.Z)(s,(0,c.Z)()?Reflect.construct(d,p||[],(0,h.Z)(s).constructor):d.apply(s,p)),(0,f.Z)((0,l.Z)(a),G),(0,f.Z)((0,l.Z)(a),B),(0,v.Z)((0,l.Z)(a),"id",(0,z.Rl)()),(0,v.Z)((0,l.Z)(a),"initialPageURL",O.FN),(0,v.Z)((0,l.Z)(a),"oldURL",""+(null===O._A||void 0===O._A?void 0:O._A.location)),(0,v.Z)((0,l.Z)(a),"newURL",""+(null===O._A||void 0===O._A?void 0:O._A.location)),(0,v.Z)((0,l.Z)(a),"customName",void 0),(0,v.Z)((0,l.Z)(a),"customAttributes",{}),(0,v.Z)((0,l.Z)(a),"customDataByApi",{}),(0,v.Z)((0,l.Z)(a),"queueTime",void 0),(0,v.Z)((0,l.Z)(a),"appTime",void 0),(0,v.Z)((0,l.Z)(a),"newRoute",void 0),(0,v.Z)((0,l.Z)(a),"status",E),(0,v.Z)((0,l.Z)(a),"domTimestamp",0),(0,v.Z)((0,l.Z)(a),"historyTimestamp",0),(0,v.Z)((0,l.Z)(a),"createdByApi",!1),(0,v.Z)((0,l.Z)(a),"keepOpenUntilEndApi",!1),(0,v.Z)((0,l.Z)(a),"onDone",[]),(0,v.Z)((0,l.Z)(a),"cancellationTimer",void 0),a.belType=N,a.trigger=n,a.start=i,a.oldRoute=r,a.eventSubscription=new Map([["finished",[]],["cancelled",[]]]),a.forceSave=a.forceIgnore=!1,"api"===a.trigger&&(a.createdByApi=!0),a}return(0,d.Z)(e,t),(0,s.Z)(e,[{key:"updateDom",value:function(t){this.domTimestamp=t||performance.now()}},{key:"updateHistory",value:function(t,e){this.newURL=e||""+(null===O._A||void 0===O._A?void 0:O._A.location),this.historyTimestamp=t||performance.now()}},{key:"seenHistoryAndDomChange",value:function(){return this.historyTimestamp>0&&this.domTimestamp>this.historyTimestamp}},{key:"on",value:function(t,e){if(!this.eventSubscription.has(t))throw new Error("Cannot subscribe to non pre-defined events.");if("function"!==typeof e)throw new Error("Must supply function as callback.");this.eventSubscription.get(t).push(e)}},{key:"done",value:function(t){var e=this;return(!this.keepOpenUntilEndApi||void 0!==t)&&(this.onDone.forEach((function(t){return t(e.customDataByApi)})),this.forceIgnore?(0,p.Z)(this,G,V).call(this):this.seenHistoryAndDomChange()?(0,p.Z)(this,B,J).call(this,t):this.forceSave?(0,p.Z)(this,B,J).call(this,t||performance.now()):(0,p.Z)(this,G,V).call(this),!0)}},{key:"isActiveDuring",value:function(t){return this.status===E?this.start<=t:this.status===L&&this.start<=t&&this.end>=t}},{key:"firstPaint",get:function(){}},{key:"firstContentfulPaint",get:function(){}},{key:"navTiming",get:function(){}},{key:"serialize",value:function(t){var e,n=this,i=(0,_.FX)(this.agentIdentifier),r=[];e="initialPageLoad"===this.trigger?P:this.newURL!==this.oldURL?H:S;var a=[(0,_.uR)(this.belType),0,(0,_.uR)(Math.floor(this.start-t)),(0,_.uR)(Math.floor(this.end-this.start)),(0,_.uR)(this.callbackEnd),(0,_.uR)(this.callbackDuration),i(this.trigger),i((0,q.f)(this.initialPageURL,!0)),i((0,q.f)(this.oldURL,!0)),i((0,q.f)(this.newURL,!0)),i(this.customName),e,(0,_.AG)(this.queueTime,_.uR,!0)+(0,_.AG)(this.appTime,_.uR,!0)+(0,_.AG)(this.oldRoute,i,!0)+(0,_.AG)(this.newRoute,i,!0)+i(this.id),i(this.nodeId),(0,_.AG)(this.firstPaint,_.uR,!0)+(0,_.AG)(this.firstContentfulPaint,_.uR)],o=(0,_.n1)(this.customAttributes||{},i);return(0,m.C5)(this.agentIdentifier).atts&&o.push("a,"+i((0,m.C5)(this.agentIdentifier).atts)),this.children.forEach((function(e){return o.push(e.serialize(t||n.start))})),a[1]=(0,_.uR)(o.length),r.push(a),o.length&&r.push(o.join(";")),this.navTiming?r.push(this.navTiming):r.push(""),r.join(";")}}]),e}(x);function J(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.status===E&&(clearTimeout(this.cancellationTimer),this.end=Math.max(this.domTimestamp,this.historyTimestamp,t),this.customAttributes=(0,X.Z)((0,X.Z)({},(0,m.C5)(this.agentIdentifier).jsAttributes),this.customAttributes),this.status=L,this.eventSubscription.get("finished").forEach((function(t){return t()})))}function V(){this.status===E&&(clearTimeout(this.cancellationTimer),this.status=C,this.eventSubscription.get("cancelled").forEach((function(t){return t()})))}var Y=n(69480),$=n(89596);var K=function(t){function e(t){var n,i,r,a;(0,o.Z)(this,e),i=this,r=e,a=[t,"initialPageLoad",0,null],r=(0,h.Z)(r),n=(0,u.Z)(i,(0,c.Z)()?Reflect.construct(r,a||[],(0,h.Z)(i).constructor):r.apply(i,a));var s=(0,m.C5)(t);return n.queueTime=s.queueTime,n.appTime=s.applicationTime,n}return(0,d.Z)(e,t),(0,s.Z)(e,[{key:"firstPaint",get:function(){return Y.U.current.value}},{key:"firstContentfulPaint",get:function(){return $.y.current.value}},{key:"navTiming",get:function(){if(M.zJ.length){var t=",",e="b",n=0;return M.zJ.slice(1,21).forEach((function(i){void 0!==i?(e+=t+(0,_.uR)(i-n),t=",",n=i):(e+=t+"!",t="")})),e}}}]),e}(W);var Q=new WeakSet,tt=new WeakSet,et=new WeakSet,nt=function(t){function e(t,n,i){var r;(0,o.Z)(this,e);var s,d,v,b=i.domObserver;s=this,d=e,v=[t,n,w],d=(0,h.Z)(d),r=(0,u.Z)(s,(0,c.Z)()?Reflect.construct(d,v||[],(0,h.Z)(s).constructor):d.apply(s,v)),(0,f.Z)((0,l.Z)(r),et),(0,f.Z)((0,l.Z)(r),tt),(0,f.Z)((0,l.Z)(r),Q);var k=(0,m.Mt)(t,"soft_navigations.harvestTimeSeconds")||10;return r.interactionsToHarvest=[],r.interactionsAwaitingRetry=[],r.domObserver=b,r.initialPageLoadInteraction=new K(t),T.P.subscribe((function(t){var e=t.attrs.navigationEntry.loadEventEnd;r.initialPageLoadInteraction.forceSave=!0,r.initialPageLoadInteraction.done(e),r.interactionsToHarvest.push(r.initialPageLoadInteraction),r.initialPageLoadInteraction=null,(0,Z.p)(R.xS,["SoftNav/Interaction/InitialPageLoad/Duration/Ms",Math.round(e)],void 0,A.D.metrics,r.ee)})),r.latestRouteSetByApi=null,r.interactionInProgress=null,r.blocked=!1,r.waitForFlags(["spa"]).then((function(e){if((0,a.Z)(e,1)[0]){r.drain();var n=new I.o("events",{onFinished:r.onHarvestFinished.bind((0,l.Z)(r)),retryDelay:k,onUnload:function(){var t;return null===(t=r.interactionInProgress)||void 0===t?void 0:t.done()}},{agentIdentifier:t,ee:r.ee});n.harvest.on("events",r.onHarvestStarted.bind((0,l.Z)(r))),n.startTimer(k,0)}else r.blocked=!0,(0,g.o5)(r.agentIdentifier,r.featureName)})),(0,y.X)("newUIEvent",(function(t){return r.startUIInteraction(t.type,t.timeStamp,t.target)}),r.featureName,r.ee),(0,y.X)("newURL",(function(t,e){var n;return null===(n=r.interactionInProgress)||void 0===n?void 0:n.updateHistory(t,e)}),r.featureName,r.ee),(0,y.X)("newDom",(function(t){var e,n;null===(e=r.interactionInProgress)||void 0===e||e.updateDom(t),null!==(n=r.interactionInProgress)&&void 0!==n&&n.seenHistoryAndDomChange()&&r.interactionInProgress.done()}),r.featureName,r.ee),(0,p.Z)((0,l.Z)(r),et,at).call((0,l.Z)(r)),(0,y.X)("ajax",(0,p.Z)((0,l.Z)(r),Q,it).bind((0,l.Z)(r)),r.featureName,r.ee),(0,y.X)("jserror",(0,p.Z)((0,l.Z)(r),tt,rt).bind((0,l.Z)(r)),r.featureName,r.ee),r}return(0,d.Z)(e,t),(0,s.Z)(e,[{key:"onHarvestStarted",value:function(t){var e;if(0!==this.interactionsToHarvest.length&&!this.blocked){var n,a=0,o=[],s=(0,r.Z)(this.interactionsToHarvest);try{for(s.s();!(n=s.n()).done;){var u=n.value;o.push(u.serialize(a)),a||(a=Math.floor(u.start))}}catch(h){s.e(h)}finally{s.f()}var c="bel.7;".concat(o.join(";"));return t.retry&&(e=this.interactionsAwaitingRetry).push.apply(e,(0,i.Z)(this.interactionsToHarvest)),this.interactionsToHarvest=[],{body:{e:c}}}}},{key:"onHarvestFinished",value:function(t){t.sent&&t.retry&&this.interactionsAwaitingRetry.length>0&&(this.interactionsToHarvest=[].concat((0,i.Z)(this.interactionsAwaitingRetry),(0,i.Z)(this.interactionsToHarvest)),this.interactionsAwaitingRetry=[])}},{key:"startUIInteraction",value:function(t,e,n){var i,r,a=this;if((null===(i=this.interactionInProgress)||void 0===i||!i.createdByApi)&&!1!==(null===(r=this.interactionInProgress)||void 0===r?void 0:r.done())){if(this.interactionInProgress=new W(this.agentIdentifier,t,e,this.latestRouteSetByApi),"click"===t){var o=function(t){var e=t.tagName.toLowerCase();if(["a","button","input"].includes(e))return t.title||t.value||t.innerText}(n);o&&(this.interactionInProgress.customAttributes.actionText=o)}this.interactionInProgress.cancellationTimer=setTimeout((function(){a.interactionInProgress.done(),(0,Z.p)(R.xS,["SoftNav/Interaction/TimeOut"],void 0,A.D.metrics,a.ee)}),3e4),this.setClosureHandlers()}}},{key:"setClosureHandlers",value:function(){var t=this;this.interactionInProgress.on("finished",(function(){var e=t.interactionInProgress;t.interactionsToHarvest.push(t.interactionInProgress),t.interactionInProgress=null,t.domObserver.disconnect(),(0,Z.p)(R.xS,["SoftNav/Interaction/".concat(e.newURL!==e.oldURL?"RouteChange":"Custom","/Duration/Ms"),Math.round(e.end-e.start)],void 0,A.D.metrics,t.ee)})),this.interactionInProgress.on("cancelled",(function(){t.interactionInProgress=null,t.domObserver.disconnect()}))}},{key:"getInteractionFor",value:function(t){var e,n,i;if(null!==(e=this.interactionInProgress)&&void 0!==e&&e.isActiveDuring(t))return this.interactionInProgress;for(var r=this.interactionsToHarvest.length-1;r>=0;r--){var a=this.interactionsToHarvest[r];if(a.isActiveDuring(t)){if("initialPageLoad"!==a.trigger)return a;i=a}}return i||(null!==(n=this.initialPageLoadInteraction)&&void 0!==n&&n.isActiveDuring(t)?this.initialPageLoadInteraction:void 0)}}]),e}(k.m);function it(t){var e=this,n=this.getInteractionFor(t.startTime);function i(t,e,n){var i=new j(t,e);n.addChild(i)}n?n.status===L?i(this.agentIdentifier,t,n):(n.on("finished",(function(){return i(e.agentIdentifier,t,n)})),n.on("cancelled",(function(){return(0,Z.p)("returnAjax",[t],void 0,A.D.ajax,e.ee)}))):(0,Z.p)("returnAjax",[t],void 0,A.D.ajax,this.ee)}function rt(t,e){var n=this,i=this.getInteractionFor(e);i&&(t.browserInteractionId=i.id,i.status===L?(t._softNavFinished=!0,t._softNavAttributes=i.customAttributes):(i.on("finished",(0,b.Z)((function(){return(0,Z.p)("softNavFlush",[i.id,!0,i.customAttributes],void 0,A.D.jserrors,n.ee)}))),i.on("cancelled",(0,b.Z)((function(){return(0,Z.p)("softNavFlush",[i.id,!1,void 0],void 0,A.D.jserrors,n.ee)})))))}function at(){var t="api-ixn-",e=this;(0,y.X)(t+"get",(function(t){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).waitForEnd;this.associatedInteraction=e.getInteractionFor(t),this.associatedInteraction||(this.associatedInteraction=e.interactionInProgress=new W(e.agentIdentifier,"api",t,e.latestRouteSetByApi),e.setClosureHandlers()),!0===n&&(this.associatedInteraction.keepOpenUntilEndApi=!0)}),e.featureName,e.ee),(0,y.X)(t+"end",(function(t){this.associatedInteraction.done(t)}),e.featureName,e.ee),(0,y.X)(t+"save",(function(){this.associatedInteraction.forceSave=!0}),e.featureName,e.ee),(0,y.X)(t+"ignore",(function(){this.associatedInteraction.forceIgnore=!0}),e.featureName,e.ee),(0,y.X)(t+"getContext",(function(t,e){var n=this;"function"===typeof e&&setTimeout((function(){return e(n.associatedInteraction.customDataByApi)}),0)}),e.featureName,e.ee),(0,y.X)(t+"onEnd",(function(t,e){"function"===typeof e&&this.associatedInteraction.onDone.push(e)}),e.featureName,e.ee),(0,y.X)(t+"actionText",(function(t,e){e&&(this.associatedInteraction.customAttributes.actionText=e)}),e.featureName,e.ee),(0,y.X)(t+"setName",(function(t,e,n){e&&(this.associatedInteraction.customName=e),n&&(this.associatedInteraction.trigger=n)}),e.featureName,e.ee),(0,y.X)(t+"setAttribute",(function(t,e,n){this.associatedInteraction.customAttributes[e]=n}),e.featureName,e.ee),(0,y.X)(t+"routeName",(function(t,n){e.latestRouteSetByApi=n,e.interactionInProgress&&(e.interactionInProgress.newRoute=n)}),e.featureName,e.ee)}(0,v.Z)(nt,"featureName",w)}}]);
//# sourceMappingURL=basic-spa-aggregate.3c51bd39.chunk.js.map