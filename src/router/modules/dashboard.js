import React, { lazy, Suspense } from 'react'
import { Navigate } from "react-router-dom"
import Loading from '@/layouts/loading'
const Console = lazy(() => import('@/pages/dashboard/console'))
const Analysis = lazy(() => import('@/pages/dashboard/analysis'))

const dashboard =  [
    {
        path: 'dashboard',
        element: <Navigate to="console" replace={true} />
    },
    {
        path: 'dashboard/console',
        title: 'console',
        element: <Suspense fallback={<Loading />}><Console /></Suspense>
    },
    {
        path: 'dashboard/analysis',
        title: 'analysis',
        element: <Suspense fallback={<Loading />}><Analysis /></Suspense>
    }
]
export default dashboard
