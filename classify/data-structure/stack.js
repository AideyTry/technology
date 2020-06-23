/*
 * @Author: DaiLinBo
 * @Date: 2020-06-21 22:09:16
 * @LastEditTime: 2020-06-21 22:30:46
 * @LastEditors: DaiLinBo
 * @Description: This is Stack.
 */ 

 class Stack{
   constructor(max = 1000){
    //  空间
    this.data = new Array(max)

    // 栈顶（栈指针）
    this.top = -1
   }

   push(x){
     if(this.top === max - 1){
       throw 'Stack overflow'
     }
     this.top ++
     this.data[this.top] = x
   }

   pop(x){
     if(this.top === -1){
      throw 'Stack underflow'
     }
     const x = this.data[this.top]
     this.top --
   }
 }

 module.exports = Stack
