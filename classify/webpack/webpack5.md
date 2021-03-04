<!--
 * @Author: Aiden
 * @Date: 2021-03-03 09:54:45
 * @LastEditTime: 2021-03-04 15:19:16
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

#### css-loader用来翻译处理@import和url()
#### style-loader可以把css插入到DOM中去

#### node-sass sass-loader
```
注意：node-sass有时候安装会失败
https://segmentfault.com/a/1190000020993365?utm_source=tag-newest
```

### 4、plugin

### 5、webpack-dev-server
#### 安装 yarn add webpack-dev-server -D
```js
// devServer会启动一个HTTP开发服务器，把一个文件夹作为静态根目录
// 为了提高性能，使用的是内存文件系统
devServer: {
    contentBase: resolve(__dirname, 'static'), // 内容的基本路劲,告诉服务器内容的来源。仅在需要提供静态文件时才进行配置
    writeToDisk: true, // 如果指定此选项，也会把打包后的文件下入硬盘一份
    compress: true, // 是否开启压缩
    port: 8000,
    open: true, // 自动打开浏览器
    publicPath: '/' // 以将捆绑软件放在特定目录下
}
```

### 6、引入图片的方式
- 放在静态文件根目录里，通过html中的image直接引用，需要配置`devServer.contentBase`
- 通过require import 引入
- 可以在css中通过 url引入图片 css-loader来进行解析处理
- 在html中直接通过相对路径引入 html-loader来处解析处理

```js
 file-loader作用
1.拷贝图片
2.把图片模块变成JS模块
```

### 7、bable-loader
- Babel其实是一个编译JavaScript的平台，可以把ES6/ES7,React的JSX转义为ES5
- 安装 yarn add -D babel-loader @babel/core @babel/preset-env
```
babel-loader使Bable和webpack转义JavaScript文件
@babel/core Babel编译的核心包
@babel/preset-env 为每一个环境的预设，将新版本的语法转换为ES5
@babel/preset-react React插件的Babel预设
@babel/plugin-proposal-decorators 把类和对象装饰器编译成ES5
@babel/plugin-proposal-class-properties转换静态类属性以及使用属性初始化语法声明的属性
包的关系
/**
* babel-loader 作用是调用@babel/core
* @babel/core本身只是提供一个过程管理功能，把源代码抽象成语法树，进行遍历和生成，它本身也不知道具体要转换成什么语法以及如何转换
* @babel/preset-env 具体转换为什么语法

1.先把ES6转换成ES6语法树  @babel/core
2.然后调用预设@babel/preset-env把ES6语法树转换成ES5语法树 @babel/preset-env
3.再把ES5语法树重新生成es5代码 @babel/core
**/
```

