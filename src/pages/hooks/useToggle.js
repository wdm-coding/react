import {useState} from 'react'
function useToggle(){
    // 可复用的逻辑
    const [show, setShow] = useState(true);
    const toggle = ()=>{
      setShow(!show)
    }
    // 返回一个对象，包含show和toggle两个属性
    return { show, toggle };
}
export default useToggle;