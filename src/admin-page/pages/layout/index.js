import {useSelector} from 'react-redux'
function Layout(){
    const user = useSelector(state => state.user);
    const {token} = user;
    return <div>Layout-{token}</div>;
}

export default Layout;