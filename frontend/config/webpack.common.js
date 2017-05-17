const webpack = require('webpack');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const METADATA = {
  title: 'Hackathon Machine',
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer()
};

module.exports = function (options) {
  return {
    entry: [
      'babel-polyfill',
      helpers.root('src/app.jsx')
    ],
    devtool: 'source-map',
    output: {
      path: helpers.root('dist'),
      publicPath: '/',
      filename: '[name].bundle.js'
    },
    module: {
      loaders: [{
        test: /\.css$/,
        include: helpers.root('src'),
        loader: 'style-loader!css-loader'
      }, {
        test: /\.js[x]?$/,
        include: helpers.root('src'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css'],
      alias: {
        assets: helpers.root('src/assets'),
        components: helpers.root('src/app/components'),
        containers: helpers.root('src/app/containers'),
        constants: helpers.root('src/app/constants'),
        settings: helpers.root('src/app/settings'),
        reducers: helpers.root('src/app/reducers'),
        actions: helpers.root('src/app/actions'),
        store: helpers.root('src/app/store'),
        sagas: helpers.root('src/app/sagas'),
        api: helpers.root('src/app/api')
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: METADATA.title,
        chunksSortMode: 'dependency',
        metadata: METADATA,
        inject: 'head'
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
      })
    ]
  };
};
