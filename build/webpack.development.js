const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./public",
    port: 8080,
    hot: true,
  },
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.html$/, loader: 'file?name=[path][name].[ext]' },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
