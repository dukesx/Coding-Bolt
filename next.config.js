// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

const withBundleStats = require("next-plugin-bundle-stats")({
  outDir: "../artifacts",
  stats: {
    context: "./src", // optional, will improve readability of the paths
    assets: true,
    entrypoints: true,
    chunks: true,
    modules: true,
  },
  json: true,
});

module.exports = withBundleStats({
  reactStrictMode: true,
});
