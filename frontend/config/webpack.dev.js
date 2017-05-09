const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const webpack = require('webpack');
const helpers = require('./helpers');
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const METADATA = {
  title: 'Hackathon Machine',
  baseUrl: '/',
  host: HOST,
  port: PORT,
  ENV: ENV
};

module.exports = function (options) {
  return webpackMerge(commonConfig({env: ENV}), {
    devtool: 'cheap-module-source-map',
    output: {
      path: helpers.root('dist'),
      filename: 'bundle.[hash].js'
    },
    devServer: {
      port: METADATA.port,
      host: METADATA.host,
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    }
  })
}
