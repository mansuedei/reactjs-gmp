const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");

const serverConfig = {
  // Inform webpack that we're building a bundle for nodeJS, rather than for the browser
  target: "node",
  mode: "development",

  // Tell webpack the root file of our server application
  entry: "./src/server/index.js",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
                exportOnlyLocals: true
              }
            }
          },
          { loader: "sass-loader" }
        ]
      }
    ]
  },

  // Tell webpack where to put the output file that it generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge([baseConfig, serverConfig]);
