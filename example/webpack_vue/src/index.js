/*
 * @Author: Aiden
 * @Date: 2021-06-11 10:38:31
 * @LastEditTime: 2021-06-16 16:44:05
 * @LastEditors: Aiden
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
import Vue from 'vue';
import '@ccm/ui/lib/theme-chalk/index.css'
import CcmUI from '@ccm/ui'

import './style/index.scss';
import App from './App.vue'

Vue.use(CcmUI)

new Vue({
    render: h => h(App)
}).$mount('#root')

const sum = (a,b) => a + b
const s = sum(3,8)
console.log(666)
console.log('s=', s)