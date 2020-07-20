import React, { useState } from 'react';
import { Card } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

export default function Person({ name, imageURI, description, github }) {

	const [ infoClass, setInfoClass ] = useState("hide-info");
	const [ imageClass, setImageClass ] = useState('show-image');

	const handleAnimationEnd = () => {
		infoClass === "hide-info" ? setInfoClass('show-info') : setInfoClass('hide-info')
		imageClass === "show-image" ? setImageClass('hide-image') : setImageClass('show-image')
	}

	const Lg = () => (
		<Card
			style={{ width: '300px', margin: '10px' }}
			cover={<img src={imageURI} alt={description} />}
			actions={[
				<a href={github}>
					<GithubOutlined />
				</a>
			]}
			className="onLargeSize"
		>
			<Card.Meta title={name}description={description} />
		</Card>
	);
	const Sm = () => (
		<div className="rounded-container onSmallSize">
			<div onAnimationEnd={handleAnimationEnd} className={`bg-image ${imageClass}`}>
				<img src={imageURI} alt={name}/>
			</div>
			<div onAnimationEnd={handleAnimationEnd} className={infoClass}>
				<div className="data">
					<h2>{name}</h2>
					<h5>{description}</h5>
				</div>
			</div>
		</div>
	);

	return (
		<>
			<Lg />
			<Sm />
		</>
	)
}
