<!--
 * @Author: Aiden(戴林波)
 * @Date: 2021-10-20 14:38:53
 * @LastEditTime: 2021-10-20 17:07:32
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
中间件一般放在路由之前执行
- 控制是否向下执行（常见的是用作权限的管理）
- 中间件可以扩展req和res中的方法
- 中间件可以提前处理一些逻辑