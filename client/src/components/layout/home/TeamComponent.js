import { faArrowRight, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../../css/newHome.css';
import '../../../css/team.css';

const TeamComponent = () => {
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
    },
    {
        heading: "Ivan Castillo",
        subHeading: "Advisor",
        desc: "<p>Ivan Castillo is the founder of QuiverX Capital. He brings a wealth of leadership experience, including over 10 years of Project Management in both the government and civilian sectors. USMC Veteran and certified in Lean Six Sigma since 2012, with a proven ability to maximize workflows and enhance product output.</p>",
        img: "new1.jpg"
      },
      {
        heading: "Danail Stefanov",
        subHeading: "Media Advisor",
        desc: "<p>Danail Stefanov is Founder of Crypto Revolution Group. Crypto Revolution is a successful cryptocurrency and blockchain Telegram channel made up of a group of enthusiasts, investors and traders. Danny is very successful doing Marketing for many Crypto Projects like Paid Network, Base Protocol, DIA, EOS, Monero and more.</p>",
        img: "DANAILSTEFANOV.png"
      },
      {
        heading: "Sai MayReddy",
        subHeading: "Product Advisor",
        desc: "<p>Sai MayReddy is a cloud engineer that has worked with JP Morgan, Capital one and lululemon.</p>",
        img: "SAI.png"
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
           
        <div className='mt-6'>
     
        <div className="container mt-6 mb-4 ">
           
       


                
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

                    <div className="col-6 col-md-3 resetPadding" id="10" onClick={onChangeBio}>
                      <div  className={selectedBio == 10 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[10].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                    </div>


                    <div className="col-6 col-md-3 resetPadding" id="11" onClick={onChangeBio}>
                      <div  className={selectedBio == 11 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[11].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                    </div>

                    <div className="col-6 col-md-3 resetPadding" id="12" onClick={onChangeBio}>
                      <div  className={selectedBio == 12 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[12].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
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

                    <div className="col-6 col-md-3 resetPadding" id="10" onClick={onChangeBio2}>
                      <div  className={selectedBio == 10 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[10].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                    </div>


                    <div className="col-6 col-md-3 resetPadding" id="11" onClick={onChangeBio2}>
                      <div  className={selectedBio == 11 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[11].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                      <div className="overlay">

                      </div>
                      </div>
                    </div>

                    <div className="col-6 col-md-3 resetPadding" id="12" onClick={onChangeBio2}>
                      <div  className={selectedBio == 12 ? "image-box active" : "image-box"} style={{backgroundImage: "url('/teams/"+bios[12].img+"')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
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


</div>


           
          

              
        


        </Fragment>
    )
}
export default TeamComponent;