import { createSlice } from "@reduxjs/toolkit"

export const layoutSlice = createSlice({
    name: 'layout',
    initialState: {
        // 菜单折叠
        menuCollapse: false,
    },
    reducers: {
        setMenuCollapse: state => {
            state.menuCollapse = !state.menuCollapse
        },
    }
})

export const { setMenuCollapse } = layoutSlice.actions

export default layoutSlice.reducer