const webpack = require('webpack');
const path = require('path');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: './src',
    port: 3000,
    host: '0.0.0.0'
  },
  entry: {
    path: path.resolve(__dirname, 'src/app.jsx')

  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'style-loader!css-loader'
    }, {
      test: /\.js[x]?$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      loader: 'babel-loader'
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
      store: path.resolve('src/app/store'),
      api: path.resolve('src/app/api')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
