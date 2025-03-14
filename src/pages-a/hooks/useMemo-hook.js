import {useMemo,useState} from 'react';
import {Button} from 'antd';
function UseMemoHook(){
  const [count1,setCount1] = useState(0);
  const [count2,setCount2] = useState(0);
  // 1.定义一个函数，接收参数并返回计算结果
  function getDouble(){
    console.log('count1执行了')
    return count1*2;
  }
  const changeCount2 = ()=>{
    console.log('count2执行了')
    setCount2(count2+1);
  }
  // 2.调用useMemo钩子，传入函数和依赖项数组
  const double = useMemo(getDouble,[count1]);
  return (
    <>
      <h1>UseMemoHook</h1>
      <p>count1:{count1}</p>
      <p>count2:{count2}</p>
      <p>count1-double:{double}</p>
      <Button color='success' variant="solid" onClick={()=>setCount1(count1+1)}>增加</Button>
      <Button color='success' variant="solid" onClick={changeCount2} style={{marginLeft:'15px'}}>增加Count2</Button>
    </>
  );
}
export default UseMemoHook;