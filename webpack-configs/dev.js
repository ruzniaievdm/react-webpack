const path = require("path");
const url = require("url");

module.exports = (env, options) => ({
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve("build"),
    historyApiFallback: true,
    port: process.env.PORT || 3000,
    hot: true,
  },
});
