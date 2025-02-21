import ChildOne from "./child-one";
import { useState } from "react";
function Father(){
  const name = 'son-one';
  const info = {
    age: 18,
    sex: 'male',
    arr:[1,2,3],
    jsx: <strong style={{color:'red'}}>jsx数据</strong>,
    fn:()=>{console.log('fn')},
    obj:{a:1,b:2},
    date: new Date()
  }
  const [sonMsg,setSonMsg] = useState('')

  const changeHandler = (msg)=>{
    setSonMsg(msg)
  }
  return (
    <div>
      <h3>父子组件通信</h3>
      <ChildOne name={name} {...info} onGetSonMsg={changeHandler}>
        <h1>我是props.children</h1>
      </ChildOne>
      <h2>子传父</h2>
      <p>{sonMsg}</p>
    </div>
  )
}
export default Father;