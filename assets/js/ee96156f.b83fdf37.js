(self.webpackChunkbangle_dev_website=self.webpackChunkbangle_dev_website||[]).push([[5882],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),k=m(n),c=r,h=k["".concat(i,".").concat(c)]||k[c]||s[c]||o;return n?a.createElement(h,p(p({ref:t},u),{},{components:n})):a.createElement(h,p({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var m=2;m<o;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4439:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return m},toc:function(){return u},default:function(){return k}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),p=["components"],l={title:"@bangle.dev/react-menu",sidebar_label:"@bangle.dev/react-menu",packageName:"@bangle.dev/react-menu",id:"react_menu"},i=void 0,m={unversionedId:"api/react_menu",id:"api/react_menu",isDocsHomePage:!1,title:"@bangle.dev/react-menu",description:"This package provides you with tools to help build flexible yet powerful menus using React.",source:"@site/docs/api/react_menu.md",sourceDirName:"api",slug:"/api/react_menu",permalink:"/docs/api/react_menu",editUrl:"https://github.com/bangle-io/bangle.dev-website/edit/main/_bangle-website/docs/api/react_menu.md",version:"current",frontMatter:{title:"@bangle.dev/react-menu",sidebar_label:"@bangle.dev/react-menu",packageName:"@bangle.dev/react-menu",id:"react_menu"},sidebar:"docs",previous:{title:"@bangle.dev/react-emoji-suggest",permalink:"/docs/api/react_emoji_suggest"},next:{title:"@bangle.dev/search",permalink:"/docs/api/search"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Styling",id:"styling",children:[]},{value:"floatingMenu: Component",id:"floatingmenu-component",children:[{value:"plugins({ ... }): Plugins",id:"plugins---plugins",children:[]},{value:"commands: CommandObject",id:"commands-commandobject",children:[]},{value:"defaultKeys: KeybindingsObject",id:"defaultkeys-keybindingsobject",children:[]}]},{value:"FloatingMenu: React.Element",id:"floatingmenu-reactelement",children:[{value:"Props",id:"props",children:[]}]},{value:"Menu: React.Element",id:"menu-reactelement",children:[]},{value:"MenuGroup: React.Element",id:"menugroup-reactelement",children:[]},{value:"LinkSubMenu: React.Element",id:"linksubmenu-reactelement",children:[]},{value:"MenuDropdown: React.Element",id:"menudropdown-reactelement",children:[]},{value:"MenuButton: React.Element",id:"menubutton-reactelement",children:[]},{value:"MenuButtons",id:"menubuttons",children:[{value:"BoldButton: React.Element",id:"boldbutton-reactelement",children:[]},{value:"ItalicButton: React.Element",id:"italicbutton-reactelement",children:[]},{value:"UndoButton: React.Element",id:"undobutton-reactelement",children:[]},{value:"RedoButton: React.Element",id:"redobutton-reactelement",children:[]},{value:"CodeButton: React.Element",id:"codebutton-reactelement",children:[]},{value:"BlockquoteButton: React.Element",id:"blockquotebutton-reactelement",children:[]},{value:"BulletListButton: React.Element",id:"bulletlistbutton-reactelement",children:[]},{value:"TodoListButton: React.Element",id:"todolistbutton-reactelement",children:[]},{value:"HeadingButton: React.Element",id:"headingbutton-reactelement",children:[]},{value:"FloatingLinkButton React.Element",id:"floatinglinkbutton-reactelement",children:[]}]}],s={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This package provides you with tools to help build flexible yet powerful menus using React."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# peer deps\nnpm install @bangle.dev/core @bangle.dev/react @bangle.dev/tooltip\nnpm install @bangle.dev/react-menu\n")),(0,o.kt)("h2",{id:"styling"},"Styling"),(0,o.kt)("p",null,"Please use the stylesheet ",(0,o.kt)("inlineCode",{parentName:"p"},"style.css")," like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import '@bangle.dev/react-menu/style.css';\n")),(0,o.kt)("h2",{id:"floatingmenu-component"},"floatingMenu: ",(0,o.kt)("a",{parentName:"h2",href:"/docs/api/core/#component"},"Component")),(0,o.kt)("p",null,"A component for creating menus that float somewhere in the editor, most likely around a selection. By default it contains three types of menus:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"defaultMenu")," Regular tooltip showing some basic formatting buttons.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"linkSubMenu")," The link menu tooltip which allows editing and visiting of the link.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"null")," No menu tooltip shown."))),(0,o.kt)("p",null,"See ",(0,o.kt)("inlineCode",{parentName:"p"},"calculateType")," below for adding more types."),(0,o.kt)("h3",{id:"plugins---plugins"},"plugins({ ... }): ",(0,o.kt)("a",{parentName:"h3",href:"/docs/api/core/#plugins"},"Plugins")),(0,o.kt)("p",null,"Named parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"key:")," ?",(0,o.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#state.PluginKey"},"Prosemirror.PluginKey"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"keybindings"),": ?",(0,o.kt)("a",{parentName:"p",href:"/docs/api/core/#keybindingsobject"},"KeybindingsObject"),"=","defaultKeys",(0,o.kt)("br",{parentName:"p"}),"\n","For a list of allowed keys see ",(0,o.kt)("strong",{parentName:"p"},"defaultKeys")," below.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"getScrollContainer:")," ?fn(view: EditorView) -> dom.Node",(0,o.kt)("br",{parentName:"p"}),"\n","The dom Node which contains the scrollbar. This will be used to prevent the tooltip from overflowing. This defaults to using the parent dom Node of the ",(0,o.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#view.EditorView"},"Prosemirror.EditorView"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"calculateType:")," ?fn(state: EditorState, prevType: string | null) -> string | null",(0,o.kt)("br",{parentName:"p"}),"\n","A function to calculate the type of floating menu to show whenever the editor's selection changes. Note that this will ",(0,o.kt)("em",{parentName:"p"},"not")," be called if the type is changed via the ",(0,o.kt)("inlineCode",{parentName:"p"},"updateFloatingTooltipType")," command. The default value calculates the tooltip type based on the following conditions:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"linkSubMenu"),": If the the selection is inside a link mark")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"defaultMenu"),": If the above do not match and selection is not empty.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"null")," : anything else")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"tooltipRenderOpts"),": ?","[tooltipRenderOpts]"))),(0,o.kt)("h3",{id:"commands-commandobject"},"commands: ",(0,o.kt)("a",{parentName:"h3",href:"/docs/api/core/#commandobject"},"CommandObject")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"focusFloatingMenuInput"),"(key: ",(0,o.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#state.PluginKey"},"Prosemirror.PluginKey"),"): ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/core/#command"},"Command"),(0,o.kt)("br",{parentName:"p"}),"\n","Sets the focus on the ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," element in the floating menu. Bangle uses this internally to set focus on the input element when a user press keyboard shortcut to set a link.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"toggleLinkSubMenu"),"(key: ",(0,o.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#state.PluginKey"},"Prosemirror.PluginKey"),"): ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/core/#command"},"Command"),(0,o.kt)("br",{parentName:"p"}),"\n","Toggles the ",(0,o.kt)("inlineCode",{parentName:"p"},"linkSubMenu")," tooltip.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"updateFloatingTooltipType"),"(key: ",(0,o.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#state.PluginKey"},"Prosemirror.PluginKey"),", type: string | null): ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/core/#command"},"Command"),(0,o.kt)("br",{parentName:"p"}),"\n","Manually set the floating menu's current type. Set type to ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to hide the floating menu tooltip.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"queryIsMenuActive"),"(key: ",(0,o.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#state.PluginKey"},"Prosemirror.PluginKey"),"): ",(0,o.kt)("a",{parentName:"p",href:"#querycommand"},"QueryCommand"),"<","boolean",">",(0,o.kt)("br",{parentName:"p"}),"\n","Query if the menu is active."))),(0,o.kt)("h3",{id:"defaultkeys-keybindingsobject"},"defaultKeys: ",(0,o.kt)("a",{parentName:"h3",href:"/docs/api/core/#keybindingsobject"},"KeybindingsObject")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hide")," = ",(0,o.kt)("inlineCode",{parentName:"p"},"'Escape'"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"toggleLink")," = ",(0,o.kt)("inlineCode",{parentName:"p"},"'Meta-k'")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage")),(0,o.kt)("p",null,"\ud83d\udcd6 See ",(0,o.kt)("a",{parentName:"p",href:"/docs/examples/react-floating-menu"},"FloatingMenu example")),(0,o.kt)("h2",{id:"floatingmenu-reactelement"},"FloatingMenu: ",(0,o.kt)("a",{parentName:"h2",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element")),(0,o.kt)("h3",{id:"props"},"Props"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"menuKey"),": ?",(0,o.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#state.PluginKey"},"Prosemirror.PluginKey"),(0,o.kt)("br",{parentName:"p"}),"\n","The plugin key of the floatingMenu.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"renderMenuType:")," ?fn({ type, menuKey }) -> ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element"),(0,o.kt)("br",{parentName:"p"}),"\n","Return the type of floating menu to render based on the type. Defaults to using a function which returns some default components for the following types:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Some sensible default buttons for ",(0,o.kt)("inlineCode",{parentName:"p"},"'defaultMenu'"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"LinkSubMenu for ",(0,o.kt)("inlineCode",{parentName:"p"},"'linkSubMenu'"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Hide the menu for ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage")),(0,o.kt)("p",null,"\ud83d\udcd6 See ",(0,o.kt)("a",{parentName:"p",href:"/docs/examples/react-floating-menu"},"FloatingMenu example")),(0,o.kt)("h2",{id:"menu-reactelement"},"Menu: ",(0,o.kt)("a",{parentName:"h2",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element")),(0,o.kt)("p",null,"A UI wrapper component for building a menu."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Props:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"className"),": ?string",(0,o.kt)("br",{parentName:"p"}),"\n","Add classes to this component.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"children:")," React.Children"))),(0,o.kt)("h2",{id:"menugroup-reactelement"},"MenuGroup: ",(0,o.kt)("a",{parentName:"h2",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element")),(0,o.kt)("p",null,"A UI wrapper for grouping menu buttons and showing a partition to separate from other Menu groups."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Props:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"className"),": ?string",(0,o.kt)("br",{parentName:"p"}),"\n","Add classes to this component.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"children:")," React.Children"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage"),"\nBuilding a menu:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import {\n  Menu,\n  MenuGroup,\n  BoldButton,\n  HeadingButton,\n  BulletListButton,\n  ItalicButton,\n} from '@bangle.dev/react-menu';\n\n<Menu>\n  <MenuGroup>\n    <BoldButton />\n    <ItalicButton />\n  </MenuGroup>\n  <MenuGroup>\n    <HeadingButton level={1} />\n    <HeadingButton level={2} />\n    <BulletListButton />\n  </MenuGroup>\n</Menu>;\n")),(0,o.kt)("p",null,"\ud83d\udcd6 See\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/examples/react-floating-menu"},"FloatingMenu example")," for more details."),(0,o.kt)("h2",{id:"linksubmenu-reactelement"},"LinkSubMenu: ",(0,o.kt)("a",{parentName:"h2",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element")),(0,o.kt)("p",null,"A React component for showing a link editor for the type ",(0,o.kt)("inlineCode",{parentName:"p"},"'linkSubMenu'"),"."),(0,o.kt)("h2",{id:"menudropdown-reactelement"},"MenuDropdown: ",(0,o.kt)("a",{parentName:"h2",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element")),(0,o.kt)("p",null,"A React component for rendering dropdowns."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Props:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"parent:")," fn({ isDropdownVisible, updateDropdown }) -> ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element"),(0,o.kt)("br",{parentName:"p"}),"\n","A render prop to show the button that allows toggling of the dropdown. Ideally you would wanna put in ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuButton")," in this.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"children:")," ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element"),(0,o.kt)("br",{parentName:"p"}),"\n","React children that are showed inside the dropdown. Ideally you would wanna put in ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuButton"),"s in this."))),(0,o.kt)("p",null,"\ud83d\udcd6 See\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/examples/react-floating-menu"},"FloatingMenu example")," for a dropdown."),(0,o.kt)("h2",{id:"menubutton-reactelement"},"MenuButton: ",(0,o.kt)("a",{parentName:"h2",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element")),(0,o.kt)("p",null,"A button for your menu."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Props"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"className"),": ?string",(0,o.kt)("br",{parentName:"p"}),"\n","Add CSS classes to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<button>")," DOM node.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"children"),": ?",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element"),(0,o.kt)("br",{parentName:"p"}),"\n","The content of the button. Ideally some string or an SVG icon.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"isActive"),": ?boolean",(0,o.kt)("br",{parentName:"p"}),"\n","Whether the button is active.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"isDisabled"),": ?boolean",(0,o.kt)("br",{parentName:"p"}),"\n","Whether the button is disabled.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hint"),": ?string",(0,o.kt)("br",{parentName:"p"}),"\n","A tooltip hint to show when hovering over this button.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hintPos"),": ?",(0,o.kt)("inlineCode",{parentName:"p"},"'top'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'bottom'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'right'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'left'"),(0,o.kt)("br",{parentName:"p"}),"\n","The position of the hint tooltip.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"onMouseDown"),": ?fn(event)",(0,o.kt)("br",{parentName:"p"}),"\n","The mouse down handler of the button. You are expected to ",(0,o.kt)("inlineCode",{parentName:"p"},"event.preventDefault()")," to prevent the editor from losing the focus."))),(0,o.kt)("h2",{id:"menubuttons"},"MenuButtons"),(0,o.kt)("p",null,"Bangle comes with following button:"),(0,o.kt)("h3",{id:"boldbutton-reactelement"},"BoldButton: ",(0,o.kt)("a",{parentName:"h3",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element")),(0,o.kt)("p",null,"Marks text as ",(0,o.kt)("inlineCode",{parentName:"p"},"bold")," mark."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Props:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hint"),": ?string",(0,o.kt)("br",{parentName:"p"}),"\n","A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to not show any hint.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hintPos"),": ?",(0,o.kt)("inlineCode",{parentName:"p"},"'top'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'bottom'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'right'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'left'"),(0,o.kt)("br",{parentName:"p"}),"\n","The position of the hint tooltip.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"children"),": ?",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element"),(0,o.kt)("br",{parentName:"p"}),"\n","The content to render inside the button, by default it will render an Icon for the button."))),(0,o.kt)("h3",{id:"italicbutton-reactelement"},"ItalicButton: ",(0,o.kt)("a",{parentName:"h3",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element")),(0,o.kt)("p",null,"Marks text as ",(0,o.kt)("inlineCode",{parentName:"p"},"italic")," mark."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Props:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hint"),": ?string",(0,o.kt)("br",{parentName:"p"}),"\n","A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to not show any hint.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hintPos"),": ?",(0,o.kt)("inlineCode",{parentName:"p"},"'top'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'bottom'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'right'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'left'"),(0,o.kt)("br",{parentName:"p"}),"\n","The position of the hint tooltip.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"children"),": ?",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element"),(0,o.kt)("br",{parentName:"p"}),"\n","The content to render inside the button, by default it will render an Icon for the button."))),(0,o.kt)("h3",{id:"undobutton-reactelement"},"UndoButton: ",(0,o.kt)("a",{parentName:"h3",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element")),(0,o.kt)("p",null,"Undoes the last edit."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Props:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hint"),": ?string",(0,o.kt)("br",{parentName:"p"}),"\n","A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to not show any hint.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hintPos"),": ?",(0,o.kt)("inlineCode",{parentName:"p"},"'top'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'bottom'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'right'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'left'"),(0,o.kt)("br",{parentName:"p"}),"\n","The position of the hint tooltip.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"children"),": ?",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element"),(0,o.kt)("br",{parentName:"p"}),"\n","The content to render inside the button, by default it will render an Icon for the button."))),(0,o.kt)("h3",{id:"redobutton-reactelement"},"RedoButton: ",(0,o.kt)("a",{parentName:"h3",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element")),(0,o.kt)("p",null,"Opposite of undo."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Props:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hint"),": ?string",(0,o.kt)("br",{parentName:"p"}),"\n","A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to not show any hint.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hintPos"),": ?",(0,o.kt)("inlineCode",{parentName:"p"},"'top'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'bottom'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'right'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'left'"),(0,o.kt)("br",{parentName:"p"}),"\n","The position of the hint tooltip.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"children"),": ?",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element"),(0,o.kt)("br",{parentName:"p"}),"\n","The content to render inside the button, by default it will render an Icon for the button."))),(0,o.kt)("h3",{id:"codebutton-reactelement"},"CodeButton: ",(0,o.kt)("a",{parentName:"h3",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element")),(0,o.kt)("p",null,"Marks text as ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," mark."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Props:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hint"),": ?string",(0,o.kt)("br",{parentName:"p"}),"\n","A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to not show any hint.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hintPos"),": ?",(0,o.kt)("inlineCode",{parentName:"p"},"'top'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'bottom'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'right'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'left'"),(0,o.kt)("br",{parentName:"p"}),"\n","The position of the hint tooltip.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"children"),": ?",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element"),(0,o.kt)("br",{parentName:"p"}),"\n","The content to render inside the button, by default it will render an Icon for the button."))),(0,o.kt)("h3",{id:"blockquotebutton-reactelement"},"BlockquoteButton: ",(0,o.kt)("a",{parentName:"h3",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element")),(0,o.kt)("p",null,"Wrap's inside a Blockquote."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Props:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hint"),": ?string",(0,o.kt)("br",{parentName:"p"}),"\n","A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to not show any hint.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hintPos"),": ?",(0,o.kt)("inlineCode",{parentName:"p"},"'top'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'bottom'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'right'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'left'"),(0,o.kt)("br",{parentName:"p"}),"\n","The position of the hint tooltip.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"children"),": ?",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element"),(0,o.kt)("br",{parentName:"p"}),"\n","The content to render inside the button, by default it will render an Icon for the button."))),(0,o.kt)("h3",{id:"bulletlistbutton-reactelement"},"BulletListButton: ",(0,o.kt)("a",{parentName:"h3",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element")),(0,o.kt)("p",null,"Convert text to a ",(0,o.kt)("inlineCode",{parentName:"p"},"bulletList")," node."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Props:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hint"),": ?string",(0,o.kt)("br",{parentName:"p"}),"\n","A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to not show any hint.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hintPos"),": ?",(0,o.kt)("inlineCode",{parentName:"p"},"'top'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'bottom'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'right'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'left'"),(0,o.kt)("br",{parentName:"p"}),"\n","The position of the hint tooltip.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"children"),": ?",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element"),(0,o.kt)("br",{parentName:"p"}),"\n","The content to render inside the button, by default it will render an Icon for the button."))),(0,o.kt)("h3",{id:"todolistbutton-reactelement"},"TodoListButton: ",(0,o.kt)("a",{parentName:"h3",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element")),(0,o.kt)("p",null,"Convert paragraph to a ",(0,o.kt)("inlineCode",{parentName:"p"},"todoList")," node."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Props:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hint"),": ?string",(0,o.kt)("br",{parentName:"p"}),"\n","A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to not show any hint.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hintPos"),": ?",(0,o.kt)("inlineCode",{parentName:"p"},"'top'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'bottom'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'right'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'left'"),(0,o.kt)("br",{parentName:"p"}),"\n","The position of the hint tooltip.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"children"),": ?",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element"),(0,o.kt)("br",{parentName:"p"}),"\n","The content to render inside the button, by default it will render an Icon for the button."))),(0,o.kt)("h3",{id:"headingbutton-reactelement"},"HeadingButton: ",(0,o.kt)("a",{parentName:"h3",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element")),(0,o.kt)("p",null,"Convert text to a ",(0,o.kt)("inlineCode",{parentName:"p"},"heading")," node."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Props:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"level:")," number",(0,o.kt)("br",{parentName:"p"}),"\n","The heading level.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hint"),": ?string",(0,o.kt)("br",{parentName:"p"}),"\n","A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to not show any hint.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hintPos"),": ?",(0,o.kt)("inlineCode",{parentName:"p"},"'top'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'bottom'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'right'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'left'"),(0,o.kt)("br",{parentName:"p"}),"\n","The position of the hint tooltip.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"children"),": ?",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element"),(0,o.kt)("br",{parentName:"p"}),"\n","The content to render inside the button, by default it will render an Icon for the button."))),(0,o.kt)("h3",{id:"floatinglinkbutton-reactelement"},"FloatingLinkButton ",(0,o.kt)("a",{parentName:"h3",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element")),(0,o.kt)("p",null,"Upon mouse down changes floating menu type to ",(0,o.kt)("inlineCode",{parentName:"p"},"'linkSubMenu'"),". ",(0,o.kt)("strong",{parentName:"p"},"Note:")," this is meant to be used only inside ",(0,o.kt)("a",{parentName:"p",href:"#floatingmenu-component"},"FloatingMenu"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Props:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"menuKey"),": ",(0,o.kt)("a",{parentName:"p",href:"https://prosemirror.net/docs/ref/#state.PluginKey"},"Prosemirror.PluginKey"),(0,o.kt)("br",{parentName:"p"}),"\n","The menu key associated with your menu plugin.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hint"),": ?string",(0,o.kt)("br",{parentName:"p"}),"\n","A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to not show any hint.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hintPos"),": ?",(0,o.kt)("inlineCode",{parentName:"p"},"'top'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'bottom'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'right'"),"|",(0,o.kt)("inlineCode",{parentName:"p"},"'left'"),(0,o.kt)("br",{parentName:"p"}),"\n","The position of the hint tooltip.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"children"),": ?",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactcomponent"},"React.Element"),(0,o.kt)("br",{parentName:"p"}),"\n","The content to render inside the button, by default it will render an Icon for the button."))))}k.isMDXComponent=!0}}]);