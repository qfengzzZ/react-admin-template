import React, { lazy, Suspense } from 'react'
import { Navigate } from "react-router-dom"
import Loading from '@/layouts/loading'
const Basic = lazy(() => import('@/pages/form/basic'))
const Step = lazy(() => import('@/pages/form/step'))
const Advance = lazy(() => import('@/pages/form/advance'))


const form = [
    {
        path: 'form',
        element: <Navigate to="basic" replace={true} />
    },
    {
        path: 'form/basic',
        title: '基础表单',
        element: <Suspense fallback={<Loading />}><Basic /></Suspense>
    },
    {
        path: 'form/step',
        title: '分步表单',
        element: <Suspense fallback={<Loading />}><Step /></Suspense>
    },
    {
        path: 'form/advance',
        roles: ['admin'],
        title: 'analysis',
        element: <Suspense fallback={<Loading />}><Advance /></Suspense>
    }
]
export default form
