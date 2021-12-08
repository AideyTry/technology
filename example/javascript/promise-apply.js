/*
 * @Author: Aiden(戴林波)
 * @Date: 2021-11-30 11:16:14
 * @LastEditTime: 2021-12-08 11:04:45
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
    // resolve(200)
})
console.log('p type=', typeof p)
const promise2 = p.then(d => {
    return new Promise((r, rej) => {
        setTimeout(() => {
            r(new Promise((rr, eej) => {
                rr(80909099999999999999)
            }))
        }, 500)
    })
}, e => {
    console.log('error', e)
})

p.then(d => {
    console.log('sucess2', d)
    return 8000
}, e => {
    console.log('error2', e)
})

promise2.then(pss => {
    console.log('pss=', pss)
})
console.log('end')
