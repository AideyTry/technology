/*
 * @Author: Aiden
 * @Date: 2021-06-11 10:03:45
 * @LastEditTime: 2021-06-22 17:41:10
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
const webpack = require('webpack')

const common = require('./webpack.base.js')
const config = require('../config')

const env = config.build[process.env.env_config + 'Env']
console.log('config=', config)
console.log('process.env.env_config-=', process.env.env_config)
console.log('env=', env)
console.log("require('../config/prod')=", require('../config/prod'))

module.exports = merge(common, {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, '../dist'),
        filename: '[name].[contenthash:10].js',
        publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': '../src'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            // 'process.env': require('../config/prod')
            'process.env': env
        }),
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