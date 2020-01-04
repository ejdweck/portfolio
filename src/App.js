import React, { Component } from 'react';
import styled from 'styled-components'

// imgs
import evan from './img/headshot.jpeg'
// svgs
import dash from './img/name-underline.svg'
import melons from './img/melons.gif'
import todov1 from './img/todo-concept-v1.svg'
import Typist from 'react-typist';
import ProjectRow from './components/ProjectRow'

import Fade from 'react-reveal/Fade';

const StyledHeadshot = styled.img`
  border-radius: 128px;
  width: 200px;
  margin-top: 40px;
`

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

const StyledContainer = styled(StyledAppContainer)`
  margin-left: 35px;
  margin-right: 35px;
  color: #181818,
`

const StyledName = styled.span`
  margin-top: 60px;
  font-size: 60px;
  text-align: center;

  @media screen and (max-width: 575px) {
    margin-left: 0px;
    margin-right: 0px;
    font-size: 40px;
  }
`

const StyledLandingTitle = styled.span`
  margin-top: 60px;
  margin-left: 35px;
  margin-right: 35px;
  font-size: 60px;
  text-align: center;

  @media screen and (max-width: 575px) {
    margin-left: 0px;
    margin-right: 0px;
    font-size: 25px;
    text-align: center;
  }
`

const StyledTitle = styled.span`
  margin-top: 60px;
  margin-left: 35px;
  margin-right: 35px;
  font-size: 60px;
  text-align: center;
  // background-color: orange;

  @media screen and (max-width: 575px) {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    font-size: 30px;
    text-align: left;
  }
`

const StyledMoreInfo = styled.span`
  font-size: 40px;
  text-align: center;
  margin-top: 60px;
  margin-left: 35px;
  margin-right: 35px;

  @media screen and (max-width: 575px) {
    margin-left: 0px;
    margin-right: 0px;
    font-size: 25px;
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

// const StyledTitleRow = styled.span`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   margin-left: 35px;
//   margin-right: 35px;
//   background-color: green;
// `

const StyledRow = styled.span`
  display: flex;
  flex-direction: row;
  margin-left: 35px;
  margin-right: 35px;
  margin-top: 40px;
  // margin-bottom: 100px;
  height: 100vh;
  // background-color: orange;
  @media screen and (max-width: 575px) {
    display: block;
    // background-color: pink;
    margin-left: 20px;
    margin-right : 20px;
  }
`

// const StyledColumn = styled.span`
//   display: flex;
//   flex-direction: column;
//   // flex: 1;
// `

// const StyledParagraph = styled.p`
//   font-size: 30px;
//   // background-color: red;
//   margin-right: 35px;
//   @media screen and (max-width: 575px) {
//     text-align: left;
//     font-size: 20px;
//     margin-right: 0px;
//   }
// `

// const StyledImage = styled.img`
//   height: auto; 
//   width: auto; 
//   max-width: 800px; 
//   max-height: 600px;

//   @media screen and (max-width: 575px) {
//     max-width: 300px; 
//     max-height: 200px;
//     display: block;
//     margin: 0 auto;
//   }
// `

const EmojiContainer = styled.div`
  font-size: 30px;
`


class App extends Component {
  renderContent () {
    return (
      <React.Fragment>
        <Fade right>
          <StyledTitle>
            <StyledTextPinkUnderline>Development</StyledTextPinkUnderline> & <StyledTextPinkUnderline>Design</StyledTextPinkUnderline>
          </StyledTitle>
        </Fade>
        <ProjectRow 
          projectTitle="In Watermelons We Trust"
          paragraphs={['This concept came about when a friend bought the domain watermelons.io with the intention of setting up a web application where users could contribute their own artistic of a watermelon(s).','When drawing a melon in illustrator I got excited and decided to experiment with some 80’s inspired bright colors.']}
          src={melons}
        />
        <ProjectRow 
          projectTitle="The Real Course Guide"
          paragraphs={[
            'Every programmer ever has designed a simple todo list at some point - here is my latest concept!',
            'I’m a firm believer in the less is more style of approach and when I look at my handwritten todo lists I realized that I can boil it down to 3 catergories - Work, Home & Misc.',
          ]}
          src={todov1}
        />

        
      </React.Fragment>
    )
  }


  render() {
    return (
      <div>
        <StyledAppContainer>
          <StyledHeadshot src={evan}/>
          <Typist cursor={{show: false}}>
            <StyledContainer>
              <StyledName style={{ color: '#181818' }}>Evan Dweck</StyledName>
              <StyledLandingTitle style={{ color: '#181818' }}>
                I am a <StyledTextBlueUnderline>Software Engineer</StyledTextBlueUnderline> and <StyledTextBlueUnderline>Designer</StyledTextBlueUnderline> 🎨.
              </StyledLandingTitle>
              <Typist.Delay ms={1000} />
              <StyledMoreInfo>I specialize in taking <StyledTextBlueUnderline>concepts and ideas</StyledTextBlueUnderline>💡 to life providing elegant and scalable <StyledTextBlueUnderline>software solutions</StyledTextBlueUnderline>.</StyledMoreInfo>
            </StyledContainer>
          </Typist >
        </StyledAppContainer>
        {this.renderContent()}
      </div>
    )
  }
}

export default App;
