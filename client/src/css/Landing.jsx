import React, { useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
// import Carousel from "react-bootstrap/Carousel";
// styles

import "../../../../css/Landing.css";
import "../../../../css/landingMobile.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Landing = () => {
  const [page, setPage] = useState("change");

  const clickMe1 = () => {
    if (page === "change") {
      setPage("change");
    } else {
      setPage("change");
    }
  };
  const clickMe2 = () => {
    if (page === "notChange") {
      setPage("notChange");
    } else {
      setPage("notChange");
    }
  };

  return (
    <div>
      {/* hero section start */}
      <section className="heroSection">
        <div className="heroArea">
          <div className="heroTxts">
            <h1 className="heroTitle">
              Uncollateralised
              <br /> micro-credits.
            </h1>
            <p className="heroCaption">FOR SMALL ENTREPRENEURS</p>
            <p className="heroPara">
              Egoras microfinance protocol provides uncollateralised
              micro-credit
              <br />
              to small entrepreneurs and enterprises who cannot take shelter of
              banks
              <br /> for banking and other services.
            </p>
            <div className="heroButton">
              <a href="/explore" className="heroBtn">
                See Loans
              </a>
            </div>
          </div>

          <div className="hero-images">
            <img src="/img/phone-hero.png" alt="" className="heroPhone" />
            <img src="/img/shape-egg.svg" alt="" className="eggShape" />
            <img src="/img/dots.svg" alt="" className="dots" />
            <img src="/img/x-shape.svg" alt="" className="x" />
            <img src="/img/circle.svg" alt="" className="circle" />
            <div className="card-amount">
              <img src="/img/coin-icon.svg" alt="" className="coin" />
              <p className="amount">₦800,000</p>
            </div>
          </div>
        </div>
        <div className="gtbottomCards">
          <a href="/" className="gtcard1 active ">
            <h3 className="gtsupport">
              I need a loan
              <br />
              <span className="gtsupportPara">Check how you can help</span>
            </h3>
            <a href="/">
              <ArrowForwardIcon className="gtarrowIcon active" />
            </a>
          </a>

          <a href="/" className="gtcard2 ">
            <h3 className="gtsupport">
              I need a loan
              <br />
              <span className="gtsupportPara">Check how you can help</span>
            </h3>
            <a href="/">
              <ArrowForwardIcon className="gtarrowIcon " />
            </a>
          </a>
        </div>

        <Carousel responsive={responsive} className="heroCard" showDots={false}>
          <div className="card1 active ">
            <h3 className="support">
              I need a loan
              <br />
              <span className="supportPara">Check how to take a loan</span>
            </h3>
            <a href="#">
              <ArrowForwardIcon className="arrowIcon active" />
            </a>
          </div>
          <div className="card2 ">
            <h3 className="support">
              I need a loan
              <br />
              <span className="supportPara">Check how to take a loan</span>
            </h3>
            <a href="#">
              <ArrowForwardIcon className="arrowIcon " />
            </a>
          </div>
        </Carousel>

        <img src="/img/blur-drop.png" alt="" className="blurDrop" />
      </section>
      {/* hero section end */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* How it Works Section Start */}
      <section className="gthowItWorks"  id="howitworks">
        <div className="gttitleLine"></div>
        <div className="gthowItWorksTitle">
          <h1 className="gttitle">How it works</h1>
        </div>
        <div className="gthowItWorksBtns">
          <div className="gtbutton1">
            <button
              className={page === "change" ? "gtbtn1 active" : "gtbtn2"}
              onClick={clickMe1}
            >
              Borrower
            </button>
          </div>
          <div className="gtbutton2">
            <button
              className={page === "notChange" ? "gtbtn1 active" : "gtbtn2"}
              onClick={clickMe2}
            >
              Validator
            </button>
          </div>
        </div>

        {page === "change" ? (
          <div className="gthowItWorksArea">
            <div className="gthowCard1">
              <div className="gthowCard1Title">
                <h1 className="gtstakeNumb">1.</h1>

                <img
                  src="/img/check-value-icon.svg"
                  alt=""
                  className="gtstakeLoan"
                />
              </div>
              <div className="gthowCard1Texts">
                Check the value of your
                <br /> collateral.
                <br />
                <p className="howCard1TextsP">
                  Select your item and tel us about
                  <br /> the current condition, and our <br />
                  advanced AI tech will make the
                  <br /> perfect value for you.
                </p>
              </div>
            </div>
            <div className="gthowCard2">
              <div className="gthowCard2Title">
                <h1 className="gtstakeNumb">2.</h1>

                <img
                  src="/img/schedule-icon.svg"
                  alt=""
                  className="gtstakeLoan"
                />
              </div>
              <div className="gthowCard2Texts">
                Schedule an inspection
                <br />
                <p className="gthowCard2TextsP">
                  Book an appointment for collateral <br />
                  inspection at home or the nearest Egoras <br />
                  branch.
                </p>
              </div>
            </div>
            <div className="gthowCard3">
              <div className="gthowCard3Title">
                <h1 className="gtstakeNumb">3.</h1>

                <img
                  src="/img/instant-loan-icon.svg"
                  alt=""
                  className="gtstakeLoan"
                />
              </div>
              <div className="gthowCard3Texts">
                Get instant loan in 5mins.
                <br />
                <p className="gthowCard3TextsP">
                  Instant Loans shouldn't be a luxury !<br /> We are determined
                  to make sure
                  <br /> you have access to sufficient funds
                  <br /> immediately after inspection
                  <br /> of collaterals.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="gthowItWorksArea2">
            <div className="gthowCard1">
              <div className="gthowCard1Title">
                <h1 className="gtstakeNumb">1.</h1>

                <img
                  src="/img/stake-loan.svg"
                  alt=""
                  className="gtstakeLoan"
                />
              </div>
              <div className="gthowCard1Texts">
                Stake your token
                <br />
                <p className="howCard1TextsP">
                  Browse by category and stake <br />
                  your EGR token to support an
                  <br />
                  entrepreneur.
                </p>
              </div>
            </div>
            <div className="gthowCard2">
              <div className="gthowCard2Title">
                <h1 className="gtstakeNumb">2.</h1>

                <img
                  src="/img/approve-loan.svg"
                  alt=""
                  className="gtstakeLoan"
                />
              </div>
              <div className="gthowCard2Texts">
                Approve Loans
                <br />
                <p className="howCard2TextsP">
                  Fund loans without risking your
                  <br />
                  EGR token.
                </p>
              </div>
            </div>
            <div className="gthowCard3">
              <div className="gthowCard3Title">
                <h1 className="gtstakeNumb">3.</h1>

                <img
                  src="/img/claim-interest.svg"
                  alt=""
                  className="gtstakeLoan"
                />
              </div>
              <div className="gthowCard3Texts">
                Claim Interest weekly
                <br />
                <p className="howCard3TextsP">
                  Earn over 20% APR for
                  <br />
                  approving/declining loans.
                </p>
              </div>
            </div>
          </div>
        )}

        <a href="/signup" className="gtgetStartedButton">
          Get Started
          <div className="gtgetStartedHover"></div>
        </a>
        <img src="/img/left-back-drop.svg" alt="" className="gtleftBack" />
        <img src="/img/second-dots.svg" alt="" className="gtsecondDots" />
      </section>
      {/* How it Works Section End */}
      {/* 
      {/* =================================================================================================================================================================================================================================================================== */}
      {/*  Projects Section start*/}
      <section className="projectsSection" id="projects">
        <div className="projectsArea">
          <div className="projectsLine"></div>
          <div className="projectsTitleContents">
            <div className="projectTitle">
              <h1 className="pTitle">Recent projects</h1>

              <p className="projectsPara">All Categories</p>
            </div>

            <a href="#" className="projectsLink">
              Explore loans
              <div className="projectsLinkHover"></div>
            </a>
          </div>

          {/* Carousel start==============================
==============================================
============================= */}
          <Carousel
            responsive={responsive}
            className="caroCard"
            showDots={true}
          >
            <Link to="/loan-details">
              <div className="cardA">
                <div
                  className="img"
                  style={{
                    backgroundImage: "url(/img/caropic1.png)",
                    height: "200px",
                    width: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "15px",
                  }}
                >
                  <div className="img-amount">₦800,000</div>
                </div>
                <div className="cardDetails">
                  <h1 className="cardHeader">For identity photo studio.</h1>
                  <p className="cardPara">Interest: 24% APY</p>
                </div>
              </div>
            </Link>

            <div className="cardB">
              <div
                className="img"
                style={{
                  backgroundImage: "url(/img/caropic2.png)",
                  height: "200px",
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "15px",
                }}
              >
                <div className="img-amount">₦800,000</div>
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio.</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>
            <div className="cardC">
              <div
                className="img"
                style={{
                  backgroundImage: "url(/img/caropic3.png)",
                  height: "200px",
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "15px",
                }}
              >
                <div className="img-amount">₦800,000</div>
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio.</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>
            <div className="cardD">
              <div
                className="img"
                style={{
                  backgroundImage: "url(/img/caropic1.png)",
                  height: "200px",
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "15px",
                }}
              >
                <div className="img-amount">₦800,000</div>
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio.</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>
            <div className="cardE">
              <div
                className="img"
                style={{
                  backgroundImage: "url(/img/caropic2.png)",
                  height: "200px",
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "15px",
                }}
              >
                <div className="img-amount">₦800,000</div>
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio.</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>
            <div className="cardF">
              <div
                className="img"
                style={{
                  backgroundImage: "url(/img/caropic3.png)",
                  height: "200px",
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "15px",
                }}
              >
                <div className="img-amount">₦800,000</div>
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio.</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>
            <div className="cardG">
              <div
                className="img"
                style={{
                  backgroundImage: "url(/img/caropic1.png)",
                  height: "200px",
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "15px",
                }}
              >
                <div className="img-amount">₦800,000</div>
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio.</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>
            <div className="cardH">
              <div
                className="img"
                style={{
                  backgroundImage: "url(/img/caropic2.png)",
                  height: "200px",
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "15px",
                }}
              >
                <div className="img-amount">₦800,000</div>
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio.</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>
            <div className="cardI">
              <div
                className="img"
                style={{
                  backgroundImage: "url(/img/caropic3.png)",
                  height: "200px",
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "15px",
                }}
              >
                <div className="img-amount">₦800,000</div>
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio.</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>
            <div className="cardJ">
              <div
                className="img"
                style={{
                  backgroundImage: "url(/img/caropic3.png)",
                  height: "200px",
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "15px",
                }}
              >
                <div className="img-amount">₦800,000</div>
              </div>
              <div className="cardDetails">
                <h1 className="cardHeader">For identity photo studio.</h1>
                <p className="cardPara">Interest: 24% APY</p>
              </div>
            </div>
          </Carousel>
          {/* Carousel end==============================
==============================================
============================= */}
        </div>
      </section>
      {/*  Projects Section end*/}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* Benefits Section start */}
      <section className="benefitsSection" id="benefits">
        <div className="titleLine"></div>
        <div className="howItWorksTitle">
          <h1 className="title">Benefits</h1>
        </div>

        <div className="benefitsArea">
          <div className="benefitCard1">
            <div className="bCardIcon">
              <img src="/img/b-icon1.svg" alt="" className="bIcon" />
            </div>
            <div className="bCardTexts">
              <h1 className="bCardTitle">
                Low-Interest
                <br />
                Micro-Credit
              </h1>
              <p className="bCardPara">
                Generate Egoras stable currency when
                <br /> your credit is approved, and destroy the
                <br /> stable currency when you repay the
                <br /> credit.
              </p>
            </div>
          </div>

          <div className="benefitCard2">
            <div className="bCardIcon">
              <img src="/img/b-icon2.svg" alt="" className="bIcon" />
            </div>
            <div className="bCardTexts">
              <h1 className="bCardTitle">
                Lend Funds without <br />
                risking your capital
              </h1>
              <p className="bCardPara">
                Generate Egoras stable currency when
                <br /> your credit is approved, and destroy the
                <br /> stable currency when you repay the
                <br /> credit.
              </p>
            </div>
          </div>

          <div className="benefitCard3">
            <div className="bCardIcon">
              <img src="/img/b-icon3.svg" alt="" className="bIcon" />
            </div>
            <div className="bCardTexts">
              <h1 className="bCardTitle">
                Borrow with no collateral
                <br /> regardless of your location
              </h1>
              <p className="bCardPara">
                Generate Egoras stable currency when
                <br /> your credit is approved, and destroy the
                <br /> stable currency when you repay the
                <br /> credit.
              </p>
            </div>
          </div>

          <div className="benefitCard4">
            <div className="bCardIcon">
              <img src="/img/b-icon4.svg" alt="" className="bIcon" />
            </div>
            <div className="bCardTexts">
              <h1 className="bCardTitle">
                Earn high-yield <br />
                on credits
              </h1>
              <p className="bCardPara">
                Generate Egoras stable currency when
                <br /> your credit is approved, and destroy the
                <br /> stable currency when you repay the
                <br /> credit.
              </p>
            </div>
          </div>
        </div>

        <img src="/img/right-back-drop.svg" alt="" className="rightBack" />
        <img src="/img/shape-egg2.svg" alt="" className="eggShape2" />
      </section>
      {/* Benefits Section start */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* Stories Section Start  */}
      <section className="landingstoriesSection" id="stories">
        <div className="landingtitleLine"></div>
        <div className="landinghowItWorksTitle">
          <h1 className="landingtitle">Popular Stories</h1>
        </div>
        <div className="landingstoriesArea">
          {/* Carousel start==============================
==============================================
============================= */}
          <Carousel
            responsive={responsive}
            className="landingstoriesCard"
            showDots={false}
          >
            <div className="landingstoriesCard1">
              <div className="landingstoriesCardVideo">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/C42kN47tbQk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="landingstoriesCardTxts">
                <h5 className="landingstoriesCardTitle">
                  Meet Mrs Faith, She used Egoras
                  <br /> micro-credit to restore her failing
                  <br /> farm business.
                </h5>
                <h6 className="landingstoriesCardDate">19 Apr 2021</h6>
              </div>
            </div>
            <div className="landingstoriesCard1">
              <div className="landingstoriesCardVideo">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/8W9qbS-dZ2c"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="landingstoriesCardTxts">
                <h5 className="landingstoriesCardTitle">
                  Meet Mrs Onyiyechi, She used Egoras
                  <br /> microcredit to expand her
                  <br />
                  small business
                </h5>
                <h6 className="landingstoriesCardDate">19 Apr 2021</h6>
              </div>
            </div>
            <div className="landingstoriesCard1">
              <div className="landingstoriesCardVideo">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/uxv9_BfnLVg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="landingstoriesCardTxts">
                <h5 className="landingstoriesCardTitle">
                  Meet Mrs Elizabeth, She used Egoras
                  <br /> microcredit to expand her
                  <br />
                  grocery business.
                </h5>
                <h6 className="landingstoriesCardDate">19 Apr 2021</h6>
              </div>
            </div>
            <div className="landingstoriesCard1">
              <div className="landingstoriesCardVideo">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/5g8XkN10ScU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="landingstoriesCardTxts">
                <h5 className="landingstoriesCardTitle">
                  Mrs Chidinma Happiness used Egoras
                  <br /> Micro-credit to expand her
                  <br />
                  grocery business
                </h5>
                <h6 className="landingstoriesCardDate">1 Apr 2021</h6>
              </div>
            </div>
            <div className="landingstoriesCard1">
              <div className="landingstoriesCardVideo">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/ZpLVfX8vfGk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="landingstoriesCardTxts">
                <h5 className="landingstoriesCardTitle">
                  Meet Mrs Justina Kelechi, a small <br />
                  business owner that used Egoras <br />
                  microcredit to grow her business
                </h5>
                <h6 className="landingstoriesCardDate">1 Apr 2021</h6>
              </div>
            </div>
            <div className="landingstoriesCard1">
              <div className="landingstoriesCardVideo">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/xSR_wKvpVAA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="landingstoriesCardTxts">
                <h5 className="landingstoriesCardTitle">
                  Meet Mr Chinemerem, An Egoras <br />
                  borrower
                </h5>
                <h6 className="landingstoriesCardDate">28 Mar 2021</h6>
              </div>
            </div>
            <div className="landingstoriesCard1">
              <div className="landingstoriesCardVideo">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/Wlxx40AImfI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="landingstoriesCardTxts">
                <h5 className="landingstoriesCardTitle">
                  Meet Mrs Chidinma Ogu,
                  <br /> an Egoras borrower
                </h5>
                <h6 className="landingstoriesCardDate">28 Mar 2021</h6>
              </div>
            </div>
            <div className="landingstoriesCard1">
              <div className="landingstoriesCardVideo">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/QjmG5Xvq63I"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="landingstoriesCardTxts">
                <h5 className="landingstoriesCardTitle">
                  Meet Mrs Faith Akpan, An Egoras <br />
                  borrower
                </h5>
                <h6 className="landingstoriesCardDate">28 Mar 2021</h6>
              </div>
            </div>
            <div className="landingstoriesCard1">
              <div className="landingstoriesCardVideo">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/RXPPrnrWuss"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="landingstoriesCardTxts">
                <h5 className="landingstoriesCardTitle">
                  What is Egoras Microfinance Protocol
                </h5>
                <h6 className="landingstoriesCardDate">23 Mar 2021</h6>
              </div>
            </div>
            <div className="landingstoriesCard1">
              <div className="landingstoriesCardVideo">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/a_ehqUZGyoc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="landingstoriesCardTxts">
                <h5 className="landingstoriesCardTitle">
                  Mrs Gloria Omoreke just doubled
                  <br /> her profits with Egoras
                  <br />
                  Micro-credit.
                </h5>
                <h6 className="landingstoriesCardDate">23 Mar 2021</h6>
              </div>
            </div>
          </Carousel>
          {/* Carousel end==============================
==============================================
============================= */}

          <div className="carouselLinkStories">
            <a
              href="https://www.youtube.com/channel/UCHfi5EwXig46xp5Dx8hVBHQ/videos"
              target="_blank"
              className="carouselLinkbtn"
            >
              View All
            </a>
          </div>
        </div>
        <img src="/img/video-dots.svg" alt="" className="landingvidDots" />
      </section>
      {/* Stories Section End  */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* Partners Section start  */}
      <section className="partnersSection" id="partners">
        <div className="titleLine"></div>
        <div className="howItWorksTitle">
          <h1 className="title">Our Partners</h1>
        </div>
        <Carousel
          responsive={responsive}
          className="PartnersArea"
          autoPlay={1}
          autoPlaySpeed={1000}
          infinite={true}
          transitionDuration={500}
        >
          <div className="patLogo">
            <a href="https://paidnetwork.com/" target="blank">
              <img
                src="/img/partners/PAIDNETWORK.svg"
                alt=""
                className="partnerLogos   paid"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="https://yellowroad.app/" target="blank">
              <img
                src="/img/partners/yellow-road-white.svg"
                alt=""
                className="partnerLogos yellow"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="https://www.threem.capital/" target="blank">
              <img
                src="/img/partners/threecapital-black.svg"
                alt=""
                className="partnerLogos three"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="https://buidlhodl.capital/" target="blank">
              <img
                src="/img/partners/build-logo-white.svg"
                alt=""
                className="partnerLogos build"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="https://exnetwork.community/" target="blank">
              <img
                src="/img/partners/ex-capital-white.svg"
                alt=""
                className="partnerLogos ex"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="https://ferrum.network/" target="blank">
              <img
                src="/img/partners/ferrum-network-white.svg"
                alt=""
                className="partnerLogos ferrum"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="https://titans.ventures/" target="blank">
              <img
                src="/img/partners/TITANS2.svg"
                alt=""
                className="partnerLogos titans"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="https://www.juncapital.io/" target="blank">
              <img
                src="/img/partners/jun-logo-white.svg"
                alt=""
                className="partnerLogos jun"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="https://nuls.medium.com/" target="blank">
              <img
                src="/img/partners/NULS.svg"
                alt=""
                className="partnerLogos nuls"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="https://launchpool.xyz/" target="blank">
              <img
                src="/img/partners/launchpooldark-image.svg"
                alt=""
                className="partnerLogos launch"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="https://www.mantradao.com/" target="blank">
              <img
                src="/img/partners/mantra-logo-white.svg"
                alt=""
                className="partnerLogos  mantra"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="#" target="blank">
              <img
                src="/img/partners/resurgence-logo-white.svg"
                alt=""
                className="partnerLogos  mantra"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="#" target="blank">
              <img
                src="/img/partners/QUIVERX.svg"
                alt=""
                className="partnerLogos  mantra"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="#" target="blank">
              <img
                src="/img/partners/propel-logo-white.svg"
                alt=""
                className="partnerLogos  mantra"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="#" target="blank">
              <img
                src="/img/partners/blackdragon-dark.svg"
                alt=""
                className="partnerLogos  mantra"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="#" target="blank">
              <img
                src="/img/partners/n3rd-logo-white.svg"
                alt=""
                className="partnerLogos  mantra"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="#" target="blank">
              <img
                src="/img/partners/MUTUALBENEFITS.svg"
                alt=""
                className="partnerLogos  mantra"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="#" target="blank">
              <img
                src="/img/partners/skyfast-dark.svg"
                alt=""
                className="partnerLogos  mantra"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="#" target="blank">
              <img
                src="/img/partners/chaos-black.svg"
                alt=""
                className="partnerLogos  mantra"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="#" target="blank">
              <img
                src="/img/partners/aussie-black.svg"
                alt=""
                className="partnerLogos  mantra"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="#" target="blank">
              <img
                src="/img/partners/ventures-black.svg"
                alt=""
                className="partnerLogos  mantra"
              />
            </a>
          </div>
          <div className="patLogo">
            <a href="#" target="blank">
              <img
                src="/img/partners/everse-logo-1.png"
                alt=""
                className="partnerLogos  mantra"
              />
            </a>
          </div>
        </Carousel>
        <img
          src="/img/partner-circle.svg"
          alt=""
          className="partnersCircle"
        />
      </section>
      {/* Partners Section end  */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* Tokens Section Start */}
      <section className="tokenSection" id="token">
        <div className="tokenArea">
          <div className="tokenCard1">
            <img src="/img/main-token.svg" alt="" className="mainToken" />
            <div className="tokenLine"></div>
            <div className="tokenCard1texts">
              <h1 className="tokenCard1Heading">
                Egoras (EGS) <ArrowForwardIcon className="arrowIcon " />
              </h1>
              <p className="tokenCard1Para">
                EGS is a decentralized cryptocurrency stabilized against the
                value of the <br />
                US dollar, it uses egoras loan governance to respond to changing
                market
                <br /> conditions and preserve its value against the US dollar.
                Unlike other
                <br /> popular stablecoins whose value is backed directly by
                USD, it’s backed
                <br /> by crypto collaterals.
              </p>
            </div>
          </div>

          <div className="tokenCard1">
            <img src="/img/token-right.svg" alt="" className="mainToken" />
            <div className="tokenLine"></div>
            <div className="tokenCard1texts">
              <h1 className="tokenCard1Heading">
                Egoras Right (EGR) <ArrowForwardIcon className="arrowIcon " />
              </h1>
              <p className="tokenCard1Para">
                EGR is the fluctuating token of egoras protocol and it plays a
                role in
                <br /> stabilizing EGS and the governance of the loan protocol.
                EGR is required
                <br /> for paying the interest and this means that as the
                adoption and demand
                <br /> for the Egoras Credit system increases, there will be
                additional demand
                <br /> for EGR.
              </p>
            </div>
          </div>
        </div>
        <img src="/img/token-dots.svg" alt="" className="tokenDots" />
      </section>
      {/* Tokens Section End */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* explore section  start */}
      <section className="exploreSection" id="explore">
        <div className="exploreArea">
          <div className="exploretxts">
            <h1 className="good">Sounds good?</h1>
            <div className="exploreLink">
              <a href="/explore" className="exploreLoansbtn">
                Explore loans
              </a>
            </div>
          </div>

          <img src="/img/explore-dots.svg" alt="" className="exploreDots" />
          <img src="/img/explore-shape.svg" alt="" className="exploreShape" />
        </div>
      </section>
      {/* explore section  end */}
      {/* =================================================================================================================================================================================================================================================================== */}
    </div>
  );
};

export default Landing;
