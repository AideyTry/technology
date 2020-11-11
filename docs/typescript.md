<!--
 * @Author: Aiden
 * @Date: 2020-09-25 11:14:20
 * @LastEditTime: 2020-11-11 17:30:10
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
## 编程语言的类型
```bash
动态类型语言：在运行期间才会去做数据类型的检查，非常灵活；例如：javascript、python
静态类型语言：在编译阶段就进行数据类型的检查，写程序时要声明变量的类型，如：C、C++、JAVA
```

## Typescript是什么？
```bash
Javascript that scales
静态类型风格的类型系统
从es6到es10甚至是esnext的语法支持
兼容各种浏览器，各种系统，各种服务器，完全开源
```

## Typescript优点
```bash
程序更容易理解
    解决函数或方法输入输出的参数类型，外部条件等
    解决动态语言的约束（动态语言需要手动调试等过程，比如打日志、断点）
效率更高
    在不同的代码块和定义中进行跳转
    代码自动补全
    丰富的接口提示
更少的错误
    编译期间能够发现大部分错误
    杜绝一些比较常见错误
非常好的包容性
    完全兼容javascript
    第三方库可以单独编写类型文件
    流行项目都支持Typescript
```

## 缺陷
```bash
增加了一些学习成本
短期内增加了一些开发成本
```

## 基本知识
### JavaScript数据类型
#### 分为两大类
##### 7种原始类型，除Object之外的所有类型都是不可变的
###### Boolean Null Undefined Number String BigInt Symbol
##### Object
### 任意类型：any
### 联合类型
#### let numberOrString: number | string = 234   numberOrString = 'hhh'
### Array
#### let arrOfNumbers: number[] = [1,2,3,4,5]
### Tuple(元组)
#### let user: [string, number] = ['editor', 33]

## interface
### 对对象的形状(shape)进行描述,比如对象里面有什么属性、方法之类
```
interface Person{
    readonly id: number; // 加readonly后代表只读属性
    name: string,
    age?: number // 后面加?代表可选属性，可有可无
}
let user: Person = {
    id: 333,
    name: 'jack',
    age: 30
}
```
### 对类（class）进行抽象
### Duck Typing

## 函数和推断类型

## 类Class
### 类：定义了一切事物的抽象特点；
### 对象：类的实例
### 面向对象三大特性：封装、继承、多态

## 类和接口

## enums

## 泛型(Generics)
### 在使用时定义类型的一种特征

## 类型别名和类型断言
### type aliases
```bash
type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver):string{
    if(typeof n === 'string'){
        return n
    } else {
        return n()
    }
}
```
### type assertion
```
function getLength(input: string | number) : number {
    if((<string>input).length){
        return (<string>input).length
    } else {
        return input.toString().length
    }
}

```

## 声明文件
```bash
declare var jQuery:(selector:string) => any
```