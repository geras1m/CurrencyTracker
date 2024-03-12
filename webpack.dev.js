const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    client: {
      overlay: true,
    },
  },
  plugins: [new BundleAnalyzerPlugin()],
});
