<!--
 * @Author: Aiden(戴林波)
 * @Date: 2021-10-20 14:38:53
 * @LastEditTime: 2021-10-21 16:16:17
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
-->
# Express 
## 简介
官网：https://www.expressjs.com.cn/
### 基础
express内部主要是基于构造函数，特点：全部都是基于回调的（异步处理、迭代都是通过回调的方式）

#### 基本路由案例
```js
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
```

#### next
案例
```js
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
```

#### 中间件
中间件Middleware是一个函数，它可以访问请求对象(req)、响应对象(res)和应用程序请求-响应周期中的next函数的函数。
中间件一般放在路由之前执行
- 控制是否向下执行（常见的是用作权限的管理）
- 中间件可以扩展req和res中的方法
- 中间件可以提前处理一些逻辑
- 简化代码
案例
```js
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
```

#### router
- 带参数的路由
```js
/name/:id/:age => /name/1/2  // = {id: 1, age: 2}
```
- 多层路由
案例
```js
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
```