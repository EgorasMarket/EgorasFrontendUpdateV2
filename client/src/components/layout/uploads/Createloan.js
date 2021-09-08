import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCircleNotch, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import draftToHtml from 'draftjs-to-html';
import { connect } from "react-redux";
import axios from "axios";
import { API_URL as api_url } from "../../../actions/types";
import htmlToDraft from 'html-to-draftjs';
import {registerCompany, creatLoan, checkAllowance}  from "../../../web3/index"
import { parseEther } from "@ethersproject/units";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import classnames from 'classnames';
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError
} from "@web3-react/core";
import { loan, messenger, image } from "../../../actions/loans";
import Alert from '../Alert';

const Createloan = props => {
  const [stage, setStage] = useState(1);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isLoading, setIsLoading] = useState(false);
  const [btnText, setBtnText] = useState("Save & deploy");
  const [isSuccess, setIsSuccess] = useState(false);
  const [hash, setHash] = useState("");
  const [formData, setFormData] = useState({
    loan_tile: "",
    cover_image: "",
    loan_duration: "",
    loan_category: "0",
    branch_name: "",
    loan_fees: "0",
    
    story: "",
    loan_amount: "",
    
    
  });

  const context = useWeb3React();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error
  } = context;


  // onEditorStateChange: Function = (editorState) => {
    
  // };

  const test = (e) => {
    checkAllowance(account, library.getSigner());
    
    console.log(parseEther("10", "wei").toString());
  }
  const onEditorStateChange = (editorState) =>{
    let text = draftToHtml(convertToRaw(editorState.getCurrentContent()));
   
    setFormData({ ...formData, story: text });
    setEditorState(editorState);
  }
 
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { loan_category, loan_tile, cover_image, loan_duration, branch_name, loan_fees, story, loan_amount } = formData;

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
   // console.log(tab);
    //if (activeTab !== tab) setActiveTab(tab);
  };
  
  const onFileChange = e => {
    var image;
    e.preventDefault();
    if (e.target.files.length == 0) {
        setFormData({ ...formData, cover_image: "" });
        document.getElementById('output').removeAttribute('src');
    } else {
        image = document.getElementById('output');
        var objectUrl = URL.createObjectURL(e.target.files[0]);
        
        image.src  = objectUrl;
        var fileReader = new FileReader();
        fileReader.onload = function (fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; // <--- data: base64
           
            setFormData({ ...formData, cover_image: srcData });

        }
        fileReader.readAsDataURL(e.target.files[0]);
    }


    
}

const changeStage = (e) => {
  e.preventDefault();
  switch (stage) {
    case 1:
      if(isStageOneIsValid){
        if (activeTab !== "2") setActiveTab("2");
        
        setStage(stage + 1);
      }
      break;

      case 2:
        if(isStageTwoIsValid){
          if (activeTab !== "3") setActiveTab("3");
          
          setStage(stage + 1);
        }
        break;
  
    default:
      break;
  }
  
};

const backStage = (e) => {
  e.preventDefault();
  switch (stage) {
    case 2:
      if(isStageOneIsValid){
        if (activeTab !== "1") setActiveTab("1");
        
        setStage(stage - 1);
      }
      break;
  
      case 3:
        if(isStageOneIsValid){
          if (activeTab !== "2") setActiveTab("2");
          
          setStage(stage - 1);
        }
        break;

    default:
      break;
  }
 
  return false;
};


const submit = async (e) => { 
   e.preventDefault();
  setBtnText("Saving....");
  setIsLoading(true);
  // const promise = await props.loan(loan_tile, cover_image, loan_duration, loan_category, loan_fees, story, loan_amount, context.account);
  let res =  await props.image(cover_image);
      console.log(res, "Imges");
      if ( typeof res.data.image !== 'undefined') {  
     
     let ret = await creatLoan(parseEther(loan_amount.toString(), "wei").toString(),  
     loan_tile, loan_duration, 
     res.data.image,
     loan_category,
     story,
     branch_name,
     library.getSigner());
        if(ret.status == true){
          setIsLoading(false);
          
          setHash(ret.message);
          setBtnText("Save & Deploy");
          setIsSuccess(true);
          setIsLoading(false);
        }else{
          setIsLoading(false);
          setBtnText("Save & Deploy");
          props.messenger("Did not complete successfully", "danger");
        }
     
    
          //document.getElementById('output').removeAttribute('src');
      }else{
        setBtnText("Save & Deploy");
        setIsLoading(false);
      }

  
  
};

const isStageOneIsValid =
    loan_tile.length > 0 &&
    cover_image.length > 0 && branch_name.length > 0 &&
    parseInt(loan_duration) > 0 &&
    loan_category !== "0";
