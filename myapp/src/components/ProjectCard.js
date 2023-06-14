import React from "react";


const ProjectCard = ({image , name}) => {
 return (
	<div className="projectCard">
		<div 
		style={{backgroundImage: `url(${image})`}}
		className="bckImage"> 

		<h1>{name}</h1>
		
		</div>
	</div>
	
  );
}

export default ProjectCard;
