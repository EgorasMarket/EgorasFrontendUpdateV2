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
    breakpoint: { max: 1024, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const About = () => {
  return (
    <div>
      {/* hero section start */}
      <section className="gtheroSection about-us-section">
        <div className="container">
          <div className="gtheroArea">
            <div
              className="gtheroTxts width"
              data-aos="fade-up"
              // data-aos="fade-up"
              // data-aos-easing="linear"
              // data-aos-once="false"
            >
              <h1 className="heroTitle3 title-3">
                Transforming Micro-credit in Africa, and the rest of the world.
              </h1>
              <p className="gtheroCaption caption2" style={{ color: "#000" }}>
                Egoras micro-financing platform offers micro-credit to small
                entrepreneurs and individuals who cannot take shelter of banks
                for banking and other services.
              </p>
            </div>

            <div
              className="hero-images photo-imgs"
              style={{ margin: 0 }}
              data-aos="fade-up"
            >
              <div className="img-divs">
                <div className="imgdiv1 flexauto1">
                  <img
                    src="/img/photoshoot/about-img1.jpg"
                    className="about-img1"
                    alt=""
                  />
                </div>
                <div className="imgdiv1 flexauto2">
                  <img
                    src="/img/photoshoot/about-img2.jpg"
                    className="about-img1"
                    alt=""
                  />
                </div>
                <div className="imgdiv1 margin-img">
                  <img
                    src="/img/photoshoot/about-img3.jpg"
                    className="about-img1"
                    alt=""
                  />
                </div>
                <div className="imgdiv1">
                  <img
                    src="/img/photoshoot/about-img4.jpg"
                    className="about-img1"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/blur-drop.png" alt="" className="blur-white-bg" />
        <img src="/img/icons/left-blur.png" alt="" className="blur-white-bga" />
      </section>
      {/* hero section end */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* hero section start */}
      <section className="gtheroSection about-us-section  about-us-section-2">
        <div className="container">
          <div className="gtheroArea top-align">
            <div
              className="hero-images width-img"
              style={{ margin: 0 }}
              data-aos="fade-up"
            >
              <div className="img-divs-second">
                <div className="imgdiv1-second ">
                  <img
                    src="/img/photoshoot/about-img5.jpg"
                    className="about-img1-second"
                    alt=""
                  />
                </div>
                <div className="imgdiv1-second ">
                  <img
                    src="/img/photoshoot/about-img6.jpg"
                    className="about-img1-second"
                    alt=""
                  />
                </div>
                <div className="imgdiv1-second margin-img ">
                  <img
                    src="/img/photoshoot/about-img7.jpg"
                    className="about-img1-second  img-7 "
                    alt=""
                  />
                </div>
                <div className="imgdiv1-second ">
                  <img
                    src="/img/photoshoot/about-img8.jpg"
                    className="about-img1-second  img-8 "
                    alt=""
                  />
                </div>
                <div className="imgdiv1-second">
                  <img
                    src="/img/photoshoot/about-img9.jpg"
                    className="about-img1-second"
                    alt=""
                  />
                </div>
                <div className="imgdiv1-second">
                  <img
                    src="/img/photoshoot/about-img10.jpg"
                    className="about-img1-second"
                    alt=""
                  />
                </div>
                <div className="imgdiv1-second imgdiv1-second-last">
                  <img
                    src="/img/photoshoot/about-img11.jpg"
                    className="about-img1-second img-11"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="gtheroTxts column"
              data-aos="fade-up"
              // data-aos="fade-up"
              // data-aos-easing="linear"
              // data-aos-once="false"
            >
              <div className="missiontxt">
                <h1 className="heroTitle3 title-3">Our Mission</h1>
                <p className="gtheroCaption caption2" style={{ color: "#000" }}>
                  Egoras mission is to provide zero interest credit for all
                  humanity.
                </p>
              </div>
              <div className="missiontxt">
                <h1 className="heroTitle3 title-3">Our Values</h1>

                <div className="values-cont">
                  <div className="txt-flex">
                    <img src="/img/b-icon1a.svg" alt="" className="bIcon1" />
                    <h1 className="valuetitle">Achieve more with less.</h1>
                  </div>
                  <p className="mission-para">
                    We look for less expensive ways to achieve our goals. We
                    think twice when it comes to spending and aggresive in
                    cutting cost.
                  </p>
                </div>
                <div className="values-cont">
                  <div className="txt-flex">
                    <img src="/img/b-icon2a.svg" alt="" className="bIcon1" />
                    <h1 className="valuetitle">Stay excited and hungry.</h1>
                  </div>
                  <p className="mission-para">
                    We are always eager to achieve more and we are never
                    comfortable with any level. We are not afraid of taking risk
                    in order to reach our goals.
                  </p>
                </div>
                <div className="values-cont">
                  <div className="txt-flex">
                    <img src="/img/b-icon3a.svg" alt="" className="bIcon1" />
                    <h1 className="valuetitle">
                      {" "}
                      Overwhelm users with amazing service.
                    </h1>
                  </div>
                  <p className="mission-para">
                    We strive to look for ways to provide access to funding to
                    our users at zero cost. We make sure that we provide a
                    service that is very stress-free.
                  </p>
                </div>
                <div className="values-cont">
                  <div className="txt-flex">
                    <img src="/img/b-icon4a.svg" alt="" className="bIcon1" />
                    <h1 className="valuetitle"> We are family.</h1>
                  </div>
                  <p className="mission-para">
                    We are one family united by one one mission and love. We
                    sincerely care about each other's welfare and we make sure
                    that everyone is properly taken care of.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/blur-drop.png" alt="" className="blur-white-bg2" />
        <img
          src="/img/icons/left-blur.png"
          alt=""
          className="blur-white-bga2"
        />
      </section>
      {/* hero section end */}

      {/* =============================================================================================================================================================================================================================================
      {/* =================================================================================================================================================================================================================================================================== */}

      {/* about-egoras-section */}
      <section className="about-egoras-team">
        <div className="container">
          <div className="egoras-team-area">
            <div className="gthowItWorksTitle">
              <h1 className="gttitle">Our Story</h1>
              <p className="AboutUsPara">
                Egoras was founded in 2019 by a team of entrepreneurs,
                ex-bankers and engineers determined to distrupt the lending
                sector launched a decentralised micro-finance protocol on
                blockchain. Thousands of small businesses increased their profit
                margin because of the little interest associated with our loans.
                Today we are even more determined and have built an
                interest-free decentralised protocol across multiple
                blockchains. Our protocol can help you get access to funding
                within 5mins at a zero-interest rate.
                {/* <br /> <br /> */}
                {/* Today we are even more determined and have built an
                interest-free decentralised protocol across multiple
                blockchains. */}
                {/* <br />
                Our protocol can help you get access to funding within 5mins at
                a zero-interest rate.
                <br /> <br />
                Your micro collaterals are represented on blockchain, so you can
                easily transfer ownership or even sell your collaterals.
                <br /> <br />
                So no matter where you live in the world, we are here to help
                you have access to interest-free loans. */}
              </p>
            </div>
            <div className="egoras-team-picture">
              <img
                src="/img/photoshoot/about-imgbiga.jpg"
                alt=""
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </div>
          </div>
        </div>
        <img
          src="/img/icons/right-brown-blur.png"
          alt=""
          className="blur-white-bga3"
        />
        <img
          src="/img/icons/left-blur.png"
          alt=""
          className="blur-white-bga4"
        />
      </section>
      {/* about-egoras-section */}
      {/* ================================================== */}
      {/* ================================================== */}
      {/* ================================================== */}
      {/* ================================================== */}
      {/* ================================================== */}
      {/* ================================================== */}
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
                <a href="https://cointelegraph.com/" className="partnerLink">
                  {" "}
                  <img
                    src="/img/coin-telegraph.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://finance.yahoo.com/" className="partnerLink">
                  {" "}
                  <img
                    src="/img/YAHOOFINANCE.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://www.newsbtc.com/" className="partnerLink">
                  {" "}
                  <img src="/img/NEWSBTC.svg" alt="" className="partnerlog" />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://apnews.com/" className="partnerLink">
                  {" "}
                  <img src="/img/APNEWS.svg" alt="" className="partnerlog" />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://independent.ng/" className="partnerLink">
                  {" "}
                  <img
                    src="/img/INDEPENDENT.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://guardian.ng/" className="partnerLink">
                  {" "}
                  <img
                    src="/img/THEGUARDIAN.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://nairametrics.com/" className="partnerLink">
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
