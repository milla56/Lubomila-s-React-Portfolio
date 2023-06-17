import React from 'react';
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css"
import {ProjectObjects} from "../components/ProjectObjects"

import "../styles/projects.css";


const Projects = () => {
  return (
    <div className="projects">
      <h1 className='mainTitle'> Explore My Projects </h1>
      <div className='projectList'>
        {ProjectObjects.map ((project, idx) => {
          return <ProjectCard 
          id ={idx}
          name = {project.name} 
          image = {project.image}
          skills = {project.skills}/>
        })}
      </div>
  
    </div>
  );
}

export default Projects;
