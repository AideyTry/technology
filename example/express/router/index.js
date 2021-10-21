/*
 * @Author: Aiden(戴林波)
 * @Date: 2021-10-21 14:47:04
 * @LastEditTime: 2021-10-21 14:55:30
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
const express = require('express')
const user = require('./routes/user')
const article = require('./routes/article')
const app = express()


app.use('/user', user)
app.use('/article', article)

app.listen(3000)