(self.webpackChunkbangle_dev_website=self.webpackChunkbangle_dev_website||[]).push([[1864],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,d=u["".concat(s,".").concat(g)]||u[g]||c[g]||i;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5344:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],p={title:"@bangle.dev/react-emoji-suggest",sidebar_label:"@bangle.dev/react-emoji-suggest",packageName:"@bangle.dev/react-emoji-suggest",id:"react_emoji_suggest"},s=void 0,l={unversionedId:"api/react_emoji_suggest",id:"api/react_emoji_suggest",isDocsHomePage:!1,title:"@bangle.dev/react-emoji-suggest",description:"contrib",source:"@site/docs/api/react_emoji_suggest.md",sourceDirName:"api",slug:"/api/react_emoji_suggest",permalink:"/docs/api/react_emoji_suggest",editUrl:"https://github.com/bangle-io/bangle.dev-website/edit/main/docs/api/react_emoji_suggest.md",version:"current",frontMatter:{title:"@bangle.dev/react-emoji-suggest",sidebar_label:"@bangle.dev/react-emoji-suggest",packageName:"@bangle.dev/react-emoji-suggest",id:"react_emoji_suggest"},sidebar:"docs",previous:{title:"@bangle.dev/react",permalink:"/docs/api/react"},next:{title:"@bangle.dev/react-menu",permalink:"/docs/api/react_menu"}},m=[{value:"Installation",id:"installation",children:[]},{value:"Styling",id:"styling",children:[]},{value:"emojiSuggest: Component",id:"emojisuggest-component",children:[{value:"plugins({ ... }): Plugins",id:"plugins---plugins",children:[]},{value:"commands: CommandObject",id:"commands-commandobject",children:[]}]},{value:"EmojiSuggest: React.Element",id:"emojisuggest-reactelement",children:[]}],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"contrib")),(0,i.kt)("p",null,"This package provides you suggestions for picking your favourite emojis \ud83d\ude0e!"),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install @bangle.dev/react-emoji-suggest\n")),(0,i.kt)("h2",{id:"styling"},"Styling"),(0,i.kt)("p",null,"Please use the stylesheet ",(0,i.kt)("inlineCode",{parentName:"p"},"style.css")," like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import '@bangle.dev/react-emoji-suggest/style.css';\n")),(0,i.kt)("h2",{id:"emojisuggest-component"},"emojiSuggest: ",(0,i.kt)("a",{parentName:"h2",href:"/docs/api/core/#component"},"Component")),(0,i.kt)("p",null,"Shows a suggestion tooltip next to the trigger. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrowUp")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrowDown")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrowLeft")," ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrowRight")," to select emoji. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"MouseClick")," to insert a selected emoji. Pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"Escape")," will dismiss the suggestion tooltip."),(0,i.kt)("h4",{id:"spec---nodespec"},"spec({ ... }): ",(0,i.kt)("a",{parentName:"h4",href:"/docs/api/core/#spec"},"NodeSpec")),(0,i.kt)("p",null,"Named parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"markName"),": string",(0,i.kt)("br",{parentName:"p"}),"\n","The mark name associated with this component. Please make sure this name is not already in use by existing nodes or marks.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"trigger"),": ?string=':'",(0,i.kt)("br",{parentName:"p"}),"\n","The trigger key when typed that initiates the suggestions. Triggering also needs to have a space or new line precede the trigger string."))),(0,i.kt)("h3",{id:"plugins---plugins"},"plugins({ ... }): ",(0,i.kt)("a",{parentName:"h3",href:"/docs/api/core/#plugins"},"Plugins")),(0,i.kt)("p",null,"Named parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"key:")," ?",(0,i.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#state.PluginKey"},"Prosemirror.PluginKey"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"markName"),": string",(0,i.kt)("br",{parentName:"p"}),"\n","The ",(0,i.kt)("inlineCode",{parentName:"p"},"markName")," you specified in above in the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"tooltipRenderOpts"),": ?","[tooltipRenderOpts]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"getEmojiGroups:")," fn(queryText: string) -> Array<{name: string, emojis: EmojisArray}>",(0,i.kt)("br",{parentName:"p"}),"\n","A callback which should return the filtered emojis corresponding to the query text. The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," will be used in the UI to name the category of the emojis."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EmojisArray"),": Array<","[","string, string","]",">",(0,i.kt)("br",{parentName:"li"}),"An array where each item is a pair of ",(0,i.kt)("inlineCode",{parentName:"li"},"emojiAlias")," and an emoji character, for example ",(0,i.kt)("inlineCode",{parentName:"li"},'[["office_worker", "\ud83e\uddd1\u200d\ud83d\udcbc"], ["ninja", "\ud83e\udd77"]]'),". The ",(0,i.kt)("inlineCode",{parentName:"li"},"emojiAlias")," must be unique."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"emojis"),": Array<","[","string, string","]",">",(0,i.kt)("br",{parentName:"p"}),"\n","An array of emoji description and the emoji character,")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"maxItems:")," ?number=200",(0,i.kt)("br",{parentName:"p"}),"\n","The maximum number of items that can be shown at a time."))),(0,i.kt)("h3",{id:"commands-commandobject"},"commands: ",(0,i.kt)("a",{parentName:"h3",href:"/docs/api/core/#commandobject"},"CommandObject")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"queryTriggerText"),"(key: ",(0,i.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#state.PluginKey"},"Prosemirror.PluginKey"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core/#command"},"Command"),(0,i.kt)("br",{parentName:"p"}),"\n","Query the trigger text that is being used to filter the ",(0,i.kt)("inlineCode",{parentName:"p"},"emojis"),". For example, with ",(0,i.kt)("inlineCode",{parentName:"p"},":")," as trigger, if the user typed ",(0,i.kt)("inlineCode",{parentName:"p"},":man")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"man")," will the trigger text.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"selectEmoji"),"(key: ",(0,i.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#state.PluginKey"},"Prosemirror.PluginKey"),", emojiAlias: string): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core/#command"},"Command"),(0,i.kt)("br",{parentName:"p"}),"\n","Programmatically select an emoji. For example if ",(0,i.kt)("inlineCode",{parentName:"p"},'emojis=["office_worker", "\ud83e\uddd1\u200d\ud83d\udcbc"], ["ninja", "\ud83e\udd77"]]'),", executing command with ",(0,i.kt)("inlineCode",{parentName:"p"},"selectEmoji(key, 'ninja')(state, dispatch)")," will create a ",(0,i.kt)("inlineCode",{parentName:"p"},"\ud83e\udd77")," emoji."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("p",null,"Here is a sample usage of constructing the ",(0,i.kt)("inlineCode",{parentName:"p"},"getEmoji")," callback that returns the filtered emojis corresponding to a query."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const data = [\n  { name: 'a-1', emojis: [['grinning', '\ud83d\ude00']] },\n  { name: 'a-2', emojis: [['smiley', '\ud83d\ude03']] },\n  { name: 'a-3', emojis: [['smile', '\ud83d\ude04']] },\n];\n\nconst getEmojiGroups = (queryText) => {\n  return data\n    .map((group) => {\n      return {\n        name: group.name,\n        emojis: group.emojis.filter(\n          ([alias]) => alias.includes(query) || query.includes(alias),\n        ),\n      };\n    })\n    .filter((r) => r.emojis.length > 0);\n};\n")),(0,i.kt)("p",null,"Additional links:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://bangle.dev/docs/api/emoji#emoji-data-source"},"emoji component's API"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/examples/react-emoji-suggest"},"Emoji Suggest example")))),(0,i.kt)("h2",{id:"emojisuggest-reactelement"},"EmojiSuggest: ",(0,i.kt)("a",{parentName:"h2",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Props")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"emojiSuggestKey"),": ?",(0,i.kt)("a",{parentName:"li",href:"https://prosemirror.net/docs/ref/#state.PluginKey"},"Prosemirror.PluginKey"),(0,i.kt)("br",{parentName:"li"}),"Pass the key that was used in ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins()"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/examples/react-emoji-suggest"},"Emoji Suggest example")))}u.isMDXComponent=!0}}]);