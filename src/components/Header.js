import React, { Component } from 'react'
import { Button, Jumbotron, Image } from 'react-bootstrap';
import '../css/header.css';

class Header extends Component {

	render() {
		return (
			<div>
				<Jumbotron className="title-jumbotron">
					<h1> Evan Dweck</h1>
					<p className="text-info">Software engineer | University of Wisconsin Madison</p>

					<p>
						<Button bsStyle="primary">Contact</Button>
					</p>
				</Jumbotron>
			</div>
		)
	}
}

export default Header