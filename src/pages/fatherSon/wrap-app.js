
import {createContext,useContext} from 'react';

// 1.createContext创建上下文对象
const MyContext = createContext();
function A(){
  return (
    <div>
      <p>A组件</p>
      <B />
      <C />
    </div>
  );
}
function B(){
  // 3.使用Context.Consumer渲染子组件，并通过value属性获取上下文数据
  const ctxValue = useContext(MyContext);
  return (
    <div>
      <p>B组件</p>
      <p>通过useContext(MyContext)获取上下文数据：{ctxValue}</p>
    </div>
  )
}

function C(){
  return (
    <MyContext.Consumer>
      {value => (
          <div >
            <p>C组件</p>
            <p>通过MyContext.Consumer：{value}</p>
          </div>
        )
      }
    </MyContext.Consumer>
    );
}
// 2.createContext创建上下文对象的Provider在祖先组件上包裹要共享数据的子组件


function WrapApp(){
    return (
      <div>
        <p>WrapApp组件</p>
        <MyContext.Provider value="我是顶层组件的数据">
          <A />
        </MyContext.Provider>
      </div>
    );
}
export default WrapApp;