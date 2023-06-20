import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { Brands } from './Brands';

import { CartWidget } from './CartWidget';

export const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        expanded={expanded}
        sticky="top"
        className='bg-white  pt-1 pb-2 shadow-sm'
      >
        <Container  >
        <Navbar.Brand href="#" className="brand"><Brands /> </Navbar.Brand>
        <Navbar.Brand className="cart"  sticky="top"> <CartWidget/></Navbar.Brand >

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleToggle}
          >
            {expanded ? (
              <span>
                <i className="bi bi-x-lg xboot "></i>
              </span>
            ) : (
              <span>
                <i className="bi bi-list lboot "></i>
              </span>
            )}
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" media-flex" style={{ width: '100%' }}>

              <NavLink
                className={({ isActive }) => ` nav-item nav-link NavLink ${isActive ? 'active ' : ''}`}
                onClick={() => setExpanded(false)}
                to="/"
              >
                Phones
              </NavLink>

              <NavLink
                className={({ isActive }) => `nav-item nav-link NavLink ${isActive ? 'active' : ''}`}
                onClick={() => {
                  const recentProjectsElement = document.getElementById('recentprojects');
                  recentProjectsElement.scrollIntoView({ behavior: 'smooth' });
                  setExpanded(false);
                }}
                to="/"
              >
                Audio
              </NavLink>

              <NavLink
                className={({ isActive }) => `nav-item nav-link NavLink ${isActive ? 'active' : ''}`}
                onClick={() => {
                  const recentProjectsElement = document.getElementById('recentprojects');
                  recentProjectsElement.scrollIntoView({ behavior: 'smooth' });
                  setExpanded(false);
                }}
                to="/"
              >
                Tablet
              </NavLink>
              <NavLink
                className={({ isActive }) => `nav-item nav-link NavLink ${isActive ? 'active' : ''}`}
                onClick={() => {
                  const recentProjectsElement = document.getElementById('recentprojects');
                  recentProjectsElement.scrollIntoView({ behavior: 'smooth' });
                  setExpanded(false);
                }}
                to="/"
              >
                Accesories
              </NavLink>
              <NavLink
                className={({ isActive }) => `nav-item nav-link NavLink ${isActive ? 'active' : ''}`}
                onClick={() => {
                  const recentProjectsElement = document.getElementById('recentprojects');
                  recentProjectsElement.scrollIntoView({ behavior: 'smooth' });
                  setExpanded(false);
                }}
                to="/"
              >
                Offers
              </NavLink>
            
            </Nav>
 
          </Navbar.Collapse>


        </Container>

      </Navbar>


    
    </>
  );
};
