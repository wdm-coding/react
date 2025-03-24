import { create } from 'zustand'
import useUser from './user.js'
import useCount from './count.js'
// 切片模式 + 持久化存储
const useStore = create((...a)=>{
  console.log('...a',...a);
    return {
        ...useUser(...a),
        ...useCount(...a)
    }
})

export default useStore;