(self.webpackChunkbangle_dev_website=self.webpackChunkbangle_dev_website||[]).push([[1965],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return l},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(o),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||a;return o?n.createElement(m,i(i({ref:t},l),{},{components:o})):n.createElement(m,i({ref:t},l))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9355:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var n=o(2122),r=o(9756),a=(o(7294),o(3905)),i=["components"],s={title:"How do I?",sidebar_label:"How do I?"},c=void 0,d={unversionedId:"guides/how-do-i",id:"guides/how-do-i",isDocsHomePage:!1,title:"How do I?",description:"In this page we answer a list of commonly asked things",source:"@site/docs/guides/how-do-i.md",sourceDirName:"guides",slug:"/guides/how-do-i",permalink:"/docs/guides/how-do-i",editUrl:"https://github.com/bangle-io/bangle.dev-website/edit/main/_bangle-website/docs/guides/how-do-i.md",version:"current",frontMatter:{title:"How do I?",sidebar_label:"How do I?"},sidebar:"docs",previous:{title:"Keybindings",permalink:"/docs/guides/keybindings"},next:{title:"@bangle.dev/core",permalink:"/docs/api/core"}},l=[{value:"How do I watch for changes to the editor?",id:"how-do-i-watch-for-changes-to-the-editor",children:[]},{value:"How do I handle editor&#39;s DOM events ?",id:"how-do-i-handle-editors-dom-events-",children:[]},{value:"How do I add a keyboard shortcut ?",id:"how-do-i-add-a-keyboard-shortcut-",children:[]},{value:"How do I execute a command ?",id:"how-do-i-execute-a-command-",children:[]},{value:"How do I get access to the <code>view</code>, <code>state</code>, <code>dispatch</code> for a command?",id:"how-do-i-get-access-to-the-view-state-dispatch-for-a-command",children:[]},{value:"How do I get access to Prosemirror schema ?",id:"how-do-i-get-access-to-prosemirror-schema-",children:[]},{value:"How do I access <code>prosemirror-*</code> module ?",id:"how-do-i-access-prosemirror--module-",children:[]},{value:"How do I change the selection ?",id:"how-do-i-change-the-selection-",children:[]},{value:"How do I programmatically update the doc content?",id:"how-do-i-programmatically-update-the-doc-content",children:[]},{value:"How do I create a new paragraph node ?",id:"how-do-i-create-a-new-paragraph-node-",children:[]}],p={toc:l};function u(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this page we answer a list of commonly asked things"),(0,a.kt)("h3",{id:"how-do-i-watch-for-changes-to-the-editor"},"How do I watch for changes to the editor?"),(0,a.kt)("p",null,"Create a plugin that watches changes to the editor, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/examples/exporting-data"},"exporting data")," for an example."),(0,a.kt)("h3",{id:"how-do-i-handle-editors-dom-events-"},"How do I handle editor's DOM events ?"),(0,a.kt)("p",null,"Create a plugin which listens to DOM events as show below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Plugin({\n  key: new PluginKey('myDropPlugin'),\n  props: {\n    handleDOMEvents: {\n      drop(view, event) {\n        // your logic\n      },\n    },\n  },\n});\n")),(0,a.kt)("p",null,"\ud83d\udca1 See ",(0,a.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#view.EditorProps"},"Prosemirror.EditorProps")," for the API."),(0,a.kt)("h3",{id:"how-do-i-add-a-keyboard-shortcut-"},"How do I add a keyboard shortcut ?"),(0,a.kt)("p",null,"\ud83d\udcd6 See ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/keybindings"},"Keybindings Guide")),(0,a.kt)("h3",{id:"how-do-i-execute-a-command-"},"How do I execute a command ?"),(0,a.kt)("p",null,"If you are using the vanilla setup, you can get access to ",(0,a.kt)("inlineCode",{parentName:"p"},"view")," from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/core#bangleeditor"},"editor")," instance. For example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const editor =  new BangleEditor({ ... })\nconst view = editor.view\nconst state = view.state\nconst dispatch = view.dispatch\n\n// dry run a command\nconst success = toggleBold()(view.state);\n// execute the command\ntoggleBold()(view.state, view.dispatch, view);\n")),(0,a.kt)("p",null,"In a React setup you can get the ",(0,a.kt)("inlineCode",{parentName:"p"},"view")," from the hook ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/react#useeditorviewcontext-reacthook"},"useEditorViewContext")," for components rendered inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<BangleEditor />"),". For components\noutside ",(0,a.kt)("inlineCode",{parentName:"p"},"<BangleEditor />"),", save the ",(0,a.kt)("inlineCode",{parentName:"p"},"editor")," in your applications state management for retrieval and access. Don't forget to clean it up when your editor is destroyed."),(0,a.kt)("h3",{id:"how-do-i-get-access-to-the-view-state-dispatch-for-a-command"},"How do I get access to the ",(0,a.kt)("inlineCode",{parentName:"h3"},"view"),", ",(0,a.kt)("inlineCode",{parentName:"h3"},"state"),", ",(0,a.kt)("inlineCode",{parentName:"h3"},"dispatch")," for a command?"),(0,a.kt)("p",null,"See ",(0,a.kt)("inlineCode",{parentName:"p"},"### How do I execute a command ?")," above."),(0,a.kt)("h3",{id:"how-do-i-get-access-to-prosemirror-schema-"},"How do I get access to Prosemirror schema ?"),(0,a.kt)("p",null,"If you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"specs:[ ... ]")," notation, switch to using ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/core#specregistry"},"SpecRegistry"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const specRegistry = new SpecRegistry([]);\nconst schema = specRegistry.schema;\n")),(0,a.kt)("h3",{id:"how-do-i-access-prosemirror--module-"},"How do I access ",(0,a.kt)("inlineCode",{parentName:"h3"},"prosemirror-*")," module ?"),(0,a.kt)("p",null,"You can either npm install them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm i -S prosemirror-view prosemirror-state\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { EditorView } from 'prosemirror-view';\nimport { TextSelection } from 'prosemirror-state';\nimport { Slice } from 'prosemirror-model';\n")),(0,a.kt)("p",null,"I recommend the later approach to avoid problems with different versions of Prosemirror existing in your application."),(0,a.kt)("h3",{id:"how-do-i-change-the-selection-"},"How do I change the selection ?"),(0,a.kt)("p",null,"First, you will need to figure out whether you want a ",(0,a.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#state.TextSelection"},"TextSelection")," (majority of the cases) or a ",(0,a.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#state.NodeSelection"},"NodeSelection"),". Below is an example of setting selection to the end:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const setSelectionAtEnd = (state, dispatch) => {\n  const textSelection = TextSelection.create(\n    state.doc,\n    state.doc.content.size - 1,\n  );\n  // doing this creates a new Transaction\n  const tr = state.tr;\n  // this convention allows for dry running of a command\n  if (dispatch) {\n    dispatch(tr.setSelection(textSelection));\n  }\n  // return the success of the command\n  return true;\n};\n")),(0,a.kt)("h3",{id:"how-do-i-programmatically-update-the-doc-content"},"How do I programmatically update the doc content?"),(0,a.kt)("p",null,"This is a pretty heavy question as this requires Prosemirror knowledge of dealing with ",(0,a.kt)("inlineCode",{parentName:"p"},"transactions"),". To get started read up on"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read the ",(0,a.kt)("a",{parentName:"li",href:"https://prosemirror.net/docs/guide/#transform"},"Prosemirror guide")," at least 3 times."),(0,a.kt)("li",{parentName:"ul"},"Browse the source code of some of your favourite components to get a hang of\ncarrying out transactions."),(0,a.kt)("li",{parentName:"ul"},"Checkout ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/atlassian/prosemirror-utils"},"prosemirror-utils")," for more code examples.")),(0,a.kt)("h3",{id:"how-do-i-create-a-new-paragraph-node-"},"How do I create a new paragraph node ?"),(0,a.kt)("p",null,"Below is an example of how you can create a new paragraph node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { doc, schema, tr } = view.state;\nconst type = schema.nodes.paragraph;\n// Insert a paragraph node at the end of document.\nconst transaction = tr.insert(doc.content.size, type.create('Hello'));\n// Commit it.\nview.dispatch(transaction);\n")))}u.isMDXComponent=!0}}]);