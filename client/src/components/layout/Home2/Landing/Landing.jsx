import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetch, fetchStats } from "../../../../actions/loans";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

import "../../../../css/Landing.css";
import "../../../../css/landingMobile.css";

import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError,
} from "@web3-react/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faGifts,
  faArrowCircleRight,
  faArrowRight,
  faSpinner,
  faAsterisk,
  faAtom,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";

import Moment from "react-moment";
import "moment-timezone";
import axios from "axios";
import NumberFormat from "react-number-format";
import {
  rewardHoldersByVotePower,
  claimable,
  getSystemConfig,
} from "../../../../web3/index";

import { API_URL as api_url } from "../../../../actions/types";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// import Carousel from "react-bootstrap/Carousel";
// styles

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

const Landing = ({
  loans,
  fetch,
  statistics,
  fetchStats,
  match,
  intitiated,
}) => {
  const [loanData, setLoanData] = useState([]);
  const [videos, setVideos] = useState([]);
  const [stats, setStats] = useState({});
  const [getCategory, setGetCategory] = useState("women");
  const [isLoading, setIsLoading] = useState(true);
  const [nextClaimDate, setNextClaimDate] = useState(0);
  const context = useWeb3React();
  const { library, account } = context;

  useEffect(() => {
    if (account) {
      getSystemConfig(library.getSigner()).then((data) => {
        if (data.status) {
          // setNextClaimDate(parseInt(data.nextClaimDate.toString()));
        }
      });
    }
  }, [account]);

  useEffect(() => {
    const myId = window.location.hash.slice(1);
    const elem = document.getElementById(myId);
    if (elem) {
      elem.scrollIntoView();
    }
  }, [match]);

  // useEffect(() => {
  //   if (loans.length == 0 && typeof loans.data == "undefined") {
  //     fetch(3);
  //   }

  //   if (typeof loans.data !== "undefined" && loans.data.length > 0) {
  //       setIsLoading(false);
  //       setLoanData(loans.data);

  //       console.log(loans.data);
  //   }

  // }, [loans]);

  useEffect(() => {
    axios
      .get(api_url + "/api/loans/100", null, config)
      .then(function (response) {
        console.log(response.data.data);
        setLoanData(response.data.data);

        setIsLoading(false);
      });
  }, []);

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

    axios
      .get(
        // "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAaI0wsj9AhlVkLGdSggQjEvav0HtcyvZI"+
        // "&channelId=UCHfi5EwXig46xp5Dx8hVBHQ&part=snippet,id&order=date"+
        // "&maxResults=6",
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAaI0wsj9AhlVkLGdSggQjEvav0HtcyvZI" +
          "&channelId=UCHfi5EwXig46xp5Dx8hVBHQ&part=snippet,id&order=date" +
          "&maxResults=20",
        null,
        config
      )
      .then((response) => {
        console.log(response.data.items);
        setVideos(response.data.items);
      })
      .catch((err) => {
        setVideos([
          {
            id: { videoId: "fPHzVIrRIV4" },
            snippet: { title: "Customer Experience With Mr Innocent" },
          },
          {
            id: { videoId: "VkLJz_A2DeM" },
            snippet: { title: "Customer Experience With Catherine Innocent" },
          },
          {
            id: { videoId: "_Q4sNYaSqVw" },
            snippet: {
              title: "Sarah Chukwuemeka - Head Of Business Development",
            },
          },
        ]);
      });
  }, []);

  const rewardUsers = async () => {
    let ret = await claimable(library.getSigner());
    if (ret.status == true) {
      rewardHoldersByVotePower(library.getSigner());
    } else {
    }
  };

  const triggerCategory = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(e.target.id);
    // setGetCategory(e.target.id);

    // const finalCat = e.target.id.replace("%20", " ");
    const finalCat = "all%20loans";

    console.log(finalCat);

    if (finalCat == "all loans") {
      axios
        .get(api_url + "/api/loans/100", null, config)
        .then(function (response) {
          console.log(response, "Lekeleke");
          setLoanData(response.data.data);

          setIsLoading(false);
          // console.log(response.data.data);
        });
    } else {
      axios
        .get(
          api_url + "/api/loans/get/by/category/" + e.target.id,
          null,
          config
        )
        .then(function (response) {
          console.log(response.data.data);
          setLoanData(response.data.data);

          setIsLoading(false);
        });
    }
  };

  const triggerStatus = (e) => {
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
    axios
      .get(api_url + "/api/loans/get/by/status/" + status, null, config)
      .then(function (response) {
        setLoanData(response.data.data);

        setIsLoading(false);
      });
  };

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
      <section className="gtheroSection">
        <div className="container">
          <div className="gtheroArea">
            <div className="heroTxts">
              <h1 className="gtheroTitleloan">
                Uncollateralised
                <br /> micro-credits.
              </h1>
              <p className="gtheroCaption">FOR SMALL ENTREPRENEURS</p>
              <p className="gtheroPara">
                Egoras microfinance protocol provides uncollateralised
                <br />
                micro-credit to small entrepreneurs and enterprises <br />
                who cannot take shelter of banks
                <br /> for banking and other services.
              </p>
              <div className="heroButton">
                <a href="/explore" className="heroBtn">
                  See Loans
                </a>
              </div>
            </div>

            <div
              className="hero-images"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img src="/img/phone-hero.png" alt="" className="heroPhone" />
              <img src="/img/shape-egg.svg" alt="" className="eggShape" />
              <img src="/img/dots.svg" alt="" className="gtdots" />
              <img src="/img/x-shape.svg" alt="" className="gtx" />
              <img src="/img/circle.svg" alt="" className="gtcircle" />
              <div className="card-amount">
                <img src="/img/coin-icon.svg" alt="" className="coin" />
                <p className="amount">₦800,000</p>
              </div>
            </div>
          </div>
        </div>

        <img src="/img/blur-drop.png" alt="" className="blurDrop" />
      </section>
      {/* hero section end */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* How it Works Section Start */}
      <section className="gthowItWorks" id="howitworks">
        <div className="container">
          <div
            className="gttitleLine"
            data-aos="fade-up"
            data-aos-duration="3000"
          ></div>
          <div
            className="gthowItWorksTitle"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
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
              <div
                className="gthowCard1"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
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
              <div
                className="gthowCard2"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
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
              <div
                className="gthowCard3"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
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
                    Instant Loans shouldn't be a luxury !<br /> We are
                    determined to make sure
                    <br /> you have access to sufficient funds
                    <br /> immediately after inspection
                    <br /> of collaterals.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="gthowItWorksArea2">
              <div
                className="gthowCard1"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
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
              <div
                className="gthowCard2"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
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
              <div
                className="gthowCard3"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
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
        </div>

        <img src="/img/left-back-drop.svg" alt="" className="gtleftBack" />
        <img src="/img/second-dots.svg" alt="" className="gtsecondDots" />
      </section>
      {/* How it Works Section End */}
      {/* 
    {/* =================================================================================================================================================================================================================================================================== */}
      {/*  Projects Section start*/}
      <section className="projectsSection" id="projects">
        <div className="container">
          <div
            className="projectsArea"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="projectsLine"></div>
            <div className="projectsTitleContents">
              <div className="projectTitle">
                <h1 className="gttitle">Recent projects</h1>

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
              showDots={false}
            >
              {loanData.map((loan, i) => {
                if (loan.loan_category === getCategory) {
                  console.log(loan.loan_category);
                  let percent = 0;
                  let up = 0;
                  let down = 0;
                  let accepted = parseInt(loan.accepted);
                  let declined = parseInt(loan.declined);

                  if (declined == 0 && accepted > 0) {
                    up = 100;
                  } else if (accepted == 0 && declined > 0) {
                    down = 100;
                  }
                  if (accepted == 0 && declined == 0) {
                  } else {
                    let wholeNumber = declined + accepted;
                    let percent = (accepted / wholeNumber) * 100;

                    if (percent !== Infinity) {
                      up = percent;
                      down = 100 - percent;
                    }
                  }
                }

                return (
                  // <Link to="/loan-details">{"/loan/details/" + loan.id}
                  // <Link to="/loan-details">
                  <a href={"/loan-details/" + loan.id}>
                    <div className="cardA">
                      <div
                        className="img"
                        style={{
                          backgroundImage: `url(${loan.cover_image})`,
                          height: "200px",
                          width: "100%",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          borderRadius: "15px",
                        }}
                      >
                        <div className="img-amount">
                          <NumberFormat
                            value={parseFloat(loan.loan_amount)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                          />
                        </div>
                      </div>
                      <div className="cardDetails">
                        <h1 className="cardHeader">{loan.loan_tile}</h1>
                        <p className="cardPara">Interest: 24% APY</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </Carousel>
            {/* Carousel end==============================
==============================================
============================= */}
          </div>
        </div>
      </section>
      {/*  Projects Section end*/}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* Benefits Section start */}
      <section className="gtbenefitsSection" id="benefits">
        <div className="container">
          <div
            className="gttitleLine"
            data-aos="fade-up"
            data-aos-duration="3000"
          ></div>
          <div
            className="gthowItWorksTitle"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="gttitle">Benefits</h1>
          </div>

          <div className="gtbenefitsArea">
            <div
              className="gtbenefitCard1"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="gtbCardIcon">
                <img src="/img/b-icon1.svg" alt="" className="gtbIcon" />
              </div>
              <div className="gtbCardTexts">
                <h1 className="gtbCardTitle">
                  Zero-Interest
                  <br />
                  Micro-Credit
                </h1>
                <p className="gtbCardPara">
                  Generate Egoras stable currency when
                  <br /> your credit is approved, and destroy the
                  <br /> stable currency when you repay the
                  <br /> credit.
                </p>
              </div>
            </div>

            <div
              className="gtbenefitCard2"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="gtbCardIcon">
                <img src="/img/b-icon2.svg" alt="" className="gtbIcon" />
              </div>
              <div className="gtbCardTexts">
                <h1 className="gtbCardTitle">
                  Lend Funds without <br />
                  risking your capital
                </h1>
                <p className="gtbCardPara">
                  There is no loss of capital when
                  <br /> you participate in approving credits on
                  <br /> Egoras protocol. Your capital is released <br />
                  immediately after the credit
                  <br />
                  is approved on the protocol.
                </p>
              </div>
            </div>

            <div
              className="gtbenefitCard3"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="gtbCardIcon">
                <img src="/img/b-icon3.svg" alt="" className="gtbIcon" />
              </div>
              <div className="gtbCardTexts">
                <h1 className="gtbCardTitle">
                  Borrow with micro-collateral
                  <br /> regardless of your location
                </h1>
                <p className="gtbCardPara">
                  No collateral is required for credit on
                  <br /> Egoras protocol.
                </p>
              </div>
            </div>

            <div
              className="gtbenefitCard4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="gtbCardIcon">
                <img src="/img/b-icon4.svg" alt="" className="gtbIcon" />
              </div>
              <div className="gtbCardTexts">
                <h1 className="gtbCardTitle">
                  Earn high-yield <br />
                  on credits
                </h1>
                <p className="gtbCardPara">
                  Earn high weekly interest when you <br />
                  participate in credit governance
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src="/img/right-back-drop.svg" alt="" className="gtrightBack" />
        <img src="/img/shape-egg2.svg" alt="" className="gteggShape2" />
      </section>
      {/* Benefits Section start */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* Stories Section Start  */}
      <section className="gtstoriesSection">
        <div className="container">
          <div
            className="gttitleLine"
            data-aos="fade-up"
            data-aos-duration="3000"
          ></div>
          <div
            className="gthowItWorksTitle"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="gttitle" data-aos="fade-up" data-aos-duration="3000">
              Popular Stories
            </h1>
          </div>
          <div
            className="gtstoriesArea"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {/* Carousel start==============================
==============================================
============================= */}
            <Carousel
              responsive={responsive}
              className="storiesCard"
              showDots={false}
              infinite={true}
            >
              <div className="storiesCard1">
                <div className="storiesCardVideo">
                  <iframe
                    className="stroriesIframe"
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/C42kN47tbQk"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mrs Faith, She used Egoras
                    <br /> micro-credit to restore her failing
                    <br /> farm business.
                  </h5>
                  <h6 className="storiesCardDate">19 Apr 2021</h6>
                </div>
              </div>
              <div className="storiesCard1">
                <div className="storiesCardVideo">
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
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mrs Onyiyechi, She used Egoras
                    <br /> microcredit to expand her
                    <br />
                    small business
                  </h5>
                  <h6 className="storiesCardDate">19 Apr 2021</h6>
                </div>
              </div>
              <div className="storiesCard1">
                <div className="storiesCardVideo">
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
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mrs Elizabeth, She used Egoras
                    <br /> microcredit to expand her
                    <br />
                    grocery business.
                  </h5>
                  <h6 className="storiesCardDate">19 Apr 2021</h6>
                </div>
              </div>
              <div className="storiesCard1">
                <div className="storiesCardVideo">
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
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Mrs Chidinma Happiness used Egoras
                    <br /> Micro-credit to expand her
                    <br />
                    grocery business
                  </h5>
                  <h6 className="storiesCardDate">1 Apr 2021</h6>
                </div>
              </div>
              <div className="storiesCard1">
                <div className="storiesCardVideo">
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
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mrs Justina Kelechi, a small <br />
                    business owner that used Egoras <br />
                    microcredit to grow her business
                  </h5>
                  <h6 className="storiesCardDate">1 Apr 2021</h6>
                </div>
              </div>
              <div className="storiesCard1">
                <div className="storiesCardVideo">
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
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mr Chinemerem, An Egoras <br />
                    borrower
                  </h5>
                  <h6 className="storiesCardDate">28 Mar 2021</h6>
                </div>
              </div>
              <div className="storiesCard1">
                <div className="storiesCardVideo">
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
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mrs Chidinma Ogu,
                    <br /> an Egoras borrower
                  </h5>
                  <h6 className="storiesCardDate">28 Mar 2021</h6>
                </div>
              </div>
              <div className="storiesCard1">
                <div className="storiesCardVideo">
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
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mrs Faith Akpan, An Egoras <br />
                    borrower
                  </h5>
                  <h6 className="storiesCardDate">28 Mar 2021</h6>
                </div>
              </div>
              <div className="storiesCard1">
                <div className="storiesCardVideo">
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
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    What is Egoras Microfinance Protocol
                  </h5>
                  <h6 className="storiesCardDate">23 Mar 2021</h6>
                </div>
              </div>
              <div className="storiesCard1">
                <div className="storiesCardVideo">
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
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Mrs Gloria Omoreke just doubled
                    <br /> her profits with Egoras
                    <br />
                    Micro-credit
                  </h5>
                  <h6 className="storiesCardDate">23 Mar 2021</h6>
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
        </div>

        <img src="/img/video-dots.svg" alt="" className="gtvidDots" />
      </section>
      {/* Stories Section End  */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* Partners Section start  */}
      <section className="gtpartnersSection">
        <div className="container">
          <div className="gttitleLine"></div>
          <div className="gthowItWorksTitle">
            <h1 className="gttitle">Our Partners</h1>
          </div>
          <div className="gtPartnersArea">
            <div className="gtpatLogo">
              <a href="https://paidnetwork.com/" target="blank">
                <img
                  src="/img/partners/PAIDNETWORK.svg"
                  alt=""
                  className="gtpartnerLogos   paid"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://yellowroad.app/" target="blank">
                <img
                  src="/img/partners/yellow-road-white.svg"
                  alt=""
                  className="gtpartnerLogos yellow"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://www.threem.capital/" target="blank">
                <img
                  src="/img/partners/threecapital-black.svg"
                  alt=""
                  className="gtpartnerLogos three"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://buidlhodl.capital/" target="blank">
                <img
                  src="/img/partners/build-logo-white.svg"
                  alt=""
                  className="gtpartnerLogos build"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://exnetwork.community/" target="blank">
                <img
                  src="/img/partners/ex-capital-white.svg"
                  alt=""
                  className="gtpartnerLogos ex"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://ferrum.network/" target="blank">
                <img
                  src="/img/partners/ferrum-network-white.svg"
                  alt=""
                  className="gtpartnerLogos ferrum"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://titans.ventures/" target="blank">
                <img
                  src="/img/partners/TITANS2.svg"
                  alt=""
                  className="gtpartnerLogos titans"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://www.juncapital.io/" target="blank">
                <img
                  src="/img/partners/jun-logo-white.svg"
                  alt=""
                  className="gtpartnerLogos jun"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://nuls.medium.com/" target="blank">
                <img
                  src="/img/partners/NULS.svg"
                  alt=""
                  className="gtpartnerLogos nuls"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://launchpool.xyz/" target="blank">
                <img
                  src="/img/partners/launchpooldark-image.svg"
                  alt=""
                  className="gtpartnerLogos launch"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://www.mantradao.com/" target="blank">
                <img
                  src="/img/partners/mantra-logo-white.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/resurgence-logo-white.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/QUIVERX.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/propel-logo-white.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/blackdragon-dark.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/n3rd-logo-white.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/MUTUALBENEFITS.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/skyfast-dark.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/chaos-black.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/aussie-black.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/ventures-black.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/everse-logo-1.png"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
          </div>
        </div>

        <img
          src="/img/partner-circle.svg"
          alt=""
          className="gtpartnersCircle"
        />
      </section>
      {/* Partners Section end  */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* Tokens Section Start */}
      <section className="tokenSection" id="token">
        <div className="container">
          <div className="tokenArea">
            <div
              className="tokenCard1"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img src="/img/main-token.svg" alt="" className="mainToken" />
              <div className="tokenLine"></div>
              <div className="tokenCard1texts">
                <h1 className="tokenCard1Heading">
                  Egoras (EUSD) <ArrowForwardIcon className="arrowIcon " />
                </h1>
                <p className="tokenCard1Para">
                  EGS is a decentralized cryptocurrency stabilized against the
                  value of the <br />
                  US dollar, it uses egoras loan governance to respond to
                  changing market
                  <br /> conditions and preserve its value against the US
                  dollar. Unlike other
                  <br /> popular stablecoins whose value is backed directly by
                  USD, it’s backed
                  <br /> by crypto collaterals.
                </p>
              </div>
            </div>

            <div
              className="tokenCard1"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img src="/img/token-right.svg" alt="" className="mainToken" />
              <div className="tokenLine"></div>
              <div className="tokenCard1texts">
                <h1 className="tokenCard1Heading">
                  Egoras Right (EGR) <ArrowForwardIcon className="arrowIcon " />
                </h1>
                <p className="tokenCard1Para">
                  EGR is the fluctuating token of egoras protocol and it plays a
                  role in
                  <br /> stabilizing EGS and the governance of the loan
                  protocol. EGR is required
                  <br /> for paying the interest and this means that as the
                  adoption and demand
                  <br /> for the Egoras Credit system increases, there will be
                  additional demand
                  <br /> for EGR.
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src="/img/token-dots.svg" alt="" className="tokenDots" />
      </section>
      {/* Tokens Section End */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* explore section  start */}
      <section className="gtexploreSection">
        <div className="container">
          <div
            className="gtexploreArea"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="gtexploretxts">
              <h1
                className="gtgood"
                data-aos="fade-down"
                data-aos-duration="3000"
              >
                Sounds good?
              </h1>
              <div className="gtexploreLink">
                <a
                  href="https://egoras.ng/appointment"
                  className="gtexploreLoansbtn"
                >
                  Get the loan.
                </a>
              </div>
            </div>

            <img src="/img/explore-dots.svg" alt="" className="gtexploreDots" />
            <img
              src="/img/explore-shape.svg"
              alt=""
              className="gtexploreShape"
            />
          </div>
        </div>
      </section>
      {/* explore section  end */}
      {/* =================================================================================================================================================================================================================================================================== */}
    </div>
  );
};

// export default Landing;

const mapStateToProps = (state) => ({
  loans: state.loans,
  statistics: state.statistics,
});

export default connect(mapStateToProps, {
  fetch,
  fetchStats,
})(Landing);
