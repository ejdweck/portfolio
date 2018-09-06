import React, { Component } from 'react'
import { Button, Jumbotron, Image, Grid, Row, Col } from 'react-bootstrap'
import '../css/header.css'
import portrait from '../img/evan.jpg'
//TODO uninstall
//import * as FontAwesome from 'react-icons/lib/fa'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { SocialIcon } from 'react-social-icons';

class Header extends Component {

	render() {
		return (
			<div>
				<Jumbotron className="title-jumbotron">
					<div className="title">
						<h1>Evan Dweck</h1>
						<h5 className="text-info">Software Engineer | University of Wisconsin Madison</h5>
						<p>
							<SocialIcon className="icon" url="https://www.linkedin.com/in/evan-dweck-0a4657b6/" />
							<SocialIcon className="icon" url="https://github.com/ejdweck/" />
							<SocialIcon className="icon" url="mailto:evanjordandweck@gmail.com" />
						</p>
					</div>
					<Image id="portrait" src={portrait} />
				</Jumbotron>
			</div>
		)
	}
}

export default Header
