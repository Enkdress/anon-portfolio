import React from 'react';
import { Layout } from 'antd';
import MyHeader from './header';
import MyFooter from './footer';
import './layout.css';

export default function MyLayout({ children }) {
	return (
		<Layout>
			<MyHeader />
			<Layout.Content>{children}</Layout.Content>
			<MyFooter />
		</Layout>
	);
}
