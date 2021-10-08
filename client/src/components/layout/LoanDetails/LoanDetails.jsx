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
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
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
  const [btnText, setBtnText] = useState("Back it");
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
  const [percentage, setPercentage] = useState(0);
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
  const [coin, setCoin] = useState("");
  const [stageTwo, setStageTwo] = useState(0);
  const [hash, setHash] = useState("");
  const [unlocking, setUnlocking] = useState(false);
  const [modal, setModal] = useState(false);
  ///End of Controlling Modal
  const context = useWeb3React();
  const { library, account } = context;
  const [formData, setFormData] = useState({
    vote: "0",
    votePower: 0,
    repayAmount: "",
  });
  const triggerModal = () => setModal(!modal);
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { vote, votePower, repayAmount } = formData;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const doUnluck = async (e) => {
    setStageTwo(1);
    setBtnText("Unlocking...");
    setText("Transacting with blockchain, please wait...");
    setIsLoading(true);
    let ret = await unluckToken(
      parseEther(votePower.toString(), "wei").toString(),
      library.getSigner(),
      coin
    );
    if (ret.status == true) {
      localStorage.setItem("unlocking", true);
      localStorage.setItem("unlockingHash", ret.message);
      setText("Unlocking please wait aleast 1/2 minutes");
    } else {
      setStageTwo(0);
      setBtnText("Unlock");
      setIsLoading(false);
      messenger("Did not complete successfully", "danger");
    }
  };

  const openRepayLoan = async (e) => {
    setStage(0);
    setStageOne(3);
    setCoin("eusd");
    setModal(!modal);
  };

  const Continue = async (e) => {
    setStage(0);
    setText("");
    setModal(!modal);
  };

  const repayLoan = async (e) => {
    setCoin("eusd");
    setUnlocking(false);
    setStageOne(1);
    setIsLoading(true);
    setUnlockWhat("EUSD");
    let ckeck = await checkAllowance(
      account,
      parseEther(votePower.toString(), "wei").toString(),
      library.getSigner(),
      coin
    );
    if (ckeck.status == true) {
      let ret = await payLoan(
        loanData.loanID,
        parseEther(votePower.toString(), "wei").toString(),
        library.getSigner()
      );

      console.log(ret);

      if (ret.status == true) {
        setIsLoading(false);
        setStageOne(2);
        setHash(ret.message);
      } else if (ret.status == false) {
        setIsLoading(false);
        setStageOne(0);
        messenger(ret.message, "danger");
      }
    } else {
      setStage(1);
      setStageTwo(0);
      setBtnText("Unlock");
      setIsLoading(false);
    }
  };

  const doVote = async (e) => {
    setCoin("egr");
    setBtnText("Backing...");
    setUnlocking(false);
    setStageOne(1);
    setIsLoading(true);
    let check = await checkAllowance(
      account,
      parseEther(votePower.toString(), "wei").toString(),
      library.getSigner(),
      "egr"
    );

    if (check.status == true) {
      let type = false;
      if (vote == "yes") {
        type = true;
      }

      let ret = await acceptLoan(
        loanData.loanID,
        type,
        parseEther(votePower.toString(), "wei").toString(),
        library.getSigner()
      );

      console.log(ret);

      if (ret.status == true) {
        setIsLoading(false);
        setStageOne(2);
        setHash(ret.message);
      } else if (ret.status == false) {
        setBtnText("back it");
        setIsLoading(false);
        setStageOne(0);
        messenger(ret.message, "danger");
      }
    } else {
      setStage(1);
      setStageTwo(0);
      setBtnText("Unlock");
      setIsLoading(false);
    }
  };
  useEffect(() => {
    axios
      .get(api_url + "/api/loans/get/by/id/" + match.params.id, null, config)
      .then(function (response) {
        setLoanData(response.data.data[0]);
        let backed = response.data.data[0].backed;
        let votingThreshold = response.data.data[0].votingThreshold;
        if (response.data.data[0].is_approved) {
          setFormData({
            ...formData,
            ["votePower"]: parseFloat(response.data.data[0].loan_amount),
          });
        }
        let per = (parseFloat(backed) / parseFloat(votingThreshold)) * 100;

        setPercentage(Math.round(per));
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
  const validate = async (e) => {
    setStage(0);
    setStageOne(1);
    setModal(!modal);
    let approve = await activateLoan(loanData.loanID, library.getSigner());

    if (approve.status == true) {
      setStageOne(2);
      setHash(approve.message);
    } else if (approve.status == false) {
      messenger(approve.message, "danger");
    }
  };

  setInterval(() => {
    if (localStorage.getItem("unlocking") == "true") {
      console.log("running Interval");
      transactReceipt(localStorage.getItem("unlockingHash"), library).then(
        function (env) {
          // console.log("running Interval", env);
          if (env.status == true && env.message !== null) {
            if (env.message.confirmations > 0) {
              setIsLoading(false);
              localStorage.setItem("unlocking", false);
              if (!loanData.is_approved) {
                setStage(0);
                setStageOne(0);
                setBtnText("Back it");
              } else if (loanData.is_approved) {
                setStage(0);
                setStageOne(3);
              }
            }
          }
        }
      );
    }
  }, 7000);
  return (
    <div>
      {/* hero section start */}
      <section className="gtheroSection ">
        <div className="container">
          <div className="heroArea2">
            <div className="gtheroTxts" data-aos="fade-up">
              <h1 className="gtheroTitleloan1">
                {/* For Mrs. Eno Friday <br />
                Okon to improve her
                <br />
                <span className="restaurant">restaurant </span>
                business. */}
                {loanData.title}
              </h1>
              <div className="heroSlider">
                <div className="slider-txts1">
                  <div className="p-texts">
                    {/* <p className="ptxt1">Yes</p>
                    <p className="ptxt2">No</p> */}
                  </div>
                  <div className="h-texts">
                    <h3 className="htxt1">{percentage}%</h3>
                    {/* <h3 className="htxt2">100%</h3> */}
                  </div>
                </div>
                <div className="slider">
                  <div
                    className="sliderafter"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="slider-txts2">
                  <div className="p-texts2">
                    <p className="ptxt1">
                      Backed by {parseFloat(loanData.backed)} EGR
                    </p>
                    <p className="ptxt2">
                      Threshold: {parseFloat(loanData.votingThreshold)} EGR
                    </p>
                  </div>
                </div>
              </div>
              {!loanData.is_approved &&
              parseFloat(loanData.backed) <
                parseFloat(loanData.votingThreshold) ? (
                <div className="heroButton">
                  <a
                    href="#"
                    style={{ borderRadius: "8px" }}
                    disabled={vote == "0"}
                    className="heroBtn"
                    onClick={triggerModal}
                  >
                    Back this loan
                  </a>
                </div>
              ) : null}

              {!loanData.is_approved &&
              parseFloat(loanData.backed) >=
                parseFloat(loanData.votingThreshold) ? (
                <div className="heroButton">
                  <a
                    href="#"
                    style={{ borderRadius: "8px" }}
                    className="heroBtn"
                    onClick={(e) => validate(e)}
                  >
                    Disburse
                  </a>
                </div>
              ) : null}

              {loanData.is_approved &&
              loanData.creator == account &&
              loanData.isLoan ? (
                <div className="heroButton">
                  <a
                    href="#"
                    style={{ borderRadius: "8px" }}
                    className="heroBtn"
                    onClick={(e) => openRepayLoan(e)}
                  >
                    Repay Loan
                  </a>
                </div>
              ) : null}
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
        <div className="container">
          <div className="loanDetailsLine" data-aos="fade-up"></div>
          <div className="loanDetailsTitle">
            <h1 className="LTitle" data-aos="fade-up">
              Collateral Details
            </h1>
          </div>
          <div className="loanDetailsArea">
            <div className="loanDetailsDays">
              <div className="loanDetailsCards" data-aos="fade-up">
                <div className="detailsCard1">
                  <p className="ldTitle1">Market Value</p>
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

              {/* <div className="ldCardTexts4" data-aos="fade-up">
              {" "}
              Partner covers currency loss?
              <span className="payment"> Yes</span>
            </div> */}
              <div className="ldCardTexts5" data-aos="fade-up">
                {" "}
                Facilitated by Field Partner:{" "}
                <span className="payment">{loanData.branch_name}.</span>
              </div>
              {/* <div className="ldCardTexts6" data-aos="fade-up">
              {" "}
              Is borrower paying interest?
              <span className="payment"> Yes</span>
            </div> */}
            </div>
            <div className="loanDetailsStory">
              <h4 className="storyTitle" data-aos="fade-up">
                COLLATERAL FEATURES.
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
        </div>
      </section>
      {/*  loan details Section end*/}
      {/* =================================================================================================================================================================================================================================================================== */}
      <section className="projectsSection w-100">
        <div className="container">
          <div className="projectsArea">
            <div className="projectsLinea"></div>
            <div className="projectsTitleContentsa">
              <div className="projectTitle">
                <h1 className="gttitle">Recent collaterals</h1>
              </div>

              <a href="#" className="projectsLink">
                Explore collaterals
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
              {allLoansData.map((loan, i) => {
                // if (loan.loan_category === getCategory) {
                // console.log(loan);

                // console.log(loan.loan_category);
                let percent = 0;
                let up = 0;
                let down = 0;
                let accepted = parseInt(loan.accepted);
                let declined = parseInt(loan.declined);

                let backed = loan.backed;
                let votingThreshold = loan.votingThreshold;
                // if (loan.is_approved) {
                //   setFormData({ ...formData, ['votePower']: parseFloat(loan.loan_amount) })
                // }
                let per =
                  (parseFloat(backed) / parseFloat(votingThreshold)) * 100;

                // console.log(per);

                // setPercentage(Math.round(per));

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
                // }
                // console.log(loan);

                return (
                  // <Link to="/loan-details">{"/loan/details/" + loan.id}
                  // <Link to="/loan-details">
                  <a href={"/loan-details/" + loan.id}>
                    <div className="cardA">
                      <div className="img">
                        <div
                          className="img-sub"
                          style={{
                            backgroundImage: `url(${loan.cover_image})`,
                            height: "200px",
                            width: "100%",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            borderRadius: "8px",
                            borderBottomLeftRadius: "0px",
                            borderBottomRightRadius: "0px",
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
                      </div>

                      <div className="cardDetails">
                        <h1 className="cardHeader">{loan.title}</h1>
                        <h1 className="collat-category">Electronics</h1>
                        <div className="heroSlider2">
                          <div className="slider-txts1">
                            <div className="h-texts">
                              <h3 className="htxt1a">
                                {parseFloat(backed)} egr
                              </h3>
                              <h3 className="htxt2a">{Math.round(per)}%</h3>
                            </div>
                          </div>
                          {/* <div className="slider-a"></div> */}
                          <div className="slider" style={{ height: "7px" }}>
                            <div
                              className="sliderafter"
                              style={{
                                width: `${Math.round(per)}%`,
                                height: "7px",
                              }}
                            ></div>
                          </div>
                          <div className="slider-txts2">
                            <div className="p-texts2a">
                              <p className="ptxt2a">
                                Remaining EGR:{" "}
                                {parseFloat(votingThreshold) -
                                  parseFloat(backed)}{" "}
                                EGR
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </Carousel>
            {/* Carousel end==============================
==============================================
============================= */}
            <Modal isOpen={modal} toggle={triggerModal}>
              <ModalHeader toggle={triggerModal}>
                {" "}
                {stage == 0 ? "Confirmation" : "Unlock wallet"}
              </ModalHeader>
              {stage == 0 ? (
                <div>
                  <ModalBody>
                    <Alert />
                    {stageOne == 3 ? (
                      <div style={{ textAlign: "center" }}>
                        <small>
                          You are owing <br></br>
                          <strong>
                            <NumberFormat
                              value={parseFloat(loanData.loan_amount)}
                              className="own"
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                            EUSD
                          </strong>
                        </small>
                        <br />
                        <button
                          className="heroBtn"
                          disabled={
                            parseFloat(repayAmount) == 0 ||
                            parseFloat(repayAmount) < 0
                          }
                          onClick={(e) => repayLoan(e)}
                        >
                          {isLoading ? (
                            <FontAwesomeIcon icon={faCircleNotch} spin />
                          ) : null}{" "}
                          Repay Now
                        </button>
                        <br />
                      </div>
                    ) : null}

                    {stageOne == 0 ? (
                      <div>
                        <small>
                          You will get back the amount to your wallet address
                          when the loan is validated.
                        </small>
                        <div className="">
                          <div className="transact-stat">
                            <div className="w-100 p-2">
                              <Label className="vote-label" for="exampleEmail">
                                Enter backing amount
                              </Label>
                              <div className="row">
                                <div className="col-md-8">
                                  <FormGroup>
                                    <Input
                                      type="text"
                                      name=""
                                      id="votePower"
                                      name="votePower"
                                      value={votePower}
                                      onChange={(e) => onChange(e)}
                                      placeholder="0.0 EGR"
                                    />
                                  </FormGroup>
                                </div>

                                <div className="col-md-4">
                                  <button
                                    className="btn btn-success btn-block "
                                    disabled={votePower == 0 || votePower < 0}
                                    onClick={(e) => doVote(e)}
                                  >
                                    {isLoading ? (
                                      <FontAwesomeIcon
                                        icon={faCircleNotch}
                                        spin
                                      />
                                    ) : null}{" "}
                                    {btnText}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                      </div>
                    ) : null}
                    {stageOne == 1 ? (
                      <div>
                        <p className="text-center loadingContainer">
                          <FontAwesomeIcon icon={faCircleNotch} spin />
                        </p>
                        <p className="text-center">
                          Transacting with blockchain, please wait...
                        </p>
                      </div>
                    ) : null}

                    {stageOne == 2 ? (
                      <div>
                        <div className="col-md-12 mt-4">
                          <h1 className="text-center text-success">
                            <FontAwesomeIcon icon={faCheckCircle} /> <br />
                            Success
                          </h1>
                          <p className="text-center">
                            Transaction was successful.
                            <br />
                            <a
                              className="btn btn-link text-success"
                              href={"https://bscscan.com/tx/" + hash}
                              target="_blank"
                            >
                              View on bscscan.com
                            </a>
                            <br />
                            <button
                              className="heroBtn"
                              onClick={(e) => Continue(e)}
                            >
                              Continue
                            </button>
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </ModalBody>
                </div>
              ) : (
                [
                  stage == 1 ? (
                    <div>
                      <ModalBody>
                        <Alert />
                        {stageTwo == 0 ? (
                          <div>
                            <small>
                              Approve <b>Egoras</b> to spend {unlockWhat} on
                              your behalf.
                            </small>
                            <div className="">
                              <div className="transact-stat">
                                <div className="w-100 p-2">
                                  <Label
                                    className="vote-label"
                                    for="exampleEmail"
                                  >
                                    Amount
                                  </Label>
                                  <div className="row">
                                    <div className="col-md-8">
                                      <FormGroup>
                                        <Input
                                          type="text"
                                          name=""
                                          id="votePower"
                                          name="votePower"
                                          value={votePower}
                                          onChange={(e) => onChange(e)}
                                          placeholder="0.0 EGR"
                                        />
                                      </FormGroup>
                                    </div>

                                    <div className="col-md-4">
                                      <button
                                        className="heroBtn"
                                        style={{ padding: "0.9em 4.5em" }}
                                        disabled={
                                          votePower == 0 || votePower < 0
                                        }
                                        onClick={(e) => doUnluck(e)}
                                      >
                                        {isLoading ? (
                                          <FontAwesomeIcon
                                            icon={faCircleNotch}
                                            spin
                                          />
                                        ) : null}{" "}
                                        {btnText}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <br />
                          </div>
                        ) : null}
                        {stageTwo == 1 ? (
                          <div>
                            <p className="text-center loadingContainer">
                              <FontAwesomeIcon icon={faCircleNotch} spin />
                            </p>
                            <p className="text-center">{text}</p>
                          </div>
                        ) : null}
                      </ModalBody>
                    </div>
                  ) : null,
                ]
              )}
            </Modal>
          </div>
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
