const isProd = process.env.NODE_ENV == "production";

//

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: isProd ? true : false,
});
module.exports = withBundleAnalyzer({
  // assetPrefix: isProd ? "https://cdn.codingbolt.com" : "http://localhost:3000",
});
