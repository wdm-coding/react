// axios的封装
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error)
  }
)

export default service
