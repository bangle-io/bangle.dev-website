---
title: '@bangle.dev/react'
sidebar_label: '@bangle.dev/react'
packageName: '@bangle.dev/react'
id: 'react'
---

This package provides you with a React API for integrating Bangle in your React app.

### Installation

```sh
# peer deps
npm install @bangle.dev/core
npm install @bangle.dev/react
```

### Usage

```jsx
import '@bangle.dev/core/style.css';

import { useEditorState, BangleEditor } from '@bangle.dev/react';

export default function Editor() {
  const editorState = useEditorState({
    initialValue: 'Hello world!',
  });
  return <BangleEditor state={editorState} />;
}
```

:bulb: **Do not forget to load the stylesheet located at '@bangle.dev/core/style.css'.**

## BangleEditor: [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)

A React component for rendering a Bangle instance.

### Props

- **id**: ?string  
  The [id](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the DOM node bangle mounts on. Please make sure this is unique if you are having multiple editors.

- **className**: ?string  
  The CSS class names for the container div of the editor. (The editor div has the class `.bangle-editor` ).
- **style** ?Object  
  The style object for the container div of the editor.

- **renderNodeViews**: ?fn({ children, node, view, getPos, decorations, selected, attrs, updateAttrs}) -> [React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)   
  Allows customization of how a Node is rendered in the DOM. This will be called with a `node` and you are expected to return a matching React component for the `node.type`. You are also expected to correctly nest the `children` props. Note: `children` prop is not available for [atom](https://prosemirror.net/docs/ref/#model.NodeSpec.atom) nodes. See [React custom rendering guide](/docs/guides/custom-rendering-speech)

- **focusOnInit**: ?boolean=true   
  Brings editor to focus when it loads.

- **onReady**: ?fn(editor)   
  A callback which is called when the editor has mounted.

- **children**: ?[React.Element](https://reactjs.org/docs/react-api.html#reactcomponent)   
  React components which need the editor context but are not directly editable i.e. do not lie inside the [contentEditable](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content) of the editor. A good example of what can be `children` is [FloatingMenu](/docs/api/react_menu#floatingmenu-reactelement).

- **state**: [BangleEditorState](/docs/api/core/#bangleeditorstate)   
  Pass in the output of [useEditorState](#useeditorstate-reacthook) hook.

- **pmViewOpts**: ?[Prosemirror.DirectEditorProps](https://prosemirror.net/docs/ref/#view.DirectEditorProps)

## useEditorState: ReactHook

> fn([BangleEditorState](/docs/api/core/#bangleeditorstate)) -> [BangleEditorState](/docs/api/core/#bangleeditorstate)

A hook for initialing the editor state.

:bulb: This hook will never trigger a re-render, if you want to react to a change in your editor consider using [usePluginState](#usepluginstate-reacthook). Read [React Basic example](/docs/examples/react-basic-editor).

:book: **Checkout [React example](/docs/examples/react-basic-editor)**

## usePluginState: ReactHook

> fn(pluginKey`<T>`): T

A hook for hooking to a Prosemirror plugin's state. This hook works **only** with children of `<BangleEditor />`. This **will re-render** the React component every-time the plugin's state changes.

## useEditorViewContext: ReactHook

> fn(): [Prosemirror.EditorView](https://prosemirror.net/docs/ref/#view.EditorView)

A hook for providing the [Prosemirror.EditorView](https://prosemirror.net/docs/ref/#view.EditorView) to a React component. This context is **only** available to children of `<BangleEditor />`. It will **never** trigger a re-render as the hook maintains the same [Prosemirror.EditorView](https://prosemirror.net/docs/ref/#view.EditorView) instance throughout the editor's lifecycle.

:book: **Checkout [Floating menu dropdown](/docs/examples/react-floating-menu#menu-dropdown) example.**
