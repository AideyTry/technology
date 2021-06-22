/*
 * @Author: Aiden
 * @Date: 2021-06-22 10:23:23
 * @LastEditTime: 2021-06-22 16:34:29
 * @LastEditors: Aiden
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
 */
import request from './request'
export const mockLogin = params => {
    return request.post('/user/login', params)
}

export const getUserinfo = () => {
    return request.post('/user/getUserinfo')
 }

 export const mockGetUserinfo = () => {
    return request.post('/user/mockGetUserInfo')
 }