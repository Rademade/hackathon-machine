const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const helpers = require('./helpers');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;
const METADATA = {
  title: 'Hackathon Machine',
  baseUrl: '/',
  host: HOST,
  port: PORT,
  ENV: ENV
};

module.exports = function (env) {
  return webpackMerge(commonConfig({
    env: ENV
  }), {
    devtool: 'source-map',
    output: {
      path: helpers.root('dist'),
      filename: 'bundle.[hash].js'
    },
    plugins: [
      new DefinePlugin({
        'ENV': JSON.stringify(METADATA.ENV),
        'process.env': {
          'ENV': JSON.stringify(METADATA.ENV),
          'NODE_ENV': JSON.stringify(METADATA.ENV)
        }
      }),
      new UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        title: METADATA.title,
        chunksSortMode: 'dependency',
        metadata: METADATA,
        inject: 'head'
      })
    ]
  });
}
