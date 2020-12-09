/*
 * @Author: your name
 * @Date: 2020-12-09 16:23:15
 * @LastEditTime: 2020-12-09 16:23:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \technology\example\react-libraries-basic\.storybook\webpack.config.js
 */
module.exports = ({ config }) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [require.resolve("babel-preset-react-app")]
          }
        }
      ]
    });
  
    config.resolve.extensions.push(".ts", ".tsx");
  
    return config;
  };