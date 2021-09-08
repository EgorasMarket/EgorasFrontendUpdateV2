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
import {addUploader, checkAllowance}  from "../../../web3/index"
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

const AddUploader = props => {
  const [stage, setStage] = useState(1);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isLoading, setIsLoading] = useState(false);
  const [btnText, setBtnText] = useState("Save & deploy");
  const [isSuccess, setIsSuccess] = useState(false);
  const [hash, setHash] = useState("");
  const [formData, setFormData] = useState({
    address: "",
    reward_address: ""
    
    
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


  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { address, reward_address } = formData;

  const [activeTab, setActiveTab] = useState('1');

  
  






const submit = async (e) => { 
   e.preventDefault();
  setBtnText("Saving....");
  setIsLoading(true);
  // const promise = await props.loan(loan_tile, cover_image, loan_duration, loan_category, loan_fees, story, loan_amount, context.account);

     
     let ret = await addUploader(address,reward_address,
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
      

  
  
};


const isStageTwoIsValid = address.length > 9;
const isStageThreeIsValid =   address.length > 9 && !isLoading;
  return (
    <div className='mt-6'>
   
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
           
           {!isSuccess ? ( <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <Row>
                  <Col sm='12'>
                    <Card body className=''>
                      <div className='row'>
                        <div className='col-md-7'>
                   
                       <h1>Add Loan Uploader</h1>

                        

                          <FormGroup>
                            <Label className='mb-0 text-success font-weight-bold'>Enter Address:</Label>
                            <Input type='text' name="address" placeholder='Enter address...' value={address} onChange={e => onChange(e)} />
                          </FormGroup>
                          
                          <FormGroup>
                            <Label className='mb-0 text-success font-weight-bold'>Enter Reward Address:</Label>
                            <Input type='text' name="reward_address" placeholder='Enter reward address...' value={reward_address} onChange={e => onChange(e)} />
                          </FormGroup>
                      
                
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
          href={"https://bscscan.com//tx/" + hash}
          target="_blank"
        >
          View on bscscan.com
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
  loan, messenger
  })(AddUploader);

