(self.webpackChunkbangle_dev_website=self.webpackChunkbangle_dev_website||[]).push([[6993],{8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,d=39;var c=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,c=e.values,m=e.groupId,p=e.className,f=o(),h=f.tabGroupChoices,v=f.setTabGroupChoices,g=(0,a.useState)(r),b=g[0],k=g[1],x=a.Children.toArray(e.children),E=[];if(null!=m){var w=h[m];null!=w&&w!==b&&c.some((function(e){return e.value===w}))&&k(w)}var C=function(e){var t=e.currentTarget,n=E.indexOf(t),a=c[n].value;k(a),null!=m&&(v(m,a),setTimeout((function(){var e,n,a,r,o,i,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},y=function(e){var t,n;switch(e.keyCode){case d:var a=E.indexOf(e.target)+1;n=E[a]||E[0];break;case u:var r=E.indexOf(e.target)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},p)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:y,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(x.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},7386:function(e,t,n){"use strict";n.d(t,{bz:function(){return c},T9:function(){return p},ae:function(){return h}});var a=n(3552),r=n(7294),o=n(5697),i=n.n(o),l=n(1756),s=n(5064),u=n(8215),d=n(1262);function c(e){var t=e.filePath,n=e.language,a=e.createEditor,o=e.defaultTab,i=void 0===o?"example":o,l=e.onEditorReady,s=void 0===l?function(){}:l,u=e.SideCar,d=(0,r.useRef)(a),c=(0,r.useState)(!1),f=c[0],h=c[1],v=(0,r.useCallback)((function(){return r.createElement(m,{createEditor:d.current,onReady:h})}),[d,h]);return r.createElement(r.Fragment,null,r.createElement(p,{filePath:t,language:n,component:v,defaultTab:i}),f?s(f):null,f&&u?r.createElement(u,{editor:f}):null)}function m(e){var t=e.createEditor,n=e.onReady,a=(0,r.useRef)();return(0,r.useEffect)((function(){var e=t(a.current);return n(e),function(){e.destroy()}}),[t,n]),r.createElement("div",{ref:a})}function p(e){var t=e.filePath,n=e.language,a=e.component,o=e.defaultTab,i=void 0===o?"example":o;return r.createElement(v,null,r.createElement(s.Z,{defaultValue:i,values:[{label:"Example",value:"example"},{label:"Source code",value:"src"}]},r.createElement(u.Z,{value:"example"},r.createElement(d.Z,null,a)),r.createElement(u.Z,{value:"src"},r.createElement(f,{filePath:t,language:n}))))}function f(e){var t=e.filePath,n=e.language,a=void 0===n?"js":n,o=(0,r.useState)(),i=o[0],s=o[1];return(0,r.useEffect)((function(){var e=!1;return function(e){return fetch(e).then((function(e){return e.text()}))}(t).then((function(t){e||s(t)})).catch((function(n){console.error(n),e||s("Error: Could not load source code at "+t)})),function(){e=!0}}),[s,t]),i?r.createElement(l.Z,{className:"language-"+a},i):"loading..."}function h(e){var t="",n="";return e.split(/>\s*</).forEach((function(e){e.match(/^\/\w/)&&(n=n.substring("  ".length)),t+=n+"<"+e+">\r\n",e.match(/^<?\w[^>]*[^\/]$/)&&(n+="  ")})),t.substring(1,t.length-3)}p.propTypes={component:i().func.isRequired,language:i().string,filePath:i().string.isRequired};var v=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={hasError:!1},t}return(0,a.Z)(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.render=function(){return this.state.hasError?r.createElement("div",{style:{margin:"2rem 2rem",padding:"1rem 2rem",backgroundColor:"red",color:"white"}},"Whoops! There was an error loading this example, please file a github issue to report it"):this.props.children},t}(r.PureComponent)},8367:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return x},default:function(){return y},frontMatter:function(){return k},metadata:function(){return E},toc:function(){return w}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=n.p+"82c499ef08f9fba7a51785b5165f54cd.jsx",l=n.p+"cd121895daf978e617dfdaf9b47ad951.jsx",s=(n(5064),n(8215),n(391)),u=s.wx.qb,d=s.wx.iI,c=s.wx.dq;function m(e){var t=new s._n({specs:[u.spec(),c.spec(),d.spec()],plugins:function(){return[u.plugins(),c.plugins(),d.plugins()]},initialValue:'<div>\n    <p>Let us check off some lists:</p>\n    <ul>\n      <li data-bangle-name="listItem" data-bangle-attrs="{&quot;todoChecked&quot;:false}"><p>Buy milk</p></li>\n      <li data-bangle-name="listItem" data-bangle-attrs="{&quot;todoChecked&quot;:false}"><p>Clean the room</p></li>\n      <li data-bangle-name="listItem" data-bangle-attrs="{&quot;todoChecked&quot;:false}"><p>Star bangle.dev on Github</p></li>\n    </ul>\n    </div>'});return new s.uF(e,{state:t})}var p=s.wx.qb,f=s.wx.iI,h=s.wx.dq;function v(e){var t=new s._n({specs:[p.spec(),h.spec(),f.spec()],plugins:function(){return[p.plugins(),h.plugins(),f.plugins()]},initialValue:"<div>\n    <p>We also have unordered lists:</p>\n    <ul>\n        <li>Buy milk</li>\n        <li>Clean the room</li>\n        <li>Star bangle.dev on Github</li>\n    </ul>\n    <p>And ofcourse ordered lists:</p>\n    <ol>\n        <li>Buy milk</li>\n        <li>Clean the room</li>\n        <li>Star bangle.dev on Github</li>\n    </ol>\n    </div>"});return new s.uF(e,{state:t})}n(1262);var g=n(7386),b=["components"],k={title:"Lists & TodoLists",id:"todo-list",hide_title:!0},x=void 0,E={unversionedId:"examples/todo-list",id:"examples/todo-list",isDocsHomePage:!1,title:"Lists & TodoLists",description:"Todo Lists",source:"@site/docs/examples/todo-list.mdx",sourceDirName:"examples",slug:"/examples/todo-list",permalink:"/docs/examples/todo-list",editUrl:"https://github.com/bangle-io/bangle.dev-website/edit/master/_bangle-website/docs/examples/todo-list.mdx",version:"current",frontMatter:{title:"Lists & TodoLists",id:"todo-list",hide_title:!0},sidebar:"docs",previous:{title:"Markdown",permalink:"/docs/examples/markdown-editor"},next:{title:"Images",permalink:"/docs/examples/images"}},w=[{value:"Todo Lists",id:"todo-lists",children:[]},{value:"Ordered and Unordered Lists",id:"ordered-and-unordered-lists",children:[]}],C={toc:w};function y(e){var t=e.components,n=(0,r.Z)(e,b);return(0,o.kt)("wrapper",(0,a.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"todo-lists"},"Todo Lists"),(0,o.kt)("p",null,"In this example we use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/core#todolist-component"},"TodoList component")," to allow creation of todo lists."),(0,o.kt)(g.bz,{filePath:i,language:"js",createEditor:m,mdxType:"VanillaCodeExample"}),(0,o.kt)("p",null,"Try some of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On a new line, type ",(0,o.kt)("inlineCode",{parentName:"li"},"[ ]")," followed by a space to create a todo List."),(0,o.kt)("li",{parentName:"ul"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"Tab")," to indent and ",(0,o.kt)("inlineCode",{parentName:"li"},"Shift-Tab")," to unindent."),(0,o.kt)("li",{parentName:"ul"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"Ctrl-Enter")," (mac) or ",(0,o.kt)("inlineCode",{parentName:"li"},"Ctrl-I")," (PC) to mark as task done."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Ctrl-Shift-7")," also converts a paragraph into a todo list."),(0,o.kt)("li",{parentName:"ul"},"Drag the todo square to move reorder things by priority.")),(0,o.kt)("h2",{id:"ordered-and-unordered-lists"},"Ordered and Unordered Lists"),(0,o.kt)(g.bz,{filePath:l,language:"js",createEditor:v,mdxType:"VanillaCodeExample"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"See API docs:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/core#components"},"@bangle.dev/core"))))}y.isMDXComponent=!0}}]);