/*
 * @Author: your name
 * @Date: 2020-12-09 16:31:01
 * @LastEditTime: 2020-12-11 21:44:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \technology\example\react-libraries-basic\.storybook\main.js
 */

// require('../src/styles/index.scss')
// import '../src/styles/index.scss';
const path = require("path");

module.exports = {
  stories: [
    // "../src/styles/index.scss",
    "../src/**/*.stories.mdx",
    "../src/components/**/*.*.@(js|jsx|ts|tsx)",
  ],
  addons: [
    // "@storybook/preset-create-react-app",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss"
  ],
  webpackFinal: async (config, { configType }) => {
    // console.log("config===", config);
    // config.entry.push(path.join(__dirname, "..", "a.scss"));
    config.entry.push(path.join(__dirname, "..", "src/styles/index.scss"));
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    console.log("__dirname===", __dirname);
    // Make whatever fine-grained changes you need
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ["style-loader", "css-loader", "sass-loader"],
    //   include: path.resolve(__dirname, "../"),
    // });

    // Return the altered config
    return config;
  },
};
