// webpack是node写的，需要用node的写法
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", // mode 两种，默认production, 可设置development
  entry: "./src/index.js", // 入口
  output: {
    filename: "bundle.js", // 打包后的文件名
    path: path.resolve(__dirname, "dist") // 路径必须是一个绝对路径，path.resolve解析路径为绝对路径
  },
  module: {
    // 模块
    rules: [
      // 配置规则
      {
        test: /\.js$/,
        // exclude: /(node_modules|bower_components)/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: ["@babel/preset-env"]
          // },
          // plugins: ["@babel/plugin-proposal-class-properties"]
        }
      },
      {
        // css-loader解析@import这种语法的，解析路径； style-loader它把css插入到head的标签中
        // loader的特点：希望单一
        // loader的用法：用一个loader时可以用字符串；多个loader需要数组;loader还可以写成对象的方式
        // loader的顺序：默认从右向左执行，从下向上执行
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: [
          // {
          //   loader: 'style-loader',
          // },
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader" // 把less转换为css
        ]
      }
    ]
  },
  plugins: [
    // 数组，存放着所以的webpack插件
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "main.css"
    })
  ],
  devServer: {
    // 开发服务器的配置
    port: 8088,
    progress: true,
    contentBase: "./public",
    compress: true,
    open: true
  }
};
