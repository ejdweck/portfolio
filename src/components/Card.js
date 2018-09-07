import React, { Component } from 'react'
import { Image, Grid, Row, Col } from 'react-bootstrap'
import '../css/card.css'
import { SocialIcon } from 'react-social-icons';

const Card = (args) => {
	let styles = "card border-" + args['style'] + " mb-3"
	let socialIcon = null
	if (args['repo'] != "") {
		socialIcon = <SocialIcon className="icon" url={args['repo']} />
	}
	return (
		<div className="project-card">
			<div className={styles} >
			  <div className="card-header">{args['projectTitle']}</div>
			  <div className="card-body">
			  	<Grid>
				  	<Row>
				  		<Col xs={12} md={6}>
						    <h3 className="card-title">Description</h3>
						    <p className="card-text">{args['description']}</p>
								<h3 className="card-title">Technologies Used</h3>
						    <p className="card-text">{args['technologies']}</p>
								{socialIcon}
					    </Col>
				  		<Col xs={12} md={6}>
				  			<h3>Demo</h3>
						    <Image id="chatroom-gif" src={args['gif']} />
					    </Col>
				    </Row>
			    </Grid>
			  </div>
			</div>
		</div>
	)
}

export default Card
