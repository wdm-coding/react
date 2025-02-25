import { createSlice } from "@reduxjs/toolkit";

const paramsStore = createSlice({
  name: "params",
  initialState: {
    params: {},
  },
  reducers: {
    setParams(state, action) {
      state.params = { ...action.payload };
    },
  },
});
const paramsReducer = paramsStore.reducer;
export const { setParams } = paramsStore.actions;
export default paramsReducer;