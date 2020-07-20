import React from 'react';
import { Layout, Menu } from 'antd';

export default function MyHeader() {
	const Lg = () => (
		<Layout.Header className="large-header" style={{ position: 'fixed', zIndex: 200, width: '100%' }}>
			<h1 className="logo">Anonymous.</h1>
			<MyMenu mode="horizontal"/>
		</Layout.Header>
	);

	const Sm = () => (
		<Layout className="small-header">
			<Layout.Sider 
				style={{
					position: "fixed",
					top: "0",
					left: "0",
					height: "100vh",
					zIndex: "300"
				}} 
				breakpoint="lg" 
				collapsedWidth={0}
			>
				<MyMenu mode="vertical"/>
			</Layout.Sider>
		</Layout>
	);

	const MyMenu = ({mode}) => (
		<Menu theme="dark" mode={mode} defaultSelectedKeys={[ '1' ]}>
			<Menu.Item key="1">
				<a href="#home">Home</a>
			</Menu.Item>
			<Menu.Item key="2">
				<a href="#projects">Proyectos</a>
			</Menu.Item>
			<Menu.Item key="3">
				<a href="#about">Conoce más</a>
			</Menu.Item>
		</Menu>
	);

	return (
		<>
			<Lg />
			<Sm />
		</>
	);
}
