<!--
 * @Description: This is Webpack Basic.
 * @Author: dailinbo
 * @Date: 2019-12-07 09:14:49
 * @LastEditors: dailinbo
 * @LastEditTime: 2019-12-10 09:51:45
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
###### hash有三种： hash(32位)  chunkHassh  contentHash
###### hash作用： 防止缓存，因为浏览器或者cdn缓存的时候是以url为依据的，如果url不一样缓存就会失效，url一样缓存就会生效。
###### 插件html-webpack-plugin,这个插件作用：产出html文件，在编译的时候会读取模板文件。

###### devServer,如果用了devServer,那么所有的产出的文件都会写到内存里，而不是写入到硬盘上。因为为了速度快。