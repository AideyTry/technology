/*
 * @Author: DaiLinBo
 * @Date: 2020-07-20 13:14:03
 * @LastEditTime: 2020-07-20 23:12:45
 * @LastEditors: DaiLinBo
 * @Description: 
 */ 
class Book{
  constructor(title, pages, isbn){
    this.title = title
    this.pages = pages
    this.isbn = isbn
  }
  printIsbn(){
    console.log('isbn=', this.isbn)
  }
}

class ITBook extends Book{
  constructor(title, pages, isbn, technology){
    super(title, pages, isbn)
    this.technology = technology
  }

  printTechnology(){
    console.log('technology===', this.technology)
  }
}


let book = new Book('title', 'page', 'isbn')
let jsBook = new ITBook('算法','200','3323','javascritpt')
console.log('title===', book.title)
book.title = 'new title'
console.log('new title===', book.title)

console.log('jsbook.title=', jsBook.title)
console.log('technology=', jsBook.printTechnology())

class Person{
  constructor(name){
    this._name = name
  }
  get value(){
    return this._name
  }
  set value(value){
    this._name = value
  }
}

const p = new Person('zs')
console.log('p.value====', p.value)
p.name = 'ls'
console.log('ls===', p.value)