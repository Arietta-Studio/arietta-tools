const config = require('@arietta-studio/lint').eslint;

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'unicorn/no-process-exit': 0,
  },
};
