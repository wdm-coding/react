import {createBrowserRouter} from 'react-router-dom';

import AuthGuard from '../pages-c/AuthGuard.js';
import NotFound from '../pages-c/NotFound.js';
import Home from '../pages-c/views/home.js';
import User from '../pages-c/views/user.js';
import About from '@/pages-c/views/about.js';
import Login from '../pages-c/views/login.js';
const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthGuard />,
      children:[
        {element: <About />,index: true},
        {path: '/home', element: <Home />},
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