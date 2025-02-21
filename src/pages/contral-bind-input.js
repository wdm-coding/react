import {useState} from 'react'
function ContralBindInput(){
  const [value,setValue] = useState('init value')
  const changeValue = (e)=>{
    setValue(e.target.value)
  }
  return (
    <div>
      <h3>受控表单绑定(双向绑定)</h3>
      <p>{value}</p>
      <input type="text" value={value} onChange={changeValue}/>
    </div>
  )
}
export default ContralBindInput;