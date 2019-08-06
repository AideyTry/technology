### 用函数实现异步

#### 案例：异步情况下输出年龄在姓名前面

```
let fs = require('fs')
// 1、异步不能使用try catch
// 2、同步“异步的返回结果” 异步“并行”
// fs.readFile
let arr = []
let i = 0 // 保证顺序统一
function fn (data, index) {
  arr[index] = data
  if (++i == 2) {
    console.log(arr)
  }
}
fs.readFile('./name.txt', 'utf8', function (err, data) {
  fn(data, 1)
})
fs.readFile('./age.txt', 'utf8', function (err, data) {
  fn(data, 0)
})
```