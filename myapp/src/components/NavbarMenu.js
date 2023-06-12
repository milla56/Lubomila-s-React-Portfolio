import React from 'react';
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";


const NavbarMenu = () => {
  return (
	<Navbar bg="dark" variant="dark">
	<Container>
	  <Navbar.Brand> Mila's Portfolio</Navbar.Brand>
	  <img
		  src={newlogo}
		  alt="logo"
		  style={{ maxWidth: "40px" }}
		/>

		{/* // Burger Menu  */}
		<button
		className="navbar-toggler collapsed"
		type="button"
		data-toggle="collapse"
		data-target="#navbarDefault"
		aria-controls="navbarDefault"
		aria-expanded="false"
		aria-label="Toggle navigation"
	  >
		<span></span>
		<span></span>
		<span></span>
	  </button>

	  <Nav className="me-auto">
	  <ul>
	<li>
	  <Link to="/">Home</Link>
	</li>
	<li>
	  <Link to="/about">About</Link>
	</li>
	<li>
	  <Link to="/projects">Projects</Link>
	</li>
	<li>
	  <Link to="/contact">Contact</Link>
	</li>
  </ul>
	  </Nav>
	</Container>
  </Navbar>
  );
}

export default NavbarMenu;
