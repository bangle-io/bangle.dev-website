(self.webpackChunkbangle_dev_website=self.webpackChunkbangle_dev_website||[]).push([[7751],{7751:function(e,t,n){"use strict";n.d(t,{YC:function(){return Ee},n3:function(){return be},fV:function(){return De},_M:function(){return I},Kh:function(){return N},D_:function(){return He},AH:function(){return xe},RB:function(){return ke},BI:function(){return Le},v2:function(){return _},j2:function(){return C},ep:function(){return qe},kS:function(){return Z},pu:function(){return Oe},GG:function(){return Pe},JH:function(){return Ce},bh:function(){return Be},d3:function(){return Ve},h6:function(){return ye},PS:function(){return r}});var r={};n.r(r),n.d(r,{commands:function(){return f},defaultCalculateType:function(){return g},defaultKeys:function(){return h},focusFloatingMenuInput:function(){return w},plugins:function(){return p},toggleLinkSubMenu:function(){return m}});var i=n(391),s=n(9254),a=n(9743),o=n(3784);const{queryIsSelectionTooltipActive:l,querySelectionTooltipType:c,hideSelectionTooltip:u,updateSelectionTooltipType:d}=a.Nd,p=function({key:e=new s.H$("floatingMenuPlugin"),keybindings:t=h,tooltipRenderOpts:n={},calculateType:r=g}={}){return[a.Nd.plugins({key:e,calculateType:r,tooltipRenderOpts:n}),t&&(0,s.$f)({[t.hide]:(0,o.hX)(l(e),u(e)),[t.toggleLink]:m(e)})]},f={focusFloatingMenuInput:w,toggleLinkSubMenu:m,updateFloatingTooltipType:d,hideFloatingMenu:u,queryIsMenuActive:l},h={hide:"Escape",toggleLink:"Meta-k"},g=(e,t)=>{if(i.p4.queryIsSelectionAroundLink()(e)||i.p4.queryIsLinkActive()(e))return"linkSubMenu";if(e.selection.empty)return null;if(e.selection instanceof s.qv)return"defaultMenu";const{from:n,to:r}=e.selection;return function(e,t,n){let r=!1;return e.nodesBetween(t,n,((e,i)=>{if(r)return!1;if(e.isText){const s=i,a=i+e.text.length;if(!(t>=a||n<=s))return r=!0,!1}})),r}(e.doc,n,r)?"defaultMenu":null};function m(e){return(t,n,r)=>{const i=c(e)(t);return t.selection.empty?("linkSubMenu"===i&&(0,o.Jr)(r,w(e)),!1):"linkSubMenu"===i?u(e)(r.state,r.dispatch,r):((0,o.Jr)(r,w(e)),d(e,"linkSubMenu")(r.state,r.dispatch,r))}}function w(e){return t=>{const n=e.getState(t).tooltipContentDOM.querySelector("input");return!!n&&(n.focus(),!0)}}var v=n(9133),b=n(5697),E=n.n(b),L=n(7294),y=n(3935);const C=({className:e="",children:t,isActive:n,isDisabled:r,hint:i,hintPos:s="top",hintBreakWhiteSpace:a=!0,onMouseDown:o})=>L.createElement("button",{type:"button","data-bangle-balloon-break":a,"aria-label":i,"data-bangle-balloon-pos":s,disabled:r,onMouseDown:o,className:`bangle-menu-button ${n?"active":""} ${e}`},t);function M(e){return L.createElement("svg",Object.assign({viewBox:"-6 -5 24 24",xmlns:"http://www.w3.org/2000/svg"},e),L.createElement("path",{d:"M5.997 14H1.72c-.618 0-1.058-.138-1.323-.415C.132 13.308 0 12.867 0 12.262V1.738C0 1.121.135.676.406.406.676.136 1.114 0 1.719 0h4.536c.669 0 1.248.041 1.738.124.49.083.93.242 1.318.478a3.458 3.458 0 0 1 1.461 1.752c.134.366.2.753.2 1.16 0 1.401-.7 2.426-2.1 3.075 1.84.586 2.76 1.726 2.76 3.42 0 .782-.2 1.487-.602 2.114a3.61 3.61 0 0 1-1.623 1.39 5.772 5.772 0 0 1-1.471.377c-.554.073-1.2.11-1.939.11zm-.21-6.217h-2.95v4.087h3.046c1.916 0 2.874-.69 2.874-2.072 0-.707-.248-1.22-.745-1.537-.496-.319-1.238-.478-2.225-.478zM2.837 2.13v3.619h2.597c.707 0 1.252-.067 1.638-.2.385-.134.68-.389.883-.765.16-.267.239-.566.239-.897 0-.707-.252-1.176-.755-1.409-.503-.232-1.27-.348-2.301-.348H2.836z"}))}function D(e){return L.createElement("svg",Object.assign({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),L.createElement("path",{d:"M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z"}),L.createElement("path",{d:"M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z"}))}function O(e){return L.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),L.createElement("path",{d:"M9.13456 9H12.1346L10 14.6075H7L9.13456 9Z"}),L.createElement("path",{d:"M14.1346 9H17.1346L15 14.6075H12L14.1346 9Z"}))}function V(){return L.createElement("svg",{style:{transform:"scale(1.4, 1.4)"},viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},L.createElement("path",{d:"M9 7H7V9H9V7Z"}),L.createElement("path",{d:"M7 13V11H9V13H7Z"}),L.createElement("path",{d:"M7 15V17H9V15H7Z"}),L.createElement("path",{d:"M11 15V17H17V15H11Z"}),L.createElement("path",{d:"M17 13V11H11V13H17Z"}),L.createElement("path",{d:"M17 7V9H11V7H17Z"}))}function k(e){return L.createElement("svg",Object.assign({style:{transform:"scale(0.8, 0.8)"},viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),L.createElement("path",{d:"M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"}),L.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"}))}function P(e){return L.createElement("svg",Object.assign({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),L.createElement("path",{d:"M11.4903 5.45801H17.4903L16.7788 7.32716H14.7788L11.2212 16.6729H13.2212L12.5097 18.5421H6.5097L7.22122 16.6729H9.22122L12.7788 7.32716H10.7788L11.4903 5.45801Z"}))}function H(e){return L.createElement("svg",Object.assign({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),L.createElement("path",{d:"M5.33929 4.46777H7.33929V7.02487C8.52931 6.08978 10.0299 5.53207 11.6607 5.53207C15.5267 5.53207 18.6607 8.66608 18.6607 12.5321C18.6607 16.3981 15.5267 19.5321 11.6607 19.5321C9.51025 19.5321 7.58625 18.5623 6.30219 17.0363L7.92151 15.8515C8.83741 16.8825 10.1732 17.5321 11.6607 17.5321C14.4222 17.5321 16.6607 15.2935 16.6607 12.5321C16.6607 9.77065 14.4222 7.53207 11.6607 7.53207C10.5739 7.53207 9.56805 7.87884 8.74779 8.46777L11.3393 8.46777V10.4678H5.33929V4.46777Z",fill:"currentColor"}))}function x(e){return L.createElement("svg",Object.assign({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),L.createElement("path",{d:"M13.1459 11.0499L12.9716 9.05752L15.3462 8.84977C14.4471 7.98322 13.2242 7.4503 11.8769 7.4503C9.11547 7.4503 6.87689 9.68888 6.87689 12.4503C6.87689 15.2117 9.11547 17.4503 11.8769 17.4503C13.6977 17.4503 15.2911 16.4771 16.1654 15.0224L18.1682 15.5231C17.0301 17.8487 14.6405 19.4503 11.8769 19.4503C8.0109 19.4503 4.87689 16.3163 4.87689 12.4503C4.87689 8.58431 8.0109 5.4503 11.8769 5.4503C13.8233 5.4503 15.5842 6.24474 16.853 7.52706L16.6078 4.72412L18.6002 4.5498L19.1231 10.527L13.1459 11.0499Z",fill:"currentColor"}))}function q({level:e,...t}){return L.createElement("svg",Object.assign({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},t),L.createElement("text",{x:"12",y:"12",stroke:"currentColor",textAnchor:"middle",alignmentBaseline:"central",dominantBaseline:"middle"},"H",e))}function B(e){return L.createElement("svg",Object.assign({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),L.createElement("text",{x:"12",y:"12",stroke:"currentColor",textAnchor:"middle",alignmentBaseline:"central",dominantBaseline:"middle"},"P"))}function T(e){return L.createElement("svg",Object.assign({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),L.createElement("text",{x:"12",y:"12",stroke:"currentColor",textAnchor:"middle",alignmentBaseline:"central",dominantBaseline:"middle"},"1."))}function j(e){return L.createElement("svg",Object.assign({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),L.createElement("path",{d:"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z"}),L.createElement("path",{d:"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z"}),L.createElement("path",{d:"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z"}))}function S(e){return L.createElement("svg",Object.assign({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),L.createElement("path",{d:"M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"}),L.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"}))}function A(e){return L.createElement("svg",Object.assign({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",style:{transform:"scale(1.1, 1.1)"}},e),L.createElement("path",{d:"M15.6396 7.02527H12.0181V5.02527H19.0181V12.0253H17.0181V8.47528L12.1042 13.3892L10.6899 11.975L15.6396 7.02527Z"}),L.createElement("path",{d:"M10.9819 6.97473H4.98193V18.9747H16.9819V12.9747H14.9819V16.9747H6.98193V8.97473H10.9819V6.97473Z"}))}function R(e){return L.createElement("svg",Object.assign({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),L.createElement("path",{d:"M16.34 9.32a1 1 0 10-1.36-1.46l-2.93 2.73-2.73-2.93a1 1 0 00-1.46 1.36l2.73 2.93-2.93 2.73a1 1 0 101.36 1.46l2.93-2.73 2.73 2.93a1 1 0 101.46-1.36l-2.73-2.93 2.93-2.73z"}),L.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 12a11 11 0 1122 0 11 11 0 01-22 0zm11 9a9 9 0 110-18 9 9 0 010 18z"}))}function I(e){return L.createElement("svg",Object.assign({viewBox:"0 0 24 24",style:{transform:"scale(0.8, 0.8)"},fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),L.createElement("path",{d:"M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"}))}function N(e){return L.createElement("svg",Object.assign({viewBox:"0 0 24 24",style:{transform:"scale(0.8, 0.8)"},fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),L.createElement("path",{d:"M17.6569 16.2427L19.0711 14.8285L12.0001 7.75739L4.92896 14.8285L6.34317 16.2427L12.0001 10.5858L17.6569 16.2427Z"}))}function Z({className:e="",children:t}){return L.createElement("div",{className:`bangle-menu-group  ${e}`},t)}function K({getIsTop:e=(()=>!0)}){const t=(0,v.Lg)(),n=i.p4.queryLinkAttrs()(t.state),r=n&&n.href||"";return L.createElement($,{key:r,originalHref:r,view:t,getIsTop:e})}function $({getIsTop:e,view:t,originalHref:n=""}){const[r,s]=(0,L.useState)(n),a=(0,L.useRef)(null),o=()=>{i.p4.updateLink(r)(t.state,t.dispatch),t.focus()};return L.createElement("span",{className:"bangle-link-menu"},L.createElement("input",{value:r,ref:a,onKeyDown:n=>{if("Enter"===n.key)return n.preventDefault(),o(),void t.focus();const r=e();return r&&"ArrowDown"===n.key?(n.preventDefault(),void t.focus()):r||"ArrowUp"!==n.key?"Escape"===n.key?(n.preventDefault(),void t.focus()):void 0:(n.preventDefault(),void t.focus())},onChange:e=>{s(e.target.value),e.preventDefault()}}),L.createElement(Z,null,L.createElement(C,{hint:"Visit",onMouseDown:e=>{e.preventDefault(),window.open(r,"_blank")}},L.createElement(A,null))),r===n?L.createElement(C,{hint:"Clear",onMouseDown:e=>{e.preventDefault(),i.p4.updateLink()(t.state,t.dispatch),t.focus()}},L.createElement(R,null)):L.createElement(C,{hint:"Save",onMouseDown:e=>{e.preventDefault(),o(),t.focus()}},L.createElement(S,null)))}function _({className:e="",children:t,...n}){return L.createElement("div",Object.assign({className:`bangle-menu ${e}`},n),t)}C.propTypes={onMouseDown:E().func,children:E().oneOfType([E().string,E().element,E().arrayOf(E().element)]).isRequired};const{defaultKeys:W,queryIsOrderedListActive:F,toggleOrderedList:J}=i.dq,{defaultKeys:U,queryIsItalicActive:z,toggleItalic:Y}=i.pU,{defaultKeys:G,undo:X,redo:Q}=i.m8,{defaultKeys:ee,queryIsBoldActive:te,toggleBold:ne}=i.Se,{defaultKeys:re,queryIsCodeActive:ie,toggleCode:se}=i.TU,{defaultKeys:ae,queryIsTopLevelParagraph:oe,convertToParagraph:le}=i.An,{defaultKeys:ce,queryIsHeadingActive:ue,toggleHeading:de}=i.nP,{createLink:pe,queryIsLinkActive:fe}=i.p4,{defaultKeys:he,queryIsBulletListActive:ge,queryIsTodoListActive:me,toggleBulletList:we,toggleTodoList:ve}=i.iI;function be({hint:e="Bold\n"+ee.toggleBold,hintPos:t="top",children:n=L.createElement(M,null),...r}){const i=(0,v.Lg)(),s=(0,L.useCallback)((e=>{e.preventDefault(),ne()(i.state,i.dispatch,i)&&i.dispatch&&i.focus()}),[i]);return L.createElement(C,Object.assign({},r,{hintPos:t,onMouseDown:s,hint:e,isActive:te()(i.state),isDisabled:!i.editable||!ne()(i.state)}),n)}function Ee({hint:e="Wrap in Blockquote\n"+i.Mm.defaultKeys.wrapIn,hintPos:t="top",children:n=L.createElement(O,null),...r}){const s=(0,v.Lg)(),a=(0,L.useCallback)((e=>{e.preventDefault(),i.Mm.commands.wrapInBlockquote()(s.state,s.dispatch,s)&&s.dispatch&&s.focus()}),[s]);return L.createElement(C,Object.assign({},r,{hintPos:t,onMouseDown:a,hint:e,isActive:i.Mm.commands.queryIsBlockquoteActive()(s.state),isDisabled:!s.editable||!i.Mm.commands.wrapInBlockquote()(s.state)}),n)}function Le({hint:e="Italic\n"+U.toggleItalic,hintPos:t="top",children:n=L.createElement(P,null),...r}){const i=(0,v.Lg)(),s=(0,L.useCallback)((e=>{e.preventDefault(),Y()(i.state,i.dispatch,i)&&i.dispatch&&i.focus()}),[i]);return L.createElement(C,Object.assign({},r,{hintPos:t,onMouseDown:s,hint:e,isActive:z()(i.state),isDisabled:!i.editable||!Y()(i.state)}),n)}function ye({hint:e="Undo\n"+G.undo,hintPos:t="top",children:n=L.createElement(H,null),...r}){const i=(0,v.Lg)(),s=(0,L.useCallback)((e=>{e.preventDefault(),X()(i.state,i.dispatch)&&i.dispatch&&i.focus()}),[i]);return L.createElement(C,Object.assign({},r,{hintPos:t,onMouseDown:s,hint:e,isDisabled:!i.editable||!X()(i.state)}),n)}function Ce({hint:e="Redo\n"+G.redo,hintPos:t="top",children:n=L.createElement(x,null),...r}){const i=(0,v.Lg)(),s=(0,L.useCallback)((e=>{e.preventDefault(),Q()(i.state,i.dispatch)&&i.dispatch&&i.focus()}),[i]);return L.createElement(C,Object.assign({},r,{hintPos:t,onMouseDown:s,hint:e,isDisabled:!i.editable||!Q()(i.state)}),n)}function Me({hint:e="Code\n"+re.toggleCode,hintPos:t="top",children:n=L.createElement(D,null),...r}){const i=(0,v.Lg)(),s=(0,L.useCallback)((e=>{e.preventDefault(),se()(i.state,i.dispatch,i)&&i.dispatch&&i.focus()}),[i]);return L.createElement(C,Object.assign({},r,{hintPos:t,onMouseDown:s,hint:e,isActive:ie()(i.state),isDisabled:!i.editable||!se()(i.state)}),n)}function De({hint:e="BulletList\n"+he.toggle,hintPos:t="top",children:n=L.createElement(V,null),...r}){const i=(0,v.Lg)(),s=(0,L.useCallback)((e=>{e.preventDefault(),we()(i.state,i.dispatch,i)&&i.dispatch&&i.focus()}),[i]);return L.createElement(C,Object.assign({},r,{hintPos:t,onMouseDown:s,hint:e,isDisabled:!i.editable,isActive:ge()(i.state)&&!me()(i.state)}),n)}function Oe({hint:e="OrderedList\n"+W.toggle,hintPos:t="top",children:n=L.createElement(T,null),...r}){const i=(0,v.Lg)(),s=(0,L.useCallback)((e=>{e.preventDefault(),J()(i.state,i.dispatch,i)&&i.dispatch&&i.focus()}),[i]);return L.createElement(C,Object.assign({},r,{hintPos:t,onMouseDown:s,hint:e,isDisabled:!i.editable,isActive:F()(i.state)}),n)}function Ve({hint:e="TodoList\n"+he.toggleTodo,hintPos:t="top",children:n=L.createElement(k,null),...r}){const i=(0,v.Lg)(),s=(0,L.useCallback)((e=>{e.preventDefault(),ve()(i.state,i.dispatch,i)&&i.dispatch&&i.focus()}),[i]);return L.createElement(C,Object.assign({},r,{hintPos:t,onMouseDown:s,hint:e,isDisabled:!i.editable,isActive:me()(i.state)}),n)}function ke({level:e,hint:t=`Heading${e}\n`+ce["toH"+e],hintPos:n="top",children:r=L.createElement(q,{level:e}),...i}){const s=(0,v.Lg)(),a=(0,L.useCallback)((t=>{t.preventDefault(),de(e)(s.state,s.dispatch,s)&&s.dispatch&&s.focus()}),[s,e]);return L.createElement(C,Object.assign({},i,{hintPos:n,onMouseDown:a,hint:t,isActive:ue(e)(s.state),isDisabled:!s.editable||!de(e)(s.state)}),r)}function Pe({hint:e="Paragraph\n"+ae.convertToParagraph,hintPos:t="top",children:n=L.createElement(B,null),...r}){const i=(0,v.Lg)(),s=(0,L.useCallback)((e=>{e.preventDefault(),le()(i.state,i.dispatch,i)&&i.dispatch&&i.focus()}),[i]);return L.createElement(C,Object.assign({},r,{hintPos:t,onMouseDown:s,hint:e,isActive:oe()(i.state),isDisabled:!i.editable||!le()(i.state)}),n)}function He({hint:e="Link\n"+h.toggleLink,hintPos:t="top",children:n=L.createElement(j,null),menuKey:r}){const i=(0,v.Lg)(),s=(0,L.useCallback)((e=>{e.preventDefault();(0,o.hX)((e=>pe("")(e)),((e,t,n)=>(t&&(m(r)(n.state,n.dispatch,n),(0,o.Jr)(n,w(r))),!0)))(i.state,i.dispatch,i)&&i.dispatch&&i.focus()}),[i,r]);return L.createElement(C,{onMouseDown:s,hint:e,hintPos:t,isActive:fe()(i.state),isDisabled:!i.editable||!pe("")(i.state)},n)}function xe({menuKey:e,renderMenuType:t=(({type:e,menuKey:t})=>"defaultMenu"===e?L.createElement(_,null,L.createElement(Z,null,L.createElement(be,null),L.createElement(Le,null),L.createElement(Me,null),L.createElement(He,{menuKey:t})),L.createElement(Z,null,L.createElement(ke,{level:2}),L.createElement(ke,{level:3}),L.createElement(De,null),L.createElement(Ve,null))):"linkSubMenu"===e?L.createElement(_,null,L.createElement(K,null)):null)}){const n=(0,v.JY)(e),r=t({type:n.type,menuKey:e});return r?y.createPortal(r,n.tooltipContentDOM):null}function qe({className:e="",parent:t,children:n}){const[r,i]=(0,L.useState)(!1);return L.createElement("div",{className:`bangle-menu-dropdown ${e}`},t({isDropdownVisible:r,updateDropdown:i}),r?L.createElement("div",{className:"bangle-menu-vertical-group"},n):null)}function Be({editor:e,renderMenu:t}){return e?L.createElement(v.KW.Provider,{value:e.view},L.createElement(Te,{renderMenu:t})):null}function Te({renderMenu:e}){return(0,v.JY)(i.tv.iT,!0),(0,v.JY)(i.tv.C7,!0),e()}ke.propTypes={level:E().number.isRequired},He.propTypes={menuKey:E().instanceOf(s.H$).isRequired},xe.propTypes={menuKey:E().instanceOf(s.H$).isRequired,renderMenuType:E().func},Be.propTypes={renderMenu:E().func.isRequired,editor:E().instanceOf(i.uF)}},9133:function(e,t,n){"use strict";n.d(t,{uF:function(){return w},KW:function(){return m},sZ:function(){return E},Lg:function(){return y},JY:function(){return L}});var r=n(391),i=n(9254),s=n(3784),a=n(7294),o=n(5697),l=n.n(o),c=n(3935);let u=()=>{};const d=new WeakMap;function p(e){const[t,n]=(0,a.useState)([]);return(0,a.useEffect)((()=>{let t=!1;var i;return(0,r.w3)(e.current,(i=e=>{t||n((t=>e(t)))},{create:(e,t)=>{u("create",s.qr.get(e)),i((t=>[...t,e]))},update:(e,t)=>{u("update",s.qr.get(e));const n=d.get(e);n&&n()},destroy:e=>{u("destroy",s.qr.get(e)),i((t=>t.filter((t=>t!==e))))}})),()=>{t=!0}}),[e]),t}let f=()=>{};class h extends a.PureComponent{constructor(e){super(e),Object.defineProperty(this,"update",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"attachToContentDOM",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.update=()=>{this.setState(((e,t)=>({nodeViewProps:t.nodeView.getNodeViewProps()})))},this.attachToContentDOM=e=>{if(!e)return;const t=this.props.nodeView.contentDOM;e.contains(t)||(t.parentNode&&t.parentNode.removeChild(t),e.appendChild(t))},e.nodeViewUpdateStore.set(e.nodeView,this.update),this.state={nodeViewProps:this.props.nodeView.getNodeViewProps()}}getChildren(){return this.props.nodeView.contentDOM?this.state.nodeViewProps.node.isInline?a.createElement("span",{className:"bangle-nv-child-container",ref:this.attachToContentDOM}):a.createElement("div",{className:"bangle-nv-child-container",ref:this.attachToContentDOM}):null}render(){f("react rendering",s.qr.get(this.props.nodeView));const e=this.props.renderNodeViews({...this.state.nodeViewProps,children:this.getChildren()});if(!e)throw(0,s.Bo)("renderNodeView prop must return a react element for the node",this.state.nodeViewProps.node),new Error(`renderNodeView must handle rendering for node of type "${this.state.nodeViewProps.node.type.name}"`);return e}}Object.defineProperty(h,"propTypes",{enumerable:!0,configurable:!0,writable:!0,value:{nodeView:l().object.isRequired,renderNodeViews:l().func.isRequired,nodeViewUpdateStore:l().instanceOf(WeakMap).isRequired}});l().bool.isRequired,l().instanceOf(i.NB).isRequired,l().instanceOf(i.tk).isRequired,l().func.isRequired,l().object.isRequired,l().object.isRequired,l().func.isRequired,l().oneOfType([l().element,l().arrayOf(l().element)]).isRequired;let g=()=>{};const m=a.createContext(null);function w({id:e,state:t,children:n,focusOnInit:i=!0,pmViewOpts:o,renderNodeViews:l,className:u,style:f,onReady:g=(()=>{})}){const w=(0,a.useRef)(null),b=(0,a.useRef)(g),E=(0,a.useRef)({state:t,focusOnInit:i,pmViewOpts:o}),[L,y]=(0,a.useState)(),C=p(w);if((0,a.useEffect)((()=>{const e=new r.uF(w.current,E.current);return e.view._updatePluginWatcher=v(e),b.current(e),y(e),()=>{e.destroy()}}),[]),C.length>0&&null==l)throw new Error("When using nodeViews, you must provide renderNodeViews callback");return a.createElement(a.Fragment,null,a.createElement("div",{ref:w,id:e,className:u,style:f}),C.map((e=>c.createPortal(a.createElement(h,{debugKey:s.qr.get(e),nodeViewUpdateStore:d,nodeView:e,renderNodeViews:l}),e.containerDOM,s.qr.get(e)))),L?a.createElement(m.Provider,{value:L.view},n):null)}const v=e=>(t,n=!1)=>{if(e.destroyed)return;let r=e.view.state;const i=n?r.plugins.filter((e=>e!==t)):[...r.plugins,t];r=r.reconfigure({plugins:i}),g("Adding watching to existing state",t),e.view.updateState(r)};w.propTypes={id:l().string,renderNodeViews:l().func,onReady:l().func,children:l().oneOfType([l().element,l().arrayOf(l().element)]),state:l().instanceOf(r._n).isRequired,pmViewOpts:l().object,className:l().string,style:l().object};let b=()=>{};function E(e){if(e.plugins&&"function"!=typeof e.plugins)throw new Error("plugins error: plugins must be a function");const[t]=(0,a.useState)((()=>new r._n(e)));return t}function L(e,t=!1){const n=y(),[r,o]=(0,a.useState)(e.getState(n.state));return(0,a.useEffect)((()=>{b("Setup plugin",e);let r=o;t&&(r=(0,s.N3)(o));const a=function(e,t){return new i.Sy({key:new i.H$(`withPluginState_${e.key}`),view:()=>({update(n,r){const{state:i}=n;if(r===i)return;const s=e.getState(i);s!==e.getState(r)&&t(s)}})})}(e,r);return n._updatePluginWatcher(a),()=>{t&&r.cancel(),n._updatePluginWatcher(a,!0)}}),[n,e,t]),r}function y(){return(0,a.useContext)(m)}}}]);