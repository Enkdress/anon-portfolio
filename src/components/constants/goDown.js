import React from 'react';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default function DownButton({nextSection, type}) {
	return (
		<div>
			<Button href={nextSection} className="btn" style={btnStyles} type={type} size="large" shape="circle">
				<DownOutlined />
			</Button>

            <style jsx>{`
                .btn:hover {
                    transition: transfrom 1s ease-in-out;
                    transform: scale(1.5);
                }
            `}</style>
		</div>
	);
}

const btnStyles = {
	color: '#fff',
	position: 'absolute',
	zindex: '2000',
	top: '90vh',
	left: '50vw'
};
