import '@bangle.dev/core/style.css';
import { BangleEditor, BangleEditorState } from '@bangle.dev/core';
import { subscript, superscript } from '@bangle.dev/text-formatting';
import { setTextSelection } from '@bangle.dev/utils';

export default function Editor(domNode) {
  const state = new BangleEditorState({
    specs: [superscript.spec(), subscript.spec()],
    plugins: () => [
      superscript.plugins({
        keybindings: { toggleSuperscript: 'Ctrl-s' },
      }),
      subscript.plugins({
        keybindings: { toggleSubscript: 'Ctrl-d' },
      }),
    ],
    initialValue: `<p>Hello there, let us see some <sup>superscript</sup> & <sub>subscript</sub>!</p>`,
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
