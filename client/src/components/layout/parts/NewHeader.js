import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';
import { Authenticate } from '../../auth/Authenticate';

const NewHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="oldHeader">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img width='50' src='/egoras-new-logo.png' alt='' /></NavbarBrand>
        {/* <NavbarToggler  /> */}
        {
          !isOpen ? (
        <button onClick={toggle} aria-label="Toggle navigation" type="button" className="navbar-toggler"><FontAwesomeIcon icon={faBars} /></button>

          ) : (
            <button onClick={toggle} aria-label="Toggle navigation" type="button" className="navbar-toggler"><FontAwesomeIcon icon={faTimes} /> </button>

          )
        }
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
             
            </NavItem>
          
   
          </Nav>
          <a className="nav-link" href="https://dex.egoras.org/" target="_blank">Trading</a>
          <a className="nav-link" href="https://egoras.com/" target="_blank">Lending</a>
        
          {/* <Link className="nav-link" to="/components/" ></Link> */}
          <a className="nav-link" href="https://docs.egoras.com/" target="_blank" >Documentation</a>
          <Link className="nav-link" to="/about/" >Company</Link>
          <a className="nav-link" href="https://egoras.com/governance" target="_blank" >Governance</a>
          
        
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NewHeader;