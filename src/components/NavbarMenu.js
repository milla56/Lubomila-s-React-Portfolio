import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/Navbar.css";

import logo from '../images/newlogo.png';


const NavbarMenu = () => {
	const [exandNavbarMenu, setExpandNavbarMenu] = useState(false);
    // const[newlogo, setNewlogo] = useState();

  return (
	<Navbar id={exandNavbarMenu ? "open" : "close"}>
	<Container>

	<Navbar.Brand href="/"> 
          <img 
            src={logo}
            alt="logo"
            className='logo'>
          </img> 
          <span id="title">Mila's Portfolio</span>
          </Navbar.Brand>
	 
		{/* // Burger Menu  */}
	<div className='toggleButton'>
		<button 
		onClick ={() => { setExpandNavbarMenu((prev) => !prev)} }>
			
			<MenuIcon />
		</button>
	</div>

	 <div className='links'>
	 <Link to="/">Home</Link>
	 <Link to="about">About</Link>
	 <Link to="projects">Projects</Link>
	 <Link to="contact">Contact</Link>
	 </div>
	</Container>
  </Navbar>
  );
}

export default NavbarMenu;
