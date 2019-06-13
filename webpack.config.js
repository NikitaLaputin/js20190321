const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpacPlugin = require('copy-webpack-plugin');
const isDev = process.env.NODE_ENV != 'production';

module.exports = {
  entry: './scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }, 
  mode: isDev ? 'none' : 'production',
  devtool: 'source-map',
  devServer: {
    contentBase: './public'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: './index.html'
      }),
      new CopyWebpacPlugin([
          {
              from: './index.css'
          }
      ])
    ]
};  