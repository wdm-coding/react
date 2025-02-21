import {useRef} from 'react'
function GetDom(){
  const inputRef = useRef(null)
  return (
    <div>
      <h3>获取DOM</h3>
      <input ref={inputRef} type='text'/>
      <button onClick={()=>console.log('inputRef',inputRef.current)}>
        获取dom
      </button>
    </div>
  )
}
export default GetDom;