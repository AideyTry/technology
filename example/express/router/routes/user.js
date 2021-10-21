/*
 * @Author: Aiden(戴林波)
 * @Date: 2021-10-21 14:52:38
 * @LastEditTime: 2021-10-21 14:53:44
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
const express = require('express')
const user = express.Router()
user.get('/add', (req, res) => {
    res.end('user add')
})
user.get('/remove', (req, res) => {
    res.end('user remove')
})

module.exports = user
