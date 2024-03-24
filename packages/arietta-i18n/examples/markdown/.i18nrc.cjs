module.exports = {
  markdown: {
    entry: ['./README.md', './docs/**/*.md'],
    entryLocale: 'en-US',
    outputLocales: ['lt-LT'],
    outputExtensions: (locale, { getDefaultExtension }) => {
      if (locale === 'en-US') return '.md';
      return getDefaultExtension(locale);
    },
  },
};
