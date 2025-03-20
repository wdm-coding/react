import {useSelector,useDispatch} from 'react-redux'
import {SetUserInfo} from '../../store/modules/userStore.js'
function ReactRedux(){
    const {userInfo} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const setHandler = () => {
        dispatch(SetUserInfo({
            ...userInfo,
            name:'张三',
            age:userInfo.age+1
        }))
    }
    return (
        <div>
            <h3>我正在使用ReactRedux</h3>
            <p>姓名：{userInfo.name}</p>
            <p>年龄：{userInfo.age}</p>
            <p>性别：{userInfo.gender}</p>
            <button onClick={setHandler}>修改用户信息</button>
        </div>
    )
}

export default ReactRedux;