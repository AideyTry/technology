/*
 * @Author: Aiden
 * @Date: 2021-06-21 17:57:33
 * @LastEditTime: 2021-06-22 17:57:43
 * @LastEditors: Aiden
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
const { merge } = require('webpack-merge');

var prodEnv = require('./prod')

module.exports = merge(prodEnv, {
    NODE_ENV: '"production"',
    API_SERCER_URL: '"http://localhost:3000"'
})