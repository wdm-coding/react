import {memo,useState,useCallback} from 'react'
import {Button} from 'antd';
const Input = memo(function Input({onChange}){
    console.log('Input 渲染了');
    return (
        <div>
            <div style={{marginBottom:'15px'}}>Input</div>
            <input type='text' onChange={(e)=>{onChange(e.target.value)}}/>
        </div>
    )
})
function UseCallbackHook(){
    console.log('UseCallbackHook 渲染了');
    // onChange函数是引用类型，相当于子组件的props，当父组件重新渲染时，子组件也会跟着重新渲染
    // const onChange = (value) => {
    //     console.log('value',value)
    // }
    // 使用useCallback包裹，可以避免不必要的渲染
    const onChange = useCallback((value)=>{
        console.log(value)
    },[])
    // 触发父组件重新渲染的按钮
    const [count,setCount] = useState(0)
    return (
        <>  
            <Input onChange={onChange}/>
            <div style={{marginTop:'15px'}}>UseCallbackHook</div>
            <Button 
                color='success'
                variant="solid" 
                onClick={()=>setCount(count+1)}
                style={{margin:'15px'}}
            >
                count:{count}
            </Button>
        </>
    )
}

export default UseCallbackHook;