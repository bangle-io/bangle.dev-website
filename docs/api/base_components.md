---
title: '@bangle.dev/base-components'
sidebar_label: '@bangle.dev/base-components'
packageName: '@bangle.dev/base-components'
id: 'base_components'
---

`@bangle.dev/base-components` as the name suggests is the core of Bangle and most packages expect it as a [peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies/). To install run:

```
# peer deps
npm install @bangle.dev/core @bangle.dev/pm
npm install @bangle.dev/base-components
```

## Base Components

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
import { blockquote } from '@bangle.dev/base-components';

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
import { bold } from '@bangle.dev/base-components';

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
import { bulletList, listItem, orderedList } from '@bangle.dev/core-components';

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
import { code } from '@bangle.dev/base-components';

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
  Toggle the markdown shortcut for creating a codeBlock. If enabled, type ```` ``` ```` to create one.

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
import { codeBlock } from '@bangle.dev/base-components';

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
import { heading } from '@bangle.dev/base-components';

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
import { hardBreak } from '@bangle.dev/base-components';
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
import { horizontalRule } from '@bangle.dev/base-components';

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
import { image } from '@bangle.dev/base-components';

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
import { italic } from '@bangle.dev/base-components';

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
import { link } from '@bangle.dev/base-components';

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
import { orderedList, bulletList, listItem  } from '@bangle.dev/base-components';

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
import { orderedList, bulletList, listItem } from '@bangle.dev/base-components';

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
import { blockquote } from '@bangle.dev/base-components';

const specFactory = [
  // other specs
  blockquote.spec(),
];

const plugins = [
  // other plugins
  blockquote.plugins(),
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
import { strike } from '@bangle.dev/base-components';

const specFactory = [
  // other specs
  strike.spec(),
];

const plugins = [
  // other plugins
  strike.plugins(),
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
import { underline } from '@bangle.dev/base-components';

const specFactory = [
  // other specs
  underline.spec(),
];

const plugins = [
  // other plugins
  underline.plugins(),
];
```