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
import {voteInCompany, checkAllowance, unluckToken, transactReceipt, approveCompany}  from "../../../web3/index"
import Footer from '../parts/Footer';
import { parseEther } from "@ethersproject/units";
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError
} from "@web3-react/core";

import { messenger  } from "../../../actions/loans";
import { faCheckCircle, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Alert from '../Alert';

const Details = ({match, companies,messenger }) => {
  const [status, setStatus] = useState(<img src='/up.png' alt='' />);
  const [isSuccess, setIsSuccess] = useState(false);
  const onEntered = () => setStatus(<img src='/up.png' alt='' />);
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
   setStageOne(0);
    
    setModal(!modal);
  }
  const validate = async (e) => {
    setStage(0);
    setStageOne(1);
    setModal(!modal);
    let  approve = await approveCompany(loanCompany.address, library.getSigner());
     console.log(approve);
    if(approve.status == true){
      setStageOne(2);
      setHash(approve.message);
     
    }else if(approve.status == false){
      setModal(false);
      messenger("Did not complete successfully", "danger");
    }

    
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
         let ret = await voteInCompany(loanCompany.address, type, parseEther(votePower.toString(), "wei").toString(), library.getSigner());
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
  

  useEffect(() => {

    if (typeof companies.data !== "undefined") {
     
        let index = match.params.id;
        let accepted = parseInt(companies.data[index].accepted);
        let declined = parseInt(companies.data[index].declined);

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
      

       



    
      setLoanCompany(companies.data[index]);
      setDirectors(companies.data[index].directors);
       
      
    } else {
        setNodata(true)
    }

    localStorage.setItem('unlocking', false);
    
}, []);

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
    <div className='mt-6'>
        {nodata ? <Redirect to="/companies" /> : null}
      <div className='my-3 container mt-4'>
        <div className='row mt-4'>
          <div className='col-md-6'>
            <div className='mast-img'
              style={{
                backgroundImage: `url(${loanCompany.company_logo})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                height: "200px"
              }}
            >
            
                
                     
            </div>
          </div>
          <div className='col-md-6'>
            <div>
              <div className=''>
              {!loanCompany.validated && loanCompany.isActiveVotingPeriod == false ? ( 
                <div>
               <h2 className='text-green d-inline'>Time left</h2>
               <div className='text-green font-weight-bold d-inline'>
               <Countdown
   date={loanCompany.countDown } />
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
                <h6 className='mb-1'>No Powered By: {parseFloat(loanCompany.declined)} EGR</h6>
                <h6>Yes Powered by {parseFloat(loanCompany.accepted)} EGR</h6>
              </div>
              {!loanCompany.validated && loanCompany.isActiveVotingPeriod == false ? ( 
                <div>
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
                </div>
              ) :   [
                !loanCompany.validated && loanCompany.isActiveVotingPeriod == true ? (
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
              : null]     
              }
              
            </div>
          </div>
        </div>
      </div>
      <div className='custom-border-top'>
        <div className='container my-4'>
          <div className='text-center'>
            <h3>{loanCompany.name_of_company}</h3>
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
                    <span>About</span>
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
                    <CardBody>
                    <div dangerouslySetInnerHTML={{__html: loanCompany.company_description}} />
                    
                    </CardBody>
                  </div>
                </UncontrolledCollapse>
              </div>

              {/* <div className='mb-3'>
                <Button className='btn-accord' id='toggler6'>
                  <div className='d-flex justify-content-between'>
   
                    <span> Teams ({directors.length})</span>
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
                <Button className='btn-accord' id='toggler4'>
                  <div className='d-flex justify-content-between'>
                    <span>
                     {loanCompany.name_of_company}
                    </span>
                    <span>{status}</span>
                  </div>
                </Button>
                <UncontrolledCollapse
                  toggler='#toggler4'
                  onEntered={onEntered}
                  onExited={onExited}
                  defaultOpen={true}
                >
                  <div className='card border-0'>
                    <CardBody>
                    
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
                </UncontrolledCollapse>
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
          href={"https://bscscan.com/tx/" + hash}
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
  );
};


const mapStateToProps = state => ({

    companies: state.companies,
  

});
export default connect(mapStateToProps, { messenger})(Details);


