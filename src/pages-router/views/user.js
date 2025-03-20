import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
function User(){
  const params = useParams();
  console.log('params',params);
    return (
      <div>
        <h3>User</h3>
        <p>接收动态路由参数id:{params.id}</p>
        <Link to="/login">去登录</Link>
      </div>
    );
}

export default User;