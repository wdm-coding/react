import {configureStore} from '@reduxjs/toolkit'
// 1. 引入reducer模块文件
import userReducer from './modules/userStore.js'
import paramsReducer from './modules/paramsStore.js'
// 2. 创建store根对象

const store = configureStore({
  // 3. 配置reducer对象模块文件
  reducer: {
    user: userReducer,
    params: paramsReducer,
  },
})
// 4. 导出store对象
export default store