/*
 * @Author: Aiden
 * @Date: 2021-06-11 10:03:45
 * @LastEditTime: 2021-06-17 16:51:04
 * @LastEditors: Aiden
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
const { resolve } = require('path');
const { merge } = require('webpack-merge')
const { VueLoaderPlugin } = require('vue-loader')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

const common = require('./webpack.base.js')

module.exports = merge(common, {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, '../dist'),
        filename: '[name].[contenthash:10].js',
        publicPath: '/'
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            template: resolve(__dirname, '../public', 'index.html')
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false
            })
        ]
    },
})