import {RouterProvider} from 'react-router-dom'
import router from '@/router/admin-router.js'
function AdminApp (){
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default AdminApp;