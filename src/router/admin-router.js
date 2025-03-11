import {createBrowserRouter} from 'react-router-dom';
import NotFound from '../pages-c/NotFound.js';
import Login from '@/admin-page/pages/login/index.js';
const router = createBrowserRouter([
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