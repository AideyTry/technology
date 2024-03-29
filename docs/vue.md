<!--
 * @Author: Aiden
 * @Date: 2021-03-23 11:17:31
 * @LastEditTime: 2021-11-25 17:27:43
 * @LastEditors: Aiden(戴林波)
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
-->
## Vue重点知识点
###  Vue3兼容了Vue2里面90%内容
### Vue3
#### Vue3新特性
![vue3](/images/vue3_feature.webp)
#### Vue2是否升级到Vue3
![vue2.7](/images/vue升级.webp)
#### 项目结构图
```
├── README.md
├── index.html           入口文件
├── package.json
├── public               资源文件
│   └── favicon.ico
├── src                  源码
│   ├── App.vue          单文件组件
│   ├── assets
│   │   └── logo.png
│   ├── components   
│   │   └── HelloWorld.vue
│   └── main.js          入口
└── vite.config.js vite工程化配置文件
```
#### Vue3工程体系图
![vue3](/images/vue3.webp)

#### Vue3项目启动
```
npm init @vitejs/app
```
![vue3](/images/vue3_install.webp)
#### Vite

#### 响应式
![响应式](/images/响应式.webp)
 - Vue2的响应式原理defineProperty
    ```js

    let getDouble = n=>n*2
    let obj = {}
    let count = 1
    let double = getDouble(count)

    Object.defineProperty(obj,'count',{
        get(){
            return count
        },
        set(val){
            count = val
            double = getDouble(val)
        }
    })
    console.log(double)  // 打印2
    obj.count = 2
    console.log(double) // 打印4  有种自动变化的感觉
    ```
 - Vue3的Proxy
   ```js
    let proxy = new Proxy(obj,{
        get : function (target,prop) {
            return target[prop]
        },
        set : function (target,prop,value) {
            target[prop] = value;
            if(prop==='count'){
                double = getDouble(value)
            }
        },
        deleteProperty(target,prop){
            delete target[prop]
            if(prop==='count'){
                double = NaN
            }
        }
    })
    console.log(obj.count,double)
    proxy.count = 2
    console.log(obj.count,double) 
    delete proxy.count
    // 删除属性后，我们打印log时，输出的结果就会是 undefined NaN
    console.log(obj.count,double) 
   ``` 
#### [Vueuse](https://vueuse.org/)

#### 组件化
目的：实现高效的代码复用
- 通用组件

  包含：按钮、表单、弹框等通用功能

- 业务组件

  包含：登录注册、购物车等

### 现代Web应用的三大构成：组件、数据、路由。

### Vuex
- Vuex 就相当于我们项目中的大管家，集中式存储管理应用的所有组件的状态。
- 什么时候的数据用 Vuex 管理，什么时候数据要放在组件内部使用 ref 管理呢？

  对于一个数据，如果只是组件内部使用就是用 ref 管理；如果我们需要跨组件，跨页面共享的时候，我们就需要把数据从 Vue 的组件内部抽离出来，放在 Vuex 中去管理。
