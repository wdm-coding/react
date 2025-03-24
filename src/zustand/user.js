
import { persist,createJSONStorage } from 'zustand/middleware'
const useUser = persist(
  set=>({
    token: null,
    // 异步获取token
    setToken: async () => {
      const res = await new Promise(resolve => setTimeout(() => resolve("token-wdm-0620"), 1000));
      set({ token: res });
    }
  }),
  {
    name: 'user', // 唯一名称
    storage: createJSONStorage(() => sessionStorage) // 存储方式，默认为localStorage
  }
)
export default useUser;