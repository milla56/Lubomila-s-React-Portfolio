import React from 'react';

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
    <img 
    className = "img-fluid rounded-circle"
    src={myphoto} 
    alt="Avatar" />
    <p>
    Graphic Designer and Junior web Developer experienced in managing multiple websites 
    and web application design projects. Proficient at developing creative and functional designs, web page layout, 
    creating user interfaces, writing and testing codes, and infrastructure to maintain a cohesive website consistent with clients needs.
    </p>
    <a href="https://drive.google.com/file/d/16wPZr0HDKNc37wzPJw1Gby4o_EkPzulF/view" 
    className="btn1 btn-lg btn-outline-light">
            <i className="fa fa-download" aria-hidden="true" id="download"></i>
             Download my Resume!</a>

  <h2> My Skills</h2>
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
    alt="adobe,icon" />
  </div>
 
  );
}

export default About;
