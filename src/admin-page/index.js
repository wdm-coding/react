import {RouterProvider} from 'react-router-dom'
import router from '@/router/admin-router.js'
function AdminApp (){
    return (
        <div className='admin_app_wrap'>
            <RouterProvider router={router} />
        </div>
    );
}

export default AdminApp;