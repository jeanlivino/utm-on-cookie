const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/utm-on-cookie.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'utm-on-cookie.min.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
};