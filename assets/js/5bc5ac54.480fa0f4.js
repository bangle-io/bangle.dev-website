(self.webpackChunkbangle_dev_website=self.webpackChunkbangle_dev_website||[]).push([[4733],{8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(7294),r=n(9443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var d=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,d=e.values,p=e.groupId,m=e.className,f=i(),g=f.tabGroupChoices,h=f.setTabGroupChoices,v=(0,a.useState)(r),b=v[0],k=v[1],x=a.Children.toArray(e.children),w=[];if(null!=p){var E=g[p];null!=E&&E!==b&&d.some((function(e){return e.value===E}))&&k(E)}var y=function(e){var t=e.currentTarget,n=w.indexOf(t),a=d[n].value;k(a),null!=p&&(h(p,a),setTimeout((function(){var e,n,a,r,i,o,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case c:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case u:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:y,onClick:y},n)}))),t?(0,a.cloneElement)(x.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},7386:function(e,t,n){"use strict";n.d(t,{bz:function(){return d},T9:function(){return m},ae:function(){return g}});var a=n(3552),r=n(7294),i=n(5697),o=n.n(i),l=n(1756),s=n(5064),u=n(8215),c=n(1262);function d(e){var t=e.filePath,n=e.language,a=e.createEditor,i=e.defaultTab,o=void 0===i?"example":i,l=e.onEditorReady,s=void 0===l?function(){}:l,u=e.SideCar,c=(0,r.useRef)(a),d=(0,r.useState)(!1),f=d[0],g=d[1],h=(0,r.useCallback)((function(){return r.createElement(p,{createEditor:c.current,onReady:g})}),[c,g]);return r.createElement(r.Fragment,null,r.createElement(m,{filePath:t,language:n,component:h,defaultTab:o}),f?s(f):null,f&&u?r.createElement(u,{editor:f}):null)}function p(e){var t=e.createEditor,n=e.onReady,a=(0,r.useRef)();return(0,r.useEffect)((function(){var e=t(a.current);return n(e),function(){e.destroy()}}),[t,n]),r.createElement("div",{ref:a})}function m(e){var t=e.filePath,n=e.language,a=e.component,i=e.defaultTab,o=void 0===i?"example":i;return r.createElement(h,null,r.createElement(s.Z,{defaultValue:o,values:[{label:"Example",value:"example"},{label:"Source code",value:"src"}]},r.createElement(u.Z,{value:"example"},r.createElement(c.Z,null,a)),r.createElement(u.Z,{value:"src"},r.createElement(f,{filePath:t,language:n}))))}function f(e){var t=e.filePath,n=e.language,a=void 0===n?"js":n,i=(0,r.useState)(),o=i[0],s=i[1];return(0,r.useEffect)((function(){var e=!1;return function(e){return fetch(e).then((function(e){return e.text()}))}(t).then((function(t){e||s(t)})).catch((function(n){console.error(n),e||s("Error: Could not load source code at "+t)})),function(){e=!0}}),[s,t]),o?r.createElement(l.Z,{className:"language-"+a},o):"loading..."}function g(e){var t="",n="";return e.split(/>\s*</).forEach((function(e){e.match(/^\/\w/)&&(n=n.substring("  ".length)),t+=n+"<"+e+">\r\n",e.match(/^<?\w[^>]*[^\/]$/)&&(n+="  ")})),t.substring(1,t.length-3)}m.propTypes={component:o().func.isRequired,language:o().string,filePath:o().string.isRequired};var h=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={hasError:!1},t}return(0,a.Z)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.render=function(){return this.state.hasError?r.createElement("div",{style:{margin:"2rem 2rem",padding:"1rem 2rem",backgroundColor:"red",color:"white"}},"Whoops! There was an error loading this example, please file a github issue to report it"):this.props.children},t}(r.PureComponent)},6417:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return w},default:function(){return S},frontMatter:function(){return x},metadata:function(){return E},toc:function(){return y}});var a=n(2122),r=n(9756),i=n(7294),o=n(3905),l=n.p+"5e84e57d544d1f8b1d58cb609b837f80.jsx",s=n.p+"9d9411129954b48752ae61fa181c083a.jsx",u=n(5064),c=n(1756),d=n(8215),p=n(5521),m=n(3714),f=n(407);function g(e){function t(e){window.showData&&window.showData({htmlString:(0,m.Jz)(e),json:e.doc.toJSON()})}var n=new p._n({specs:[f.Se.spec(),f.pU.spec(),f.p4.spec(),f.dq.spec(),f.iI.spec(),f.qb.spec(),f.An.spec(),f.nP.spec()],plugins:function(){return[f.Se.plugins(),f.pU.plugins(),f.p4.plugins(),f.dq.plugins(),f.iI.plugins(),f.qb.plugins(),f.An.plugins(),f.nP.plugins(),new p.Sy({view:function(){return{update:function(e,n){e.state.doc.eq(n.doc)||t(e.state)}}}})]},initialValue:"Hey there!"}),a=new p.uF(e,{state:n});return t(a.view.state),a}function h(){try{return JSON.parse(localStorage.getItem("exporting-data.example2"))}catch(e){return null}}function v(e){var t=new p._n({specs:[f.Se.spec(),f.pU.spec(),f.p4.spec(),f.dq.spec(),f.iI.spec(),f.qb.spec(),f.An.spec(),f.nP.spec()],plugins:function(){return[f.Se.plugins(),f.pU.plugins(),f.p4.plugins(),f.dq.plugins(),f.iI.plugins(),f.qb.plugins(),f.An.plugins(),f.nP.plugins(),new p.Sy({view:function(){return{update:function(e,t){e.state.doc.eq(t.doc)||localStorage.setItem("exporting-data.example2",JSON.stringify(e.state.doc.toJSON()))}}}})]},initialValue:h()||"Hey there whatever you type here will be persisted in localStorage!"});return new p.uF(e,{state:t})}var b=n(7386),k=["components"],x={title:"Exporting Data",id:"exporting-data"},w=void 0,E={unversionedId:"examples/exporting-data",id:"examples/exporting-data",isDocsHomePage:!1,title:"Exporting Data",description:"formatHTMLString,",source:"@site/docs/examples/exporting-data.mdx",sourceDirName:"examples",slug:"/examples/exporting-data",permalink:"/docs/examples/exporting-data",editUrl:"https://github.com/bangle-io/bangle.dev-website/edit/main/docs/examples/exporting-data.mdx",version:"current",frontMatter:{title:"Exporting Data",id:"exporting-data"},sidebar:"docs",previous:{title:"Images",permalink:"/docs/examples/images"},next:{title:"Placeholder",permalink:"/docs/examples/placeholder"}},y=[{value:"Persisting to Local Storage",id:"persisting-to-local-storage",children:[]}],N={toc:y};function S(e){var t=e.components,n=(0,r.Z)(e,k);return(0,o.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Bangle allows exporting the editor state in different ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/examples/markdown-editor"},"Markdown")),(0,o.kt)("li",{parentName:"ul"},"HTML"),(0,o.kt)("li",{parentName:"ul"},"JSON")),(0,o.kt)("p",null,"You can try some of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use markdown shortcuts like ",(0,o.kt)("inlineCode",{parentName:"li"},"# "),", ",(0,o.kt)("inlineCode",{parentName:"li"},"- "),", ",(0,o.kt)("inlineCode",{parentName:"li"},"1. "),", ",(0,o.kt)("inlineCode",{parentName:"li"},"> "),", ",(0,o.kt)("inlineCode",{parentName:"li"},"[ ] ")," to trigger new blocks."),(0,o.kt)("li",{parentName:"ul"},"Use keyboard shortcuts like ",(0,o.kt)("inlineCode",{parentName:"li"},"Command-b")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Command-i")," to enable marks, see ",(0,o.kt)("a",{parentName:"li",href:"/docs/api/base_components"},"base components")," docs for more keyboard shortcuts."),(0,o.kt)("li",{parentName:"ul"},"Try pasting rich text from some other place.")),(0,o.kt)(b.bz,{filePath:l,language:"js",createEditor:g,SideCar:function(e){var t=e.editor,n=(0,i.useState)({htmlString:(0,m.Jz)(t.view.state),json:t.view.state.doc.toJSON()}),a=n[0],r=n[1];return(0,i.useEffect)((function(){return window.showData=r,function(){window.showData=function(){}}}),[r]),(0,o.kt)(i.Fragment,null,(0,o.kt)("p",null,"Here is the output:"),(0,o.kt)(u.Z,{defaultValue:"html",values:[{label:"HTML",value:"html"},{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"html",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-html",mdxType:"CodeBlock"},(0,b.ae)(a.htmlString))),(0,o.kt)(d.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)(c.Z,{className:"language-json",mdxType:"CodeBlock"},JSON.stringify(a.json,null,2)))))},mdxType:"VanillaCodeExample"}),(0,o.kt)("h2",{id:"persisting-to-local-storage"},"Persisting to Local Storage"),(0,o.kt)(b.bz,{filePath:s,language:"js",createEditor:v,onEditorReady:function(e){},mdxType:"VanillaCodeExample"}))}S.isMDXComponent=!0}}]);