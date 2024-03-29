<!--
 * @Author: DaiLinBo
 * @Date: 2020-03-29 21:45:40
 * @LastEditTime: 2021-12-17 10:54:55
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

## 三、语言基础
### 语法
#### var/const/let
- var 声明的范围是函数作用域，有变量提升的作用。
- let 声明的范围是块作用域。
- const 其行为与let基本相同，主要区别在于声明变量必须同时初始化变量，非复杂类型的变量不能修改值。
- 作用域介绍：
  - 1),全局作用域------全局定义
  - 2), 函数作用域-------在函数内部定义
  - 3), 块级作用域-----ES6新增的，用｛｝来界定块级作用域。

案例
```js
      for(let i =0; i<10; i++){
            console.log('i=', i)
       }
       // 打印0,1,2,3,4,5,6,7,8,9
       for(var j = 0; j< 10; j++){
            console.log('j=', j)
       }
       // 打印0,1,2,3,4,5,6,7,8,9
       for(let i =0; i<10; i++){// 在使用let声明迭代变量时，JavaScript引擎在后台会为每个迭代循环声明一个新的迭代变量。每个setTimeout引用的都是不同的变量实例，所以console.log输出的是我们期望的值，也就是循环执行过程中每个迭代变量的值。
        setTimeout(() => {
            console.log('i=', i)
        }, 0)
       }
       // 打印0,1,2,3,4,5,6,7,8,9
       for(var j = 0; j< 10; j++){
        setTimeout(() => {
            console.log('j=', j)
        }, 0)
       }
       // 打印10,10,10,10,10,10,10,10,10,10

       const a
       console.log(a)
       // 打印Uncaught SyntaxError: Missing initializer in const declaration

```
开发时，推荐const优先，let次之。
- 注意：使用const声明可以让浏览器运行时强制保持变量不变，也可以让静态代码分析工具提前发现不合法的赋值操作。因此，很多开发者认为应该优先使用const来声明变量，只在提前知道未来会有修改时，再使用let。这样可以让开发者更有信心地推断某些变量的值永远不会变，同时也能迅速发现因意外赋值导致的非预期行为。

#### 数据类型
- 6中简单数据类型：Undefined、Null、Boolean、Number、String、Symbol,1种复杂数据类型：Object
- 使用typeof操作符判断数据类型
- 在定义将来要保存对象值的变量时，建议使用null来初始化，不要使用其他值。
- Number类型还包含NaN、Infinity
- 浮点值的精确度最高可达17位小数，但在算术计算中远不如整数精确。例如：0.1和0.2得到的不是0.3，而是0.30000000000000004
- 对于非常大或非常小的数值，浮点值可以用科学计数法来表示。科学记数法用于表示一个应该乘以10的给定次幂的数值。ECMAScript中科学记数法的格式要求是一个数值（整数和浮点数）后跟一个大写或小写的字母e,再加上一个要乘的10的多少次幂。例如：3.125e7为31250000   3e-2为0.03
- Symbol
  1. Symbol出现的原因：在ES5的对象属性名都是字符串，这容易造成属性名的冲突。比如你使用了一个他人提供的对象，但又想为这个对象添加新的方法，新的名称就有可能与现在方法产生冲突。但Symbol的出现保证每个属性的名字都是独一无二的，这样就从根本上防止属性名的冲突。
  
  2. 由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。
  案例：
  ```
        const s1 = Symbol('1')
        const s2 = Symbol('2')
        const s3 = Symbol()
        const s4 = Symbol()
        console.log(s1,s2) // Symbol(1) Symbol(2)
        console.log('3')
        const a = {}
        a[s1] = 3
        console.log(a) // {Symbol(1): 3}
        console.log(s3 === s4) // false
        console.log(a[s1]) // 3
  ```
  - Object
  ECMAScript中的对象其实就是一组数据和功能的集合。每个Object实例都有如下属性和方法
    1. constructor:用于创建当前对象的函数。
    2. hasOwnProperty(propertyName)：用于判断当前对象实例（不是原型）上是否存在给定的属性。要检查的属性名必须是字符串
    3. propertyIsEnumerable(propertyName):用于判断给定的属性名是否可以使用for-in语句枚举。要检查的属性名必须是字符串。
    4. isPrototypeOf(object):用于判断当前对象是否为另外一个对象的原型。
    5. toLocaleString()：返回对象的字符串表示，该字符串反映对象所在的本地化执行环境。
    6. toString()：返回对象的字符串表示。
    7. valueOf():返回对象对应的字符串、数值或布尔值表示。

