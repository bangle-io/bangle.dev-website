import {
  bulletList,
  heading,
  listItem,
  orderedList,
  paragraph,
} from '@bangle.dev/base-components';
import { PluginKey } from '@bangle.dev/core';
import '@bangle.dev/core/style.css';
import {
  BangleEditor,
  useEditorState,
  useEditorViewContext,
} from '@bangle.dev/react';
import {
  BulletListButton,
  ChevronDown,
  ChevronUp,
  floatingMenu,
  FloatingMenu,
  HeadingButton,
  Menu,
  MenuButton,
  MenuDropdown,
  OrderedListButton,
  ParagraphButton,
  TodoListButton,
} from '@bangle.dev/react-menu';
import '@bangle.dev/react-menu/style.css';
import '@bangle.dev/tooltip/style.css';
import React, { useCallback } from 'react';

const menuKey = new PluginKey('menuKey');

export default function Example() {
  const editorState = useEditorState({
    specs: [
      orderedList.spec(),
      bulletList.spec(),
      listItem.spec(),
      paragraph.spec(),
      heading.spec(),
    ],
    plugins: () => [
      orderedList.plugins(),
      bulletList.plugins(),
      listItem.plugins(),
      paragraph.plugins(),
      heading.plugins(),
      floatingMenu.plugins({
        key: menuKey,
        tooltipRenderOpts: {
          placement: 'bottom',
        },
        calculateType: (state) =>
          !state.selection.empty ? 'defaultMenu' : null,
      }),
    ],
    initialValue: `<div>
      <p>Select me to change my type</p>
    </div>`,
  });

  return (
    <BangleEditor state={editorState}>
      <FloatingMenu
        menuKey={menuKey}
        renderMenuType={({ type }) => {
          if (type === 'defaultMenu') {
            return (
              <Menu>
                <MenuDropdown
                  parent={({ isDropdownVisible, updateDropdown }) => (
                    <NodeTypeButton
                      isDropdownVisible={isDropdownVisible}
                      updateDropdown={updateDropdown}
                    />
                  )}
                >
                  <ParagraphButton hintPos="right">Paragraph</ParagraphButton>
                  <HeadingButton hintPos="right" level={1}>
                    Heading 1
                  </HeadingButton>
                  <BulletListButton hintPos="right">
                    Bullet List
                  </BulletListButton>
                  <OrderedListButton hintPos="right">
                    Ordered List
                  </OrderedListButton>
                  <TodoListButton hintPos="right">Todo List</TodoListButton>
                </MenuDropdown>
              </Menu>
            );
          }
          return null;
        }}
      />
    </BangleEditor>
  );
}

function NodeTypeButton({ isDropdownVisible, updateDropdown }) {
  const view = useEditorViewContext();
  // using onMouseDown instead of onClick
  // helps preserve the editors selection.
  const onMouseDown = useCallback(
    (e) => {
      e.preventDefault();
      updateDropdown((show) => !show);
    },
    [updateDropdown],
  );
  let name = 'paragraph';
  if (orderedList.queryIsOrderedListActive()(view.state)) {
    name = 'Ordered List';
  } else if (bulletList.queryIsBulletListActive()(view.state)) {
    name = 'Bullet List';
  } else if (bulletList.queryIsTodoListActive()(view.state)) {
    name = 'Todo List';
  } else if (heading.queryIsHeadingActive(1)(view.state)) {
    name = 'Heading 1';
  }
  return (
    <MenuButton onMouseDown={onMouseDown} isDisabled={false}>
      <span>{name}</span>
      {isDropdownVisible ? <ChevronUp /> : <ChevronDown />}
    </MenuButton>
  );
}
