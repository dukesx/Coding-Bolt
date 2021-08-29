const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ENVIRONMENT == "Production",
});
module.exports = withBundleAnalyzer({});
