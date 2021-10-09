import React, { Fragment, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetch } from "../../../actions/loans";
import "./exploreLoan.css";
import Section from "./exploreLoanSection1";
import Section1 from "./exploreLoanSection2";
import Section2 from "./exploreLoanSection3";
import Section3 from "./exploreLoanSection4";

const allCategories = [
  { value: "Laptops and Computers" },
  { value: "Mobile Phones" },
  { value: "Tablets" },
  { value: "Smart Watches" },
  { value: "Accessories for Mobile Phones" },
  { value: "T.V and DVD Equipments" },
  { value: "Headphones" },
  { value: "Printers and Scanners" },
  { value: "Furnitures" },
  { value: "Home Appliances" },
  { value: "Kitchen Appliances" },
  { value: "Shoes" },
  { value: "Bags" },
  { value: "Industrial Ovens" },
  { value: "Generators" },
  { value: "Salon Equipments" },
];

const Explore_loans = ({ loans, fetch }) => {
  const [selectCategory, setCategory] = React.useState("");
  const [loanData, setLoanData] = useState([]);
  const [generalData, setGeneralData] = useState([]);
  const [mainLoanData, setMainLoanData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [categoryChange, setCategoryChange] = useState(false);
  const [statusBtn, setStatus] = useState("");

  const handleCategory = (event) => {
    setCategoryChange(true);
    setCategory(event.target.value);
    console.log(event.target.value);

    const UniqueCat = loanData.filter((d) => d.category === event.target.value);
    console.log("UniqueCat", UniqueCat);
    setMainLoanData(UniqueCat);
    setGeneralData(UniqueCat);

    if (UniqueCat.length === 0) {
      setIsEmpty(true);
      console.log("empty");
    } else {
      setIsEmpty(false);
      console.log("not empty");
    }
  };

  const triggerStatus = (e) => {
    console.log(e.currentTarget.id);
    setStatus(e.currentTarget.id);

    if (categoryChange === true) {
      if (e.currentTarget.id === "Approved") {
        const uniqueStatus = generalData.filter((d) => d.is_approved === true);
        console.log("uniqueStatus", uniqueStatus);
        setMainLoanData(uniqueStatus);
        if (uniqueStatus.length === 0) {
          setIsEmpty(true);
        } else {
          setIsEmpty(false);
        }
      } else if (e.currentTarget.id === "Ongoing") {
        const uniqueStatus = generalData.filter((d) => d.isConfirmed === true);
        console.log("uniqueStatus", uniqueStatus);
        setMainLoanData(uniqueStatus);
        if (uniqueStatus.length === 0) {
          setIsEmpty(true);
        } else {
          setIsEmpty(false);
        }
      }
    } else {
      if (e.currentTarget.id === "Approved") {
        const uniqueStatus = loanData.filter((d) => d.is_approved === true);
        console.log("uniqueStatus", uniqueStatus);
        setGeneralData(uniqueStatus);
      } else if (e.currentTarget.id === "Ongoing") {
        const uniqueStatus = loanData.filter((d) => d.isConfirmed === true);
        console.log("uniqueStatus", uniqueStatus);
        setGeneralData(uniqueStatus);
      }
    }
  };

  //  const Roll =[{id:1,img:'pages8.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{ id:2,img:'pages.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{ id:3,img:'pages1.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:4,img:'pages2.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:5,img:'pages3.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:6,img:'pages4.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:7,img:'pages5.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:8,img:'pages6.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:9,img:'pages7.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:10,img:'pages8.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:11,img:'pages8.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:12,img:'pages.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:13,img:'pages1.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:13,img:'pages2.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:14,img:'pages3.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:15,img:'pages4.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:16,img:'pages5.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:17,img:'pages6.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:18,img:'pages7.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:19,img:'pages8.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:20,img:'pages8.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:21,img:'pages.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:22,img:'pages1.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:23,img:'pages2.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:24,img:'pages3.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:25,img:'pages4.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:26,img:'pages5.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:27,img:'pages6.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:28,img:'pages7.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:29,img:'pages8.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:30,img:'pages8.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:31,img:'pages.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:32,img:'pages1.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:34,img:'pages2.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:35,img:'pages3.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:36,img:'pages4.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:37,img:'pages5.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:38,img:'pages6.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:39,img:'pages7.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'}
  // ]
  useEffect(() => {
    if (loans.length == 0 && typeof loans.data == "undefined") {
      fetch(100);
    }

    if (typeof loans.data !== "undefined" && loans.data.length > 0) {
      setIsLoading(false);
      setLoanData(loans.data);
      setGeneralData(loans.data);
      console.log(loans.data);
    }
  }, [loans]);

  return (
    <div ClassName="exploreLoanSection">
      <div className="exploreLoansHeader">
        <div className="exploreLoansInsideDiv1">
          <h1 className="exploreLoansH1">Explore Loans</h1>
          <p className="exploreLoansP">FROM EGORAS MICRO-FINANCE</p>
        </div>
        <div className="exploreLoansInsideDiv2">
          <img src="neve.svg" alt=" " className="imgSrc" />
        </div>
      </div>

      <div>
        <div className="section1Sec">
          <div className="calculatorDiv">
            <div className="calculatorDivForm">
              <div>
                <select className="selectOption" onChange={handleCategory}>
                  <option>Select Category</option>
                  {allCategories.map((option) => (
                    <option key={option.value} value={option.value}>
                      {" "}
                      {option.value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* <div className="calculatorDivCal">
                            <div className="interestRangeDivL">
                                <label className="interestRange">INTEREST RANGE:</label>
                                <div className="divHab" ><div className="calDiv"><input type="number" placeholder="0" className="calNumber" max="100" /><div className="calInnerDiv"></div><input type="number" placeholder="100" className="calNumber" style={{ appearance: 'text-flied' }} /></div><label className="labPer">%</label></div>
                            </div>
                        </div> */}
          </div>

          <div className="linkDivMin">
            <div className="loansPartner">
              <label className="statusLabel">STATUS:</label>
              <div className="divButtonHolders">
                <button
                  className={
                    statusBtn === "Approved"
                      ? "calButtonLink addBackground"
                      : "calButtonLink"
                  }
                  id="Approved"
                  onClick={triggerStatus}
                >
                  Approved
                </button>
                <button
                  className={
                    statusBtn === "Ongoing"
                      ? "calButtonLink addBackground"
                      : "calButtonLink"
                  }
                  id="Ongoing"
                  onClick={triggerStatus}
                >
                  Ongoing
                </button>
                {/* <Link to="/explore_loans_page3" className="calButtonLink">Ongoing</Link>
                                <Link to="/explore_loans_page4" className="calButtonLink">Approved</Link>
                                <Link to="/explore_loans_page5" className="calButtonLink">Declined</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ margin: "auto" }} className="diff">
        <div className="row">
          {!categoryChange ? (
            !isEmpty ? (
              generalData.map((loan, i) => {
                return (
                  <Fragment>
                    <div className="col-md-3">
                      <Link to={`loan-details/${loan.id}`}>
                        <div className="exploreLoanSection2" key={i}>
                          <div
                            className="DivIMG"
                            style={{
                              backgroundImage: `url(${loan.cover_image})`,
                            }}
                          ></div>

                          <p className="retailButton">{loan.category}</p>
                          <div className="pTag">
                            $
                            <NumberFormat
                              thousandSeparator={true}
                              thousandsGroupStyle="usd"
                              displayType={"text"}
                              value={parseFloat(loan.loan_amount)}
                            />
                          </div>
                          <div className="forIdentity">{loan.title}</div>
                          <div>
                            <span className="interestSpan">
                              {loan.interest}
                            </span>{" "}
                            <span className="percentageSpan">
                              {loan.interest2}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </Fragment>
                );
              })
            ) : (
              <div className="col-md-6 mx-auto text-center">Is Empty</div>
            )
          ) : !isEmpty ? (
            mainLoanData.map((loan, i) => {
              return (
                <Fragment>
                  <div className="col-md-3">
                    <Link to={`loan-details/${loan.id}`}>
                      <div className="exploreLoanSection2" key={i}>
                        <div
                          className="DivIMG"
                          style={{
                            backgroundImage: `url(${loan.cover_image})`,
                          }}
                        ></div>

                        <p className="retailButton">{loan.category}</p>
                        <div className="pTag">
                          $
                          <NumberFormat
                            thousandSeparator={true}
                            thousandsGroupStyle="usd"
                            displayType={"text"}
                            value={parseFloat(loan.loan_amount)}
                          />
                        </div>
                        <div className="forIdentity">{loan.title}</div>
                        <div>
                          <span className="interestSpan">{loan.interest}</span>{" "}
                          <span className="percentageSpan">
                            {loan.interest2}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Fragment>
              );
            })
          ) : (
            <div className="container">
              <div className="col-md-6 mx-auto text-center">
                <div className="col-md-12">
                  <img
                    src="/img/sorry-image.svg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
                <div
                  className="col-md-12"
                  style={{ fontSize: "26px", fontWeight: "700", width: "100%" }}
                >
                  Oops No data found.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <Section/> */}
      {/* <Section1 /> */}
      <Section2 />
      <Section3 />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loans: state.loans,
});

// export default Explore_loans;
export default connect(mapStateToProps, {
  fetch,
})(Explore_loans);
