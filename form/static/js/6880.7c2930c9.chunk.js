"use strict";(self.webpackChunkappsmith=self.webpackChunkappsmith||[]).push([[6880],{33559:function(t,e,n){n.d(e,{S:function(){return i}});var i={FIRST_PAINT:"fp",FIRST_CONTENTFUL_PAINT:"fcp",FIRST_INPUT_DELAY:"fi",LARGEST_CONTENTFUL_PAINT:"lcp",CUMULATIVE_LAYOUT_SHIFT:"cls",INTERACTION_TO_NEXT_PAINT:"inp",LONG_TASK:"lt",TIME_TO_FIRST_BYTE:"ttfb"}},89596:function(t,e,n){n.d(e,{y:function(){return o}});var i=n(99038),r=n(63711),a=n(33559),o=new(n(2052).U)(a.S.FIRST_CONTENTFUL_PAINT);if(r.il)if(r.ux)try{if(!r.iS)performance.getEntriesByType("paint").forEach((function(t){"first-contentful-paint"===t.name&&o.update({value:Math.floor(t.startTime)})}))}catch(u){}else(0,i.a4)((function(t){var e=t.value,n=t.attribution;if(!r.iS&&!o.isValid){var i={timeToFirstByte:n.timeToFirstByte,firstByteToFCP:n.firstByteToFCP,loadState:n.loadState};o.update({value:e,attrs:i})}}))},69480:function(t,e,n){n.d(e,{U:function(){return a}});var i=n(63711),r=n(33559),a=new(n(2052).U)(r.S.FIRST_PAINT);if(i.il){var o;try{PerformanceObserver.supportedEntryTypes.includes("paint")&&!i.iS&&(o=new PerformanceObserver((function(t){Promise.resolve().then((function(){t.getEntries().forEach((function(t){"first-paint"!==t.name||a.isValid||(o.disconnect(),a.update({value:t.startTime}))}))}))}))).observe({type:"paint",buffered:!0})}catch(u){}}},2052:function(t,e,n){n.d(e,{U:function(){return s}});var i=n(15671),r=n(43144),a=n(4942),o=n(72346),u=n(86033),c=new WeakMap,s=function(){function t(e,n){(0,i.Z)(this,t),(0,o.Z)(this,c,{writable:!0,value:new Set}),(0,a.Z)(this,"history",[]),this.name=e,this.attrs={},this.roundingMethod="function"===typeof n?n:Math.floor}return(0,r.Z)(t,[{key:"update",value:function(t){var e=t.value,n=t.attrs,i=void 0===n?{}:n;if(!(e<0)){var r={value:this.roundingMethod(e),name:this.name,attrs:i};this.history.push(r),(0,u.Z)(this,c).forEach((function(t){try{t(r)}catch(e){}}))}}},{key:"current",get:function(){return this.history[this.history.length-1]||{value:void 0,name:this.name,attrs:{}}}},{key:"isValid",get:function(){return this.current.value>=0}},{key:"subscribe",value:function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("function"===typeof t)return(0,u.Z)(this,c).add(t),this.isValid&&n&&this.history.forEach((function(e){t(e)})),function(){(0,u.Z)(e,c).delete(t)}}}]),t}()},99038:function(t,e,n){n.d(e,{Fu:function(){return V},NO:function(){return rt},Yn:function(){return et},a4:function(){return k},mr:function(){return ct},mw:function(){return _}});var i,r,a,o,u,c=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},s=function(t){if("loading"===document.readyState)return"loading";var e=c();if(e){if(t<e.domInteractive)return"loading";if(0===e.domContentLoadedEventStart||t<e.domContentLoadedEventStart)return"dom-interactive";if(0===e.domComplete||t<e.domComplete)return"dom-content-loaded"}return"complete"},f=function(t){var e=t.nodeName;return 1===t.nodeType?e.toLowerCase():e.toUpperCase().replace(/^#/,"")},d=function(t,e){var n="";try{for(;t&&9!==t.nodeType;){var i=t,r=i.id?"#"+i.id:f(i)+(i.classList&&i.classList.value&&i.classList.value.trim()&&i.classList.value.trim().length?"."+i.classList.value.trim().replace(/\s+/g,"."):"");if(n.length+r.length>(e||100)-1)return n||r;if(n=n?r+">"+n:r,i.id)break;t=i.parentNode}}catch(t){}return n},l=-1,v=function(){return l},m=function(t){addEventListener("pageshow",(function(e){e.persisted&&(l=e.timeStamp,t(e))}),!0)},p=function(){var t=c();return t&&t.activationStart||0},h=function(t,e){var n=c(),i="navigate";return v()>=0?i="back-forward-cache":n&&(document.prerendering||p()>0?i="prerender":document.wasDiscarded?i="restore":n.type&&(i=n.type.replace(/_/g,"-"))),{name:t,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:i}},T=function(t,e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var i=new PerformanceObserver((function(t){Promise.resolve().then((function(){e(t.getEntries())}))}));return i.observe(Object.assign({type:t,buffered:!0},n||{})),i}}catch(t){}},g=function(t,e,n,i){var r,a;return function(o){e.value>=0&&(o||i)&&((a=e.value-(r||0))||void 0===r)&&(r=e.value,e.delta=a,e.rating=function(t,e){return t>e[1]?"poor":t>e[0]?"needs-improvement":"good"}(e.value,n),t(e))}},y=function(t){requestAnimationFrame((function(){return requestAnimationFrame((function(){return t()}))}))},E=function(t){var e=function(e){"pagehide"!==e.type&&"hidden"!==document.visibilityState||t(e)};addEventListener("visibilitychange",e,!0),addEventListener("pagehide",e,!0)},S=function(t){var e=!1;return function(n){e||(t(n),e=!0)}},b=-1,L=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},C=function(t){"hidden"===document.visibilityState&&b>-1&&(b="visibilitychange"===t.type?t.timeStamp:0,I())},w=function(){addEventListener("visibilitychange",C,!0),addEventListener("prerenderingchange",C,!0)},I=function(){removeEventListener("visibilitychange",C,!0),removeEventListener("prerenderingchange",C,!0)},F=function(){return b<0&&(b=L(),w(),m((function(){setTimeout((function(){b=L(),w()}),0)}))),{get firstHiddenTime(){return b}}},A=function(t){document.prerendering?addEventListener("prerenderingchange",(function(){return t()}),!0):t()},M=[1800,3e3],P=function(t,e){e=e||{},A((function(){var n,i=F(),r=h("FCP"),a=T("paint",(function(t){t.forEach((function(t){"first-contentful-paint"===t.name&&(a.disconnect(),t.startTime<i.firstHiddenTime&&(r.value=Math.max(t.startTime-p(),0),r.entries.push(t),n(!0)))}))}));a&&(n=g(t,r,M,e.reportAllChanges),m((function(i){r=h("FCP"),n=g(t,r,M,e.reportAllChanges),y((function(){r.value=performance.now()-i.timeStamp,n(!0)}))})))}))},N=[.1,.25],_=function(t,e){!function(t,e){e=e||{},P(S((function(){var n,i=h("CLS",0),r=0,a=[],o=function(t){t.forEach((function(t){if(!t.hadRecentInput){var e=a[0],n=a[a.length-1];r&&t.startTime-n.startTime<1e3&&t.startTime-e.startTime<5e3?(r+=t.value,a.push(t)):(r=t.value,a=[t])}})),r>i.value&&(i.value=r,i.entries=a,n())},u=T("layout-shift",o);u&&(n=g(t,i,N,e.reportAllChanges),E((function(){o(u.takeRecords()),n(!0)})),m((function(){r=0,i=h("CLS",0),n=g(t,i,N,e.reportAllChanges),y((function(){return n()}))})),setTimeout(n,0))})))}((function(e){!function(t){if(t.entries.length){var e=t.entries.reduce((function(t,e){return t&&t.value>e.value?t:e}));if(e&&e.sources&&e.sources.length){var n=(i=e.sources).find((function(t){return t.node&&1===t.node.nodeType}))||i[0];if(n)return void(t.attribution={largestShiftTarget:d(n.node),largestShiftTime:e.startTime,largestShiftValue:e.value,largestShiftSource:n,largestShiftEntry:e,loadState:s(e.startTime)})}}var i;t.attribution={}}(e),t(e)}),e)},k=function(t,e){P((function(e){!function(t){if(t.entries.length){var e=c(),n=t.entries[t.entries.length-1];if(e){var i=e.activationStart||0,r=Math.max(0,e.responseStart-i);return void(t.attribution={timeToFirstByte:r,firstByteToFCP:t.value-r,loadState:s(t.entries[0].startTime),navigationEntry:e,fcpEntry:n})}}t.attribution={timeToFirstByte:0,firstByteToFCP:t.value,loadState:s(v())}}(e),t(e)}),e)},B={passive:!0,capture:!0},R=new Date,x=function(t,e){i||(i=e,r=t,a=new Date,U(removeEventListener),O())},O=function(){if(r>=0&&r<a-R){var t={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(e){e(t)})),o=[]}},D=function(t){if(t.cancelable){var e=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,e){var n=function(){x(t,e),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,B),removeEventListener("pointercancel",i,B)};addEventListener("pointerup",n,B),addEventListener("pointercancel",i,B)}(e,t):x(e,t)}},U=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return t(e,D,B)}))},Z=[100,300],q=function(t,e){e=e||{},A((function(){var n,a=F(),u=h("FID"),c=function(t){t.startTime<a.firstHiddenTime&&(u.value=t.processingStart-t.startTime,u.entries.push(t),n(!0))},s=function(t){t.forEach(c)},f=T("first-input",s);n=g(t,u,Z,e.reportAllChanges),f&&E(S((function(){s(f.takeRecords()),f.disconnect()}))),f&&m((function(){var a;u=h("FID"),n=g(t,u,Z,e.reportAllChanges),o=[],r=-1,i=null,U(addEventListener),a=c,o.push(a),O()}))}))},V=function(t,e){q((function(e){!function(t){var e=t.entries[0];t.attribution={eventTarget:d(e.target),eventType:e.name,eventTime:e.startTime,eventEntry:e,loadState:s(e.startTime)}}(e),t(e)}),e)},H=0,Y=1/0,G=0,j=function(t){t.forEach((function(t){t.interactionId&&(Y=Math.min(Y,t.interactionId),G=Math.max(G,t.interactionId),H=G?(G-Y)/7+1:0)}))},K=function(){return u?H:performance.interactionCount||0},W=function(){"interactionCount"in performance||u||(u=T("event",j,{type:"event",buffered:!0,durationThreshold:0}))},X=[200,500],z=0,J=function(){return K()-z},Q=[],$={},tt=function(t){var e=Q[Q.length-1],n=$[t.interactionId];if(n||Q.length<10||t.duration>e.latency){if(n)n.entries.push(t),n.latency=Math.max(n.latency,t.duration);else{var i={id:t.interactionId,latency:t.duration,entries:[t]};$[i.id]=i,Q.push(i)}Q.sort((function(t,e){return e.latency-t.latency})),Q.splice(10).forEach((function(t){delete $[t.id]}))}},et=function(t,e){!function(t,e){e=e||{},A((function(){var n;W();var i,r=h("INP"),a=function(t){t.forEach((function(t){t.interactionId&&tt(t),"first-input"===t.entryType&&!Q.some((function(e){return e.entries.some((function(e){return t.duration===e.duration&&t.startTime===e.startTime}))}))&&tt(t)}));var e,n=(e=Math.min(Q.length-1,Math.floor(J()/50)),Q[e]);n&&n.latency!==r.value&&(r.value=n.latency,r.entries=n.entries,i())},o=T("event",a,{durationThreshold:null!==(n=e.durationThreshold)&&void 0!==n?n:40});i=g(t,r,X,e.reportAllChanges),o&&("PerformanceEventTiming"in window&&"interactionId"in PerformanceEventTiming.prototype&&o.observe({type:"first-input",buffered:!0}),E((function(){a(o.takeRecords()),r.value<0&&J()>0&&(r.value=0,r.entries=[]),i(!0)})),m((function(){Q=[],z=K(),r=h("INP"),i=g(t,r,X,e.reportAllChanges)})))}))}((function(e){!function(t){if(t.entries.length){var e=t.entries.sort((function(t,e){return e.duration-t.duration||e.processingEnd-e.processingStart-(t.processingEnd-t.processingStart)}))[0],n=t.entries.find((function(t){return t.target}));t.attribution={eventTarget:d(n&&n.target),eventType:e.name,eventTime:e.startTime,eventEntry:e,loadState:s(e.startTime)}}else t.attribution={}}(e),t(e)}),e)},nt=[2500,4e3],it={},rt=function(t,e){!function(t,e){e=e||{},A((function(){var n,i=F(),r=h("LCP"),a=function(t){var e=t[t.length-1];e&&e.startTime<i.firstHiddenTime&&(r.value=Math.max(e.startTime-p(),0),r.entries=[e],n())},o=T("largest-contentful-paint",a);if(o){n=g(t,r,nt,e.reportAllChanges);var u=S((function(){it[r.id]||(a(o.takeRecords()),o.disconnect(),it[r.id]=!0,n(!0))}));["keydown","click"].forEach((function(t){addEventListener(t,(function(){return setTimeout(u,0)}),!0)})),E(u),m((function(i){r=h("LCP"),n=g(t,r,nt,e.reportAllChanges),y((function(){r.value=performance.now()-i.timeStamp,it[r.id]=!0,n(!0)}))}))}}))}((function(e){!function(t){if(t.entries.length){var e=c();if(e){var n=e.activationStart||0,i=t.entries[t.entries.length-1],r=i.url&&performance.getEntriesByType("resource").filter((function(t){return t.name===i.url}))[0],a=Math.max(0,e.responseStart-n),o=Math.max(a,r?(r.requestStart||r.startTime)-n:0),u=Math.max(o,r?r.responseEnd-n:0),s=Math.max(u,i?i.startTime-n:0),f={element:d(i.element),timeToFirstByte:a,resourceLoadDelay:o-a,resourceLoadTime:u-o,elementRenderDelay:s-u,navigationEntry:e,lcpEntry:i};return i.url&&(f.url=i.url),r&&(f.lcpResourceEntry=r),void(t.attribution=f)}}t.attribution={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadTime:0,elementRenderDelay:t.value}}(e),t(e)}),e)},at=[800,1800],ot=function t(e){document.prerendering?A((function(){return t(e)})):"complete"!==document.readyState?addEventListener("load",(function(){return t(e)}),!0):setTimeout(e,0)},ut=function(t,e){e=e||{};var n=h("TTFB"),i=g(t,n,at,e.reportAllChanges);ot((function(){var r=c();if(r){var a=r.responseStart;if(a<=0||a>performance.now())return;n.value=Math.max(a-p(),0),n.entries=[r],i(!0),m((function(){n=h("TTFB",0),(i=g(t,n,at,e.reportAllChanges))(!0)}))}}))},ct=function(t,e){ut((function(e){!function(t){if(t.entries.length){var e=t.entries[0],n=e.activationStart||0,i=Math.max(e.domainLookupStart-n,0),r=Math.max(e.connectStart-n,0),a=Math.max(e.requestStart-n,0);t.attribution={waitingTime:i,dnsTime:r-i,connectionTime:a-r,requestTime:t.value-a,navigationEntry:e}}else t.attribution={waitingTime:0,dnsTime:0,connectionTime:0,requestTime:0}}(e),t(e)}),e)}}}]);
//# sourceMappingURL=6880.7c2930c9.chunk.js.map