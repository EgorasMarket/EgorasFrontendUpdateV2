import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { EditorState, convertToRaw } from "draft-js";
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

// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================

function Createloan2() {
  // const [formData, setFormData] = useState({
  //   loan_tile: "",
  //   cover_image: "",
  //   loan_duration: "",
  //   loan_category: "0",
  //   branch_name: "",
  //   loan_fees: "0",

  //   story: "",
  //   loan_amount: "",
  // });
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // const onEditorStateChange = (editorState) => {
  //   let text = draftToHtml(convertToRaw(editorState.getCurrentContent()));

  //   setFormData({ ...formData, story: text });
  //   setEditorState(editorState);
  // };

  const [value, setValue] = React.useState(0);
  const [age, setAge] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setAge(event.target.value);
  };
  // const handleChange1 = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <section className="createLoanSection" style={{ padding: "12em 4em" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Step 1" {...a11yProps(0)} />
        <Tab label="Step 2" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0} className="col-md-8">
        <div className="formBody row">
          <forms className="col-md-12 margin">
            <h2>Upload Photo</h2>
            <p className="upload-para">
              Upload a square image that represents your
              <br /> campaign, 640 x 640 recommended resolution
            </p>
            <input
              type="file"
              name="Image"
              id="image"
              className="uploadButton col-md-6"
            />
            <input
              type="file"
              name="Image"
              id="image"
              className="uploadButton col-md-6"
            />
            <input
              type="file"
              name="Image"
              id="image"
              className="uploadButton col-md-6"
            />
            <input
              type="file"
              name="Image"
              id="image"
              className="uploadButton col-md-6"
            />
          </forms>
          <br />
          <forms className="col-md-12 margin">
            <h5>Loan Title</h5>
            <TextField
              id="outlined-basic"
              label="Loan title"
              variant="outlined"
            />
          </forms>
          <br />
          <forms className="col-md-12 margin">
            <h5>Loan Amount</h5>
            <TextField
              id="outlined-basic"
              label="Loan amount"
              variant="outlined"
            />
          </forms>
          <br />
          <forms className="col-md-12 margin">
            <h5>Branch Name</h5>
            <TextField
              id="outlined-basic"
              label="Branch name"
              variant="outlined"
            />
          </forms>
          <br />
          {/* =================================== */}
          {/* =================================== */}
          {/* =================================== */}
          {/* =================================== */}
          <forms className="col-md-12 margin">
            {/* text title */}
            <h5>Loan Category</h5>
            {/* <InputLabel id="demo-simple-select-label">loan category</InputLabel> */}
            <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </forms>

          {/* =================================== */}
          {/* =================================== */}
          {/* =================================== */}
          {/* =================================== */}
          <br />
          <forms className="col-md-12 margin">
            <h5>Loan Duration</h5>
            <TextField
              id="outlined-basic"
              label="Loan duration"
              variant="outlined"
            />
          </forms>
          <br />
          <forms className="col-md-12 margin">
            <Button variant="contained" className="submit-button">
              Save & Continue
            </Button>
          </forms>
        </div>
      </TabPanel>
      {/* ======================== */}
      {/* ======================== */}
      {/* ======================== */}
      <TabPanel value={value} index={1} className="col-md-8">
        <div className="formBody row">
          <forms className="col-md-12 margin">
            <h2>Collateral details</h2>
            <p></p>
            <Editor
              // editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              // onEditorStateChange={onEditorStateChange}
            />
          </forms>
          <forms className="col-md-12 margin">
            <Button variant="contained" className="submit-button">
              Go back
            </Button>
            <Button variant="contained" className="submit-button">
              Save & deploy
            </Button>
          </forms>
          {/* <Alert /> */}
        </div>
      </TabPanel>
      <img src="/img/blur-drop.png" alt="..." className="blur-background" />
    </section>
  );
}

export default Createloan2;
