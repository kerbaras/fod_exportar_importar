'use strict'

const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const paths = require('./paths')

let publicPath = './'

module.exports = {
  entry: [paths.appIndexJs],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: '[hash].bundle.js',
    publicPath: publicPath
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.scss',
      '.css',
      '.woff',
      'woff2',
      'svg',
      'png',
      'jpg',
      'ttf',
      'eot'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "sass-loader",
            options: {
              includePaths: [paths.appNodeModules]
            }
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }
        ]
      }, {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file?name=build/assets/fonts/[name].[ext]'
      }, {
        test: /\.(png|jpg|svg)$/,
        loader: 'file?name=build/assets/img/[name].[ext]'
      }

    ]
  },
  plugins: [new HtmlPlugin({inject: true, template: paths.appHtml})]
}