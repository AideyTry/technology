/*
 * @Author: Aiden(戴林波)
 * @Date: 2021-11-30 11:16:14
 * @LastEditTime: 2021-12-03 10:43:24
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: jason_dlb@sina.cn
 */

const Promise = require("./js/promise");

const p = new Promise(function(resolve, reject){
    console.log("Promise")
    // reject('error')
    setTimeout(() => {
        resolve(200)
    }, 2000);
})
p.then(d => {
    console.log('sucess', d)
}, e => {
    console.log('error', e)
})

p.then(d => {
    console.log('sucess2', d)
    return 8000
}, e => {
    console.log('error2', e)
}).then(data => {
    console.log('ddd=', data)
})
console.log('end')
