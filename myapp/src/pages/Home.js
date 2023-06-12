import React from 'react';
import Navbar from "../components/Navbar"

import newlogo from "../images/newlogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  return (
    <div className = "home">
       <img
              src={newlogo}
              alt="logo"
              style={{ maxWidth: "40px" }}
            />
    <h1>Hello, I am Mila</h1>
    <h2>Front End Web Developer</h2>
    <p>Feel free to explore and learn more about me!</p>
    <div className="homepage-socials">
					
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
  );
}

export default Home;