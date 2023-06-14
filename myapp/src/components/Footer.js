import React from "react";
import "../styles/footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
 return (
	<div className="footer">
		<div className="socialMedia"> 
			<GitHubIcon />
			<LinkedInIcon />
			<EmailIcon />
		</div>

		<p> &copy; 2023 Mila</p>
	</div>
	
  );
}

export default Footer;
