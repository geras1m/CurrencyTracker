const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
import TerserPlugin from 'terser-webpack-plugin';

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});
