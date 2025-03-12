import {createSlice} from "@reduxjs/toolkit";
import {setItem,getItem} from '@/utils'
// 1.创建slice对象
const userStore = createSlice({
    name: "user", // 切片名称，唯一标识
    initialState: { // 初始状态
      token:getItem("token") || null,
      userInfo: {
        name: "xxx",
        age: 18,
        gender: "男"
      },
    },
    reducers:{ // 同步操作函数集合，每个方法对应一个action类型
      SetToken:(state,action)=>{
        setItem("token",action.payload)
        state.token = action.payload;
      },
      SetUserInfo:(state,action)=>{
        state.userInfo = action.payload;
      }
    }
})

// 异步登录操作函数，获取token
const userLogin = (params)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            // 模拟登录成功，获取token
            const {phone,password} = params
            const token = `Login_Token_${phone}_${password}`;
            dispatch(SetToken(token));
        },1000);
    }
}
// 2.从slice对象中导出action创建函数和reducer函数
const {SetUserInfo,SetToken} = userStore.actions;
const userReducer = userStore.reducer;
// 3.导出action创建函数和reducer函数
export {SetUserInfo,SetToken,userLogin};
export default userReducer;