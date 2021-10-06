import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
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
const Createloan2 = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [formData, setFormData] = useState({
    loan_title: "",
    cover_image: [],
    loan_duration: "",
    // loan_category: "0",
    branch_name: "",
    loan_fees: "0",

    story: "",
    loan_amount: "",
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

  const [value, setValue] = React.useState(0);
  const [loan_category, SetLoan_category] = React.useState("");

  const handleChange = (event) => {
    SetLoan_category(event.target.value);
  };
  const handleChange1 = (event, newValue) => {
    console.log(newValue);

    setValue(newValue);
  };

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

  const submitLoan = async (e) => {
    e.preventDefault();

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
          </div>
          <br />
          <div className="col-md-12 margin">
            <h5>Loan Title</h5>
            <TextField
              id="outlined-basic"
              label="Loan title"
              variant="outlined"
              name="loan_title"
              value={loan_title}
              onChange={(e) => onChange(e)}
            />
          </div>
          <br />
          <div className="col-md-12 margin">
            <h5>Loan Amount</h5>
            <TextField
              id="outlined-basic"
              label="Loan amount"
              variant="outlined"
              type="number"
              name="loan_amount"
              value={loan_amount}
              onChange={(e) => onChange(e)}
            />
          </div>
          <br />
          <div className="col-md-12 margin">
            <h5>Branch Name</h5>
            <TextField
              id="outlined-basic"
              label="Branch name"
              variant="outlined"
              name="branch_name"
              value={branch_name}
              onChange={(e) => onChange(e)}
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
              <InputLabel id="demo-simple-select-label">
                Select Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={loan_category}
                label="Select Category"
                onChange={handleChange}
              >
                <MenuItem value="Agriculture">Agriculture</MenuItem>
                <MenuItem value="Women">Women</MenuItem>
                <MenuItem value="Retail">Retail</MenuItem>
                <MenuItem value="Single Parent">Single Parent</MenuItem>
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
              type="number"
              name="loan_duration"
              value={loan_duration}
              onChange={(e) => onChange(e)}
            />
          </div>
          <br />
          <div className="col-md-12 margin">
            <Button
              variant="contained"
              disabled={!isStageOneIsValid}
              onClick={(e) => setValue(1)}
              className="submit-button"
            >
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

export default connect(null, { image })(Createloan2);
