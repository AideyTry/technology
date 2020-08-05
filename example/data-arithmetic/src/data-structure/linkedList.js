/*
 * @Author: DaiLinBo
 * @Date: 2020-08-05 10:17:56
 * @LastEditTime: 2020-08-05 10:32:10
 * @LastEditors: DaiLinBo
 * @Description: This is LinkedList.
 */
import {defaultEquals, Node} from './util'
export default class LinkedList{
  constructor(equalsFn = defaultEquals){
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }
  push(element){
    const node = new Node(element)
    let current
    if(this.head === null){
      this.head = node
    } else {
      current = this.head
      while(current.next != null){
        current = current.next
      }
      current.next = node
    }
    this.count++
  }
  removeAt(index){
    //检查越界值
    if(index > 0 && index < this.count){
      let current = this.head
      //移除的是第一项
      if(index === 0){
        this.head = current.next
      } else {
        let previous
        for(let i = 0; i < index; i++){
          previous = current.next
          current = current.next
        }
        previous.next = current.next
      }
      this.current--
      return current.element
    }
  }
}