/*
 * @Author: Aiden
 * @Date: 2020-09-03 10:38:21
 * @LastEditTime: 2020-09-06 14:37:52
 * @LastEditors: Aiden
 * @Description:
 */
import "@babel/polyfill";
require("./index.less");
import React from "react";
import ReactDom from "react-dom";
import { Select } from "antd";
const { Option } = Select;
const App = () => (
  <div>
    hello react444444444466666
    <Select defaultValue="lucy" style={{ width: "120px" }} allowClear>
      <Option value="lucy">Lucy</Option>
      <Option value="jack">jack</Option>
    </Select>
  </div>
);
ReactDom.render(<App />, document.getElementById("root"));
