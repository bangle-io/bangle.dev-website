(self.webpackChunkbangle_dev_website=self.webpackChunkbangle_dev_website||[]).push([[1052],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7050:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],l={title:"Keybindings",sidebar_label:"Keybindings"},s=void 0,p={unversionedId:"guides/keybindings",id:"guides/keybindings",isDocsHomePage:!1,title:"Keybindings",description:"Every Bangle components that support keybindings will",source:"@site/docs/guides/keybindings.md",sourceDirName:"guides",slug:"/guides/keybindings",permalink:"/docs/guides/keybindings",editUrl:"https://github.com/bangle-io/bangle.dev-website/edit/master/_bangle-website/docs/guides/keybindings.md",version:"current",frontMatter:{title:"Keybindings",sidebar_label:"Keybindings"},sidebar:"docs",previous:{title:"Commands and Interactivty",permalink:"/docs/guides/commands"},next:{title:"How do I?",permalink:"/docs/guides/how-do-i"}},c=[{value:"Adding custom keybindings",id:"adding-custom-keybindings",children:[]}],d={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Every Bangle components that support keybindings will"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"accept a ",(0,i.kt)("inlineCode",{parentName:"li"},"keybindings")," named parameter in its ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins()")," method."),(0,i.kt)("li",{parentName:"ul"},"export ",(0,i.kt)("inlineCode",{parentName:"li"},"defaultKeys")," object to get access to all the default keys.")),(0,i.kt)("p",null,"In the example below we look at how to customize a keybindings for the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core#bold-component"},"bold")," component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { components } from '@bangle.dev/core';\n\nconst { bold } = components;\n// If you pass nothing the `bold.defaultKeys` keybindings will be used\nbold.plugins();\n\n// To override the toggleBold\nbold.plugins({\n  keybindings: {\n    toggleBold: 'Ctrl-d',\n  },\n});\n\n// To disable\nbold.plugins({\n  keybindings: {\n    toggleBold: null,\n  },\n});\n\n// Selectively modify one key\nbold.plugins({\n  keybindings: {\n    ...bold.defaultKeys,\n    toggleBold: 'Ctrl-d',\n  },\n});\n")),(0,i.kt)("h3",{id:"adding-custom-keybindings"},"Adding custom keybindings"),(0,i.kt)("p",null,"If you want to create your own keyboard sorcery you will need to use ",(0,i.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#keymap"},"Prosemirror.Keymap"),". Let us create\na ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl-s")," shortcut which shouts the text content whenever pressed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { corePlugins, coreSpec } from '@bangle.dev/core';\nimport { keymap } from 'prosemirror-keymap';\n\nconst state = new BangleEditorState({\n  plugins: () => [\n    keymap({\n      'Ctrl-s': (state, dispatch, view) => {\n        alert(state.doc.textContent);\n      },\n    }),\n    corePlugins(),\n  ],\n});\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The docs at ",(0,i.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#keymap"},"Prosemirror.Keymap")," go deeper into syntax.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The nomenclature for key names is provided by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/marijnh/w3c-keyname"},"w3c-keyname"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If there are competing keybindings, the one that is defined first wins.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Since keymap accepts a {","[string]",": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core#command"},"Command"),"} all the commands logic apply, for example, you\ncan return an early ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," to avoid handling the key event."))))}u.isMDXComponent=!0}}]);