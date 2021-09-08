import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Authenticate } from '../../auth/Authenticate';

export const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="">
      <div className='header-container header-bg fixed-top border-bottom-0'>
        <div className='container-fluid'>
          <nav class='navbar navbar-expand-lg navbar-light bg-light'>
            <Link class='navbar-brand' to='/'>
              <img width='50' src='/egoras-favicon.png' alt='' />
            </Link>
            <button
              class='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='navbar-toggler-icon'></span>
            </button>

            <div class='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul class='navbar-nav'>
                <li class='nav-item dropdown'>
                  <a
                    class='nav-link dropdown-toggle'
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
                    class='dropdown-menu custom-dropdown vw-80 px-3'
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
                     
                        {/* <a class='dropdown-item' href='#'>
                          Debts
                        </a> */}
                      </div>
                      
                    </div>
                  </div>
                </li>
                {/* <li class='nav-item active'>
                  <a class='nav-link' href='#'>
                    About Us
                  </a>
                </li> */}
                <li class='nav-item active'>
                  <Link class='nav-link' to='/companies'>
                   Companies
                  </Link>
                </li>
                <li class='nav-item active'>
                  <Link class='nav-link' to='/governance'>
                   Governance
                  </Link>
                </li>
                <li class='nav-item active'>
                  <Link class='nav-link' to='/createloan'>
                    Create a Loan
                  </Link>
                </li>
              </ul>
              <div className='search-animated mr-auto w-35'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='feather feather-search toggle-search'
                >
                  <circle cx='11' cy='11' r='8'></circle>
                  <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
                </svg>
                <form class='form-inline my-2 my-lg-0'>
                  <input
                    class='form-control search-form-control w-100 mr-sm-2'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                  />
                </form>
              </div>
              <Link to='/companyreg' className='px-2'>
                Partner with us
              </Link>
              <Authenticate isHome="false" />
            </div>
          </nav>
        </div>
      </div>
      <div className='clearfix'></div>
    </div>
  );
};
