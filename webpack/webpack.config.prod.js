const path = require("path");
const paths = require("./paths");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: "production",
  bail: true,
  entry: path.resolve(paths.appSrc, "index.tsx"),
  output: {
    path: paths.appBuild,
    filename: "[name].bundle.[hash:8].js",
    chunkFilename: "[name].chunk.[hash:8].js",
    publicPath: "/"
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css\.*(?!.*map)/g,  //注意不要写成 /\.css$/g
        cssProcessor: require("cssnano"),
        cssProcessorOptions: {
          discardComments: {removeAll: true},
          // 避免 cssnano 重新计算 z-index
          safe: true,
          // cssnano 集成了autoprefixer的功能
          // 会使用到autoprefixer进行无关前缀的清理
          // 关闭autoprefixer功能
          // 使用postcss的autoprefixer功能
          autoprefixer: false
        },
        canPrint: true
      })
    ],
    // runtimeChunk: true,
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx",],
    alias: {
      "src": paths.appSrc,
      "@public": paths.appPublic,
      "node_modules": path.resolve(paths.appPath, "node_modules")
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ico|eot|ttf|woff|woff2|png|jpg|jpeg|gif)$/,
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
        use: [
          {
            loader: "awesome-typescript-loader",
          }
        ],
      },
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
      chunkFilename: "[id].[hash:8].css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(paths.appPublic, "index.html"),
      favicon: path.resolve(paths.appPublic, "favicon.ico"),
    }),
    new CleanWebpackPlugin({root: paths.appBuild}),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(js|css)$'
      ),
      threshold: 1024,
      minRatio: 0.8,
      cache: true
    }),
  ]
};