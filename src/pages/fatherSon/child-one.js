function ChildOne(props){
  console.log('ChildOne',props);
  return (
    <div>
      <p>ChildOne name is {props.name}</p>
      <p>ChildOne age is {props.age}</p>
      <p>ChildOne hobby is {props.hobby}</p>
      <p>ChildOne address is {props.address}</p>
      <p>{props.jsx}</p>
      <p>{props.children}</p>
      <button onClick={()=>props.onGetSonMsg('来自子组件的数据')}>向父组件发送数据</button>
    </div>
  )
}
export default ChildOne;