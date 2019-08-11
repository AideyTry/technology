### 异步的缺陷

    回调可能导致代码不好维护，导致回调地狱

    错误问题，不好捕获错误

    不能使用try-catch

    同步异步请求需要自己维护计数器

### promise解决异步的以上几大缺陷。

     promise的三个状态： 成功态、 失败态、等待态
     
     // 当创建一个promise的时候，需要提供一个执行器函数，此函数会立即执行，所以先打印123再打印456
    // 默认是等待态，可以转化成成功或者失败，状态更改后就不能修改状态了。
    let Promise = require('./promise.js')
    let promise = new Promise((resolve, reject) => {
      console.log(1)
      resolve(123)
      // reject(456)
    })
    console.log(2)
    promise.then((value) => {
      console.log('success', value)
    }, (reason) => {
      console.log('fail', reason)
    })
  ###### 实现promise基本功能
     class Promise {
      constructor(executor) {
        this.status = 'pending'
        this.value;
        this.reason;
        let resolve = (value) => {
          if (this.status == 'pending') {
            this.status = 'fulfilled'
            this.value = value
          }
        }
        let reject = (reason) => {
          if (this.status == 'pending') {
            this.status = 'rejected'
            this.reason = reason
          }
        }
        executor(resolve, reject)
      }
      then (onFulfilled, onRejected) {
        if (this.status == 'fulfilled') {
          onFulfilled(this.value)
        } else if (this.status == 'rejected') {
          onRejected(this.reason)
        }
      }
    }
    module.exports = Promise
#### 异步

##### 调用

```
// 当创建一个promise的时候，需要提供一个执行器函数，此函数会立即执行，所以先打印1再打印2
// 默认是等待态，可以转化成成功或者失败，状态更改后就不能修改状态了。
let Promise = require('./promise.js')
let promise = new Promise((resolve, reject) => {
  console.log(1)
  setTimeout(() => {
    // resolve(123)
    reject(456)
  }, 1000)
})
console.log(2)
promise.then((value) => {
  console.log('success', value)
}, (reason) => {
  console.log('fail', reason)
})
```

##### 实现异步的promise

```
class Promise {
  constructor(executor) {
    this.status = 'pending'
    this.value;
    this.reason;
    this.resolveCallbacks = [] // 当then是pending时，我们希望把成功的方法都存放在数组中
    this.rejectCallbacks = []
    let resolve = (value) => {
      if (this.status == 'pending') {
        this.status = 'fulfilled'
        this.value = value
        // 类似发布
        this.resolveCallbacks.forEach(fn => fn())
      }
    }
    let reject = (reason) => {
      if (this.status == 'pending') {
        this.status = 'rejected'
        this.reason = reason
        this.rejectCallbacks.forEach(fn => fn())
      }
    }
    executor(resolve, reject)
  }
  then (onFulfilled, onRejected) {
    if (this.status == 'fulfilled') {
      onFulfilled(this.value)
    } else if (this.status == 'rejected') {
      onRejected(this.reason)
    } else if (this.status == 'pending') {
      // 把成功的回调和失败的回调分开存放（类似订阅）
      this.resolveCallbacks.push(() => {
        onFulfilled(this.value)
      })
      this.rejectCallbacks.push(() => {
        onRejected(this.reason)
      })
    }
  }
}
module.exports = Promise
```
##### promise链式调用
