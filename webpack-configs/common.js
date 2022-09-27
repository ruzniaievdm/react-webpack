const path = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const entryPath = path.resolve("./src/index.tsx");
const outputPath = path.resolve("build/");
const htmlFilePath = path.resolve("./src/index.html");
const outputFileName = "static/js/[name].[hash].bundle.js";

const htmlPlugin = new HtmlWebpackPlugin({
  template: htmlFilePath,
});

const environmentsPlugin = (options) =>
  new webpack.DefinePlugin({
    "process.env": {
      MODE: JSON.stringify(options.mode),
    },
  });

module.exports = (env, options) => ({
  entry: entryPath,
  output: {
    path: outputPath,
    filename: outputFileName,
    chunkFilename: outputFileName,
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    runtimeChunk: "single",
  },
  plugins: [
    htmlPlugin,
    environmentsPlugin(options),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
  ],
});
