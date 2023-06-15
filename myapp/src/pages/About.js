import React from 'react';
import "../styles/about.css"

import { Container} from "react-bootstrap";

// Images
import myphoto from '../images/myphoto.jpg'
import bootstrap from '../images/bootstrap.png'
import css from '../images/css.png'
import html from '../images/html.png'
import js from '../images/js.png'
import git from '../images/git.png'
import adobe from '../images/adobe.png'
import react from '../images/react.png'


const About = () => {
  return (
    <div className='aboutme'>
    <h1>About Me</h1>
    <Container className='info'> 
    <div className="row align-items-center" id="pannel">
        <div className="col-lg-5 order-lg-2">
          <div className="p-5">
            <img className="img-fluid rounded-circle" src={myphoto} alt="self portrait"/>
          </div>
        </div>
        <div class="col-lg-7 order-lg-1">
          <div class="p-5">
            <h3 class="name">Get To Know Me</h3>
            <p>Front End Web Developer experienced in managing multiple websites 
                and web application design projects. 
                Proficient at developing creative and functional designs, web page layout, 
                creating user interfaces, writing and testing codes, 
                and infrastructure 
                to maintain a cohesive website consistent with clients needs.</p>
            <a href="https://drive.google.com/file/d/1ekJTwcekC7yv7IO-f22gjGo4TpjPtIDB/view?usp=share_link" class="btn1 btn-lg btn-outline-light">
              <i class="fa fa-download" aria-hidden="true" id="download"></i>
               Download my Resume!</a>
  

          </div>
        </div>
      </div>
      </Container>
  {/* <h2> My Skills</h2>
  <img 
    className = "html"
    src={html} 
    alt="html,icon" />

   <img 
    className = "css"
    src={css} 
    alt="css,icon" />

  <img 
    className = "javascript"
    src={js} 
    alt="javascript,icon" />

    <img 
    className = "react"
    src={react} 
    alt="react,icon" />

  <img 
    className = "bootstrap"
    src={bootstrap} 
    alt="bootstrap,icon" />

  <img 
    className = "git"
    src={git} 
    alt="git,icon" /> 

   <img 
    className = "adobe"
    src={adobe} 
    alt="adobe,icon" /> */}
  </div>
 
  );
}

export default About;




