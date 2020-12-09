/*
 * @Author: your name
 * @Date: 2020-12-08 16:15:54
 * @LastEditTime: 2020-12-08 16:20:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \technology\example\javascript\common\prototype.js
 */

 Object.prototype.fn = function(){
     console.log('fn')
 }

 var str = NaN
console.log('str===', str)
 str.fn()