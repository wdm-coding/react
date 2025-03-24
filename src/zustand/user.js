
const useUser = set=>({
  token: null,
  // 异步获取token
  setToken: async () => {
    const res = await new Promise(resolve => setTimeout(() => resolve("token-wdm-0620"), 1000));
    set({ token: res });
  }
})
export default useUser;