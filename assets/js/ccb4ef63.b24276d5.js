(self.webpackChunkbangle_dev_website=self.webpackChunkbangle_dev_website||[]).push([[5018],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,k=d["".concat(m,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7036:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=["components"],l={title:"@bangle.dev/emoji",sidebar_label:"@bangle.dev/emoji",packageName:"@bangle.dev/emoji",id:"emoji"},m=void 0,p={unversionedId:"api/emoji",id:"api/emoji",isDocsHomePage:!1,title:"@bangle.dev/emoji",description:"Installation",source:"@site/docs/api/emoji.md",sourceDirName:"api",slug:"/api/emoji",permalink:"/docs/api/emoji",editUrl:"https://github.com/bangle-io/bangle.dev-website/edit/main/docs/api/emoji.md",version:"current",frontMatter:{title:"@bangle.dev/emoji",sidebar_label:"@bangle.dev/emoji",packageName:"@bangle.dev/emoji",id:"emoji"},sidebar:"docs",previous:{title:"@bangle.dev/core",permalink:"/docs/api/core"},next:{title:"@bangle.dev/react",permalink:"/docs/api/react"}},s=[{value:"Installation",id:"installation",children:[]},{value:"emoji: Component",id:"emoji-component",children:[{value:"Markdown support",id:"markdown-support",children:[]},{value:"Emoji Data source",id:"emoji-data-source",children:[]}]}],c={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# peer deps\nnpm install @bangle.dev/core @bangle.dev/pm\nnpm install @bangle.dev/emoji\n")),(0,r.kt)("h2",{id:"emoji-component"},"emoji: ",(0,r.kt)("a",{parentName:"h2",href:"/docs/api/core/#component"},"Component")),(0,r.kt)("p",null,"Allows you to show emojis \ud83d\ude0e in your editor. "),(0,r.kt)("h4",{id:"spec---nodespec"},"spec({ ... }): ",(0,r.kt)("a",{parentName:"h4",href:"/docs/api/core/#spec"},"NodeSpec")),(0,r.kt)("p",null,"Named parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"getEmoji:")," fn(emojiAlias: string ) -> string",(0,r.kt)("br",{parentName:"p"}),"\n","A callback that gets called with ",(0,r.kt)("inlineCode",{parentName:"p"},"emojiAlias")," (a plain text representation of the emoji like ",(0,r.kt)("inlineCode",{parentName:"p"},"smiley"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"green_book"),") and should return the emoji character associated with the alias.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"defaultEmojiAlias"),": ?string='smiley'",(0,r.kt)("br",{parentName:"p"}),"\n","If alias to use when not provided."))),(0,r.kt)("h4",{id:"commands-commandobject"},"commands: ",(0,r.kt)("a",{parentName:"h4",href:"/docs/api/core/#commandobject"},"CommandObject")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"insertEmoji"),"(emojiAlias: string): ",(0,r.kt)("a",{parentName:"li",href:"/docs/api/core/#command"},"Command"),(0,r.kt)("br",{parentName:"li"}),"A command that inserts an emoji.")),(0,r.kt)("h3",{id:"markdown-support"},"Markdown support"),(0,r.kt)("p",null,"This component supports markdown by serializing emoji nodes into ",(0,r.kt)("inlineCode",{parentName:"p"},":<emojiAlias>:"),"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"\ud83d\ude08")," will be serialized into ",(0,r.kt)("inlineCode",{parentName:"p"},":smiling_imp:"),"."),(0,r.kt)("p",null,"This package uses the npm package ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/markdown-it/markdown-it-emoji"},"markdown-it-emoji")," to provide this support. It also exports the ",(0,r.kt)("inlineCode",{parentName:"p"},"lite")," version of the plugin which allows for passing your own emoji dataset."),(0,r.kt)("p",null,"Sample code for setting up markdown."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  markdownParser,\n  markdownSerializer,\n  getDefaultMarkdownItTokenizer,\n} from '@bangle.dev/markdown';\nimport { emoji, emojiMarkdownItPlugin } from '@bangle.dev/emoji';\n\nconst myEmojiDefs = {\n  grinning: '\ud83d\ude00',\n  smiley: '\ud83d\ude03',\n  smile: '\ud83d\ude04',\n  grin: '\ud83d\ude01',\n  laughing: '\ud83d\ude06',\n  satisfied: '\ud83d\ude06',\n  sweat_smile: '\ud83d\ude05',\n  rofl: '\ud83e\udd23',\n  joy: '\ud83d\ude02',\n  slightly_smiling_face: '\ud83d\ude42',\n};\n\nconst specRegistry = [\n  // your other specs,\n  emoji.spec({\n    getEmoji: (emojiAlias) => myEmojiDefs[emojiAlias] || '\u2753',\n  }),\n];\n\nconst parser = markdownParser(\n  specRegistry,\n  getDefaultMarkdownItTokenizer().use(emojiMarkdownItPlugin, {\n    // https://github.com/markdown-it/markdown-it-emoji options go here\n    defs: myEmojiDefs,\n  }),\n);\n\nconst serializer = markdownSerializer(specRegistry);\n")),(0,r.kt)("h3",{id:"emoji-data-source"},"Emoji Data source"),(0,r.kt)("p",null,"This package does not provide emoji data, you will have to load it yourself. If you want you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bangle-io/emoji-lookup-data"},"emoji-lookup-data")," datasource which is an optimized fork of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/github/gemoji"},"gemoji"),". Or, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/markdown-it/markdown-it-emoji/tree/master/lib/data"},"markdown-it-emoji's data")," for an even smaller subset of data."),(0,r.kt)("p",null,"\ud83d\udcd6 See\xa0",(0,r.kt)("a",{parentName:"p",href:"https://bangle.dev/docs/examples/markdown-editor"},"Bangle Markdown example")),(0,r.kt)("p",null,"\ud83d\udcd6 See ",(0,r.kt)("a",{parentName:"p",href:"https://bangle.dev/docs/api/markdown"},"Markdown component API")))}d.isMDXComponent=!0}}]);