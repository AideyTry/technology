## Node
### Node介绍
#### Node简介
Node.js是一个开源和跨平台的JavaScript运行时环境,Node基于V8。
```
V8引擎是一个JavaScript引擎，作用是将JavaScript翻译成操作系统CPU能够读懂的代码（将JS代码翻译成机器代码，然后交由CPU去执行）
```

#### Linux安装Node
参考： https://www.jianshu.com/p/d4a78b27fe83
#### Node优势
有一个独特的优势，因为数百万为浏览器编写JavaScript的前端开发人员现在可以在编写客户端代码的同时编写服务器端代码，而不需要学习一种完全不同的语言。

#### 退出Node程序
- 在控制台中可以通过ctrl-C
- 在代码中process.exit()

#### 读取环境变量
通过process.env

#### 浏览器事件循环
- 代码的执行顺序
- 计算机里面调度任务和分配任务的单位是进程，进程中包含着很多线程
- 浏览器是一个多进程的模型，每一个页签都是一个进程，主进程是一个用户界面
```
主进程：用户界面
*渲染进程：浏览器内核（包括js和UI渲染）
网络进程
绘图进程
插件独立的进程
```
- 渲染进程
```
渲染进程中包含线程
js的主线程是单线程的
UI渲染和js是共用线程的，互斥的原因是因为：如果页面一条代码要删除dom,一条要增加，就会混乱了。
主线程可以开辟其他子线程如：事件、定时器、ajax都是其他线程，包含在进程中的。
因此：js并不是纯单线程的，只是主线程是单线程的
```
- 宏任务&微任务
macro-task(宏任务)：包括整体代码script，setTimeout，setInterval

micro-task(微任务)：Promise，process.nextTick

事件循环的顺序，决定js代码的执行顺序。进入整体代码(宏任务)后，开始第一次循环。接着执行所有的微任务。然后再次从宏任务开始，找到其中一个任务队列执行完毕，再执行所有的微任务。
```
所有的异步方法分为宏任务和微任务
宏任务：宿主环境提供的异步方法都是宏任务以及脚本渲染和UI渲染
微任务：语音本身提供的是微任务，如promise.then、MutationObserver
```
- 整个宏任务和微任务的调度顺序？
```
微任务是批量执行，宏任务是每次取出一个执行。
默认先执行宏任务（script脚本），会清空所有的微任务（全部执行完毕），微任务执行后开始页面渲染（不是每次都渲染），从宏任务队列中取出一个宏任务执行，执行过程中可能再次产生宏任务、微任务。不停的循环。
```
![eventLoop](/images/eventLoop.png)
#### Node.js Event Loop
#### HTTP
#### HTTPS
#### fs
#### os
#### Buffer
#### Streams

#### Node的事件循环
##### Node中也有一个自己的事件循环，包含了i/o操作还有其他一些。从node10以上都和浏览器的执行顺序一致。
- timers setInterval定时器
- poll 阶段，轮询 会在特定的时候进行阻塞，执行i/o回调
- check setImmediate (每个宏任务执行完毕后会清空微任务)
![node_event_loop](/images/node_event_loop.jpg)
案例1
```js
setTimeout(() => {
    console.log('timeout')
}, 0)
Promise.resolve().then(()=>{
    console.log('promise')
})
process.nextTick(() => {//当执行栈中执行完毕后，立即调用的
    console.log('nextTick')
})

执行顺序：nextTick promise timeout

```

案例2
```js
    setTimeout(() => {
     console.log('setTimeout')
    }, 0)
    setImmediate(()=>{
        console.log('immediate')
    })

    // 执行顺序setTimeout  immediate
```


案例3
```js
const fs = require('fs')
fs.readFile('./node.md', function(){ // i/o 轮询时会执行i/o回调，如果没有定义setImmediate会等待剩下的i/o完成，或者定时器到达时间
    setTimeout(() => {
      console.log('timeout')
    }, 0)
    setImmediate(() => { // 不是特别重要的任务 可以放到setImmediate中
        console.log('immediate')
    })
})
```
```js
process.nextTick当前同步代码执行完毕，立即调用的 微任务
i/o 文件读写自动会放到poll阶段中处理
setImmediate 用的很少
```

#### HTTP传输解析


