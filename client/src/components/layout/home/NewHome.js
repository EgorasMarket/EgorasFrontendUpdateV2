import { faArrowRight, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import React, { Fragment, useEffect, useState } from 'react'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import '../../../css/newHome.css';
import { Header2 } from '../parts/Header2';
import NewHeader from '../parts/NewHeader';

const NewHome = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        
        axios.get(
            "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@egoras",
            null,
            null
          ).then((data) =>{
              setPosts(data.data.items);
            console.log(data.data.items);
          })  
         
    }, []);
    return (
        <Fragment>
            <NewHeader  />
        <div className='mt-6'>
           <div className="container newHomeContainer">
               <div className="col-md-8 expand" >
               <h3 className="newHomeHeader text-black">Decentralized Finance Ecosystem For Emerging Markets</h3>
               <div className=" mb-4">
                   <span>
                   Egoras is an advanced decentralized financial ecosystem focusing on simplifying decentralized finance products for users at emerging markets.
                   </span>
                   </div>

                   <a className="buttonC"  href="https://docs.egoras.com/">
                   Read the docs
                   </a>
                   &nbsp;
                   &nbsp;
                   &nbsp;
                   <a className="buttonC ch"  href="https://dex.egoras.org/">
                  <FontAwesomeIcon icon={faArrowRight} /> &nbsp; Launch App

                   </a>
               </div>
               
           

        
           </div> 

        <div className="container-fluid mt-6 mb-4 little-abt-wrapper">
           
        <div className="row ">
                    <div className="col-md-6" style={{paddingLeft: "0px", paddingRight: "0px"}}>
                        <img src="/decentralizedGIF.gif" style={{width: "100%"}} />
                    </div>

                    <div className="col-md-6" style={{paddingLeft: "0px", paddingRight: "0px"}}>
                        <div className="little-abt">
                        <h2><span>The world’s first  decentralised microfinance protocol</span></h2>
                        <p><span>Egoras microfinance protocol provides uncollateralised micro-credit to small entrepreneurs and enterprises who cannot take shelter of banks for banking and other services.</span></p>
                       
                        </div>
                   
                    </div>
                    
                </div>


                
        </div>
           
           <div className="container mt-6">
               <br></br>
               <br></br>
               <br></br>
           <div className="col-md-10" style={{margin: "0 auto"}}>
               <div className="row mb-4 marginBottom">
                    <div className="col-md-6">
                    <div className="">
                        <h2 className="text-black contenth2"><span>Trade At Zero Slippage</span></h2>
                        <p>
                            <span>
                            Arbitrageurs can profit from selling large quantity on crypto-assets at market price with zero spillage unlike most dex.
                            </span>
                            </p>
                            <p>
                            <a href="https://dex.egoras.org"><span>Start trading</span></a>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 text-center">
<div class=" img">
    <img src="/lowInterest.png" className="img-fluid" />
</div>
                    </div>
               </div>


               <div className="row mb-4 marginBottom">
                    <div className="col-md-6">
                    <div className="">
                        <h2 className="text-black contenth2"><span>Earn EGR</span></h2>
                        <p>
                            <span>
                            EGR token holders receive two kinds of rewards. Firstly, they receive EGR voting rewards, which are created through the inflationary monetary policy. Secondly, they receive ETH which is generated when the borrowers pay back the loans.
                            </span>
                            </p>
                            <p>
                            <a href="https://egoras.com"><span>Learn more</span></a>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 text-center">
<div class=" img">
    
<img src="/earnEgoras.png" className="img-fluid" />
    
    </div>
                    </div>
               </div>


               <div className="row marginBottom">
                    <div className="col-md-6">
                    <div className="">
                        <h2 className="text-black contenth2"><span>Decentralized governance</span></h2>
                        <p>
                            <span>
                            A community of EGR token holders are responsible for governing the Egoras Lending Protocol, which includes approving and declining of loans. The EGR tokens locked up during the governance process are returned to the holder 72hrs after the governance process is over.
                            </span>
                            </p>
                            <p>
                            <a href="https://egoras.com/governance"><span>Learn more</span></a>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 text-center">
<div class=" img">
<img src="/governance.png" style={{height: "250px"}} className="img-fluid" />
    
    </div>
                    </div>
               </div>


               <div className="row marginBottom">
                    <div className="col-md-6">
                    <div className="">
                        <h2 className="text-black contenth2"><span>Build with Egoras</span></h2>
                        <p>
                            <span>
                            Launch novel financial products on Egoras or integrate unsecured lending into your app.
                            </span>
                            </p>
                            <p>
                            <a href="https://docs.egoras.com/"><span>Read Documentation</span></a>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 text-center">
<div class=" img">
    
<img src="/buildEgoras.png" style={{height: "150px"}} alt="Ecosystem" />
    
    </div>
                    </div>
               </div>





     
               </div>


               <div className="joinSocialWrapperTop">
            <div className="joinSocialWrapper">
            <h4 className="text-center">Join the community</h4>
            <p><span>
            Learn more about Egoras, chat with the team and others in the community. 
            </span></p>
            
            <div className="socialBox">
             
             
                <a href="https://github.com/EgorasMarket">
                <div class="pages_LinkImg"><svg width="23" height="19" viewBox="0 0 23 19" fill="none"><path d="M11.1343 5.0543L11.184 5.8761L10.3556 5.77547C7.34004 5.38973 4.70558 4.08155 2.46877 1.88448L1.37522 0.794336L1.09355 1.59937C0.497068 3.39392 0.878153 5.2891 2.12082 6.56373C2.78358 7.26814 2.63446 7.36876 1.4912 6.94948C1.09355 6.81531 0.745602 6.71468 0.712464 6.76499C0.596482 6.88239 0.994136 8.4086 1.30895 9.01237C1.73974 9.85095 2.61789 10.6728 3.57889 11.1591L4.39077 11.5449L3.42977 11.5616C2.50191 11.5616 2.46877 11.5784 2.56818 11.9306C2.89956 13.0208 4.20851 14.178 5.66657 14.6811L6.69385 15.0333L5.79913 15.57C4.47361 16.3415 2.91613 16.7776 1.35865 16.8111C0.613051 16.8279 0 16.895 0 16.9453C0 17.113 2.02141 18.0522 3.1978 18.4212C6.72699 19.5113 10.9189 19.0417 14.067 17.1801C16.3038 15.8551 18.5406 13.222 19.5845 10.6727C20.1478 9.31426 20.7112 6.83208 20.7112 5.6413C20.7112 4.86981 20.7609 4.76918 21.6887 3.84675C22.2355 3.31006 22.7491 2.72306 22.8486 2.55534C23.0142 2.23669 22.9977 2.23669 22.1527 2.5218C20.7443 3.02495 20.5455 2.95786 21.2414 2.20314C21.755 1.66645 22.3681 0.693707 22.3681 0.408592C22.3681 0.358277 22.1195 0.442135 21.8379 0.593078C21.5396 0.760793 20.8769 1.01237 20.3798 1.16331L19.4851 1.44842L18.6732 0.894965C18.2258 0.593078 17.5962 0.257648 17.2648 0.157019C16.4198 -0.077782 15.1274 -0.044239 14.3653 0.224105C12.2941 0.978823 10.9852 2.92432 11.1343 5.0543Z" fill="#4AA1EC"></path></svg></div>
                    
                    <span className="bluecolor">Twitter</span> 
                </a>
                <a href="https://t.me/egorasmarket">
                <div class="pages_LinkImg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="url(#paint0_linear_telegram)"></path><path d="M9.79995 17.5C9.41115 17.5 9.47725 17.3532 9.34315 16.983L8.19995 13.2207L17 8" fill="#C8DAEA"></path><path d="M9.80005 17.5C10.1 17.5 10.2325 17.3628 10.4 17.2L12 15.6442L10.0042 14.4407" fill="#A9C9DD"></path><path d="M10.004 14.441L14.84 18.0139C15.3919 18.3184 15.7901 18.1607 15.9276 17.5016L17.8961 8.22529C18.0976 7.41729 17.5881 7.05069 17.0601 7.29039L5.50108 11.7475C4.71208 12.064 4.71678 12.5042 5.35728 12.7003L8.32358 13.6262L15.1909 9.29369C15.5151 9.09709 15.8127 9.20269 15.5685 9.41949" fill="url(#paint1_linear_telegram)"></path><defs><linearGradient id="paint0_linear_telegram" x1="16.008" y1="4.008" x2="10.008" y2="18" gradientUnits="userSpaceOnUse"><stop stop-color="#37AEE2"></stop><stop offset="1" stop-color="#1E96C8"></stop></linearGradient><linearGradient id="paint1_linear_telegram" x1="13.5044" y1="12.0009" x2="15.3771" y2="16.2678" gradientUnits="userSpaceOnUse"><stop stop-color="#EFF7FC"></stop><stop offset="1" stop-color="white"></stop></linearGradient></defs></svg></div>
                <span className="bluecolor">Telegram</span> 
                    
                </a>
                <a href="https://github.com/EgorasMarket">
                    <div className="pages_LinkImg">
                            <img src="/github.svg" className="img-fluid" style={{height: "25px"}} />
                    </div>
                <span className="blackcolor">GitHub</span> 
                    
                </a>
                
                <a href="https://www.linkedin.com/company/egorasmarket/">
                    <div className="pages_LinkImg">
                            <img src="/linkedin-logo.svg" className="img-fluid" style={{height: "25px"}} />
                    </div>
                <span className="blackcolor">Linkedin</span> 
                    
                </a>
             
                <a href="https://egoras.medium.com/">
                    <div className="pages_LinkImg">
                            <img src="/medium.svg" className="img-fluid" style={{height: "25px"}} />
                    </div>
                <span className="blackcolor">Medium</span> 
                    
                </a>

                <a href="https://instagram.com/egorasofficial">
                    <div className="pages_LinkImg">
                            <img src="/instagram.svg" className="img-fluid" style={{height: "25px"}} />
                    </div>
                <span className="blackcolor">Instagram</span> 
                    
                </a>
            </div>
            
            </div>
           

        </div>
           </div>
        </div>

        <div className="container">
            
            <div className="col-md-11" id="ThePostWrapper" style={{margin: "0 auto", marginTop: "-170px", zIndex: "1000"}}>

            <h4 className="text-center mb-4 text-black">Recent blog posts</h4>
            <div className="row blogPost">
            {posts.slice(0, 3).map((post, i) =>{
               return(
                <div className="col-md-4 mb-4">
                <a href={post.guid} target="_blank">

                
                <div className="blog-post-wrapper bg-white">
                   
                    <div className="image-part" style={{backgroundImage: 'url("'+post.thumbnail+'")', 
                backgroundSize: "cover"}}>
                 
                    </div>
                    <div className="text-part">
                    <div class="title">{post.title}</div>
                    <div class="date">
                        
                        <Moment format="D MMM YYYY" withTitle>
                        {post.pubDate}
            </Moment>
                    </div>
                    </div>
                    
                </div>
                </a>
            </div>
               )
 
})}

             

               
                </div>
            </div>
        </div>
<div className="container-fluid" id="tableWrapper">

     <footer className="mainfooter" role="contentinfo">
  <div className="footer-middle">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h4>Resources</h4>
          <ul className="list-unstyled">
            <li><a href="#"></a></li>
            <li><a href="https://drive.google.com/file/d/1tlpfUjRtuH6Lp2ybbYFuFdGTjdjbE7n3/view">Whitepaper</a></li>
            <li><a href="https://egoras.medium.com/" target="_blank">Blog</a></li>
            <li><a href="https://egoras.com/terms" target="_blank">Terms & Condition</a></li>
            <li><a href="https://egoras.com/privacy">Privacy Policy</a></li>
            
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h4>Products</h4>
          <ul className="list-unstyled">
            <li><a href="https://dex.egoras.org/">Trading</a></li>
            <li><a href="https://egoras.com/">Lending</a></li>
            <li><a href="https://egoras.com/governance">Governance</a></li>
            {/* <li><a href="#">DEX</a></li> */}
           
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h4>Developers</h4>
          <ul className="list-unstyled">
            <li><a href="https://docs.egoras.com/">Documentation</a></li>
          
            <li><a href="https://github.com/EgorasMarket">Github</a></li>
          </ul>
        </div>
      </div>
    	<div className="col-md-3">
    		<h4>Follow Us</h4>
            <ul className="social-network social-circle">
             <li><a href="https://web.facebook.com/egorasmarket/" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
             <li><a href="https://www.linkedin.com/company/egorasmarket/" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
             <li><a href="https://twitter.com/egorasmarket" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
             <li><a href="https://www.youtube.com/channel/UCHfi5EwXig46xp5Dx8hVBHQ" className="icoYoutube" title="Youtube"><i className="fa fa-youtube"></i></a></li>
            </ul>				
		</div>
    </div>
	<div className="row">
		<div className="col-md-12 copy">
            <p className="text-center text-black">Storaji LTD regulated by the Money Lenders Act Cap 52 and Pawn Broker's Law Cap 92.  Egoras™ is a registered trademark of Storaji Ltd (RC N0 1316810).</p>
			<p className="text-center text-black">&copy; Copyright 2021 - Storaji LTD.  All rights reserved.</p>
		</div>
	</div>


  </div>
  </div>
</footer>
</div>
        </Fragment>
      
    )
}

export default NewHome;