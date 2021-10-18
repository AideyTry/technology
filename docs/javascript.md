<!--
 * @Author: DaiLinBo
 * @Date: 2020-03-29 21:45:40
 * @LastEditTime: 2021-10-18 10:54:04
 * @LastEditors: Aiden(戴林波)
 * @Description: This is JavaScript
 -->
# JavaScript
## 一、JavaScript简介
### JavaScript是一门用来与网页交互的脚步语言，包含一下三个组成部分：
- ESMAScript：由ECMA-262定义并提供核心功能。
- 文档对象模型(DOM,Document Object Model):提供与网页内容交互的方法和接口。
- 浏览器对象模型（BOM, Browser Object Model）:提供与浏览器交互的方法和接口。

## 二、HTML中的JavaScript
JavaScript是通过```<script>```元素插入到HTML中的。这个元素可用于把JavaScript代码嵌入到HTML页面中，跟其他混合在一起，也可用于引入保存在外部文件中的JavaScript。
- 在html5中JavaScript默认type是text/javascript;如果type值是module,则代码会被当成ES6模块，而且只有这个时候代码才能出现import和export关键字。
- 所有```<script>```元素会依照它们在网页中出现的次序被解释。在不使用defer和async属性的情况下，包含在```<script>```元素汇总的代码必须严格按次序解释。
- 可以使用defer属性把脚本推迟到文档渲染完毕后再执行。推迟的脚本原则上按照它们被列出的次序执行。
- 可以使用async属性表示脚本不需要等待其他脚本，同时也不阻塞文档渲染，即异步加载。
- 推荐使用引入外部js文件而不是行内代码，原因：
```
1、可维护性好；
2、缓存。
```
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