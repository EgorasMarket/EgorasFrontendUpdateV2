import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
import Countdown from "react-countdown-now";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.css";
// import { Link } from "react-router-dom";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledCollapse,
  Button,
  CardBody,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import {
  acceptLoan,
  loanInfo,
  payLoan,
  checkAllowance,
  unluckToken,
  transactReceipt,
  activateLoan,
} from "../../../web3/index";
import Footer from "../parts/Footer";
import { parseEther, formatEther } from "@ethersproject/units";
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError,
} from "@web3-react/core";
import axios from "axios";
import { API_URL as api_url } from "../../../actions/types";
import { messenger } from "../../../actions/loans";
import {
  faCheckCircle,
  faCircleNotch,
  faChevronRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Alert from "../Alert";

import "../../../css/loanDetails.css";
import "../../../css/loandetailsMobile.css";

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

const LoanDetails = ({ match, loans, messenger }) => {
  const [status, setStatus] = useState(
    <img className="upimg" src="/up.png" alt="" />
  );
  const [isSuccess, setIsSuccess] = useState(false);
  const onEntered = () =>
    setStatus(<img className="upimg" src="/up.png" alt="" />);
  const [isLoading, setIsLoading] = useState(false);
  const [btnText, setBtnText] = useState("Vote");
  const [stage, setStage] = useState(0);
  const onExited = () => setStatus(<img src="/down.png" alt="" />);
  const [text, setText] = useState("");
  const [nodata, setNodata] = useState(false);
  const [up, setUp] = useState(0);
  const [down, setDown] = useState(0);
  const [loanData, setLoanData] = useState({});
  const [allLoansData, setAllLoansData] = useState([]);
  const [getCategory, setGetCategory] = useState("women");
  const [nextTrue, setNextTrue] = useState(false);
  const [unlockWhat, setUnlockWhat] = useState("EGR");
  // const [loanData2, setLoanData2] = useState({});
  const [loanData2, setLoanData2] = useState({
    cover_image: "",
    loan_category: "",
    loan_tile: "",
    loan_amount: "",
    id: null,
  });
  const [directors, setDirectors] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [loanCompany, setLoanCompany] = useState({
    name_of_company: "",
    location: "",
    company_offset_loan: false,
  });
  const [loanDetailData, setLoanDetailData] = useState({
    validated: "",
    isActiveVotingPeriod: "",
    is_approved: "",
    payable: 0,
  });
  ///Start of Controlling Modal
  const [stageOne, setStageOne] = useState(0);
  const [stageTwo, setStageTwo] = useState(0);
  const [hash, setHash] = useState("");
  const [unlocking, setUnlocking] = useState(false);
  ///End of Controlling Modal
  const context = useWeb3React();
  const { library, account } = context;
  const [formData, setFormData] = useState({
    vote: "0",
    votePower: 0,
    repayAmount: "",
  });
  const [modal, setModal] = useState(false);

  const { vote, votePower, repayAmount } = formData;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(api_url + "/api/loans/get/by/id/" + match.params.id, null, config)
      .then(function (response) {
        axios
          .get(
            api_url + "/api/loans/system/info/" + response.data.data[0].loanID,
            null,
            config
          )
          .then((data) => {
            let d = data.data.data;
            let theCountDown = new Date(
              response.data.data[0].countDown
            ).getTime();
            let now = new Date(data.data.newdate).getTime();

            console.log(data.data);
            setLoanDetailData({
              ...loanDetailData,
              ["validated"]: d._validate,
              ["isActiveVotingPeriod"]: theCountDown >= now,
              ["is_approved"]: d._state,
              ["payable"]: d._finalLoanAmount,
            });

            let accepted = parseInt(response.data.data[0].accepted);
            let declined = parseInt(response.data.data[0].declined);

            if (declined == 0 && accepted > 0) {
              setUp(100);
            } else if (accepted == 0 && declined > 0) {
              setDown(100);
            }
            if (accepted == 0 && declined == 0) {
            } else {
              let wholeNumber = declined + accepted;
              let percent = (accepted / wholeNumber) * 100;

              if (percent !== Infinity) {
                setUp(percent);
                setDown(100 - percent);
              }
            }

            // console.log(response.data.data[0]);

            setLoanData(response.data.data[0]);

            setIsFetching(false);
          });
        console.log(response.data.data[0].loanID);
      });

    localStorage.setItem("unlocking", false);
  }, [match]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(api_url + "/api/loans/100", null, config)
      .then(function (response) {
        console.log(response.data.data);
        setAllLoansData(response.data.data);

        setIsLoading(false);
      });
  }, []);

  console.log(allLoansData);

  return (
    <div>
      {/* hero section start */}
      <section className="gtheroSection ">
        <div className="container">
          <div className="heroArea2">
            <div className="gtheroTxts" data-aos="fade-up">
              <h1 className="gtheroTitleloan">
                For Mrs. Eno Friday <br />
                Okon to improve her
                <br />
                <span className="restaurant">restaurant </span>
                business.
              </h1>
              <div className="heroSlider">
                <div className="slider-txts1">
                  <div className="p-texts">
                    <p className="ptxt1">Yes</p>
                    <p className="ptxt2">No</p>
                  </div>
                  <div className="h-texts">
                    <h3 className="htxt1">82%</h3>
                    <h3 className="htxt2">18%</h3>
                  </div>
                </div>
                <div className="slider"></div>
                <div className="slider-txts2">
                  <div className="p-texts2">
                    <p className="ptxt1">Yes Powered by 54000 EGR</p>
                    <p className="ptxt2">No Powered by 655 EGR</p>
                  </div>
                </div>
              </div>
              <div className="heroButton">
                <a href="#" className="heroBtn">
                  Repay Loan
                  {/* <div className="learnHover"></div> */}
                </a>
              </div>
            </div>

            <div className="hero-images" data-aos="zoom-in">
              <img
                src={loanData.cover_image}
                alt=""
                className="restaurantPic"
              />

              <div className="card-amount">
                <img src="/img/coin-icon.svg" alt="" className="coin" />
                <p className="amount">
                  $
                  <NumberFormat
                    thousandSeparator={true}
                    thousandsGroupStyle="usd"
                    displayType={"text"}
                    value={parseFloat(loanData.loan_amount)}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/img/last-loanDetails-Hero-Dot.svg"
          alt=""
          className="loanDetailsDot"
        />
        <img src="/img/loan-hero-img-right.svg" alt="" className="hero-right" />
      </section>
      {/* hero section end */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* loan details Section start*/}
      <section className="loanDetailsSection w-100">
        <div className="loanDetailsLine" data-aos="fade-up"></div>
        <div className="loanDetailsTitle">
          <h1 className="LTitle" data-aos="fade-up">
            Loan Details
          </h1>
        </div>
        <div className="loanDetailsArea">
          <div className="loanDetailsDays">
            <div className="loanDetailsCards" data-aos="fade-up">
              <div className="detailsCard1">
                <p className="ldTitle1">Loan Amount</p>
                <h1 className="ldAmount1">
                  $
                  <NumberFormat
                    thousandSeparator={true}
                    thousandsGroupStyle="usd"
                    displayType={"text"}
                    value={parseFloat(loanData.loan_amount)}
                  />
                </h1>
              </div>

              <div className="vl"></div>

              <div className="detailsCard2">
                <p className="ldTitle1">Loan Length</p>
                <h1 className="ldAmount2">{loanData.loan_duration} Months</h1>
              </div>
            </div>
            <div className="ldCardTexts1" data-aos="fade-up">
              Payment: <span className="payment"> At end of term</span>
            </div>
            <div className="ldCardTexts2" data-aos="fade-up">
              Disbursed date:{" "}
              <span className="payment">
                {" "}
                <Moment format="D MMM YYYY" withTitle>
                  {loanData.updatedAt}
                </Moment>
              </span>
            </div>
            <div className="ldCardTexts3" data-aos="fade-up">
              {" "}
              Funding model:
              <span className="payment"> Weekly</span>
            </div>

            <div className="ldCardTexts4" data-aos="fade-up">
              {" "}
              Partner covers currency loss?
              <span className="payment"> Yes</span>
            </div>
            <div className="ldCardTexts5" data-aos="fade-up">
              {" "}
              Facilitated by Field Partner:{" "}
              <span className="payment"> Storaji LTD.</span>
            </div>
            <div className="ldCardTexts6" data-aos="fade-up">
              {" "}
              Is borrower paying interest?
              <span className="payment"> Yes</span>
            </div>
          </div>
          <div className="loanDetailsStory">
            <h4 className="storyTitle" data-aos="fade-up">
              STORY
            </h4>
            <p className="storyTxts" data-aos="fade-up">
              {/* Mrs Eno Friday Okon who resides at the apostolic road, Umuebele 4
              has a restaurant she
              <br /> has been running for over five (5) years. She sells
              varieties of food and drinks. Due to the
              <br /> increase in the price of foodstuff and drinks as a result
              of the pandemic, she has been
              <br /> unable to meet up to her regular supply
              <br />
              <br /> and needs a loan of ₦100,000 for six (6) months to help
              improve and boost her business by buying enough foodstuffs as
              required and getting enough drinks so that she can
              <br /> meet up with the regular demands from her customers.
              <br />
              <br /> She has in the past collected loans of ₦100,000 from Lapo
              and BC respectively and paid
              <br /> back. She makes a profit of about ₦10,000 daily and has
              promised to pay back the
              <br /> borrowed funds. */}
              <div
                className="for-des"
                dangerouslySetInnerHTML={{ __html: loanData.story }}
              />
            </p>
          </div>
        </div>
        <img
          src="/img/loandetails-bg.svg"
          alt="loandetails-bg.svg"
          className="loandetailsbg"
        />
      </section>
      {/*  loan details Section end*/}
      {/* =================================================================================================================================================================================================================================================================== */}
      <section className="projectsSection w-100">
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
            showDots={false}
          >
            {/* {!isLoading ? ( */}
            {allLoansData.map((loan, i) => {
              if (loan.loan_category === getCategory) {
                // console.log(loan.loan_category);
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
            {/* // ) : null} */}
          </Carousel>
          {/* Carousel end==============================
==============================================
============================= */}
        </div>
      </section>
      {/*  Projects Section end*/}
      {/* =================================================================================================================================================================================================================================================================== */}
    </div>
  );
};

// export default LoanDetails;

const mapStateToProps = (state) => ({
  loans: state.loans,
});
export default connect(mapStateToProps, { messenger })(LoanDetails);
