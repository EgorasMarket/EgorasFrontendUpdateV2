import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from 'draftjs-to-html';
import { Editor } from "react-draft-wysiwyg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import "../../../css/createloan.css";
import { FormGroup } from "@mui/material";
import { creatLoan}  from "../../../web3/index"
import { parseEther } from "@ethersproject/units";
import { image, add } from "../../../actions/loans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCircleNotch, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError
} from "@web3-react/core";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Input = styled("input")({
  display: "none",
});

const AssetCategories = [
  { value: 'Laptops and Computers' },
  { value: 'Mobile Phones' },
  { value: 'Tablets' },
  { value: 'Smart Watches' },
  { value: 'Accessories for Mobile Phones' },
  { value: "T.V and DVD Equipments" },
  { value: 'Headphones' },
  { value: 'Printers and Scanners' },
  { value: 'Furnitures' },
  { value: 'Home Appliances' },
  { value: 'Kitchen Appliances' },
  { value: 'Shoes' },
  { value: 'Bags' },
  { value: 'Industrial Ovens' },
  { value: 'Generators' },
  { value: 'Salon Equipments' },


];

// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
const Createloan2 = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [btnText, setBtnText] = useState("Save & deploy");
  const [btnTextUpload, setBtnTextUpload] = useState("Upload");
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [hash, setHash] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [cover_image, SetCover_image] = React.useState("");
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
  const [formData, setFormData] = useState({
    loan_title: "",
    // cover_image: "",
    asset_img: "",
    asset_img2: "",
    asset_img3: "",
    asset_img4: "",
    loan_duration: "",
    inventory_fee: "",
    branch_name: "",
    loan_fees: "0",
    isLoan: true,
    story: "",
    loan_amount: "",


  });

  const onEditorStateChange = (editorState) => {
    let text = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    setFormData({ ...formData, story: text });
    setEditorState(editorState);
  }

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { loan_title, asset_img, asset_img2, asset_img3, asset_img4, loan_duration, inventory_fee, branch_name, loan_fees, story, loan_amount } = formData;

  const [value, setValue] = React.useState(0);
  const [loan_category, SetLoan_category] = React.useState("");

  const handleChange = (event, ) => {
    SetLoan_category(event.target.value);
  };
  const handleChange1 = (event, newValue) => {
   

    setValue(newValue);
  };

  const onFileChange = e => {
    var image;
    e.preventDefault();

    if (e.currentTarget.id === "asset_img") {
      if (e.target.files.length == 0) {
        setFormData({ ...formData, asset_img: "" });
        // document.getElementById('output').removeAttribute('src');
      } else {
        // image = document.getElementById('output');
        var objectUrl = URL.createObjectURL(e.target.files[0]);

        // console.log(e.target.files);

        // image.src = objectUrl;
        var fileReader = new FileReader();
        fileReader.onload = function (fileLoadedEvent) {
          var srcData = fileLoadedEvent.target.result; // <--- data: base64
          // console.log(fileLoadedEvent.target);
          // console.log(srcData);

          setFormData({ ...formData, asset_img: srcData });

        }
        fileReader.readAsDataURL(e.target.files[0]);
      }
    } else if (e.currentTarget.id === "asset_img2") {
      if (e.target.files.length == 0) {
        setFormData({ ...formData, asset_img2: "" });
        // document.getElementById('output').removeAttribute('src');
      } else {
        // image = document.getElementById('output');
        var objectUrl2 = URL.createObjectURL(e.target.files[0]);

        // console.log(e.target.files);

        // image.src = objectUrl;
        var fileReader2 = new FileReader();
        fileReader2.onload = function (fileLoadedEvent) {
          var srcData2 = fileLoadedEvent.target.result; // <--- data: base64
          // console.log(fileLoadedEvent.target);
          // console.log(srcData);

          setFormData({ ...formData, asset_img2: srcData2 });

        }
        fileReader2.readAsDataURL(e.target.files[0]);
      }
    } else if (e.currentTarget.id === "asset_img3") {
      if (e.target.files.length == 0) {
        setFormData({ ...formData, asset_img3: "" });
        // document.getElementById('output').removeAttribute('src');
      } else {
        // image = document.getElementById('output');
        var objectUrl3 = URL.createObjectURL(e.target.files[0]);

        // console.log(e.target.files);

        // image.src = objectUrl;
        var fileReader3 = new FileReader();
        fileReader3.onload = function (fileLoadedEvent) {
          var srcData3 = fileLoadedEvent.target.result; // <--- data: base64
          // console.log(fileLoadedEvent.target);
          // console.log(srcData);

          setFormData({ ...formData, asset_img3: srcData3 });

        }
        fileReader3.readAsDataURL(e.target.files[0]);
      }
    } else if (e.currentTarget.id === "asset_img4") {
      if (e.target.files.length == 0) {
        setFormData({ ...formData, asset_img4: "" });
        // document.getElementById('output').removeAttribute('src');
      } else {
        // image = document.getElementById('output');
        var objectUrl4 = URL.createObjectURL(e.target.files[0]);

        // console.log(e.target.files);

        // image.src = objectUrl;
        var fileReader4 = new FileReader();
        fileReader4.onload = function (fileLoadedEvent) {
          var srcData4 = fileLoadedEvent.target.result; // <--- data: base64
          // console.log(fileLoadedEvent.target);
          // console.log(srcData);

          setFormData({ ...formData, asset_img4: srcData4 });

        }
        fileReader4.readAsDataURL(e.target.files[0]);
      }
    }


  }

  const submitLoan = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // console.log(loan_title, asset_img, loan_duration, branch_name, loan_fees, story, loan_amount);

    const body = JSON.stringify({ loan_category, branch_name, loan_duration, story, arrayImg: imgObj.join(), inventory_fee })

   
    let lDuration = parseInt(loan_duration);
    let date = new Date();
    var newDate = date.setMonth(date.getMonth()+lDuration);

    let ret = await creatLoan( 
      loan_title, 
    parseEther(loan_amount.toString(), "wei").toString(),  
    Math.round(newDate / 1000), 
    parseEther(inventory_fee.toString(), "wei").toString(),
    imgObj[0],
    formData.isLoan,
    body,
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

  }

  const [arrayImg, setArrayImg] = useState({
    imgObj: []
  });

  const { imgObj } = arrayImg;

  
  const onDelete = e => {
    let data = imgObj;

    const index = e.currentTarget.id;

    data.splice(index, data.length);
    setArrayImg({...arrayImg, ['imgObj']: data})

  }

  const uploadImg = async (imgId) => {
    setBtnTextUpload("Saving...")
    setIsUploading(true);
   
    let data = imgObj;
    
      let res = await props.image(asset_img);
      setBtnTextUpload("Upload")
      setIsUploading(false);
      if(typeof res.data.image !== undefined){
        let imgData = res.data.image;

        SetCover_image(imgData)
  
        let d = {
          imgData
        }
  
        data.push(imgData);
        
        setArrayImg({...arrayImg, ['imgObj']: data})
      }
      

      
    
   

  }


  const isStageOneIsValid = loan_title.length > 0 && asset_img.length > 0 && branch_name.length > 0 && parseInt(loan_duration) > 0 && loan_category !== "";



  return (
    <Fragment>
       {!isSuccess ? (

<section className="createLoanSection" style={{ padding: "12em 4em" }}>
<Tabs
  value={value}
  // onChange={handleChange1}
  aria-label="basic tabs example"
>
  <Tab label="Step 1" {...a11yProps(0)} />
  <Tab label="Step 2" {...a11yProps(1)} />
</Tabs>
<TabPanel value={value} index={0} className="col-md-9">
  <div className="formBody row">
    <div className="col-md-12 margin">
      <h2>Upload Photo</h2>
      <p className="upload-para">
        Upload a square image that represents your
        <br /> campaign, 640 x 640 recommended resolution
      </p>
      <div className='row'>
        <div className='col-md-6'>
          <input
            type="file"
            name='asset_img'
            id='asset_img'
            onChange={e => onFileChange(e)}
            className="btn btn-sm uploadButton"

          />
          <Button variant="contained"
            onClick={e => uploadImg(1)}
            className="submit-button mt-3 getLoan">
           
            {isUploading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : null}{" "}
                          {btnTextUpload}
          </Button>

        </div>
     
     
       
      </div>
<div className="row">
{
imgObj.map((image, i) => (
  
  <div className="image-wrapper">
    <div className="image" style={{backgroundImage: `url(${image})` }}>

    </div>
    <button id={i} onClick={e => onDelete(e)}>X</button>
  </div>
  

))
}
</div>
    </div>
    <br />
    <div className="col-md-12 margin">
      <h5>Loan Title</h5>
      <TextField
        id="outlined-basic"
        label="Loan title"
        variant="outlined"
        name="loan_title" value={loan_title} onChange={e => onChange(e)}
      />
    </div>
    <br />
    <div className="col-md-12 margin">
      <h5>Loan Amount</h5>
      <TextField
        id="outlined-basic"
        label="Loan amount"
        variant="outlined"
        type='number'
        name="loan_amount" value={loan_amount} onChange={e => onChange(e)}
      />
    </div>
    <br />
    <div className="col-md-12 margin">
      <h5>Inventory Fee</h5>
      <TextField
        id="outlined-basic"
        label="Inventory Fee"
        variant="outlined"
        type='number'
        name="inventory_fee" value={inventory_fee} onChange={e => onChange(e)}
      />
    </div>
    <br />
    <div className="col-md-12 margin">
      <h5>Branch Name</h5>
      <TextField
        id="outlined-basic"
        label="Branch name"
        variant="outlined"
        name="branch_name" value={branch_name} onChange={e => onChange(e)}
      />
    </div>
    <br />
    {/* =================================== */}
    {/* =================================== */}
    {/* =================================== */}
    {/* =================================== */}
    <div className="col-md-12 margin">
      {/* text title */}
      <h5>Loan Category</h5>
      {/* <InputLabel id="demo-simple-select-label">loan category</InputLabel> */}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={loan_category}
          label="Select Category"
          onChange={handleChange}
        >
          {AssetCategories.map((option) => (

            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

    {/* =================================== */}
    {/* =================================== */}
    {/* =================================== */}
    {/* =================================== */}
    <br />
    <div className="col-md-12 margin">
      <h5>Loan Duration</h5>
      <TextField
        // id="outlined-basic"
        label="Loan duration"
        variant="outlined"
        id="loan_duration"
        type='number'
        name="loan_duration" value={loan_duration} onChange={e => onChange(e)}
      />
    </div>
    <br />
    <div className="col-md-12 margin">
      <Button variant="contained"
        disabled={!isStageOneIsValid}
        onClick={e => setValue(1)}
        className="submit-button">
        Save & Continue
      </Button>
    </div>
  </div>
</TabPanel>
{/* ======================== */}
{/* ======================== */}
{/* ======================== */}
<TabPanel value={value} index={1} className="col-md-8">
  <div className="formBody row">
    <div className="col-md-12 margin">
      <h2>Collateral details</h2>
      <p></p>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
    <div className="col-md-12 margin">
      <Button onClick={e => setValue(0)} variant="contained" className="submit-button">
        Go back
      </Button>
      <Button variant="contained" onClick={submitLoan} className="submit-button">
        
        {isLoading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : null}{" "}
                          {btnText}
      </Button>
    </div>
    {/* <Alert /> */}
  </div>
</TabPanel>
<img src="/img/blur-drop.png" alt="..." className="blur-background" />
</section>
       ) : (
          <div className="col-md-12 mt-4" style={{marginTop: "150px"}}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
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
            <a href="/createloan"  className="btn btn-success">Continue</a>
            </p>
            
        </div>
       )}
    </Fragment>
   
  );
}

// export default Createloan2;

export default connect(null, { image })(Createloan2);
