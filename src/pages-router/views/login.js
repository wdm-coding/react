
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Login(){
  const navigate = useNavigate()
    return (
      <div>
        <h3>Login</h3>
        <Link to="/">声明式导航：去首页</Link>
        <button onClick={()=>navigate('/home')}>编程式导航：去首页</button>
        <br />
        <button onClick={()=>navigate('/home?id=123654&name=wdm')}>
          查询参数传递?id=123654&name=wdm：去首页
        </button>
        <br />
        <button onClick={()=>navigate('/home',{state:{id:'999888',name:'xxx'}})}>
          状态参数传递?id=123654&name=wdm：去首页
        </button>
      </div>
    );
}

export default Login;