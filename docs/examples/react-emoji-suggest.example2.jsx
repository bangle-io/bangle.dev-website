import { PluginKey } from '@bangle.dev/core';
import '@bangle.dev/core/style.css';
import { emoji } from '@bangle.dev/emoji';
import '@bangle.dev/emoji/style.css';
import { BangleEditor, useEditorState } from '@bangle.dev/react';
import { emojiSuggest, EmojiSuggest } from '@bangle.dev/react-emoji-suggest';
import '@bangle.dev/react-emoji-suggest/style.css';
import '@bangle.dev/tooltip/style.css';
import gemojiData from 'emoji-lookup-data/data/gemoji.json';
import React from 'react';
import {
  heading,
  listItem,
  bulletList,
  orderedList,
  code,
} from '@bangle.dev/base-components';
const emojiSuggestKey = new PluginKey('emojiSuggestKey');

const emojiData = Object.values(
  gemojiData.reduce((prev, obj) => {
    if (!prev[obj.category]) {
      prev[obj.category] = { name: obj.category, emojis: [] };
    }
    prev[obj.category].emojis.push([obj.aliases[0], obj.emoji]);

    return prev;
  }, {}),
);

const getEmojiByAlias = (emojiAlias) => {
  for (const { emojis } of emojiData) {
    const match = emojis.find((e) => e[0] === emojiAlias);
    if (match) {
      return match;
    }
  }
};

export default function Example() {
  const editorState = useEditorState({
    specs: [
      heading.spec(),
      listItem.spec(),
      bulletList.spec(),
      orderedList.spec(),
      code.spec(),
      emoji.spec({
        getEmoji: (emojiAlias) =>
          getEmojiByAlias(emojiAlias) || ['question', '❓'],
      }),
      emojiSuggest.spec({ markName: 'emojiSuggest' }),
    ],
    plugins: () => [
      heading.plugins(),
      listItem.plugins(),
      bulletList.plugins(),
      orderedList.plugins(),
      code.plugins(),
      emoji.plugins(),
      emojiSuggest.plugins({
        key: emojiSuggestKey,
        getEmojiGroups: (queryText) => {
          if (!queryText) {
            return emojiData;
          }
          return emojiData
            .map((group) => {
              return {
                name: group.name,
                emojis: group.emojis.filter(([emojiAlias]) =>
                  emojiAlias.includes(queryText),
                ),
              };
            })
            .filter((group) => group.emojis.length > 0);
        },
        markName: 'emojiSuggest',
        tooltipRenderOpts: {
          placement: 'bottom',
        },
      }),
    ],
    initialValue: getInitialValue(),
  });

  return (
    <BangleEditor state={editorState}>
      <EmojiSuggest emojiSuggestKey={emojiSuggestKey} />
    </BangleEditor>
  );
}

function getInitialValue() {
  return JSON.parse(
    `{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Please type "},{"type":"text","marks":[{"type":"code"}],"text":":"},{"type":"text","text":" to trigger the emoji picker."}]},{"type":"paragraph","content":[{"type":"text","text":"Or click after this colon -> "},{"type":"text","marks":[{"type":"emojiSuggest","attrs":{"trigger":":"}}],"text":":"}]}]}`,
  );
}
