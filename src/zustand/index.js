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
    name: 'my-storage', // 唯一名称
    getStorage: () => createJSONStorage(() => sessionStorage), // (key) => ...
  }
))
export default useStore;