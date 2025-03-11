import {createBrowserRouter} from 'react-router-dom';
import NotFound from '../pages-c/NotFound.js';
import Login from '@/admin-page/pages/login/index.js';
import Layout from '@/admin-page/pages/layout/index.js'
const router = createBrowserRouter([
    {
      path: '/layout',
      element: <Layout />,
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