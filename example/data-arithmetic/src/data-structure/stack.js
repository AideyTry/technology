/*
 * @Author: DaiLinBo
 * @Date: 2020-06-29 23:15:19
 * @LastEditTime: 2020-06-29 23:22:22
 * @LastEditors: DaiLinBo
 * @Description: 堆栈
 */ 
class Stack{
  constructor(max = 1000){
    // 空间
    this.data = new Array(max)
    // 栈顶（栈指针）
    this.top = -1
  }
  push(x){
    if(this.top === max - 1){
      throw 'stack overflow'
    }
    this.top ++
    this.data[this.top] = x
  }
  pop(){
    if(this.top === -1){
      throw 'stack underflow'
    }
    const x = this.data[this.top]
    this.top --
  }
}