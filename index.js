module.exports = {
  extends: [
    'stylelint-config-recommended',
  ],
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'no-empty-source': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'no-duplicate-at-import-rules': null,
    'font-family-no-missing-generic-family-keyword': null,
    'at-rule-empty-line-before': [
      'always',
      {
        'ignoreAtRules': [
          'else'
        ],
        'ignore': [
          'after-comment'
        ],
        'except': [
          'first-nested',
          'blockless-after-same-name-blockless'
        ]
      }
    ],
    'block-opening-brace-space-before': 'always',
    'block-closing-brace-newline-after': [
      'always',
      {
        'ignoreAtRules': [
          'if',
          'else'
        ]
      }
    ],
    'at-rule-name-space-after': 'always',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate'
  }
};
