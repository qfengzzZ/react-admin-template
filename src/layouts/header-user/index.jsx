import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux'
import util from '@/utils'
const HeaderUser = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    // 获取用户信息
    const { userName } = useSelector(state => state.user.userInfo)
    const handleMenuClick = ({ key }) => {
        if (key === 'logout') {
            util.cookies.remove('token')
            navigate(`/login?redirect=${pathname}`, { replace: true })
        }
    }
    const userMenu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="message">
                消息通知
            </Menu.Item>
            <Menu.Item key="password">
                修改密码
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="logout">退出登录</Menu.Item>
        </Menu>
    );
    return (
        <span className="zw-layout-header-trigger zw-layout-header-trigger-min">
            <Dropdown overlay={userMenu} trigger={['hover']} placement="bottomCenter">
                <span className="zw-layout-header-user">
                    <Avatar size={24} icon={<UserOutlined />} />
                    <span className="zw-layout-header-user-name">{userName}</span>
                </span>
            </Dropdown>
        </span>
    )
}

export default HeaderUser
