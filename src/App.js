import React, { Component } from 'react';
import styled from 'styled-components'
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade';
import { SocialIcon } from 'react-social-icons';


import evan from './img/headshot.jpeg'

// logos
import heroku from './img/heroku.png'
import pythonDjango from './img/python-django.jpg'
import dash from './img/name-underline.svg'
import anvil from './img/anvil.svg'
import reactIcon from './img/react-logo.svg'
import reactBootstrap from './img/react-bootstrap.svg'
import bootstrap from './img/bootstrap.png'
import linkedin from './img/linkedin-icon.svg'
import sqlite from './img/sqlite.png'
import redux from './img/redux.png'
import semantic from './img/semantic.png'
import socketio from './img/socketio.svg'
import express from './img/express.png'
import github from './img/github.svg'
import email from './img/email.png'


// gifs and project snapshots
import melons from './img/melons.gif'
import bbox from './img/nourish-bbox-mobile.gif'
import trailblazers from './img/trailblazers-chatroom.gif'
import realcourseguide from './img/realcourseguide.gif'
import maybeLater from './img/maybe-later.gif'
import justabite from './img/justabite.jpg'

import ProjectPage from './components/ProjectPage'

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-left: 35px;
  margin-right: 35px;
  text-align: center;

  @media screen and (max-width: 575px) {
    margin-left: 10px;
    margin-right: 10px;
  }

  #turn {
    display:none;
    z-index:100;
    position:fixed;
    height: 100%;
    width: 100%;
    margin: 0px;
    background-color: pink;
    font-size: 40px;
  }
  
  @media (orientation:landscape) and (max-height: 375px){
    #turn{
      display:block;
    }
  }
`

const StyledHeadshot = styled.img`
  border-radius: 128px;
  width: 200px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (max-width: 575px) {
    width: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 0px;
    margin-right: 0px;
  }
`

const StyledName = styled.span`
  font-size: 70px;
  text-align: center;

  @media screen and (max-width: 575px) {
    margin-top: 20px;
    margin-left: 0px;
    margin-right: 0px;
    font-size: 30px;
  }
`

const StyledLandingTitle = styled.span`
  font-size: 60px;
  text-align: center;

  @media screen and (max-width: 900px) {
    font-size: 40px;
  }

  @media screen and (max-width: 575px) {
    margin-left: 0px;
    margin-right: 0px;
    font-size: 25px;
  }
`

const StyledMoreInfo = styled.span`
  font-size: 40px;
  text-align: center;
  
  @media screen and (max-width: 900px) {
    font-size: 32px;
  }

  @media screen and (max-width: 575px) {
    background-color: 'pink';
    margin-left: 0px;
    margin-right: 0px;
    font-size: 25px;
  }
`

const StyledTitle = styled.span`
  margin-left: 35px;
  margin-right: 35px;
  margin-top: 50px;
  margin-bottom: 40px;
  font-size: 60px;
  text-align: center;

  @media screen and (max-width: 575px) {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 30px;
    text-align: left;
  }
`

const StyledTitleContainer = styled.div`
  margin-bottom: 50px;

  @media screen and (max-width: 1000px) {
    margin-left: 10px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 575px) {
    margin-left: 0px;
    margin-bottom: 20px;
  }
`

const StyledTextBlueUnderline = styled.span`
  margin: 0px;
  padding-bottom:5px;
  background:
    linear-gradient(
      to right, 
      #96DFF6 0%,
      #CCF3FF 100%
    )
    left 
    bottom
    no-repeat; 
  background-size:100% 8px ;/* if linear-gradient, we need to resize it */

  @media screen and (max-width: 575px) {
    background-size: 100% 6px ;/* if linear-gradient, we need to resize it */
  }
`

const StyledTextPinkUnderline = styled.span`
  margin: 0px;
  padding-bottom:5px;
  background:
    linear-gradient(
      to right, 
      #F5B5FC 0%,
      #FCE5FF 100%
    )
    left 
    bottom
    no-repeat; 
  background-size: 100% 8px ;/* if linear-gradient, we need to resize it */

  @media screen and (max-width: 575px) {
    background-size: 100% 6px ;/* if linear-gradient, we need to resize it */
  }
`

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledFadeContainer = styled.div`
  margin-top: 5%;
  margin-left: 100px;
  margin-right: 100px;
  @media screen and (max-width: 575px) {
    margin-top: 10%;
    margin-left: 0px;
    margin-right: 0px;
    font-size: 25px;
    text-align: center;
  }
