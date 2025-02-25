import { useState,useRef } from "react";
import useGetList from "./hooks/useGetList.js"
import CommentItem from './comment-item.js'
const userId = 4

const sendBtnStyle={
  width:'90px',
  height:'25px',
  backgroundColor:'blue',
  color:'#fff',
  textAlign:'center',
  lineHeight:'25px',
  display:'inline-block',
  cursor:'pointer'
}
const tabs = [
  {name:'最新', value:'new'},
  {name:'最热', value:'hot'}
]
function CommentList(){
  const [list, setList] = useGetList('comment')
  const delHandler = id =>{
    const newCommentList = list.filter(item=>{
      return item.id !== id
    })
    setList(newCommentList)
  }
  const [tabValue, setTabValue] = useState('new')
  const tabChange= value=>{
    setTabValue(value)
    if(tabValue === 'new'){
      const newCommentList = list.sort((a,b)=>{return b.creatTiem - a.creatTiem})
      setList(newCommentList)
    }else if(tabValue === 'hot'){
      const hotCommentList = list.sort((a,b)=>{return b.like - a.like})
      setList(hotCommentList)
    }
  }
  const inputRef = useRef(null)
  const sendComment = ()=>{
    const content = inputRef.current.value
    if(content.trim()){
      const newComment = {
        id:list.length + 1,
        name:'匿名用户',
        content,
        time:new Date().toLocaleString(),
        like:0,
        creatTiem:Date.now()
      }
      setList([...list,newComment])
      inputRef.current.value = ''
      inputRef.current.focus()
    }
  }
  return (
    <div className="comment_list_wrap">
      <div style={{display:'flex',alignItems:'center',marginLeft:'15px'}}>
      <p style={{marginRight:'15px'}}>评论:<span>{list.length}</span></p>
        {tabs.map(tab=>(
          <div 
            key={tab.value} 
            style={{marginRight:'20px'}}
            onClick={()=>tabChange(tab.value)}
          >
            <span style={{
              color:tabValue === tab.value ? 'red' : '#999',
              cursor:'pointer',
              fontWeight:tabValue === tab.value ? '600' : '400'
            }}>{tab.name}</span>
          </div>
        ))}
      </div>
      <div style={{display:'flex',alignItems:'center'}}>
        <input type="text" placeholder="请输入" ref={inputRef}/>
        <div style={sendBtnStyle} onClick={sendComment}>
          发布
        </div>
      </div>
      <div style={{width:'100%'}}>
        {list.map(item=><CommentItem key={item.id} item={item} userId={userId} onDel={delHandler}/>)}
      </div>
    </div>
  )
}

export default CommentList;