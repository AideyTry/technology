/*
 * @Author: Aiden
 * @Date: 2021-06-21 17:57:33
 * @LastEditTime: 2021-06-21 18:07:17
 * @LastEditors: Aiden
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
var merge = require('webpack-merge')

var prodEnv = require('./prod')

module.exports = merge(prodEnv, {
    NODE_ENV: '"production"',
    BASE_API: '"http://192.168.4.70:2222/"',
    IMAGE_SERVER_URL: '"http://192.168.4.70/"',
})