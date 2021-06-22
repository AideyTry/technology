/*
 * @Author: Aiden
 * @Date: 2021-06-22 16:44:26
 * @LastEditTime: 2021-06-22 17:44:55
 * @LastEditors: Aiden
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
const express = require('express')

const app = express()

app.use(express.static('dist', { maxAge: 1000 * 3600 }))

app.listen(3003)