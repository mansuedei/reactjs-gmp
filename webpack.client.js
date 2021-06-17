const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const clientConfig = {
  // Tell webpack the root file of our client application
  mode: "development",
  entry: "./src/index.js",

  // Tell webpack where to put the output file that it generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
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
                exportOnlyLocals: false
              }
            }
          },
          { loader: "sass-loader" }
        ]
      }
    ]
  }
};

module.exports = merge([baseConfig, clientConfig]);
