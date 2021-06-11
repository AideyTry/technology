/*
 * @Author: Aiden
 * @Date: 2021-06-11 10:03:40
 * @LastEditTime: 2021-06-11 10:54:41
 * @LastEditors: Aiden
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
const { resolve } = require('path');
const { merge } = require('webpack-merge')
const common = require('./webpack.base.js')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

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
    devServer: {
        compress: true,
        port: 8088,
        open: true,
        hot: true
    }
})
