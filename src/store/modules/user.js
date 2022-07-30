import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: {
            userName: 'Admin'
        }
    },
    reducers: {
        setUserInfo: (state, { payload }) => {
            state.userInfo = payload
        }
    }
})

export const { setUserInfo } = userSlice.actions

export default userSlice.reducer
