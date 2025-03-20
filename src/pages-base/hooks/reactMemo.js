import { memo,useState,useMemo } from "react";
import {Button} from 'antd';
// 子组件
function Child1({name}){
  console.log("Child1子组件渲染了");
  return (
    <div>
      <h3>我是子组件</h3>
      <p>name:{name}</p>
    </div>
  );
}
function Child2({info}){
  console.log("Child2子组件渲染了");
  return (
    <div>
      <h3>我是子组件</h3>
      <p>{JSON.stringify(info)}</p>
    </div>
  );
}
// 子组件使用memo包裹子组件，让其变成记忆组件
const ChildMemo1 = memo(Child1);
const ChildMemo2 = memo(Child2);
// 父组件
function ReactMemo(){
    console.log("父组件渲染");
    // 当传递的props是基本类型，这里修改name会导致子组件重新渲染，因为name是父组件传递给子组件的props的一部分
    const [name, setName] = useState("张三") 
    // 这里修改count不会导致子组件重新渲染，因为count不是父组件传递给子组件的props的一部分
    const [count, setCount] = useState(0) 
    // 当传递的数据是对象或数组，即使内容没有变化，也会导致子组件重新渲染(会比较引用是否相同)
    const [age, setAge] = useState(18);
    const info = {sex:'男',age};
    // 如何解决这个问题，可以使用useMemo包裹info
    const memoInfo = useMemo(()=>info,[age]);
    return(
      <>
        <div>我是父组件</div>
        <Button color='success' variant="solid" onClick={()=>setCount(count+1)} style={{margin:'15px'}}>
          修改count:{count}
        </Button>
        <ChildMemo1 name={name}/>
        <Button color='success' variant="solid" onClick={()=>setName('李四')} style={{margin:'15px'}}>
          修改name
        </Button>
        <ChildMemo2 info={memoInfo}/>
        <Button color='success' variant="solid" onClick={()=>setAge(10)} style={{margin:'15px'}}>
          修改age
        </Button>
      </>
    );
}

export default ReactMemo