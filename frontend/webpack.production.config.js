require('babel-core/register')
require('babel-polyfill')

const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/app.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/, include: path.resolve(__dirname, 'src'),
      loader: 'style-loader!css-loader'
    }, {
      test: /\.js[x]?$/, include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'file'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      components: path.resolve('src/app/components'),
      containers: path.resolve('src/app/containers'),
      constants: path.resolve('src/app/constants'),
      reducers: path.resolve('src/app/reducers'),
      actions: path.resolve('src/app/actions'),
      sagas: path.resolve('src/app/sagas'),
      store: path.resolve('src/app/store'),
      api: path.resolve('src/app/api')
    }
  },
  plugins: [
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([
      { from: './src/index.html', to: 'index.html' }
    ])
  ]
}
