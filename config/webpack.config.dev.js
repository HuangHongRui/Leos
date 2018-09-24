"use strict";

const autoprefixer = require("autoprefixer");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const InterpolateHtmlPlugin = require("react-dev-utils/InterpolateHtmlPlugin");
const WatchMissingNodeModulesPlugin = require("react-dev-utils/WatchMissingNodeModulesPlugin");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const getClientEnvironment = require("./env");
const paths = require("./paths");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const tsImportPluginFactory = require("ts-import-plugin");
const publicPath = "/";
const publicUrl = "";
const env = getClientEnvironment(publicUrl);
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: "cheap-module-source-map",
  entry: [
    require.resolve("./polyfills"),
    require.resolve("react-dev-utils/webpackHotDevClient"),
    paths.appIndexJs,
  ],
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, "build"),
    filename: "static/js/bundle.js",
    chunkFilename: "static/js/[name].chunk.js",
    publicPath: publicPath,
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, "/"),
  },
  resolve: {
    modules: ["node_modules", paths.appNodeModules].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: [
      ".mjs",
      ".web.ts",
      ".ts",
      ".web.tsx",
      ".tsx",
      ".web.js",
      ".js",
      ".json",
      ".web.jsx",
      ".jsx",
    ],
    alias: {
      "react-native": "react-native-web",
      "component": "src/component"
    },
    plugins: [
      new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
      new TsconfigPathsPlugin({configFile: paths.appTsConfig}),
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      // TODO: Disable require.ensure as it's not a standard language feature.
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve("tslint-loader"),
        enforce: "pre",
        include: paths.appSrc,
      },
      {
        test: /\.(js|jsx|mjs)$/,
        loader: require.resolve("source-map-loader"),
        enforce: "pre",
        include: paths.appSrc,
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve("url-loader"),
            options: {
              limit: 10000,
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
          {
            test: /\.(js|jsx|mjs)$/,
            include: paths.appSrc,
            loader: require.resolve("babel-loader"),
            options: {

              compact: true,
            },
          },

          {
            test: /\.(ts|tsx)$/,
            include: paths.appSrc,
            use: [
              {
                loader: require.resolve("ts-loader"),
                options: {
                  transpileOnly: true,
                  getCustomTransformers: () => ({
                    before: [
                      tsImportPluginFactory([
                        {
                          libraryName: "antd",
                          libraryDirectory: "lib",
                        },
                        {
                          libraryName: "antd-mobile",
                          libraryDirectory: "lib",
                        },
                      ]),
                    ],
                  }),
                },
              },
            ],
          },
          {
            test: /\.css$/,
            use: [
              require.resolve("style-loader"),
              {
                loader: require.resolve("css-loader"),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve("postcss-loader"),
                options: {
                  ident: "postcss",
                  plugins: () => [
                    require("postcss-flexbugs-fixes"),
                    autoprefixer({
                      browsers: [
                        ">1%",
                        "last 4 versions",
                        "Firefox ESR",
                        "not ie < 9", // React doesn't support IE8 anyway
                      ],
                      flexbox: "no-2009",
                    }),
                  ],
                },
              },
            ],
          },
          {
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/],
            loader: require.resolve("file-loader"),
            options: {
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
          // {
          //   // local
          //   test: /\.less$/,
          //   exclude: /antd|node_modules/,
          //   use: [
          //     require.resolve("style-loader"),
          //     {
          //       loader: require.resolve("css-loader"),
          //       options: {
          //         // local
          //         importLoaders: 1,
          //         modules: true,
          //         localIdentName: "[name]__[local]__[hash:5]",
          //       },
          //     },
          //     {
          //       loader: require.resolve("postcss-loader"),
          //       options: {
          //         ident: "postcss",
          //         plugins: () => [
          //           require("postcss-flexbugs-fixes"),
          //           autoprefixer({
          //             browsers: [
          //               ">1%",
          //               "last 4 versions",
          //               "Firefox ESR",
          //               "not ie < 9", // React doesn't support IE8 anyway
          //             ],
          //             flexbox: "no-2009",
          //           }),
          //         ],
          //       },
          //     },
          //     {
          //       loader: require.resolve("less-loader"),
          //     },
          //   ],
          // },
          {

            test: /\.scss$/,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: './src/global.scss'
                }
              }
            ]
          },
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: "babel-loader",
                options: {
                  babelrc: false,
                  plugins: ["react-hot-loader/babel"],
                },
              },
              "ts-loader", // (or awesome-typescript-loader)
            ],
          },
          {
            test: /\.tsx?$/,
            use: [
              "ts-loader", // (or awesome-typescript-loader)
              {
                loader: "babel-loader",
                options: {
                  plugins: [
                    "@babel/plugin-syntax-typescript",
                    "@babel/plugin-syntax-decorators",
                    "@babel/plugin-syntax-jsx",
                    "react-hot-loader/babel",
                  ],
                },
              }
            ],
          }
        ],
      },
    ],
  },
  plugins: [
    new InterpolateHtmlPlugin(env.raw),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin(env.stringified),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      watch: paths.appSrc,
      tsconfig: paths.appTsConfig,
      tslint: paths.appTsLint,
    }),
  ],
  node: {
    dgram: "empty",
    fs:
      "empty",
    net:
      "empty",
    tls:
      "empty",
    child_process:
      "empty",
  },
  performance: {
    hints: false,
  },
};
