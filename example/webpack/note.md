<!--
 * @Author: Aiden
 * @Date: 2020-09-03 10:37:41
 * @LastEditTime: 2020-09-03 16:47:05
 * @LastEditors: Aiden
 * @Description: 
-->
### webpack安装
#### yarn add webpack webpack-cli -D
### webpack可以进行0配置(默认的比较弱)
- 打包工具 -> 输出后的结果(js模块)
- 打包（默认支持js的模块化）
### 手动配置webpack
- 默认配置文件的名字: webpack.config.js
- webpack是node写出来的，需要node的写法
- 打包后的js文件是一个自调用函数，参数为一个对象，对象有几部分，第一部分是一个key(当前模块的路径),第二部分是value（一个函数）,
- 配置自定义webpack文件名称  脚本中添加配置 --config 文件名

### babel
#### babel-loader 进行转换的加载器
#### @babel/core babel的核心模块，可以调用transform方法进行转换源代码
#### @babel/preset-env 转换模块，将es6转换为es5
