import React from 'react';
import seal from './seal-light-black.png';
import './App.css';
import { FaGamepad } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';
import { ImBriefcase } from 'react-icons/im';

export class Resume extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return (
    <div>
      
		<div className='overall'>
		<div className="header">
				<h1>Joseph Aurelio Fernandez</h1>
		</div>
		<div className="nav">
			<a href="#objective"><div className="nav-btn">Objective</div></a>
			<a href="#education"><div className="nav-btn">Education</div></a>
			<a href="#rel-exp"><div className="nav-btn">Experience</div></a>
			
			<a href="#portfolio"><div className="nav-btn">Portfolio</div></a>
		</div>
		<div className="main">
				<div id='objective'></div>
				<div className="objective">
					<h2>
						<span>Objective:</span>
					</h2>
			<div id="objective-grid">
				<img src={seal}/>
				<p>Full Stack Software Engineer looking to contribute to the success, productively and culturally, of an organization.</p>	
			</div>
			</div>
			<div id='education'></div>
			<div className="education">
				<h2><span>Education:</span></h2>
				<div className="year-row">
					<div className="left">
						Sept. 2012 - Jun. 2016:
					</div>
					<div className="right">
						<span>Stanford University:</span>
						<br/>
						Combined Major in Philosophy & Religious Studies
					</div>
					<div className="left">
						Aug. 2008 - Jun. 2012:
					</div>
					<div className="right">
						<span>Maritime & Science Technology (MAST) Academy</span>
						<br/>
						Concentration in Oceanic and Atmospheric Sciences
					</div>
				</div>
			</div>
			<div id='rel-exp'></div>
			<div className="rel-exp">
				<h2><span>Experience:</span></h2>
				<h3>Computer Science Background</h3>
					<p>Core CS curriculum at Stanford. Freelance work for various organizations. Recently completed App Academy's 16-week Full Stack Bootcamp. Proficient in React, Redux, JavaScript ES6, HTML5, CSS3, Canvas API, AWS, Heroku, Ruby, Ruby on Rails,  jQuery, AJAX, Axios, jBuilder, SQL, postgreSQL, Mongo.db, Mongoose, Express.js, Node.js, Postman and Webpack</p>
				<h3>Pre-Colonial & Contemporary Philosophy</h3>
					<p>Series of Stanford courses focused on philosophical ideologies
					and the sociological implications of their effects on human 
					history and behavior. Maintaining a concentration in pre-modern 
					Taoist, Existential and Moral philosophies, I've gained a 
					unique perspective on different theories of ontology and 
					sociology, acquiring insight into historical movements of thought and their 
					relation to both ancient and contemporary modes of thinking. 
					Through this program, I've been given thorough experience in 
					critical analysis, writing and editing.</p>
				<h3>Music Industry Experience</h3>
					<p>
						Founder and Logistics and Social Media Manager at Spin And Destroy Events, a Bay Area based music and arts collective that hosts several concerts a year. Spearheaded transition to a digital content focus during the pandemic. Coordinated management of vendors, artists, venues and staff for a team of 10. Also a performing DJ and music producer.
					</p>
			</div>
			<div id='portfolio'></div>
			<div className='portfolio'>
				<h2><span>Portfolio:</span></h2>
				<h3>Empty Chairs</h3>
				<p>
					Designed, developed and deployed a full stack clone of the popular dinner reservation application, OpenTable.
				</p>
				<ul>
								<li>Designed the frontend with modern design principles, such as utilizing white space, creating visual hierarchy</li>
								<li>Streamlined implementation of CSS3 as well as React components and a Front End application state using Redux to increase efficiency by reducing database requests.</li>
								<li>Developed secure User Authentication and User Profiles where users can make, edit or delete reservations as well as reviews for any restaurant, which would then be displayed on the corresponding Restaurant Show page.</li>
				</ul>
				<h3>Blindr</h3>
					<p> A fullstack MERN application designed to ease the job search process for both applicants and recruiters. </p>
					<ul>
								<li>Acted as frontend lead, directing the UI/UX and React-Redux implementation of project, creating an application state to increase efficiency and directing the design protocol for the product.</li>
								<li>Spearheaded user journey success, with focus on Front End routes using React-Router-Dom, as well as CSS styling/positioning and Redux cycle persistence.</li>
								<li>Implemented User Authentication, User Profiles, Chat functionality, Profile-JobListing Matching interface and matching algorithm, as well as CRUD functionality on User Profiles and profile information items. </li>
								<li>Responsibly managed a git workflow between four people using branches, pull requests and requiring merge conflict reviews before each push to the main branch.</li>
					</ul>
				<h3>BombermanJS</h3>
					<p>Javascript clone of classic Nintendo game, Bomberman </p>
					<ul>
								<li>Developed and deployed a fully-functional, bug-free clone in less than a week</li>
								<li>Utilized Vanilla Javascript for HTML/DOM manipulation for gameplay and the creation of a simple AI opponent and power-ups and Canvas API to create the visualization</li>
					</ul>
				<div className='port-flex'>
        			<a className='project-link' target='_blank' href='https://josephafern.github.io/bombermanjs'><FaGamepad className='project-icon' /></a>
					<a className='project-link' target='_blank' href='https://empty-chairs.herokuapp.com'><MdFastfood className='project-icon' /></a>
					<a className='project-link' target='_blank' href='https://blindr-job.herokuapp.com'><ImBriefcase className='project-icon' /></a>
				</div>
			</div>
		</div>
		</div>
    </div>
  );
	
	}

}

export default Resume;