import React, { useEffect, useState } from 'react'
import { Breadcrumb, Layout, theme } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'
import MenuComponent from './Menu'
const { Header, Content, Footer, Sider } = Layout
const LayoutComponent: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false)
    const {
        token: { colorBgContainer },
    } = theme.useToken()
    //获取到locationStorage中的token
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/login', { replace: true })
        }
    }, [token])

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className='demo-logo' />
                <MenuComponent />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Breadcrumb style={{ lineHeight: '64px', marginLeft: 20 }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content style={{ margin: '16px 16px 0' }}>
                    <div style={{ padding: 24, height: '100%', background: colorBgContainer }}>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>footer</Footer>
            </Layout>
        </Layout>
    )
}

export default LayoutComponent
