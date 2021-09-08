
import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import NumberFormat from 'react-number-format';
import Countdown from 'react-countdown-now';
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError
} from "@web3-react/core";
import { makeRequest, voteRequest, initiateRequest, checkAllowance, unluckToken, transactReceipt, getSystemConfig}  from "../../../web3/index";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledCollapse,
  CardBody,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { messenger  } from "../../../actions/loans";
import { faCheckCircle, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Alert from '../Alert';
import { parseEther, formatEther } from "@ethersproject/units";
import { fetchRequests } from "../../../actions/loans";
import Footer from '../parts/Footer';
 const Request = ({req, fetchRequests}) => {
  const [activeTab, setActiveTab] = useState('1');
  const [requestType, setRequestType] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  const [text, setText] = useState("");
  const [btnText, setBtnText] = useState("Vote");
  const [stage, setStage] = useState(2);
  const [modal, setModal] = useState(false);
  ///Start of Controlling Modal
  const [stageOne, setStageOne] = useState(0);
  const [stageTwo, setStageTwo] = useState(0);
  const [hash, setHash] = useState("");
  const [unlocking, setUnlocking] = useState(false);
  const [systemInfo, setSystemInfo] = useState({power: 0});
  ///End of Controlling Modal
  const context = useWeb3React();
  const {
  library,
  account
  } = context;

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  const [formData, setFormData] = useState({
    reason: "",
    amount: 0,
    type: 0,
    isEgr: false,
    votePower: 0,
    requestID: 0,
    vote: "None",
    
  });
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
       
  };

  

  const [requestData, setRequestsData] = useState([]);
  useEffect(() => {
    if (req.length == 0 && typeof req.data == "undefined") {
        fetchRequests(5000);
    }

    if (typeof req.data !== "undefined" && req.data.length > 0) {
      setRequestsData(req.data);
    }
  }, [req]);
  const  Continue = async (e) => {
    setStage(2);
   setStageOne(0);
    
    setModal(!modal);
  }


  const {reason, amount, type, isEgr, votePower, requestID, vote} = formData;

  const validate = async (e) => {
    setStage(0);
    setStageOne(1);
    setModal(!modal);
    let  approve = await initiateRequest(requestID, library.getSigner());
     console.log(approve);
    if(approve.status == true){
      setStageOne(2);
      setHash(approve.message);
     
    }else if(approve.status == false){
      setModal(false);
      messenger("Did not complete successfully", "danger");
    }

    
  }
  const triggerModal = () => setModal(!modal);
  let isFormValid =
  reason.length > 0 &&
  amount > 0;

  if(requestType == 2){
    isFormValid =
  reason.length > 0 &&
  amount > 0 && 
  isEgr !== "0";

  }
  const isValid = isFormValid == false || isLoading == true;

  const openVote = (e) => {
    setStage(0);
    setStageOne(0);
    console.log(requestData[e.currentTarget.id]);
    setFormData({ ...formData, ['requestID']:requestData[e.currentTarget.id].requestID,  ['type']:requestData[e.currentTarget.id].requestType, ['votePower']: 0, ['Vote']: "None"});
    
    setModal(true);
    
  }
  const changeType = (e) => {
    e.preventDefault();
    console.log();
    switch (e.currentTarget.id) {
      case "interest":
        setRequestType(0);
        setFormData({ ...formData, ['type']: 0 });
        break;
        case "power":
          setRequestType(1);
          setFormData({ ...formData, ['type']: 1 });
        break;
        case "withdraw":
          setRequestType(2);
          setFormData({ ...formData, ['type']: 2 });
        break;
    
      default:
        break;
    }
  }
 
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
  const makeARequest = async (e) =>{
    localStorage.setItem('isRequesting', true);
    
    setIsRequesting(true);
    setStage(1);
    setStageTwo(1);
    setBtnText("Checking allowance...");
    setText("Transacting with blockchain, please wait...");
    setIsLoading(true);
    let  ckeck = await checkAllowance(account, parseEther(power.toString(), "wei").toString(), library.getSigner());
    //(requestType,value, reason, withdrawEGR);
    if(ckeck.status == true){
      //reason, amount, type, isEgr, votePower, requestID, vote

      let isWithdrawEGR = false;
      let changeValue = 0;
      if(type == 0){
        changeValue = parseFloat(amount) * 100;
      }else{
        changeValue = parseEther(amount.toString(), "wei").toString()
      }

      if(isEgr == "yes"){
        isWithdrawEGR = true;
      }
       
      let ret = await makeRequest(type, changeValue, reason, isWithdrawEGR, library.getSigner());
       
        
      if(ret.status == true){
        localStorage.setItem('isRequesting', false);
        setIsRequesting(false);
        setStage(0);
         setIsLoading(false);
         setStageOne(2);
         setHash(ret.message);
        
       }else if(ret.status == false){
         setIsLoading(false);
         setStage(2);
         
         messenger("Did not complete successfully", "danger");
       }
    }else{
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
    let  ckeck = await checkAllowance(account, parseEther(votePower.toString(), "wei").toString(), library.getSigner());

    if(ckeck.status == true){
      
      let type2 = false;
      if(vote == "yes"){
        type2 = true;
           
      }
      
         let ret = await voteRequest(type, requestID, parseEther(votePower.toString(), "wei").toString(), type2, library.getSigner());
       
        
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
            if(localStorage.getItem('isRequesting') == "true"){
              setStage(2);
              localStorage.setItem('isRequesting', false);
            }else{
              setStage(0);
             setStageOne(0);
            }
            
           }
           
         }
      });
         
      }
  }, 7000);
  useEffect(() => {
    localStorage.setItem('isRequesting', false);
    if (library) {
      getSystemConfig(library.getSigner())
      .then((data) =>{
        if(data.status == true){
          setSystemInfo({...systemInfo, power: parseFloat(formatEther(data.requestpower)).toPrecision(4)});
          setFormData({ ...formData, ['votePower']: parseFloat(formatEther(data.requestpower)) });
        }
       
      })
    }
}, [library]);

