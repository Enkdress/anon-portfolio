import React from 'react'
import { Layout, Menu } from 'antd'

export default function MyHeader() {
    return (
        <Layout.Header style={{ position: 'fixed', zIndex: 200, width: '100%' }}>
            <h1 className="logo">Anonymous.</h1>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1">
                    <a href="#home">Home</a>
                </Menu.Item>
                <Menu.Item key="2">
                    <a href="#projects">Proyectos</a>
                </Menu.Item>
                <Menu.Item key="3">
                    <a href="#">Something</a>
                </Menu.Item>
            </Menu>
        </Layout.Header>
    )
}