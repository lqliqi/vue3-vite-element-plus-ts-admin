module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
  ],
  rules: {
    'rule-empty-line-before': 'never', // 规则之间不允许有空行
    'block-closing-brace-empty-line-before': 'never', // 规则内结尾不允许有空行
    'declaration-block-trailing-semicolon': 'always', // 总是在结尾加分号
  },
}
