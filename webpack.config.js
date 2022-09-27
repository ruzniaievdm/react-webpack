const path = require("path");
const { merge } = require("webpack-merge");

const configFilePaths = {
  common: "./webpack-configs/common",
  development: "./webpack-configs/dev",
  production: "./webpack-configs/prod",
};

module.exports = (env, options) => {
  const { mode } = options;
  const modeConfigPath = configFilePaths[mode];
  const modeConfig = require(modeConfigPath);
  const commonConfig = require(configFilePaths.common);

  return merge(commonConfig(env, options), modeConfig(env, options));
};
