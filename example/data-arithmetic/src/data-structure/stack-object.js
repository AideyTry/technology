/*
 * @Author: DaiLinBo
 * @Date: 2020-07-27 09:48:17
 * @LastEditTime: 2020-07-27 15:32:40
 * @LastEditors: DaiLinBo
 * @Description: This is stack based on object.
 */ 
class Stack{
  constructor(){
    this.count = 0
    this.items = {}
  }
  push(element){
    this.items[this.count] = element
    this.count++
  }
  isEmpty(){
    return this.count === 0
  }
  pop(){
    if(this.isEmpty()){
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
  peek(){
   if(this.isEmpty()){
    return undefined
   } 
   return this.items[this.count - 1]
  }
  clear(){
    this.items = []
    this.count = 0
  }
}

module.exports = Stack