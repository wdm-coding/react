
const useCount = (set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  asyncHandler: async () => {
   const result = await new Promise((resolve) => setTimeout(()=>resolve(666), 1000));
    set((state) => ({ count: state.count + result }));
  }
})

export default useCount;