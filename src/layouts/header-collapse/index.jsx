import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { setMenuCollapse } from '@/store/modules/layout'

const HeaderCollapse = () => {
    const menuCollapse = useSelector(state => state.layout.menuCollapse)
    const dispatch = useDispatch()
    return (
        <span className="zw-layout-header-trigger" onClick={() => dispatch(setMenuCollapse())}>
            {
                menuCollapse? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
            }
        </span>
    )
}

export default HeaderCollapse