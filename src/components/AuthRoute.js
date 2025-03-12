import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
function AuthRoute ({children}){
  const user = useSelector(state => state.user)
  const {token} = user
  if(token){
    return <>{children}</>
  }else{
    return <Navigate to='/login' replace/>
  }
}

export default AuthRoute