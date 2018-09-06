import React, { Component } from 'react'
import { Jumbotron, Grid, Col, Row, Image } from 'react-bootstrap'
import '../css/content.css'
import wiscologo from '../img/wiscologo.png'
import nourish from '../img/nourish.png'
import persistentsystems from '../img/persistentsystems.jpg'
import thomsonreuters from '../img/thomsonreuters.png'
import magictouch from '../img/magictouch.png'
import Card from './Card'

import trailblazersdemo from '../img/trailblazers-chatroom.gif'
import realcourseguidedemo from '../img/realcourseguide.gif'

export class Education extends Component {
	render() {
		return(
			<div className="education-container">
				<Jumbotron>
					<h1 className="text-danger">Education</h1>
					<hr />
					<br />
					<Grid>
						<Row>
							<Col md={2} mdPull={2} sm={12}>
								<Image className="logo" src={wiscologo} />
							</Col>
							<Col md={4} mdPush={4} sm={12}>
								<h4>University of Wisconsin Madison</h4>
								<h5>B.S. Computer Sciences</h5>
							</Col>
						</Row>
					</Grid>
				</Jumbotron>
			</div>
		)
	}
}

export class Work extends Component {
	render() {
		return(
			<div className="work-container">
				<Jumbotron>
					<h1 className="text-warning">Work</h1>
					<hr />
					<br />
					<Grid>
						<Row className="work-row">
							<Col md={2} mdPull={2} sm={12}>
								<Image className="logo" src={nourish} />
							</Col>
							<Col md={8} mdPush={8} sm={12}>
								<h4>Nourish Technology</h4>
								<h5>Software Engineer Intern | Summer 2018</h5>
								<h6>Teaching intelligent robotic systems how to cook, package and serve food.</h6>
								<h6>Full Stack Development</h6>
							</Col>
						</Row>
						<hr />
						<Row className="work-row">
							<Col md={2} mdPull={2} sm={12}>
								<Image className="logo" src={persistentsystems} />
							</Col>
							<Col md={8} mdPush={8} sm={12}>
								<h4>Persistent Systems</h4>
								<h5>Software Engineer Intern | Summer 2017</h5>
								<h6>The worlds most scalable mobile ad hoc network. Persistent’s Wave Relay® Manet unites the internet of battlefield things (iobt) in a high throughput, self-forming, and self-healing network. The Wave Relay® ecosystem connects soldiers, sensors, unmanned systems, and cameras in a dynamic network that goes beyond mesh.</h6>
								<h6>Application Development</h6>
							</Col>
						</Row>
						<hr />
						<Row className="work-row">
							<Col md={2} mdPull={2} sm={12}>
								<Image className="logo" src={thomsonreuters} />
							</Col>
							<Col md={8} mdPush={8} sm={12}>
								<h4>Thomson Reuters</h4>
								<h5>Software Engineer Intern | Summer 2016</h5>
								<h6>Thomson Reuters offers legal products and services to help our customers find trusted answers to the pressing needs of the legal industry.</h6>
								<h6>Scale Infrascructure Development</h6>
							</Col>
						</Row>
						<hr />
						<Row className="work-row">
							<Col md={2} mdPull={2} sm={12}>
								<Image className="logo" src={magictouch} />
							</Col>
							<Col md={8} mdPush={8} sm={12}>
								<h4>Magic Touch Fishing charters</h4>
								<h5>First Mate | Summers 2014-2015</h5>
								<h6>Whether it's a kids first fishing trip, or an avid group of anglers, Magic Touch will make you feel right at home. we structure each and every trip specifically for your group, going out of our way to meet all of your expectations. Top grade tackle, fresh bait, expert fillet service, and attention to detail set us apart from the rest. We always go the extra mile to put fish in the box and a smile on your face.</h6>
							</Col>
						</Row>
					</Grid>
				</Jumbotron>
			</div>
		)
	}
}

export class Projects extends Component {
	render() {
		return(
			<div className="projects-container">
				<Jumbotron>
					<h1 className="text-info">Projects</h1>
					<hr />
					<br />
					<Grid>
						<Row>
							<Card
								style="danger"
								projectTitle="Trailblazers Chatroom"
								description="A chatroom implementation that is powered by SocketIO and websockets."
								technologies="SocketIO, React, Redux, Node.js, React-Bootstrap"
								repo="https://github.com/ejdweck/socketio-react-redux-chat-app"
								gif={trailblazersdemo}
							/>
						</Row>
						<Row>
							<Card
								style="success"
								projectTitle="The Real Course Guide"
								description="The Real Course Guide is a community sourced tool intended to help students pick good & meaningful courses."
								technologies=""
								repo="https://github.com/ejdweck/rate_courses"
								gif={realcourseguidedemo}
							/>
						</Row>
					</Grid>
				</Jumbotron>
			</div>
		)
	}
}
