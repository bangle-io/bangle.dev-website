// .eslintrc.js
module.exports = {
  extends: [
    'react-app',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  overrides: [
    {
      files: '*.jsx',
    },
    {
      files: '*.tsx',
    },
    {
      files: '*.ts',
    },
  ],
  env: {},
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
    Node: 'off',
    Selection: 'off',
    Plugin: 'off',
    Image: true,
  },

  rules: {
    'curly': 'error',
    'no-process-env': 'error',
    'import/no-cycle': [
      2,
      // eslint-disable-next-line no-process-env
      { maxDepth: 2 },
    ],
    'import/no-unresolved': [2, { ignore: ['^@theme/', '^@docusaurus/'] }],

    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: '(useKeybindings|useMyOtherCustomHook)',
      },
    ],
    'consistent-return': ['warn'],
  },
  settings: {
    'react': {
      version: '17',
    },
    'import/extensions': ['.js', '.ts', '.tsx', '.jsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
      },
    },
  },
};
