import React, { Component } from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import PropTypes from 'prop-types'; // ES6
import Fade from 'react-reveal/Fade';

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
`

const StyledParagraph = styled.p`
  font-size: 30px;
	margin-left: 35px;
	margin-top: 0px;

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
    max-width: 600px; 
    max-height: 400px;
    display: block;
    margin: 0 auto;
		margin-bottom: 40px;
	}
	
	@media screen and (max-width: 575px) {
    max-width: 300px; 
    max-height: 200px;
    display: block;
		// margin: 0 auto;
		margin-left: 0px;
		margin-bottom: 20px;
  }
`

const StyledProjectTitle = styled.span`
  font-size: 40px;
	margin-left: 35px;

  @media screen and (max-width: 1000px) {
    margin-left: 20px;
    font-size: 30px;
    text-align: left;
	}
	
	@media screen and (max-width: 575px) {
    margin-left: 20px;
    font-size: 20px;
    text-align: left;
  }
`

const StyledFadeContainer = styled.div`
  // margin-top: 5%;
  // margin-left: 100px;
  // margin-right: 100px;
  // @media screen and (max-width: 575px) {
  //   margin-top: 10%;
  //   margin-left: 0px;
  //   margin-right: 0px;
  //   font-size: 25px;
  //   text-align: center;
  // }
`

class ProjectRow extends Component {
	renderParagraphs() {
		const { paragraphs } = this.props
		return _.map(paragraphs, (paragraph) => (
				<StyledFadeContainer>
					<Fade right duration={1000}>
						<StyledParagraph>{paragraph}</StyledParagraph>
					</Fade>
				</StyledFadeContainer>
			)
		)
	}

	render() {
		const { projectTitle, src } = this.props
		return (
			<React.Fragment>
				<StyledColumn>
					<StyledFadeContainer>
						<Fade left duration={1000}>
							<StyledProjectTitle>{projectTitle}</StyledProjectTitle>
						</Fade>
					</StyledFadeContainer>
				</StyledColumn>
				<StyledRow>
					<StyledColumn>
						<StyledFadeContainer>
							<Fade left duration={1000}>
								<StyledImage src={src}/>
							</Fade>
						</StyledFadeContainer>
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
