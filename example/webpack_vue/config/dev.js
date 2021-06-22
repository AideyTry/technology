/*
 * @Author: Aiden
 * @Date: 2021-06-18 17:58:24
 * @LastEditTime: 2021-06-22 17:00:10
 * @LastEditors: Aiden
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
const { merge } = require('webpack-merge');

var prodEnv = require('./prod')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_SERCER_URL: '"http://192.168.68.1:3000"'
})