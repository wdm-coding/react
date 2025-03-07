import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const paramsStore = createSlice({
  name: "params",
  initialState: {
    params: {},
    list:[]
  },
  reducers: {
    setParams(state, action) {
      state.params = { ...action.payload };
    },
    setList(state, action) {
      state.list = [...action.payload];
    },
  },
});
const { setParams,setList } = paramsStore.actions;
// 异步操作
const getList = () => {
  // 返回一个函数，该函数接收dispatch作为参数
  return async (dispatch)=>{
    // 发送异步请求，获取数据
    const {data} = await axios.get(`http://localhost:3004/comment`)
    const {code, result} = data
    if(code === 0){
      // 更新状态
      dispatch(setList(result))
    }
  }
}

const paramsReducer = paramsStore.reducer;

export {getList,setParams,setList}
export default paramsReducer;