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