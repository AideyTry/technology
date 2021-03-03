<!--
 * @Author: Aiden
 * @Date: 2021-03-03 09:54:45
 * @LastEditTime: 2021-03-03 13:43:15
 * @LastEditors: Aiden
 * @Description: 
 * @FilePath: \technology\classify\webpack\webpack5.md
 * 可以输入预定的版权声明、个性签名、空行等
-->
# Webpack要掌握的
- 实战使用
- webpack优化
- webpack工作流  AST抽象语法树
- loader
- plugin tapable
- hmr实现原理

## 一、介绍
### webpack 是一个用于现代 JavaScript 应用程序的_静态模块打包工具
### 安装 yarn add webpack webpack-cli -D
### 默认配置文件名称是: webpack.config.js,修改名称：
```js
"scripts": {
    "build": "webpack --config build.js"
}
```
### 1、入口entry
### 2、输出output
#### resolve会把相对路径变成绝对路径
#### join只是进行机械的连接
#### __dirname是指当前的文件所在的目录
### 3、loader
#### webpack只能理解JavaScript和JSON文件，这是webpack开箱可用的自带功能。webpack能够把任何类型的模块打包成js模块。
#### loader(加载器)让webpack能够去处理其他类型的文件，并将它们转换为有效模块，以供应用程序使用，以及被添加到依赖图中。
##### loader能够把任何类型的模块转换为js模块
```
loader本质上是一个函数
接收源文件，返回一个JS模块代码
```
```
在webpack的配置中，loader有两个属性：
（1）、test属性，识别出哪些文件会被转换；
（2）、use属性，定义出在进行转换时，应该使用哪个loader.
```

### 4、plugin

### 5、webpack-dev-server
#### 安装 yarn add webpack-dev-server -D
```js
// devServer会启动一个HTTP开发服务器，把一个文件夹作为静态根目录
// 为了提高性能，使用的是内存文件系统
devServer: {
    contentBase: resolve(__dirname, 'dist'), // 内容的基本路劲
    writeToDisk: true, // 如果指定此选项，也会把打包后的文件下入硬盘一份
    compress: true, // 是否开启压缩
    port: 8000,
    open: true // 自动打开浏览器
}
```