const {power} = systemInfo;
    return (
      <div className='mt-6'>
        <div className="container mt-4">
          
       
            
            <h4 className="text-right"><button className="btn btn-success btn-sm" onClick={triggerModal}>Create Request</button></h4>
            
          <div className="my-3 p-3 bg-white rounded shadow-sm">
    <h6 className="border-bottom border-gray pb-2 mb-0">Recent Request</h6>
    {requestData.map((request, i) =>{
              let percent = 0;
              let up = 0;
              let down = 0;
             let accepted = parseInt(request.accepted);
             let declined = parseInt(request.declined);

             if(declined == 0 && accepted > 0){
              up = 100;
            }else if(accepted == 0 && declined > 0){
              down = 100
            }if(accepted == 0 && declined == 0){

            }else{
              let wholeNumber = declined +  accepted;
              let percent = ( accepted/wholeNumber) * 100;
              
              if(percent !== Infinity){
                up = percent;
                down = (100 - percent);
              }
              
            }

           return ( 

            <div className="media text-muted pt-3">
        
       <p className="media-body pb-3 mb-0  lh-125 border-bottom border-gray">
           <strong className="d-block text-gray-dark">{request.requestType == 0 ? ('Change interest rate to: '+ parseFloat(request.changeTo) / 100) + "%": [
             request.requestType == 1 ? ('Change request power to: ' + parseFloat(request.changeTo) + ' EGR')  : 'Withdraw: ' + parseFloat(request.changeTo) + ' EGR'
           ]}</strong>
        {request.reason}
        <div>
                            <div>
                           
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>
                                      Yes
                                    </span>
                                  </div>
                                  <div className='ttx-lm'>{up}%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count' style={{width: up+"%"}}></div>
                              </div>
                            </div>
                            <div>
                              <div className='mt-3'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <span className='font-weight-bold'>No</span>
                                  </div>
                                  <div className='ttx-lm'>{down}%</div>
                                </div>
                              </div>
                              <div className='percent-con'>
                                <div className='percent-count w-0' style={{width: down+"%"}} ></div>
                              </div>
                            </div>
                          </div>
       
      
      
      {request.validated && request.isApproved == false ? (
                        <span class="badge badge-danger" style={{float: "right"}}>Declined</span>
                      ) : null}
                      
                      {!request.validated && request.isActiveVotingPeriod == true ? (
                        <span class="badge badge-info" style={{float: "right"}}>Awaiting Approval</span>
                      ) : null}

                            {!request.validated && request.isActiveVotingPeriod == false ? (
                        <span class="badge badge-warning" style={{float: "right"}}>Pending</span>
                      ) : null}

                      {request.validated && request.isApproved == true ? (
                        <span class="badge badge-success" style={{float: "right"}}>Approved</span>
                      ) : null}

{!request.validated && request.isActiveVotingPeriod == false ? ( 
                <div>
                  <div className='mt-2'>
                <div className='row'>
                  
                  <div className='col-md-7' style={{paddingLeft: "0"}}>
                    <button
                    id={i}
                   
                      className='btn btn-success'
                     
                      onClick={e => openVote(e)}
                    >
                      Vote Now
                    </button>
                  </div>
                </div>
              </div>
                </div>
              ) :   [
                !request.validated && request.isActiveVotingPeriod == true ? (
                  <div>
                      <div className=''>
                    <button
                      id={request.requestID}
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
      </p>
      
    </div>
           );
          })}
    
   
    
    <small className="d-block text-right mt-3">
      <a href="#">All updates</a>
    </small>
  </div>
        </div>

<Modal isOpen={modal} toggle={triggerModal}>
<ModalHeader toggle={triggerModal}> {stage == 0 ? "Confirmation" : [stage == 1 ? "Unlock wallet": "Make a request"]}</ModalHeader>
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
    <div className='form-group'>
                      <select class='form-control' id="vote" name="vote" value={vote} onChange={e => onChange(e)}>
                        <option value="None">Select vote type</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
          </div>

          <div className="col-md-4">
          <button className='btn btn-success btn-block text-uppercase' disabled={votePower == 0 || votePower < 0 || vote == "None" || vote == "0"}   onClick={e => doVote(e)}>
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
[stage == 2 ? (
<div>
<ModalBody>
<div className="createRequestWrapper">
 
            <br></br>
          <div className="" >
            <a className={requestType == 0 ? "active" : null} id="interest" href="#interest" onClick={e => changeType(e)}>Interest </a>
            <a  className={requestType == 1 ? "active" : null} id="power" href="#power" onClick={e => changeType(e)}>Power</a>
            <a  className={requestType == 2 ? "active" : null} id="withdraw" href="#withdraw" onClick={e => changeType(e)}>Withdraw</a>
            </div>

            <form className="mt-4">
  {power > 0 ? (
    <p className="alert alert-success">You need <b>{power} EGR</b> to be able to make a request</p>
  ) : null}
 
  
  <div className="form-row">
      {requestType == 2 ? (
 <div className="form-group col-md-4">
 <label htmlFor="inputState">Choose Token</label>
 <select id="isEgr" className="form-control" name="isEgr"
                      value={isEgr}
                      onChange={(e) => onChange(e)}>
  <option selected defaultValue value="0">Choose...</option>
   <option value="yes">EGR</option>
   <option value="no">EUSD</option>
 
 </select>
</div>
      ) : null}
   
    <div className={requestType == 2 ? "form-group col-md-8 " : "form-group col-md-12 "}>
    <label htmlFor="amount">{requestType == 0 ? (<span>Enter Interest rate <small><b>3.8 (%)</b></small></span>) : [requestType == 1 ? (<span>Enter power amount</span>) : (<span>Enter amount</span>)]}</label>
      <input type="text" className="form-control" id="amount"  name="amount"
                      value={amount}
                      onChange={(e) => onChange(e)} />
    </div>
  </div>
  <div className="form-row">
  <div class="col-md-12">
    <label htmlFor="reason">Reason </label>
    <textarea  name="reason"
                      value={reason}
                      onChange={(e) => onChange(e)}
                      className="form-control" id="reason" placeholder="Enter the reason" required></textarea>
 
  </div>
  </div>
  <br></br>
  <button type="button" disabled={isValid} onClick={(e) => makeARequest(e)} class="btn btn-success">Create Request</button>
</form>
<br></br>
          </div>
           
</ModalBody>
</div>

) : null]
     )] }  
    </Modal>
    <Footer />
  </div>
 
   
    
    )
}


const mapStateToProps = (state) => ({
  req: state.requests,
});

export default connect(mapStateToProps, {
  fetchRequests,
})(Request);