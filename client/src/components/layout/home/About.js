import { faArrowRight, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../../css/newHome.css';
import '../../../css/team.css';
import { Header2 } from '../parts/Header2';
import NewHeader from '../parts/NewHeader';

const About = () => {
  const [selectedBio, setSelectedBio] = useState(0);
  const bios = [
    {
      heading: "Ugoji Harry",
      subHeading: "FOUNDER AND CEO",
      desc: "<p>Harry oversees the strategy, technical and team coordination at Storaji LTD.</p> <p>Harry is an entrepreneur who has previously co-founded two companies. His mission in life is to solve the problems that are stopping developing nations from achieving its potential, and he\'s particularly concerned about the economic inequality and the risk it poses to humanity.</p>",
      img: "harry1.jpg"
    },
    {
      heading: "Isdore Ozuo",
      subHeading: "CO-FOUNDER AND LEGAL",
      desc: "<p>Isdore oversees the legal research at Storaji LTD.</p> <p>Isdore holds a First Class Honours degree in law from Nnamdi Azikiwe University, he also obtained his LLM degree with Distinction from the University of Kent, United Kingdom.</p>",
      img: "iz.jpg"
    },
    {
      heading: "Chijioke Nwankwo",
      subHeading: "ACMA, CPA, ACIA: Head of Finance",
      desc: "<p>Chijioke is managing Storaji’s finances and making sure the team is fully compliant.</p> <p>He has more than 20 years of experience in accounting and finance. Previously, He was the Gen. service officer at Afor-isike community Bank LTD and a lecturer at Port Harcourt, study Center Chartered Institute of Administration. He has also performed various operational roles at the  Saclux Industries, Gmicord Interbiz and Korama Clover Industries LTD.</p>",
      img: "chijioke.jpg"
    },
    {
      heading: "Chidubem Michael",
      subHeading: "Lead Software Engineer",
      desc: "<p>Michael is designing, analyzing and overseeing the Egoras Microfinance Protocol and architecting the Egoras protocol implementation.</p> <p>Previously, he was the CTO of the bit begin a cryptocurrency exchange, Ukiwe logistics and kemfe social network.</p>",
      img: "dubem.jpg"
    },
    {
      heading: "Moses Onuseme",
      subHeading: "UI Designer",
      desc: "<p>Moses is overseeing the optimisation of the user experience of egoras microfinance protocol.</p> <p>He has previously worked with top artist in Africa like Frank Edward.</p>",
      img: "gh.jpg"
    },
    {
      heading: "Ogbonne Okechukwu",
      subHeading: "Business Development",
      desc: "<p>Ogbonne is developing tactics and partnerships to get our protocol into the hands of users.</p> <p>Ogbonne is an energetic and motivated young woman with a strong desire to be satiated with new ideas knowledge and willing to pay the price of hard work.</p>",
      img: "ogbonne.jpg"
    },
    {
      heading: "Enyendu Jennifer",
      subHeading: "Business Development",
      desc: "<p>Jennifer is overseeing the partnership to onboard users to egoras microfinance protocol. </p> <p>Her mission in life is to solve the economic inequality that poses a huge risk to humanity.</p>",
      img: "ifunaya.jpg"
    },
    {
      heading: "Anosike victor",
      subHeading: "Business Development",
      desc: "<p>Victor is overseeing the partnership to onboard small-scale entrepreneurs to egoras microfinance protocol</p> <p>Victor is an active young man and a team worker whose aim is to contribute to the organizational growth and development through diverse ideas and producing innovative solution's capable of satisfying human well being and maintaing co-operative interest of the customers</p>",
      img: "bishop.jpg"
    },
    {
      heading: "Sarah Chukwuemeka",
      subHeading: "Finance",
      desc: "<p>Sarah is overseeing  good relationships between small businesses that takes loans from Egoras microfinance protocol.</p> <p> She is a motivated woman who works in the sole aim of promoting the organizational objectives and contributing positively to the growth and development of the organization.</p>",
      img: "dam.jpg"
    },
    {
      heading: "Hope Anyanwu",
      subHeading: "Finance",
      desc: "<p>Hope is a versatile account officer with the desire to work in a diverse and challenging environment that fosters growth, development, innovation and creativity. She possess analytical and problem solving skills.</p>",
      img: "hope2.jpg"
    }
  ];
  const myRef = useRef(null);
  const onChangeBio = (e) => {
    setSelectedBio(e.currentTarget.id);
   

  
       
  };

  const onChangeBio2 = (e) => {
    setSelectedBio(e.currentTarget.id);
   

    myRef.current.scrollIntoView();   
       
  };
    return (
        <Fragment>
            <NewHeader  />
        <div className='mt-6'>
           <div className="container newHomeContainer">
               <div className="col-md-10" style={{margin: "0 auto", marginTop: "70px"}}>
               <h1 className="newHomeHeader text-center">Our mission</h1>
               <div className="subheadline mb-4 text-center">
               Storaji LTD is tasked with bootstrapping EgorasDAO to fuel growth and drive the adoption of Egoras microfinance protocol. While the Company provided development support through the launch of Egoras microfinance protocol, it is currently spearheading efforts to further the adoption of the protocol.

                   </div>

              
               </div>
               
           

        
           </div> 

        <div className="container mt-6 mb-4 ">
           
        <div className="row ">
                    <div className="col-md-6" style={{}}>
                        <div className="pad">
                    <h2 className="custH"><span>EgorasDAO</span></h2>
                    <p>
                    EgorasDAO governs the Egoras Microfinance Protocol by deciding on key parameters 
                    (ie. Interest, approval/declination of loans and lending partners) 
                    through the voting power of EGR holders.
                    </p>
                        {/* <a href="/en/whitepaper"><span>Contact us <FontAwesomeIcon icon={faArrowRight} /></span></a> */}
                        </div>
                    </div>

                    <div className="col-md-6" style={{}}>
                        <div className="pad">
                        <h2 className="custH"><span>Storaji LTD</span></h2>
                        <p><span>
                        Storaji LTD regulated by the Money Lenders Act Cap 52 and Pawn Broker's Law Cap 92.  Egoras™ is a registered trademark of Storaji Ltd (RC N0 1316810). The Company is a part of the Egoras Community, EgorasDAO consists of the whole Egoras Community, plus the Egoras Protocol 
                        (ie. Egoras microfinance protocol, egoras on-chain liquidity protocol and egoras reseller's marketplace).

                        </span></p>
                       
                        </div>
                   
                    </div>
                    
                </div>


                
        </div>
        <div class="container">
          <h5 class="text-primary-1 text-center text-black">2021</h5>
          <h1 class="display-heading-3 text-center text-black">The Roadmap</h1>

          <div className="row mt-4">
              <div className="col-md-4">
              <div class="panel">
   <div class="panel-body">
      <div class="space-bottom">
         <h5 class="panel-subheading text-primary-3"></h5>
         <h3 class="card-heading display-inline">Q4 2019</h3>
      </div>
      <div>
         <ul role="list" class="w-list-unstyled">
            <li class="bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-small">
                     <h5 class="no-bottom-space">1</h5>
                  </div>
                  <div class="space-left-small">Research of Uncollaterised Lending on blockchain</div>
               </div>
            </li>
            <li class="bordered-list-item bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-large circle-small bg-gray-3">
                     <h5 class="no-bottom-space">2</h5>
                  </div>
                  <div class="space-left-small">Application of Money Lender License<br /></div>
               </div>
            </li>
            <li class="bordered-list-item bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-large circle-small bg-gray-3">
                     <h5 class="no-bottom-space">3</h5>
                  </div>
                  <div class="space-left-small">Egoras Airdrop<br /></div>
               </div>
            </li>
         
         </ul>
      </div>
   </div>
</div>
              </div>

              <div className="col-md-4">
              <div class="panel">
   <div class="panel-body">
      <div class="space-bottom">
         <h5 class="panel-subheading text-primary-3"></h5>
         <h3 class="card-heading display-inline">Q1 2020</h3>
      </div>
      <div>
         <ul role="list" class="w-list-unstyled">
            <li class="bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-small">
                     <h5 class="no-bottom-space">1</h5>
                  </div>
                  <div class="space-left-small">Listing of old EGR token on Etherflyer</div>
               </div>
            </li>
            <li class="bordered-list-item bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-large circle-small bg-gray-3">
                     <h5 class="no-bottom-space">2</h5>
                  </div>
                  <div class="space-left-small">Launch of Egoras Resellers Platform(NFTs)<br /></div>
               </div>
            </li>
            <li class="bordered-list-item bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-large circle-small bg-gray-3">
                     <h5 class="no-bottom-space">3</h5>
                  </div>
                  <div class="space-left-small">Distribution of airdrop tokens<br /></div>
               </div>
            </li>
           
         </ul>
      </div>
   </div>
</div>
              </div>

              <div className="col-md-4">
              <div class="panel">
   <div class="panel-body">
      <div class="space-bottom">
         <h5 class="panel-subheading text-primary-3"></h5>
         <h3 class="card-heading display-inline">Q2 2020</h3>
      </div>
      <div>
         <ul role="list" class="w-list-unstyled">
            <li class="bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-small">
                     <h5 class="no-bottom-space">1</h5>
                  </div>
                  <div class="space-left-small">Launch of EUSD Vault</div>
               </div>
            </li>
            <li class="bordered-list-item bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-large circle-small bg-gray-3">
                     <h5 class="no-bottom-space">2</h5>
                  </div>
                  <div class="space-left-small">Listing EUSD on etherflyer<br /></div>
               </div>
            </li>
            <li class="bordered-list-item bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-large circle-small bg-gray-3">
                     <h5 class="no-bottom-space">3</h5>
                  </div>
                  <div class="space-left-small">Listing of EGR on coingecko<br /></div>
               </div>
            </li>
        
         </ul>
      </div>
   </div>
</div>
              </div>


              <div className="col-md-4">
              <div class="panel">
   <div class="panel-body">
      <div class="space-bottom">
         <h5 class="panel-subheading text-primary-3"></h5>
         <h3 class="card-heading display-inline">Q3 2020</h3>
      </div>
      <div>
         <ul role="list" class="w-list-unstyled">
            <li class="bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-small">
                     <h5 class="no-bottom-space">1</h5>
                  </div>
                  <div class="space-left-small">Listing EGR coinmarketcap</div>
               </div>
            </li>
            <li class="bordered-list-item bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-large circle-small bg-gray-3">
                     <h5 class="no-bottom-space">2</h5>
                  </div>
                  <div class="space-left-small">Listing EUSD coingecko<br /></div>
               </div>
            </li>
            <li class="bordered-list-item bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-large circle-small bg-gray-3">
                     <h5 class="no-bottom-space">3</h5>
                  </div>
                  <div class="space-left-small">Listing EUSD coinmarketcap<br /></div>
               </div>
            </li>
        
         </ul>
      </div>
   </div>
</div>
              </div>


              <div className="col-md-4">
              <div class="panel">
   <div class="panel-body">
      <div class="space-bottom">
         <h5 class="panel-subheading text-primary-3"></h5>
         <h3 class="card-heading display-inline">Q4 2020</h3>
      </div>
      <div>
         <ul role="list" class="w-list-unstyled">
            <li class="bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-small">
                     <h5 class="no-bottom-space">1</h5>
                  </div>
                  <div class="space-left-small">Money Lender License Received</div>
               </div>
            </li>
            <li class="bordered-list-item bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-large circle-small bg-gray-3">
                     <h5 class="no-bottom-space">2</h5>
                  </div>
                  <div class="space-left-small">Pawn Broker License Received<br /></div>
               </div>
            </li>
            <li class="bordered-list-item bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-large circle-small bg-gray-3">
                     <h5 class="no-bottom-space">3</h5>
                  </div>
                  <div class="space-left-small">Fifty businesses received microcredit from Egoras protocol<br /></div>
               </div>
            </li>
        
         </ul>
      </div>
   </div>
</div>
              </div>



   
              <div className="col-md-4">
              <div class="panel">
   <div class="panel-body">
      <div class="space-bottom">
         <h5 class="panel-subheading text-primary-3"></h5>
         <h3 class="card-heading display-inline">Q1 2021</h3>
      </div>
      <div>
         <ul role="list" class="w-list-unstyled">
            <li class="bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-small">
                     <h5 class="no-bottom-space">1</h5>
                  </div>
                  <div class="space-left-small">Renew of money lender license and pawnbroker license</div>
               </div>
            </li>
            <li class="bordered-list-item bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-large circle-small bg-gray-3">
                     <h5 class="no-bottom-space">2</h5>
                  </div>
                  <div class="space-left-small">Launch of Onchain Liquidity protocol<br /></div>
               </div>
            </li>
            <li class="bordered-list-item bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-large circle-small bg-gray-3">
                     <h5 class="no-bottom-space">3</h5>
                  </div>
                  <div class="space-left-small">Launch of initial dex offering to boost liquidity<br /></div>
               </div>
            </li>
        
         </ul>
      </div>
   </div>
</div>
              </div>


              <div className="col-md-4">
              <div class="panel">
   <div class="panel-body">
      <div class="space-bottom">
         <h5 class="panel-subheading text-primary-3"></h5>
         <h3 class="card-heading display-inline">Q2 2021</h3>
      </div>
      <div>
         <ul role="list" class="w-list-unstyled">
            <li class="bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-small">
                     <h5 class="no-bottom-space">1</h5>
                  </div>
                  <div class="space-left-small">Launch of microfinance protocol v2(mainnet)</div>
               </div>
            </li>
            <li class="bordered-list-item bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-large circle-small bg-gray-3">
                     <h5 class="no-bottom-space">2</h5>
                  </div>
                  <div class="space-left-small">Onboarding More businesses to access microcredit<br /></div>
               </div>
            </li>
            <li class="bordered-list-item bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-large circle-small bg-gray-3">
                     <h5 class="no-bottom-space">3</h5>
                  </div>
                  <div class="space-left-small"> Adding more token and liquidity to the liquidity protocol<br /></div>
               </div>
            </li>
        
         </ul>
      </div>
   </div>
</div>
              </div>

              <div className="col-md-4">
              <div class="panel">
   <div class="panel-body">
      <div class="space-bottom">
         <h5 class="panel-subheading text-primary-3"></h5>
         <h3 class="card-heading display-inline">Q3 2021</h3>
      </div>
      <div>
         <ul role="list" class="w-list-unstyled">
            <li class="bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-small">
                     <h5 class="no-bottom-space">1</h5>
                  </div>
                  <div class="space-left-small">Launch of Egoras NFts marketplace</div>
               </div>
            </li>
            <li class="bordered-list-item bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-large circle-small bg-gray-3">
                     <h5 class="no-bottom-space">2</h5>
                  </div>
                  <div class="space-left-small">Launch of payment gateway for EUSD<br /></div>
               </div>
            </li>
            <li class="bordered-list-item bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-large circle-small bg-gray-3">
                     <h5 class="no-bottom-space">3</h5>
                  </div>
                  <div class="space-left-small">Migration to Polkadot<br /></div>
               </div>
            </li>
        
         </ul>
      </div>
   </div>
</div>
              </div>



             


              <div className="col-md-4">
              <div class="panel">
   <div class="panel-body">
      <div class="space-bottom">
         <h5 class="panel-subheading text-primary-3"></h5>
         <h3 class="card-heading display-inline">Q4 2021</h3>
      </div>
      <div>
         <ul role="list" class="w-list-unstyled">
            <li class="bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-small">
                     <h5 class="no-bottom-space">1</h5>
                  </div>
                  <div class="space-left-small">Onboarding more lending partners</div>
               </div>
            </li>
            <li class="bordered-list-item bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-large circle-small bg-gray-3">
                     <h5 class="no-bottom-space">2</h5>
                  </div>
                  <div class="space-left-small">Launch of Egoras payment gateway (main-net)<br /></div>
               </div>
            </li>
            <li class="bordered-list-item bordered-list-item-small">
               <div class="row row-align-center">
                  <div class="circle-large circle-small bg-gray-3">
                     <h5 class="no-bottom-space">3</h5>
                  </div>
                  <div class="space-left-small">Launch of microfinance protocol v3<br /></div>
               </div>
            </li>
        
         </ul>
      </div>
   </div>
</div>
              </div>
          </div>
        </div>
           <div className="container mt-6" id="desktopTeam">
           <div className="get-our-team-top">
   <div className="reserve-team">
   <div className="meet-team-box">
            <h2>Meet the Team</h2>
         </div>
      <div className="team reserve-team">
       
      

            <div className="row mt-4">
                <div className="col-md-5 ">
                  <div className="row">
                    <div className=" col-6 col-md-4 resetPadding" id="0" onClick={onChangeBio}>
                      <div  className={selectedBio == 0 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[0].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                    </div>
                    <div className=" col-6 col-md-4 resetPadding" id="1" onClick={onChangeBio}>
                      <div  className={selectedBio == 1 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[1].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                    </div>
                
                    <div className="col-6 col-md-4 resetPadding" id="2" onClick={onChangeBio}>
                      <div  className={selectedBio == 2 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[2].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                    </div>

                  </div>
                  <div class="join-team team-bio">
                  <h2 class="bioHeading">{bios[selectedBio].heading}</h2>
                    <h3 class="bioHeadingSub">{bios[selectedBio].subHeading}</h3>
                    <div class="rich-text-block-4 w-richtext"  dangerouslySetInnerHTML={{__html: bios[selectedBio].desc}} />
                   
                     
                       
                        </div>

                </div>

                <div className="col-md-7  ">
                <div className="row">

                <div className=" col-6 col-md-3 resetPadding" id="3" onClick={onChangeBio}>
                      <div  className={selectedBio == 3 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[3].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 resetPadding" id="4" onClick={onChangeBio}>
                      <div  className={selectedBio == 4 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[4].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 resetPadding" id="5" onClick={onChangeBio}>
                      <div  className={selectedBio == 5 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[5].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 resetPadding" id="6" onClick={onChangeBio}>
                      <div  className={selectedBio == 6 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[6].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 resetPadding" id="7" onClick={onChangeBio}>
                      <div  className={selectedBio == 7 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[7].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 resetPadding" id="8" onClick={onChangeBio}>
                      <div  className={selectedBio == 8 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[8].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 resetPadding" id="9" onClick={onChangeBio}>
                      <div  className={selectedBio == 9 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[9].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                    </div>
                    </div>
                </div>
            </div>
      
            </div>
         </div>
      </div>
   </div>


<div  ref={myRef}></div>
   <div className="container mt-6" id="mobileTeam">
           <div className="get-our-team-top">
   <div className="reserve-team">
   <div className="meet-team-box">
            <h2>Meet the Team</h2>
         </div>
      <div className="team reserve-team">
      <div class="join-team team-bio" >
                    <h2 class="bioHeading">{bios[selectedBio].heading}</h2>
                    <h3 class="bioHeadingSub">{bios[selectedBio].subHeading}</h3>
                    <div class="rich-text-block-4 w-richtext"  dangerouslySetInnerHTML={{__html: bios[selectedBio].desc}} />
                   
                        </div>
      

            <div className="row mt-4">
                <div className="col-md-12 ">
                  <div className="row">
                    <div className=" col-6 col-md-4 resetPadding" id="0" onClick={onChangeBio2}>
                    <Link to="#teambio">
                      <div  className={selectedBio == 0 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[0].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                      </Link>
                    </div>
                    <div className=" col-6 col-md-4 resetPadding" id="1" onClick={onChangeBio2}>
                    <Link to="#teambio">
                      <div  className={selectedBio == 1 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[1].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                      </Link>
                    </div>
                
                    <div className="col-6 col-md-4 resetPadding" id="2" onClick={onChangeBio2}>
                    <Link to="#teambio">
                      <div  className={selectedBio == 2 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[2].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                      </Link>
                    </div>

                    <div className=" col-6 col-md-3 resetPadding" id="3" onClick={onChangeBio2}>
                    <Link to="#teambio">
                      <div  className={selectedBio == 3 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[3].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                      </Link>
                    </div>
                    <div className="col-6 col-md-3 resetPadding" id="4" onClick={onChangeBio2}>
                    <Link to="#teambio">
                      <div  className={selectedBio == 4 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[4].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                      </Link>
                    </div>
                    <div className="col-6 col-md-3 resetPadding" id="5" onClick={onChangeBio2}>
                    <Link to="#teambio">
                      <div  className={selectedBio == 5 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[5].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                      </Link>
                    </div>
                    <div className="col-6 col-md-3 resetPadding" id="6" onClick={onChangeBio2}>
                    <Link to="#teambio">
                      <div  className={selectedBio == 6 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[6].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                      </Link>
                    </div>
                    <div className="col-6 col-md-3 resetPadding" id="7" onClick={onChangeBio2}>
                    <Link to="#teambio">
                      <div  className={selectedBio == 7 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[7].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                      </Link>
                    </div>
                    <div className="col-6 col-md-3 resetPadding" id="8" onClick={onChangeBio2}>
                    <Link to="#teambio">
                      <div  className={selectedBio == 8 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[8].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                      </Link>
                    </div>
                    <div className="col-6 col-md-3 resetPadding" id="9" onClick={onChangeBio2}>
                    <Link to="#teambio">
                      <div  className={selectedBio == 9 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[9].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                      </Link>
                    </div>
                    </div>

                  </div>
                

                </div>

      
            </div>
         </div>
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

export default About;