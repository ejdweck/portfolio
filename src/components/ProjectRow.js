import React, { Component } from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import PropTypes from 'prop-types'; // ES6

//TODO uninstall
//import * as FontAwesome from 'react-icons/lib/fa'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'


// import { SocialIcon } from 'react-social-icons';

const StyledRow = styled.span`
  display: flex;
  flex-direction: row;
  margin-left: 35px;
  margin-right: 35px;
	margin-top: 40px;
	height: 100vh;

  @media screen and (max-width: 1000px) {
    display: block;
    margin-left: 20px;
    margin-right : 20px;
  }
`

const StyledColumn = styled.span`
  display: flex;
	flex-direction: column;
	background-color: green;
  // flex: 1;
`

const StyledParagraph = styled.p`
  font-size: 30px;
	margin-left: 35px;
	margin-top: 0px;
	background-color: pink;

  @media screen and (max-width: 1000px) {
    text-align: left;
    font-size: 20px;
    margin-left: 0px;
  }
`

const StyledImage = styled.img`
  height: auto; 
  width: auto; 
  max-width: 800px; 
  max-height: 600px;

  @media screen and (max-width: 1000px) {
    max-width: 300px; 
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
`

const StyledProjectTitle = styled.span`
  font-size: 40px;
  margin-left: 0px;

  @media screen and (max-width: 1000px) {
    margin-left: 0px;
    margin-right: 0px;
    font-size: 20px;
    text-align: left;
  }
`

class ProjectRow extends Component {
	renderParagraphs() {
		const { paragraphs } = this.props
		return _.map(paragraphs, (paragraph) => <StyledParagraph>{paragraph}</StyledParagraph>)
	}

	render() {
		const { projectTitle, src } = this.props
		return (
			<React.Fragment>
				<StyledColumn>
					<StyledProjectTitle>{projectTitle}</StyledProjectTitle>
				</StyledColumn>
				<StyledRow>
					<StyledColumn>
						<StyledImage src={src}/>
					</StyledColumn>
					<StyledColumn>
						{this.renderParagraphs()}
					</StyledColumn>
				</StyledRow>
			</React.Fragment>
		)
	}
}

ProjectRow.propTypes = {
	projectTitle: PropTypes.string.isRequired,
	paragraphs: PropTypes.array.isRequired,
	src: PropTypes.node.isRequired,
}

export default ProjectRow
