const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// module.exports = withBundleAnalyzer();
module.exports = module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer({
    ...defaultConfig,
    i18n: {
      locales: ['en-US', 'ur-PK'],
      defaultLocale: 'en-US',
    },
    future: {
      strictPostcssConfiguration: true,
    },
  });
};
