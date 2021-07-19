(self.webpackChunkbangle_dev_website=self.webpackChunkbangle_dev_website||[]).push([[1726],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return u}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(k,i(i({ref:t},s),{},{components:r})):a.createElement(k,i({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7194:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),i=["components"],p={title:"@bangle.dev/react",sidebar_label:"@bangle.dev/react",packageName:"@bangle.dev/react",id:"react"},l=void 0,c={unversionedId:"api/react",id:"api/react",isDocsHomePage:!1,title:"@bangle.dev/react",description:"This package provides you with a React API for integrating Bangle in your React app.",source:"@site/docs/api/react.md",sourceDirName:"api",slug:"/api/react",permalink:"/docs/api/react",editUrl:"https://github.com/bangle-io/bangle.dev-website/edit/master/_bangle-website/docs/api/react.md",version:"current",frontMatter:{title:"@bangle.dev/react",sidebar_label:"@bangle.dev/react",packageName:"@bangle.dev/react",id:"react"},sidebar:"docs",previous:{title:"@bangle.dev/emoji",permalink:"/docs/api/emoji"},next:{title:"@bangle.dev/react-emoji-suggest",permalink:"/docs/api/react_emoji_suggest"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"BangleEditor: React.Element",id:"bangleeditor-reactelement",children:[{value:"Props",id:"props",children:[]}]},{value:"useEditorState: ReactHook",id:"useeditorstate-reacthook",children:[]},{value:"usePluginState: ReactHook",id:"usepluginstate-reacthook",children:[]},{value:"useEditorViewContext: ReactHook",id:"useeditorviewcontext-reacthook",children:[]}],d={toc:s};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This package provides you with a React API for integrating Bangle in your React app."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# peer deps\nnpm install @bangle.dev/core\nnpm install @bangle.dev/react\n")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import '@bangle.dev/core/style.css';\n\nimport { useEditorState, BangleEditor } from '@bangle.dev/react';\n\nexport default function Editor() {\n  const editorState = useEditorState({\n    initialValue: 'Hello world!',\n  });\n  return <BangleEditor state={editorState} />;\n}\n")),(0,o.kt)("p",null,"\ud83d\udca1 ",(0,o.kt)("strong",{parentName:"p"},"Do not forget to load the stylesheet located at '@bangle.dev/core/style.css'.")),(0,o.kt)("h2",{id:"bangleeditor-reactelement"},"BangleEditor: ",(0,o.kt)("a",{parentName:"h2",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element")),(0,o.kt)("p",null,"A React component for rendering a Bangle instance."),(0,o.kt)("h3",{id:"props"},"Props"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"id"),": ?string",(0,o.kt)("br",{parentName:"p"}),"\n","The ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id"},"id")," of the DOM node bangle mounts on. Please make sure this is unique if you are having multiple editors.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"className"),": ?string",(0,o.kt)("br",{parentName:"p"}),"\n","The CSS class names for the container div of the editor. (The editor div has the class ",(0,o.kt)("inlineCode",{parentName:"p"},".bangle-editor")," ).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"style")," ?Object",(0,o.kt)("br",{parentName:"p"}),"\n","The style object for the container div of the editor.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"renderNodeViews"),": ?fn({ children, node, view, getPos, decorations, selected, attrs, updateAttrs}) -> ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element"),(0,o.kt)("br",{parentName:"p"}),"\n","Allows customization of how a Node is rendered in the DOM. This will be called with a ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," and you are expected to return a matching React component for the ",(0,o.kt)("inlineCode",{parentName:"p"},"node.type"),". You are also expected to correctly nest the ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," props. Note: ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," prop is not available for ",(0,o.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#model.NodeSpec.atom"},"atom")," nodes. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/custom-rendering-speech"},"React custom rendering guide"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"focusOnInit"),": ?boolean=true",(0,o.kt)("br",{parentName:"p"}),"\n","Brings editor to focus when it loads.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"onReady"),": ?fn(editor)",(0,o.kt)("br",{parentName:"p"}),"\n","A callback which is called when the editor has mounted.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"children"),": ?",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element"),(0,o.kt)("br",{parentName:"p"}),"\n","React components which need the editor context but are not directly editable i.e. do not lie inside the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content"},"contentEditable")," of the editor. A good example of what can be ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," is ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/react_menu#floatingmenu-reactelement"},"FloatingMenu"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"state"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/core/#bangleeditorstate"},"BangleEditorState"),(0,o.kt)("br",{parentName:"p"}),"\n","Pass in the output of ",(0,o.kt)("a",{parentName:"p",href:"#useeditorstate-reacthook"},"useEditorState")," hook.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"pmViewOpts"),": ?",(0,o.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#view.DirectEditorProps"},"Prosemirror.DirectEditorProps")))),(0,o.kt)("h2",{id:"useeditorstate-reacthook"},"useEditorState: ReactHook"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"fn(",(0,o.kt)("a",{parentName:"p",href:"/docs/api/core/#bangleeditorstate"},"BangleEditorState"),") -> ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/core/#bangleeditorstate"},"BangleEditorState"))),(0,o.kt)("p",null,"A hook for initialing the editor state."),(0,o.kt)("p",null,"\ud83d\udca1 This hook will never trigger a re-render, if you want to react to a change in your editor consider using ",(0,o.kt)("a",{parentName:"p",href:"#usepluginstate-reacthook"},"usePluginState"),". Read ",(0,o.kt)("a",{parentName:"p",href:"/docs/examples/react-basic-editor"},"React Basic example"),"."),(0,o.kt)("p",null,"\ud83d\udcd6 ",(0,o.kt)("strong",{parentName:"p"},"Checkout ",(0,o.kt)("a",{parentName:"strong",href:"/docs/examples/react-basic-editor"},"React example"))),(0,o.kt)("h2",{id:"usepluginstate-reacthook"},"usePluginState: ReactHook"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"fn(pluginKey",(0,o.kt)("inlineCode",{parentName:"p"},"<T>"),"): T")),(0,o.kt)("p",null,"A hook for hooking to a Prosemirror plugin's state. This hook works\xa0",(0,o.kt)("strong",{parentName:"p"},"only")," with children of\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"<BangleEditor />"),". This ",(0,o.kt)("strong",{parentName:"p"},"will re-render")," the React component every-time the plugin's state changes."),(0,o.kt)("h2",{id:"useeditorviewcontext-reacthook"},"useEditorViewContext: ReactHook"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"fn(): ",(0,o.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#view.EditorView"},"Prosemirror.EditorView"))),(0,o.kt)("p",null,"A hook for providing the ",(0,o.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#view.EditorView"},"Prosemirror.EditorView")," to a React component. This context is ",(0,o.kt)("strong",{parentName:"p"},"only")," available to children of ",(0,o.kt)("inlineCode",{parentName:"p"},"<BangleEditor />"),". It will ",(0,o.kt)("strong",{parentName:"p"},"never")," trigger a re-render as the hook maintains the same ",(0,o.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#view.EditorView"},"Prosemirror.EditorView")," instance throughout the editor's lifecycle."),(0,o.kt)("p",null,"\ud83d\udcd6 ",(0,o.kt)("strong",{parentName:"p"},"Checkout ",(0,o.kt)("a",{parentName:"strong",href:"/docs/examples/react-floating-menu#menu-dropdown"},"Floating menu dropdown")," example.")))}m.isMDXComponent=!0}}]);