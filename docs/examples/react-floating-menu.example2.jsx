import '@bangle.dev/core/style.css';
import '@bangle.dev/tooltip/style.css';
import '@bangle.dev/react-menu/style.css';
import React from 'react';
import { BangleEditor, useEditorState } from '@bangle.dev/react';
import { PluginKey } from '@bangle.dev/core';

import {
  floatingMenu,
  FloatingMenu,
  Menu,
  MenuGroup,
  HeadingButton,
  ParagraphButton,
} from '@bangle.dev/react-menu';
import { heading, paragraph } from '@bangle.dev/base-components';
const menuKey = new PluginKey('menuKey');

export default function Example() {
  const editorState = useEditorState({
    specs: [paragraph.spec(), heading.spec()],
    plugins: () => [
      paragraph.plugins(),
      heading.plugins(),
      floatingMenu.plugins({
        key: menuKey,
        calculateType: (state, prevType) => {
          // Use the 'headingSubMenu' type whenever
          // the selection is inside a heading.
          if (heading.commands.queryIsHeadingActive()(state)) {
            return 'headingSubMenu';
          }

          // A user has selected a range of text, lets show them
          // the default menu.
          if (!state.selection.empty) {
            return 'defaultMenu';
          }

          // Set the type to null to indicate that a menu is not needed.
          return null;
        },
      }),
    ],
    initialValue: `<div>
      <p>Hello I am a paragraph, please upgrade me to a heading.</p>
      <h3>I am a heading try selecting me</h3>
    </div>`,
  });

  return (
    <BangleEditor state={editorState}>
      <FloatingMenu
        menuKey={menuKey}
        renderMenuType={({ type }) => {
          // Use the type we earlier calculated to show
          // our custom menu
          if (type === 'headingSubMenu') {
            return (
              <Menu>
                <ParagraphButton />
              </Menu>
            );
          }

          if (type === 'defaultMenu') {
            return (
              <Menu>
                <MenuGroup>
                  <HeadingButton level={1} />
                  <HeadingButton level={2} />
                </MenuGroup>
              </Menu>
            );
          }

          return null;
        }}
      />
    </BangleEditor>
  );
}
