// 根组件 
// APP -> INDEX.JS -> index.html -> root
import { useState } from "react";
function App() {
  // 定义一个状态和一个修改状态的函数
  const [count,setCount] = useState(0);
  const addCount = () => {
    // 修改状态的值,重新渲染组件,数据驱动视图
    setCount((pre)=>pre + 1);
  };
  return (
    <div className="App">
      <p>this is a react project</p>
      <p>{count}</p>
      <button onClick={addCount}>增加</button>
    </div>
  );
}

export default App;
