import {createSlice} from "@reduxjs/toolkit";
// 1.创建slice对象
const userStore = createSlice({
    name: "user", // 切片名称，唯一标识
    initialState: { // 初始状态
      userInfo: null,
    },
    reducers:{ // 同步操作函数集合，每个方法对应一个action类型
      SetUserInfo:(state,action)=>{
          state.userInfo = action.payload;
      }
    }
})
// 2.从slice对象中导出action创建函数和reducer函数
const {setUserInfo} = userStore.actions;
const userReducer = userStore.reducer;
// 3.导出action创建函数和reducer函数
export {setUserInfo};
export default userReducer;