const config = require("./webpack.config.dev");
const merge = require("webpack-merge");
const paths = require("./paths");

module.exports = merge(config, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
    watchContentBase: true,
    host: "local.sunnyman.club",
    port: 8000,
    publicPath: "/",
    contentBase: paths.appPublic,
    proxy: [{
      context: ["/api"],
      target: "http://www.sunnyman.club",
      secure: false,
      changeOrigin: true,
      headers: {
        referer: "http://www.sunnyman.club"
      }
    }]
  }
});