import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/Navbar.css";



const NavbarMenu = () => {
	const [exandNavbarMenu, setExpandNavbarMenu] = useState(false);
    // const[newlogo, setNewlogo] = useState();

  return (
	<Navbar id={exandNavbarMenu ? "open" : "close"}>
	<Container>
	  <Navbar.Brand> <h5> Mila's Portfolio</h5> </Navbar.Brand>
	 
	

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
