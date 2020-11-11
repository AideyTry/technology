/*
 * @Author: your name
 * @Date: 2020-11-11 14:59:18
 * @LastEditTime: 2020-11-11 16:05:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \technology\example\ts-with-react\src\utils\request.ts
 */




import axios from 'axios'

// 创建axios实例
const service = axios.create({
    baseURL: 'https://yapi.baidu.com/mock/11395'
})


export default service