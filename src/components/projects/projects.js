import React from 'react';
import Project from './project';

import './projects.css';
import DownButton from '../constants/goDown';

export default function Projects() {
	return (
		<div className="projects-list">
			<div className="section-header">
				<h1>Nuestros trabajos</h1>
				<p>Estos son nuestros proyectos top</p>
			</div>
			<div className="cards">
				<Project
					imageURI="./project-image.jpg"
					title="Facebook"
					description="Esta fue nuestra primera aplicación web"
				/>
				<Project
					imageURI="./project-image.jpg"
					title="Facebook"
					description="Esta fue nuestra primera aplicación web"
				/>
				<Project
					imageURI="./project-image.jpg"
					title="Facebook"
					description="Esta fue nuestra primera aplicación web"
				/>
				<Project
					imageURI="./project-image.jpg"
					title="Facebook"
					description="Esta fue nuestra primera aplicación web"
				/>
				<Project
					imageURI="./project-image.jpg"
					title="Facebook"
					description="Esta fue nuestra primera aplicación web"
				/>
				<Project
					imageURI="./project-image.jpg"
					title="Facebook"
					description="Esta fue nuestra primera aplicación web"
				/>
			</div>

			<DownButton nextSection="#" type="primary"/>
		</div>
	);
}
