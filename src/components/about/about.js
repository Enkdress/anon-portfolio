import React from 'react';
import Person from './person';

import './about.css';

export default function About() {
	return (
		<div className="aboutus">
			<div className="section-header">
				<h1>¿Quienes somos?</h1>
			</div>
			<div className="about-info">
				<Person
					name="Sergio Correa"
					imageURI="./sergioPic.jpeg"
					description="Front end developer, me desenvuelvo en react con nextjs y me encanta seguir aprendiendo"
					github="https://github.com/Enkdress"
				/>
				<Person
					name="Carlos Ortigoza"
					imageURI="./carlosPic.png"
					description="Back end developer, me muevo en lo que es python, php, y tecnologías como AWS"
					github="https://github.com/humanoz"
				/>
			</div>
		</div>
	);
}
