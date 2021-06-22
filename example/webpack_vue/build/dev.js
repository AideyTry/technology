/*
 * @Author: Aiden
 * @Date: 2021-06-11 10:03:40
 * @LastEditTime: 2021-06-22 15:50:58
 * @LastEditors: Aiden
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
const { resolve } = require('path');
const { merge } = require('webpack-merge')
const common = require('./webpack.base.js')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash:10].js',
        path: resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/dev')
        }),
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            template: resolve(__dirname, '../public', 'index.html')
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': '../src'
        }
    },
    resolveLoader: {
        modules: [
          'node_modules',
          resolve(__dirname, '../loaders')
        ]
      },
    devServer: {
        compress: true,
        port: 8088,
        open: true,
        hot: true,
    }
})
