import React, { lazy, Suspense } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import dashboard from "./modules/dashboard"
import form from "./modules/form"
import BasicLayout from '@/layouts'
import Loading from '@/layouts/loading'
const Login = lazy(() => import('@/pages/login'))
const NotFound = lazy(() => import('@/pages/system/error/404'))

export const routes = [
    {
        path: '/login',
        title: '登录',
        element: <Suspense fallback={<Loading />}><Login /></Suspense>
    },
    {
        path: '/',
        element: <BasicLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="dashboard/console" replace={true} />
            },
            ...dashboard,
            ...form,
        ]
    },
    {
        path: '*',
        element: <Suspense fallback={<Loading />}><NotFound /></Suspense>
    }
]

const Routes = () => {
    return useRoutes(routes)
}

export default Routes
