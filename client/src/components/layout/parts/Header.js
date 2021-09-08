import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Authenticate } from '../../auth/Authenticate';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
export const Header = ({onClick, intitiated}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

    <div>
     
      
      {/* <Navbar color="light" expand="md" className="fixed-top py-md-3 bg-white"> */}
      <Navbar color="light" expand="md" className="py-md-3 bg-white b-shadow">
        <div className='container-fluid px-md-0'>
          <NavbarBrand href="/">
                  <img width='45' className='d-inline-block' src='/egoras-new-logo.png' alt='' />
                  {/* <span className='logo-text'>EGORAS</span> */}
                  <span className='logo-text'>EGORAS</span>
                </NavbarBrand>
                {/* <button className='nav-link btn btn-light toggleNight ml-auto d-md-none d-block'>
                  <i className="mx-1 fas fa-moon"></i>
                </button> */}
                <Link className='nav-link btn btn-light toggleNight ml-auto d-md-none d-block' href="#" onClick={onClick}>
                        
                  {
                    !intitiated ? (<i className="mx-1 fas fa-moon"></i>) : (<i className="mx-1 fas fa-sun"></i>)
                  }
                </Link>
            {/* <NavbarToggler onClick={toggle} /> */}
            {
              !isOpen ? (
            <button onClick={toggle} aria-label="Toggle navigation" type="button" className="navbar-toggler"><FontAwesomeIcon icon={faBars} /></button>

              ) : (
                <button onClick={toggle} aria-label="Toggle navigation" type="button" className="navbar-toggler"><FontAwesomeIcon icon={faTimes} /> </button>

              )
            }
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto mr-4 header-link" navbar>
              
                <li className='nav-item dropdown'>
                      <a
                        className='nav-link dropdown-toggle'
                        to='#'
                        id='navbarDropdown'
                        role='button'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Explore
                      </a>
                      <div
                        className='dropdown-menu custom-dropdown category-con vw-80 px-3'
                        aria-labelledby='navbarDropdown'
                      >
                        
                        <div className='row'>
                          <div className='col-md-6'>
                            <h6 className='text-uppercase dropdown-title'>
                              Loan Categories
                            </h6>
                            <Link className="dropdown-item" to="/category/agriculture">
                            Agriculture
                            </Link>
                          
                            <Link className="dropdown-item" to="/category/retail">
                            Retail
                            </Link>

                            <Link className="dropdown-item" to="/category/women">
                            Women
                            </Link>
                          
                          
                            <Link className="dropdown-item" to="/category/single parents">
                            Single Parents
                            </Link>
                          
                            <Link className="dropdown-item" to="/category/all loans">
                            All Loans
                            </Link>
              
                          </div>
                          <div className='col-md-6'>
                            <h6 className='text-uppercase dropdown-title'>
                              Loan Status
                            </h6>


                            <Link className="dropdown-item" to="/status/decline">
                            Declined Loans
                            </Link>
                          
                            <Link className="dropdown-item" to="/status/ongoing">
                            Ongoing Loans
                            </Link>

                            <Link className="dropdown-item" to="/status/approved">
                            Approved Loans
                            </Link>
                        
                            {/* <a className='dropdown-item' href='#'>
                              Debts
                            </a> */}
                          </div>
                          
                        </div>
                      </div>
                    </li>
            

                    <li className='nav-item dropdown'>
                      <a
                        className='nav-link dropdown-toggle'
                        to='#'
                        id='navbarDropdown'
                        role='button'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Documents
                      </a>
                      <div
                        className='dropdown-menu custom-dropdown vw-80 px-3'
                        aria-labelledby='navbarDropdown'
                      >
                        
                        <div className='row'>
                          <div className='col-md-6'>

                          <a target="_blank" className='text-black' href="https://docs.egoras.com">Documentation</a>

                          <br></br>
                          <a target="_blank" className='text-black' href="https://drive.google.com/file/d/1vBDoBGBd3-JcDBrtAlnq9yTAKbZJNhOW/view?usp=sharing">Pitch Deck</a>
                          <br></br>
                          {/* <a target="_blank" className='text-black' href="https://drive.google.com/file/d/1yYAvGLxLGqMwEc9FmmgRmoivFj5H9gOL/view?usp=sharing">Token Metrics</a> */}
                          {/* <a target="_blank" className='text-black' href="/token-metrics">Token Metrics</a> */}

                    
              
                          </div>
                          
                          
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/#what-is-egoras">
                    What is Egoras
                            </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/#egoras-team">
                  Team
                            </Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/#our-stories">
                  Our Stories
                            </Link>
                    </li>
                    {/* <li className="nav-item">
                      <a className='nav-link' href='/token-metrics'>
                        Token Metrics
                      </a>
                    </li>  */}
                    <li className="nav-item d-none d-md-block">
                      {/* <button className='nav-link btn btn-light toggleNight'>
                        <i className="mx-1 fas fa-moon"></i>
                      </button> */}
                      <Link className='nav-link btn btn-light toggleNight' href="#" onClick={onClick}>
                        
                        {
                          !intitiated ? (<i className="mx-1 fas fa-moon"></i>) : (<i className="mx-1 fas fa-sun"></i>)
                        }
                      </Link>
                    </li>

                    

                    {/* <li className="nav-item">
                          <Link className='nav-link' to='/createloan'>
                            Create a Loan
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to='/companyreg' className='nav-link'>
                            Partner with us
                          </Link>
                        </li> */}

              </Nav>
            
            

                <Authenticate isHome="false" />

            </Collapse>
        </div>
      </Navbar>
      
    </div>
    
  );
};
