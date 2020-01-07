import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'; // ES6
import Fade from 'react-reveal/Fade';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  text-align: center;

  @media screen and (max-width: 575px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`

const StyledColumn = styled.span`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
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
		margin: 0 auto;
		margin-bottom: 20px;
  }
`

const StyledText = styled.span`
  font-size: 40px;
  @media screen and (max-width: 1000px) {
    font-size: 30px;
    text-align: left;
	}
	
	@media screen and (max-width: 575px) {
		margin-bottom: 20px;
    font-size: 20px;
    text-align: left;
  }
`

const StyledFadeContainer = styled.div`
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
`

class ProjectPage extends Component {
	render() {
		const { projectTitle, technologiesUsed, src } = this.props
		return (
			<StyledContainer>
				<StyledColumn>
					<StyledFadeContainer>
						<Fade left duration={1000}>
							<StyledText>{projectTitle}</StyledText>
						</Fade>
					</StyledFadeContainer>
          <StyledFadeContainer>
						<Fade left duration={2000}>
							<StyledText>{technologiesUsed}</StyledText>
						</Fade>
					</StyledFadeContainer>
					<StyledFadeContainer style={{marginBottom: '10%'}}>
            <Fade right duration={2000}>
              <StyledImage src={src}/>
            </Fade>
          </StyledFadeContainer>
				</StyledColumn>
			</StyledContainer>
		)
	}
}

ProjectPage.propTypes = {
	projectTitle: PropTypes.node.isRequired,
	technologiesUsed: PropTypes.node.isRequired,
	src: PropTypes.node.isRequired,
}

export default ProjectPage
