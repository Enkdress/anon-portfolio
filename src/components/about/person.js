import React from 'react';
import { Card } from 'antd';
import { GithubOutlined } from '@ant-design/icons'

export default function Person({ name, imageURI, description, github }) {
	return (
		<Card style={{ width: '300px', margin: '10px' }} cover={<img src={imageURI} alt={description} />} actions={[
            <a href={github}><GithubOutlined /></a>
        ]}>
			<Card.Meta title={name} description={description} />
		</Card>
	);
}
