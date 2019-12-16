<!--
 * @Description: This is Webpack Basic.
 * @Author: dailinbo
 * @Date: 2019-12-07 09:14:49
 * @LastEditors: dailinbo
 * @LastEditTime: 2019-12-16 14:08:25
 -->
## Webpack基础
### 1、什么是Webpack

### 2、初始化项目

### 3、快速上手

#### 3.1、Webpack核心概念
##### Loader: 将非js模块转换为js模块
##### Entry -> Module -> Loader -> Plugin -> Output
###### css转换js分两步，第一步拿到css内容，第二步插入到页面中去。
###### css-loader  获取css内容，处理导入的只有，并将结果返回给style-loader
###### style-loader 创建style标签，并将内容插入到页面中
###### hash有三种： hash(32位)  chunkHassh(代码块的hash)  contentHash(内容hash)
###### hash作用： 防止缓存，因为浏览器或者cdn缓存的时候是以url为依据的，如果url不一样缓存就会失效，url一样缓存就会生效。
###### 插件html-webpack-plugin,这个插件作用：产出html文件，在编译的时候会读取模板文件。

###### devServer,如果用了devServer,那么所有的产出的文件都会写到内存里，而不是写入到硬盘上。因为为了速度快。

###### 手工引入图片

###### file-loader  把文件拷贝过去返回一个新的路径
###### url-loader 实际上是对file-loader的增强，内置了file-loader

#### 3.2 配置webpack(前提先初始化项目 npm init -y或yarn init -y)
##### npm install webpack webpack-cli -D
##### npm 初始化项目默认是ISC许可证协议，yarn默认是MIT
###### 编译webpack依靠webpack.cmd可执行文件（在node_modules目录下的bin目录下面）
###### webpack打包后的文件实际上是一个自调用（自执行）函数
### 4、配置开发服务器
#### webpack-dev-server 会启动一个http服务器，服务器会监听一个端口号
#### 默认情况下会把当前目录作为项目的根目录，因此需要设置contentBase
#### "webpack-dev-server --open" // 启动服务器后自动打开浏览器

### 5、支持加载css文件
    * test: 匹配处理文件的扩展名的正则表达式
    * use: loader名称，就是你要使用的模块的名称
    * include/exclude: 手动指定必须处理的文件夹或屏蔽不需要处理的文件夹
    * query： 为loaders提供额外的选项。
#### loader 在webpack中进行单一执行原则，一个loader只做一件事情
#### 什么是loader?通过使用loader,webpack可以把不同的文件都转换成js文件，