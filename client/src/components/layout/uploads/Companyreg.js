import React, { useState } from 'react';
import { connect } from "react-redux";
import { FormGroup, Label, Input, FormText } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Alert from '../../layout/Alert';
import { faPlus, faCircleNotch, faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import {registerCompany} from "../../../web3/index"
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
  Col
} from 'reactstrap';
import classnames from 'classnames';
import { image, add  } from "../../../actions/loans";
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError
} from "@web3-react/core";
import { convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
const Companyreg = props => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [btnDirectorText, setBtnDirectorText] = useState("Add Director");
  const [btnText, setBtnText] = useState("Save & Deploy");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [stage, setStage] = useState(1);
  const [isAddingDirector, setIsAddingDirector] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCompanyLogo, setIsCompanyLogo] = useState(false);
  
  const [activeTab, setActiveTab] = useState('1');
  const onAddDirector  = async (e) =>{
    setIsAddingDirector(true);
    setBtnDirectorText("Adding...");
    let res =  await props.image(picture_of_director);
    setBtnDirectorText("Add Director");
    setIsAddingDirector(false);
    if (res) {
    console.log(res);
      let data = board_of_directors;
      let d = {
        position_of_director,
        name_of_director,
        picture_of_director: res.data.image
      }
      data.push(d);
    
      setFormData({...formData, ["board_of_directors"]: data});
    //   setDirectors({
    //     position_of_director: "",
    //   name_of_director: "",
    //   picture_of_director: "",
    // })
    document.getElementById('director_output').removeAttribute('src');
    }else{

    }
    console.log(res);
  }

  const onDeleteDirector = e =>{
    let data = board_of_directors;
    
    const index = data.indexOf(e.currentTarget.id);
  
    data.splice(index, data.length);
    setFormData({...formData, ["board_of_directors"]: data})
    console.log(data);
    
  }
  const toggle = tab => {
   // console.log(tab);
    //if (activeTab !== tab) setActiveTab(tab);
  };
  const [formData, setFormData] = useState({
    cac: "",
    name_of_company: "",
    share_capital: "",
    location: "",
    company_offset_loan: "0",
    board_of_directors: [{
      position_of_director: "Thief",
      name_of_director: "Goodness Ebri",
      picture_of_director: "https://i.imgur.com/Ew8vr4R.jpg"
    }],
    company_logo: "",
    company_description: ""
  });

  const [directors, setDirectors] = useState({
    position_of_director: "",
    name_of_director: "",
    picture_of_director: "",
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
          if(isStageOneIsValid){
            if (activeTab !== "3") setActiveTab("3");
            
            setStage(stage + 1);
          }
          break;
  
    
    
      default:
        break;
    }
    
  };

  const {cac, name_of_company, share_capital, location, company_offset_loan, board_of_directors, company_logo, company_description } = formData;
  const {position_of_director, name_of_director, picture_of_director} = directors;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onDirectorChange = e => setDirectors({ ...directors, [e.target.name]: e.target.value });
  const onFileChange = e => {
    var image;
    e.preventDefault();
    if (e.target.files.length == 0) {
        setFormData({ ...formData, cac: "" });
        document.getElementById('output').removeAttribute('src');
    } else {
        image = document.getElementById('output');
        var objectUrl = URL.createObjectURL(e.target.files[0]);
        
        image.src  = objectUrl;
        var fileReader = new FileReader();
        fileReader.onload = function (fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; // <--- data: base64
           
            setFormData({ ...formData, cac: srcData });

        }
        fileReader.readAsDataURL(e.target.files[0]);
    }


    
}

const onLogoFileChange = e => {
  var image;
  e.preventDefault();
  if (e.target.files.length == 0) {
      setFormData({ ...formData, company_logo: "" });
      document.getElementById('com-logo').removeAttribute('src');
  } else {
      image = document.getElementById('com-logo');
      var objectUrl = URL.createObjectURL(e.target.files[0]);
      
      image.src  = objectUrl;
      var fileReader = new FileReader();
      fileReader.onload = function (fileLoadedEvent) {
          var srcData = fileLoadedEvent.target.result; // <--- data: base64
         
          setFormData({ ...formData, company_logo: srcData });

      }
      fileReader.readAsDataURL(e.target.files[0]);
  }


  
}


