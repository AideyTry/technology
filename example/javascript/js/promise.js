/*
 * @Author: Aiden(戴林波)
 * @Date: 2021-11-30 11:15:31
 * @LastEditTime: 2021-12-01 11:20:59
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
     
    if(this.status === 'fulfilled'){
        onFulfilled(this.value)
    }

    if(this.status === 'rejected'){
        onRejected(this.reason)
    }

    if(this.status === 'pending'){
        // 订阅(目的为了支持异步)
        this.onFulfilledCallbacks.push(() => {
            onFulfilled(self.value)
        })
        this.onRejectedCallbacks.push(() => {
            onRejected(self.reason)
        })
    }
}

module.exports = Promise
