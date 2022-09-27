const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, options) => ({
  plugins: [new CleanWebpackPlugin()],
});