#### 操作符
ECMAScript提供了C语言和类C语言中常见的很多基本操作符，包括数学操作符、位操作符、布尔操作符、关系操作符、相等操作符和赋值操作符等。
- 只操作一个值的操作符叫一元操作符。
- 位操作符用于数值的底层操作，也就是操作内存中表示数据的比特（位）。
- 如果乘性操作符有不是数值的操作数，则该操作数会在后台被使用Number()转型函数转换为数值。
- 在加法操作符中，如果只有一个操作数是字符串，则将另外一个操作数转换为字符串，再将两个字符串拼接在一起。
- 在减法操作符中，如果有任一操作数是字符串、布尔值、null或undefined，则先在后台使用Number()将其转换为数值，然后再根据规则执行数学运算。
- 在关系操作符中，对字符串而言，关系操作符会比较字符串中对应字符的编码。
- 在相等操作符中，等于（==）和不等于（!=），这两个操作符都会先进行类型转换再确定操作数是否相等。
- 全等和不全等操作符，它们在比较时不强制进行类型转换。

#### 语句
if/while/do-while/for/for-in/for-of/break/continue/switch

### 函数
如果不写返回值的话返回undefined，箭头函数不加{}直接返回操作后的结果，加{}时也会默认返回undefined。
return后面如果不加值的话也会返回undefined

## 变量、作用域、内存
- JavaScript变量可以保存两种类型的值：原始值和引用值。
- typeof操作符可以确定值的原始类型，instanceof操作符用于确保值的引用类型。

