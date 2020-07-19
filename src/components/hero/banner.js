import React from 'react';
import './banner.css';
import DownButton from '../constants/goDown';

export default function Banner() {
	return (
		<div>
			<div className="hero-info">
				<h1>Bienvenidos a nuestra página</h1>
				<p>
					Tenemos el propósito de entregar software de la mejor calidad posible{' '}
					<a href="/">Contáctanos para más información</a>
				</p>
			</div>
			<img src="./hero-image.jpg" alt="banner" />
			<DownButton nextSection="#projects" />
		</div>
	);
}
