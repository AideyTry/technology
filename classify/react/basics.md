<!--
 * @Description: This is React basics.
 * @Author: dailinbo
 * @Date: 2019-11-26 09:32:59
 * @LastEditors: Aiden
 * @LastEditTime: 2020-10-28 13:20:06
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

#### 基础知识
##### props
```bash
props是外部传入的，不能发生改变
```
##### state
```bash
state是私有的，完全受控于当前的组件，state是可以发生变化的
```

##### 组件的生命周期
```bash
挂载时

更新时

卸载时
```