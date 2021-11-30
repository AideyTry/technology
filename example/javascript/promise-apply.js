/*
 * @Author: Aiden(戴林波)
 * @Date: 2021-11-30 11:16:14
 * @LastEditTime: 2021-11-30 12:12:50
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: jason_dlb@sina.cn
 */
const Promise  = require('./js/promise')
const p = new Promise(function(resolve, reject){
    console.log("Promise")
    // reject('error')
    resolve(200)
})
p.then(d => {
    console.log('sucess', d)
}, e => {
    console.log('error', e)
})
console.log('end')
