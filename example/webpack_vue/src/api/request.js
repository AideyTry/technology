/*
 * @Author: Aiden
 * @Date: 2021-02-01 17:46:02
 * @LastEditTime: 2021-06-22 16:10:39
 * @LastEditors: Aiden
 * @Description: 网络请求通用功能
 * @Email: aiden.dai@bayconnect.com.cn
 */

import axios from "axios";
// import Vue from "vue";
// import { getToken } from '@/utils/auth'

// Create network request
const ajax = axios.create({
  baseURL: process.env.API_SERCER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60 * 100000,
});

// Intercept request
ajax.interceptors.request.use(
  (config) => {
    // config.headers.token = getToken() || '666'
    // Vue.cookie.set("token", config.headers.token, { expires: "ID" });
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercept response
ajax.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if (error.response.data.result === 401) {
    //   window.location.replace("/login");
    //   return;
    // }
    // return error.response;
    console.log('error====', error)
  }
);

export default ajax;
