export function defaultEquals(a,b){
  return a === b
}
export class Node{
  constructor(element){
    this.element = element
    this.next = undefined
  }
}