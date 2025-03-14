import {useReducer} from 'react';
import {Button} from 'antd';
function UseReducerHook(){
    // 1.定义一个reducer函数，接收state和action作为参数
    const reducerFun = (state,action)=>{
        switch(action.type){
            case 'increment':
                return {...state,count:state.count+1}
            case 'decrement':
              return {...state,count:state.count-1}
            case 'change':
              return {...state,count:action.payload}
            default:
              return state;
        }
    }
    // 2.调用useReducer钩子，传入reducer函数和初始状态值，返回一个数组[state,dispatch]
    const [state,dispatch] = useReducer(reducerFun,{count:0});
    // 3.使用dispatch进行逻辑处理,更新state值与UI更新
    const add = ()=>{
        dispatch({type:'increment'})
    }
    const minus = ()=>{
        dispatch({type:'decrement'})
    }
    const update = (payload)=> {
      dispatch({type:'change',payload})
    }
    return (
      <>
        <h1>UseReducerHook</h1>
        <p>Count:{state.count}</p>
        <Button color="primary " variant="solid" onClick={add} style={{marginRight:'15px'}}>
          增加
        </Button>
        <Button color='danger' variant="solid" onClick={minus}>
          减少
        </Button>
        <Button color='success' variant="solid" onClick={()=>update(10)} style={{marginLeft:'15px'}}>
          更新
        </Button>
      </>
    );
}

export default UseReducerHook;