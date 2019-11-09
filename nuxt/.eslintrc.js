module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'no-unused-vars': [1, { "argsIgnorePattern": "res|next|^err" }],
    'no-multiple-empty-lines': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unneeded-ternary': 0,
    'arrow-parens': 0,
    'comma-dangle': 0,
    'dot-notation': 0,
    'object-shorthand': 0,
    'indent': 0,
    'space-before-function-paren': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/html-self-closing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/max-attributes-per-line': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-v-html': 0,
    "vue/require-default-prop": 0,
    "vue/require-prop-types": 0,
    "vue/no-unused-components": 1,
  }
}
