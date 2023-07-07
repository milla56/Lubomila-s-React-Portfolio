import React from 'react';
import "../styles/about.css"

import { Container} from "react-bootstrap";

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

// Images
import web from '../images/web.png'
import bootstrap from '../images/bootstrap.png'
import css from '../images/css.png'
import html from '../images/html.png'
import js from '../images/js.png'
import git from '../images/git.png'
import adobe from '../images/adobe.png'
import react from '../images/react.png'
import node from '../images/node.png'


const About = () => {
  return (
    <div className='aboutme'>
      <div className='background'>
    <h1 className='aboutme-title'>About Me</h1>
    <Container className='info'> 
    <div className="row align-items-center" id="pannel">
        <div className="col-lg-5 order-lg-2">
          <div className="p-5">
            <img className='img-fluid' src={web} alt="computer"/>
          </div>
        </div>
        <div className="col-lg-7 order-lg-1">
          <div className="p-5">
            <h3 className="knowMe">Get To Know Me</h3>
            <p> I am a Front End Web Developer, UI & UX Designer and Graphic Designer.</p> 
            <p> I am based in Coventry,England. </p>
            <p>I am experienced in developing creative and functional designs, web page layout, 
                creating user interfaces, writing and testing codes, 
                and infrastructure 
                to maintain a cohesive website consistent with clients needs.</p>

                <a className='resumeIcon' href="https://drive.google.com/file/d/1MXrJRIiec00bD9rxpSy-JY8Vc9E_iYyO/view?usp=sharing">
			             <CloudDownloadIcon />
		                 	</a>
  

          </div>
        </div>
        
      </div>
      </Container>


  <h2 className='skills-title'> My Skills</h2>
   
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
    className = "node"
    src={node} 
    alt="node,icon" />

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
    alt="adobe,icon" />
  
  </div>
  </div>
  );
}

export default About;




