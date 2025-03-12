import {createBrowserRouter} from 'react-router-dom';
import NotFound from '../pages-c/NotFound.js';
import Login from '@/admin-page/pages/login/index.js';
import Layout from '@/admin-page/pages/layout/index.js'
import AuthRoute from '@/components/AuthRoute.js'
const router = createBrowserRouter([
    {
      path: '/',
      element:<AuthRoute><Layout /></AuthRoute>,
    },
    {
      path: '/login',
      element: <Login />,
    },
    // 配置404页面
    {
      path: '*',
      element: <NotFound />,
    }
])

export default router;