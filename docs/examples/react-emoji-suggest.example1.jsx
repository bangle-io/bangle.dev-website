import {
  code,
  heading,
  listItem,
  bulletList,
  orderedList,
} from '@bangle.dev/base-components';
import { PluginKey } from '@bangle.dev/core';
import '@bangle.dev/core/style.css';
import { emoji } from '@bangle.dev/emoji';
import '@bangle.dev/emoji/style.css';
import { BangleEditor, useEditorState } from '@bangle.dev/react';
import { emojiSuggest, EmojiSuggest } from '@bangle.dev/react-emoji-suggest';
import '@bangle.dev/react-emoji-suggest/style.css';
import '@bangle.dev/tooltip/style.css';
import React from 'react';

const emojiSuggestKey = new PluginKey('emojiSuggestKey');

const emojiData = [
  {
    name: 'Smileys & Emotion',
    emojis: [
      ['hand_over_mouth', 'đ¤­'],
      ['relieved', 'đ'],
      ['pensive', 'đ'],
      ['vomiting_face', 'đ¤Ž'],
      ['disappointed_relieved', 'đĨ'],
      ['persevere', 'đŖ'],
    ],
  },
  {
    name: 'People & Body',
    emojis: [
      ['wave', 'đ'],
      ['female_detective', 'đĩī¸ââī¸'],
      ['person_with_veil', 'đ°'],
      ['man_with_veil', 'đ°ââī¸'],
      ['woman_with_veil', 'đ°ââī¸'],
      ['bride_with_veil', 'đ°ââī¸'],
      ['supervillain', 'đĻš'],
    ],
  },
  {
    name: 'Animals & Nature',
    emojis: [
      ['service_dog', 'đâđĻē'],
      ['beaver', 'đĻĢ'],
      ['evergreen_tree', 'đ˛'],
      ['four_leaf_clover', 'đ'],
    ],
  },
];

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
      code.spec(),
      heading.spec(),
      listItem.spec(),
      bulletList.spec(),
      orderedList.spec(),
      emoji.spec({
        getEmoji: (emojiAlias) =>
          getEmojiByAlias(emojiAlias) || ['question', 'â'],
      }),
      emojiSuggest.spec({ markName: 'emojiSuggest' }),
    ],
    plugins: () => [
      code.plugins(),
      heading.plugins(),
      listItem.plugins(),
      bulletList.plugins(),
      orderedList.plugins(),
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
