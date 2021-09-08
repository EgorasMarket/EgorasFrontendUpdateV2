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
import {acceptLoan, checkAllowance, unluckToken, transactReceipt, activateLoan}  from "../../../web3/index"
import Footer from '../parts/Footer';
import { parseEther } from "@ethersproject/units";
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError
} from "@web3-react/core";
import axios from "axios";
import { API_URL as api_url } from "../../../actions/types";
import { messenger  } from "../../../actions/loans";
import { faCheckCircle, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Alert from '../Alert';

const Loan = ({match, loans,messenger }) => {
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
  const [directors, setDirectors] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [loanCompany, setLoanCompany] = useState({
    name_of_company: "",
    location: "",
    company_offset_loan: false
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
    votePower: 0
  });
  const [modal, setModal] = useState(false);
  
  const { vote, votePower } = formData;
  const doUnluck = async (e) => {
    setStageTwo(1);
    setBtnText("Unlocking...");
    setText("Transacting with blockchain, please wait...");
    setIsLoading(true);
    let ret = await unluckToken(parseEther(votePower.toString(), "wei").toString(), library.getSigner());
    if(ret.status == true){
      localStorage.setItem('unlocking', true);
      localStorage.setItem('unlockingHash', ret.message)
      setText("Unlocking please wait aleast 1/2 minutes");
    
    }else{
    setStageTwo(0);
    setBtnText("Unlock");
    setIsLoading(false);
    messenger("Did not complete successfully", "danger");
    }

  }

  const  Continue = async (e) => {
    setStage(0);
    setText("");
    setModal(!modal);
  }
  


  const doVote = async (e) => {
    setBtnText("Voting...");
    setUnlocking(false);
    setStageOne(1);
    setIsLoading(true);
    let  ckeck = await checkAllowance(account, parseEther(votePower.toString(), "wei").toString(), library.getSigner());

    if(ckeck.status == true){
      
      let type = false;
      if(vote == "yes"){
        type = true;
           
      }
     
         let ret = await acceptLoan(loanData.loanID, type, parseEther(votePower.toString(), "wei").toString(), library.getSigner());
  
         console.log(ret);
        
         if(ret.status == true){
          
          
            setIsLoading(false);
            setStageOne(2);
            setHash(ret.message);
           
          }else if(ret.status == false){
            setIsLoading(false);
            setStageOne(0);
            messenger("Did not complete successfully", "danger");
          }
      
       
    
    }else{
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

    

    axios.get(api_url + "/api/loans/get/by/id/"+match.params.id, null, config)
            .then(function (response) {
              console.log(response.data.data);
           
              let accepted = parseInt(response.data.data[0].accepted);
              let declined = parseInt(response.data.data[0].declined);
      
              if(declined == 0 && accepted > 0){
                setUp(100);
              }else if(accepted == 0 && declined > 0){
                setDown(100)
              }if(accepted == 0 && declined == 0){
      
              }else{
                let wholeNumber = declined +  accepted;
                let percent = ( accepted/wholeNumber) * 100;
                
                if(percent !== Infinity){
                   setUp(percent);
                   setDown(100 - percent);
                }
               
              }
              setLoanCompany({
                company_description: response.data.data[0].companies.company_description,
                company_logo: response.data.data[0].companies.company_logo,
                name_of_company: response.data.data[0].companies.name_of_company,
                location: response.data.data[0].companies.location,
                company_offset_loan: response.data.data[0].companies.company_offset_loan,
               });
              setDirectors(response.data.data[0].companies.directors);

                setLoanData(response.data.data[0])
               
                setIsFetching(false);
            });

    localStorage.setItem('unlocking', false);

}, [match]);
const validate = async (e) => {
  setStage(0);
  setStageOne(1);
  setModal(!modal);
  let  approve = await activateLoan(loanData.loanID, library.getSigner());
   
  if(approve.status == true){
    setStageOne(2);
    setHash(approve.message);
   
  }else if(approve.status == false){
    setModal(false);
    messenger("Did not complete successfully", "danger");
  }

  
}

setInterval(() => {
 
  if(localStorage.getItem('unlocking') == "true"){
    console.log("running Interval");
    transactReceipt(localStorage.getItem('unlockingHash'), library)
      .then(function(env) {
        console.log("running Interval", env);
       if(env.status == true && env.message !== null){
         if(env.message.confirmations > 0){
          setIsLoading(false);
          localStorage.setItem('unlocking', false);
          setStage(0);
           setStageOne(0);
         }
         
       }
    });
       
    }
}, 7000);

  return (
    <div>
       {loanData !== "" || isFetching == false ? (
           <div>
           {
           loanData !== "" ? (
            <div className='mt-6 custom-white'>
            {nodata ? <Redirect to="/" /> : null}
          <div className='my-3 container'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='mast-img'>
                  <img className='img-fluid' src={loanData.cover_image} alt='' />
                </div>
              </div>
              <div className='col-md-6'>
                <div>
                              <div className=''>
                  {!loanData.validated && loanData.isActiveVotingPeriod == false ? ( 
                    <div>
                   <h2 className='text-green d-inline'>Time left</h2>
                   <div className='text-green font-weight-bold d-inline'>
                   <Countdown
       date={loanData.countDown } />
                   </div>
                   </div>
                  ): null}
                    
                 
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
                    <div className='percent-count' style={{width: up+"%"}}></div>
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
                    <div className='percent-count w-0' style={{width: down+"%"}}></div>
                  </div>
                  <div className='mt-2'>
                    <h6 className='mb-1'>No Powered By: {parseFloat(loanData.declined)} EGR</h6>
                    <h6>Yes Powered by {parseFloat(loanData.accepted)} EGR</h6>
                  </div>
                  {!loanData.validated && loanData.isActiveVotingPeriod == false ? ( 
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
                        disabled={vote == "0"}
                          className='btn btn-success btn-block'
                          onClick={triggerModal}
                        >
                          Vote Now
                        </button>
                      </div>
                    </div>
                  </div>
                   ) :   [
                    !loanData.validated && loanData.isActiveVotingPeriod == true ? (
                      <div>
                          <div className=''>
                        <button
                       
                          className='btn btn-success btn-block'
                          onClick={e => validate(e)}
                        >
                          Validate
                        </button>
                      </div>
                      </div>
                    ) 
                    : [loanData.validated && loanData.isActiveVotingPeriod == true && loanData.is_approved == true ? (
                      <div>
                      <div className=''>
                    <button
                   
                      className='btn btn-success btn-block'
                      // onClick={e => validate(e)}
                    >
                      Repay Loan
                    </button>
                  </div>
                  </div>
                    ) : null]]   }
                  
                </div>
              </div>
            </div>
          </div>
          <div className='custom-border-top'>
            <div className='container my-4'>
              <div className='text-center'>
                <h3>{loanData.loan_tile}</h3>
              </div>
            </div>
          </div>
          <div className='custom-border-top'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 reset-padding-right custom-border-right'>
                  <div className='mb-3'>
                    <Button className='btn-accord' id='toggler'>
                      <div className='d-flex justify-content-between'>
                        <span>story</span>
                        <span>{status}</span>
                      </div>
                    </Button>
                    <UncontrolledCollapse
                      toggler='#toggler'
                      onEntered={onEntered}
                      onExited={onExited}
                      defaultOpen={true}
                    >
                      <div className='card border-0'>
                        <CardBody >
                        <div className='for-des' dangerouslySetInnerHTML={{__html: loanData.story}} />
                        
                        </CardBody>
                      </div>
                    </UncontrolledCollapse>
                  </div>
    
                  {/* <div className='mb-3'>
                    <Button className='btn-accord' id='toggler6'>
                      <div className='d-flex justify-content-between'>
       
                        <span>Organization</span>
                        <span>{status}</span>
                      </div>
                    </Button>
                    <UncontrolledCollapse
                      toggler='#toggler6'
                      onEntered={onEntered}
                      onExited={onExited}
                      defaultOpen={true}
                    >
                      <div className='card border-0'>
                        <CardBody>
                        <h6>Company Name</h6>
      <strong>{loanCompany.name_of_company}</strong>
    <br></br>
    <br></br>
                          <h6>Teams ({directors.length})</h6>
                          <div className='row'>
                          {directors.map((director, i) => (
                            <div className='col-md-4'>
                            <div className='mt-2'>
                              <img
                                className='img-fluid rounded-circle mb-2'
                                src={director.picture_of_director}
                                alt=''
                              />
                              <div className=''>
                          <strong>{director.name_of_director}</strong>
                                <br />
                          <strong><small>{director.position_of_director}</small></strong>
                              </div>
                            </div>
                          </div>
                          ))}
                           
                           
                            
                          
                         
                         
                     
                   
                          </div>
                        </CardBody>
                      </div>
                    </UncontrolledCollapse>
                  </div> */}
                  {/* <div className='mb-3'>
                    <Button className='btn-accord' id='toggler7'>
                      <div className='d-flex justify-content-between'>
                        <span>Country: {loanCompany.location}</span>
                        <span>{status}</span>
                      </div>
                    </Button>
                    <UncontrolledCollapse
                      toggler='#toggler7'
                      onEntered={onEntered}
                      onExited={onExited}
                      defaultOpen={true}
                    >
                    
                    </UncontrolledCollapse>
                  </div> */}
                </div>
                <div className='col-md-6 reset-padding-left'>
                  <div className='mb-3'>
                    <Button className='btn-accord' id='toggler3'>
                      <div className='d-flex justify-content-between'>
                        <span>Loan details</span>
                        <span>{status}</span>
                      </div>
                    </Button>
                    <UncontrolledCollapse
                      toggler='#toggler3'
                      onEntered={onEntered}
                      onExited={onExited}
                      defaultOpen={true}
                    >
                      <div className='card border-0' >
                        <CardBody className='for-dark'>
                          <h3 className='mb-1'>Loan Amount:</h3>
                          <h2 className='text-success font-weight-bold'>
                          <NumberFormat thousandSeparator={true} thousandsGroupStyle="usd" displayType={'text'} value={parseFloat(loanData.loan_amount)}/> <small>NGNC</small>
                             
                          </h2>
                          <h6 className='mb-1'>Loan Length:</h6>
                          <h5 className='text-success font-weight-bold'>
                            {loanData.loan_duration} Days
                          </h5>
                          <div>
                            <a className='text-black' href=''>
                              Payment Schedule:
                            </a>{' '}
                            <strong>At end of term</strong>
                          </div>
                          <div>
                            <a className='text-black' href=''>
                              Disbursed date:
                            </a>{' '}
                          <strong><Moment format="D MMM YYYY" withTitle>{loanData.updatedAt}</Moment></strong>
                          </div>
                          <div>
                            <a className='text-black' href=''>
                              Funding model:
                            </a>{' '}
                          <strong>{loanData.payment_model}</strong>
                          </div>
                          <div>
                            <a className='text-black' href=''>
                              Partner covers currency loss?
                            </a>{' '}
                            <strong>{loanData.loan_payable ? "Yes": "No"}</strong>
                          </div>
                          <div>
                            <a className='text-black' href=''>
                              Facilitated by Field Partner:
                            </a>{' '}
                          <strong>{loanCompany.name_of_company}</strong>
                          </div>
                          <div>
                            <a className='text-black' href=''>
                              Is borrower paying interest?
                            </a>{' '}
                            <strong>{loanData.loan_fees ? "Yes": "No"}</strong>
                          </div>
                        </CardBody>
                      </div>
                    </UncontrolledCollapse>
                  </div>
                  <div className='mb-3'>
                    {/* <Button className='btn-accord' id='toggler4'>
                      <div className='d-flex justify-content-between'>
                        <span>
                         {loanCompany.name_of_company}
                        </span>
                        <span>{status}</span>
                      </div>
                    </Button> */}
                    {/* <UncontrolledCollapse
                      toggler='#toggler4'
                      onEntered={onEntered}
                      onExited={onExited}
                      defaultOpen={true}
                    >
                      <div className='card border-0'>
                        <CardBody>
                          <img className='img-fluid' src={loanCompany.company_logo} alt='' />
                          <div dangerouslySetInnerHTML={{__html: loanCompany.company_description}} />
                         
                          <div>
                            <a className='text-black' href=''>
                              Time on egoras:
                            </a>{' '}
                            <strong><Moment toNow >
                    {loanCompany.createdAt}
                </Moment> </strong>
                          </div>
                          <div>
                            <a className='text-black' href=''>
                              {loanCompany.name_of_company} borrowers:
                            </a>{' '}
                            <strong>0</strong>
                          </div>
                          <div>
                            <a className='text-black' href=''>
                              Total loans:
                            </a>{' '}
                            <strong>$0.00</strong>
                          </div>
                       
                        </CardBody>
                      </div>
                    </UncontrolledCollapse> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* <Button color='danger' onClick={toggle}>
              {buttonLabel}
            </Button> */}
             <Modal isOpen={modal} toggle={triggerModal}>
        <ModalHeader toggle={triggerModal}> {stage == 0 ? "Confirmation" : "Unlock wallet"}</ModalHeader>
              {stage == 0 ? (
                <div>
              <ModalBody>
              <Alert />
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
                  <button className='btn btn-success btn-block text-uppercase' disabled={votePower == 0 || votePower < 0}  onClick={e => doVote(e)}>
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
              href={"https://etherscan.io/tx/" + hash}
              target="_blank"
            >
              View on etherscan
            </a>
               
                <br />
                <button  className="btn btn-success" onClick={e => Continue(e)}>Continue</button>
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
      Approve <b>Egoras</b> to spend EGR on your behalf.
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
                  <button className='btn btn-success btn-block text-uppercase' disabled={votePower == 0 || votePower < 0}  onClick={e => doUnluck(e)}>
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
             )] }  
            </Modal>
          </div>
          <Footer />
        </div>
           ) : (
<h1 style={{marginTop: "20%"}} className="text-center">No Data

</h1>
           ) }
             </div>
       ) : (
        <h1 style={{marginTop: "20%"}} className="text-center">
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
export default connect(mapStateToProps, { messenger})(Loan);