const isStageTwoIsValid = story.length > 9;
const isStageThreeIsValid =   story.length > 9 && !isLoading;
  return (
    <div className='mt-6 create-loan-dark'>
   
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => {
                    toggle('1');
                  }}
                >
                  Step 1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => {
                    toggle('2');
                  }}
                >
                  Step 2
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => {
                    toggle('3');
                  }}
                >
                  Step 3
                </NavLink>
              </NavItem> */}
            </Nav>
           {!isSuccess ? ( <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <Row>
                  <Col sm='12'>
                    <Card body className=''>
                      <div className='row'>
                        <div className='col-md-7'>
                          <FormGroup>
                            <h2>Cover Photo</h2>
               
                            <p>
                              Upload a square image that represents your
                              campaign, 640 x 640 recommended resolution
                            </p>
                            <Input className='dark-input' type='file' name='cover_image' id='cover_image'  onChange={e => onFileChange(e)} />
                            <img id="output" className="img-fluid mt-4" />
                          </FormGroup>
                          <FormGroup>
                            <Label className='mb-0 text-success font-weight-bold'>Loan Title:</Label>
                            {/* <FormText color='muted'>
                              How many days will you be running your campaign
                              for? you can run your campaign for any number of
                              days, with a 60 days duration maximum.
                            </FormText> */}
                            <Input className='dark-input' type='text' name="loan_tile" placeholder='Title...' value={loan_tile} onChange={e => onChange(e)} />
                          </FormGroup>

                          <FormGroup>
                            <Label className='mb-0 text-success font-weight-bold'>Loan Amount:</Label>
                            {/* <FormText color='muted'>
                              Enter amount of Loan you want to give out
                            </FormText> */}
                            <Input className='dark-input' type='number' name="loan_amount" placeholder='Enter loan amount...' value={loan_amount} onChange={e => onChange(e)} />
                          </FormGroup>

                          <FormGroup>
                            <Label className='mb-0 text-success font-weight-bold'>Branch Name:</Label>
                            <Input className='dark-input' type='text' name="branch_name" placeholder='Enter branch name...' value={branch_name} onChange={e => onChange(e)} />
                          </FormGroup>
                          
                          <div className="form-group">
                                <label htmlFor="category" className="text-success font-weight-bold">Loan Category:</label>
                                <select class="custom-select" id="loan_category" name="loan_category" value={loan_category} onChange={e => onChange(e)}>
                                <option  value="0">Select Category</option>
                                <option  value="agriculture">Agriculture</option>
                                    <option defaultValue value="women">Women</option>
                                   
                                    <option  value="retail">Retail</option>
                                    <option  value="single parents">Single Parents</option>

                      </select>
                            </div>
                          <FormGroup>
                            <Label className='mb-0 text-success font-weight-bold'>Loan Duraton:</Label>
                            {/* <FormText color='muted'>
                              How many days will you be running your campaign
                              for? you can run your campaign for any number of
                              days, with a 60 days duration maximum.
                            </FormText> */}
                            <Input className='dark-input' type='text' placeholder='Duraton...' id="loan_duration" name="loan_duration" value={loan_duration} onChange={e => onChange(e)} />
                          </FormGroup>
                          {/* <FormGroup>
                            <Label className='mb-0 text-success font-weight-bold'>
                             Funding Model
                            </Label>
                        
                            <select class='form-control' id="payment_model" name="payment_model" value={payment_model} onChange={e => onChange(e)}>
                            <option value="0">Choose...</option>
                              <option value="weekly">Weekly</option>
                              <option value="dairy">Daily</option>
                            </select>
                          </FormGroup> */}
                          <button className='btn btn-success' disabled={!isStageOneIsValid} onClick={e => changeStage(e)}>
                            Save & Continue
                          </button>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId='2'>
                <Row>
                  <Col sm='12'>
                    <Card body>
                      <div className='row'>
                        <div className='col-md-12'>
                          <FormGroup>
                            <h2>Story</h2>
                            <p>
                          
                            </p>
                            <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
                         
                          </FormGroup>
                          <Alert />
                          <button className='btn btn-info' onClick={e => backStage(e)}>
                           Go back
                          </button> {" "}
                          <button className='btn btn-success'  disabled={!isStageThreeIsValid} onClick={e => submit(e)}>
                          {isLoading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : null}{" "}
                          {btnText}
                          </button>

                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
             
            </TabContent>) : (
               
               
              <div className="col-md-12 mt-4">
                <h1 className="text-center">
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
          View on bscscan
        </a>
        <br></br>
        <br></br>
                  <a href="/"  className="btn btn-success">Continue</a>
                  </p>
                  
              </div>
            
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(null, {
  loan, creatLoan, messenger, image 
  })(Createloan);

