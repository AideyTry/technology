/*
 * @Author: Aiden
 * @Date: 2020-09-03 10:38:21
 * @LastEditTime: 2020-09-03 18:09:08
 * @LastEditors: Aiden
 * @Description:
 */
require("./index.less");
import "@babel/polyfill";
console.log("webpack");
const sum = () => {
  console.log(124);
};
sum();

class A {
  a = 1;
}
const aa = new A();
console.log("aa=", aa);

const promise = new Promise((resolve, reject) => {

})
console.log('promise=', promise.then(res => {
  console.log('res====', res)
}))

function c(){
  let sum = 0
  for(let i=0; i<9999999; i++){
    sum += i
  }
  return sum
}
async function a(){
 const  p = await c()
 console.log('p', p)
}

a()


const bbb = 'btn001'
console.log('isTrue=', bbb.includes('btn'))