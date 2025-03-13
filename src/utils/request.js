// axios的封装
import axios from 'axios'
// 注入token
import { getItem } from '@/utils' // 获取token

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false
    if (getItem('token') && !isToken) {
      config.headers['Authorization'] = 'Bearer ' + getItem('token') // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response =>{
    const status = response.status
    if (status === 200) {
      const {code,msg} = response.data
      if(code === 0){
        return response.data
      }else{
        // 错误处理
        return Promise.reject(msg)
      }
    }
    if(status === 401) {
      // 处理token失效问题,重新登录等操作
      return Promise.reject('未授权，请登录')
    }
    if(status === 403) {
      // 没有权限
      return Promise.reject('没有权限')
    }
    if(status === 404) {
      // 请求地址出错
      return Promise.reject('网络异常')
    }
    if(status === 500) {
      // 服务器内部错误
      return Promise.reject('服务器异常')
    }
    return Promise.reject('未知异常')
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
