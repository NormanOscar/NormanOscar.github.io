// Components/NavBar.js
import React, { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../css/NavBar.css'
import { Link, animateScroll as scrollSpy } from 'react-scroll';

export default function NavBar() {
  const [color, setColor] = useState(false);

  const handleScroll = () => {    
    const scrollY = window.scrollY;

    if (scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <Navbar collapseOnSelect expand='sm' variant="dark" fixed='top' id='header-navBar' className={color ? 'header-bg' : ''}>
      <Navbar.Toggle aria-controls='navbarScroll' className='m-3'/>
      <Navbar.Collapse id='navbarScroll' className='px-3'>
        <Nav className='navbar-nav me-auto'>
          <Navbar.Brand as={Link} to="home" >Oscar.dev</Navbar.Brand>
        </Nav>
        <Nav>
          <Nav.Link eventKey="1" className='navbarLink' as={Link} to="home" smooth duration={0}>
            Home
          </Nav.Link>
          <Nav.Link eventKey="2" className='navbarLink' as={Link} to="projects" smooth duration={0}>
            Projects
          </Nav.Link>
          <Nav.Link eventKey="3" className='navbarLink' as={Link} to="about" smooth duration={0}>
            About
          </Nav.Link>
          <Nav.Link eventKey="4" className='navbarLink' as={Link} to="contact" smooth duration={0}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};