<!--
 * @Author: DaiLinBo
 * @Date: 2020-03-29 21:45:40
 * @LastEditTime: 2021-03-23 10:53:53
 * @LastEditors: Aiden
 * @Description: This is JavaScript
 -->
# JavaScript
## 提升
### 函数声明会被提升，但是函数表达式却不会被提升。
### 函数声明会被提升到普通变量声明之前，如果是重复的变量声明则会被忽略，重复的函数声明则是后面的会覆盖前面的。

## 高阶函数
### 定义：接收一个函数作为参数或者将函数作为返回值输出的函数。例如：lodash/debounce
```js
// 再vue中用法
    debouncedGetData: debounce(function (value) {
      this.getData(value)
    }, 1000),
    handleInput (value) {
      this.debouncedGetData(value)
    }
```