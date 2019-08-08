### 发布订阅

##### “发布” -> 中间代理  <- “订阅”

发布订阅主要靠中间代理联系上的，redux和promise都是基于发布订阅的

代码案例

```
let fs = require('fs')
// “发布” -> 中间代理  <- “订阅”
function Events () {
  this.callbacks = []
  this.results = []
}
Events.prototype.on = function (callback) { // 订阅
  this.callbacks.push(callback);
}
Events.prototype.emit = function (data) {
  this.results.push(data)
  this.callbacks.forEach(c => c(this.results))
}
let e = new Events();
e.on(function (arr) {
  console.log('arr=', arr)
  if (arr.length === 2) {
    console.log(arr)
  }
})
fs.readFile('./name.txt', 'utf8', function (err, data) {
  e.emit(data)
})
fs.readFile('./age.txt', 'utf8', function (err, data) {
  e.emit(data)
})


```