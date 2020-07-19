import React from 'react';
import MyLayout from './components/layout/layout';
import Banner from './components/hero/banner';
import Projects from './components/projects/projects';

import './App.css';
import 'antd/dist/antd.css';

function App() {
	return (
		<MyLayout>
			<section id="home" className="hero-section">
				<Banner />
			</section>
				
			<section id="projects" className="projects-section container">
				<Projects />
			</section>
		</MyLayout>
	);
}

export default App;
