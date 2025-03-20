import {createBrowserRouter} from 'react-router-dom';

import AuthGuard from '@/pages-router/AuthGuard.js';
import NotFound from '@/pages-router/NotFound.js';
import Home from '@/pages-router/views/home.js';
import User from '@/pages-router/views/user.js';
import About from '@/pages-router/views/about.js';
import Login from '@/pages-router/views/login.js';
import Antd from '@/pages-router/views/antd.js';
const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthGuard />,
      children:[
        {element: <About />,index: true},
        {path: '/home', element: <Home />},
        {path: '/antd', element: <Antd />},
        {path: '/user/:id', element: <User />},
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