import { useEffect,useState } from "react";
let compCount = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
function UseEffectHook(){
    compCount++
    console.log(`组件渲染${compCount}次`);
    const [list,setList] = useState([]);
    const [obj,setObj] = useState({name:'xxx'});                           
    // 1.没有依赖项，组件每次渲染都会执行
    useEffect(()=>{
        count1++
        console.log(`useEffect没有依赖项执行${count1}次`)
    })
    // 2.依赖项为空数组，组件渲染时执行一次
    useEffect(()=>{
      count2++
      console.log(`useEffect依赖项为空数组执行${count2}次`)
    },[])
    // 3.依赖项为list，当list变化时执行
    useEffect(()=>{
      count3++
      console.log(`useEffect依赖项为list执行${count3}次`)
    },[list])
    // 4.useEffect清除副作用，相当于组件卸载时执行
    useEffect(()=>{
      const timer =  setInterval(()=>{
        console.log('定时器执行中')
      },1000)
      return ()=>{
        clearInterval(timer)
        console.log('组件卸载')
      }
    },[])

    const handleClick = ()=>{
        // setList执行多次，组件会重新渲染多次
        setList([...list,1])
    }
    const handleClick2 = ()=>{
      setObj({...obj,name:'www'})
    }
    return (
      <div>
        <h3>UseEffectHook</h3>
        <button onClick={handleClick}>点击{list}</button>
        <button onClick={handleClick2}>点击{obj.name}</button>
      </div>
    );
}

export default UseEffectHook;