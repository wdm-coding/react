import { Link } from 'react-router-dom'
import { useNavigate,useSearchParams,useLocation } from 'react-router-dom'
function Home(){
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const location = useLocation()
    return (
      <div>
        <h3>Home</h3>
        <Link to="/user/123">去用户中心</Link>
        <p>接收查询参数id：{searchParams.get('id')}</p>
        <p>接收查询参数name：{searchParams.get('name')}</p>
        <br />
        <p>接收状态参数id：{location.state ? location.state.id : ''}</p>
        <p>接收状态参数name：{location.state ?location.state.name : ''}</p>
        <br />
        <button onClick={()=>navigate('/user/666')}>
          动态路由参数传递/user/666：去用户中心
        </button>
      </div>
    );
}

export default Home;