/*
 * @Author: Aiden
 * @Date: 2021-06-18 17:58:24
 * @LastEditTime: 2021-06-21 17:55:09
 * @LastEditors: Aiden
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
var merge = require('webpack-merge')

var prodEnv = require('./prod')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"'
})