`

const StyledAnvil = styled.img`
  font-size: 40px;
  vertical-align: middle;
  @media screen and (max-width: 575px) {
    font-size: 25px;
  }
`

const StyledSVG = styled.img`
  width: 40px;
  vertical-align: middle
  @media screen and (max-width: 575px) {
    width: 25px;
  }
`

const StyledSocialIcon = styled.div`
  margin: 5px;
  height: 10px;
  width: 10px;
  @media screen and (max-width: 575px) {
    margin: 10px;
  }
`

const StyledSpacer = styled.div`
  height: 20vh;
`

const todoProjectTitle = (
  <StyledMoreInfo style={{ color: '#181818' }}>
    <StyledTextBlueUnderline>Maybe Later</StyledTextBlueUnderline> is a todo app concept.
  </StyledMoreInfo>
)

const todoTechnologiesUsed = (
  <StyledMoreInfo style={{ color: '#181818' }}>
    Technologies Used: <StyledTextBlueUnderline>Figma</StyledTextBlueUnderline> 🖋.
  </StyledMoreInfo>
)

const melonsProjectTitle = (
  <StyledMoreInfo style={{ color: '#181818' }}>
    <StyledTextBlueUnderline>In Watermelons We Trust</StyledTextBlueUnderline> 🍉 is a 80's inspired digital art interperation.
  </StyledMoreInfo>
)

const melonsTechnologiesUsed = (
  <StyledMoreInfo style={{ color: '#181818' }}>
    Technologies Used: <StyledTextBlueUnderline>Adobe Illustrator</StyledTextBlueUnderline> 🎨
    , <StyledTextBlueUnderline>React</StyledTextBlueUnderline> <StyledSVG alt="logo" src={reactIcon}/>
    , <StyledTextBlueUnderline>Styled Components</StyledTextBlueUnderline> 💅.
  </StyledMoreInfo>
)

const bboxProjectTitle = (
  <StyledMoreInfo style={{ color: '#181818' }}>
    <StyledTextBlueUnderline>BBox</StyledTextBlueUnderline> was an early concept for a mobile ordering app built for BBOX robotic cafe while interning for nourish technology.
  </StyledMoreInfo>
)

const bboxTechnologiesUsed = (
  <StyledMoreInfo style={{ color: '#181818' }}>
    Technologies Used: <StyledTextBlueUnderline>React-Native</StyledTextBlueUnderline> <StyledSVG alt="logo" src={reactIcon}/>
    , <StyledTextBlueUnderline>CSS</StyledTextBlueUnderline>
  </StyledMoreInfo>
)

const realCourseGuideProjectTitle = (
  <StyledMoreInfo style={{ color: '#181818' }}>
    <StyledTextBlueUnderline>The Real Course Guide</StyledTextBlueUnderline> is a full stack web application that provides UW Madison Students past grade distribution data to make more informed registration decisions.
  </StyledMoreInfo>
)

// todo get react little svg
const realCourseGuideTechnologiesUsed = (
  <StyledMoreInfo style={{ color: '#181818' }}>
    Technologies Used: <StyledTextBlueUnderline>Django</StyledTextBlueUnderline> 🎨
    , <StyledTextBlueUnderline> Bootstrap</StyledTextBlueUnderline> <StyledSVG alt="logo" src={bootstrap}/>
    , <StyledTextBlueUnderline>sqlite</StyledTextBlueUnderline> <StyledSVG alt="logo" src={sqlite}/>
    , <StyledTextBlueUnderline>Heroku</StyledTextBlueUnderline> <StyledSVG src={heroku} />
  </StyledMoreInfo>
)

const blazersProjectTitle = (
  <StyledMoreInfo style={{ color: '#181818' }}>
    <StyledTextBlueUnderline>TrailBlazers Chat</StyledTextBlueUnderline> is a socket io chatroom made to explore websockets.
  </StyledMoreInfo>
)

const blazersTechnologiesUsed = (
  <StyledMoreInfo style={{ color: '#181818' }}>
    Technologies Used: <StyledTextBlueUnderline>React</StyledTextBlueUnderline> <StyledSVG alt="logo" src={reactIcon}/>,
    <StyledTextBlueUnderline>Redux </StyledTextBlueUnderline> <StyledSVG alt="logo" src={redux}/>,
    <StyledTextBlueUnderline>Semantic UI </StyledTextBlueUnderline> <StyledSVG alt="logo" src={semantic}/>,
    <StyledTextBlueUnderline>Socket IO </StyledTextBlueUnderline> <StyledSVG alt="logo" src={socketio}/>,
    <StyledTextBlueUnderline>Express </StyledTextBlueUnderline> <StyledSVG alt="logo" src={express}/>
  </StyledMoreInfo>
)

class App extends Component {

  renderProjects() {
    return (
      <React.Fragment>
        <ProjectPage 
          projectTitle={todoProjectTitle}
          technologiesUsed={todoTechnologiesUsed}
          src={maybeLater}
        />
        <StyledSpacer />
        <ProjectPage 
          projectTitle={melonsProjectTitle}
          technologiesUsed={melonsTechnologiesUsed}
          src={melons}
        />
        <StyledSpacer />
        <ProjectPage 
          projectTitle={realCourseGuideProjectTitle}
          technologiesUsed={realCourseGuideTechnologiesUsed}
          src={realcourseguide}
        />
        <StyledSpacer />
        <ProjectPage 
          projectTitle={realCourseGuideProjectTitle}
          technologiesUsed={realCourseGuideTechnologiesUsed}
          src={justabite}
        />
        <StyledSpacer />
        <ProjectPage 
          projectTitle={bboxProjectTitle}
          technologiesUsed={bboxTechnologiesUsed}
          src={bbox}
        />
        <StyledSpacer />
        <ProjectPage 
          projectTitle={blazersProjectTitle}
          technologiesUsed={blazersTechnologiesUsed}
          src={trailblazers}
        />
        <StyledSpacer />
      </React.Fragment>
    )
  }

  render() {
    return (
      <React.Fragment>
        <StyledAppContainer>
          <div id="turn">
            Please turn your device to portrait mode.  This site is mobile optimized for portrait only 🦊.
          </div>
          <StyledHeadshot src={evan}/>
            <StyledColumn>
              <a href="https://www.linkedin.com/in/evan-dweck-0a4657b6/" target="_blank" style={{ textDecoration: 'none'}}>
                <StyledName style={{ color: '#181818' }} href="google.com">Evan Dweck</StyledName>
                <a style={{ marginLeft: '10px', marginRight: '5px' }} href="https://www.linkedin.com/in/evan-dweck-0a4657b6/" target="_blank" >
                  <StyledSVG style={{ verticalAlign: 'baseline' }} src={linkedin} />
                </a>
                <a style={{margin: '5px'}} href="https://www.github.com/ejdweck/" target="_blank">
                  <StyledSVG style={{ verticalAlign: 'baseline' }} src={github} />
                </a>
                <a style={{ marginLeft: '5px', marginRight: '10px' }} href="mailto:evanjordandweck@gmail.com">
                  <StyledSVG style={{ verticalAlign: 'baseline' }} src={email} />
                </a>
              </a>
              <StyledFadeContainer>
                <Fade duration={1500} delay={500}>
                  <StyledLandingTitle style={{ color: '#181818' }}>
                    I am a <StyledTextBlueUnderline>Software Engineer</StyledTextBlueUnderline> 🤖 and <StyledTextBlueUnderline>Designer</StyledTextBlueUnderline> 🎨.
                  </StyledLandingTitle>
                </Fade>
              </StyledFadeContainer>
            </StyledColumn>
          <StyledFadeContainer>
            <Fade duration={1500} delay={1500}>
              <StyledMoreInfo>I specialize in taking <StyledTextBlueUnderline>concepts and ideas</StyledTextBlueUnderline>💡 to life providing elegant and scalable <StyledTextBlueUnderline>software solutions</StyledTextBlueUnderline>.</StyledMoreInfo>
            </Fade>
          </StyledFadeContainer>
          <StyledFadeContainer>
            <Fade duration={1500} delay={2500}>
              <StyledMoreInfo>I currently work @ <StyledTextBlueUnderline>Anvil Foundry </StyledTextBlueUnderline><a href="https://www.useanvil.com/" target="_blank"><StyledAnvil src={anvil}/></a>.</StyledMoreInfo>
            </Fade>
          </StyledFadeContainer>
        </StyledAppContainer>
        {this.renderProjects()}
      </React.Fragment>
    )
  }
}

export default App;
