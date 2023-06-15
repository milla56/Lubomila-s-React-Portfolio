import React from "react";
import "../styles/footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
 return (
	<div className="footer">
		<div className="socialMedia"> 
		<a target="_blank" href="https://github.com/milla56">
			<GitHubIcon />
			</a> 

			<a target="_blank" href="https://www.linkedin.com/in/mila-lozanova-a97b62184/">
			<LinkedInIcon />
			</a>

			<a target="_blank" href="mailto: lubomila14@gmail.com">
			<EmailIcon />
			</a>
		</div>

		<p> &copy; 2023 Mila's Portfolio</p>
	</div>
	
  );
}

export default Footer;
