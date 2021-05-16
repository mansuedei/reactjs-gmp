const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    port: process.env.WEBPACK_PORT,
    publicPath: process.env.WEBPACK_PUBLIC_PATH,
    hotOnly: true,
    historyApiFallback: true
  },
});
