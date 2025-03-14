import {useMemo,useState} from 'react';
import {Button} from 'antd';
const fib=(n)=>{
  console.log('计算属性执行了')
  if(n<=1) return n;
  return fib(n-1)+fib(n-2);
}

function UseMemoHook(){
  const [count1,setCount1] = useState(0);
  // const result = fib(count1)
  const result = useMemo(()=>fib(count1),[count1]);
  const [count2,setCount2] = useState(0);
  console.log('组件渲染了');
  return (
    <>
      <h1>UseMemoHook</h1>
      <p>result:{result}</p>
      <Button color='success' variant="solid" onClick={()=>setCount1(count1+1)}>
        count:{count1}
      </Button>
      <Button color='success' variant="solid" onClick={()=>setCount2(count2+1)} style={{marginLeft:'15px'}}>
        count:{count2}
      </Button>
    </>
  );
}
export default UseMemoHook;