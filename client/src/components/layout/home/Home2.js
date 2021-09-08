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
import { faCheckCircle, faGifts } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../parts/Header";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import TeamComponent from "./TeamComponent";
const Home = ({loans, fetch, statistics, fetchStats, match}) => {
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
        setNextClaimDate(parseInt(data.nextClaimDate.toString()));
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
      fetch(8);
    }

    if (typeof loans.data !== "undefined" && loans.data.length > 0) {
        setLoanData(loans.data);

        console.log(loans.data);
    }
  }, [loans]);

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
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAaI0wsj9AhlVkLGdSggQjEvav0HtcyvZI"+
      "&channelId=UCHfi5EwXig46xp5Dx8hVBHQ&part=snippet,id&order=date"+
      "&maxResults=3",
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
  return (
    <Fragment>
    
    <div className='mt-6'>

      <section className='mt-4'>
        <div className="seperator"></div>
      <div className="container mt-4 col-md-10">
        <div className="row ">
       
        <div className="col-md-6">
          <div className="img-wrapper ">
          <img src="/mobile/phonemockup1.png" className="img-fluid phonemockup1" />
          <img src="/mobile/phonemockup2.png" className="img-fluid phonemockup2" />
          </div>
        </div>
        <div className="col-md-6">
           <h1 className="theading">
           Decentralized  <br /> Uncollateralized<span className="text-success">  micro-credit.</span>

           </h1>
           
           <p>
            <p>Powered by: <b>Binance Smart Chain</b> </p>
            <p>Audited by: <b>Certik</b> </p>
            Egoras microfinance protocol provides uncollateralised micro-credit to small entrepreneurs and enterprises who cannot take shelter of banks for banking and other services.

</p>


<Link to="/category/all%20loans" className="noDefaults btn btn-success  btn-block btn-lg">
See Loans
                           </Link>
        </div>

      

        
      </div>
      
      
      
        {/* <Slider /> */}
        <div className='py-5'>
        
          </div>
          <div className='container'>
          <div class="partners-wrapper">
            <p className="letter heading-title">As seen on: </p>
            <AliceCarousel mouseTracking items={items} responsive={res}  />
            
            <br />
            <br />
            <br />
          </div>
          <div >
                <h3 className='text-dark fancy-head text-center headis'>Recent Projects</h3>
              </div>
              <div className="col-md-8" style={{margin: "0 auto"}}>
              <Carousel responsive={responsive}>
 
  <div className="p-2 linkWrapper">
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
    
    </div>
</Carousel>
</div>
<Carousel responsive={responsive} itemClass="carousel-item-padding-40-px" className="rw">
    
            {loanData.map((loan, i) =>{
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

           return (
            <div className="rws">
            <div className="loanWrapper">
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
                       
                        <div className="row">
                        <div className="col-md-6">
                            <p className="loanPtitle">Loan Amount</p>
                            <h2 className="loanSubHeadings">
                              

<NumberFormat value={parseFloat(loan.loan_amount)} displayType={'text'} thousandSeparator={true} prefix={'$'}  />

                              
                         
                              </h2>
                          </div>
    
                          <div className="col-md-6">
                          <p className="loanPtitle">Total EGR Locked</p>
                            <h2 className="loanSubHeadings"><NumberFormat value={parseFloat(loan.accepted) + parseFloat(loan.declined)} displayType={'text'} thousandSeparator={true} suffix={' EGR'}  /></h2>
                          </div>
                          <div className="col-md-6">
                          <p className="loanPtitle">Loan Duration </p>
                            <h2 className="loanSubHeadings">{loan.loan_duration} Days</h2>
                          </div>
                        
                        </div>
                        </div>
                        <div className="col-md-12 mb-4" style={{margin: "0 auto"}}>
                        
                        <Link to={"/loan/details/" + loan.id} className="noDefaults btn btn-success  btn-block">
                        Learn More...
                           </Link>
                        </div>
                       
            </div>
    
            </div>
             
             );
            })}
  
             </Carousel>
            </div>
           
            <Link style={{float: "right"}} className="btn btn-success btn-sm mt-2 " to="/category/all%20loans"> See more </Link>
          </div>
       
        
        <div className='mt-4'>
<br />
<br />
<br />

<div className="container-fluid video-wrapper" id="what-is-egoras">
  <div className="container">

 
<div className="row vidText ">
              <div className="col-md-6">
                <h2 className="mb-4">The world’s first decentralised microfinance protocol

</h2>
                
                  <div>
                    <h5> <FontAwesomeIcon icon={faCheckCircle} /> Low-Interest Micro-Credit
</h5>
                    <p>
                    Generate Egoras stable currency when your credit is approved, and destroy the stable currency when you repay the credit.
                    </p>
                  </div>
               
                  <div>
                    <h5> <FontAwesomeIcon icon={faCheckCircle} /> Borrow with no collateral regardless of your location


</h5>
                    <p> No collateral is required for credit on Egoras protocol.


</p>
                  </div>

                  <div>
                    <h5> <FontAwesomeIcon icon={faCheckCircle} /> Build your reputation 

</h5>
                    <p>
                    Build your reputation score and get access to micro-credit from Egoras protocol.

                    </p>
                  </div>

                  <div>
                    <h5> <FontAwesomeIcon icon={faCheckCircle} /> Lend Funds without risking your capital


</h5>
                    <p>There is no loss of capital when you participate in approving credits on Egoras protocol. Your capital is released immediately after the credit is approved on the protocol.
</p>
                  </div>

                  <div>
                    <h5> <FontAwesomeIcon icon={faCheckCircle} /> Earn high-yield on credits


</h5>
                    <p>Earn high weekly interest when you participate in credit governance.
</p>
                  </div>
              </div>

              <div className="col-md-6 vid">
              <LiteYouTubeEmbed 
        id={"nyjpESx83Uo"}
        title={"Egoras lending protocol"}
    />
              </div>
          </div>
          </div>
</div>
         
          <div className='container mb-4'>
            <br />
            <br />
            <br />
            <div className='text-center'>
                <h3>Two assets that power the Egoras protocol</h3>
            </div>
            <div className='lend-steps'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='text-center'>
                    <img className='mb-3' src='/svg/EGORASMAINLOGO.svg' width='200' alt='' />
                    <h5>Egoras (EGS)</h5>
                    <p>
                    EGS is a decentralized cryptocurrency stabilized against the value of the US dollar, it uses egoras loan governance to respond to changing market conditions and preserve its value against the US dollar. Unlike other popular stablecoins whose value is backed directly by USD, it’s backed by crypto collaterals.
                    </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='text-center'>
                    <img className='mb-3' src='/svg/EGORASSTABLELOGO.svg' width='200' alt='' />
                    <h5>Egoras Right (EGR)</h5>
                    <p>EGR is the fluctuating token of egoras protocol and it plays a role in stabilizing EGS and the governance of the loan protocol. EGR is required for paying the interest and this means that as the adoption and demand for the Egoras Credit system increases, there will be additional demand for EGR.</p>
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
        <div className='' id="egoras-team">
            <div className='container'>
              <TeamComponent />
              <div className=''>
                <br />
                <br />
                <br />
                <br />
                <p className="letter heading-title text-center">Partners: </p>
            <AliceCarousel mouseTracking items={items2} responsive={res}  />
            <br />
            <br />
            <br />
                {/* <h1>170% Backed</h1> */}
                {/* <p>All loans are over collateralized by real-world assets like real estates, vehicles, supply chain invoices and others, <br /> The real-world assets backing are represented as NFTs, bringing trust to the ecosystem.</p> */}
                {/* <div className='mt-3 w-75 mx-auto'>
                  <div className='p-4 bg-light custom-radius'>
                    <div className='row'>
                      <div className='col-md-3'>
                        <div className='border-right'>
                          <h5 className='mb-0 text-black'><NumberFormat thousandSeparator={true} thousandsGroupStyle="usd" displayType={'text'} prefix={'$'} value={parseFloat(stats.vault)}/></h5>
                        <p className='mb-0'>Total Assets Locked</p>
                        </div>
                      </div>
                      <div className='col-md-3'>
                        <div className='border-right'>
          <h5 className='mb-0 text-black'>
          <NumberFormat thousandSeparator={true} thousandsGroupStyle="usd" displayType={'text'} prefix={''} value={parseFloat(stats.loanAmount)}/> <small>NGNC</small>
          </h5>
                        <p className='mb-0'>Total NGNC Generated</p>
                        </div>
                      </div>
                      <div className='col-md-3'>
                        <div className='border-right'>
          <h5 className='mb-0 text-black'>{(stats.vault / (stats.loanAmount * stats.ngnPrice)  * 170).toFixed(2)} %</h5>
                        <p className='mb-0'>Collateralization ratio</p>
                        </div>
                      </div>
                      <div className='col-md-3'>
                        <div className=''>
                          <h5 className='mb-0 text-black'>   <NumberFormat thousandSeparator={true} thousandsGroupStyle="usd" displayType={'text'} prefix={'$'} value={parseFloat(stats.reward)}/>
       </h5>
                        <p className='mb-0'>Weekly rewards</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* <p className="text-center">
            <p>Next Reward Date</p>
            
              {nextClaimDate > 0 ? (
                <span>  <b><Moment date={nextClaimDate * 1000} /> </b></span>
              ) : null}
              <br></br>
              <button className="btn btn-warning" onClick={rewardUsers}> <FontAwesomeIcon icon={faGifts} /> Reward voters</button>
            </p> */}
            
        </div>
        <div className='' id="our-stories">
          <div className='container'>
            <div className='text-center'>
              <h2 className=''>Our Stories</h2>
              <div className='row blogPost'>
              
              {videos.map((video, i) =>{
                let url = "https://www.youtube.com/watch?v="+video.id.videoId;
                //video.id.videoId
             return (
              <div className="col-md-4 mb-4">
                <LiteYouTubeEmbed 
        id={video.id.videoId}
        title={video.snippet.title}
    />
              {/* <a href={url} target="_blank">

              
              <div className="blog-post-wrapper bg-white">
                 
                  <div className="image-part" style={{backgroundImage: 'url("'+video.snippet.thumbnails.high.url+'")', 
              backgroundSize: "cover"}}>
               
                  </div>
                  <div className="text-part">
                  <div class="title">{</div>
                  <div class="date">
                      
                      <Moment format="D MMM YYYY" withTitle>
                      {video.snippet.publishedAt}
          </Moment>
                  </div>
                  </div>
                  
              </div>
              </a> */}
          </div>
             
               );
              })}
               
                
              </div>
              
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

