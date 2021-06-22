/*
 * @Author: Aiden
 * @Date: 2021-06-18 17:23:24
 * @LastEditTime: 2021-06-22 17:41:44
 * @LastEditors: Aiden
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
const { resolve } = require('path')
module.exports = {
    dev: {
        devEnv: require('./dev'),
        compress: true,
        port: 8088,
        open: true,
        hot: true
    },
    build: {
        devEnv: require('./dev.js'),
        testEnv: require('./test.js'),
        prodEnv: require('./prod.js'),
        
        // Template for index.html
        index: resolve(__dirname, '../dist/index.html'),

        // Paths
        assetsRoot: resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '',
        devtool: '#souce-map'
    }
}