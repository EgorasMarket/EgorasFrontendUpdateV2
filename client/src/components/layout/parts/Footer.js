import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faGifts, faArrowCircleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome, faFacebook, faFacebookMessenger, faInstagram, faTelegram, faTwitter, faReddit, faYoutube, faGithub } from "@fortawesome/fontawesome-free-brands";

export const Footer = () => {
  return (
    <div>
      <section id='footer'>
        <div className='container'>
          <div className='row text-left text-xs-center text-sm-left text-md-left'>
            <div className='col-xs-12 col-sm-6 col-md-4'>
              <div className='text-center text-md-left d-block'>
                <p className='d-flex'>
                  <div className='justify-content-around'>
                    <Link to='/' className=''>
                    <img width='45' className='d-inline-block' src='/egoras-new-logo.png' alt='' />
                    <span className='logo-text'>EGORAS</span>
                  </Link>
                  </div>
                </p>
              </div>
              <ul className='list-unstyled quick-links mt-3'>
                <li className='' style={{color: '#aaaaaa'}}>
                Egoras microfinance protocol provides uncollateralised micro-credit to small entrepreneurs and enterprises who cannot take shelter of banks for banking and other services.
                </li>
                {/* <li>
                  <a className='' href=''>
                    © 2020 Egoras Foundation
                  </a>
                </li> */}
              </ul>
            </div>
            <div className='col-xs-12 col-sm-6 col-md-8'>
              <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-4'>
                  <h5>Legal</h5>
                  <ul className='list-unstyled quick-links'>
                    <li>
                      <a className='' href='/privacy'>
                        Privacy & policy
                      </a>
                    </li>
                    <li>
                      <a className='' href='/terms'>
                        Terms & Condition
                      </a>
                    </li>
                    {/* <li>
                      <Link className='' to='/aboutus'>
                        About Us
                      </Link>
                    </li> */}
                    <li>
                      <a className='' href='https://docs.egoras.com'>
                        API
                      </a>
                    </li>
                    <li>
                      <a className='' href='https://docs.egoras.com'>
                        Documentation
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-4'>
                  <h5>Quick links</h5>
                  <ul className='list-unstyled quick-links'>
                    <li>
                      <Link class='' to='/companies'>
                        Companies
                      </Link>
                    </li>
                    <li>
                      <Link class='' to='/requests'>
                        Requests
                      </Link>
                    </li>
                    <li>
                      <Link class='' to='/createloan'>
                        Create a Loan
                      </Link>
                    </li>
                    <li>
                      <Link to='/companyreg' className=''>
                        Partner with us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-4'>
                  <h5>Social</h5>
                  <div>
                    <div className='d-flex justify-content-between flex-md-wrap flex-lg-nowrap'>
                      <div className='pr-2'>
                        <a href='https://t.me/egorasmarket'>
                          <FontAwesomeIcon className='fa-2x' icon={faTelegram} />
                        </a>
                      </div>
                      <div className='pr-2'>
                        <a href='https://web.facebook.com/egorasmarket/'>
                          <FontAwesomeIcon className='fa-2x' icon={faFacebook} />
                        </a>
                      </div>
                      <div className='pr-2'>
                        <a href='https://twitter.com/egorasmarket'>
                          <FontAwesomeIcon className='fa-2x' icon={faTwitter} />
                        </a>
                      </div>
                      {/* <div className='pr-2'>
                        <a href=''>
                          <FontAwesomeIcon className='fa-2x' icon={faReddit} />
                        </a>
                      </div> */}
                      <div className='pr-2'>
                        <a href='https://instagram.com/egorasofficial'>
                          <FontAwesomeIcon className='fa-2x' icon={faInstagram} />
                        </a>
                      </div>
                      <div className='pr-2'>
                        <a href='https://www.youtube.com/channel/UCHfi5EwXig46xp5Dx8hVBHQ'>
                          <FontAwesomeIcon className='fa-2x' icon={faYoutube} />
                        </a>
                      </div>
                      <div className='pr-2'>
                        <a href='https://github.com/EgorasMarket'>
                          <FontAwesomeIcon className='fa-2x' icon={faGithub} />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <ul className='list-unstyled quick-links'>
                    <li>
                      <a
                        className='' target="_blank"
                        href='https://t.me/egorasmarket'
                      >
                        Telegram
                      </a>
                    </li>
                    <li>
                      <a
                        className='' target="_blank"
                        href='https://web.facebook.com/egorasmarket/'
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        className='' target="_blank"
                        href='https://twitter.com/egorasmarket'
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a className='' target="_blank" href='https://reddit.com/r/egoras'>
                        Reddit
                      </a>
                    </li>
                    <li>
                      <a className='' target="_blank" href='https://instagram.com/egorasofficial'>
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a className='' target="_blank" href='https://www.youtube.com/channel/UCHfi5EwXig46xp5Dx8hVBHQ'>
                        Youtube
                      </a>
                    </li>
                    <li>
                      <a className='' target="_blank" href='https://github.com/EgorasMarket'>
                        Github
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='mt-5 text-left text-xs-center text-sm-left text-md-center'>
                <small style={{fontSize: '12px'}}>
                  <a className='' href=''>
                    © 2020 Egoras Foundation
                  </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
