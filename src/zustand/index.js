import { create } from 'zustand'
import useUser from './user.js'
import useCount from './count.js'
import { persist,createJSONStorage } from 'zustand/middleware'
// 切片模式 + 持久化存储
const useStore = create(persist(
  (...a)=>{
      return {
        ...useUser(...a),
        ...useCount(...a)
      }
  },
  {
    name: 'zustand', // 唯一名称
    storage: createJSONStorage(() => sessionStorage), // 存储方式 localStorage | sessionStorage
    partialize: (state) => ({ count: state.count,token:state.token }) // 持久化存储的字段
  }
))
export default useStore;