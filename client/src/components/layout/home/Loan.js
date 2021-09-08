import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import NumberFormat from 'react-number-format';
import Countdown from 'react-countdown-now';

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
  Input
} from 'reactstrap';
import { acceptLoan, loanInfo, payLoan, checkAllowance, unluckToken, transactReceipt, activateLoan } from "../../../web3/index"
import Footer from '../parts/Footer';
import { parseEther, formatEther } from "@ethersproject/units";
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError
} from "@web3-react/core";
import axios from "axios";
import { API_URL as api_url } from "../../../actions/types";
import { messenger } from "../../../actions/loans";
import { faCheckCircle, faCircleNotch, faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Alert from '../Alert';

const Loan = ({ match, loans, messenger }) => {
  const [status, setStatus] = useState(<img className='upimg' src='/up.png' alt='' />);
  const [isSuccess, setIsSuccess] = useState(false);
  const onEntered = () => setStatus(<img className='upimg' src='/up.png' alt='' />);
  const [isLoading, setIsLoading] = useState(false);
  const [btnText, setBtnText] = useState("Vote");
  const [stage, setStage] = useState(0);
  const onExited = () => setStatus(<img src='/down.png' alt='' />);
  const [text, setText] = useState("");
  const [nodata, setNodata] = useState(false);
  const [up, setUp] = useState(0);
  const [down, setDown] = useState(0);
  const [loanData, setLoanData] = useState({});
  const [nextTrue, setNextTrue] = useState(false);
  const [unlockWhat, setUnlockWhat] = useState("EGR")
  // const [loanData2, setLoanData2] = useState({});
  const [loanData2, setLoanData2] = useState({
    cover_image: "",
    loan_category: "",
    loan_tile: "",
    loan_amount: "",
    id: null
  });
  const [directors, setDirectors] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [loanCompany, setLoanCompany] = useState({
    name_of_company: "",
    location: "",
    company_offset_loan: false
  });
  const [loanDetailData, setLoanDetailData] = useState({
    validated: "",
    isActiveVotingPeriod: "",
    is_approved: "",
    payable: 0

  });
  ///Start of Controlling Modal
  const [stageOne, setStageOne] = useState(0);
  const [stageTwo, setStageTwo] = useState(0);
  const [hash, setHash] = useState("");
  const [unlocking, setUnlocking] = useState(false);
  ///End of Controlling Modal
  const context = useWeb3React();
  const {
    library,
    account
  } = context;
  const [formData, setFormData] = useState({
    vote: "0",
    votePower: 0,
    repayAmount: ""
  });
  const [modal, setModal] = useState(false);

  const { vote, votePower, repayAmount } = formData;
  const doUnluck = async (e) => {
    setStageTwo(1);
    setBtnText("Unlocking...");
    setText("Transacting with blockchain, please wait...");
    setIsLoading(true);
    let ret = await unluckToken(parseEther(votePower.toString(), "wei").toString(), library.getSigner());
    if (ret.status == true) {
      localStorage.setItem('unlocking', true);
      localStorage.setItem('unlockingHash', ret.message)
      setText("Unlocking please wait aleast 1/2 minutes");

    } else {
      setStageTwo(0);
      setBtnText("Unlock");
      setIsLoading(false);
      messenger("Did not complete successfully", "danger");
    }

  }


  const openRepayLoan = async (e) => {
    setStage(0);
    setStageOne(3);
    setModal(!modal);
  }


  const Continue = async (e) => {
    setStage(0);
    setText("");
    setModal(!modal);
  }


  const repayLoan = async (e) => {
    setUnlocking(false);
    setStageOne(1);
    setIsLoading(true);
    setUnlockWhat("EUSD")
    let ckeck = await checkAllowance(account, parseEther(votePower.toString(), "wei").toString(), library.getSigner());
    if (ckeck.status == true) {



      let ret = await payLoan(loanData.loanID, parseEther(votePower.toString(), "wei").toString(), library.getSigner());

      console.log(ret);

      if (ret.status == true) {

        setIsLoading(false);
        setStageOne(2);
        setHash(ret.message);

      } else if (ret.status == false) {

        setIsLoading(false);
        setStageOne(0);
        messenger("Did not complete successfully", "danger");

      }



    } else {
      setStage(1);
      setStageTwo(0);
      setBtnText("Unlock");
      setIsLoading(false);
    }
  }
  const doVote = async (e) => {
    setBtnText("Voting...");
    setUnlocking(false);
    setStageOne(1);
    setIsLoading(true);
    let ckeck = await checkAllowance(account, parseEther(votePower.toString(), "wei").toString(), library.getSigner());

    if (ckeck.status == true) {

      let type = false;
      if (vote == "yes") {
        type = true;

      }

      let ret = await acceptLoan(loanData.loanID, type, parseEther(votePower.toString(), "wei").toString(), library.getSigner());

      console.log(ret);

      if (ret.status == true) {

        setIsLoading(false);
        setStageOne(2);
        setHash(ret.message);

      } else if (ret.status == false) {

        setIsLoading(false);
        setStageOne(0);
        messenger("Did not complete successfully", "danger");

      }



    } else {
      setStage(1);
      setStageTwo(0);
      setBtnText("Unlock");
      setIsLoading(false);
    }


  }


  const triggerModal = () => setModal(!modal);
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };


  useEffect(() => {



    axios.get(api_url + "/api/loans/get/by/id/" + match.params.id, null, config)
      .then(function (response) {
        axios.get(api_url + "/api/loans/system/info/" + response.data.data[0].loanID, null, config).then((data) => {
          let d = data.data.data;
          let theCountDown = new Date(response.data.data[0].countDown).getTime();
          let now = new Date(data.data.newdate).getTime();



          console.log(data.data);
          setLoanDetailData({
            ...loanDetailData, ['validated']: d._validate, ['isActiveVotingPeriod']: (theCountDown >= now), ['is_approved']: d._state,
            ['payable']: d._finalLoanAmount
          })


          let accepted = parseInt(response.data.data[0].accepted);
          let declined = parseInt(response.data.data[0].declined);

          if (declined == 0 && accepted > 0) {
            setUp(100);
          } else if (accepted == 0 && declined > 0) {
            setDown(100)
          } if (accepted == 0 && declined == 0) {

          } else {
            let wholeNumber = declined + accepted;
            let percent = (accepted / wholeNumber) * 100;

            if (percent !== Infinity) {
              setUp(percent);
              setDown(100 - percent);
            }

          }

          setLoanData(response.data.data[0])

          setIsFetching(false);
        })
        console.log(response.data.data[0].loanID);


      });

    localStorage.setItem('unlocking', false);

  }, [match]);

  useEffect(() => {

    // const pString = `${3444 + 1}`;
    // const pString = parseFloat(577) + 1;
    const pString = parseFloat(match.params.id) + 1;
    const mString = parseFloat(match.params.id) - 1;
    // console.log( match.params.id);
    const plusString = pString.toString();
    const minusString = mString.toString();
    // console.log(plusString);


    axios.get(api_url + "/api/loans/get/by/id/" + minusString, null, config)
      .then(function (response) {
        console.log(response.data.data);

        if (response.data.data.length && response.data.data.length) {
          console.log('not ok');

          console.log(response.data.data[0].loan_category);

          console.log(loanData2.loan_category);
          let percent = 0;
          let up = 0;
          let down = 0;
          let accepted = parseInt(loanData2.accepted);
          let declined = parseInt(loanData2.declined);


          if (declined == 0 && accepted > 0) {
            up = 100;
          } else if (accepted == 0 && declined > 0) {
            down = 100
          } if (accepted == 0 && declined == 0) {

          } else {
            let wholeNumber = declined + accepted;
            let percent = (accepted / wholeNumber) * 100;

            if (percent !== Infinity) {
              up = percent;
              down = (100 - percent);
            }

          }

          setLoanData2({
            cover_image: response.data.data[0].cover_image,
            loan_category: response.data.data[0].loan_category,
            loan_tile: response.data.data[0].loan_tile,
            loan_amount: response.data.data[0].loan_amount,
            id: response.data.data[0].id,
          });

        } else {
          setNextTrue(true);
          console.log('ok');

        }

      });
    console.log(nextTrue);

    localStorage.setItem('unlocking', false);

  }, [match]);


  const validate = async (e) => {

    setStage(0);
    setStageOne(1);
    setModal(!modal);
    let approve = await activateLoan(loanData.loanID, library.getSigner());

    if (approve.status == true) {
      setStageOne(2);
      setHash(approve.message);

    } else if (approve.status == false) {
      setModal(false);
      messenger("Did not complete successfully", "danger");
    }


  }

  setInterval(() => {

    if (localStorage.getItem('unlocking') == "true") {
      console.log("running Interval");
      transactReceipt(localStorage.getItem('unlockingHash'), library)
        .then(function (env) {
          console.log("running Interval", env);
          if (env.status == true && env.message !== null) {
            if (env.message.confirmations > 0) {
              setIsLoading(false);
              localStorage.setItem('unlocking', false);
              setStage(0);
              setStageOne(0);
            }

          }
        });

    }
  }, 7000);
  const {
    validated,
    isActiveVotingPeriod,
    is_approved,
    payable

  } = loanDetailData;
  return (
    <div>
      {loanData !== "" || isFetching == false ? (
        <div>
          {
            loanData !== "" ? (
              <div className='custom-white2' style={{ paddingTop: '100px !important' }}>
                {nodata ? <Redirect to="/" /> : null}
                <div className='my-3 container'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='mast-img'>
                        <img style={{ borderRadius: '20px' }} className='img-fluid' src={loanData.cover_image} alt='' />
                      </div>
                    </div>
                    <div className='col-md-6'>

                      <div>
                        <div className=''>

                          {!loanDetailData.validated && loanDetailData.isActiveVotingPeriod == true ? (
                            <div>
                              <h2 className='text-green d-inline'>Time left</h2>
                              <div className='text-green font-weight-bold d-inline'>
                                <Countdown
                                  date={loanData.countDown} />
                              </div>
                            </div>
                          ) : null}


                        </div>
                        <div className='text-left'>

                          <h3 className=' text-black font-weight-bold'>{loanData.loan_tile}</h3>
                        </div>
                        <div className='mt-1'>
                          <div className='d-flex justify-content-between'>
                            <div>
                              <span className='font-weight-bold'>Yes</span>
                            </div>
                            <div className='ttx-lm font-weight-bold'>{up}%</div>
                          </div>
                        </div>
                        <div className='percent-con2 mt-1' >
                          <div className='percent-count' style={{ width: up + "%" }}></div>
                        </div>
                        <div className='mt-1'>
                          <div className='d-flex justify-content-between'>
                            <div>
                              <span className='font-weight-bold'>No</span>
                            </div>
                            <div className='ttx-lm font-weight-bold'>{down}%</div>
                          </div>
                        </div>
                        <div className='percent-con2 mt-1'>
                          <div className='percent-count w-0' style={{ width: down + "%" }}></div>
                        </div>
                        <div className='mt-2'>
                          <h6 className='mb-1 text-black'>No Powered By: {parseFloat(loanData.declined)} EGR</h6>
                          <h6 className='text-black'>Yes Powered by {parseFloat(loanData.accepted)} EGR</h6>
                        </div>
                        {!loanDetailData.validated && loanDetailData.isActiveVotingPeriod == true ? (
                          <div className='mt-2'>
                            <div className='row'>
                              <div className='col-md-5'>
                                <div className='form-group'>
                                  <select class='form-control' id="vote" name="vote" value={vote} onChange={e => onChange(e)}>
                                    <option value="0">Select vote type</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                  </select>
                                </div>
                              </div>
                              <div className='col-md-7'>
                                <button
                                  style={{ borderRadius: '8px' }}
                                  disabled={vote == "0"}
                                  className='btn connect-btn btn-block'
                                  onClick={triggerModal}
                                >
                                  Vote Now
                        </button>
                              </div>
                            </div>
                          </div>
                        ) : [
                            !loanDetailData.validated && loanDetailData.isActiveVotingPeriod == false ? (
                              <div>
                                <div className=''>
                                  <button
                                    style={{ borderRadius: '8px' }}
                                    className='btn connect-btn btn-block'
                                    onClick={e => validate(e)}
                                  >
                                    Validate
                        </button>
                                </div>
                              </div>
                            )
                              : [loanDetailData.validated && loanDetailData.is_approved == true ? (
                                <div>
                                  <div className=''>
                                    <button
                                      style={{ borderRadius: '8px' }}
                                      className='btn connect-btn btn-block'
                                      onClick={e => openRepayLoan(e)}
                                    >
                                      Repay Loan
                    </button>
                                  </div>
                                </div>
                              ) : null]]}

                      </div>
                    </div>
                  </div>
                </div>
               
                <div className='custom-border-top'>
                  <div className='container'>
                    <div className='mb-5 mt-2'>
                      <div className='row'>

                        <div className='col-md-8'>
                          <h2 className='text-black font-weight-bold mb-3'>Loan Details</h2>
                          <div className='row'>
                            <div className='col-md-6'>
                              <h6 className='text-black mb-0'>Loan Amount:</h6>
                              <h3><NumberFormat thousandSeparator={true} thousandsGroupStyle="usd" displayType={'text'} value={parseFloat(loanData.loan_amount)} /> <small>EUSD</small></h3>
                            </div>
                            <div className='col-md-6'>
                              <h6 className='text-black mb-0'>Loan Length:</h6>
                              <h3>{loanData.loan_duration} Months</h3>
                            </div>
                          </div>
                          <div className='card border-0' >
                            <div className='for-dark mt-3'>

                              <div className='mb-3'>
                                <a className='text-black' href=''>
                                  <FontAwesomeIcon icon={faChevronRight} /> Payment Schedule:
                            </a>{' '}
                                <strong>At end of term</strong>
                              </div>
                              <div className='mb-3'>
                                <a className='text-black' href=''>
                                  <FontAwesomeIcon icon={faChevronRight} /> Disbursed date:
                            </a>{' '}
                                <strong><Moment format="D MMM YYYY" withTitle>{loanData.updatedAt}</Moment></strong>
                              </div>
                              {/* <div className='mb-3'>
                            <a className='text-black' href=''>
                              <FontAwesomeIcon icon={faChevronRight} /> Funding model:
                            </a>{' '}
                          <strong>{loanData.payment_model}</strong>
                          </div> */}
                              <div className='mb-3'>
                                <a className='text-black' href=''>
                                  <FontAwesomeIcon icon={faChevronRight} /> Partner covers currency loss?
                            </a>{' '}
                                <strong>Yes</strong>
                                {/* <strong>{loanData.loan_payable ? "Yes": "No"}</strong> */}
                              </div>
                              {/* <div className='mb-3'>
                            <a className='text-black' href=''>
                              <FontAwesomeIcon icon={faChevronRight} /> Facilitated by Field Partner:
                            </a>{' '}
                          <strong>{loanCompany.name_of_company}</strong>
                          </div> */}
                              <div className='mb-3'>
                                <a className='text-black' href=''>
                                  <FontAwesomeIcon icon={faChevronRight} /> Is borrower paying interest?
                            </a>{' '}
                                <strong>Yes</strong>
                                {/* <strong>{loanData.loan_fees ? "Yes": "No"}</strong> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-4 d-md-block d-none'>

                          {nextTrue ? (
                            <div>

                            </div>
                          ) : (
                              <div className="rws">

                                <div className='loanWrapper'>
                                  <div className="loanTop" style={{
                                    backgroundImage: `url(${loanData2.cover_image})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    height: "200px"
                                  }}>
                                    <span className="loanCategories text-uppercase">{loanData2.loan_category}</span>
                                  </div>

                                  <div className="loanBottom">
                                    <div className=' loanHeadings ttx-1 lineClip lineClip-2'>
                                      {loanData2.loan_tile}
                                    </div>
                                    <div className='mt-2'>
                                      <div className='d-flex justify-content-between'>
                                        <p className="loanPtitle lH mb-1">Loan Amount</p>
                                        <h2 className="loanSubHeadings lH mb-1">
                                          <NumberFormat value={parseFloat(loanData2.loan_amount)} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                                        </h2>
                                      </div>
                                      <div className='d-flex justify-content-between'>
                                        <p className="loanPtitle lH mb-1">Interest</p>
                                        <h2 className="loanSubHeadings lH mb-1">24% APY</h2>
                                      </div>
                                      <div className='d-flex justify-content-between'>
                                        <p className="loanPtitle lH mb-1">Insurance </p>
                                        <h2 className="loanSubHeadings lH"><img className="img-fluid MUTUALBENEFITS" width='160' src="/svg/MUTUALBENEFITS.svg" /></h2>
                                      </div>
                                    </div>
                                  </div>
                                  <div className=''>
                                    <a href={"/loan/details/" + loanData2.id} className="btn connect-btn btn-block bottom-radius">
                                      Learn More <FontAwesomeIcon icon={faArrowRight} />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            )}




                        </div>
                        <div className='col-md-12'>
                          <h2 className='text-black font-weight-bold my-3'>Story</h2>
                          <div className='for-des' dangerouslySetInnerHTML={{ __html: loanData.story }} />
                        </div>
                      </div>

                    </div>
                    
                  </div>
                </div>
                <div>
                  
                  <Modal isOpen={modal} toggle={triggerModal}>
                    <ModalHeader toggle={triggerModal}> {stage == 0 ? "Confirmation" : "Unlock wallet"}</ModalHeader>
                    {stage == 0 ? (
                      <div>
                        <ModalBody>
                          <Alert />
                          {stageOne == 3 ? (
                            <div>


                              <small>
                                You are owing <strong>{formatEther(payable)}</strong>
                              </small>
                              <div className=''>
                                <div className='transact-stat'>
                                  <div className='w-100 p-2'>
                                    <Label className='vote-label' for='exampleEmail'>
                                      Enter amount
              </Label>
                                    <div className="row">

                                      <div className="col-md-8">
                                        <FormGroup>

                                          <Input
                                            type='text'
                                            name=''
                                            id="votePower" name="votePower" value={votePower} onChange={e => onChange(e)}
                                            placeholder='0.0 EUSD'
                                          />
                                        </FormGroup>
                                      </div>

                                      <div className="col-md-4">
                                        <button className='btn btn-success btn-block text-uppercase' disabled={parseFloat(repayAmount) == 0 || parseFloat(repayAmount) < 0} onClick={e => repayLoan(e)}>
                                          {isLoading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : null}{" "}
                                          Repay Now
                    </button>
                                      </div>
                                    </div>


                                  </div>


                                </div>
                              </div>
                              <br />
                            </div>
                          ) : null}

                          {stageOne == 0 ? (
                            <div>


                              <small>
                                You will get back the voting power to your wallet address when the voting ends.
      </small>
                              <div className=''>
                                <div className='transact-stat'>
                                  <div className='w-100 p-2'>
                                    <Label className='vote-label' for='exampleEmail'>
                                      Enter Voting Power
              </Label>
                                    <div className="row">

                                      <div className="col-md-8">
                                        <FormGroup>

                                          <Input
                                            type='text'
                                            name=''
                                            id="votePower" name="votePower" value={votePower} onChange={e => onChange(e)}
                                            placeholder='0.0 EGR'
                                          />
                                        </FormGroup>
                                      </div>

                                      <div className="col-md-4">
                                        <button className='btn btn-success btn-block text-uppercase' disabled={votePower == 0 || votePower < 0} onClick={e => doVote(e)}>
                                          {isLoading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : null}{" "}
                                          {vote}
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
                              <p className="text-center">Transacting with blockchain, please wait...</p>

                            </div>
                          ) : null}

                          {stageOne == 2 ? (
                            <div>
                              <div className="col-md-12 mt-4">
                                <h1 className="text-center text-success">
                                  <FontAwesomeIcon icon={faCheckCircle} /> <br />
                                  Success
                </h1>
                                <p className="text-center">Transaction was successful.
                <br />
                                  <a
                                    className="btn btn-link text-success"
                                    href={"https://bscscan.com/tx/" + hash}
                                    target="_blank"
                                  >
                                    View on bscscan.com
            </a>

                                  <br />
                                  <button className="btn btn-success" onClick={e => Continue(e)}>Continue</button>
                                </p>

                              </div>
                            </div>
                          ) : null}

                        </ModalBody>

                      </div>
                    ) : [(stage == 1 ? (

                      <div>
                        <ModalBody>
                          <Alert />
                          {stageTwo == 0 ? (
                            <div>


                              <small>
                                Approve <b>Egoras</b> to spend  {unlockWhat} on your behalf.
      </small>
                              <div className=''>
                                <div className='transact-stat'>
                                  <div className='w-100 p-2'>
                                    <Label className='vote-label' for='exampleEmail'>
                                      Amount
              </Label>
                                    <div className="row">

                                      <div className="col-md-8">
                                        <FormGroup>

                                          <Input
                                            type='text'
                                            name=''
                                            id="votePower" name="votePower" value={votePower} onChange={e => onChange(e)}
                                            placeholder='0.0 EGR'
                                          />
                                        </FormGroup>
                                      </div>

                                      <div className="col-md-4">
                                        <button className='btn btn-success btn-block text-uppercase' disabled={votePower == 0 || votePower < 0} onClick={e => doUnluck(e)}>
                                          {isLoading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : null}{" "}
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



                    ) :
                      null
                    )]}
                  </Modal>
                </div>
                <Footer />
              </div>
            ) : (
                <h1 style={{ marginTop: "20%" }} className="text-center">No Data
                
</h1>
              )}
        </div>
      ) : (
          <h1 style={{ marginTop: "20%" }} className="text-center">
            <FontAwesomeIcon icon={faCircleNotch} spin /><br />
            <small>Loading</small>
          </h1>
        )}
    </div>
  );
};


const mapStateToProps = state => ({

  loans: state.loans,


});
export default connect(mapStateToProps, { messenger })(Loan);


