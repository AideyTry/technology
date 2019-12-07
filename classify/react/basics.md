<!--
 * @Description: This is React basics.
 * @Author: dailinbo
 * @Date: 2019-11-26 09:32:59
 * @LastEditors: dailinbo
 * @LastEditTime: 2019-11-26 11:15:18
 -->
### 纯函数概念
#### 函数不会修改入参，多次调用下相同的入参始终返回相同的结果，例：
```
    function sum(a, b) {
        return a + b;
    }
```
#### setInterval运作机制

#### React中组件名称默认为导出时设置的名称，也可以通过displayName设置 例如
```
    export default class clock extends Component{
        static displayName='timer'
    }
```