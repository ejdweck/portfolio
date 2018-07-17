import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import '../css/content.css'

export class Education extends Component {
	render() {
		return(
			<div className="education-container">
				<Jumbotron>
					<h1 className="text-danger">Education</h1>
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
				</Jumbotron>
			</div>
		)
	}
}