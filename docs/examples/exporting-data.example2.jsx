import { BangleEditor, BangleEditorState, Plugin } from '@bangle.dev/core';
import '@bangle.dev/core/style.css';
import {
  bold,
  italic,
  link,
  bulletList,
  heading,
  listItem,
  orderedList,
  paragraph,
} from '@bangle.dev/base-components';
function getItemFromStorage() {
  try {
    return JSON.parse(localStorage.getItem('exporting-data.example2'));
  } catch (err) {
    return null;
  }
}

export default function Editor(domNode) {
  const state = new BangleEditorState({
    specs: [
      bold.spec(),
      italic.spec(),
      link.spec(),
      orderedList.spec(),
      bulletList.spec(),
      listItem.spec(),
      paragraph.spec(),
      heading.spec(),
    ],
    plugins: () => [
      bold.plugins(),
      italic.plugins(),
      link.plugins(),
      orderedList.plugins(),
      bulletList.plugins(),
      listItem.plugins(),
      paragraph.plugins(),
      heading.plugins(),
      new Plugin({
        view: () => ({
          update: (view, prevState) => {
            if (!view.state.doc.eq(prevState.doc)) {
              localStorage.setItem(
                'exporting-data.example2',
                JSON.stringify(view.state.doc.toJSON()),
              );
            }
          },
        }),
      }),
    ],
    initialValue:
      getItemFromStorage() ||
      'Hey there whatever you type here will be persisted in localStorage!',
  });

  const editor = new BangleEditor(domNode, { state });

  return editor;
}
