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
import {rewardHoldersByVotePower, claimable, getSystemConfig}  from "../../../web3/index"
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
// import TeamComponent from "./TeamComponent";
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
  if (account) {
    getSystemConfig(library.getSigner()).then((data) =>{
      if(data.status){
        // setNextClaimDate(parseInt(data.nextClaimDate.toString()));
      }
      
    });
  }

}, [account]);

useEffect(() => {
 
  const myId = window.location.hash.slice(1)
  const elem = document.getElementById(myId)
  if (elem) {
    elem.scrollIntoView();
  }

}, [match])
  useEffect(() => {
    if (loans.length == 0 && typeof loans.data == "undefined") {
      fetch(3);
    }

    if (typeof loans.data !== "undefined" && loans.data.length > 0) {
        setIsLoading(false);
        setLoanData(loans.data);

        console.log(loans.data);
    }

    // axios.get(api_url + "/api/loans/get/by/category/"+getCategory, null, config)
    //   .then(function (response) {
    //       console.log(response.data.data)
    //       setLoanData(response.data.data)
          
    //       setIsLoading(false);
    //   });
  }, [loans]);

  useEffect(() => {
    // setIsLoading(true);
    console.log(getCategory);
    

        
    
}, []);

  useEffect(() => {
    if (statistics.length == 0 && typeof statistics.data == "undefined") {
      fetchStats();
    }

    if (typeof statistics.data !== "undefined" && statistics.data.length > 0) {
      setStats(statistics.data[0]);
        
    }
    
  }, [statistics]);

  useEffect(() => {
       
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

   axios.get(
      // "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAaI0wsj9AhlVkLGdSggQjEvav0HtcyvZI"+
      // "&channelId=UCHfi5EwXig46xp5Dx8hVBHQ&part=snippet,id&order=date"+
      // "&maxResults=6",
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAaI0wsj9AhlVkLGdSggQjEvav0HtcyvZI"+
      "&channelId=UCHfi5EwXig46xp5Dx8hVBHQ&part=snippet,id&order=date"+
      "&maxResults=20",
      null,
      config
    ).then((response)=>{
      console.log(response.data.items);
      setVideos(response.data.items);
    }).catch((err) =>{
      setVideos([{"id":{"videoId":"fPHzVIrRIV4"},"snippet":{"title":"Customer Experience With Mr Innocent"}},{"id":{"videoId":"VkLJz_A2DeM"},"snippet":{"title":"Customer Experience With Catherine Innocent"}},{"id":{"videoId":"_Q4sNYaSqVw"},"snippet":{"title":"Sarah Chukwuemeka - Head Of Business Development"}}])
    })
    
  }, [])
  const rewardUsers =  async () =>{
    
    let ret = await claimable(library.getSigner());
    if(ret.status == true){
      rewardHoldersByVotePower(library.getSigner());
    }else{

    }
  }

  const triggerCategory = e => {
    e.preventDefault();
    setIsLoading(true);
    console.log(e.target.id);
    // setGetCategory(e.target.id);

    const finalCat = e.target.id.replace("%20", " ");

    console.log(finalCat);
    

    if(finalCat == "all loans" ){
      axios.get(api_url + "/api/loans/100", null, config)
      .then(function (response) {
        console.log(response, "Lekeleke");
          setLoanData(response.data.data)
         
          setIsLoading(false);
          // console.log(response.data.data);
          
      });  
    } else {
      axios.get(api_url + "/api/loans/get/by/category/"+e.target.id, null, config)
      .then(function (response) {
          // console.log(response.data.data)
          setLoanData(response.data.data)
          
          setIsLoading(false);
      });
    }

  };


  const triggerStatus = e => {
    e.preventDefault();
    setIsLoading(true);
    console.log(e.target.id);
    // setGetCategory(e.target.id);

    let status = 0;
        switch (e.target.id) {
            case "approved":
                status = 1;
                break;
            case "ongoing":
                status = 2;
                break;
            case "decline":
                status = 0;
                break;
            default:
                break;
        }
        axios.get(api_url + "/api/loans/get/by/status/"+status, null, config)
        .then(function (response) {
            setLoanData(response.data.data)
           
            setIsLoading(false);
        });

  };



  return (
    <Fragment>
    
    {/* <div className='mt-5'> */}
    <div className=''>

      {/* <section className='mt-4 home-body'> */}
      <section className=' home-body'>
        <div className="seperator"></div>
        <div className='mt-4 masthead-bg'>
          <div className="container col-md-11"> 
            <div className="row ">
            
              <div className="col-lg-6 col-md-12 order-md-2 order-lg-1">
                  {/* <p><b>Powered by: Binance Smart Chain</b> </p> */}
                  <p>
                    <b>Powered by: </b> <img className='align-self-center' width='25px' src='/binance_smart_chain_logo.svg' /> <b className="my-0" >Binance Smart Chain</b>
                    {/* <div className='d-inline-block'>
                      <div className="media">
                        <img className='align-self-center mr-1' width='30px' src='/binance_smart_chain_logo.svg' />
                        <div className="media-body">
                          <p className="my-0" style={{lineHeight: 'normal'}}><small><b>Binance Smart Chain</b></small></p>
                        </div>
                      </div>
                    </div> */}
                  </p>
                  <h1 className="theading">
                  <span style={{fontSize: '60px'}} className='defi'>DeFi Platform for</span>  <br /> Uncollateralized<span className="custom-text-success">  micro-credit.</span>

                </h1>
                
                  <p>
                    
                    Egoras microfinance protocol provides uncollateralised micro-credit to small entrepreneurs and enterprises who cannot take shelter of banks for banking and other services.
                  </p>
                  <p><b>Audited by:</b> <img id='certik_logo1' className='img-fluid' width='120' src='/image11.png' /> </p>
                  {/* <p><b>Audited by:</b> {intitiated ? (<img id='' className='img-fluid' width='120' src='/svg/NEWSBTC.svg' />) : (<img id='' className='img-fluid' width='120' src='/image11.png' /> )} </p> */}
                  {/* <Link to="/category/all%20loans" className="noDefaults btn connect-btn  btn-block btn-lg">
                  See Loans</Link> */}
                  <div className='text-md-left text-center mb-4 mb-md-0'>
                    <Link to="/category/all%20loans" className="btn connect-btn px-9 font-weight-bold">
                    See Loans</Link>
                  </div>
                  <div className='my-3'>
                    <h4 className='text-black'>Join our community</h4>
                    <a href='https://t.me/egorasmarket' className='btn btn-light mr-2 community-btn'><img className='img-fluid' id='telegram-logo' width='28' src='/telegram-2.png' /> Telegram</a>
                    <a href='https://twitter.com/egorasmarket' className='btn btn-light community-btn px-4'><img className='img-fluid' id='twitter-logo' width='28' src='/twitter.png' /> Twitter</a>
                  </div>
              </div>

              <div className="col-lg-6 col-md-12 order-md-1 order-lg-2">
                <div className="img-wrapper ">
                {/* <img src="/mobile/ego-phone.png" className="img-fluid phonemockup1 ml-0 ml-md-3" /> */}
                <img src="/mobile/de2.png" className="img-fluid phonemockup1 ml-md-5 ml-0 mt-4 mt-md-0" />
                {/* <img src="/mobile/phonemockup2.png" className="img-fluid phonemockup2" /> */}
                </div>
              </div>

            </div>
          </div>
        </div>
          <div className='py-5'></div>
        <div className='bg-slide py-4'>
          <div className="container col-md-12">
            <div className='container-fluid'>
              <div className="partners-wrapper">
                {/* <p className="letter heading-title">As seen on: </p> */}
                {/* <AliceCarousel mouseTracking items={items} responsive={res}  /> */}

                <div className="col-md-12" style={{margin: "0 auto"}}>
                  <Carousel responsive={responsive}>
    
                      <div className="text-center">
                        <span onDragStart={handleDragStart}><a href="https://cointelegraph.com/press-releases/egoras-raises-13m-in-private-round" target="_blank"><img className="img-fluid" id='ctele2' height='40' src="/svg/ctele2.svg" /></a></span>
                      </div>
                      
                      <div className="text-center">
                        <span onDragStart={handleDragStart}><a href="https://finance.yahoo.com/egoras-protocol-promises-revolutionize-microfinance-145500324.html" target="_blank"><img className="img-fluid" id='yahoofinance' height='40' src="/svg/YAHOOFINANCE.svg" /></a></span>
                      </div>

                      <div className="text-center">
                        <span onDragStart={handleDragStart}><a href="https://www.newsbtc.com/press-releases/egoras-a-decentralized-finance-ecosystem-for-growing-markets/" target="_blank"><img id='NEWSBTC' className="img-fluid" height='40' src="/svg/NEWSBTC.svg" /></a></span>
                      </div>
                      <div className="text-center">
                        <span onDragStart={handleDragStart}><a href="https://news.yahoo.com/egoras-protocol-promises-revolutionize-microfinance-145500324.html" target="_blank"><img id='YAHOONEWS' className="img-fluid" height='40' src="/svg/YAHOONEWS.svg" /></a></span>
                      
                      </div>
                      <div className="text-center">
                        <span onDragStart={handleDragStart}><a href="https://blockonomi.com/egoras-a-decentralized-finance-ecosystem-for-growing-markets/" target="_blank"><img id='BLOCKONOMI' className="img-fluid" height='40' src="/svg/BLOCKONOMI.svg" /></a></span>
                      
                      </div>

                      <div className="text-center">
                        <span onDragStart={handleDragStart}><a href="https://ihodl.com/press-releases/2021-02-22/egoras-decentralized-finance-ecosystem-growing-markets/" target="_blank"><img id='IHODL' className="img-fluid" height='40' src="/svg/IHODL.svg" /></a></span>
                      
                      </div>

                      <div className="text-center">
                        <span onDragStart={handleDragStart}><a href="https://coingape.com/egoras-a-decentralized-finance-ecosystem-for-growing-markets/" target="_blank"><img id='COINGAPE' className="img-fluid" height='40' src="/svg/COINGAPE.svg" /></a></span>
                      
                      </div>

                      <div className="text-center">
                        <span onDragStart={handleDragStart}><a href="https://apnews.com/press-release/accesswire/business-small-business-corporate-news-microfinance-products-and-services-ee9eb494f14ea9ce6faa51d3f53a20c9" target="_blank"><img id='APNEWS' className="img-fluid" height='40' src="/svg/APNEWS.svg" /></a></span>
                      
                      </div>
                      
                      <div className="text-center">
                        <span onDragStart={handleDragStart}><a href="https://www.independent.ng/egoras-partners-with-paid-network-to-provide-low-interest-micro-credit-for-nigerians/" target="_blank"><img id='INDEPENDENT' className="img-fluid" height='40' src="/svg/INDEPENDENT.svg" /></a></span>

                      </div>

                      <div className="text-center">
                        <span onDragStart={handleDragStart}><a href="http://www.guardian.ng/news/egoras-partners-paid-network-to-provide-low-interest-micro-credit-for-nigerians/" target="_blank"><img id='THEGUARDIAN' className="img-fluid" height='40' src="/svg/THEGUARDIAN.svg" /></a></span>

                      </div>

                      <div className="text-center">
                        <span onDragStart={handleDragStart}><a href="https://nairametrics.com/2021/02/13/egoras-partners-with-paid-network-to-provide-low-interest-micro-credit-for-nigerians/" target="_blank"><img id='NAIRAMETRICS' className="img-fluid" height='40' src="/svg/NAIRAMETRICS.svg" /></a></span>

                      </div>
                  </Carousel>
                </div>
                
                {/* <br />
                <br />
                <br /> */}
              </div>
            </div>
          </div>
        </div>
        <div className='multiple-bg'>
          <div className='container mb-4'>
            <br />
            <br />
            <br />
            <div className='fancy-box'>
              <div className='text-center'>
                  <h1 className='text-black font-weight-bold mb-3'>EGR Token use case</h1>
                  <h6 className='text-black'>Use your EGR token to earn high-yield interest and still support the causes you care about to make a real personal impact.</h6>
              </div>
              <div className='lend-steps'>
                <div className='row'>
                  <div className='col-lg-3 col-md-6'>
                    <div className='text-center'>
                      <img className='mb-3' src='/egr-details/explore_categories.svg' width='220' alt='' />
                      <h5 className='text-black'>1. Stake your Token</h5>
                      <p>
                      Browse by category and stake your EGR token to support an entrepreneur.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6'>
                    <div className='text-center'>
                      <img className='mb-3' src='/egr-details/vote_for_a_loan.svg' width='200' alt='' />
                      <h5 className='text-black'>2. Approve Loans</h5>
                      <p>Fund loans without risking your EGR token. </p>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6'>
                    <div className='text-center'>
                      <img className='mb-3' src='/egr-details/get_rewarded.svg' width='200' alt='' />
                      <h5 className='text-black'> 3. Claim Interest weekly</h5>
                      <p>Earn over 20% APR for approving/declining loans.</p>
                    </div>
                  </div>
                  <div className='col-lg-3 col-md-6'>
                    <div className='text-center'>
                      <img className='mb-3' src='/egr-details/repeat.svg' width='230' alt='' />
                      <h5 className='text-black'>4. Repeat</h5>
                      <p>Approve other loans to keep earning high-yield interest.</p>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-4 col-md-11">
          {/* <Slider /> */}
            <div className='container'>
          
              <div >
                    <h3 className='text-dark fancy-head text-center headis'>Recent Projects</h3>
              </div>
              <div className="col-md-9" style={{margin: "0 auto"}}>
                <Carousel responsive={responsive} className='eeee mb-4'>

                    <div className="p-2 linkWrapper cat-con">
                      <button className="category-options active btn" onClick={triggerCategory} id='women'>Women</button>
                    </div>

                    <div className="linkWrapper">
                    
                      <button className="category-options btn" onClick={triggerCategory} id='Agriculture'>Agriculture</button>
                    </div>
                    <div className="linkWrapper">
                      <button className="category-options btn" onClick={triggerCategory} id='retail'>Retail</button>
                    
                    </div>
                    <div className="linkWrapper">
                      <button className="category-options btn" onClick={triggerCategory} id='single%20parents'>Single Parents</button>
                    
                    </div>

                    <div className="linkWrapper">
                      <button className="category-options btn" onClick={triggerCategory} id='all%20loans'>All Loans</button>
                    
                    </div>

                    <div className="linkWrapper">
                      <button className="category-options btn" onClick={triggerStatus} id='decline'>Declined Loans</button>
                    
                    </div>

                    <div className="linkWrapper">
                      <button className="category-options btn" onClick={triggerStatus} id='ongoing'>Ongoing Loans</button>
                    
                    </div>

                    <div className="linkWrapper">
                      <button className="category-options btn" onClick={triggerStatus} id='approved'>Approved Loans</button>
                    
                    </div>


                    {/* <div className="p-2 linkWrapper">
                    <Link class="category-options active btn" to="/category/women">Women</Link>
                    </div>

                    <div className="linkWrapper">
                      <Link class="category-options btn" to="/category/agriculture">Agriculture</Link>
                    </div>
                    <div className="linkWrapper">
                    <Link class="category-options btn" to="/category/retail">Retail</Link>
                      
                      </div>
                      <div className="linkWrapper">
                    <Link class="category-options btn" to="/category/single%20parents">Single Parents</Link>
                      
                      </div>

                      <div className="linkWrapper">
                    <Link class="category-options btn" to="/category/all%20loans">All Loans</Link>
                      
                      </div>

                      <div className="linkWrapper">
                    <Link class="category-options btn" to="/status/decline">Declined Loans</Link>
                      
                      </div>

                      <div className="linkWrapper">
                    <Link class="category-options btn" to="/status/ongoing">Ongoing Loans</Link>
                      
                      </div>

                      <div className="linkWrapper">
                    <Link class="category-options btn" to="/status/approved">Approved Loans</Link>
                      
                      </div> */}
                </Carousel>
              </div>
              {!isLoading ? (
                <div> 
                  <Carousel responsive={responsive} itemclassName="carousel-item-padding-40-px" className="rw">
                      {
                        loanData.map((loan, i) => {
                        if (loan.loan_category === getCategory) {
                          console.log(loan.loan_category);
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
                                        <NumberFormat value={parseFloat(loan.loan_amount)} displayType={'text'} thousandSeparator={true} prefix={'$'}  />
                                      </h2>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                      <p className="loanPtitle">Interest</p>
                                      <h2 className="loanSubHeadings">12% APY</h2>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                      <p className="loanPtitle">Insurance </p>
                                      <h2 className="loanSubHeadings"><img className="img-fluid MUTUALBENEFITS1" width='160' src="/svg/MUTUALBENEFITS.svg" /></h2>
                                    </div>
                                  </div>
                                </div>
                                <div className='mt-1'>
                                  <a href={"/loan/details/" + loan.id} className="btn connect-btn btn-block bottom-radius">
                                    Learn More <FontAwesomeIcon icon={faArrowRight} />
                                  </a>
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
          <div className='mt-4'>
            <br />
            {/* <br />
            <br /> */}

              <div className="container-fluid video-wrapper" id="what-is-egoras">
                <div className="container">
                  <div v className="row vidText ">
                      <div className="col-md-8 mx-auto">
                        <h2 className="mb-4 text-center w-75 mx-auto text-black font-weight-bold">The world’s first decentralised <br /> microfinance protocol</h2>
                        <LiteYouTubeEmbed id={"RXPPrnrWuss"} title={"Egoras lending protocol"} />
                      </div>
                      <div className='row'>
                        <div className="col-md-6">
                          
                          
                            <div className='mt-4'>
                              <h5> <img src='checked-data.svg' width='20' /> Low-Interest Micro-Credit</h5>
                              <p style={{fontWeight: '500'}}>
                                Generate Egoras stable currency when your credit is approved, and destroy the stable currency when you repay the credit.
                              </p>
                            </div>
                        
                            <div className='mt-4'>
                              <h5> <img src='checked-data.svg' width='20' /> Borrow with no collateral regardless of your location</h5>
                              <p style={{fontWeight: '500'}}> No collateral is required for credit on Egoras protocol.</p>
                            </div>

                            <div className='mt-4'>
                              <h5> <img src='checked-data.svg' width='20' /> Build your reputation</h5>
                              <p style={{fontWeight: '500'}}>Build your reputation score and get access to micro-credit from Egoras protocol.</p>
                            </div>

                        </div>
                        <div className='col-md-6'>
                          
                            <div className='mt-4'>
                              <h5> <img src='checked-data.svg' width='20' /> Lend Funds without risking your capital</h5>
                              <p style={{fontWeight: '500'}}>There is no loss of capital when you participate in approving credits on Egoras protocol. Your capital is released immediately after the credit is approved on the protocol.</p>
                            </div>

                            <div className='mt-4'>
                              <h5> <img src='checked-data.svg' width='20' /> Earn high-yield on credits</h5>
                              <p style={{fontWeight: '500'}}>Earn high weekly interest when you participate in credit governance.</p>
                            </div>
                        </div>
                      </div>

                  </div>
                </div>
              </div>
          
            
          </div>
        </div>
        <div className="container">
         
            <div className="row">

            </div>
        </div>
        <div className='protocol'>
          <div className='container mb-4'>
              <br />
              <br />
              <br />
              <div className='text-center'>
                  <h1 className='text-black font-weight-bold'>Two assets that power the <br /> Egoras protocol</h1>
              </div>
              <div className='crowdfund-container'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='text-center asset-card'>
                      <div className='text-center p-0'>
                        <img className='mb-3' src='/svg/EGORASMAINLOGO.svg' width='200' alt='' />
                        <h5>Egoras (EGS)</h5>
                      </div>
                      <p className='text-md-left'>
                      EGS is a decentralized cryptocurrency stabilized against the value of the US dollar, it uses egoras loan governance to respond to changing market conditions and preserve its value against the US dollar. Unlike other popular stablecoins whose value is backed directly by USD, it’s backed by crypto collaterals.
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='text-center asset-card'>
                      <div className='text-center p-0'> 
                        <img className='mb-3' src='/svg/EGORASSTABLELOGO.svg' width='200' alt='' />
                        <h5>Egoras Right (EGR)</h5>
                      </div>
                      <p className='text-md-left'>EGR is the fluctuating token of egoras protocol and it plays a role in stabilizing EGS and the governance of the loan protocol. EGR is required for paying the interest and this means that as the adoption and demand for the Egoras Credit system increases, there will be additional demand for EGR.</p>
                    </div>
                  </div>
                  {/* <div className='col-md-4'>
                    <div className='text-center'>
                      <img className='mb-3' src='/reward.png' width='100' alt='' />
                      <h5>Get rewarded</h5>
                      <p>EGR holders are responsible for governing the Egoras Lending Protocol, which includes approving and declining of loans. The EGR tokens locked up during the governance process are returned to the holder 72hrs after the governance process is over.</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          <div className='egoras-team' id="egoras-team">
              <div className='container'>
                <h1 className='text-black font-weight-bold mb-3 text-center'>Meet the Team</h1>
                {/* <TeamComponent /> */}
                <div className="row">
                  <div className="col-lg-12 col-md-10 col-sm-9 mx-auto">
                      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                          <ol className="carousel-indicators">
                              <li data-target="#carouselExampleControls" data-slide-to="0" className="active m c-indicator"></li>
                              <li data-target="#carouselExampleControls" data-slide-to="1" className='c-indicator'></li>
                              <li data-target="#carouselExampleControls" data-slide-to="2" className='c-indicator'></li>
                              <li data-target="#carouselExampleControls" data-slide-to="3" className='c-indicator'></li>
                              <li data-target="#carouselExampleControls" data-slide-to="4" className='c-indicator'></li>
                              <li data-target="#carouselExampleControls" data-slide-to="5" className='c-indicator'></li>
                              <li data-target="#carouselExampleControls" data-slide-to="6" className='c-indicator'></li>
                              <li data-target="#carouselExampleControls" data-slide-to="7" className='c-indicator'></li>
                              <li data-target="#carouselExampleControls" data-slide-to="8" className='c-indicator'></li>
                              <li data-target="#carouselExampleControls" data-slide-to="9" className='c-indicator'></li>
                              <li data-target="#carouselExampleControls" data-slide-to="10" className='c-indicator'></li>
                              <li data-target="#carouselExampleControls" data-slide-to="11" className='c-indicator'></li>
                              <li data-target="#carouselExampleControls" data-slide-to="12" className='c-indicator'></li>
                          </ol>
                          <div className="carousel-inner">
                              <div className="carousel-item active">
                                  {/* <img className="d-block w-100" src="/1e.jpg" alt="First slide" /> */}
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/harry1.jpg' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                        <p>Harry oversees the strategy, technical and team coordination at Storaji LTD.</p> <p>Harry is an entrepreneur who has previously co-founded two companies. His mission in life is to solve the problems that are stopping developing nations from achieving its potential, and he's particularly concerned about the economic inequality and the risk it poses to humanity.</p>
                                        <h1 className='text-black font-weight-bold'>Ugoji Harry</h1>
                                        <h5 className='text-muted'>FOUNDER AND CEO</h5>
                                        <a className='mr-3 text-black' href='https://www.linkedin.com/in/harryugojiofficial/'><FontAwesomeIcon className='fa-2x' icon={faLinkedinIn} /></a>
                                        <a className='mr-3 text-black' href='https://twitter.com/ugojiharry'><FontAwesomeIcon className='fa-2x' icon={faTwitterSquare} /></a>
                                        <a className='mr-3 text-black' href='https://t.me/harryugoji'><FontAwesomeIcon className='fa-2x' icon={faTelegram} /></a>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/ndubuisi-ekekwe.jpg' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                        <h1 className='text-black font-weight-bold'>Ndubuisi Ekekwe</h1>
                                        <h5 className='text-muted'>Product Advisor</h5>
                                        <h5 className='text-muted'>Founder of First Atlantic Semiconductors & Microelectronics</h5>
                                        <a className='mr-3 text-black' href='https://www.linkedin.com/in/ndubuisi-ekekwe-36068210/'><FontAwesomeIcon className='fa-2x' icon={faLinkedinIn} /></a>
                                        <a className='mr-3 text-black' href='https://en.wikipedia.org/wiki/Ndubuisi_Ekekwe'><FontAwesomeIcon className='fa-2x' icon={faWikipediaW} /></a>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  {/* <img className="d-block w-100" src="/2e.jpg" alt="Second slide" /> */}
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/iz.jpg' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                        <p>Isdore oversees the legal research at Storaji LTD.</p> <p>Isdore holds a First Class Honours degree in law from Nnamdi Azikiwe University, he also obtained his LLM degree with Distinction from the University of Kent, United Kingdom.</p>
                                        <h1 className='text-black font-weight-bold'>Isdore Ozuo</h1>
                                        <h5 className='text-muted'>CO-FOUNDER AND LEGAL</h5>
                                        <a className='mr-3 text-black' href='https://www.linkedin.com/in/izunna-isdore-ozuo-8ab21980/'><FontAwesomeIcon className='fa-2x' icon={faLinkedinIn} /></a>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  {/* <img className="d-block w-100" src="/3e.jpg" alt="Third slide" /> */}
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/chijioke.jpg' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                        <p>Chijioke is managing Storaji’s finances and making sure the team is fully compliant.</p> <p>He has more than 20 years of experience in accounting and finance. Previously, He was the Gen. service officer at Afor-isike community Bank LTD and a lecturer at Port Harcourt, study Center Chartered Institute of Administration. He has also performed various operational roles at the  Saclux Industries, Gmicord Interbiz and Korama Clover Industries LTD.</p>
                                        <h1 className='text-black font-weight-bold'>Chijioke Nwankwo</h1>
                                        <h5 className='text-muted'>ACMA, CPA, ACIA: Head of Finance</h5>
                                        
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  {/* <img className="d-block w-100" src="/3e.jpg" alt="Third slide" /> */}
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/dubem.jpg' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                        {/* <p>Michael is designing, analyzing and overseeing the Egoras Microfinance Protocol and architecting the Egoras protocol implementation.</p> <p>Previously, he was the CTO of the bit begin a cryptocurrency exchange, Ukiwe logistics and kemfe social network.</p> */}
                                        <h1 className='text-black font-weight-bold'>Chidubem Michael</h1>
                                        <h5 className='text-muted'>Lead Software Engineer</h5>

                                        {/* <a className='mr-3 text-black' href='https://www.linkedin.com/in/chidubem-michael-9a0858158/'><FontAwesomeIcon className='fa-2x' icon={faLinkedinIn} /></a> */}
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  {/* <img className="d-block w-100" src="/3e.jpg" alt="Third slide" /> */}
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/p12.jpg' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                      {/* <p>Moses is overseeing the optimisation of the user experience of egoras microfinance protocol.</p> <p>He has previously worked with top artist in Africa like Frank Edward.</p> */}
                                        <h1 className='text-black font-weight-bold'>Moses Onuseme</h1>
                                        <h5 className='text-muted'>UI Designer</h5>
                                        <a className='mr-3 text-black' href='https://www.linkedin.com/in/onseme-mudiaga-moses-1a335a131/'><FontAwesomeIcon className='fa-2x' icon={faLinkedinIn} /></a>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              {/* <div className="carousel-item">
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/ogbonne.jpg' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                      <p>Ogbonne is developing tactics and partnerships to get our protocol into the hands of users.</p> <p>Ogbonne is an energetic and motivated young woman with a strong desire to be satiated with new ideas knowledge and willing to pay the price of hard work.</p>
                                        <h1 className='text-black font-weight-bold'>Ogbonne Okechukwu</h1>
                                        <h5 className='text-muted'>Business Development</h5>
                                      </div>
                                    </div>
                                  </div>
                              </div> */}
                              <div className="carousel-item">
                                  {/* <img className="d-block w-100" src="/3e.jpg" alt="Third slide" /> */}
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/ifunaya.jpg' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                      {/* <p>Enyendu Jennifer Ifunanya is the Business Development Manager. She onboards small businesses into EGORAS, and Recover the Organizations token from the borrower. </p> <p>Her mission in life is to solve the economic inequality that poses a huge risk to humanity.</p> */}
                                       <div className='my-auto'>
                                       <h1 className='text-black font-weight-bold'>Enyendu Jennifer</h1>
                                        <h5 className='text-muted'>Business Development</h5>
                                        <a className='mr-3 text-black' href='https://www.linkedin.com/in/jennifer-enyendu-259b24201/'><FontAwesomeIcon className='fa-2x' icon={faLinkedinIn} /></a>
                                        <a className='mr-3 text-black' href='https://t.me/Nivi_e'><FontAwesomeIcon className='fa-2x' icon={faTelegram} /></a>
                                       </div>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  {/* <img className="d-block w-100" src="/3e.jpg" alt="Third slide" /> */}
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/bishop.jpg' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                      {/* <p>Anosike Victor Kelechi a vibrant young fellow overseeing the partnership to onboard small-scale entrepreneurs into Egoras.</p> <p>Anosike is an energetic and motivated young man with the sole aim of promoting the organizations' objectives and produce innovative solutions capable of satisfying the financial well-being of the customers.</p> */}
                                        <h1 className='text-black font-weight-bold'>Anosike Victor</h1>
                                        <h5 className='text-muted'>Business Development</h5>
                                        <a className='mr-3 text-black' href='https://www.linkedin.com/in/anosike-victor-065b27201/'><FontAwesomeIcon className='fa-2x' icon={faLinkedinIn} /></a>
                                        <a className='mr-3 text-black' href='https://t.me/harryugoji'><FontAwesomeIcon className='fa-2x' icon={faTelegram} /></a>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  {/* <img className="d-block w-100" src="/3e.jpg" alt="Third slide" /> */}
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/dam.jpg' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                      {/* <p>Sarah is overseeing  good relationships between small businesses that take loans from Egoras microfinance protocol.</p> <p> She is a motivated woman who works with the sole aim of promoting the organizational objectives and contributing positively to the growth and development of the organization.</p> */}
                                        <h1 className='text-black font-weight-bold'>Sarah Chukwuemeka</h1>
                                        <h5 className='text-muted'>Finance</h5>
                                        <a className='mr-3 text-black' href='https://www.linkedin.com/in/sarah-chibuzor-057811201/'><FontAwesomeIcon className='fa-2x' icon={faLinkedinIn} /></a>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  {/* <img className="d-block w-100" src="/3e.jpg" alt="Third slide" /> */}
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/hope2.jpg' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                      {/* <p>Hope is a versatile account officer with the desire to work in a diverse and challenging environment that fosters growth, development, innovation, and creativity. She possesses analytical and problem-solving skills.</p> */}
                                        <h1 className='text-black font-weight-bold'>Anyanwu Hope Chika</h1>
                                        <h5 className='text-muted'>Finance</h5>
                                        <a className='mr-3 text-black' href='https://www.linkedin.com/in/anyanwu-hope-chika-799981203/'><FontAwesomeIcon className='fa-2x' icon={faLinkedinIn} /></a>
                                        <a className='mr-3 text-black' href='https://t.me/HopeChika'><FontAwesomeIcon className='fa-2x' icon={faTelegram} /></a>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  {/* <img className="d-block w-100" src="/3e.jpg" alt="Third slide" /> */}
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/ella.jpg' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                        {/* <p>Emmanuella Nyong is a lady of visionary and enthusiastic character. She is a member of the Loan Recovery Department, with a good relationship and Alliance with them on their business growth and progress.</p> */}
                                        <h1 className='text-black font-weight-bold'>Emmanuella Nyong</h1>
                                        <h5 className='text-muted'>Business Development</h5>
                                        {/* <a className='mr-3 text-black' href='https://t.me/Emmanuellanyong'><FontAwesomeIcon className='fa-2x' icon={faTelegram} /></a> */}
                                        <a className='mr-3 text-black' href='https://www.linkedin.com/in/emmanuella-nyong-527a46205/'><FontAwesomeIcon className='fa-2x' icon={faLinkedinIn} /></a>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  {/* <img className="d-block w-100" src="/3e.jpg" alt="Third slide" /> */}
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/try-this.jpg' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                        {/* <p>Alaneme Chidera Adaobi is a business developer who connects to customers through the use of social media platforms. She tends to solve different economic differences by bringing ideas on through these platforms.</p> */}
                                        <h1 className='text-black font-weight-bold'>Alaneme Chidera Adaobi</h1>
                                        <h5 className='text-muted'>Online Business Developer</h5>
                                        {/* <a className='mr-3 text-black' href='https://t.me/Alanderah'><FontAwesomeIcon className='fa-2x' icon={faTelegram} /></a> */}
                                        <a className='mr-3 text-black' href='https://www.linkedin.com/in/alaneme-chidera-093908209/'><FontAwesomeIcon className='fa-2x' icon={faLinkedinIn} /></a>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  {/* <img className="d-block w-100" src="/3e.jpg" alt="Third slide" /> */}
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/mi.jpg' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                        {/* <p>Okoye Miracle an energetic lady in the customer relations team, her sole aim is to maintain an existing good relationship between EGORAS and her clients.</p> */}
                                        <h1 className='text-black font-weight-bold'>Okoye Miracle</h1>
                                        <h5 className='text-muted'>Finance</h5>
                                        {/* <a className='mr-3 text-black' href='https://t.me/MimiOkoye33'><FontAwesomeIcon className='fa-2x' icon={faTelegram} /></a> */}
                                        <a className='mr-3 text-black' href='https://www.linkedin.com/in/miracle-okoye-165a09209/'><FontAwesomeIcon className='fa-2x' icon={faLinkedinIn} /></a>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  {/* <img className="d-block w-100" src="/3e.jpg" alt="Third slide" /> */}
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/p4.jpg' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                      {/* <p>Ebri Goodness is a Web developer that handles the front end/UI of the organization. His vision is to give ours and our customers a perfect user experience on our platform.</p> */}
                                        <h1 className='text-black font-weight-bold'>Ebri Goodness</h1>
                                        <h5 className='text-muted'>UI Developer</h5>
                                        {/* <a className='mr-3 text-black' href='https://t.me/Ebrinix'><FontAwesomeIcon className='fa-2x' icon={faTelegram} /></a> */}
                                        <a className='mr-3 text-black' href='https://www.linkedin.com/in/ebri-goodness-01a544209/'><FontAwesomeIcon className='fa-2x' icon={faLinkedinIn} /></a>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  {/* <img className="d-block w-100" src="/3e.jpg" alt="Third slide" /> */}
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/anosike.jpg' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                      {/* <p>Anosike Beulah is a business developer. she is a self-motivated and value-adding individual. She aims to bring ideas that will aid both the small-scale entrepreneur and the organization through Business Evaluations.</p> */}
                                        <h1 className='text-black font-weight-bold'>Anosike Beulah</h1>
                                        <h5 className='text-muted'>Business Development</h5>
                                        {/* <a className='mr-3 text-black' href='https://t.me/harryugoji'><FontAwesomeIcon className='fa-2x' icon={faTelegram} /></a> */}
                                        <a className='mr-3 text-black' href='https://www.linkedin.com/in/beulah-anosike-7b0641209/'><FontAwesomeIcon className='fa-2x' icon={faLinkedinIn} /></a>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  {/* <img className="d-block w-100" src="/3e.jpg" alt="Third slide" /> */}
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/new1.jpg' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                      {/* <p>Ivan Castillo is the founder of QuiverX Capital. He brings a wealth of leadership experience, including over 10 years of Project Management in both the government and civilian sectors. USMC Veteran and certified in Lean Six Sigma since 2012, with a proven ability to maximize workflows and enhance product output.</p> */}
                                        <h1 className='text-black font-weight-bold'>Ivan Castillo</h1>
                                        <h5 className='text-muted'>Product Advisor</h5>
                                        <h5 className='text-muted'>Founder of QuiverX capital</h5>
                                        {/* <a className='mr-3 text-black' href='https://t.me/harryugoji'><FontAwesomeIcon className='fa-2x' icon={faTelegram} /></a> */}
                                        <a className='mr-3 text-black' href='https://www.linkedin.com/in/quiverx/'><FontAwesomeIcon className='fa-2x' icon={faLinkedinIn} /></a>
                                        <a className='mr-3 text-black' href='https://t.me/Y0giJi'><FontAwesomeIcon className='fa-2x' icon={faTelegram} /></a>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  {/* <img className="d-block w-100" src="/3e.jpg" alt="Third slide" /> */}
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/alex-man.png' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                      {/* <p>Ivan Castillo is the founder of QuiverX Capital. He brings a wealth of leadership experience, including over 10 years of Project Management in both the government and civilian sectors. USMC Veteran and certified in Lean Six Sigma since 2012, with a proven ability to maximize workflows and enhance product output.</p> */}
                                        <h1 className='text-black font-weight-bold'>Alex Man</h1>
                                        <h5 className='text-muted'>Media Advisor</h5>
                                        <h5 className='text-muted'>Partner at Jun Capital</h5>
                                        {/* <a className='mr-3 text-black' href='https://t.me/harryugoji'><FontAwesomeIcon className='fa-2x' icon={faTelegram} /></a> */}
                                        <a className='mr-3 text-black' href='http://linkedin.com/in/alex-man'><FontAwesomeIcon className='fa-2x' icon={faLinkedinIn} /></a>
                                        {/* <a className='mr-3 text-black' href='https://t.me/Y0giJi'><FontAwesomeIcon className='fa-2x' icon={faTelegram} /></a> */}
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  {/* <img className="d-block w-100" src="/3e.jpg" alt="Third slide" /> */}
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/DANAILSTEFANOV.jpg' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                      {/* <p>Danail Stefanov is the Founder of the Crypto Revolution Group. Crypto Revolution is a successful cryptocurrency and blockchain Telegram channel made up of a group of enthusiasts, investors, and traders. Danny is very successful doing Marketing for many Crypto Projects like Paid Network, Base Protocol, DIA, EOS, Monero, and more.</p> */}
                                        <h1 className='text-black font-weight-bold'>Danail Stefanov</h1>
                                        <h5 className='text-muted'>Media Advisor</h5>
                                        <h5 className='text-muted'>Founder of Crypto Revolution Group</h5>
                                        <a className='mr-3 text-black' href='https://t.me/dani_unss'><FontAwesomeIcon className='fa-2x' icon={faTelegram} /></a>
                                        <a className='mr-3 text-black' href='https://twitter.com/dani_unss'><FontAwesomeIcon className='fa-2x' icon={faTwitter} /></a>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  {/* <img className="d-block w-100" src="/3e.jpg" alt="Third slide" /> */}
                                  <div className='porfolio-card my-2 mx-2'>
                                    <div className='row'>
                                      <div className='col-md-3'>
                                        <div>
                                          <img className='img-fluid rounded-circle' src='/teams/SAI.jpg' />
                                        </div>
                                      </div>
                                      <div className='col-md-9'>
                                      {/* <p>Sai MayReddy is a cloud engineer that has worked with JP Morgan, Capital one and lululemon.</p> */}
                                        <h1 className='text-black font-weight-bold'>Sai MayReddy</h1>
                                        <h5 className='text-muted'>Product Advisor</h5>
                                        <h5 className='text-muted'>Ex JP Morgan and Capital One</h5>
                                        <a className='mr-3 text-black' href='https://t.me//saimaxnode'><FontAwesomeIcon className='fa-2x' icon={faTelegram} /></a>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                          </div>
                          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                              <span className='caroousel-con'><span className="carousel-control-prev-icon" aria-hidden="true"></span></span>
                              <span className="sr-only">Previous</span>
                          </a>                                            
                          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                              <span className='caroousel-con'><span className="carousel-control-next-icon" aria-hidden="true"></span></span>
                              <span className="sr-only">Next</span>
                          </a>
                      </div>
                  </div>
              </div>
                
              </div>

                <div className='partners bg-slide mt-5'>
                    {/* <br /> */}
                    <br />
                    <br />
                    {/* <p className="letter heading-title texUse EGR Token In Four Easy Stepst-center">Partners: </p> */}
                    {/* <AliceCarousel mouseTracking items={items2} responsive={res}  /> */}
                    <div className="col-md-12" style={{margin: "0 auto"}}>
                      {/* <Carousel responsive={responsive}>

                      </Carousel> */}

                      <div className='row'>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                            <span onDragStart={handleDragStart}><a href="https://paidnetwork.medium.com/paid-network-partners-with-egoras-85cda2b54e0f" target="_blank"><img id='PAIDNETWORK' className="img-fluid mt-md-1 mt-4" src="/svg/PAIDNETWORK.svg" /></a></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                            <span onDragStart={handleDragStart}><a href="https://mantradao.com/" ><img id='mantra-logo-white' className="img-fluid mt-1" width='150' src="/latest-logos/mantra-logo-white.svg" /></a></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                            <span onDragStart={handleDragStart}><a href="https://launchpool.xyz/" target="_blank"><img id='launchpool-dark' className="img-fluid mt-md-3 mt-0" src="/svg/launchpooldark-image.svg" width='200' /></a></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                            <span onDragStart={handleDragStart}><a href="https://nuls.medium.com/nuls-nerve-collaborates-with-egoras-to-offer-small-business-low-interest-microcredit-80785ebc24c" target="_blank"><img id='NULS' className="img-fluid" src="/svg/NULS.svg" /></a></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                          <span onDragStart={handleDragStart}><a href="https://ferrum.network/" target="_blank"><img id='ferrum-network-white' className="img-fluid mt-md-3 mt-3" src="/svg/ferrum-network-white.svg" width='230' /></a></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                            <span onDragStart={handleDragStart}><a href='https://juncapital.io/'><img id='jun-logo-white' className="img-fluid mt-md-3 mt-0" width='' src="/latest-logos/jun-logo-white.svg" width='170' /></a></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                            <span onDragStart={handleDragStart}><a href="https://exnetwork.community/" target="_blank"><img id='ex-dark' className="img-fluid mt-md-3 mt-0" src="/svg/ex-capital-white.svg" width='120' /></a></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                          <span onDragStart={handleDragStart}><a href="https://titans.ventures/" target="_blank"><img id='TITANS2' className="img-fluid mt-md-3 mt-3" src="/svg/TITANS2.svg" width='200' /></a></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                            <span onDragStart={handleDragStart}><a href='https://buidlhodl.capital/'><img id='build-logo-white' className="img-fluid mt-md-2 mt-2" width='' src="/latest-logos/build-logo-white.svg" width='170' /></a></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                            <span onDragStart={handleDragStart}><a href="http://www.threem.capital" target="_blank"><img id='threecapital-black' className="img-fluid mt-1" src="/svg/threecapital-black.svg" width='200' /></a></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                          <span onDragStart={handleDragStart}><a href="https://yellowroad.app/" target="_blank"><img id='yellow-road-white' className="img-fluid mt-md-3 mt-3" src="/svg/yellow-road-white.svg" width='200' /></a></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                            <span onDragStart={handleDragStart}><a href='https://resurgence.capital/'><img id='resurgence-logo-white' className="img-fluid" width='' src="/latest-logos/resurgence-logo-white.svg" width='150' /></a></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                            <span onDragStart={handleDragStart}><a href="https://twitter.com/QuiverX5/status/1360419900146130944?s=19" target="_blank"><img id='QUIVERX' className="img-fluid mt-md-4 mt-2" src="/svg/QUIVERX.svg" width='200' /></a></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                            <span onDragStart={handleDragStart}><a href='https://propeller.fund/'><img id='propel-logo-white' className="img-fluid mt-md-3 mt-0" width='' src="/latest-logos/propel-logo-white.svg" width='170' /></a></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                            <span onDragStart={handleDragStart}><a href="https://www.blackdragon.io/" target="_blank"><img id='blackdragon-dark' className="img-fluid mt-md-3 mt-0" src="/svg/blackdragon-dark.svg" width='160' /></a></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                            <span onDragStart={handleDragStart}><a href='https://n3rd.finance/'><img id='n3rd-logo-white1' className="img-fluid mt-md-4 mt-2" src="/latest-logos/n3rd-logo-white.svg" width='180' /></a></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          
                          <div className="p-2 text-center">
                            <span onDragStart={handleDragStart}><a href="https://www.mutualng.com/main/index" target="_blank"><img className="img-fluid MUTUALBENEFITS mt-md-3 mt-0" src="/svg/MUTUALBENEFITS.svg" /></a></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                            <span onDragStart={handleDragStart}><img id='spykefast' className="img-fluid mt-md-3 mt-0" width='' src="/svg/skyfast-dark.svg" width='200' /></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                            <span onDragStart={handleDragStart}><a href="https://chaoscapital.info/" target="_blank"><img id='chaos-black' className="img-fluid mt-1" width='180' src="/svg/chaos-black.svg" /></a></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                            <span onDragStart={handleDragStart}><img id='aussie-black' className="img-fluid" src="/svg/aussie-black.svg" width='180' /></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                            <span onDragStart={handleDragStart}><img id='ventures-black' className="img-fluid" width='' src="/svg/ventures-black.svg" width='170' /></span>
                          </div>
                        </div>
                        <div className='col-md-3 col-6'>
                          <div className="p-2 text-center">
                          <span onDragStart={handleDragStart}><a href="https://www.eversecapital.com/index.html" target="_blank"><img id='everse-logo-2' className="img-fluid mt-md-3 mt-3" src="/svg/everse-logo-1.png" width='200' /></a></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
              
                </div>
              
          </div>
        </div>
        <div className='' id="our-stories">
          <div className='container'>
            <div className='text-center'>
              <h1 className='text-black font-weight-bold my-4'>Our Stories</h1>
              {/* <div className='row blogPost'> */}
              
              

              <Carousel responsive={responsive} className=''>

                {videos.map((video, i) =>{
                  let url = "https://www.youtube.com/watch?v="+video.id.videoId;
                  
                  return (
                  <div className="col-md-12 mb-4">
                    <LiteYouTubeEmbed id={video.id.videoId} title={video.snippet.title} />
                  </div>
              
                );
                })}

              </Carousel>
               
                
              {/* </div> */}
              
            </div>
            {/* <div className='row'>
              <div className='col-md-3'>
                <div className='categories p-2 text-center'>
                  <div className='category-img'>
                    <img src='/tractor.png' width='75' alt='' />
                  </div>
                  <div className='category-text'>Agriculture</div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='categories p-2 text-center'>
                  <div className='category-img'>
                    <img src='/retail.png' width='75' alt='' />
                  </div>
                  <div className='category-text'>Retail</div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='categories p-2 text-center'>
                  <div className='category-img'>
                    <img src='/woman.png' width='75' alt='' />
                  </div>
                  <div className='category-text'>Women</div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='categories p-2 text-center'>
                  <div className='category-img'>
                    <img src='/mother.png' width='75' alt='' />
                  </div>
                  <div className='category-text'>Single Parents</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        
      </section>
      <Footer />
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

