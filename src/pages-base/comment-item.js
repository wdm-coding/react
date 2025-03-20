const commentItemStyle = {
  display:'flex',
  width:'100%',
  marginBottom:'15px',
  borderBottom:'1px solid #999',
  padding:'15px'
}
function CommentItem({item,userId,onDel}){
  return (
    (
      <div style={commentItemStyle}>
        <div>
          <div>{item.name}</div>
          <div style={{margin:'10px 0',color:'#000',fontWeight:'600'}}>{item.content}-{item.creatTiem}</div>
          <div style={{display:'flex',alignItems:'center'}}>
            <span>时间：{item.time}</span>
            <span style={{paddingRight:'20px'}}>点赞数：{item.like}</span>
            {userId === item.id && <button onClick={()=>{onDel(item.id)}}>删除</button>}
          </div>
        </div>
      </div>
    )
  )
}
export default CommentItem;