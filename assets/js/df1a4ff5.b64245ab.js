(self.webpackChunkbangle_dev_website=self.webpackChunkbangle_dev_website||[]).push([[2999],{7386:function(e,n,t){"use strict";t.d(n,{bz:function(){return d},T9:function(){return m},ae:function(){return f}});var r=t(3552),a=t(7294),o=t(5697),i=t.n(o),s=t(1756),l=t(5064),c=t(8215),u=t(1262);function d(e){var n=e.filePath,t=e.language,r=e.createEditor,o=e.defaultTab,i=void 0===o?"example":o,s=e.onEditorReady,l=void 0===s?function(){}:s,c=e.SideCar,u=(0,a.useRef)(r),d=(0,a.useState)(!1),g=d[0],f=d[1],h=(0,a.useCallback)((function(){return a.createElement(p,{createEditor:u.current,onReady:f})}),[u,f]);return a.createElement(a.Fragment,null,a.createElement(m,{filePath:n,language:t,component:h,defaultTab:i}),g?l(g):null,g&&c?a.createElement(c,{editor:g}):null)}function p(e){var n=e.createEditor,t=e.onReady,r=(0,a.useRef)();return(0,a.useEffect)((function(){var e=n(r.current);return t(e),function(){e.destroy()}}),[n,t]),a.createElement("div",{ref:r})}function m(e){var n=e.filePath,t=e.language,r=e.component,o=e.defaultTab,i=void 0===o?"example":o;return a.createElement(h,null,a.createElement(l.Z,{defaultValue:i,values:[{label:"Example",value:"example"},{label:"Source code",value:"src"}]},a.createElement(c.Z,{value:"example"},a.createElement(u.Z,null,r)),a.createElement(c.Z,{value:"src"},a.createElement(g,{filePath:n,language:t}))))}function g(e){var n=e.filePath,t=e.language,r=void 0===t?"js":t,o=(0,a.useState)(),i=o[0],l=o[1];return(0,a.useEffect)((function(){var e=!1;return function(e){return fetch(e).then((function(e){return e.text()}))}(n).then((function(n){e||l(n)})).catch((function(t){console.error(t),e||l("Error: Could not load source code at "+n)})),function(){e=!0}}),[l,n]),i?a.createElement(s.Z,{className:"language-"+r},i):"loading..."}function f(e){var n="",t="";return e.split(/>\s*</).forEach((function(e){e.match(/^\/\w/)&&(t=t.substring("  ".length)),n+=t+"<"+e+">\r\n",e.match(/^<?\w[^>]*[^\/]$/)&&(t+="  ")})),n.substring(1,n.length-3)}m.propTypes={component:i().func.isRequired,language:i().string,filePath:i().string.isRequired};var h=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this).state={hasError:!1},n}return(0,r.Z)(n,e),n.getDerivedStateFromError=function(e){return{hasError:!0}},n.prototype.render=function(){return this.state.hasError?a.createElement("div",{style:{margin:"2rem 2rem",padding:"1rem 2rem",backgroundColor:"red",color:"white"}},"Whoops! There was an error loading this example, please file a github issue to report it"):this.props.children},n}(a.PureComponent)},8733:function(e,n,t){"use strict";t.r(n),t.d(n,{contentTitle:function(){return b},default:function(){return E},frontMatter:function(){return h},metadata:function(){return k},toc:function(){return w}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=t.p+"1247bd90a7091cdd78849adfd7e1d7bd.jsx",s=(t(5064),t(8215),t(5521)),l=t(4863),c=t(407),u=new s.bm([c.Mm.spec(),c.Se.spec(),c.iI.spec(),c.TU.spec(),c.FD.spec(),c.lK.spec(),c.nP.spec(),c.vQ.spec(),c.BH.spec(),c.pU.spec(),c.p4.spec(),c.qb.spec(),c.dq.spec(),c.An.spec(),c.Yp.spec(),c.eC.spec()]),d=(0,l.O3)(u),p=(0,l.tz)(u);function m(e){var n=new s._n({specRegistry:u,plugins:function(){return[c.Mm.plugins(),c.Se.plugins(),c.iI.plugins(),c.TU.plugins(),c.FD.plugins(),c.lK.plugins(),c.nP.plugins(),c.vQ.plugins(),c.BH.plugins(),c.pU.plugins(),c.p4.plugins(),c.qb.plugins(),c.dq.plugins(),c.An.plugins(),c.Yp.plugins(),c.eC.plugins()]},initialValue:d.parse("\n## H2 Heading \n\n### H3 Heading\n\n## Marks\n\n_italic_, **Bold**, _underlined_, ~~striked~~, `code`, [link](https://en.wikipedia.org/wiki/Main_Page)\n\n## GFM Todo Lists\n\n- [x] Check out BangleJS\n\n- [ ] Walk the cat\n\n- [ ] Drag these lists by dragging the square up or down.\n\n- [ ] Move these lists with shortcut `Option-ArrowUp`. You can move any node (yes headings too) with this shortcut.\n\n## Unordered Lists\n\n- This is an ordered list\n\n  - I am a nested ordered list\n\n  - I am another nested one\n\n    - Bunch of nesting right?\n\n## Ordered Lists\n\n1. Bringing order to the world.\n\n2. Nobody remembers who came second.\n\n   1. We can cheat to become first by nesting.\n\n      - Oh an you can mix and match ordered unordered.\n\n## Image\nYou can also directly paste images.\n![](https://user-images.githubusercontent.com/6966254/101979122-f4405e80-3c0e-11eb-9bf8-9af9b1ddc94f.png)\n\n\n## Blockquote\n\n> I am a blockquote, trigger me by typing > on a new line\n\n## Code Block\n\n```\n// This is a code block\nfunction foo() {\n  console.log('Hello world!')\n}\n```\n\n## Paragraph\n\nI am a boring paragraph\n\n## Horizontal Break\n---\n")});return new s.uF(e,{state:n})}t(1262);var g=t(7386),f=["components"],h={title:"Markdown",id:"markdown-editor"},b=void 0,k={unversionedId:"examples/markdown-editor",id:"examples/markdown-editor",isDocsHomePage:!1,title:"Markdown",description:"Each of the base component of Bangle comes baked in with markdown shortcuts (ofcourse, you can disable them if you want).",source:"@site/docs/examples/markdown-editor.mdx",sourceDirName:"examples",slug:"/examples/markdown-editor",permalink:"/docs/examples/markdown-editor",editUrl:"https://github.com/bangle-io/bangle.dev-website/edit/main/docs/examples/markdown-editor.mdx",version:"current",frontMatter:{title:"Markdown",id:"markdown-editor"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Lists & TodoLists",permalink:"/docs/examples/todo-list"}},w=[],v={toc:w};function E(e){var n=e.components,t=(0,a.Z)(e,f);return(0,o.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/base_components"},"base component")," of Bangle comes baked in with markdown shortcuts (ofcourse, you can disable them if you want)."),(0,o.kt)("p",null,"The example below we see how you to parse Markdown content and how Bangle displays various components."),(0,o.kt)(g.bz,{filePath:i,language:"js",createEditor:m,onEditorReady:function(e){return(0,o.kt)("button",{onClick:function(){var n=function(e){return p.serialize(e.view.state.doc)}(e),t=new Blob([n],{type:"text/plain"});window.open(URL.createObjectURL(t))}},"Click here to see the Markdown serialization")},mdxType:"VanillaCodeExample"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"See API docs:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/core"},"@bangle.dev/core")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/base_components"},"@bangle.dev/base-components")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/markdown"},"@bangle.dev/markdown"))))}E.isMDXComponent=!0}}]);