## 基本引用类型
- 引用值（或者对象）是某个特定引用类型的实例。
- 正则表达式
匹配第一个“bat”或“cat”,忽略大小写
```js
const pat1 = /[bc]at/i;
或者
const pat2 = new RegExp("[bc]at", "i")
```
- 原始包装类型，ECMAScript提供了3中特殊的引用类型：Boolean、Number、String.
- 引用类型与原始包装类型的主要区别在于对象的生命周期。在通过new实例化引用类型后，得到的实例会在离开作用域时被销毁，而自动创建的原始值包装对象则只存在于访问它的那行代码执行期间。
- 当代码开始执行时，全局上下文中会存在两个内置对象：Global和Math。其中Global对象在大多数ECMAScript实现中无法直接访问，浏览器将其实现为window对象。
- 在使用eval()的时候必须积为慎重，特别是在解释用户输入的内容时。因为这个方法会对XSS利用暴露出很大的攻击面。恶意用户可能会插入导致你网站或应用崩溃的代码。
- [XSS](https://blog.csdn.net/qq_33929420/article/details/112003122?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522163521483816780269823179%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=163521483816780269823179&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-112003122.first_rank_v2_pc_rank_v29&utm_term=xss&spm=1018.2226.3001.4187)

## 集合引用类型
对于多数Web开发任务来说，选择Object还是Map只是个人偏好问题，影响不大。不过对于在乎内存和性能的开发者来说，对象和映射之间确实存在显著的差异。
- 内存占用：不同的浏览器的情况不同，但给定固定大小的内存，Map大约可以比Object多存储50%的键值对。
- 插入性能：如果代码涉及大量插入操作，那么显然Map的性能更佳。
- 查找速度：如果代码涉及大量查找操作，那么某些情况下可能选择Object会更好。
- 删除性能：对于大多数浏览器引擎来说，Map的delete()操作都比插入和查找更快。如果代码涉及大量删除操作，那么毫无疑问应该选择Map.

## 异步
  处理异步编程方法https://blog.csdn.net/weixin_30278237/article/details/99470449?ops_request_misc=&request_id=&biz_id=102&utm_term=javascript%E5%A4%84%E7%90%86%E5%BC%82%E6%AD%A5%E6%96%B9%E5%BC%8F&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-1-99470449.first_rank_v2_pc_rank_v29&spm=1018.2226.3001.4187
  - 回调函数
  - 事件监听

    采用事件驱动模式。
    任务的执行不取决代码的顺序，而取决于某一个事件是否发生。
  - 发布/订阅
  - Promise对象
  - Generator
  案例
  ```js
    // dav中使用情况
    *getDataSetList({ payload }, { call, put }) {
      const response = yield call(dataSetList, { param: payload });
      if (response.bcjson.flag === '1') {
        if (response.bcjson.items) {
          yield put({
            type: 'DataSetList',
            payload: response.bcjson.items,
          });
        }
      } else {
        throw new Error(response.bcjson.msg);
      }
    },
  ```
  - async（推荐）

  async函数的语法规则总体上比较简单，难点是错误的处理机制。
### async/await和Generator区别
async/await实际上是对Generator（生成器）的封装，async函数是Generator函数的语法糖，将Generator的星号换成async，将yield换成await，async函数比Generator函数更好用.

- Generator与async function都是返回一个特定类型的对象：

- async/await自带执行器，不需要手动调用next()就能自动执行下一步async始终返回一个Promise，使用await或者.then()来获取返回值，而Generator返回的是生成器对象，一个类似{ value: XXX, done: true }这样结构的Object
- await能够返回Promise的resolve/reject的值

## 八、对象、类与面向对象编程
### 创建对象
##### 工厂模式
问题：没有解决对象标识问题（即新创建的对象是什么类型）
##### 构造函数模式
问题：构造函数的主要问题在于，其定义的方法会在每个实例上都创建一遍
##### 原型模式
问题：原型的主要问题源自它的共享性；真正的问题是包含引用值的属性。

### 继承
#### 原型链继承
缺点：主要问题是原型中包含引用值的时候
#### 盗用构造函数继承（经典继承）
缺点：必须在构造函数中定义方法
#### 组合继承（推荐）
思路：使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性
```JS
        function SuperType(name) {
            this.name = name
        }
        SuperType.prototype.say = function(){
            console.log('say')
            console.log('name=', this.name)
        }
        function SubType(name, age){
            SuperType.call(this, name)
            this.age = age
        }
        SubType.prototype = new SuperType()
        SubType.prototype.sayAge = function(){
            console.log(this.age)
        }
        const ins1 = new SubType('zs', 33)
        ins1.say()
        ins1.sayAge()
```
### 类class
### 面向对象编程
面向对象编程就是将需求抽象成一个对象，然后针对这个对象分析其特征（属性）与动作（方法）。这个对象我们称之为类。面向对象编程其中的一个特点就是封装，就是说把你需要的功能放在一个对象里面。
## 九、函数
### 参数
- 因为函数式按顺序初始化的，所以后定义默认值的参数可以引用先定义的参数。例如：
  ```js
  function makeKing(name = 'Henry', numerals = name){
    return `King ${name} ${numerals}`
  }
  console.log(makeKing())
  ```
- 内部this指向
  1. function函数，由函数调用时决定。
  2. 箭头函数，this引用的是定义箭头函数的上下文

- bind/call/apply
- 函数声明和函数表达式的区别，关键是函数申明有提升
- 闭包
  1. 闭包指的是那些引用了另一个函数作用域中变量的函数
  2. 因为闭包会保留他们包含函数的作用域，所以比其他函数更占用内存。过度使用闭包可能导致内存过度占用，因此建议仅在十分必要时使用。
- 内存泄漏

  内存空间使用完毕之后未回收  

## 十、 Promise
### 用法
  - Promise类：解决异步问题的
    1. 静态方法（Promise.xxx）：Promise.all Promise.resolve Promise.reject Promise.race
    2. 原型上的方法（new Promise.xxx）：then, catch, finally
    3. 有三种状态，pending（等待态）、成功、失败；状态默认是pending等待态。可以从pending转化为成功/失败态，但是不能从成功/失败转化为成功/失败
  - Promise优点：链式调用
  
### 自己实现一个Promise
```js

function Promise(executor){
    const self = this
    self.status = 'pending'
    self.value = null
    self.reason = null
    self.onFulfilledCallbacks = [] // 存放所有成功的回调
    self.onRejectedCallbacks = [] // 存放所有失败的回调
    function resolve(value){
        if(self.status === 'pending'){
            self.status = 'fulfilled'
            self.value = value
            // 发布
            self.onFulfilledCallbacks.forEach(fn => fn())
        }
    }
    function reject(reason){
        if(self.status === 'pending'){
            self.status = 'rejected'
            self.reason = reason
            self.onRejectedCallbacks.forEach(fn => fn())
        }
    }
    executor(resolve, reject)
}

/**
 * @description:判断x是不是promise 
 * @param {*} promise2
 * @param {*} x
 * @param {*} resolve
 * @param {*} reject
 * @Author: 
 * @return {*}
 */
function resolvePromise(promise2, x, resolve, reject){
  if(promise2 === x){ // 表示防止自己等待自己情况
    return reject(new TypeError('循环引用了'))
  }
  // 保证当前x是一个引用类型
  if((x!==null && typeof x === 'object') || typeof x === 'function'){
    try{
      let then = x.then; // then熟悉具有getter,此时获取时候会发生异常
      if(typeof then === 'function'){ // 认为是promise
        then.call(x, y => {
            // y有可能是一个promise，因此可使用递归一直解析，直到结果是一个常量为止
            resolvePromise(promise2, y, resolve, reject)
        }, r => {
            reject(r)
        })
      } else {
          resolve(x)
      }
    }catch(e){
        reject(e)
    }
  } else {
      resolve(x) // 普通值得话直接返回即可
  }
}

Promise.prototype.then = function(onFulfilled, onRejected){
    const self = this
     // 为了进行链式调用，调用then之后需要再次，返回一个全新的promise
     // 需要拿到当前then方法成功或者失败执行后的结果
     let promise2 = new Promise((resolve, reject) => {
        if(this.status === 'fulfilled'){
            setTimeout(() => {
                try{
                    let x= onFulfilled(this.value)
                    resolvePromise(promise2, x, resolve, reject)
                }catch(e){
                    reject(e)
                }
            }, 0)
        }
    
        if(this.status === 'rejected'){
            setTimeout(() => {
                try{
                    let x= onRejected(this.reason)
                    resolvePromise(promise2, x, resolve, reject)
                }catch(e){
                    reject(e)
                }
            }, 0)
        }
    
        if(this.status === 'pending'){
            // 订阅(目的为了支持异步)
            this.onFulfilledCallbacks.push(() => {
                setTimeout(() => {
                    try{
                        let x= onFulfilled(self.value)
                        resolvePromise(promise2, x, resolve, reject)
                    }catch(e){
                        reject(e)
                    }
                }, 0)
            })
            this.onRejectedCallbacks.push(() => {
                setTimeout(() => {
                    try{
                        let x= onRejected(self.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    }catch(e){
                        reject(e)
                    }
                }, 0)
            })
        }
     })

     return promise2
}

module.exports = Promise
```

## 十一、客户端检测
### 能力检测

    能力检测是javascript运行时中使用一套简单的检测逻辑，测试浏览器是否支持某种特性。
    
### 用户代理检测

    用户代理测通过浏览器的用户代理字符串确定使用的是什么浏览器。

注意：在选择客户端检测方法时，首选时使用能力检测。用户代理检测是最后一个的选择，因为它过于依赖用户代理字符串（用户代理字符串可修改）。

## JavaScript应用
### 函数柯里化
   
    概念：
        柯里化（Currying）是一种关于函数的高阶技术。它不仅被用于 JavaScript，还被用于其他编程语言。

柯里化是一种函数的转换，它是指将一个函数从可调用的 f(a, b, c) 转换为可调用的 f(a)(b)(c)。

柯里化不会调用函数。它只是对函数进行转换。
参考：https://zh.javascript.info/currying-partials