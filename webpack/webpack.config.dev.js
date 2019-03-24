const path = require("path");
const paths = require("./paths");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: path.resolve(paths.appSrc, "index.tsx"),
  output: {
    path: paths.appDist,
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    publicPath: "/"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx",],
    alias: {
      "src": paths.appSrc,
      "utils": path.resolve(paths.appSrc, "utils"),
      "component": path.resolve(paths.appSrc, "component"),
      "pages": path.resolve(paths.appSrc, "pages"),
      "@public": paths.appPublic,
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader", options: {importLoaders: 3}},
          {
            // PostCSS 根据你在package.json中设置的browser版本为css属性添加prefix
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                require("postcss-flexbugs-fixes"),
                autoprefixer({
                  flexbox: "no-2009",
                }),
              ],
            },
          },
          {
            loader: "sass-loader",
            options: {sourceMap: true}
          },
          {
            // 只导入全局变量, 而非全局样式(坑)
            loader: "sass-resources-loader",
            options: {
              resources: path.resolve(paths.appSrc, "style/variable.scss"),
            }
          }
        ],
        include: [
          path.resolve(paths.appSrc)
        ]
      },
      {
        test: /\.(ico|eot|ttf|woff|woff2|png|jpg|jpeg|gif|svg)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "statics/[name].[hash:8].[ext]",
          }
        }]
      },
      {
        test: /\.(ts|tsx)$/,
        include: paths.appSrc,
        exclude: /node_modules/,
        use: [
          {loader: "awesome-typescript-loader"}
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(paths.appPublic, "index.html"),
      favicon: path.resolve(paths.appPublic, "favicon.ico"),
    }),
    //  热加载
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      _: "underscore",
    }),
  ]
};