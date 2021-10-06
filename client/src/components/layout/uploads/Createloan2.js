import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { EditorState, convertToRaw } from "draft-js";
<<<<<<< HEAD
import draftToHtml from 'draftjs-to-html';
=======
import draftToHtml from "draftjs-to-html";
>>>>>>> cd846b6600a09ce1477e1af43c487f44f1a9c5b0
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

import { image, add } from "../../../actions/loans";

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
<<<<<<< HEAD
const Createloan2 = props => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [cover_image, SetCover_image] = React.useState("");
  const [formData, setFormData] = useState({
    loan_title: "",
    // cover_image: "",
    asset_img: "",
    asset_img2: "",
    asset_img3: "",
    asset_img4: "",
    loan_duration: "",
    inventory_fee: "",
=======
const Createloan2 = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [formData, setFormData] = useState({
    loan_title: "",
    cover_image: [],
    loan_duration: "",
    // loan_category: "0",
>>>>>>> cd846b6600a09ce1477e1af43c487f44f1a9c5b0
    branch_name: "",
    loan_fees: "0",

    story: "",
    loan_amount: "",
<<<<<<< HEAD


  });

  const onEditorStateChange = (editorState) => {
    let text = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    setFormData({ ...formData, story: text });
    setEditorState(editorState);
  }

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { loan_title, asset_img, asset_img2, asset_img3, asset_img4, loan_duration, inventory_fee, branch_name, loan_fees, story, loan_amount } = formData;
=======
  });

  const onEditorStateChange = (editorState) => {
    let text = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    setFormData({ ...formData, story: text });
    setEditorState(editorState);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const {
    loan_title,
    cover_image,
    loan_duration,
    branch_name,
    loan_fees,
    story,
    loan_amount,
  } = formData;
>>>>>>> cd846b6600a09ce1477e1af43c487f44f1a9c5b0

  const [value, setValue] = React.useState(0);
  const [loan_category, SetLoan_category] = React.useState("");

<<<<<<< HEAD
  const handleChange = (event, ) => {
=======
  const handleChange = (event) => {
>>>>>>> cd846b6600a09ce1477e1af43c487f44f1a9c5b0
    SetLoan_category(event.target.value);
  };
  const handleChange1 = (event, newValue) => {
    console.log(newValue);

    setValue(newValue);
  };

<<<<<<< HEAD
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
=======
  const onFileChange = (e) => {
    var image;
    e.preventDefault();
    if (e.target.files.length == 0) {
      setFormData({ ...formData, cover_image: "" });
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

        setFormData({ ...formData, cover_image: srcData });
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };
>>>>>>> cd846b6600a09ce1477e1af43c487f44f1a9c5b0

  const submitLoan = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
    // console.log(loan_title, asset_img, loan_duration, branch_name, loan_fees, story, loan_amount);

    const body = JSON.stringify({ loan_category, branch_name, story, arrayImg, inventory_fee })

    console.log(loan_title, loan_amount, loan_duration, cover_image, body);


  }

  const [arrayImg, setArrayImg] = useState({
    imgObj: []
  });

  const { imgObj } = arrayImg;

  const uploadImg = async (imgId) => {

    console.log(imgId);
    let data = imgObj;
    if (imgId === 1) {
      let res = await props.image(asset_img);
      console.log(res.data.image, 'qqqqqqqq');
      let imgData = res.data.image;

      SetCover_image(imgData)

      let d = {
        imgData
      }

      data.push(imgData);

      console.log(data, imgData);
    }
    if (imgId === 2) {
      let res = await props.image(asset_img2);
      console.log(res.data.image, 'qqqqqqqq');
      let imgData = res.data.image;

      let d = {
        imgData
      }

      data.push(imgData);

      console.log(data);
    }
    if (imgId === 3) {
      let res = await props.image(asset_img3);
      console.log(res.data.image, 'qqqqqqqq');
      let imgData = res.data.image;

      let d = {
        imgData
      }

      data.push(imgData);

      console.log(data);
    }
    if (imgId === 4) {
      let res = await props.image(asset_img4);
      console.log(res.data.image, 'qqqqqqqq');
      let imgData = res.data.image;

      let d = {
        imgData
      }

      data.push(imgData);

      console.log(data);
    }

  }


  const isStageOneIsValid = loan_title.length > 0 && asset_img.length > 0 && branch_name.length > 0 && parseInt(loan_duration) > 0 && loan_category !== "";


=======
    // console.log(loan_title, cover_image, loan_duration, branch_name, loan_fees, story, loan_amount);

    const body = JSON.stringify({ loan_category, branch_name, story });

    console.log(loan_title, loan_amount, loan_duration, cover_image, body);
  };

  const uploadImg = async (e) => {
    console.log(cover_image);
    let res = await props.image(cover_image);

    console.log(res, "get image link");
  };

  const isStageOneIsValid =
    loan_title.length > 0 &&
    cover_image.length > 0 &&
    branch_name.length > 0 &&
    parseInt(loan_duration) > 0 &&
    loan_category !== "";
>>>>>>> cd846b6600a09ce1477e1af43c487f44f1a9c5b0

  return (
    <section className="createLoanSection" style={{ padding: "9em 4em" }}>
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
<<<<<<< HEAD
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
                  className="submit-button mt-3">
                  Upload
                </Button>

              </div>
              <div className=' col-md-6'>
                <input
                  type="file"
                  name='asset_img2'
                  id='asset_img2'
                  onChange={e => onFileChange(e)}
                  className="btn btn-sm uploadButton"

                />
                <Button variant="contained"
                  onClick={e => uploadImg(2)}
                  className="submit-button mt-3">
                  Upload
                </Button>
              </div>
              <div className='col-md-6'>
                <input
                  type="file"
                  name='asset_img3'
                  id='asset_img3'
                  onChange={e => onFileChange(e)}
                  className="btn btn-sm uploadButton"

                />
                <Button variant="contained"
                  onClick={e => uploadImg(3)}
                  className="submit-button mt-3">
                  Upload
                </Button>
              </div>
              <div className='col-md-6'>
                <input
                  type="file"
                  name='asset_img4'
                  id='asset_img4'
                  onChange={e => onFileChange(e)}
                  className="btn btn-sm uploadButton"

                />
                <Button variant="contained"
                  onClick={e => uploadImg(4)}
                  className="submit-button mt-3">
                  Upload
                </Button>
              </div>
            </div>

=======
            <div className="row">
              <div className="col-md-6">
                <input
                  type="file"
                  name="cover_image"
                  id="cover_image"
                  onChange={(e) => onFileChange(e)}
                  className="btn btn-sm uploadButton"
                />
                <Button
                  variant="contained"
                  onClick={uploadImg}
                  className="submit-button mt-3"
                >
                  Upload
                </Button>
              </div>
              <div className=" col-md-6">
                <input
                  type="file"
                  name="cover_image2"
                  id="cover_image2"
                  onChange={(e) => onFileChange(e)}
                  className="btn btn-sm uploadButton"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="file"
                  name="cover_image3"
                  id="cover_image3"
                  onChange={(e) => onFileChange(e)}
                  className="btn btn-sm uploadButton"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="file"
                  name="cover_image4"
                  id="cover_image4"
                  onChange={(e) => onFileChange(e)}
                  className="btn btn-sm uploadButton"
                />
              </div>
            </div>
>>>>>>> cd846b6600a09ce1477e1af43c487f44f1a9c5b0
          </div>
          <br />
          <div className="col-md-12 margin">
            <h5>Loan Title</h5>
            <TextField
              id="outlined-basic"
              label="Loan title"
              variant="outlined"
<<<<<<< HEAD
              name="loan_title" value={loan_title} onChange={e => onChange(e)}
=======
              name="loan_title"
              value={loan_title}
              onChange={(e) => onChange(e)}
>>>>>>> cd846b6600a09ce1477e1af43c487f44f1a9c5b0
            />
          </div>
          <br />
          <div className="col-md-12 margin">
            <h5>Loan Amount</h5>
            <TextField
              id="outlined-basic"
              label="Loan amount"
              variant="outlined"
<<<<<<< HEAD
              type='number'
              name="loan_amount" value={loan_amount} onChange={e => onChange(e)}
=======
              type="number"
              name="loan_amount"
              value={loan_amount}
              onChange={(e) => onChange(e)}
>>>>>>> cd846b6600a09ce1477e1af43c487f44f1a9c5b0
            />
          </div>
          <br />
          <div className="col-md-12 margin">
<<<<<<< HEAD
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
=======
>>>>>>> cd846b6600a09ce1477e1af43c487f44f1a9c5b0
            <h5>Branch Name</h5>
            <TextField
              id="outlined-basic"
              label="Branch name"
              variant="outlined"
<<<<<<< HEAD
              name="branch_name" value={branch_name} onChange={e => onChange(e)}
=======
              name="branch_name"
              value={branch_name}
              onChange={(e) => onChange(e)}
>>>>>>> cd846b6600a09ce1477e1af43c487f44f1a9c5b0
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
<<<<<<< HEAD
              <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
=======
              <InputLabel id="demo-simple-select-label">
                Select Category
              </InputLabel>
>>>>>>> cd846b6600a09ce1477e1af43c487f44f1a9c5b0
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={loan_category}
                label="Select Category"
                onChange={handleChange}
              >
<<<<<<< HEAD
                {AssetCategories.map((option) => (

                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
=======
                <MenuItem value="Agriculture">Agriculture</MenuItem>
                <MenuItem value="Women">Women</MenuItem>
                <MenuItem value="Retail">Retail</MenuItem>
                <MenuItem value="Single Parent">Single Parent</MenuItem>
>>>>>>> cd846b6600a09ce1477e1af43c487f44f1a9c5b0
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
<<<<<<< HEAD
              type='number'
              name="loan_duration" value={loan_duration} onChange={e => onChange(e)}
=======
              type="number"
              name="loan_duration"
              value={loan_duration}
              onChange={(e) => onChange(e)}
>>>>>>> cd846b6600a09ce1477e1af43c487f44f1a9c5b0
            />
          </div>
          <br />
          <div className="col-md-12 margin">
<<<<<<< HEAD
            <Button variant="contained"
              disabled={!isStageOneIsValid}
              onClick={e => setValue(1)}
              className="submit-button">
=======
            <Button
              variant="contained"
              disabled={!isStageOneIsValid}
              onClick={(e) => setValue(1)}
              className="submit-button"
            >
>>>>>>> cd846b6600a09ce1477e1af43c487f44f1a9c5b0
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
<<<<<<< HEAD
            <Button onClick={e => setValue(0)} variant="contained" className="submit-button">
              Go back
            </Button>
            <Button variant="contained" onClick={submitLoan} className="submit-button">
=======
            <Button
              onClick={(e) => setValue(0)}
              variant="contained"
              className="submit-button"
            >
              Go back
            </Button>
            <Button
              variant="contained"
              onClick={submitLoan}
              className="submit-button"
            >
>>>>>>> cd846b6600a09ce1477e1af43c487f44f1a9c5b0
              Save & deploy
            </Button>
          </div>
          {/* <Alert /> */}
        </div>
      </TabPanel>
      <img src="/img/blur-drop.png" alt="..." className="blur-background" />
    </section>
  );
};

// export default Createloan2;

<<<<<<< HEAD
// export default Createloan2;

=======
>>>>>>> cd846b6600a09ce1477e1af43c487f44f1a9c5b0
export default connect(null, { image })(Createloan2);
