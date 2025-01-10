import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 
import './NavBar.css';
import '../index.css';
import '../App.css';

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (path, sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/'); 
    }
    setTimeout(() => {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }, 100);
    setIsOpen(false);
  };

  return (
    <Navbar bg="darkblue" variant="dark" className="nav-bar" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', color: '#87CEEB', textShadow: '0 0 10px #87CEEB, 0 0 20px #87CEEB, 0 0 30px #87CEEB' }}>PROJECT PLAY BY CW</Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="hamburger-menu"
          onClick={() => setIsOpen(!isOpen)}
        />
        <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? 'show' : ''}>
          <Nav as="ul" className="ms-auto">
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/">HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link onClick={() => handleNavClick('/', 'rigs-section')}>RIGS</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link onClick={() => handleNavClick('/', 'pricing-section')}>PRICING</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link onClick={() => handleNavClick('/', 'community-section')}>ABOUT</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/Events">EVENTS</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