const onDirectorFileChange = e => {
  var image;
  e.preventDefault();
  if (e.target.files.length == 0) {
    setDirectors({ ...directors, ["picture_of_director"]: "" });
      document.getElementById('director_output').removeAttribute('src');
  } else {
      image = document.getElementById('director_output');
      var objectUrl = URL.createObjectURL(e.target.files[0]);
      
      image.src  = objectUrl;
      var fileReader = new FileReader();
      fileReader.onload = function (fileLoadedEvent) {
          var srcData = fileLoadedEvent.target.result; // <--- data: base64
         
          setDirectors({ ...directors, ["picture_of_director"]: srcData });

      }
      fileReader.readAsDataURL(e.target.files[0]);
  }


  
}

const backStage = (e) => {
  e.preventDefault();
  switch (stage) {
    case 2:
      if(isStageOneIsValid){
        if (activeTab !== "1") setActiveTab("1");
        
        setStage(stage - 1);
      }
      break;
  
    

    default:
      break;
  }
 
  return false;
};
const isStageTwoIsValid = board_of_directors.length > 0;
const isStageOneIsValid =  true;
    // name_of_company.length > 0 &&
    // cac.length > 0 &&
    // location.length > 0 &&
    // share_capital.length > 0 &&
    // context.account.length > 0 &&
    // company_offset_loan !== "0" &&
    // company_description.length > 9; 



const isAddDirectorValid =
name_of_director.length > 0 &&
picture_of_director.length > 0 &&
position_of_director.length > 0;

