/*
 * @Author: Aiden(戴林波)
 * @Date: 2021-10-20 16:40:04
 * @LastEditTime: 2021-10-20 16:44:15
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
const express = require('express')
const app = express()
app.get('/', function(req, res, next){
    next()
    console.log(1)
    res.end('/')
})

app.get('/', function(req, res, next){
    console.log(2)
    res.end('ok')
})

app.listen(3013)