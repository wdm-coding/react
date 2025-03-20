import {Outlet} from 'react-router-dom'
import Login from './views/login';
const isLogin = true;
function AuthGuard(){
  return isLogin ? <Outlet/> : <Login/>;   
}

export default AuthGuard;