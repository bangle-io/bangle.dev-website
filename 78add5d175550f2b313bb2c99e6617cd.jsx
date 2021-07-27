import { BangleEditor, BangleEditorState } from '@bangle.dev/core';
import '@bangle.dev/core/style.css';
import { subscript } from '@bangle.dev/text-formatting';
import { setTextSelection } from '@bangle.dev/utils';

export default function Editor(domNode) {
  const state = new BangleEditorState({
    specs: [subscript.spec()],
    plugins: () => [
      subscript.plugins({
        keybindings: { toggleSuperscript: 'Ctrl-s' },
      }),
    ],
    initialValue: `<p>Hello there, let us see some <sup>subscript</sup>!</p>`,
  });

  const editor = new BangleEditor(domNode, { state });
  const { view } = editor;
  // set selection at end to demo the example
  setSelectionAtEnd(view.state.doc)(view.state, view.dispatch);
  return editor;
}

const setSelectionAtEnd = (node) => {
  return (state, dispatch, _view) => {
    let pos = node.nodeSize - 1;
    if (node.type.name === 'doc') {
      pos = node.content.size - 1;
    }
    const tr = setTextSelection(pos)(state.tr);
    if (dispatch) {
      dispatch(tr);
    }
    return true;
  };
};
