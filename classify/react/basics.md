<!--
 * @Description: This is React basics.
 * @Author: dailinbo
 * @Date: 2019-11-26 09:32:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-09 19:32:32
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

##### Hook
###### Hook是在函数组件中钩入React特性的函数，使用函数式组件代替class的一种写法。
###### 1、React推出Hook是爲了更好的解決狀態復用邏輯
###### 2、复杂组件难以理解，尤其是生命周期函数
###### 3、React组件一直是函数，使用Hook完全拥抱函数

##### useState

##### useEffect
###### 无需清除的Effect
```bash
如发送网络请求；手动更新DOM
```
###### 需要清除的Effect
```bash
例如添加DOM事件，清除就很重要，为了防止引起的内存泄露
```