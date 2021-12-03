/*
 * @Author: Aiden(戴林波)
 * @Date: 2021-11-30 11:15:31
 * @LastEditTime: 2021-12-03 12:05:00
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

Promise.prototype.then = function(onFulfilled, onRejected){
    const self = this
     // 为了进行链式调用，调用then之后需要再次，返回一个全新的promise
     // 需要拿到当前then方法成功或者失败执行后的结果
     let promise2 = new Promise((resolve, reject) => {
        if(this.status === 'fulfilled'){
            try{
                let x= onFulfilled(this.value)
                resolve(x)
            }catch(e){
                reject(e)
            }
        }
    
        if(this.status === 'rejected'){
            try{
                let x= onRejected(this.reason)
                resolve(x)
            }catch(e){
                reject(e)
            }
        }
    
        if(this.status === 'pending'){
            // 订阅(目的为了支持异步)
            this.onFulfilledCallbacks.push(() => {
                try{
                    let x= onFulfilled(self.value)
                    resolve(x)
                }catch(e){
                    reject(e)
                }
            })
            this.onRejectedCallbacks.push(() => {
                try{
                    let x= onRejected(self.reason)
                    resolve(x)
                }catch(e){
                    reject(e)
                }
            })
        }
     })

     return promise2
}

module.exports = Promise
