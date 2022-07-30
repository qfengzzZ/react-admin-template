import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import MenuSide from './menu-side'
import HeaderBreadcrumb from './header-breadcrumb'
import HeaderCollapse from './header-collapse'
import HeaderUser from './header-user'
import { useSelector } from 'react-redux'

const { Header, Content, Footer } = Layout

const BasicLayout = () => {
    const menuCollapse = useSelector(state => state.layout.menuCollapse)
    const insideStyles = {
        paddingLeft: menuCollapse? '80px' : '256px'
    }
    const headerStyles = {
        left: menuCollapse? '80px' : '256px',
        width: menuCollapse? 'calc(100% - 80px)' : 'calc(100% - 256px)',
    }
    return (
        <Layout className="zw-layout">
            <MenuSide />
            <Layout className="zw-layout-inside zw-layout-inside-fix-with-sider" style={insideStyles}>
                <Header className="zw-layout-header zw-layout-header-fix" style={headerStyles}>
                    <HeaderCollapse />  
                    <HeaderBreadcrumb />
                    <div className="zw-layout-header-right">
                        <HeaderUser />
                    </div>
                </Header>
                <Content className="zw-layout-inside-content zw-layout-inside-content-fix-with-header">
                    <Outlet />
                </Content>
                <Footer style={{ textAlign: 'center' }}>react-admin-pro</Footer>
            </Layout>
        </Layout>
    )
}

export default BasicLayout