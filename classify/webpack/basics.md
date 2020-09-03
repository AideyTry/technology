<!--
 * @Description: This is Webpack Basic.
 * @Author: dailinbo
 * @Date: 2019-12-07 09:14:49
 * @LastEditors: Aiden
 * @LastEditTime: 2020-09-03 10:35:22
 -->
## Webpack基础
### 1、什么是Webpack
#### 是一个打包工具，打包成输出后的结构
### 2、初始化项目
#### 安装本地的webpack  webpack-cli

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

### 6、文件的处理
#### file-loader 文件加载的loader,文件包括图片、图标、字体等,相当于把文件拷贝过去返回一个新的路径。
#### ulr-loader  在file-loader基础上做的扩展

### 7、打包前先清空dist目录
#### clean-webpack-plugin

### 8、分离css
#### 因为css的下载和js可以并行（Chrome浏览器可以并行下载多个资源），当一个html文件很大的时候，我们可以把css单独提取出来加载，这样来提高速度。
#### 使用插件mini-css-extract-plugin,会收集所有的css文件

### 9、压缩css和js
#### 压缩js的terser-webpack-plugin(unlifyjs-webpack-plugin不支持es6) 和 压缩css的optimize-css-assets-webpack-plugin

### css和image存放单独目录

### 10、文件指纹
#### 打包后输出的文件和后缀
#### hash代表本次的编译，每当编译一次，hash会变，所有的产出的资源hash都一样。
#### chunkhash，本次代码块的hash,哪个代码块文件发生了变化，hash值才会改变
#### contenthash, 内容hash,只要模块内容未发生变化则hash值不会变化

### 11、在html中使用图片
#### html-withimg-loader

### 包前面带@的含义：类型的声明，单独留的一个仓库，代表一类库。