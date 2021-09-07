const eslintrcCommon = require('../../baseconfig/eslintrc.base');

module.exports = {
  ...eslintrcCommon,
  parserOptions: {
    ...eslintrcCommon.parserOptions,
    project: './tsconfig.json',
  },
};
