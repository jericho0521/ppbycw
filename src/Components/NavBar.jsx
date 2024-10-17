import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 
import './NavBar.css';
import '../index.css';
import '../App.css';

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavClick = (path, sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/'); 
    }
    setTimeout(() => {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
    }, 100); 
  };

  return (
    <Navbar bg="darkblue" variant="dark" className="nav-bar">
      <Container>
        <Nav as="ul" className="mx-auto">
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
      </Container>
    </Navbar>
  );
};

export default NavBar;
