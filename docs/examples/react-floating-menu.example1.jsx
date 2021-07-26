import { PluginKey } from '@bangle.dev/core';
import '@bangle.dev/core/style.css';
import { BangleEditor, useEditorState } from '@bangle.dev/react';
import { floatingMenu, FloatingMenu } from '@bangle.dev/react-menu';
import '@bangle.dev/react-menu/style.css';
import '@bangle.dev/tooltip/style.css';
import React from 'react';
import { defaultPlugins, defaultSpecs } from '@bangle.dev/all-base-components';

const menuKey = new PluginKey('menuKey');

export default function Example() {
  const editorState = useEditorState({
    specs: defaultSpecs(),
    plugins: () => [
      ...defaultPlugins(),
      floatingMenu.plugins({
        key: menuKey,
      }),
    ],
    initialValue: `<div>
    <p>Hi there, try selecting me to see a floating menu</p>
    <p>Also, checkout this awesome <a href="https://blog.ycombinator.com/the-airbnbs/">article!</a></p>
    </div>`,
  });

  return (
    <BangleEditor state={editorState}>
      <FloatingMenu menuKey={menuKey} />
    </BangleEditor>
  );
}
