import {getItem} from '@/utils'
import {Navigate} from 'react-router-dom'
function AuthRoute ({children}){
  const token = getItem('token')
  console.log('token',token);
  if(token) return <>{children}</>
  return <Navigate to='/login' replace/>
}

export default AuthRoute