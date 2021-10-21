/*
 * @Author: Aiden(戴林波)
 * @Date: 2021-10-21 15:51:45
 * @LastEditTime: 2021-10-21 16:04:44
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
const express = require('express')
const fs = require('fs')
const moment = require('moment')
const app = express()
// 1.声明一个中间件函数  next是下一个路由回调的引用
const recoredMiddleware = (req, res, next) => {
    // 记录当前的请求时间和请求的路劲，保存在文件中
    const time =  `${moment().format('YYYY-MM-DD HH:mm:ss')}`
    const path = req.url
    const str = `${time} ${path}\r\n`
    // 写入文件中
    fs.writeFileSync(`${__dirname}/access.log`, str, {flag: 'a'})
    // 调用next
    next()
}
// 2.设置中间件
app.use(recoredMiddleware)

app.get('/home', (req, res)=> {
    res.send('home首页')
})

app.get('/list', (req, res)=> {
    res.send('list页面')
})

app.listen(3003)