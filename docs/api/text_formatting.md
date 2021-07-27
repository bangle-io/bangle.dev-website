---
title: '@bangle.dev/text-formatting'
sidebar_label: '@bangle.dev/text-formatting'
packageName: '@bangle.dev/text-formatting'
id: 'text_formatting'
---

`contrib`

Provides more text formatting components on top of the ones provides by `@bangle.dev/core`.

```
# peer deps
npm install @bangle.dev/core @bangle.dev/pm
npm install @bangle.dev/text-formatting
```

### subscript: [Component](/docs/api/core/#component)

Allows text to marked as [subscript](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub). **Note**: Expects a spec named `superscript` to exist, you should either use it with provided `superscript` component or create one of yours.

#### spec(): [MarkSpec](/docs/api/core/#spec)

#### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **keybindings**: ?[KeybindingsObject](/docs/api/core/#keybindingsobject)&#x3D;defaultKeys  
 For a list of allowed keys see **defaultKeys** below.

#### defaultKeys: [KeybindingsObject](/docs/api/core/#keybindingsobject)

- **toggleSubscript** = `null`: toggle subscript, disabled by default.

#### commands: [CommandObject](/docs/api/core/#commandobject)

- **toggleSubscript**(): [Command](/docs/api/core/#command)  
  Toggles subscript mark.

- **queryIsSubscriptActive**(): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Query if the selection is inside a subscript mark or not.

**Usage**

See [example](/docs/examples/text-formatting#superscript--subscript).

### superscript: [Component](/docs/api/core/#component)

Allows text to marked as [superscript](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/super). **Note**: Expects a spec named `subscript` to exist, you should either use it with provided `subscript` component or create one of yours.

#### spec(): [MarkSpec](/docs/api/core/#spec)

#### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **keybindings**: ?[KeybindingsObject](/docs/api/core/#keybindingsobject)&#x3D;defaultKeys  
 For a list of allowed keys see **defaultKeys** below.

#### defaultKeys: [KeybindingsObject](/docs/api/core/#keybindingsobject)

- **toggleSuperscript** = `null`: toggle superscript, disabled by default.

#### commands: [CommandObject](/docs/api/core/#commandobject)

- **toggleSuperscript**(): [Command](/docs/api/core/#command)  
  Toggles superscript mark.

- **queryIsSuperscriptActive**(): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Query if the selection is inside a superscript mark or not.

**Usage**

See [example](/docs/examples/text-formatting#superscript--subscript).
