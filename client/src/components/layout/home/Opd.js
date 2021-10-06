import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { fetch, fetchStats } from "../../../actions/loans";
import Footer from '../parts/Footer';
import Slider from './Slider';
import Moment from 'react-moment';
import 'moment-timezone';
import axios from "axios";
import NumberFormat from "react-number-format";
import {rewardHoldersByVotePower, claimable, getSystemConfig, confirmLoan}  from "../../../web3/index"
import '../../../css/newHomeNE.css';
import { LiteYouTubeEmbed } from "react-lite-youtube-embed";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError
} from "@web3-react/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faGifts, faArrowCircleRight, faArrowRight, faSpinner, faAsterisk, faAtom, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../parts/Header";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import TeamComponent from "./TeamComponent";
import { API_URL as api_url } from "../../../actions/types";
import { faLinkedinIn, faTwitterSquare, faTelegram, faTwitter, faWikipediaW } from "@fortawesome/fontawesome-free-brands";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
const Home = ({loans, fetch, statistics, fetchStats, match, intitiated}) => {
  const handleDragStart = (e) => e.preventDefault();
         
const items = [
  <span onDragStart={handleDragStart}><a href="https://finance.yahoo.com/egoras-protocol-promises-revolutionize-microfinance-145500324.html" target="_blank"><img className="img-fluid" src="/svg/YAHOOFINANCE.svg" /></a></span>,
  <span onDragStart={handleDragStart}><a href="https://www.newsbtc.com/press-releases/egoras-a-decentralized-finance-ecosystem-for-growing-markets/" target="_blank"><img className="img-fluid" src="/svg/NEWSBTC.svg" /></a></span>,
 
  <span onDragStart={handleDragStart}><a href="https://news.yahoo.com/egoras-protocol-promises-revolutionize-microfinance-145500324.html" target="_blank"><img className="img-fluid" src="/svg/YAHOONEWS.svg" /></a></span>,
  <span onDragStart={handleDragStart}><a href="https://blockonomi.com/egoras-a-decentralized-finance-ecosystem-for-growing-markets/" target="_blank"><img className="img-fluid" src="/svg/BLOCKONOMI.svg" /></a></span>,
  <span onDragStart={handleDragStart}><a href="https://ihodl.com/press-releases/2021-02-22/egoras-decentralized-finance-ecosystem-growing-markets/" target="_blank"><img className="img-fluid" src="/svg/IHODL.svg" /></a></span>,
  <span onDragStart={handleDragStart}><a href="https://coingape.com/egoras-a-decentralized-finance-ecosystem-for-growing-markets/" target="_blank"><img className="img-fluid" src="/svg/COINGAPE.svg" /></a></span>,
  <span onDragStart={handleDragStart}><a href="https://apnews.com/press-release/accesswire/business-small-business-corporate-news-microfinance-products-and-services-ee9eb494f14ea9ce6faa51d3f53a20c9" target="_blank"><img className="img-fluid" src="/svg/APNEWS.svg" /></a></span>,
  <span onDragStart={handleDragStart}><a href="https://nairametrics.com/2021/02/13/egoras-partners-with-paid-network-to-provide-low-interest-micro-credit-for-nigerians/" target="_blank"><img className="img-fluid" src="/svg/NAIRAMETRICS.svg" /></a></span>,
  <span onDragStart={handleDragStart}><a href="https://www.independent.ng/egoras-partners-with-paid-network-to-provide-low-interest-micro-credit-for-nigerians/" target="_blank"><img className="img-fluid" src="/svg/INDEPENDENT.svg" /></a></span>,
  <span onDragStart={handleDragStart}><a href="http://www.guardian.ng/news/egoras-partners-paid-network-to-provide-low-interest-micro-credit-for-nigerians/" target="_blank"><img className="img-fluid" src="/svg/THEGUARDIAN.svg" /></a></span>,
  
 
  
];

const items2 = [
  <span onDragStart={handleDragStart}><a href="https://paidnetwork.medium.com/paid-network-partners-with-egoras-85cda2b54e0f" target="_blank"><img className="img-fluid" src="/svg/PAIDNETWORK.svg" /></a></span>,
  <span onDragStart={handleDragStart}><a href="https://nuls.medium.com/nuls-nerve-collaborates-with-egoras-to-offer-small-business-low-interest-microcredit-80785ebc24c" target="_blank"><img className="img-fluid" src="/svg/NULS.svg" /></a></span>,
  <span onDragStart={handleDragStart}><a href="https://twitter.com/QuiverX5/status/1360419900146130944?s=19" target="_blank"><img className="img-fluid" src="/svg/QUIVERX.svg" /></a></span>,
  <span onDragStart={handleDragStart}><a href="https://dappradar.com/ethereum/defi/egoras" target="_blank"><img className="img-fluid" src="/svg/DAPPRADAR.svg" /></a></span>,
  <span onDragStart={handleDragStart}><a href="https://www.mutualng.com/main/index" target="_blank"><img className="img-fluid" src="/svg/MUTUALBENEFITS.svg" /></a></span>,

 
  
];
const res ={
  0: {
      items: 2,
  },
  1024: {
      items: 6
  }
}
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const [loanData, setLoanData] = useState([]);
  const [videos, setVideos] = useState([]);
  const [stats, setStats] = useState({});
  const [getCategory, setGetCategory] = useState('women');
  const [isLoading, setIsLoading] = useState(true);
  const [nextClaimDate, setNextClaimDate] = useState(0);
const context = useWeb3React();
const {
 library,
 account
} = context;


useEffect(() => {
 
  const myId = window.location.hash.slice(1)
  const elem = document.getElementById(myId)
  if (elem) {
    elem.scrollIntoView();
  }

}, [match])
  useEffect(() => {
   

    axios.get(api_url + "/api/loans/get/by/category/"+getCategory, null, config)
      .then(function (response) {
          console.log(response.data.data)
          setLoanData(response.data.data)
          
          setIsLoading(false);
      });
  }, [loans]);

  useEffect(() => {
    // setIsLoading(true);
    console.log(getCategory);
    

        
    
}, []);



  useEffect(() => {
     console.log("Going...");  
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.get(api_url + "/api/loans/pending/100", null, config)
    .then(function (response) {
      console.log("back...", response);  
        setLoanData(response.data.data)
       
        setIsLoading(false);
        // console.log(response.data.data);
        
    }); 
    
  }, [])
  const rewardUsers =  async () =>{
    
    let ret = await claimable(library.getSigner());
    if(ret.status == true){
      rewardHoldersByVotePower(library.getSigner());
    }else{

    }
  }

  const confirm = async (e) =>{
   let id = e.currentTarget.id;
   console.log(id);
  let confirm = await confirmLoan(id, library.getSigner());


  }
  


  

  return (
    <Fragment>
    
    {/* <div className='mt-5'> */}
    <div className=''>
<br />
<br />
<br />
<br />
<br />
      {/* <section className='mt-4 home-body'> */}
      <section className=' home-body'>
       
     
      
        <div className='multiple-bg'>
         
          <div className="container mt-4 col-md-11">
          
            <div className='container'>
          
            
            
              {!isLoading ? (
                <div>
                  <Carousel responsive={responsive} itemclassName="carousel-item-padding-40-px" className="rw">
                      {
                        loanData.map((loan, i) => {
                        if (true) {
                          
                          let percent = 0;
                          let up = 0;
                          let down = 0;
                          let accepted = parseInt(loan.accepted);
                          let declined = parseInt(loan.declined);
                          

                          if(declined == 0 && accepted > 0){
                            up = 100;
                          }else if(accepted == 0 && declined > 0){
                            down = 100
                          }if(accepted == 0 && declined == 0){

                          }else{
                            let wholeNumber = declined +  accepted;
                            let percent = ( accepted/wholeNumber) * 100;
                            
                            if(percent !== Infinity){
                              up = percent;
                              down = (100 - percent);
                            }
                            
                          }
                        }
                        

                        return (
                            <div className="rws">
                              {/* ohoihio */}
                              <div className='loanWrapper'>
                                <div className="loanTop"  style={{
                                    backgroundImage: `url(${loan.cover_image})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    height: "200px"
                                  }}>
                                    <span className="loanCategories text-uppercase">{loan.loan_category}</span>
                                </div>

                                <div className="loanBottom">
                                  <div className=' loanHeadings ttx-1 lineClip lineClip-2'>
                                    {loan.loan_tile}
                                  </div>
                                  <div>
                                    <div className='d-flex justify-content-between'>
                                      <p className="loanPtitle">Loan Amount</p>
                                      <h2 className="loanSubHeadings">
                                        <NumberFormat value={parseFloat(loan.loan_amount)} displayType={'text'} thousandSeparator={true} prefix={'₦'}  />
                                      </h2>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                      <p className="loanPtitle">Interest</p>
                                      <h2 className="loanSubHeadings">24% APY</h2>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                      <p className="loanPtitle">Insurance </p>
                                      <h2 className="loanSubHeadings"><img className="img-fluid MUTUALBENEFITS1" width='160' src="/svg/MUTUALBENEFITS.svg" /></h2>
                                    </div>
                                  </div>
                                </div>
                                <div className='mt-1'>
                                  <button onClick={confirm} id={loan.loanID} className="btn btn-danger btn-block bottom-radius">
                                   Confirm <FontAwesomeIcon icon={faArrowRight} />
                                  </button>
                                  
                                </div>
                              </div>
                            </div>
                          
                          );
                        }
                        )
                      }
                  </Carousel>
                </div>
              ) : (
                <div>
                      <h1 style={{marginTop: "20%"}} className="text-center">
                        <FontAwesomeIcon icon={faCircleNotch} spin /><br />
                        <small>Loading</small>
                      </h1>
                </div>
              )}
            </div>
            
            {/* <Link style={{float: "right"}} className="btn btn-success btn-sm mt-2 " to="/category/all%20loans"> See more </Link> */}
          </div>
 
        </div>
      
       
       
        
      </section>
      
    </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  loans: state.loans,
  statistics: state.statistics,
});

export default connect(mapStateToProps, {
  fetch, fetchStats,
})(Home);

