
import request from '../utils/request'

export function userInfo(url: string){
    return request({
        url,
        method: 'get'
    })
}