import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import util from "@/utils"
import { userLogin } from "@/api/user"

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    .login-particles-wrapper {
        width: 100%;
        height: 100%;
        background: #001529;
    }
    .login-form-wrapper {
        width: 480px;
        padding: 30px 20px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 5px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        h1 {
            text-align: center;
        }
        p {
            text-align: center;
        }

        .login-form-button {
            width: 100%
        }
    }
`

const Login = () => {
    const { search } = useLocation()
    const navigate = useNavigate()
    const onFinish = values => {
        const token = '1231231231'
        // userLogin(values).then( res => {
        //    if (res.code === 200) {
              util.cookies.set('token', token)
              navigate('/', { replace: true })
           // }
        // }
    }
    return (
        <Div>
            <Particles className="login-particles-wrapper" />
            <div className="login-form-wrapper">
                <h1>React Login</h1>
                <p>欢迎使用React后台管理系统</p>
                <Form
                    name="login"
                    onFinish={onFinish}
                    >
                    <Form.Item
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                        ]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Div>
    )
}

export default Login
