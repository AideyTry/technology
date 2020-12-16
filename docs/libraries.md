<!--
 * @Author: Aiden
 * @Date: 2020-12-02 22:12:11
 * @LastEditTime: 2020-12-16 15:53:59
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
## 完成一个组件库需要考虑的问题
### 代码结构
### 样式解决方案
### 组件需求分析和编码
### 组件测试用例分析和编码
### 代码打包输出和发布
### CI/CD, 文档生成等等

## 创建项目
### npx create-react-app demo --typescript

## 文档结构和代码规范

### 目录结构
```bash
README.md
node_modules/
package.json // 包配置文件
tsconfig.json // ts配置文件
src/
    components/
        Button/
            button.tsx
            button.test.tsx
            style.scss(组件单独的样式)
    styles/
        _variables.scss(各种变量以及可配置设置)
        _mixins.scss(全局mixins) // 解决css代码重用问题
        _functions.scss(全局functions)
    index.tsx // 默认的入口文件，把所有的模块导出
```

### 代码规范
```bash
ESLint代码检测
```

## 样式解决方案
### Inline CSS
### CSS in JS
#### 利用es6字符串模板
### Sass/Less

## 创建自己组件库的色彩体系
### 系统色板——基础色板 + 中性色板（合理的运用中性色板有利于阅读体验）  
```bash
中性色包含了黑、白、灰。合理地选择中性色能够令页面信息具备良好的主次关系，助力阅读体验

```
### 产品色板—— 品牌色 + 功能色板

## 组件库样式变量分类
### 基础色彩系统
### 字体系统
#### 主要字体家族
### 表单
### 按钮
### 边框和阴影
### 可配置开关


## Button组件需求分析
```bash
不同的Button Type
不同的Button Size
Disabled状态
```

## 测试金字塔
### 会有很多的Unit Test,一些Service Test,很少的UI Test
### 金字塔越往上用时越多
```bash
UI
    UI Test模拟真实用户场景，对整个应用进行测试
Service
   Service Test把几部分Unit Test组合起来来看它良好的工作
Unit
    Unit Test: 把代码分成单独的互相独立的部分，没有相互的依赖，测试每一部分都可以良好的工作
```
### React组件特别适合单元测试
#### Component组件
#### Function函数
#### 单向数据流 单向数据流让组件不会随便随着外部传入数据变动而去改动，只是让测试触发相应的回调即可。

## 测试框架Jest
### 断言：判断一个值是否对应相应的结果
### 每个测试用例称为一个case,case一般都会测试一个独立的功能点
### react-testing-library
#### 按照真实的用户目标出发设计测试用例，去操作真实的dom，去查找元素上面的文本。
#### jest-dom
##### jest-dom添加了一些针对dom的断言，针对更快捷的dom操作
##### yarn add --dev @testing-library/jest-dom


## Menu组件总结
### React提供的组件  displayName以及方法React.cloneElement()

## 图标
### 雪碧图
```bash
劣势：不能缩放，不能使用CSS控制
```
### Font Icon
```bash
可缩放，可CSS控制
```

### SVG
```bash
优势：
完全可控
SVG即取即用，Font Icon要下载全部字体文件
Font Icon还有很多奇怪的bug
```

### 如何实现动画
```bash
1、通过CSS实现
   transform: rotate(180deg);
2、使用react-transition-group
当display从none变为block的时候，其他的动画属性就会失效。因为display不是一个标准的支持动画的属性。
```
### transition属性不会有继承

## create-react-app目前开发的痛点
### 1、入口文件不适合管理组件库
### 2、缺少行为追踪和属性调试功能

## 组件完美开发工具应有的特点
### 1、分开展示各个组件不同属性下的状态
### 2、能追踪组件的行为并且具有属性调试功能
### 3、可以为组件自动生成文档和属性列表

## Storybook
### 1、安装
```bash
npx -p @storybook/cli sb init (会自动检测是React还是Vue框架)
```
### 2、Addon
#### @storybook/addon-info   @types/storybook__addon-info
#### 自动生成文档  react-docgen-typescript storybook中集成的有，但需要安装react-docgen-typescript-loader

## input
### 开发公共组件库需要的四部分构成
#### 1、编写主体文件
#### 2、样式文件
#### 3、写测试用例
#### 4、编写文档

## upload
### 网络请求axios
### 在线的mock server
#### JSONPlaceholder 目前elementUi在用
#### mocky.io
### 四种常见的 POST 提交数据方式
#### https://www.cnblogs.com/jpfss/p/10449287.html