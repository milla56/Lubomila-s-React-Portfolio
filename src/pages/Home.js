import React from 'react';
import "../styles/home.css";

import newlogo from "../images/newlogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  return (
    <div className = "home">
		<div className='jumbotron'> 
		<h1>Hello, My Name Is </h1>
		
		<div className='title'><img
              src={newlogo}
              alt="logo"
			  className='mylogo'
            />ila</div>
		
    {/* <h2>Front End Web Developer</h2> */}

	<div className="containerHome">
  <div className="row">
    <div className="col-md-12 text-center">
      <h3 className="animate-charcter"> Front End Web Developer</h3>
    </div>
  </div>
</div>

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
						</div>
  </div>
  );
}

export default Home;
