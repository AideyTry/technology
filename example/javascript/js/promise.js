/*
 * @Author: Aiden(戴林波)
 * @Date: 2021-11-30 11:15:31
 * @LastEditTime: 2021-12-08 11:05:03
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: jason_dlb@sina.cn
 */
function Promise(executor){
    const self = this
    self.status = 'pending'
    self.value = null
    self.reason = null
    self.onFulfilledCallbacks = [] // 存放所有成功的回调
    self.onRejectedCallbacks = [] // 存放所有失败的回调
    function resolve(value){
        if(self.status === 'pending'){
            self.status = 'fulfilled'
            self.value = value
            // 发布
            self.onFulfilledCallbacks.forEach(fn => fn())
        }
    }
    function reject(reason){
        if(self.status === 'pending'){
            self.status = 'rejected'
            self.reason = reason
            self.onRejectedCallbacks.forEach(fn => fn())
        }
    }
    executor(resolve, reject)
}

/**
 * @description:判断x是不是promise 
 * @param {*} promise2
 * @param {*} x
 * @param {*} resolve
 * @param {*} reject
 * @Author: 
 * @return {*}
 */
function resolvePromise(promise2, x, resolve, reject){
  if(promise2 === x){ // 表示防止自己等待自己情况
    return reject(new TypeError('循环引用了'))
  }
  // 保证当前x是一个引用类型
  if((x!==null && typeof x === 'object') || typeof x === 'function'){
    try{
      let then = x.then; // then熟悉具有getter,此时获取时候会发生异常
      if(typeof then === 'function'){ // 认为是promise
        then.call(x, y => {
            // y有可能是一个promise，因此可使用递归一直解析，直到结果是一个常量为止
            resolvePromise(promise2, y, resolve, reject)
        }, r => {
            reject(r)
        })
      } else {
          resolve(x)
      }
    }catch(e){
        reject(e)
    }
  } else {
      resolve(x) // 普通值得话直接返回即可
  }
}

Promise.prototype.then = function(onFulfilled, onRejected){
    const self = this
     // 为了进行链式调用，调用then之后需要再次，返回一个全新的promise
     // 需要拿到当前then方法成功或者失败执行后的结果
     let promise2 = new Promise((resolve, reject) => {
        if(this.status === 'fulfilled'){
            setTimeout(() => {
                try{
                    let x= onFulfilled(this.value)
                    resolvePromise(promise2, x, resolve, reject)
                }catch(e){
                    reject(e)
                }
            }, 0)
        }
    
        if(this.status === 'rejected'){
            setTimeout(() => {
                try{
                    let x= onRejected(this.reason)
                    resolvePromise(promise2, x, resolve, reject)
                }catch(e){
                    reject(e)
                }
            }, 0)
        }
    
        if(this.status === 'pending'){
            // 订阅(目的为了支持异步)
            this.onFulfilledCallbacks.push(() => {
                setTimeout(() => {
                    try{
                        let x= onFulfilled(self.value)
                        resolvePromise(promise2, x, resolve, reject)
                    }catch(e){
                        reject(e)
                    }
                }, 0)
            })
            this.onRejectedCallbacks.push(() => {
                setTimeout(() => {
                    try{
                        let x= onRejected(self.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    }catch(e){
                        reject(e)
                    }
                }, 0)
            })
        }
     })

     return promise2
}

module.exports = Promise
