import {createBrowserRouter} from 'react-router-dom';
import NotFound from '@/pages-router/NotFound.js';
import Login from '@/admin-page/pages/Login/index.js';
import Layout from '@/admin-page/Layout/index.js'
import AuthRoute from '@/components/AuthRoute.js'
import { lazy,Suspense} from 'react';
const Home = lazy(() => import('@/admin-page/pages/Home/index.js'))
const List = lazy(() => import('@/admin-page/pages/List/index.js'))
const EchartShow = lazy(() => import('@/admin-page/pages/EchartShow/index.js'))
const router = createBrowserRouter([
    {
      path: '/',
      element:<AuthRoute><Layout /></AuthRoute>,
      children: [
        {
          index: true,
          element: <Suspense fallback={'加载中'}><Home /></Suspense>,
        },
        {
          path: '/list',
          element:<Suspense fallback={'加载中'}><List /></Suspense>,
        },
        {
          path: '/echarts',
          element:<Suspense fallback={'加载中'}><EchartShow /></Suspense>,
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