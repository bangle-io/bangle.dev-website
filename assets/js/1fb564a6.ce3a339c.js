(self.webpackChunkbangle_dev_website=self.webpackChunkbangle_dev_website||[]).push([[76],{8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),i="tabItem_1uMI",c="tabItemActive_2DSg";var u=37,s=39;var d=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,d=e.values,p=e.groupId,m=e.className,f=o(),h=f.tabGroupChoices,v=f.setTabGroupChoices,g=(0,r.useState)(a),b=g[0],E=g[1],x=r.Children.toArray(e.children),w=[];if(null!=p){var y=h[p];null!=y&&y!==b&&d.some((function(e){return e.value===y}))&&E(y)}var k=function(e){var t=e.currentTarget,n=w.indexOf(t),r=d[n].value;E(r),null!=p&&(v(p,r),setTimeout((function(){var e,n,r,a,o,l,i,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,i=l.innerHeight,u=l.innerWidth,n>=0&&o<=u&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case s:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case u:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:k,onClick:k},n)}))),t?(0,r.cloneElement)(x.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},7386:function(e,t,n){"use strict";n.d(t,{bz:function(){return d},T9:function(){return m},ae:function(){return h}});var r=n(3552),a=n(7294),o=n(5697),l=n.n(o),i=n(1756),c=n(5064),u=n(8215),s=n(1262);function d(e){var t=e.filePath,n=e.language,r=e.createEditor,o=e.defaultTab,l=void 0===o?"example":o,i=e.onEditorReady,c=void 0===i?function(){}:i,u=e.SideCar,s=(0,a.useRef)(r),d=(0,a.useState)(!1),f=d[0],h=d[1],v=(0,a.useCallback)((function(){return a.createElement(p,{createEditor:s.current,onReady:h})}),[s,h]);return a.createElement(a.Fragment,null,a.createElement(m,{filePath:t,language:n,component:v,defaultTab:l}),f?c(f):null,f&&u?a.createElement(u,{editor:f}):null)}function p(e){var t=e.createEditor,n=e.onReady,r=(0,a.useRef)();return(0,a.useEffect)((function(){var e=t(r.current);return n(e),function(){e.destroy()}}),[t,n]),a.createElement("div",{ref:r})}function m(e){var t=e.filePath,n=e.language,r=e.component,o=e.defaultTab,l=void 0===o?"example":o;return a.createElement(v,null,a.createElement(c.Z,{defaultValue:l,values:[{label:"Example",value:"example"},{label:"Source code",value:"src"}]},a.createElement(u.Z,{value:"example"},a.createElement(s.Z,null,r)),a.createElement(u.Z,{value:"src"},a.createElement(f,{filePath:t,language:n}))))}function f(e){var t=e.filePath,n=e.language,r=void 0===n?"js":n,o=(0,a.useState)(),l=o[0],c=o[1];return(0,a.useEffect)((function(){var e=!1;return function(e){return fetch(e).then((function(e){return e.text()}))}(t).then((function(t){e||c(t)})).catch((function(n){console.error(n),e||c("Error: Could not load source code at "+t)})),function(){e=!0}}),[c,t]),l?a.createElement(i.Z,{className:"language-"+r},l):"loading..."}function h(e){var t="",n="";return e.split(/>\s*</).forEach((function(e){e.match(/^\/\w/)&&(n=n.substring("  ".length)),t+=n+"<"+e+">\r\n",e.match(/^<?\w[^>]*[^\/]$/)&&(n+="  ")})),t.substring(1,t.length-3)}m.propTypes={component:l().func.isRequired,language:l().string,filePath:l().string.isRequired};var v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={hasError:!1},t}return(0,r.Z)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.render=function(){return this.state.hasError?a.createElement("div",{style:{margin:"2rem 2rem",padding:"1rem 2rem",backgroundColor:"red",color:"white"}},"Whoops! There was an error loading this example, please file a github issue to report it"):this.props.children},t}(a.PureComponent)},8666:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return v},default:function(){return x},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return b}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=n.p+"a9303ecf8a52746569cce7c8aadaf4ac.jsx",i=n(5521),c=n(9743),u=n(3714),s=new i.H$("placeholder");function d(e){var t=new i._n({specs:[],plugins:function(){return[[c.Nd.plugins({key:s,tooltipRenderOpts:{placement:"right"},calculateType:function(e,t){var n=e.selection.$from.parent;return e.selection.empty&&n&&0===n.content.size?"placeholder":null}}),new i.Sy({view:function(){return{update:function(e,t){var n=e.state,r=s.getState(n),a=r.tooltipContentDOM;if("placeholder"===r.type){var o=n.doc.textBetween(0,n.doc.content.size," ").split(/\s+/).filter(Boolean).length;a.innerHTML='<span style="user-select:none;">Word count: '+o+"</span>"}}}}})]]},initialValue:"<p>Let us show the word count on every new line!</p>\n    <p></p>"}),n=new i.uF(e,{state:t}),r=n.view;return p(r.state.doc)(r.state,r.dispatch),n}var p=function(e){return function(t,n,r){var a=e.nodeSize-1;"doc"===e.type.name&&(a=e.content.size-1);var o=(0,u.B0)(a)(t.tr);return n&&n(o),!0}},m=n(7386),f=["components"],h={title:"Placeholder",id:"placeholder",hide_title:!0},v=void 0,g={unversionedId:"examples/placeholder",id:"examples/placeholder",isDocsHomePage:!1,title:"Placeholder",description:"<VanillaCodeExample",source:"@site/docs/examples/placeholder.mdx",sourceDirName:"examples",slug:"/examples/placeholder",permalink:"/docs/examples/placeholder",editUrl:"https://github.com/bangle-io/bangle.dev-website/edit/main/docs/examples/placeholder.mdx",version:"current",frontMatter:{title:"Placeholder",id:"placeholder",hide_title:!0},sidebar:"docs",previous:{title:"Exporting Data",permalink:"/docs/examples/exporting-data"},next:{title:"Text Formatting",permalink:"/docs/examples/text-formatting"}},b=[],E={toc:b};function x(e){var t=e.components,n=(0,a.Z)(e,f);return(0,o.kt)("wrapper",(0,r.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m.bz,{filePath:l,language:"js",createEditor:d,mdxType:"VanillaCodeExample"}),(0,o.kt)("p",null,"You can try some of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type some words and then press enter to see the number of words in the document.")))}x.isMDXComponent=!0}}]);