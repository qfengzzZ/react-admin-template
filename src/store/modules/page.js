import { createSlice } from '@reduxjs/toolkit'

const pageSlice = createSlice({
    name: 'page',
    initialState: {
        breadcrumbList: [],
        tabList: [],
    },
    reducers: {
        setBreadcrumbList: (state, { payload }) => {
            state.breadcrumbList = payload
        },
        setTabList: (state, { payload }) => {
            state.tabList = payload
        }
    }
})

export const { setBreadcrumbList } = pageSlice.actions

export default pageSlice.reducer
