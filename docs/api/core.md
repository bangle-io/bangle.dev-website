---
title: '@bangle.dev/core'
sidebar_label: '@bangle.dev/core'
packageName: '@bangle.dev/core'
id: 'core'
---

`@bangle.dev/core` as the name suggests is the core of Bangle and most packages expect it as a [peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies/). To install run:

```
npm install @bangle.dev/core
```

:bulb: _Use the right sidebar or the hamburger at bottom-right (mobile screens) to navigate quickly_.

## Component

The building block of Bangle is a component. At it's heart, we have a vanilla Javascript module which exports the follow properties:

- **?spec(opts: Object):** [Spec](#spec)  
  The specification which defines how the component will be rendered in the Editor. If the component has nothing to render it will not export this method.

- **?plugins(opts: Object):** [Plugins](#plugins)  
  This injects the superpowers :mage: to your component. Fantasy aside: you can pretty do anything to your node/mark with Plugins.

- **?commands:** [CommandObject](#commandobject)

- **?defaultKeys:** [KeybindingsObject](#keybindingsobject)

### Spec

An object with the following fields:

- **type**: `'node'` | `'mark'`  
  This is a Prosemirror concept which divides the spec in two groups `node` type or `mark` type. Please checkout [Your first editor guide](/docs/guides/first-editor) guide.

- **topNode**: ?boolean  
  Whether the node will be the top node for the document. By default the `doc` node is the top node for Bangle. There can only be one top `node` and is only applicable for `node` types.

- **name**: string  
  The name of the node or mark.

- **schema**: [Prosemirror.NodeSpec](https://prosemirror.net/docs/ref/#model.NodeSpec) | [Prosemirror.MarkSpec](https://prosemirror.net/docs/ref/#model.MarkSpec)

- **markdown**: ?{toMarkdown: fn(), parseMarkdown: object}\  

- **options**: ?object  
  Use this to save data in this spec. You can use this field to save some data options to make it available to anyone having access to specRegistry.

### Plugins

:brain: _Please note this is a **recursive** type - it contains reference to itself!_

> [Prosemirror.Plugin](https://prosemirror.net/docs/ref/#state.PluginSpec) | [Plugins](#plugins)\[\] | (fn({ schema, specRegistry, metadata }) -> [Plugins](#plugins)) | undefined

This is designed in a way to provide flexibility and extensibility when grouping multiple plugins under a [Component](/docs/api/core/#component). Please checkout this [example](/docs/examples/exporting-data#persisting-to-local-storage) on how to create a small plugin or read the source code of some of the core components.

### Plugin

> [Prosemirror.Plugin](https://prosemirror.net/docs/ref/#state.PluginSpec)

### KeybindingsObject

> { \[string\]: string | undefined }

An object which defines the keybindings that are active for a given component. The keys are the name given to an action and the value is valid [w3c-keyname](https://github.com/marijnh/w3c-keyname#readme). Setting a key to undefined will make it a `no-op`.

In the example below, it tells that an action named `moveUp` will be executed when a user presses `Alt` and `ArrowUp` key.

```
{
  'moveUp': 'Alt-ArrowUp'
}
```

:book: **Please checkout the [Keybindings Guide](/docs/guides/keybindings)**

### CommandObject

> { \[string\]: fn(opts: object) -> [Command](#command) }

A collection of commands exported by a component.

## Command

> fn(state: [Prosemirror.EditorState](https://prosemirror.net/docs/ref/#state.EditorState), ?dispatch: ?⁠fn(tr: [Prosemirror.Transaction](https://prosemirror.net/docs/ref/#state.Transaction)), ?view: [Prosemirror.EditorView](https://prosemirror.net/docs/ref/#view.EditorView)) -> boolean

A function that carries out a bunch of transformations in the editor. The return value indicates whether it was executed or not. For example, running a [toggleBold](#bold-component) command on a code block will return `false` to indicate command did not execute, however it will return `true` when run on a paragraph.

If a `dispatch` callback is **not** passed, the command will run in dry run mode -- it will pretend to do things but will actually make **no changes** to the editor.

:bulb: _Bangle's API will **always** export a higher order function which then returns a Command, which means it will not export a Command directly. It is designed this way to allow for configurability and to keep the command params predictable --_ `(config) => (state, dispatch, view) => boolean`.

Please read [commands guide](/docs/guides/commands) for more details.

## QueryCommand

> fn(state: [Prosemirror.EditorState](https://prosemirror.net/docs/ref/#state.EditorState)) -> T

This is a special type of command which makes no changes to the editor but queries the editor state and returns the value.

:bulb: _Bangle follows the convention of prefixing_ `query` _to **any** function that returns a QueryCommand._

```js
import { heading } from '@bangle.dev/core';

const isActive = heading.commands.queryIsHeadingActive(3)(state); // true or false
```

In the example above, [queryIsHeadingActive](#heading-component) queries the editor state's selection for a node with name `heading` having a level of `3`.

## BangleEditor

> new BangleEditor(element, options)

Initializes and mounts the editor in your application. Create an editor instance with following params:

- **element:** : [dom.Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)

- **options:** Object   
  Has the following named parameters

  - **state:** [BangleEditorState](/docs/api/core/#bangleeditorstate)  
    The editor state object.

  - **focusOnInit:** ?boolean=true  
    Focus the editor after initialization.

  - **pmViewOpts**: ?[Prosemirror.DirectEditorProps](https://prosemirror.net/docs/ref/#view.DirectEditorProps)   
    An object containing PM's editor props.

The class exposes the following fields/methods:

- **focusView()**: void  
  Focus the editor.

- **destroy():** void  
  Destroy the editor instance.

- **toHTMLString():** string  
  Returns the HTML representation of editors content.

- **view:** [Prosemirror.EditorView](https://prosemirror.net/docs/ref/#view.EditorView)

**Usage**

```js
import { BangleEditor, BangleEditorState } from '@bangle.dev/core';

// 'editor' is the id of the dom Node on which bangle will
// be mounted.
const editorNode = document.getElementById('editor');

const state = new BangleEditorState({
  initialValue: 'Hello world!',
});

const editor = new BangleEditor(editorNode, { state });

const view = editor.view;
// Programmatically type
view.dispatch(view.state.tr.insertText('Wow'));
```

:book: See [Bangle Markdown example](/docs/examples/markdown-editor)

## BangleEditorState

> new BangleEditorState(options)

Create an editor state instance with following params:

- **options:** Object

  - **specRegistry:** ?[SpecRegistry](/docs/api/core/#specregistry)  
    The SpecRegistry of your editor. Note: you can either set `specRegistry` or `specs` but _not_ both.

  - **specs:** ?[Spec](#spec)\[\]  
    A shorthand which initializes SpecRegistry for you behind the scenes. Use this if you don't care about creating and managing a SpecRegistry instance. Note: you can either set `specRegistry` or `specs` but _not_ both.

  - **plugins:** ?({ schema, specRegistry, metadata }) -> [Plugins](/docs/api/core/#plugins)\[\]  
    The list of plugins for your editor.

  - **pluginMetadata**: ?Object  
    An object that will be then passed to any plugin (see the `options.plugins` ) as a `metadata` named parameter. Use this to relay any information about the editor to a plugin.

  - **initialValue:** string | htmlString | undefined   
    The initial content of the editor.

  - **editorProps:** [Prosemirror.EditorProps](https://prosemirror.net/docs/ref/#view.EditorProps)

  - **pmStateOpts:** ?[Prosemirror.EditorStateCreateConfig](https://prosemirror.net/docs/ref/#state.EditorState%5Ecreate)

The class exposes the following fields/methods:

- **specRegistry:** [SpecRegistry](#specregistry)

- **pmState:** [Prosemirror.EditorState](https://prosemirror.net/docs/ref/#state.EditorState)

**Usage**

See usage of [BangleEditor](#bangleeditor).

## SpecRegistry

> new SpecRegistry(specs, options)

A wrapper class which sets up the [Prosemirror.Schema](https://prosemirror.net/docs/ref/#model.Schema). SpecRegistry combines and merges all the [spec](#spec)'s of your components.

Params:

- **specs:** ?[Spec](#spec)\[\]  
  An array containing the specs. Note: the order of specs matters.

- **options:** ?Object

  - **defaultSpecs:** ?boolean=true  
    Automatically include critical spec`doc`, `text` & `paragraph` if they are **not** already provided in the `specs` param.

The class exposes the following fields/methods:

- **schema:** [Prosemirror.Schema](https://prosemirror.net/docs/ref/#model.Schema)  
  The Prosemirror schema instance associated with the specRegistry. This comes in handy when dealing directly with Prosemirror libraries.

- **options:** Object<name, object>  
  A dictionary of the key value pair of `node` or`mark` name and the option field in their [spec](#spec).

**Usage**

In the example below, we are loading a bunch of specs & plugins.

```js
import {
  bulletList,
  listItem,
  orderedList,
  bold,
  link,
} from '@bangle.dev/core';

const specRegistry = new SpecRegistry([
  link.spec(),
  bold.spec(),
  bulletList.spec(),
  listItem.spec(),
  orderedList.spec(),
]);
const plugins = [
  link.plugins(),
  bold.plugins(),
  bulletList.plugins(),
  listItem.plugins(),
  orderedList.plugins(),
];
const editorNode = document.queryElement('#editor');
const state = new BangleEditorState({
  specRegistry,
  plugins,
  initialValue: 'Hello world!',
});
const editor = new BangleEditor(editorNode, { state });
```

## Components

The following is a list of components exported by this package.

### blockquote: [Component](/docs/api/core/#component)

Enables blockquote in your editor. 

#### spec(): [NodeSpec](/docs/api/core/#spec)

#### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **keybindings**: ?[KeybindingsObject](/docs/api/core/#keybindingsobject)&#x3D;defaultKeys  
 For a list of allowed keys see **defaultKeys** below.

- **markdownShortcut**: ?boolean=true  
  Toggle the markdown shortcut for creating a blockquote. If enabled, type `>` followed by a space to create one.

#### defaultKeys: [KeybindingsObject](/docs/api/core/#keybindingsobject)

- **wrapIn**=`Ctrl-ArrowRight`: wrap text in blockquote.

- **moveDown**=`Alt-ArrowDown`: move blockquote down

- **moveUp**=`Alt-ArrowUp`: move blockquote up

- **emptyCopy**=`Mod-c`: Execute a clipboard _copy_ on the node when the selection is empty.

- **emptyCut**=`Mod-x`: Execute a clipboard _cut_ on the node when the selection is empty.

- **insertEmptyParaAbove**=`Mod-Shift-Enter`: Inserts an empty [paragraph](#paragraph-component) above.

- **insertEmptyParaBelow**=`Mod-Enter`: Inserts an empty [paragraph](#paragraph-component) below.

#### commands: [CommandObject](/docs/api/core/#commandobject)

- **queryIsBlockquoteActive**(): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Query if the selection is inside a blockquote or not.

**Usage**

```js
import { blockquote } from '@bangle.dev/core';

const specFactory = [
  // other specs
  blockquote.spec(),
];

const plugins = [
  // other plugins
  blockquote.plugins(),
];
```

### bold: [Component](/docs/api/core/#component)

Allows text in your editor to be marked as bold. 

#### spec(): [MarkSpec](/docs/api/core/#spec)

#### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **keybindings**: ?[KeybindingsObject](/docs/api/core/#keybindingsobject)&#x3D;defaultKeys  
 For a list of allowed keys see **defaultKeys** below.

- **markdownShortcut**: ?boolean=true  
  Toggle the markdown shortcut for creating a bold mark. If enabled, type `**text**` to create the mark.

#### defaultKeys: [KeybindingsObject](/docs/api/core/#keybindingsobject)

- **toggleBold** = `Mod-b`: toggle bold mark

#### commands: [CommandObject](/docs/api/core/#commandobject)

- **toggleBold**(): [Command](/docs/api/core/#command)  
  Toggles bold mark.

- **queryIsBoldActive**(): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Query if the selection is inside a bold mark or not.

**Usage**

```js
import { components } from '@bangle.dev/core';

const { bold } = components;
const specFactory = [
  // other specs
  bold.spec(),
];

const plugins = [
  // other plugins
  bold.plugins(),
];
```

### bulletList: [Component](/docs/api/core/#component)

Enables bulletList `<ul/>`. **Requires node components with names** `orderedList` & `listItem` to work. 

This component implements todo lists by having an attribute `todoChecked` in any of its children `listItem`.

#### spec(): [NodeSpec](/docs/api/core/#spec)

#### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **keybindings**: ?[KeybindingsObject](/docs/api/core/#keybindingsobject)&#x3D;defaultKeys  
 For a list of allowed keys see **defaultKeys** below.

- **markdownShortcut**: ?boolean=`true`  
  Enable the markdown shortcut for creating a bullet list. If enabled, type `-`, `*` or `+` followed by a space to create a bullet list on an empty paragraph.

- **todoMarkdownShortcut**: ?boolean=`true`  
  Enable the markdown shortcut for creating a todo list. Type `[ ]` or `[]` followed by a space to create an unchecked todo.

#### defaultKeys: [KeybindingsObject](/docs/api/core/#keybindingsobject)

- **toggle**=`Shift-Ctrl-8`: Executes `toggleBulletList` command.

#### commands: [CommandObject](/docs/api/core/#commandobject)

- **toggleBulletList**(): [Command](/docs/api/core/#command)  
  Convert to a bulletList and if already a bulletList, convert it to a paragraph node.

- **toggleTodoList**(): [Command](/docs/api/core/#command)  
  Convert to a bulletList with todoChecked attribute but if already a bulletList, convert it to a paragraph node.

- **queryIsBulletListActive**(): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Query if the selection is inside a bullet list.

- **queryIsTodoListActive**(): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Query if the selection has a list item that has `todoChecked` attribute.

**Usage**

```js
import { components } from '@bangle.dev/core';

const { bulletList, listItem, orderedList } = components;
const specFactory = [
  // other specs
  listItem.spec(),
  bulletList.spec(),
  orderedList.spec(),
];

const plugins = [
  // other plugins
  listItem.plugins(),
  bulletList.plugins(),
  orderedList.plugins(),
];
```

### code: [Component](/docs/api/core/#component)

Allows text in your editor to be marked as code. 

#### spec(): [MarkSpec](/docs/api/core/#spec)

#### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **keybindings**: ?[KeybindingsObject](/docs/api/core/#keybindingsobject)&#x3D;defaultKeys  
 For a list of allowed keys see **defaultKeys** below.

- **escapeAtEdge:** ?Boolean=true  
  Allows automatic escaping of code mark at the edges. This particularly helps to escape code mark by pressing left or right arrow key at the edges.

- **markdownShortcut**: ?Boolean=true  
  Toggle the markdown shortcut for creating a code mark. If enabled, type `` `text` `` to create a code mark.

#### defaultKeys: [KeybindingsObject](/docs/api/core/#keybindingsobject)

- **toggleCode** = `` Mod-` ``: toggle code mark

#### commands: [CommandObject](/docs/api/core/#commandobject)

- **toggleCode**(): [Command](/docs/api/core/#command)  
  Toggles code mark.

- **queryIsCodeActive**(): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Query if the selection is inside a code mark or not.

**Usage**

```js
import { components } from '@bangle.dev/core';

const { code } = components;
const specFactory = [
  // other specs
  code.spec(),
];

const plugins = [
  // other plugins
  code.plugins(),
];
```

### codeBlock: [Component](/docs/api/core/#component)

Enables `<code/>` in your editor. 

#### spec(): [NodeSpec](/docs/api/core/#spec)

#### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **keybindings**: ?[KeybindingsObject](/docs/api/core/#keybindingsobject)&#x3D;defaultKeys  
 For a list of allowed keys see **defaultKeys** below.

- **markdownShortcut**: ?Boolean=true  
  Toggle the markdown shortcut for creating a codeBlock. If enabled, type ` ``` ` to create one.

#### defaultKeys: [KeybindingsObject](/docs/api/core/#keybindingsobject)

- **toCodeBlock**=`Shift-Ctrl-\`: wraps text in codeBlock.

- **moveDown**=`Alt-ArrowDown`: move codeBlock down

- **moveUp**=`Alt-ArrowUp`: move codeBlock up

- **insertEmptyParaAbove**=`Mod-Shift-Enter`: Inserts an empty [paragraph](#paragraph-component) above.

- **insertEmptyParaBelow**=`Mod-Enter`: Inserts an empty [paragraph](#paragraph-component) below.

#### commands: [CommandObject](/docs/api/core/#commandobject)

- **queryIsCodeActiveBlock**(): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Query if the selection is inside a codeBlock or not.

**Usage**

```js
import { components } from '@bangle.dev/core';

const { codeBlock } = components;
const specFactory = [
  // other specs
  codeBlock.spec(),
];

const plugins = [
  // other plugins
  codeBlock.plugins(),
];
```

### doc: [Component](/docs/api/core/#component)

**Top** level node needed by the editor to contain every other node. The spec & plugins for this component are **required** for Bangle to function, if a spec named `doc` is not defined, Bangle will automatically default to this one.

#### spec(): [NodeSpec](/docs/api/core/#spec)

Returns a node spec with [topNode](#spec) set to `true`, read more [Your first editor guide](/docs/guides/first-editor).

### heading: [Component](/docs/api/core/#component)

Enables headings of various levels in your editor .

#### spec({ ... }): [NodeSpec](/docs/api/core/#spec)

Named parameters:

- **levels**: ?number\[\]=\[1,2,3,4,5,6\]   
  The allowed levels for the heading, think `<h1/>`, `<h2/>` and so on. The array must be contiguous and the first element must be `1` and the last element must be less than or equal to `6`.

#### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **keybindings**: ?[KeybindingsObject](/docs/api/core/#keybindingsobject)&#x3D;defaultKeys  
 For a list of allowed keys see **defaultKeys** below.

- **markdownShortcut**: ?Boolean=true  
  Toggle the markdown shortcut for heading. If enabled, type `#` followed by a space to create one a level one heading.

#### defaultKeys: [KeybindingsObject](/docs/api/core/#keybindingsobject)

- **toH1**=`Shift-Ctrl-1`: Convert a node to heading of level 1. Is a no-op if the level `1` is disallowed.

- **toH2**=`Shift-Ctrl-2`: Convert a node to heading of level 2. Is a no-op if the level `2` is disallowed.

- **toH3**=`Shift-Ctrl-3`: Convert a node to heading of level 3. Is a no-op if the level `3` is disallowed.

- **toH4**=`Shift-Ctrl-4`: Convert a node to heading of level 4. Is a no-op if the level `4` is disallowed.

- **toH5**=`Shift-Ctrl-5`: Convert a node to heading of level 5. Is a no-op if the level `5` is disallowed.

- **toH6**=`Shift-Ctrl-6`: Convert a node to heading of level 6. Is a no-op if the level `6` is disallowed.

- **moveDown**=`Alt-ArrowDown`: move heading down

- **moveUp**=`Alt-ArrowUp`: move heading up

- **emptyCopy**=`Mod-c`: Execute a clipboard _copy_ on the node when the selection is empty.

- **emptyCut**=`Mod-x`: Execute a clipboard _cut_ on the node when the selection is empty.

- **insertEmptyParaAbove**=`Mod-Shift-Enter`: Inserts an empty [paragraph](#paragraph-component) above.

- **insertEmptyParaBelow**=`Mod-Enter`: Inserts an empty [paragraph](#paragraph-component) below.

- **toggleCollapse:** `-`: Toggle collapsing of heading.

#### commands: [CommandObject](/docs/api/core/#commandobject)

- **toggleHeading**(level: `number=3`): [Command](/docs/api/core/#command)  
  Toggles text into heading of a given `level` and vice versa.

- **queryIsHeadingActive**(level:`number=3`): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Query if the selection is inside a heading of given `level`.

- **queryIsCollapseActive**(): [Command](/docs/api/core/#command)  
  Query if the current heading is collapsed.

- **collapseHeading**(): [Command](/docs/api/core/#command)  
  Hides every node below that is not heading or has a heading `level` less than that of the current heading.

- **uncollapseHeading**(): [Command](/docs/api/core/#command)  
  Brings back all the hidden nodes of a collapsed heading. Will only uncollapse shallowly i.e a collapse heading inside of a collapsed heading will not be uncollapsed.

- **toggleHeadingCollapse**(): [Command](/docs/api/core/#command)  
  Collapses an uncollapsed heading and vice versa.

- **uncollapseAllHeadings**(): [Command](/docs/api/core/#command)  
  Uncollapses all headings in the `doc`. Will also deep uncollapse every heading that was inside of a collapsed heading.

- **insertEmptyParaAbove**(): [Command](/docs/api/core/#command)  
  Insert an empty paragraph above

- **insertEmptyParaBelow**(): [Command](/docs/api/core/#command)  
  Insert an empty paragraph below

**On Heading collapse**

The heading component also allows you to collapse and uncollapse any content, after the current heading, that is not of type heading or has a heading of level greater than the current heading.

:bulb: The collapsed data is saved in the node attribute `collapseContent`, it is also accessible inside the DOM data attribute by accessing `data-bangle-attrs`.

:bulb: A collapsed heading will have a class name of `bangle-heading-collapsed` to allow for styling.

:warning: For serializing to Markdown you will have to uncollapse your document, since markdown doesn't support collapsing. You should run the command`uncollapseAllHeadings` before serializing to markdown.

On top of the collapse commands, the component also exports the following helper functions to help with collapse functionality:

- **listCollapsibleHeading**(state: [Prosemirror.EditorState](https://prosemirror.net/docs/ref/#state.EditorState)): \[{node: [Prosemirror.Node](https://prosemirror.net/docs/ref/#model.Node), pos: number}\]   
  Lists all the headings that can be collapsed or uncollapsed.

- **listCollapsedHeading**(state: [Prosemirror.EditorState](https://prosemirror.net/docs/ref/#state.EditorState)): \[{node: [Prosemirror.Node](https://prosemirror.net/docs/ref/#model.Node), pos: number}\]  
  Lists all the headings that are currently collapsed.

- **flattenFragmentJSON**(fragmentJSON: Object): Object  
  Deep flattens any nested collapsed heading in the object. Bangle internally uses this to implement `uncollapseAllHeadings` command. Example `flattenFragmentJSON(node.attrs.collapseContent)`.

**Usage**

```js
import { components } from '@bangle.dev/core';

const { heading } = components;
const specFactory = [
  // other specs
  heading.spec({ levels: [1, 2] }),
];

const plugins = [
  // other plugins
  heading.plugins(),
];
```

### history: [Component](/docs/api/core/#component)

Enables history in your editor, this is a wrapper for the prosemirror's [history module](https://prosemirror.net/docs/ref/#history). **Unless you are overriding this component, it will be included by default.**

#### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **keybindings**: ?[KeybindingsObject](/docs/api/core/#keybindingsobject)&#x3D;defaultKeys  
 For a list of allowed keys see **defaultKeys** below.

- **historyOpts**: Object   
  see the Prosemirror history `config` [docs](https://prosemirror.net/docs/ref/#history.history%5Econfig) for the API.

#### defaultKeys: [KeybindingsObject](/docs/api/core/#keybindingsobject)

- **undo**=`Mod-x`

- **redo**=`Mod-y Shift-Mod-z`

#### commands: [CommandObject](/docs/api/core/#commandobject)

- **undo**(): [Command](/docs/api/core/#command)  
  Undoes the last step.

- **redo**(): [Command](/docs/api/core/#command)  
  Redoes the last step.

### hardBreak: [Component](/docs/api/core/#component)

Enables the `<br />` element in your editor.

#### spec(): [NodeSpec](/docs/api/core/#spec)

#### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **keybindings**: ?[KeybindingsObject](/docs/api/core/#keybindingsobject)&#x3D;defaultKeys  
 For a list of allowed keys see **defaultKeys** below.

#### defaultKeys: [KeybindingsObject](/docs/api/core/#keybindingsobject)

- **insert** = `Shift-Enter`: inserts a hard break

**Usage**

```js
import { components } from '@bangle.dev/core';

const { hardBreak } = components;
const specFactory = [
  // other specs
  hardBreak.spec(),
];

const plugins = [
  // other plugins
  hardBreak.plugins(),
];
```

### horizontalRule: [Component](/docs/api/core/#component)

Enables a horizontal (`<hr />`) rule component in your editor. 

#### spec(): [NodeSpec](/docs/api/core/#spec)

#### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **keybindings**: ?[KeybindingsObject](/docs/api/core/#keybindingsobject)&#x3D;defaultKeys  
 For a list of allowed keys see **defaultKeys** below.

- **markdownShortcut**: ?boolean=true  
  Toggle the markdown shortcut for creating a horizontalRule. Type `---` and `___` to insert a horizontal rule.

**Usage**

```js
import { components } from '@bangle.dev/core';

const { horizontalRule } = components;
const specFactory = [
  // other specs
  horizontalRule.spec(),
];

const plugins = [
  // other plugins
  horizontalRule.plugins(),
];
```

### image: [Component](/docs/api/core/#component)

Enables images in your editor.

#### spec(): [NodeSpec](/docs/api/core/#spec)

#### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **keybindings**: ?[KeybindingsObject](/docs/api/core/#keybindingsobject)&#x3D;defaultKeys  
 For a list of allowed keys see **defaultKeys** below.

- **handleDragAndDrop:** ?boolean=true   
  Toggle the functionality of dragging, dropping and pasting of images into the editor.

- **acceptFileType:** ?string=image/\*

- **createImageNodes**: ?(files: [File\[\]](https://developer.mozilla.org/en-US/docs/Web/API/File), imageType: [PMNodeType](https://prosemirror.net/docs/ref/#model.NodeType), view: [PMEditorView](https://prosemirror.net/docs/ref/#view.EditorView)) -> `Promise<ImageNode[]>`  
  A callback that is called whenever an image is pasted or drop. You are expected to return a promise of corresponding image nodes. If not provided it will run the default `defaultCreateImageNodes` (see [src](https://github.com/bangle-io/bangle.dev/blob/c7f59191c0f4ae57594c7c67fc5fef8913656dd3/core/components/image.js#L170) code) which inlines the image data. If you want to handle saving the image on a server you will want want to provide this param.

**Usage**

```js
import { components } from '@bangle.dev/core';

const { image } = components;
const specFactory = [
  // other specs
  image.spec(),
];

const plugins = [
  // other plugins
  image.plugins(),
];
```

### italic: [Component](/docs/api/core/#component)

Allows text in your editor to be marked as italic. 

#### spec(): [MarkSpec](/docs/api/core/#spec)

#### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **keybindings**: ?[KeybindingsObject](/docs/api/core/#keybindingsobject)&#x3D;defaultKeys  
 For a list of allowed keys see **defaultKeys** below.

- **markdownShortcut**: ?boolean=true  
  Toggle the markdown shortcut for creating am italic mark. If enabled, type `_text_` to enable italic mark.

#### defaultKeys: [KeybindingsObject](/docs/api/core/#keybindingsobject)

- **toggleItalic** = `Mod-i`: toggle an italic mark

#### commands: [CommandObject](/docs/api/core/#commandobject)

- **toggleItalic**(): [Command](/docs/api/core/#command)  
  Toggles italic mark.

- **queryIsItalicActive**(): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Query if the selection is inside an italic mark or not.

**Usage**

```js
import { components } from '@bangle.dev/core';

const { italic } = components;
const specFactory = [
  // other specs
  italic.spec(),
];

const plugins = [
  // other plugins
  italic.plugins(),
];
```

### link: [Component](/docs/api/core/#component)

Allows text in your editor to be marked as link.

#### spec({ ... }): [MarkSpec](/docs/api/core/#spec)

Named parameters:

- **openOnClick**: ?boolean=false  
  If enabled clicking a link will open the link in new tab. If disabled, clicking a link will set the cursor on it.

#### plugins(): [Plugins](/docs/api/core/#plugins)

#### commands: [CommandObject](/docs/api/core/#commandobject)

- **createLink**(href : string): [Command](/docs/api/core/#command)  
  Creates a link mark on the selection text.

- **updateLink**(href : ?string): [Command](/docs/api/core/#command)  
  Updates a link mark on the selection text with `href`. Set `href` to `undefined` to clear the link mark. If selection is empty, it will update the parent text node.

- **queryLinkAttrs**(): [QueryCommand](#querycommand)&lt;?{href: string, text: string}&gt;  
  Returns the details of the link mark in selection.

- **queryIsLinkAllowedInRange**(from: number, to: number): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Queries if the range allows for creation of link mark.

- **queryIsLinkActive**(): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Queries if the selection is in a link mark.

- **queryIsSelectionAroundLink**(): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Queries if the selection is around a link mark.

**Usage**

```js
import { components } from '@bangle.dev/core';

const { link } = components;
const specFactory = [
  // other specs
  link.spec(),
];

const plugins = [
  // other plugins
  link.plugins(),
];
```

### listItem: [Component](/docs/api/core/#component)

Creates a listItem `<li/>`. **Requires node components with names** `bulletList` and `orderedList` to work

#### spec({ ... }): [NodeSpec](/docs/api/core/#spec)

#### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **keybindings**: ?[KeybindingsObject](/docs/api/core/#keybindingsobject)&#x3D;defaultKeys  
 For a list of allowed keys see **defaultKeys** below.

#### defaultKeys: [KeybindingsObject](/docs/api/core/#keybindingsobject)

- **indent**=`Tab`: Indents the listItem

- **outdent**=`Shift-Tab`: Outdents the listItem

- **moveDown**=`Alt-ArrowDown`: move listItem down

- **moveUp**=`Alt-ArrowUp`: move listItem up

- **emptyCopy**=`Mod-c`: Execute a clipboard _copy_ on the node when the selection is empty.

- **emptyCut**=`Mod-x`: Execute a clipboard _cut_ on the node when the selection is empty.

- **insertEmptyListAbove**=`Mod-Shift-Enter`: Insert a new list above the current list and move cursor to it.

- **insertEmptyListBelow**=`Mod-Enter`: Insert a new list below the current list and move cursor to it.

#### commands: [CommandObject](/docs/api/core/#commandobject)

- **indentListItem**(): [Command](/docs/api/core/#command)  
  Indents list item one level. Can only indent 1 plus the parent's level.

- **outdentListItem**(): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Outdents list item one level. If level is root, outdents to a paragraph.

- **moveListItemUp**(): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Swap the list item with the one above. If the item above is not a list item, converts the item to paragraph and then moves it.

- **moveListItemDown**(): [QueryCommand](#querycommand)&lt;boolean&gt;  
  The opposite of `moveListItemUp`.

- **insertEmptySiblingListAbove**(): [Command](/docs/api/core/#command)  
  Insert an empty list, at the same nesting level, above the current list

- **insertEmptySiblingListBelow**(): [Command](/docs/api/core/#command)  
  Insert an empty list, at the same nesting level, below the current list.

**Usage**

```js
import { components } from '@bangle.dev/core';

const { orderedList, bulletList, listItem } = components;

const specFactory = [
  // other specs
  listItem.spec(),
  orderedList.spec(),
  bulletList.spec(),
];

const plugins = [
  // other plugins
  listItem.plugins(),
  orderedList.plugins(),
  bulletList.spec(),
];

// run commands
listItem.insertEmptySiblingListBelow()(state, dispatch);
```

### orderedList: [Component](/docs/api/core/#component)

Enables orderedList `<ol/>`. **Requires node components with names** `bulletList`, `listItem` to work. 

#### spec(): [NodeSpec](/docs/api/core/#spec)

#### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **keybindings**: ?[KeybindingsObject](/docs/api/core/#keybindingsobject)&#x3D;defaultKeys  
 For a list of allowed keys see **defaultKeys** below.

- **markdownShortcut**: ?boolean=true  
  Enable the markdown shortcut for creating an ordered list. Type `1.` followed by a space to create an ordered list.

#### defaultKeys: [KeybindingsObject](/docs/api/core/#keybindingsobject)

- **toggle**=`Shift-Ctrl-9`: Executes `toggleOrderedList` command.

#### commands: [CommandObject](/docs/api/core/#commandobject)

- **toggleOrderedList**(): [Command](/docs/api/core/#command)  
  Convert to an orderedList and if already an orderedList, convert it to a paragraph node.

- **queryIsSelectionInsideOrderedList**(): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Query if the selection is inside an ordered list.

**Usage**

```js
import { components } from '@bangle.dev/core';

const { orderedList, bulletList, listItem } = components;

const specFactory = [
  // other specs
  listItem.spec(),
  orderedList.spec(),
  bulletList.spec(),
];

const plugins = [
  // other plugins
  listItem.plugins(),
  orderedList.plugins(),
  bulletList.spec(),
];
```

### paragraph: [Component](/docs/api/core/#component)

Enables paragraph (`<p/>` in html) nodes in your editor. The spec for this component are **required** for Bangle to function, if a spec with a name=`paragraph` is not specified, Bangle will automatically default to this one.

#### spec(): [NodeSpec](/docs/api/core/#spec)

Returns a spec, read more [Your first editor guide](/docs/guides/first-editor).

#### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **keybindings**: ?[KeybindingsObject](/docs/api/core/#keybindingsobject)&#x3D;defaultKeys  
 For a list of allowed keys see **defaultKeys** below.

#### defaultKeys: [KeybindingsObject](/docs/api/core/#keybindingsobject)

- **jumpToStartOfParagraph**=`Ctrl-a (mac) Ctrl-Home (linux/pc)`: Executes the `jumpToStartOfParagraph` command (see commands below).

- **jumpToEndOfParagraph**=`Ctrl-a (mac) Ctrl-Home (linux/pc)`: Executes the `jumpToEndOfParagraph` command (see commands below).

- **moveDown**=`Alt-ArrowDown`: Move paragraph down.

- **moveUp**=`Alt-ArrowUp`: Move paragraph up.

- **emptyCopy**=`Mod-c`: Execute a clipboard _copy_ on the node when the selection is empty.

- **emptyCut**=`Mod-x`: Execute a clipboard _cut_ on the node when the selection is empty.

- **insertEmptyParaAbove**=`Mod-Shift-Enter`: Inserts an empty [paragraph](#paragraph-component) above.

- **insertEmptyParaBelow**=`Mod-Enter`: Inserts an empty [paragraph](#paragraph-component) below.

- **convertToParagraph**=`Ctrl-Shift-0`: Toggles a node to paragraph and vice versa.

#### commands: [CommandObject](/docs/api/core/#commandobject)

- **jumpToStartOfParagraph**(): [Command](/docs/api/core/#command)  
  Jumps the cursor to the start of paragraph.

- **jumpToEndOfParagraph**(): [Command](/docs/api/core/#command)  
  Jumps the cursor to the end of paragraph.

- **convertToParagraph**(): [Command](/docs/api/core/#command)  
  Coverts the node in selection to paragraph type.

- **queryIsParagraph**(): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Query if it is paragraph under the selection.

- **queryIsTopLevelParagraph**(): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Query if it is paragraph under the selection and it is a direct descendant of the top level node, which by default is [doc](#doc-component).

- **insertEmptyParagraphAbove():** [QueryCommand](#querycommand)&lt;boolean&gt;  
  Inserts an empty paragraph above the current node.

- **insertEmptyParagraphBelow():** [QueryCommand](#querycommand)&lt;boolean&gt;  
  Inserts an empty paragraph below the current node.

**Usage**

```js
import { components } from '@bangle.dev/core';

const specFactory = [
  // other specs
  component.blockquote.spec(),
];

const plugins = [
  // other plugins
  component.blockquote.plugins(),
];
```

### strike: [Component](/docs/api/core/#component)

Allows text in your editor to be marked as strike.

#### spec(): [MarkSpec](/docs/api/core/#spec)

#### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **keybindings**: ?[KeybindingsObject](/docs/api/core/#keybindingsobject)&#x3D;defaultKeys  
 For a list of allowed keys see **defaultKeys** below.

#### defaultKeys: [KeybindingsObject](/docs/api/core/#keybindingsobject)

- **toggleStrike** = `Mod-d`: toggle a strike mark

#### commands: [CommandObject](/docs/api/core/#commandobject)

- **toggleStrike**(): [Command](/docs/api/core/#command)  
  Toggles strike mark.

- **queryIsStrikeActive**(): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Query if the selection is inside a strike mark or not.

**Usage**

```js
import { components } from '@bangle.dev/core';

const specFactory = [
  // other specs
  component.strike.spec(),
];

const plugins = [
  // other plugins
  component.strike.plugins(),
];
```

### text: [Component](/docs/api/core/#component)

The text node which the editor uses to wrap the text. The spec for this component are **required** for Bangle to function, if a spec named `text` is not defined, Bangle will automatically default to this one.

### underline: [Component](/docs/api/core/#component)

Allows text in your editor to be marked with underlined style.

#### spec(): [MarkSpec](/docs/api/core/#spec)

#### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **keybindings**: ?[KeybindingsObject](/docs/api/core/#keybindingsobject)&#x3D;defaultKeys  
 For a list of allowed keys see **defaultKeys** below.

#### defaultKeys: [KeybindingsObject](/docs/api/core/#keybindingsobject)

- **toggleUnderline** = `Mod-u`: toggle an underline mark

#### commands: [CommandObject](/docs/api/core/#commandobject)

- **toggleUnderline**(): [Command](/docs/api/core/#command)  
  Toggles underline mark.

- **queryIsUnderlineActive**(): [QueryCommand](#querycommand)&lt;boolean&gt;  
  Query if the selection is inside an underline mark or not.

**Usage**

```js
import { components } from '@bangle.dev/core';

const specFactory = [
  // other specs
  component.underline.spec(),
];

const plugins = [
  // other plugins
  component.underline.plugins(),
];
```
