import {
  BangleEditor,
  BangleEditorState,
  Plugin,
  SpecRegistry,
} from '@bangle.dev/core';
import '@bangle.dev/core/style.css';
import { defaultPlugins, defaultSpecs } from '@bangle.dev/all-base-components';

function getItemFromStorage() {
  try {
    return JSON.parse(localStorage.getItem('exporting-data.example2'));
  } catch (err) {
    return null;
  }
}

export default function Editor(domNode) {
  const state = new BangleEditorState({
    specRegistry: new SpecRegistry(defaultSpecs()),
    plugins: () => [
      ...defaultPlugins(),
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
