(self.webpackChunkbangle_dev_website=self.webpackChunkbangle_dev_website||[]).push([[9743],{9743:function(t,e,n){"use strict";n.d(e,{VA:function(){return s},Nd:function(){return o},UX:function(){return r}});var o={};n.r(o),n.d(o,{_syncTooltipOnUpdate:function(){return Dt},commands:function(){return xt},hideSelectionTooltip:function(){return Ct},plugins:function(){return Tt},queryIsSelectionTooltipActive:function(){return Rt},querySelectionTooltipType:function(){return jt},updateSelectionTooltipType:function(){return _t}});var r={};n.r(r),n.d(r,{commands:function(){return qt},decrementSuggestTooltipCounter:function(){return zt},defaultKeys:function(){return Lt},incrementSuggestTooltipCounter:function(){return Yt},plugins:function(){return Ht},queryIsSuggestTooltipActive:function(){return Xt},queryTriggerText:function(){return $t},removeSuggestMark:function(){return Kt},replaceSuggestMarkWith:function(){return Vt},resetSuggestTooltipCounter:function(){return Ft},spec:function(){return It},updateSuggestTooltipCounter:function(){return Jt}});var i=n(5521),a=n(8032);function s(t=["div",{class:"bangle-tooltip",role:"tooltip"},["div",{class:"bangle-tooltip-content"},0]],e=!1){const{dom:n,contentDOM:o}=a.PW.renderSpec(window.document,t);if(e&&!n.querySelector(".bangle-tooltip-arrow")){const t=a.PW.renderSpec(window.document,["div",{class:"bangle-tooltip-arrow","data-popper-arrow":""}]);n.appendChild(t.dom)}return{dom:n,contentDOM:o}}var c=n(3714);function u(t){return t.split("-")[0]}var p="top",l="bottom",f="right",d="left",h="auto",m=[p,l,f,d],g="start",y="end",v="viewport",w="popper",b=m.reduce((function(t,e){return t.concat([e+"-"+g,e+"-"+y])}),[]),O=[].concat(m,[h]).reduce((function(t,e){return t.concat([e,e+"-"+g,e+"-"+y])}),[]),T=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];var x={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,o=t.name,r=n.offset,i=void 0===r?[0,0]:r,a=O.reduce((function(t,n){return t[n]=function(t,e,n){var o=u(t),r=[d,p].indexOf(o)>=0?-1:1,i="function"==typeof n?n(Object.assign({},e,{placement:t})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*r,[d,f].indexOf(o)>=0?{x:s,y:a}:{x:a,y:s}}(n,e.rects,i),t}),{}),s=a[e.placement],c=s.x,l=s.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[o]=a}};function S(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var M=Math.max,k=Math.min,E=Math.round;function D(t,e,n){return M(t,k(e,n))}function _(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function C(t){var e=_(t),n=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:o}}function R(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function j(t){return t?(t.nodeName||"").toLowerCase():null}function P(t){return R(t).getComputedStyle(t)}function N(t){return t instanceof R(t).Element||t instanceof Element}function A(t){return t instanceof R(t).HTMLElement||t instanceof HTMLElement}function I(t){return"undefined"!=typeof ShadowRoot&&(t instanceof R(t).ShadowRoot||t instanceof ShadowRoot)}function H(t){return["table","td","th"].indexOf(j(t))>=0}function q(t){return((N(t)?t.ownerDocument:t.document)||window.document).documentElement}function L(t){return"html"===j(t)?t:t.assignedSlot||t.parentNode||(I(t)?t.host:null)||q(t)}function W(t){return A(t)&&"fixed"!==P(t).position?t.offsetParent:null}function B(t){for(var e=R(t),n=W(t);n&&H(n)&&"static"===P(n).position;)n=W(n);return n&&("html"===j(n)||"body"===j(n)&&"static"===P(n).position)?e:n||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&A(t)&&"fixed"===P(t).position)return null;for(var n=L(t);A(n)&&["html","body"].indexOf(j(n))<0;){var o=P(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||e&&"filter"===o.willChange||e&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(t)||e}function U(t){var e=R(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function $(t){return _(q(t)).left+U(t).scrollLeft}function X(t){var e=P(t),n=e.overflow,o=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function V(t){return["html","body","#document"].indexOf(j(t))>=0?t.ownerDocument.body:A(t)&&X(t)?t:V(L(t))}function K(t,e){var n;void 0===e&&(e=[]);var o=V(t),r=o===(null==(n=t.ownerDocument)?void 0:n.body),i=R(o),a=r?[i].concat(i.visualViewport||[],X(o)?o:[]):o,s=e.concat(a);return r?s:s.concat(K(L(a)))}function Y(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&I(n)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function z(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function F(t,e){return e===v?z(function(t){var e=R(t),n=q(t),o=e.visualViewport,r=n.clientWidth,i=n.clientHeight,a=0,s=0;return o&&(r=o.width,i=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=o.offsetLeft,s=o.offsetTop)),{width:r,height:i,x:a+$(t),y:s}}(t)):A(e)?function(t){var e=_(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):z(function(t){var e,n=q(t),o=U(t),r=null==(e=t.ownerDocument)?void 0:e.body,i=M(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=M(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-o.scrollLeft+$(t),c=-o.scrollTop;return"rtl"===P(r||n).direction&&(s+=M(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(q(t)))}function J(t,e,n){var o="clippingParents"===e?function(t){var e=K(L(t)),n=["absolute","fixed"].indexOf(P(t).position)>=0&&A(t)?B(t):t;return N(n)?e.filter((function(t){return N(t)&&Y(t,n)&&"body"!==j(t)})):[]}(t):[].concat(e),r=[].concat(o,[n]),i=r[0],a=r.reduce((function(e,n){var o=F(t,n);return e.top=M(o.top,e.top),e.right=k(o.right,e.right),e.bottom=k(o.bottom,e.bottom),e.left=M(o.left,e.left),e}),F(t,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Z(t){return t.split("-")[1]}function G(t){var e,n=t.reference,o=t.element,r=t.placement,i=r?u(r):null,a=r?Z(r):null,s=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2;switch(i){case p:e={x:s,y:n.y-o.height};break;case l:e={x:s,y:n.y+n.height};break;case f:e={x:n.x+n.width,y:c};break;case d:e={x:n.x-o.width,y:c};break;default:e={x:n.x,y:n.y}}var h=i?S(i):null;if(null!=h){var m="y"===h?"height":"width";switch(a){case g:e[h]=e[h]-(n[m]/2-o[m]/2);break;case y:e[h]=e[h]+(n[m]/2-o[m]/2)}}return e}function Q(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function tt(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}function et(t,e){void 0===e&&(e={});var n=e,o=n.placement,r=void 0===o?t.placement:o,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,c=void 0===s?v:s,u=n.elementContext,d=void 0===u?w:u,h=n.altBoundary,g=void 0!==h&&h,y=n.padding,b=void 0===y?0:y,O=Q("number"!=typeof b?b:tt(b,m)),T=d===w?"reference":w,x=t.elements.reference,S=t.rects.popper,M=t.elements[g?T:d],k=J(N(M)?M:M.contextElement||q(t.elements.popper),a,c),E=_(x),D=G({reference:E,element:S,strategy:"absolute",placement:r}),C=z(Object.assign({},S,D)),R=d===w?C:E,j={top:k.top-R.top+O.top,bottom:R.bottom-k.bottom+O.bottom,left:k.left-R.left+O.left,right:R.right-k.right+O.right},P=t.modifiersData.offset;if(d===w&&P){var A=P[r];Object.keys(j).forEach((function(t){var e=[f,l].indexOf(t)>=0?1:-1,n=[p,l].indexOf(t)>=0?"y":"x";j[t]+=A[n]*e}))}return j}var nt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name,r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,h=n.rootBoundary,m=n.altBoundary,y=n.padding,v=n.tether,w=void 0===v||v,b=n.tetherOffset,O=void 0===b?0:b,T=et(e,{boundary:c,rootBoundary:h,padding:y,altBoundary:m}),x=u(e.placement),E=Z(e.placement),_=!E,R=S(x),j="x"===R?"y":"x",P=e.modifiersData.popperOffsets,N=e.rects.reference,A=e.rects.popper,I="function"==typeof O?O(Object.assign({},e.rects,{placement:e.placement})):O,H={x:0,y:0};if(P){if(i||s){var q="y"===R?p:d,L="y"===R?l:f,W="y"===R?"height":"width",U=P[R],$=P[R]+T[q],X=P[R]-T[L],V=w?-A[W]/2:0,K=E===g?N[W]:A[W],Y=E===g?-A[W]:-N[W],z=e.elements.arrow,F=w&&z?C(z):{width:0,height:0},J=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},G=J[q],Q=J[L],tt=D(0,N[W],F[W]),nt=_?N[W]/2-V-tt-G-I:K-tt-G-I,ot=_?-N[W]/2+V+tt+Q+I:Y+tt+Q+I,rt=e.elements.arrow&&B(e.elements.arrow),it=rt?"y"===R?rt.clientTop||0:rt.clientLeft||0:0,at=e.modifiersData.offset?e.modifiersData.offset[e.placement][R]:0,st=P[R]+nt-at-it,ct=P[R]+ot-at;if(i){var ut=D(w?k($,st):$,U,w?M(X,ct):X);P[R]=ut,H[R]=ut-U}if(s){var pt="x"===R?p:d,lt="x"===R?l:f,ft=P[j],dt=ft+T[pt],ht=ft-T[lt],mt=D(w?k(dt,st):dt,ft,w?M(ht,ct):ht);P[j]=mt,H[j]=mt-ft}}e.modifiersData[o]=H}},requiresIfExists:["offset"]},ot={left:"right",right:"left",bottom:"top",top:"bottom"};function rt(t){return t.replace(/left|right|bottom|top/g,(function(t){return ot[t]}))}var it={start:"end",end:"start"};function at(t){return t.replace(/start|end/g,(function(t){return it[t]}))}var st={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,y=n.padding,v=n.boundary,w=n.rootBoundary,T=n.altBoundary,x=n.flipVariations,S=void 0===x||x,M=n.allowedAutoPlacements,k=e.options.placement,E=u(k),D=c||(E===k||!S?[rt(k)]:function(t){if(u(t)===h)return[];var e=rt(t);return[at(t),e,at(e)]}(k)),_=[k].concat(D).reduce((function(t,n){return t.concat(u(n)===h?function(t,e){void 0===e&&(e={});var n=e,o=n.placement,r=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,p=void 0===c?O:c,l=Z(o),f=l?s?b:b.filter((function(t){return Z(t)===l})):m,d=f.filter((function(t){return p.indexOf(t)>=0}));0===d.length&&(d=f);var h=d.reduce((function(e,n){return e[n]=et(t,{placement:n,boundary:r,rootBoundary:i,padding:a})[u(n)],e}),{});return Object.keys(h).sort((function(t,e){return h[t]-h[e]}))}(e,{placement:n,boundary:v,rootBoundary:w,padding:y,flipVariations:S,allowedAutoPlacements:M}):n)}),[]),C=e.rects.reference,R=e.rects.popper,j=new Map,P=!0,N=_[0],A=0;A<_.length;A++){var I=_[A],H=u(I),q=Z(I)===g,L=[p,l].indexOf(H)>=0,W=L?"width":"height",B=et(e,{placement:I,boundary:v,rootBoundary:w,altBoundary:T,padding:y}),U=L?q?f:d:q?l:p;C[W]>R[W]&&(U=rt(U));var $=rt(U),X=[];if(i&&X.push(B[H]<=0),s&&X.push(B[U]<=0,B[$]<=0),X.every((function(t){return t}))){N=I,P=!1;break}j.set(I,X)}if(P)for(var V=function(t){var e=_.find((function(e){var n=j.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return N=e,"break"},K=S?3:1;K>0;K--){if("break"===V(K))break}e.placement!==N&&(e.modifiersData[o]._skip=!0,e.placement=N,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};var ct={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=G({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}};var ut={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,o=t.name,r=t.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=u(n.placement),c=S(s),h=[d,f].indexOf(s)>=0?"height":"width";if(i&&a){var g=function(t,e){return Q("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:tt(t,m))}(r.padding,n),y=C(i),v="y"===c?p:d,w="y"===c?l:f,b=n.rects.reference[h]+n.rects.reference[c]-a[c]-n.rects.popper[h],O=a[c]-n.rects.reference[c],T=B(i),x=T?"y"===c?T.clientHeight||0:T.clientWidth||0:0,M=b/2-O/2,k=g[v],E=x-y[h]-g[w],_=x/2-y[h]/2+M,R=D(k,_,E),j=c;n.modifiersData[o]=((e={})[j]=R,e.centerOffset=R-_,e)}},effect:function(t){var e=t.state,n=t.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!=typeof o||(o=e.elements.popper.querySelector(o)))&&Y(e.elements.popper,o)&&(e.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function pt(t,e,n){void 0===n&&(n=!1);var o,r,i=q(e),a=_(t),s=A(e),c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(s||!s&&!n)&&(("body"!==j(e)||X(i))&&(c=(o=e)!==R(o)&&A(o)?{scrollLeft:(r=o).scrollLeft,scrollTop:r.scrollTop}:U(o)),A(e)?((u=_(e)).x+=e.clientLeft,u.y+=e.clientTop):i&&(u.x=$(i))),{x:a.left+c.scrollLeft-u.x,y:a.top+c.scrollTop-u.y,width:a.width,height:a.height}}function lt(t){var e=new Map,n=new Set,o=[];function r(t){n.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!n.has(t)){var o=e.get(t);o&&r(o)}})),o.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||r(t)})),o}var ft={placement:"bottom",modifiers:[],strategy:"absolute"};function dt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function ht(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,o=void 0===n?[]:n,r=e.defaultOptions,i=void 0===r?ft:r;return function(t,e,n){void 0===n&&(n=i);var r,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},ft,i),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},c=[],u=!1,p={state:s,setOptions:function(n){l(),s.options=Object.assign({},i,s.options,n),s.scrollParents={reference:N(t)?K(t):t.contextElement?K(t.contextElement):[],popper:K(e)};var r=function(t){var e=lt(t);return T.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}(function(t){var e=t.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}([].concat(o,s.options.modifiers)));return s.orderedModifiers=r.filter((function(t){return t.enabled})),s.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,o=void 0===n?{}:n,r=t.effect;if("function"==typeof r){var i=r({state:s,name:e,instance:p,options:o}),a=function(){};c.push(i||a)}})),p.update()},forceUpdate:function(){if(!u){var t=s.elements,e=t.reference,n=t.popper;if(dt(e,n)){s.rects={reference:pt(e,B(n),"fixed"===s.options.strategy),popper:C(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(t){return s.modifiersData[t.name]=Object.assign({},t.data)}));for(var o=0;o<s.orderedModifiers.length;o++)if(!0!==s.reset){var r=s.orderedModifiers[o],i=r.fn,a=r.options,c=void 0===a?{}:a,l=r.name;"function"==typeof i&&(s=i({state:s,options:c,name:l,instance:p})||s)}else s.reset=!1,o=-1}}},update:(r=function(){return new Promise((function(t){p.forceUpdate(),t(s)}))},function(){return a||(a=new Promise((function(t){Promise.resolve().then((function(){a=void 0,t(r())}))}))),a}),destroy:function(){l(),u=!0}};if(!dt(t,e))return p;function l(){c.forEach((function(t){return t()})),c=[]}return p.setOptions(n).then((function(t){!u&&n.onFirstUpdate&&n.onFirstUpdate(t)})),p}}var mt={passive:!0};var gt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function yt(t){var e,n=t.popper,o=t.popperRect,r=t.placement,i=t.offsets,a=t.position,s=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,h=!0===u?function(t){var e=t.x,n=t.y,o=window.devicePixelRatio||1;return{x:E(E(e*o)/o)||0,y:E(E(n*o)/o)||0}}(i):"function"==typeof u?u(i):i,m=h.x,g=void 0===m?0:m,y=h.y,v=void 0===y?0:y,w=i.hasOwnProperty("x"),b=i.hasOwnProperty("y"),O=d,T=p,x=window;if(c){var S=B(n),M="clientHeight",k="clientWidth";S===R(n)&&"static"!==P(S=q(n)).position&&(M="scrollHeight",k="scrollWidth"),S=S,r===p&&(T=l,v-=S[M]-o.height,v*=s?1:-1),r===d&&(O=f,g-=S[k]-o.width,g*=s?1:-1)}var D,_=Object.assign({position:a},c&&gt);return s?Object.assign({},_,((D={})[T]=b?"0":"",D[O]=w?"0":"",D.transform=(x.devicePixelRatio||1)<2?"translate("+g+"px, "+v+"px)":"translate3d("+g+"px, "+v+"px, 0)",D)):Object.assign({},_,((e={})[T]=b?v+"px":"",e[O]=w?g+"px":"",e.transform="",e))}var vt=ht({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,o=t.options,r=o.scroll,i=void 0===r||r,a=o.resize,s=void 0===a||a,c=R(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&u.forEach((function(t){t.addEventListener("scroll",n.update,mt)})),s&&c.addEventListener("resize",n.update,mt),function(){i&&u.forEach((function(t){t.removeEventListener("scroll",n.update,mt)})),s&&c.removeEventListener("resize",n.update,mt)}},data:{}},ct,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,p={placement:u(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,yt(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:c})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,yt(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},o=e.attributes[t]||{},r=e.elements[t];A(r)&&j(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(t){var e=o[t];!1===e?r.removeAttribute(t):r.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var o=e.elements[t],r=e.attributes[t]||{},i=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{});A(o)&&j(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(t){o.removeAttribute(t)})))}))}},requires:["computeStyles"]}]});const wt=function({stateKey:t,renderOpts:{tooltipDOMSpec:e,placement:n="top",getReferenceElement:o,getScrollContainer:r=(t=>t.dom.parentElement),onUpdateTooltip:a=((t,e,n)=>{}),onHideTooltip:u=((t,e,n)=>{}),tooltipOffset:p=(()=>[0,.5*Ot]),fallbackPlacements:l=["bottom","top"],customPopperModifiers:f}}){const d=new i.Sy({view:t=>new h(t)});class h{constructor(n){Object.defineProperty(this,"popperInstance",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_view",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_tooltip",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_scrollContainerDOM",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this._view=n;const{dom:o}=s(e);this._tooltip=o,this._scrollContainerDOM=r(n),this._view.dom.parentNode.appendChild(this._tooltip);const i=t.getState(n.state);!function(t){if("boolean"!=typeof t.show)throw(0,c.Bo)('Tooltip must be controlled by a plugin having a boolean field "show" in its state, but received the state=',t),new Error('"show" field required.')}(i),i.show&&this._showTooltip()}update(e,n){const o=t.getState(e.state);o!==t.getState(n)&&(o.show?(bt("calling update toolip"),a.call(this,e.state,e.dispatch,e),this._showTooltip()):(bt("calling hide tooltip"),this._hideTooltip()))}destroy(){this.popperInstance&&(this.popperInstance.destroy(),this.popperInstance=null),this._view.dom.parentNode.removeChild(this._tooltip)}_hideTooltip(){bt("hiding"),this.popperInstance&&(this._tooltip.removeAttribute("data-show"),this.popperInstance.destroy(),this.popperInstance=null,u.call(this,this._view.state,this._view.dispatch,this._view))}_showTooltip(){this._tooltip.setAttribute("data-show",""),this._createPopperInstance(this._view),this.popperInstance.update()}_createPopperInstance(t){if(this.popperInstance)return;const e=this._tooltip.querySelector("[data-popper-arrow]"),r=[x,nt,st,{name:"offset",options:{offset:t=>p(t)}},{name:"flip",options:{fallbackPlacements:l,padding:10}},{name:"preventOverflow",options:{boundary:this._scrollContainerDOM}},ct,e?ut:void 0,e?{name:"arrow",options:{element:e}}:void 0].filter(Boolean);this.popperInstance=vt(o(t,this._tooltip,this._scrollContainerDOM),this._tooltip,{placement:n,modifiers:f?f(t,this._tooltip,this._scrollContainerDOM,r):r}),a.call(this,t.state,t.dispatch,t)}}return d};let bt=()=>{};const Ot="undefined"==typeof window?12:parseFloat(getComputedStyle(document.documentElement).fontSize);const Tt=function({key:t=new a.H$("selectionTooltipPlugin"),calculateType:e=((t,e)=>t.selection.empty?null:"default"),tooltipRenderOpts:n={}}){return()=>{const o=s(n.tooltipDOMSpec);return[Mt({key:t,tooltipDOMSpec:o,calculateType:e}),kt({stateKey:t}),wt({stateKey:t,renderOpts:{...n,getReferenceElement:Et,tooltipDOMSpec:o}})]}},xt={updateSelectionTooltipType:_t,hideSelectionTooltip:Ct,queryIsSelectionTooltipActive:Rt,querySelectionTooltipType:jt};let St=()=>{};function Mt({key:t,calculateType:e,tooltipDOMSpec:n}){return new i.Sy({key:t,state:{init:(t,o)=>{const r=e(o,null);return{type:r,tooltipContentDOM:n.contentDOM,show:"string"==typeof r,calculateType:e}},apply:(e,n)=>{const o=e.getMeta(t);return void 0===o||null==o.type&&null==n.type?n:(St("update tooltip state to ",o.type),{...n,type:o.type,show:"string"==typeof o.type})}}})}function kt({stateKey:t}){let e=!1;return new i.Sy({props:{handleDOMEvents:{mousedown:(t,n)=>(e=!0,!1),mouseup:(n,o)=>(e=!1,Dt(t)(n.state,n.dispatch,n),!1)}},view:()=>({update(n,o){const r=n.state;if(!(e||o===r||o&&o.doc.eq(r.doc)&&o.selection.eq(r.selection)))return Dt(t)(n.state,n.dispatch,n)}})})}function Et(t){return{getBoundingClientRect:()=>{const{selection:e}=t.state;let{head:n,from:o}=e;const r=e instanceof a.qv?o:n,i=t.coordsAtPos(r);let{top:s,bottom:c,left:u,right:p}=i,l=p-u;if(e instanceof a.qv){const e=t.nodeDOM(r);l=e?e.clientWidth:l}return{width:l,height:c-s,top:s,right:p,bottom:c,left:u}}}}function Dt(t){return(e,n,o)=>{const r=t.getState(e),i=r.calculateType(e,r.type);return"string"==typeof i?_t(t,i)(e,n,o):null==i&&null!=r.type&&Ct(t)(e,n,o)}}function _t(t,e){return(n,o,r)=>(St("updateSelectionTooltipType",e),o&&o(n.tr.setMeta(t,{type:e}).setMeta("addToHistory",!1)),!0)}function Ct(t){return(e,n,o)=>(St("hideSelectionTooltip"),n&&n(e.tr.setMeta(t,{type:null}).setMeta("addToHistory",!1)),!0)}function Rt(t){return e=>{const n=t.getState(e);return!(!n||"string"!=typeof n.type)}}function jt(t){return e=>{const n=t.getState(e);return n&&n.type}}function Pt(t,e,n){const o=new RegExp(`(^|[.!?\\s\ufffc])(${r=n,r&&At.test(r)?r.replace(Nt,"\\$&"):r||""})$`);var r;return new a.VK(o,((n,o)=>{const r=o[3]||o[2];if(!r)return null;const i=t.mark(e,{trigger:r}),{tr:s,selection:c}=n;if(r.length>1){const t=a.Bs.create(s.doc,c.from,c.from-r.length+1);s.setSelection(t)}const u=c.$from.marks();return s.replaceSelectionWith(t.text(r,[i,...u]),!1)}))}const Nt=/[\\^$.*+?()[\]{}|]/g,At=RegExp(Nt.source);const It=function({markName:t,trigger:e,markColor:n="#005893"}){return{name:t,type:"mark",schema:{inclusive:!0,group:"suggestTriggerMarks",parseDOM:[{tag:`span[data-${t}]`}],toDOM:e=>["span",{"data-bangle-name":t,"data-suggest-trigger":e.attrs.trigger,style:`color: ${n}`}],attrs:{trigger:{default:e}}},markdown:{toMarkdown:{open:"",close:"",mixable:!0}}}},Ht=function({key:t=new a.H$("suggest_tooltip"),markName:e,trigger:n,tooltipRenderOpts:o,keybindings:r=Lt,onEnter:i=((e,n,o)=>Kt(t)(e,n,o)),onArrowDown:s=Yt(t),onArrowUp:u=zt(t),onEscape:p=((e,n,o)=>Kt(t)(e,n,o)),onArrowLeft:l,onArrowRight:f}){return({schema:d})=>{const h=Xt(t);return[new a.Sy({key:t,state:{init:(t,o)=>({trigger:n,markName:e,triggerText:"",show:!1,counter:0}),apply(o,r,i,a){const s=o.getMeta(t);if(void 0===s)return r;if("RENDER_TOOLTIP"===s.type)return{...r,triggerText:Ut(a,e,n),show:!0};if("HIDE_TOOLTIP"===s.type)return!1===r.show?r:{...r,triggerText:"",show:!1,counter:0};if("INCREMENT_COUNTER"===s.type)return{...r,counter:r.counter+1};if("RESET_COUNTER"===s.type)return{...r,counter:0};if("UPDATE_COUNTER"===s.type)return{...r,counter:s.value};if("DECREMENT_COUNTER"===s.type)return{...r,counter:r.counter-1};throw new Error("Unknown type")}}}),wt({stateKey:t,renderOpts:{...o,getReferenceElement:(m=t=>{const n=d.marks[e],{selection:o}=t;return(0,c.jy)(n,t.doc,o.from-1,o.to)},(t,e,n)=>({getBoundingClientRect:()=>{let e=t.state;const n=m(e),o=n.start>-1?n.start+1:0,r=t.coordsAtPos(o),i=t.coordsAtPos(n.end>-1?n.end:o);let{left:a,right:s}=r,{top:c,bottom:u}=i,p={width:s-a,height:u-c,top:c,right:a,bottom:u,left:a};return p}}))}}),Pt(d,e,n),Wt({trigger:n,markName:e,key:t}),r&&(0,a.$f)({[r.select]:(0,c.hX)(h,i),[r.up]:(0,c.hX)(h,u),[r.down]:(0,c.hX)(h,s),[r.left]:(0,c.hX)(h,l),[r.right]:(0,c.hX)(h,f),[r.hide]:(0,c.hX)(h,p)})];var m}},qt={queryTriggerText:$t,queryIsSuggestTooltipActive:Xt,replaceSuggestMarkWith:Vt,incrementSuggestTooltipCounter:Yt,decrementSuggestTooltipCounter:zt,resetSuggestTooltipCounter:Ft},Lt={select:"Enter",up:"ArrowUp",down:"ArrowDown",hide:"Escape",right:void 0,left:void 0};function Wt({key:t,trigger:e,markName:n}){return new a.Sy({view:()=>({update:(o,r)=>{const{state:i}=o;if(r===i||!i.selection.empty)return;const a=i.schema.marks[n];if(r.doc.eq(i.doc)&&i.selection.eq(r&&r.selection)&&Bt(i,a)===Bt(r,a))return;const s=function(t){return e=>{const{from:n,to:o}=e.selection,r=e.schema.marks[t];return e.doc.rangeHasMark(n-1,o,r)}}(n)(i);!s||function(t,e,n){const{nodeBefore:o}=t.selection.$from;if(!o)return!1;if(!e.isInSet(o.marks||[]))return!1;return(o.textContent||"").includes(n)}(i,a,e)?s?function(t){return(e,n,o)=>(n&&n(e.tr.setMeta(t,{type:"RENDER_TOOLTIP"}).setMeta("addToHistory",!1)),!0)}(t)(o.state,o.dispatch,o):!0===t.getState(i).show&&function(t){return(e,n,o)=>(n&&n(e.tr.setMeta(t,{type:"HIDE_TOOLTIP"}).setMeta("addToHistory",!1)),!0)}(t)(o.state,o.dispatch,o):Kt(t)(i,o.dispatch,o)}})})}function Bt(t,e){return t&&t.storedMarks&&e.isInSet(t.storedMarks)}function Ut(t,e,n){const o=t.schema.marks[e],{nodeBefore:r}=t.selection.$from;if(!r)return"";if(!o.isInSet(r.marks||[]))return"";return(r.textContent||"").replace(/^([^\x00-\xFF]|[\s\n])+/g,"").replace(n,"")}function $t(t){return e=>{const{trigger:n,markName:o}=t.getState(e);return Ut(e,o,n)}}function Xt(t){return e=>t.getState(e)&&t.getState(e).show}function Vt(t,e){return(n,o,r)=>{const{markName:i}=t.getState(n),{schema:s}=n,u=s.marks[i],{selection:p}=n,l=(0,c.jy)(u,n.doc,p.from-1,p.to);if(!l||-1===l.start)return!1;const f=(()=>{const{start:t,end:o}=l;let r=n.tr.removeStoredMark(u).replaceWith(t,o,a.HY.empty);if(!e)return r;const i=e instanceof a.HY;let s;try{s=e instanceof a.NB||i?e:"string"==typeof e?n.schema.text(e):a.NB.fromJSON(n.schema,e)}catch(p){return console.error(p),r}if(s.isText)r=r.replaceWith(t,t,s);else if(s.isBlock)r=(0,c.Z3)(s)(r);else if(s.isInline||i){const e=i?s:a.HY.fromArray([s,n.schema.text(" ")]);if(r=r.replaceWith(t,t,e),c.e$){const t=document.getSelection();t&&t.empty()}return r=r.setSelection(a.Y1.near(r.doc.resolve(t+e.size))),r}return r})();return o&&(null==r||r.focus(),o(f)),!0}}function Kt(t){return(e,n,o)=>{const{markName:r}=t.getState(e),{schema:i,selection:a}=e,s=i.marks[r],u=(0,c.jy)(s,e.doc,a.from-1,a.to),{start:p,end:l}=u;return-1===p&&e.storedMarks&&s.isInSet(e.storedMarks)?(n&&n(e.tr.removeStoredMark(s)),!0):-1!==p&&(n&&n(e.tr.removeMark(p,l,s).removeStoredMark(s).setMeta("addToHistory",!1)),!0)}}function Yt(t){return(e,n,o)=>(n&&n(e.tr.setMeta(t,{type:"INCREMENT_COUNTER"}).setMeta("addToHistory",!1)),!0)}function zt(t){return(e,n,o)=>(n&&n(e.tr.setMeta(t,{type:"DECREMENT_COUNTER"}).setMeta("addToHistory",!1)),!0)}function Ft(t){return(e,n,o)=>(n&&n(e.tr.setMeta(t,{type:"RESET_COUNTER"}).setMeta("addToHistory",!1)),!0)}function Jt(t,e){return(n,o,r)=>(o&&o(n.tr.setMeta(t,{type:"UPDATE_COUNTER",value:e}).setMeta("addToHistory",!1)),!0)}}}]);