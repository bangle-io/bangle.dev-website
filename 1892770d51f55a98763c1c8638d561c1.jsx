import '@bangle.dev/core/style.css';
import '@bangle.dev/tooltip/style.css';
import '@bangle.dev/react-menu/style.css';
import React, { useState } from 'react';
import { BangleEditor, useEditorState } from '@bangle.dev/react';
import { PluginKey } from '@bangle.dev/core';
import {
  bold,
  italic,
  link,
  bulletList,
  heading,
  listItem,
  orderedList,
  blockquote,
  paragraph,
} from '@bangle.dev/base-components';
import {
  floatingMenu,
  StaticMenu,
  Menu,
  HeadingButton,
  ParagraphButton,
  BlockquoteButton,
  BulletListButton,
  OrderedListButton,
  TodoListButton,
  BoldButton,
  ItalicButton,
  MenuGroup,
  UndoButton,
  RedoButton,
} from '@bangle.dev/react-menu';

const menuKey = new PluginKey('menuKey');

export default function Example() {
  const [editor, setEditor] = useState();
  const editorState = useEditorState({
    specs: [
      bold.spec(),
      italic.spec(),
      link.spec(),
      blockquote.spec(),
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
      blockquote.plugins(),
      orderedList.plugins(),
      bulletList.plugins(),
      listItem.plugins(),
      paragraph.plugins(),
      heading.plugins(),
      floatingMenu.plugins({
        key: menuKey,
      }),
    ],
    initialValue: `<div>Hi there, try selecting me to see a floating menu.
    <br/>
    <span>Also, checkout this awesome <a href="https://blog.ycombinator.com/the-airbnbs/">article!</a></span>
    </div>`,
  });

  return (
    <>
      <StaticMenu
        editor={editor}
        // We have a render prop to allow for updating
        // menu whenever editors state changes
        renderMenu={() => (
          <Menu
            style={{
              backgroundColor: 'transparent',
              color:
                document.documentElement.getAttribute('data-theme') === 'dark'
                  ? 'white'
                  : 'black',
            }}
          >
            <MenuGroup>
              <UndoButton />
              <RedoButton />
            </MenuGroup>
            <MenuGroup>
              <BoldButton />
              <ItalicButton />
            </MenuGroup>
            <MenuGroup>
              <ParagraphButton />
              <BlockquoteButton />
              <HeadingButton level={2} />
              <HeadingButton level={3} />
            </MenuGroup>
            <BulletListButton />
            <OrderedListButton />
            <TodoListButton />
          </Menu>
        )}
      />
      <BangleEditor state={editorState} onReady={setEditor} />
    </>
  );
}
