/*
 * @Author: DaiLinBo
 * @Date: 2020-06-29 23:15:19
 * @LastEditTime: 2020-06-30 12:16:34
 * @LastEditors: DaiLinBo
 * @Description: 堆栈
 */ 
class Stack{
  constructor(max = 1000){
    // 空间
    this.data = new Array(max)
    // 栈顶（栈指针）
    this.top = -1
    this.max = max
  }
  push(x){
    if(this.top === this.max - 1){
      throw 'stackoverflow'
    }
    this.top ++
    this.data[this.top] = x
  }
  pop(){
    if(this.top === -1){
      throw 'stackunderflow'
    }
    const x = this.data[this.top]
    this.top --
    return x
  }
}

module.exports = Stack