/*
 * @Author: Aiden(戴林波)
 * @Date: 2021-10-21 14:52:44
 * @LastEditTime: 2021-10-21 14:54:27
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
const express = require('express')
const article = express.Router()
article.get('/add', (req, res) => {
    res.end('article add')
})
article.get('/remove', (req, res) => {
    res.end('article remove')
})

module.exports = article