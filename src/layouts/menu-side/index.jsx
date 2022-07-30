import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from '@/assets/logo-dark.png'
import logoCollapse from '@/assets/logo-small.png'
import menuSider from '@/menu/sider'

const { Sider } = Layout
const { SubMenu } = Menu

const MenuSide = () => {
    const { menuCollapse } = useSelector(state => state.layout)
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const [openKeys, setOpenkeys] = useState([])

    const handleMenuSelect = ({ key }) => {
        navigate(key, { replace: true })
    }

    // 根据当前的pathname匹配菜单选中项
    useEffect(() => {
        if (menuCollapse) {
            return
        } else {
            const currentOpenKeys = menuSider.filter(menu => pathname.indexOf(menu.path) > -1).map(item => item.path)
            setOpenkeys(currentOpenKeys)
        }
    }, [pathname, menuCollapse])

    const handleOpenChange = openKeys => {
        if (openKeys.length > 1) {
            setOpenkeys([openKeys[openKeys.length - 1]])
        } else {
            setOpenkeys(openKeys)
        }
    }

    //  渲染多级菜单项
    const renderSubMenu = ({ path, title, children, icon }) => {
        return (
            <SubMenu key={path} title={title} icon={icon? icon : null} popupClassName="custom-popper-menu">
                {
                    children.map(item => {
                        return item.children? renderSubMenu(item) : renderMenuItem(item)
                    })
                }
            </SubMenu>
        )
    }

    //  渲染末级菜单项
    const renderMenuItem = ({ path, title, icon }) => {
        return (
            <Menu.Item key={path} icon={icon? icon : null}>
                {title}
            </Menu.Item>
        )
    }

    return (
        <Sider trigger={null} collapsible collapsed={menuCollapse} className="zw-layout-sider zw-layout-sider-fix" width={menuCollapse? 80 : 256}>
            <div className="zw-layout-sider-logo ">
                <a href="/">
                    <img src={menuCollapse? logoCollapse : logo} alt="" />
                </a>
            </div>
            <Menu
                mode='inline'
                theme='dark'
                selectedKeys={[pathname]}
                openKeys={openKeys}
                onOpenChange={handleOpenChange}
                onSelect={handleMenuSelect}>
                {
                    menuSider.map(item => {
                        return item.children ? renderSubMenu(item) : renderMenuItem(item)
                    })
                }
            </Menu>
        </Sider>
    )
}

export default MenuSide
