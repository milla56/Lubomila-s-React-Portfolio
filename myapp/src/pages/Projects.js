import React from 'react';
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css"

import ClickStudio from "../images/1clickstudio.png";
import Weather from "../images/2weather.png";
import Planner from "../images/3dailyplanner.png";
import Readme from "../images/4readme.png";
import Team from "../images/5team.png";
import Password from "../images/6password.png";


const Projects = () => {
  return (
    <div className="projects">
      <h1> My Personal Projects !</h1>
      <div className='projectList'>
        <ProjectCard name = "" image={ClickStudio}/>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
  
    </div>
  );
}

export default Projects;
