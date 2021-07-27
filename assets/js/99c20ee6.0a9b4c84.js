(self.webpackChunkbangle_dev_website=self.webpackChunkbangle_dev_website||[]).push([[1052],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(g,a(a({ref:n},d),{},{components:t})):r.createElement(g,a({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7050:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),a=["components"],l={title:"Keybindings",sidebar_label:"Keybindings"},s=void 0,p={unversionedId:"guides/keybindings",id:"guides/keybindings",isDocsHomePage:!1,title:"Keybindings",description:"Every Bangle components that support keybindings will",source:"@site/docs/guides/keybindings.md",sourceDirName:"guides",slug:"/guides/keybindings",permalink:"/docs/guides/keybindings",editUrl:"https://github.com/bangle-io/bangle.dev-website/edit/main/docs/guides/keybindings.md",version:"current",frontMatter:{title:"Keybindings",sidebar_label:"Keybindings"},sidebar:"docs",previous:{title:"Commands and Interactivty",permalink:"/docs/guides/commands"},next:{title:"How do I?",permalink:"/docs/guides/how-do-i"}},d=[{value:"Adding custom keybindings",id:"adding-custom-keybindings",children:[]}],c={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Every Bangle components that support keybindings will"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"accept a ",(0,o.kt)("inlineCode",{parentName:"li"},"keybindings")," named parameter in its ",(0,o.kt)("inlineCode",{parentName:"li"},"plugins()")," method."),(0,o.kt)("li",{parentName:"ul"},"export ",(0,o.kt)("inlineCode",{parentName:"li"},"defaultKeys")," object to get access to all the default keys.")),(0,o.kt)("p",null,"In the example below we look at how to customize a keybindings for the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/base_components#bold-component"},"bold")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { bold } from '@bangle.dev/base-components';\n\n// If you pass nothing the `bold.defaultKeys` keybindings will be used\nbold.plugins();\n\n// To override the toggleBold\nbold.plugins({\n  keybindings: {\n    toggleBold: 'Ctrl-d',\n  },\n});\n\n// To disable\nbold.plugins({\n  keybindings: {\n    toggleBold: null,\n  },\n});\n\n// Selectively modify one key\nbold.plugins({\n  keybindings: {\n    ...bold.defaultKeys,\n    toggleBold: 'Ctrl-d',\n  },\n});\n")),(0,o.kt)("h3",{id:"adding-custom-keybindings"},"Adding custom keybindings"),(0,o.kt)("p",null,"If you want to create your own keyboard sorcery you will need to use ",(0,o.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#keymap"},"Prosemirror.Keymap"),". Let us create\na ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl-s")," shortcut which shouts the text content whenever pressed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { keymap } from '@bangle.dev/pm';\n\nconst state = new BangleEditorState({\n  plugins: () => [\n    keymap({\n      'Ctrl-s': (state, dispatch, view) => {\n        alert(state.doc.textContent);\n      },\n    }),\n    // ... other plugins\n  ],\n});\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The docs at ",(0,o.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#keymap"},"Prosemirror.Keymap")," go deeper into syntax.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The nomenclature for key names is provided by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/marijnh/w3c-keyname"},"w3c-keyname"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If there are competing keybindings, the one that is defined first wins.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Since keymap accepts a {","[string]",": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/core#command"},"Command"),"} all the commands logic apply, for example, you\ncan return an early ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," to avoid handling the key event."))))}u.isMDXComponent=!0}}]);