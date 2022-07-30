import React, { lazy, Suspense} from 'react'
import { Navigate, useLocation, Routes, Route } from "react-router-dom"
import util from "@/utils"
import Loading from '@/layouts/loading'
const Login = lazy(() => import('@/pages/login'))


const AuthRoute = ({ children }) => {
    const token = util.cookies.get('token')
    const { pathname } = useLocation()
    if (token && token !== 'undefined') {
        return children
    } else {
        return (
            <Routes>
                <Route path="*" element={<Navigate to={`/login?redirect=${pathname}`} replace={true} />} />
                <Route path="/login" element={<Suspense fallback={<Loading />}><Login /></Suspense>} />
            </Routes>
        )
    }
}

export default AuthRoute
