import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Carousel from "react-multi-carousel";

import "../../../../css/about.css";
import "../../../../css/aboutMobile.css";

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

const About = () => {
  return (
    <div>
      {/* hero section start */}
      <section className="gtheroSection">
        <div className="container">
          <div className="gtheroArea">
            <div
              className="gtheroTxts"
              data-aos="fade-up"
              // data-aos="fade-up"
              // data-aos-easing="linear"
              // data-aos-once="false"
            >
              <h1 className="heroTitle3">Our Mission</h1>
              <p className="gtheroCaption" style={{ color: "#000" }}>
                Egoras mission is to provide zero interest
                <br />
                credit for all humanity.
              </p>
            </div>

            <div
              className="hero-images"
              style={{ margin: 0 }}
              data-aos="fade-up"
            >
              <img src="/img/aboutPhone.svg" alt="" className="aboutPhone" />
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}
      {/* =================================================================================================================================================================================================================================================================== */}

      {/* Tokens Section Start */}
      <section className="tokenSection">
        <div className="container">
          <div className="aboutArea" data-aos="fade-up">
            <div className="aboutTxts">
              <div className="AboutLine"></div>
              <div className="loanDetailsTitle">
                <h1 className="gttitle">About Us</h1>
              </div>
              <p className="AboutUsPara">
                A few years ago, a small team of people determined to distrupt
                the lending sector
                <br /> launched a decentralised micro-finance protocol on
                Binance Smart Chain.
                <br /> Thousands of small businesses increased their profit
                margin because of
                <br />
                the little interest associated with our loans. <br /> <br />
                Today we are even more determined and have built an
                interest-free <br />
                decentralised protocol across multiple blockchains.
                <br /> <br />
                Our protocol can help you get access to funding within 5mins
                <br /> at a zero-interest rate.
                <br /> <br />
                Your micro collaterals are represented on blockchain, so you can
                easily
                <br /> transfer ownership or even sell your collaterals.
                <br /> <br />
                So no matter where you live in the world, we are here to help
                you have
                <br /> access to interest-free loans.
              </p>
            </div>
          </div>
        </div>

        <img src="/img/token-dots.svg" alt="" className="tokenDots" />
      </section>
      {/* Tokens Section End */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* Benefits Section start */}
      <section className="benefitsSection">
        <div className="container">
          <div className="gttitleLine"></div>
          <div className="gthowItWorksTitle">
            <h1 className="gttitle">Our Values</h1>
          </div>

          <div className="gtbenefitsArea">
            <div
              className="gtbenefitCard1"
              data-aos="fade-up"
              data-aos-duration="2s"
              data-aos-easing="linear"
              data-aos-once="false"
            >
              <div className="gtbCardIcon">
                <img src="/img/b-icon1a.svg" alt="" className="bIcon" />
              </div>
              <div className="gtbCardTexts">
                <h1 className="gtbCardTitle">
                  Achieve more with
                  <br />
                  less.
                </h1>
                <p className="gtbCardPara">
                  We look for less expensive ways
                  <br />
                  to achieve our goals. We think <br />
                  twice when it comes to spending <br />
                  and aggresive in cutting cost.
                </p>
              </div>
            </div>

            <div
              className="gtbenefitCard2"
              data-aos="fade-up"
              data-aos-duration="1s"
              data-aos-easing="linear"
              data-aos-once="false"
            >
              <div className="gtbCardIcon">
                <img src="/img/b-icon2a.svg" alt="" className="bIcon" />
              </div>
              <div className="gtbCardTexts">
                <h1 className="gtbCardTitle">Stay excited and hungry.</h1>
                <p className="gtbCardPara">
                  We are always eager to to achieve
                  <br />
                  more and we are never comfortable <br />
                  with any level. We are not
                  <br />
                  afraid of taking risk in order
                  <br />
                  to reach our goals.
                </p>
              </div>
            </div>

            <div
              className="gtbenefitCard3"
              data-aos="fade-up"
              data-aos-duration="1s"
              data-aos-easing="linear"
              data-aos-once="false"
            >
              <div className="gtbCardIcon">
                <img src="/img/b-icon3a.svg" alt="" className="bIcon" />
              </div>
              <div className="gtbCardTexts">
                <h1 className="gtbCardTitle">
                  Overwhelm users with
                  <br /> amazing service.
                </h1>
                <p className="gtbCardPara">
                  We strive to look for ways to provide
                  <br />
                  access to funding to our users at zero
                  <br />
                  cost. We make sure that we provide
                  <br />a service that is very stress-free.
                </p>
              </div>
            </div>

            <div
              className="gtbenefitCard4"
              data-aos="fade-up"
              data-aos-duration="1s"
              data-aos-easing="linear"
              data-aos-once="false"
            >
              <div className="gtbCardIcon">
                <img src="/img/b-icon4a.svg" alt="" className="bIcon" />
              </div>
              <div className="gtbCardTexts">
                <h1 className="gtbCardTitle">We are family</h1>
                <p className="gtbCardPara">
                  We are one family united by one <br />
                  one mission and love. We sincerely
                  <br />
                  care about each other's welfare and
                  <br />
                  we make sure that everyone is <br />
                  properly taken care of.
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
          <div className="gttitleLine"></div>
          <div className="gthowItWorksTitle">
            <h1 className="gttitle">What people are saying.</h1>
          </div>
          <div className="gtstoriesArea">
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
            {/* <div className="carouselLinkStories">
              <a
                href="https://www.youtube.com/channel/UCHfi5EwXig46xp5Dx8hVBHQ/videos"
                target="_blank"
                className="carouselLinkbtn"
              >
                View All
              </a>
            </div> */}
          </div>
        </div>

        <img src="/img/video-dots.svg" alt="" className="gtvidDots" />
      </section>
      {/* Stories Section End  */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* Stories Section Start  */}
      <section className="gtstoriesSection">
        <div className="container">
          <div className="gtstoriesArea">
            {/* Carousel start==============================
==============================================
============================= */}
            <Carousel
              responsive={responsive}
              className="partnerCards"
              showDots={false}
              infinite={false}
            >
              <div className="partnerLogo1">
                <a href="" className="partnerLink">
                  {" "}
                  <img
                    src="/img/coin-telegraph.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="" className="partnerLink">
                  {" "}
                  <img
                    src="/img/YAHOOFINANCE.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="" className="partnerLink">
                  {" "}
                  <img src="/img/NEWSBTC.svg" alt="" className="partnerlog" />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="" className="partnerLink">
                  {" "}
                  <img src="/img/APNEWS.svg" alt="" className="partnerlog" />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="" className="partnerLink">
                  {" "}
                  <img
                    src="/img/INDEPENDENT.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="" className="partnerLink">
                  {" "}
                  <img
                    src="/img/THEGUARDIAN.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="" className="partnerLink">
                  {" "}
                  <img
                    src="/img/NAIRAMETRICS.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
            </Carousel>
            {/* Carousel end==============================
==============================================
============================= */}
            {/* <div className="carouselLinkStories">
              <a
                href="https://www.youtube.com/channel/UCHfi5EwXig46xp5Dx8hVBHQ/videos"
                target="_blank"
                className="carouselLinkbtn"
              >
                View All
              </a>
            </div> */}
          </div>
        </div>
      </section>
      {/* Stories Section End  */}
      {/* =================================================================================================================================================================================================================================================================== */}
    </div>
  );
};

export default About;
