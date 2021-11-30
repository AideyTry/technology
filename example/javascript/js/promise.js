/*
 * @Author: Aiden(戴林波)
 * @Date: 2021-11-30 11:15:31
 * @LastEditTime: 2021-11-30 12:12:30
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: jason_dlb@sina.cn
 */
function Promise(executor){
    const self = this
    self.status = 'pending'
    self.value = null
    self.reason = null
    function resolve(value){
        if(self.status === 'pending'){
            self.status = 'fulfilled'
            self.value = value
        }
    }
    function reject(reason){
        if(self.status === 'pending'){
            self.status = 'rejected'
            self.reason = reason
        }
    }
    executor(resolve, reject)
}

Promise.prototype.then = function(onFulfilled, onRejected){
     
    if(this.status === 'fulfilled'){
        onFulfilled(this.value)
    }

    if(this.status === 'rejected'){
        onRejected(this.reason)
    }
}

module.exports = Promise
