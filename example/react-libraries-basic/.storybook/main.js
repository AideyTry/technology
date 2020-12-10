/*
 * @Author: your name
 * @Date: 2020-12-09 16:31:01
 * @LastEditTime: 2020-12-10 16:15:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \technology\example\react-libraries-basic\.storybook\main.js
 */

  // require('../src/styles/index.scss')
const path = require('path');

module.exports = {
    "stories": [
      "../src/**/*.stories.mdx",
      "../src/components/**/*.*.@(js|jsx|ts|tsx)"
    ],
    "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/preset-create-react-app"
    ],
    webpackFinal: async (config, { configType }) => {
      // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
      // You can change the configuration based on that.
      // 'PRODUCTION' is used when building the static version of storybook.
      console.log('__dirname===', __dirname)
      // Make whatever fine-grained changes you need
      config.module.rules.push({
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      });
  
      // Return the altered config
      return config;
    }
  }