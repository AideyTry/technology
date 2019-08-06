###什么是高阶函数
高阶函数指代的就是参数是一个函数，函数返回函数（预置参数）
案例
```
// 判断类型Object.prototype.toString.call()
function isType (type) {
  return function (obj) {
    return Object.prototype.toString.call(obj).includes(type)
  }
}
// 包装成一个高阶函数、批量生成函数
let types = ['String', 'Object', 'Array', 'Null', 'Undefined', 'Boolean']
let fns = {}
types.forEach(type => {
  fns['is' + type] = isType(type)
})
let a = true
console.log(fns.isBoolean(a))
console.log(fns.isString(a)) 
```