import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Authenticate } from '../../auth/Authenticate';

export const Header2 = props => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="oldHeader">
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
