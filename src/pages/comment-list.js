import { useState,useRef } from "react";
const userId = 4
const commentItemStyle = {
  display:'flex',
  width:'100%',
  marginBottom:'15px',
  borderBottom:'1px solid #999',
  padding:'15px'
}
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
const initCommentList = [
  {id:1, name:"张三", content:"今天整不出1", time:"2025-02-25 12:00", like:100,creatTiem:2},
  {id:2, name:"李四", content:"今天整不出2", time:"2025-02-26 12:00", like:20,creatTiem:5},
  {id:3, name:"王五", content:"今天整不出3", time:"2025-02-27 12:00", like:1300,creatTiem:78},
  {id:4, name:"赵六", content:"今天整不出4", time:"2025-02-28 12:00", like:400,creatTiem:1},
  {id:5, name:"孙七", content:"今天整不出5", time:"2025-02-29 12:00", like:500,creatTiem:0},
]
const tabs = [
  {name:'最新', value:'new'},
  {name:'最热', value:'hot'}
]
function CommentList(){
  const [commentList, setCommentList] = useState(initCommentList);
  const delHandler = id =>{
    const newCommentList = commentList.filter(item=>{
      return item.id !== id
    })
    setCommentList(newCommentList)
  }
  const [tabValue, setTabValue] = useState('new')
  const tabChange= value=>{
    setTabValue(value)
    if(tabValue === 'new'){
      const newCommentList = commentList.sort((a,b)=>{return b.creatTiem - a.creatTiem})
      setCommentList(newCommentList)
    }else if(tabValue === 'hot'){
      const hotCommentList = commentList.sort((a,b)=>{return b.like - a.like})
      setCommentList(hotCommentList)
    }
  }
  const inputRef = useRef(null)
  const sendComment = ()=>{
    const content = inputRef.current.value
    if(content.trim()){
      const newComment = {
        id:commentList.length + 1,
        name:'匿名用户',
        content,
        time:new Date().toLocaleString(),
        like:0,
        creatTiem:Date.now()
      }
      setCommentList([...commentList,newComment])
      inputRef.current.value = ''
      inputRef.current.focus()
    }
  }
  return (
    <div className="comment_list_wrap">
      <div style={{display:'flex',alignItems:'center',marginLeft:'15px'}}>
      <p style={{marginRight:'15px'}}>评论:<span>{commentList.length}</span></p>
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
        {commentList.map(item=>
            (
              <div key={item.id} style={commentItemStyle}>
                <div>
                  <div>{item.name}</div>
                  <div style={{margin:'10px 0',color:'#000',fontWeight:'600'}}>{item.content}-{item.creatTiem}</div>
                  <div style={{display:'flex',alignItems:'center'}}>
                    <span>时间：{item.time}</span>
                    <span style={{paddingRight:'20px'}}>点赞数：{item.like}</span>
                    {userId === item.id && <button onClick={()=>{delHandler(item.id)}}>删除</button>}
                  </div>
                </div>
              </div>
            )
          )
        }
      </div>
    </div>
  )
}

export default CommentList;