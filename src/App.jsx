import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from '@/router'
import AuthRoute from '@/router/AuthRoute'

const App = () => {
    return (
        <Router>
            <AuthRoute>
                <Routes />
            </AuthRoute>
        </Router>
    )
}

export default App
