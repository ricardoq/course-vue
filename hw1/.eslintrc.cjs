/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:storybook/recommended",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "semi": "error",
  }
};