const isValid = isAddDirectorValid == false || isAddingDirector == true;
const isFormFieldsValid = board_of_directors.length > 0 &&
name_of_company.length > 0 &&
cac.length > 0 &&
location.length > 0 &&
share_capital.length > 0 &&
context.account.length > 0 &&
company_logo.length > 0 &&
company_offset_loan !== "0";
const isFormValid = isFormFieldsValid == false || isLoading == true;
const onSubmit =  async (e)  => {
  e.preventDefault();
  setIsLoading(true);
  setBtnText("Adding...");
  const rs = await props.add(cac, name_of_company, share_capital, location, company_offset_loan, board_of_directors, context.account, company_description, company_logo);
 
 if(rs.status == true){
  

  
  let res = await registerCompany(name_of_company, library.getSigner());
  setIsLoading(false);
  setBtnText("Save & Deploy");
  if (res.status == true) {
    setIsSuccess(true);
    setFormData({
      cac: "",
        last_name: "",
        name_of_company: "",
        share_capital: "",
        location: "",
        company_offset_loan: "",
        board_of_directors: "",
        company_description:""
    });
  }else{
    setIsLoading(false);
  setBtnText("Save & Deploy");
  }
 }else{
  setIsLoading(false);
  setBtnText("Save & Deploy");
 }
 
}
const onEditorStateChange = (editorState) =>{
  let text = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  
  setFormData({ ...formData, company_description: text });
  setEditorState(editorState);
}
  return (
    <div className='mt-6'>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <div className='text-center mb-4'>
              <h2>Company Application</h2>
            </div>

            <div className='col-md-10 offset-md-1'>
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
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => {
                    toggle('3');
                  }}
                >
                  Step 3
                </NavLink>
              </NavItem>
            </Nav>
           {!isSuccess ? ( <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <Row>
                  <Col sm='12'>
                    <Card body className=''>
                    
                        
                     
                        <div className='row'>
                        <div className='col-md-12'>
                <FormGroup>
                  <Label className='mb-0'>CAC Document:</Label>
                  <Input type='file' name='cover_image' id='cover_image'  onChange={e => onFileChange(e)} />
                            <div className="col-md-3">
                            <img id="output" className="img-fluid mt-4" />
                            </div>
                            
                
                </FormGroup>
                </div>
              <div className='col-md-6'>
              
                <FormGroup>
                  <Label className='mb-0'>Name of Company:</Label>

                  <Input type='text' placeholder='Company Name' id="name_of_company" name="name_of_company" value={name_of_company} onChange={e => onChange(e)} />
                </FormGroup>
                <FormGroup>
                  <Label className='mb-0'>Share Capital:</Label>
                  {/* <FormText color='muted'>
                    How many days will you be running your campaign for? you can
                    run your campaign for any number of days, with a 60 days
                    duration maximum.
                  </FormText> */}
                  <Input type='text' placeholder='Share Capital' id="share_capital" name="share_capital" value={share_capital} onChange={e => onChange(e)} />
                </FormGroup>
              </div>
              <div className='col-md-6'>
             
                <FormGroup>
                  <Label className='mb-0'>Location:</Label>
                  <Input type='text' placeholder='Location' id="location" name="location" value={location} onChange={e => onChange(e)} />
                </FormGroup>
                <FormGroup>
                  <Label className='mb-0'>
                    Will the company offset the loan if defaulted?
                  </Label>
                  {/* <FormText color='muted'>
                    How many days will you be running your campaign for? you can
                    run your campaign for any number of days, with a 60 days
                    duration maximum.
                  </FormText> */}
                  <select class='form-control' id="company_offset_loan" name="company_offset_loan" value={company_offset_loan} onChange={e => onChange(e)}>
                    <option value="0">Choose...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </FormGroup>
              </div>
              <div className='col-md-12'>
                          <FormGroup>
                            <h2>Company Description</h2>
                            <p>
                            <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        className="editor"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
                            </p>
     
                         
                          </FormGroup>
                          </div>
            </div>
            <button className='btn btn-success' disabled={!isStageOneIsValid} onClick={e => changeStage(e)}>Save & Continue</button>      
                       
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId='2'>
                <Row>
                  <Col sm='12'>
                    <Card body>
                      <div className='row'>
                      
                        <div className='col-md-6'>
              
              <FormGroup>
                <Label className='mb-0'>Name of Director:</Label>
                {/* <FormText color='muted'>
                 Enter the legal name of the director
                </FormText> */}
                <Input type='text' placeholder='Name of the director' id="name_of_director" name="name_of_director" value={name_of_director} onChange={e => onDirectorChange(e)} />
              </FormGroup>
              
            </div>

            <div className='col-md-6'>
              
            <FormGroup>
                <Label className='mb-0'>Position of Director:</Label>
                {/* <FormText color='muted'>
                 Enter the position the director
                </FormText> */}
                <Input type='text' placeholder='Position of the director' id="position_of_director" name="position_of_director" value={position_of_director} onChange={e => onDirectorChange(e)} />
              </FormGroup>
            
            </div>
            <div className='col-md-12'>
                        <FormGroup>
                  <Label className='mb-0'>Picture of Director:</Label>
                  {/* <FormText color='muted'>
                 Enter the 200x200 image of the director
                </FormText> */}
                <Input type='file' name='director_picture' id='director_picture'  onChange={e => onDirectorFileChange(e)} />
                            <div className="col-md-3">
                            <img id="director_output" className="img-fluid mt-4" />

                            </div>
                </FormGroup>
                <button onClick={e => onAddDirector(e)} className=" btn btn-info btn-sm text-right" disabled={isValid}>{isAddingDirector ? (<FontAwesomeIcon icon={faCircleNotch} spin />) : null} {btnDirectorText}</button>


<hr />
<div className="row">   
{board_of_directors.map((director, i) => (
  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
  <div className="our-team">
    <div className="picture">
      <img className="img-fluid" src={director.picture_of_director} />
    </div>
    <div className="team-content">
      <h3 className="name">{director.name_of_director}</h3>
<h4 className="title">{director.position_of_director}</h4>
    </div>
    <ul class="social">
       <button className="btn btn-danger btn-sm" id={i} onClick={e => onDeleteDirector(e)}><FontAwesomeIcon icon={faTimes} /> Remove</button>
  </ul>
  </div>
</div>
))}
</div> 
   
<button className="btn btn-warning btn-sm"  onClick={e => backStage(e)}>
Back
</button>
{" "}

<button className='btn btn-success' disabled={!isStageTwoIsValid} onClick={e => changeStage(e)}>Save & Continue</button>      


    </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
             
              <TabPane tabId='3'>
                <Row>
                  <Col sm='12'>
                    <Card body className=''>
                      <div className='row'>
                        <div className='col-md-7'>
                       
                     {
                       isCompanyLogo ? (
                        <div></div>
                       ) : (
<FormGroup>
                        <Label className='mb-0'>Add Company Logo:</Label>
                        {/* <FormText color='muted'>
                       Enter the 200x200 image of the logo
                      </FormText> */}
                      <Input type='file' name='' id=''  onChange={e => onLogoFileChange(e)} />
                                  <div className="col-md-3">
                                  <img id="com-logo" className="img-fluid mt-4" />
      
                                  </div>
                      </FormGroup>
                       )
                     }
                         
                        

                         
                         
                     <Alert />     
<button className="btn btn-warning btn-sm"  onClick={e => backStage(e)}>
Back
</button>
{" "}

<button onClick={e => onSubmit(e)} className=" btn btn-success btn-sm text-right" disabled={isFormValid}>{isLoading ? (<FontAwesomeIcon icon={faCircleNotch} spin />) : null} {btnText}</button>

                      
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
                  <a href="/"  className="btn btn-success">Continue</a>
                  </p>
                  
              </div>
            
            )}
          </div>


            

            
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(null, {
  image, add, registerCompany
})(Companyreg);

