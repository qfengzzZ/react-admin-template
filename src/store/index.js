import { configureStore } from '@reduxjs/toolkit'
import layoutReducer from './modules/layout'
import userReducer from './modules/user'
import pageReducer from './modules/page'

const store = configureStore({
    reducer: {
        layout: layoutReducer,
        user: userReducer,
        page: pageReducer,
    }
})

export default store
