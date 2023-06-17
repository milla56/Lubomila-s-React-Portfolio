import React from "react";
import {useParams} from "react-router-dom";
import {ProjectObjects} from './ProjectObjects';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

import "../styles/projectsView.css";


const ProjectView = () => {
	const {id} = useParams();
	const project = ProjectObjects[id]
 return (
	<div className="project">
		<h1> {project.name}</h1>
		<img src = {project.image} />
		<p> <b> Skills: </b> {project.skills}</p>

		<div className="icons"> 
		<a target="_blank" href={project.gitHub} >
        <GitHubIcon />
        </a>
		 
		<a target="_blank" href={project.link} >
        <LanguageIcon />
        </a>
		
		</div>
		
		
	
	</div>
	
  );
}

export default ProjectView;
