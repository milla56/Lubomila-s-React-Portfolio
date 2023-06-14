import React from "react";
import {useParams} from "react-router-dom";
import {ProjectObjects} from './ProjectObjects';
import GitHubIcon from '@mui/icons-material/GitHub';


const ProjectView = () => {
	const {id} = useParams();
	const project = ProjectObjects[id]
 return (
	<div className="project">
		<h1> {project.name}</h1>
		<img src = {project.image} />
		<p> <b> Skills: </b> {project.skills}</p>
		<GitHubIcon />
	
	</div>
	
  );
}

export default ProjectView;
