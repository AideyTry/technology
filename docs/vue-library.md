<!--
 * @Author: Aiden
 * @Date: 2021-03-09 16:16:48
 * @LastEditTime: 2021-07-01 18:14:46
 * @LastEditors: Aiden
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
-->
## 一、首先初始化仓库并创建相应的目录
### 1、初始化项目npm init
### 2、创建目录结构
   - |build 配置webpack打包文件
     - |webpack.base.js 公共的webpack配置
     - |dev.js 用于本地调试查看组件的webpack配置
     - |prod.js 最终打包上线的webpack配置
   - |example 用于调试本地查看开发的组件库
   - |lib 存放打包后的组件库
   - |packages 组件库源码
   - |test 测试用例文件
   - |.eslintrc eslint配置
   - |.gitignore 在git中忽略掉问个文件
   - |jest.config.js jest测试配置
   - |LICENSE 许可证权限
   - |_package.json：对项目和模块包的描述
   - |_yarn.lock: 锁定版本

### 3、webpack配置
#### (1)、webpack.base.js
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|gif|bmp)$/,
        use: [
          {
            loader: "url-loader", // url-loader是在file-loader基础上进行的增强,用的时候需要安装file-loader
            options: {
              name: "[hash:10].[ext]", // 输出时名称修改，保持原有格式
              esModule: false, // 默认是ture为es6模块，es6模块时，需要取对象里面的default
              limit: 32 * 1024, //如果文件的体积小于limit,小于32K的话，就转换为base64字符串内嵌到html中
            },
          },
        ],
      },
    ],
  }
};
``` 

#### (2)、dev.js配置
```js
const { resolve } = require("path");
const { merge } = require('webpack-merge');
const common = require("./webpack.base.js");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')
module.exports = merge(common, {
  mode: "development",
  entry: "./example/index.js",
  output: {
    path: resolve(__dirname, "../example/dist"),
    filename: "main.js",
  },
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: resolve(__dirname, "../example/public"), // 内容的基本路劲,可加载静态资源
    compress: true, // 是否开启压缩
    port: 8000,
    open: true,
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js', //
      'packages': '../packages',
      'lib': '../lib'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: resolve(__dirname, "../example/public", "index.html"),
    })
  ]
});

```

#### (3)、prod.js配置
```js
const { resolve } = require("path");
const { merge } = require("webpack-merge");
const { VueLoaderPlugin } = require('vue-loader')
const common = require("./webpack.base.js");
module.exports = merge(common, {
  mode: "production",
  entry: "./packages/main/index.js",
  output: {
    path: resolve(__dirname, "../lib"),
    filename: "main.js",
    library: "@ccm/ui",
    libraryTarget: "umd", // 通用模块定义
    umdNamedDefine: true,
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
  },
  plugins: [
    new VueLoaderPlugin()
  ]
});

```

#### (4)、Eslint配置
webpack.config.js文件
```js
{
    test: /\.(js|vue)$/,
    use: 'eslint-loader', // 先指定代码校验，然后再编译代码
    enforce: 'pre', // 强制指定书序 在之前执行
    options: {fix:true}, //启动自动修复
    exclude: [/node_modules/, resolve(__dirname, '../lib')],
}
```

.eslintrc.js文件
```js
module.exports = {
    root: true, //根配置文件
    extends: ['plugin:vue/recommended', 'eslint:recommended'], // 继承eslint-plugin-vue规则
    // 指定解析器选择
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: "module",
        ecmaVersion: 2015
    },
    // 指定脚本的运行环境
    env: {
        browser: true
    },
    // 启用规则以及各自的错误级别
    rules: {
        "indent": ["error": 2], // 缩进风格
        "no-console": "error" // 禁止使用console.log
    }
}
```

#### 5、按需加载
##### https://github.com/ant-design/babel-plugin-import



##### 6、markdown在线文档