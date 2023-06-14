import React from "react";
import { useNavigate } from "react-router-dom";


const ProjectCard = ({image , name , id}) => {
	const navigate = useNavigate();

 return (
	<div 
	className="projectCard"
	onClick={()=>
	navigate("/project/" + id)}>
		<div 
		style={{backgroundImage: `url(${image})`}}
		className="bckImage"> 

		<h1>{name}</h1>
		
		</div>
	</div>
	
  );
}

export default ProjectCard;
