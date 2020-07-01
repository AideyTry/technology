/*
 * @Author: DaiLinBo
 * @Date: 2020-07-01 11:08:30
 * @LastEditTime: 2020-07-01 11:26:14
 * @LastEditors: DaiLinBo
 * @Description: This is queue of data structure.
 */

class Queue {
  constructor(max) {
    this.max = maxt;
    this.data = new Array(max);
    this.head = -1;
    this.tail = 0;
    this.size = 0
  }
  /**
   * @description: 入列
   * @params:
   */

  enqueue(x) {
    if(this.size === this.max){
      throw 'overflow'
    }
    this.data[this.tail] = x;
    this.size ++
    if (this.tail === this.max - 1) {
      this.tail = 0;
    } else {
      this.tail++;
    }
  }
  /**
   * @description: 出列
   * @params:
   */
  dequeue() {
    if(this.size === 0){
      throw 'underflow'
    }
    const x = this.data[this.head];
    this.head++;
    return x;
  }
  get length(){
    return top + 1
  }
}

module.exports = Queue