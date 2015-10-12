/*eslint-disable no-var*/
var getConfig = require("hjs-webpack");
var config = require("./presentation/config");
var AppCachePlugin = require('appcache-webpack-plugin');

var webpackConfig = getConfig({
  in: "./index.jsx",
  out: "dist",
  clearBeforeBuild: true,
  html: config.html
});



webpackConfig.module.loaders[0] = {
  test: /(\.js$)|(\.jsx$)/,
  exclude: /node_modules/,
  loaders: [
    "babel-loader?stage=1"
  ]
};

webpackConfig.plugins.push(
    new AppCachePlugin({
        network: ["*"],
        settings: ['fast'],
        fallback: ["/","/index.html"]
    })
);

if (process.argv[1].indexOf("webpack-dev-server") !== -1) {
  webpackConfig.module.loaders[0].loaders.unshift("react-hot");
}

module.exports = webpackConfig;
