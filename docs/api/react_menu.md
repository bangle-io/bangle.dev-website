---
title: '@bangle.dev/react-menu'
sidebar_label: '@bangle.dev/react-menu'
packageName: '@bangle.dev/react-menu'
id: 'react_menu'
---

This package provides you with tools to help build flexible yet powerful menus using React.

### Installation

```
# peer deps
npm install @bangle.dev/core @bangle.dev/pm @bangle.dev/react @bangle.dev/tooltip
npm install @bangle.dev/react-menu
```

## Styling

Please use the stylesheet `style.css` like:

```js
import '@bangle.dev/react-menu/style.css';
```

## floatingMenu: [Component](/docs/api/core/#component)

A component for creating menus that float somewhere in the editor, most likely around a selection. By default it contains three types of menus:

1. `defaultMenu` Regular tooltip showing some basic formatting buttons.

2. `linkSubMenu` The link menu tooltip which allows editing and visiting of the link.

3. `null` No menu tooltip shown.

See `calculateType` below for adding more types.

### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **key:** ?[Prosemirror.PluginKey](https://prosemirror.net/docs/ref/#state.PluginKey)

- **keybindings**: ?[KeybindingsObject](/docs/api/core/#keybindingsobject)&#x3D;defaultKeys  
 For a list of allowed keys see **defaultKeys** below.

- **getScrollContainer:** ?fn(view: EditorView) -> dom.Node  
  The dom Node which contains the scrollbar. This will be used to prevent the tooltip from overflowing. This defaults to using the parent dom Node of the [Prosemirror.EditorView](https://prosemirror.net/docs/ref/#view.EditorView).

- **calculateType:** ?fn(state: EditorState, prevType: string | null) -> string | null  
  A function to calculate the type of floating menu to show whenever the editor's selection changes. Note that this will _not_ be called if the type is changed via the `updateFloatingTooltipType` command. The default value calculates the tooltip type based on the following conditions:

  - `linkSubMenu`: If the the selection is inside a link mark

  - `defaultMenu`: If the above do not match and selection is not empty.

  - `null` : anything else

- **tooltipRenderOpts**: ?[tooltipRenderOpts]

### commands: [CommandObject](/docs/api/core/#commandobject)

- **focusFloatingMenuInput**(key: [Prosemirror.PluginKey](https://prosemirror.net/docs/ref/#state.PluginKey)): [Command](/docs/api/core/#command)  
  Sets the focus on the `input` element in the floating menu. Bangle uses this internally to set focus on the input element when a user press keyboard shortcut to set a link.

- **toggleLinkSubMenu**(key: [Prosemirror.PluginKey](https://prosemirror.net/docs/ref/#state.PluginKey)): [Command](/docs/api/core/#command)  
  Toggles the `linkSubMenu` tooltip.

- **updateFloatingTooltipType**(key: [Prosemirror.PluginKey](https://prosemirror.net/docs/ref/#state.PluginKey), type: string | null): [Command](/docs/api/core/#command)  
  Manually set the floating menu's current type. Set type to `null` to hide the floating menu tooltip.

- **queryIsMenuActive**(key: [Prosemirror.PluginKey](https://prosemirror.net/docs/ref/#state.PluginKey)): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Query if the menu is active.

### defaultKeys: [KeybindingsObject](/docs/api/core/#keybindingsobject)

- **hide** = `'Escape'`

- **toggleLink** = `'Meta-k'`

**Usage**

:book: See [FloatingMenu example](/docs/examples/react-floating-menu)

## FloatingMenu: [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)

### Props

- **menuKey**: ?[Prosemirror.PluginKey](https://prosemirror.net/docs/ref/#state.PluginKey)   
  The plugin key of the floatingMenu.

- **renderMenuType:** ?fn({ type, menuKey }) -> [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)  
  Return the type of floating menu to render based on the type. Defaults to using a function which returns some default components for the following types:

  - Some sensible default buttons for `'defaultMenu'`.

  - LinkSubMenu for `'linkSubMenu'`.

  - Hide the menu for `null`.

**Usage**

:book: See [FloatingMenu example](/docs/examples/react-floating-menu)

## Menu: [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)

A UI wrapper component for building a menu.

**Props:**

- **className**: ?string  
  Add classes to this component.

- **children:** React.Children

## MenuGroup: [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)

A UI wrapper for grouping menu buttons and showing a partition to separate from other Menu groups.

**Props:**

- **className**: ?string  
  Add classes to this component.

- **children:** React.Children

**Usage**
Building a menu:

```jsx
import {
  Menu,
  MenuGroup,
  BoldButton,
  HeadingButton,
  BulletListButton,
  ItalicButton,
} from '@bangle.dev/react-menu';

<Menu>
  <MenuGroup>
    <BoldButton />
    <ItalicButton />
  </MenuGroup>
  <MenuGroup>
    <HeadingButton level={1} />
    <HeadingButton level={2} />
    <BulletListButton />
  </MenuGroup>
</Menu>;
```

📖 See [FloatingMenu example](/docs/examples/react-floating-menu) for more details.

## LinkSubMenu: [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)

A React component for showing a link editor for the type `'linkSubMenu'`.

## MenuDropdown: [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)

A React component for rendering dropdowns.

**Props:**

- **parent:** fn({ isDropdownVisible, updateDropdown }) -> [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)  
  A render prop to show the button that allows toggling of the dropdown. Ideally you would wanna put in `MenuButton` in this.

- **children:** [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)  
  React children that are showed inside the dropdown. Ideally you would wanna put in `MenuButton`s in this.

📖 See [FloatingMenu example](/docs/examples/react-floating-menu) for a dropdown.

## MenuButton: [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)

A button for your menu.

**Props**:

- **className**: ?string  
  Add CSS classes to the `<button>` DOM node.

- **children**: ?[React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)  
  The content of the button. Ideally some string or an SVG icon.

- **isActive**: ?boolean  
  Whether the button is active.

- **isDisabled**: ?boolean  
  Whether the button is disabled.

- **hint**: ?string  
  A tooltip hint to show when hovering over this button.

- **hintPos**: ?`'top'`|`'bottom'`|`'right'`|`'left'`  
  The position of the hint tooltip.

- **onMouseDown**: ?fn(event)  
  The mouse down handler of the button. You are expected to `event.preventDefault()` to prevent the editor from losing the focus.

## MenuButtons

Bangle comes with following button:

### BoldButton: [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)

Marks text as `bold` mark.

**Props:**

- **hint**: ?string  
  A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to `null` to not show any hint.

- **hintPos**: ?`'top'`|`'bottom'`|`'right'`|`'left'`  
  The position of the hint tooltip.

- **children**: ?[React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)  
  The content to render inside the button, by default it will render an Icon for the button.

### ItalicButton: [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)

Marks text as `italic` mark.

**Props:**

- **hint**: ?string  
  A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to `null` to not show any hint.

- **hintPos**: ?`'top'`|`'bottom'`|`'right'`|`'left'`  
  The position of the hint tooltip.

- **children**: ?[React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)  
  The content to render inside the button, by default it will render an Icon for the button.

### UndoButton: [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)

Undoes the last edit.

**Props:**

- **hint**: ?string  
  A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to `null` to not show any hint.

- **hintPos**: ?`'top'`|`'bottom'`|`'right'`|`'left'`  
  The position of the hint tooltip.

- **children**: ?[React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)  
  The content to render inside the button, by default it will render an Icon for the button.

### RedoButton: [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)

Opposite of undo.

**Props:**

- **hint**: ?string  
  A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to `null` to not show any hint.

- **hintPos**: ?`'top'`|`'bottom'`|`'right'`|`'left'`  
  The position of the hint tooltip.

- **children**: ?[React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)  
  The content to render inside the button, by default it will render an Icon for the button.

### CodeButton: [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)

Marks text as `code` mark.

**Props:**

- **hint**: ?string  
  A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to `null` to not show any hint.

- **hintPos**: ?`'top'`|`'bottom'`|`'right'`|`'left'`  
  The position of the hint tooltip.

- **children**: ?[React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)  
  The content to render inside the button, by default it will render an Icon for the button.

### BlockquoteButton: [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)

Wrap's inside a Blockquote.

**Props:**

- **hint**: ?string  
  A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to `null` to not show any hint.

- **hintPos**: ?`'top'`|`'bottom'`|`'right'`|`'left'`  
  The position of the hint tooltip.

- **children**: ?[React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)  
  The content to render inside the button, by default it will render an Icon for the button.

### BulletListButton: [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)

Convert text to a `bulletList` node.

**Props:**

- **hint**: ?string  
  A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to `null` to not show any hint.

- **hintPos**: ?`'top'`|`'bottom'`|`'right'`|`'left'`  
  The position of the hint tooltip.

- **children**: ?[React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)  
  The content to render inside the button, by default it will render an Icon for the button.

### TodoListButton: [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)

Convert paragraph to a `todoList` node.

**Props:**

- **hint**: ?string  
  A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to `null` to not show any hint.

- **hintPos**: ?`'top'`|`'bottom'`|`'right'`|`'left'`  
  The position of the hint tooltip.

- **children**: ?[React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)  
  The content to render inside the button, by default it will render an Icon for the button.

### HeadingButton: [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)

Convert text to a `heading` node.

**Props:**

- **level:** number  
  The heading level.

- **hint**: ?string  
  A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to `null` to not show any hint.

- **hintPos**: ?`'top'`|`'bottom'`|`'right'`|`'left'`  
  The position of the hint tooltip.

- **children**: ?[React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)  
  The content to render inside the button, by default it will render an Icon for the button.

### FloatingLinkButton [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)

Upon mouse down changes floating menu type to `'linkSubMenu'`. **Note:** this is meant to be used only inside [FloatingMenu](#floatingmenu-component).

**Props:**

- **menuKey**: [Prosemirror.PluginKey](https://prosemirror.net/docs/ref/#state.PluginKey)  
  The menu key associated with your menu plugin.

- **hint**: ?string  
  A tooltip hint to show when hovering over this button. Defaults to the name of the node and the keyboard shortcut. Set it to `null` to not show any hint.

- **hintPos**: ?`'top'`|`'bottom'`|`'right'`|`'left'`  
  The position of the hint tooltip.

- **children**: ?[React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)  
  The content to render inside the button, by default it will render an Icon for the button.