/*
 * @Author: Aiden(戴林波)
 * @Date: 2021-10-20 15:39:38
 * @LastEditTime: 2021-10-20 15:45:19
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.end('/')
})

app.get('/hello', (req, res) => {
    res.end('/hello')
})

app.all('*', function(req, res){
    res.end('*')
})

app.listen(3000)