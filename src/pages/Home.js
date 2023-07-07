import React from 'react';
import "../styles/home.css";
import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { Link } from "react-router-dom";

import photo from "../images/myphoto.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  return (
    <div className = "home">
		<div className='jumbotron'> 
		<Container> 
			<Row>
				<Col md={6}> 
				<img
              src={photo}
              alt="portrait"
			  className='me-portrait'
            />
				</Col>

				<Col md={6}> 
				<h2>Hello, I am</h2>
				<h1>Mila Lozanova</h1>
				<h3 className="jobTitle1"> Front End Web Developer</h3>
				<h3 className="jobTitle2"> UI / UX Designer</h3>
				<h3 className="jobTitle3"> Graphic Designer </h3>

				<p className='aboutPage'><Link to="about">Learn More About Me </Link> </p> 
				

				<div className="homepaSocials">
					
							<a
								href="https://github.com/milla56"
								
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>

              <a
								href="https://www.behance.net/lubomillozanov"
								
							>
								<FontAwesomeIcon
									icon={faBehance}
									className="homepage-social-icon"
								/>
							</a>

              <a
								href="https://mail.google.com/mail/u/0/#inbox"
								
							>
								<FontAwesomeIcon
									icon={faEnvelope}
									className="homepage-social-icon"
								/>
							</a>
						
						</div>
   
				</Col>
			</Row>
		</Container>

						</div>
  </div>
  );
}

export default Home;


{/* <h3 className="animate-charcter"> Graphic Designer </h3> */}