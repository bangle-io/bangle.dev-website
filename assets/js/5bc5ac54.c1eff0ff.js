(self.webpackChunkbangle_dev_website=self.webpackChunkbangle_dev_website||[]).push([[4733],{8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",u="tabItemActive_2DSg";var s=37,c=39;var d=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,d=e.values,m=e.groupId,p=e.className,f=o(),g=f.tabGroupChoices,h=f.setTabGroupChoices,v=(0,a.useState)(r),b=v[0],k=v[1],x=a.Children.toArray(e.children),w=[];if(null!=m){var E=g[m];null!=E&&E!==b&&d.some((function(e){return e.value===E}))&&k(E)}var y=function(e){var t=e.currentTarget,n=w.indexOf(t),a=d[n].value;k(a),null!=m&&(h(m,a),setTimeout((function(){var e,n,a,r,o,i,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case c:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case s:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:y,onClick:y},n)}))),t?(0,a.cloneElement)(x.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},7386:function(e,t,n){"use strict";n.d(t,{bz:function(){return d},T9:function(){return p},ae:function(){return g}});var a=n(3552),r=n(7294),o=n(5697),i=n.n(o),l=n(1756),u=n(5064),s=n(8215),c=n(1262);function d(e){var t=e.filePath,n=e.language,a=e.createEditor,o=e.defaultTab,i=void 0===o?"example":o,l=e.onEditorReady,u=void 0===l?function(){}:l,s=e.SideCar,c=(0,r.useRef)(a),d=(0,r.useState)(!1),f=d[0],g=d[1],h=(0,r.useCallback)((function(){return r.createElement(m,{createEditor:c.current,onReady:g})}),[c,g]);return r.createElement(r.Fragment,null,r.createElement(p,{filePath:t,language:n,component:h,defaultTab:i}),f?u(f):null,f&&s?r.createElement(s,{editor:f}):null)}function m(e){var t=e.createEditor,n=e.onReady,a=(0,r.useRef)();return(0,r.useEffect)((function(){var e=t(a.current);return n(e),function(){e.destroy()}}),[t,n]),r.createElement("div",{ref:a})}function p(e){var t=e.filePath,n=e.language,a=e.component,o=e.defaultTab,i=void 0===o?"example":o;return r.createElement(h,null,r.createElement(u.Z,{defaultValue:i,values:[{label:"Example",value:"example"},{label:"Source code",value:"src"}]},r.createElement(s.Z,{value:"example"},r.createElement(c.Z,null,a)),r.createElement(s.Z,{value:"src"},r.createElement(f,{filePath:t,language:n}))))}function f(e){var t=e.filePath,n=e.language,a=void 0===n?"js":n,o=(0,r.useState)(),i=o[0],u=o[1];return(0,r.useEffect)((function(){var e=!1;return function(e){return fetch(e).then((function(e){return e.text()}))}(t).then((function(t){e||u(t)})).catch((function(n){console.error(n),e||u("Error: Could not load source code at "+t)})),function(){e=!0}}),[u,t]),i?r.createElement(l.Z,{className:"language-"+a},i):"loading..."}function g(e){var t="",n="";return e.split(/>\s*</).forEach((function(e){e.match(/^\/\w/)&&(n=n.substring("  ".length)),t+=n+"<"+e+">\r\n",e.match(/^<?\w[^>]*[^\/]$/)&&(n+="  ")})),t.substring(1,t.length-3)}p.propTypes={component:i().func.isRequired,language:i().string,filePath:i().string.isRequired};var h=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={hasError:!1},t}return(0,a.Z)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.render=function(){return this.state.hasError?r.createElement("div",{style:{margin:"2rem 2rem",padding:"1rem 2rem",backgroundColor:"red",color:"white"}},"Whoops! There was an error loading this example, please file a github issue to report it"):this.props.children},t}(r.PureComponent)},6417:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return x},default:function(){return N},frontMatter:function(){return k},metadata:function(){return w},toc:function(){return E}});var a=n(2122),r=n(9756),o=n(7294),i=n(3905),l=n.p+"bac0f48d83bc955f30ca62043d9eb32b.jsx",u=n.p+"8043259452ada43b368a49b0aada93b3.jsx",s=n(5064),c=n(1756),d=n(8215),m=n(391),p=n(3784);function f(e){function t(e){window.showData&&window.showData({htmlString:(0,p.Jz)(e),json:e.doc.toJSON()})}var n=new m._n({specRegistry:new m.bm((0,m.MX)()),plugins:function(){return[].concat((0,m.o2)(),[new m.Sy({view:function(){return{update:function(e,n){e.state.doc.eq(n.doc)||t(e.state)}}}})])},initialValue:"Hey there!"}),a=new m.uF(e,{state:n});return t(a.view.state),a}function g(){try{return JSON.parse(localStorage.getItem("exporting-data.example2"))}catch(e){return null}}function h(e){var t=new m._n({specRegistry:new m.bm((0,m.MX)()),plugins:function(){return[].concat((0,m.o2)(),[new m.Sy({view:function(){return{update:function(e,t){e.state.doc.eq(t.doc)||localStorage.setItem("exporting-data.example2",JSON.stringify(e.state.doc.toJSON()))}}}})])},initialValue:g()||"Hey there whatever you type here will be persisted in localStorage!"});return new m.uF(e,{state:t})}var v=n(7386),b=["components"],k={title:"Exporting Data",id:"exporting-data"},x=void 0,w={unversionedId:"examples/exporting-data",id:"examples/exporting-data",isDocsHomePage:!1,title:"Exporting Data",description:"formatHTMLString,",source:"@site/docs/examples/exporting-data.mdx",sourceDirName:"examples",slug:"/examples/exporting-data",permalink:"/docs/examples/exporting-data",editUrl:"https://github.com/bangle-io/bangle.dev-website/edit/main/docs/examples/exporting-data.mdx",version:"current",frontMatter:{title:"Exporting Data",id:"exporting-data"},sidebar:"docs",previous:{title:"Images",permalink:"/docs/examples/images"},next:{title:"Placeholder",permalink:"/docs/examples/placeholder"}},E=[{value:"Persisting to Local Storage",id:"persisting-to-local-storage",children:[]}],y={toc:E};function N(e){var t=e.components,n=(0,r.Z)(e,b);return(0,i.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Bangle allows exporting the editor state in different ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/examples/markdown-editor"},"Markdown")),(0,i.kt)("li",{parentName:"ul"},"HTML"),(0,i.kt)("li",{parentName:"ul"},"JSON")),(0,i.kt)("p",null,"You can try some of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use markdown shortcuts like ",(0,i.kt)("inlineCode",{parentName:"li"},"# "),", ",(0,i.kt)("inlineCode",{parentName:"li"},"- "),", ",(0,i.kt)("inlineCode",{parentName:"li"},"1. "),", ",(0,i.kt)("inlineCode",{parentName:"li"},"> "),", ",(0,i.kt)("inlineCode",{parentName:"li"},"[ ] ")," to trigger new blocks."),(0,i.kt)("li",{parentName:"ul"},"Use keyboard shortcuts like ",(0,i.kt)("inlineCode",{parentName:"li"},"Command-b")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Command-i")," to enable marks, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/core#components"},"core components")," docs for more keyboard shortcuts."),(0,i.kt)("li",{parentName:"ul"},"Try pasting rich text from some other place.")),(0,i.kt)(v.bz,{filePath:l,language:"js",createEditor:f,SideCar:function(e){var t=e.editor,n=(0,o.useState)({htmlString:(0,p.Jz)(t.view.state),json:t.view.state.doc.toJSON()}),a=n[0],r=n[1];return(0,o.useEffect)((function(){return window.showData=r,function(){window.showData=function(){}}}),[r]),(0,i.kt)(s.Z,{defaultValue:"html",values:[{label:"HTML",value:"html"},{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,i.kt)(d.Z,{value:"html",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"language-html",mdxType:"CodeBlock"},(0,v.ae)(a.htmlString))),(0,i.kt)(d.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"language-json",mdxType:"CodeBlock"},JSON.stringify(a.json,null,2))))},mdxType:"VanillaCodeExample"}),(0,i.kt)("h2",{id:"persisting-to-local-storage"},"Persisting to Local Storage"),(0,i.kt)(v.bz,{filePath:u,language:"js",createEditor:h,onEditorReady:function(e){},mdxType:"VanillaCodeExample"}))}N.isMDXComponent=!0}}]);