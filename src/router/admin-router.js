import {createBrowserRouter} from 'react-router-dom';
import NotFound from '../pages-c/NotFound.js';
import Login from '@/admin-page/pages/Login/index.js';
import Layout from '@/admin-page/Layout/index.js'
import AuthRoute from '@/components/AuthRoute.js'
import Home from '@/admin-page/pages/Home/index.js';
import List from '@/admin-page/pages/List/index.js';
const router = createBrowserRouter([
    {
      path: '/',
      element:<AuthRoute><Layout /></AuthRoute>,
      children: [
        {
          index: true,
          element:<Home></Home>
        },
        {
          path: '/list',
          element:<List></List>
        }
      ]
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