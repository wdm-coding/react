import {useRef,forwardRef,useImperativeHandle} from 'react'
import {Button} from 'antd'
const Son = forwardRef(function({},ref){
  // 子组件方法
  const sonFun = () => {
    console.log('子组件方法执行了')
  }
  // 用useImperativeHandle来自定义暴露给父组件的实例值
  useImperativeHandle(ref,() => ({
    ref:ref.current,// 暴露给父组件的实例值，这里的ref.current就是子组件的dom元素
    sonFun // 子组件方法暴露给父组件
  }))
  return (
    <div ref={ref}>我是子组件</div>
  )
})

function ForwordRefHoc(){
  const sonRef = useRef(null);
  const getInstanceByDom = () => {
    console.log('父组件',sonRef.current);
  }
  // 父组件调用子组件方法
  const callSonFun = () => {
    sonRef.current.sonFun();
  }
  return (
    <>
      <Son ref={sonRef}></Son> 
      <div>我是父组件-forwordRef</div>
      <Button 
          color='success'
          variant="solid" 
          onClick={getInstanceByDom}
          style={{margin:'15px'}}
      >
          获取子组件实例
      </Button>
      <Button 
          color='success'
          variant="solid" 
          onClick={callSonFun}
          style={{margin:'15px'}}
      >
          调用子组件方法
      </Button>
    </>
  )
}

export default ForwordRefHoc;