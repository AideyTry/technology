/*
 * @Author: Aiden(戴林波)
 * @Date: 2021-10-21 14:47:04
 * @LastEditTime: 2021-10-21 16:01:13
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
const express = require('express')
const app = express()

const user = express.Router()
user.get('/add', (req, res) => {
    res.end('user add')
})
user.get('/remove', (req, res) => {
    res.end('user remove')
})

const article = express.Router()
article.get('/add', (req, res) => {
    res.end('article add')
})
article.get('/remove', (req, res) => {
    res.end('article remove')
})

app.use('/user', user)
app.use('/article', article)

app.listen(3000)