---
title: '@bangle.dev/search'
sidebar_label: '@bangle.dev/search'
packageName: '@bangle.dev/search'
id: 'search'
---

`contrib`

This package allows your to highlight search text in your editor.

### Installation

```
# peer deps
npm install @bangle.dev/core @bangle.dev/pm
npm install @bangle.dev/search
```

## Styling

Please use the stylesheet `style.css` like:

```js
import '@bangle.dev/search/style.css';
```

## search: [Component](/docs/api/core/#component)

#### spec({ ... }): [Component](/docs/api/core/#component)

### plugins({ ... }): [Plugins](/docs/api/core/#plugins)

Named parameters:

- **key:** ?[Prosemirror.PluginKey](https://prosemirror.net/docs/ref/#state.PluginKey)

- **query**: Regex | string | undefined  
  The search query to determine which text needs highlight.

- **className**: ?string="bangle-search-match"  
  The class name of the search highlight element.

- **maxHighlights:** ?number=1500  
  The maximum number of search highlights.

### commands: [CommandObject](/docs/api/core/#commandobject)

- **updateSearchQuery**(key: [Prosemirror.PluginKey](https://prosemirror.net/docs/ref/#state.PluginKey), query: Regex | string | undefined): [Command](/docs/api/core/#command)  
  Updates the search query. Set the query to `undefined` to clear all highlights.

**Usage**

```js
const searchPluginKey = new PluginKey('search');

const plugins = [
  // other plugins
  search.plugins({ query: /hello/, key: searchPluginKey })
];

// command
updateSearchQuery(searchPluginKey, query: undefined)
```
