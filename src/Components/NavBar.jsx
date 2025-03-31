import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 
import './NavBar.css';
import '../index.css';
import '../App.css';

const NavBar = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = (path, sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/'); 
    }
    setTimeout(() => {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }, 100);
    setExpanded(false);
  };

  return (
    <Navbar 
      bg="darkblue" 
      variant="dark" 
      className="nav-bar" 
      expand="lg"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          onClick={() => setExpanded(false)} 
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', color: '#87CEEB', textShadow: '0 0 10px #87CEEB, 0 0 20px #87CEEB, 0 0 30px #87CEEB' }}
        >
          PROJECT PLAY BY CW
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="hamburger-menu"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav as="ul" className="ms-auto">
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link onClick={() => handleNavClick('/', 'rigs-section')}>RIGS</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link onClick={() => handleNavClick('/', 'pricing-section')}>PRICING</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>ABOUT</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/Events" onClick={() => setExpanded(false)}>EVENTS</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/FAQ" onClick={() => setExpanded(false)}>FAQ</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
