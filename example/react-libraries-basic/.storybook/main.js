/*
 * @Author: your name
 * @Date: 2020-12-09 16:31:01
 * @LastEditTime: 2020-12-09 16:31:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \technology\example\react-libraries-basic\.storybook\main.js
 */
module.exports = {
    "stories": [
      "../src/**/*.stories.mdx",
      "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/preset-create-react-app"
    ]
  }