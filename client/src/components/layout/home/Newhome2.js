import React, { useState, useEffect } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import PrintIcon from "@mui/icons-material/Print";
import KitchenIcon from "@mui/icons-material/Kitchen";

import "../../../css/getloan.css";
import "../../../css/getloanmobile.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const GetLoan = () => {
  const [page, setPage] = useState("change");
  const [categoryBtn, setCategoryBtn] = useState("Popular");
  // const [categoryList, setCategoryList] = useState("PopularCategories");

  // change  category buttons
  const triggerPopular = () => {
    setCategoryBtn("Popular");
    let popularCat = document.getElementById("popular-categories");
    let allCat = document.getElementById("all-categories");
    popularCat.style.display = "table-row-group";
    allCat.style.display = "none";
 
  };
  // change  category buttons
  const triggerAll = () => {
    setCategoryBtn("All");
        let popularCat = document.getElementById("popular-categories");
        let allCat = document.getElementById("all-categories");
        popularCat.style.display = "none";
        allCat.style.display = "table-row-group";
  };

  const clickMe1 = () => {
    if (page === "change") {
      setPage("change");
    } else {
      setPage("change");
    }
  };
  const clickMe2 = () => {
    if (page === "notChange") {
      setPage("notChange");
    } else {
      setPage("notChange");
    }
  };

  return (
    <div>
      {/* hero section start */}
      <section className="gtheroSection">
        <div className="container">
          <div className="gtheroArea">
            <div className="heroTxts">
              <h1 className="gtheroTitleloan">
                {" "}
                Instant
                <span className="interestFree2"> Interest-Free Loans</span>
              </h1>
              <p className="gtheroCaption"> FOR EVERYONE.</p>
              <p className="gtheroPara">
                We are here to help you get access to loans at zero interest.
                Put your personal properties up as collateral for a loan.
              </p>
              <ul className="gtherobuttons">
                {/* <a href="/appointment" className="gtconnect">
                  Apply for loan
                </a> */}

                <a href="https://egoras.ng/appointment" className="gtconnect">
                  Get the loan
                </a>
              </ul>
              <ul className="joinCommunitybtns">
                <h6 className="joinCommunitybtnsTitle">Join Our Community.</h6>
                {/* <a href="/appointment" className="gtconnect">
                  Apply for loan
                </a> */}
                <div className="joinCommunitybtnsLinks">
                  <a
                    href="https://t.me/egorasmarket"
                    className="communitybtn1"
                    target="_blank"
                  >
                    <TelegramIcon />
                    Telegram
                  </a>
                  <a
                    href="https://twitter.com/egorasmarket"
                    className="communitybtn1"
                    target="_blank"
                  >
                    <TwitterIcon />
                    Twitter
                  </a>
                </div>
              </ul>
            </div>
            <div className="hero-images">
              <img src="/img/Phonelast.png" alt="" className="heroPhone" />
            </div>
          </div>
        </div>
        <img src="/img/blur-drop.png" alt="" className="blurDrop" />
      </section>
      {/* hero section end */}

      {/* =================================================================================================================================================================================================================================================================== */}

      {/* collateralize secion start */}

      <section className="collateralize">
        <div className="container">
          <div className="collateral-area">
            <div className="collateralize-image">
              <img
                src="/img/collat-vector.svg"
                alt=""
                className="collat-vector"
                data-aos="fade-up"
                data-aos-duration="3000"
              />
              <img
                src="/img/collat-circle.svg"
                alt=""
                className="collat-circle"
                data-aos="fade-up"
                data-aos-duration="3000"
              />
            </div>
            <div
              className="collateral-txt"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              What would you like
              <br /> <span className="collat"> to collateralize.</span>
              <div className="collat-para">
                Our collateral valuation tool is free, easy to use,
                <br /> and gives you an instant quote. Our price guarantee
                <br /> ensures that you get the price we quote online which is
                usually
                <br /> “same range” with the current market value of your
                collateral
                <br /> (if in top condition). The valuation is valid for 7 days
                only.
              </div>
              <a
                href="https://egoras.ng/appointment"
                className="collat-btn"
                target="_blank"
              >
                Schedule for evaluation
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* collateralize secion end */}

      {/* =================================================================================================================================================================================================================================================================== */}

      <section className="collateral-assets-section">
        <div className="container">
          <div className="assets-container">
            <div className="assets-cont-head-area">
              <div className="assets-cont-header-arae-btns">
                <button
                  className={
                    categoryBtn === "Popular"
                      ? "assets-header1"
                      : "assets-header2"
                  }
                  onClick={triggerPopular}
                >
                  Popular Collaterals
                </button>
                <button
                  className={
                    categoryBtn === "All" ? "assets-header1" : "assets-header2"
                  }
                  onClick={triggerAll}
                >
                  All Collaterals
                </button>
              </div>

              <div className="search-input">
                {" "}
                <input
                  type="search"
                  name="search"
                  id="searchCollaterals"
                  className="assets-header3"
                  placeholder="Search..."
                ></input>{" "}
                <SearchIcon className="search-icon" />
              </div>
            </div>
            <table className="assets-table">
              <thead className="assets-category-titles">
                <tr className="assets">
                  <th className="assets-category-titles-heading1">
                    Collateral Type
                  </th>
                  <th className="assets-category-titles-heading1">Category</th>
                  <th className="assets-category-titles-heading1">
                    Inventory <span className="per-day">/ per-day</span>{" "}
                  </th>
                  <th className="assets-category-titles-heading1"></th>
                </tr>
              </thead>

              {/* <div className="table-body-content">



                
              </div> */}
              <tbody
                className="assets-table-body popular-categories"
                id="popular-categories"
              >
                {" "}
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <PhoneAndroidIcon className="assets-list-icon" />
                      <div className="assets-data-name">Phones</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data-name">Phones & Accessories</div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data-name">₦150</div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <LaptopMacIcon className="assets-list-icon" />

                      <div className="assets-data-name">Laptops</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name">
                        Laptops & Computers
                      </div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦150 - ₦200</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <DesktopMacIcon className="assets-list-icon" />
                      <div className="assets-data-name">Desktop Computers</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name">
                        Laptops & Computers
                      </div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦150 - ₦200</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <LiveTvIcon className="assets-list-icon" />

                      <div className="assets-data-name">Television</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name">
                        TV & DVD Equipments
                      </div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦150 - ₦200</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <DesktopMacIcon className="assets-list-icon" />
                      <div className="assets-data-name">Generators</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name"> Generators</div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦200 - ₦400</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <KitchenIcon className="assets-list-icon" />
                      <div className="assets-data-name">Refrigerators</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name">Home Appliances</div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦200 - ₦400</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
              {/* {{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}} */}
              <tbody
                className="assets-table-body all-categories "
                id="all-categories"
              >
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <PhoneAndroidIcon className="assets-list-icon" />
                      <div className="assets-data-name">Phones</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data-name">Phones & Accessories</div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data-name">₦150</div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <LaptopMacIcon className="assets-list-icon" />

                      <div className="assets-data-name">Laptops</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name">
                        Laptops & Computers
                      </div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦150 - ₦200</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <DesktopMacIcon className="assets-list-icon" />
                      <div className="assets-data-name">Desktop Computers</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name">
                        Laptops & Computers
                      </div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦150 - ₦200</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <LiveTvIcon className="assets-list-icon" />

                      <div className="assets-data-name">Television</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name">
                        TV & DVD Equipments
                      </div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦150 - ₦200</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <DesktopMacIcon className="assets-list-icon" />
                      <div className="assets-data-name">Generators</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name"> Generators</div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦200 - ₦400</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <PrintIcon className="assets-list-icon" />
                      <div className="assets-data-name">Refrigerators</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name">Home Appliances</div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦200 - ₦400</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                {/* ======================================== */}
                {/* ======================================== */}
                {/* ======================================== */}
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <PrintIcon className="assets-list-icon" />
                      <div className="assets-data-name">Washing Machines</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name">Home Appliances</div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦200 - ₦400</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                {/* ======================================== */}
                {/* ======================================== */}
                {/* ======================================== */}
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <PrintIcon className="assets-list-icon" />
                      <div className="assets-data-name">Printers</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name">Office Equipments</div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦150 - ₦200</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                {/* ======================================== */}
                {/* ======================================== */}
                {/* ======================================== */}
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <PrintIcon className="assets-list-icon" />
                      <div className="assets-data-name">Home Theatres</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name">Home Audio</div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦150 - ₦200</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                {/* ======================================== */}
                {/* ======================================== */}
                {/* ======================================== */}
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <PrintIcon className="assets-list-icon" />
                      <div className="assets-data-name">Gas Cookers</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name">Kitchen Equipments</div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦200 - ₦300</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                {/* ======================================== */}
                {/* ======================================== */}
                {/* ======================================== */}
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <PrintIcon className="assets-list-icon" />
                      <div className="assets-data-name">Digital Camera</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name">Cameras & Photos</div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦200 - ₦300</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                {/* ======================================== */}
                {/* ======================================== */}
                {/* ======================================== */}
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <PrintIcon className="assets-list-icon" />
                      <div className="assets-data-name">Office Shelf</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name">Office Equipments</div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦200 - ₦400</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                {/* ======================================== */}
                {/* ======================================== */}
                {/* ======================================== */}
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <PrintIcon className="assets-list-icon" />
                      <div className="assets-data-name">Micro Wave</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name">Kitchen Equipments</div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦150 - ₦200</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                {/* ======================================== */}
                {/* ======================================== */}
                {/* ======================================== */}
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <PrintIcon className="assets-list-icon" />
                      <div className="assets-data-name">Air Conditioner</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name">Home Appliances</div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦200 - ₦400</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                {/* ======================================== */}
                {/* ======================================== */}
                {/* ======================================== */}
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <PrintIcon className="assets-list-icon" />
                      <div className="assets-data-name">
                        Manual Sewing Machine
                      </div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name">
                        Industrial Appliances
                      </div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦150 - ₦200</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                {/* ======================================== */}
                {/* ======================================== */}
                {/* ======================================== */}
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <PrintIcon className="assets-list-icon" />
                      <div className="assets-data-name">
                        Industrial Sewing Machine
                      </div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name">
                        Industrial Appliances
                      </div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦200 - ₦400</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
                {/* ======================================== */}
                {/* ======================================== */}
                {/* ======================================== */}
                <tr className="assets-category-row">
                  <td className="assets-category-data">
                    <div className="assets-data">
                      <PrintIcon className="assets-list-icon" />
                      <div className="assets-data-name">Furnitures</div>
                    </div>
                  </td>
                  <td className="assets-category-data1">
                    <div className="assets-data">
                      <div className="assets-data-name">
                        Home & Office Furniture
                      </div>
                    </div>
                  </td>
                  <td className="assets-category-data1b">
                    <div className="assets-data">
                      <div className="assets-data-name">₦600 - ₦1500</div>
                    </div>
                  </td>
                  <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="https://egoras.ng/appointment"
                        className="assets-collateralize-button"
                      >
                        Collateralize
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* How it Works Section Start */}
      <section className="gthowItWorks">
        <div className="container">
          <div className="gttitleLine"></div>
          <div className="gthowItWorksTitle">
            <h1 className="gttitle">How it works</h1>
          </div>
          <div
            className="gthowItWorksBtns"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="gtbutton1">
              <button
                className={page === "change" ? "gtbtn1 active" : "gtbtn2"}
                onClick={clickMe1}
              >
                Borrower
              </button>
            </div>
            <div className="gtbutton2">
              <button
                className={page === "notChange" ? "gtbtn1 active" : "gtbtn2"}
                onClick={clickMe2}
              >
                Validator
              </button>
            </div>
          </div>

          {page === "change" ? (
            <div
              className="gthowItWorksArea"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="gthowCard1">
                <div className="gthowCard1Title">
                  <h1 className="gtstakeNumb">1.</h1>

                  <img
                    src="/img/check-value-icon.svg"
                    alt=""
                    className="gtstakeLoan"
                  />
                </div>
                <div className="gthowCard1Texts">
                  Check the value of your
                  <br /> collateral.
                  <br />
                  <p className="howCard1TextsP">
                    Select your item and tell us about
                    <br /> the current condition, and our <br />
                    advanced AI tech will make the
                    <br /> perfect value for you.
                  </p>
                </div>
              </div>
              <div className="gthowCard2">
                <div className="gthowCard2Title">
                  <h1 className="gtstakeNumb">2.</h1>

                  <img
                    src="/img/schedule-icon.svg"
                    alt=""
                    className="gtstakeLoan"
                  />
                </div>
                <div className="gthowCard2Texts">
                  Schedule an inspection
                  <br />
                  <p className="gthowCard2TextsP">
                    Book an appointment for collateral <br />
                    inspection at home or the nearest Egoras <br />
                    branch.
                  </p>
                </div>
              </div>
              <div className="gthowCard3">
                <div className="gthowCard3Title">
                  <h1 className="gtstakeNumb">3.</h1>

                  <img
                    src="/img/instant-loan-icon.svg"
                    alt=""
                    className="gtstakeLoan"
                  />
                </div>
                <div className="gthowCard3Texts">
                  Get instant loan in 5mins.
                  <br />
                  <p className="gthowCard3TextsP">
                    Instant Loans shouldn't be a luxury !<br /> We are
                    determined to make sure
                    <br /> you have access to sufficient funds
                    <br /> immediately after inspection
                    <br /> of collaterals.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="gthowItWorksArea2">
              <div className="gthowCard1">
                <div className="gthowCard1Title">
                  <h1 className="gtstakeNumb">1.</h1>

                  <img
                    src="/img/stake-loan.svg"
                    alt=""
                    className="gtstakeLoan"
                  />
                </div>
                <div className="gthowCard1Texts">
                  Stake your token
                  <br />
                  <p className="howCard1TextsP">
                    Browse by category and stake <br />
                    your EGR token to support an
                    <br />
                    entrepreneur.
                  </p>
                </div>
              </div>
              <div className="gthowCard2">
                <div className="gthowCard2Title">
                  <h1 className="gtstakeNumb">2.</h1>

                  <img
                    src="/img/approve-loan.svg"
                    alt=""
                    className="gtstakeLoan"
                  />
                </div>
                <div className="gthowCard2Texts">
                  Approve Collaterals
                  <br />
                  <p className="howCard2TextsP">
                    Fund collaterals without risking your
                    <br />
                    EGR token.
                  </p>
                </div>
              </div>
              <div className="gthowCard3">
                <div className="gthowCard3Title">
                  <h1 className="gtstakeNumb">3.</h1>

                  <img
                    src="/img/claim-interest.svg"
                    alt=""
                    className="gtstakeLoan"
                  />
                </div>
                <div className="gthowCard3Texts">
                  Claim Interest weekly
                  <br />
                  <p className="howCard3TextsP">
                    Earn over 20% APR for
                    <br />
                    approving/declining collaterals.
                  </p>
                </div>
              </div>
            </div>
          )}

          <a
            href="https://egoras.ng/appointment"
            className="gtgetStartedButton"
            target="_blank"
          >
            Get Started
            <div className="gtgetStartedHover"></div>
          </a>
        </div>

        <img src="/img/left-back-drop.svg" alt="" className="gtleftBack" />
        <img src="/img/second-dots.svg" alt="" className="gtsecondDots" />
      </section>
      {/* How it Works Section End */}
      {/* =================================================================================================================================================================================================================================================================== */}

      {/* Benefits Section start */}
      <section className="gtbenefitsSection" id="benefits">
        <div className="container">
          <div className="gttitleLine"></div>
          <div className="gthowItWorksTitle">
            <h1 className="gttitle">Why Choose Us</h1>
          </div>

          <div
            className="gtbenefitsArea"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="gtbenefitCard1">
              <div className="gtbCardIcon">
                <img src="/img/b-icon1.svg" alt="" className="gtbIcon" />
              </div>
              <div className="gtbCardTexts">
                <h1 className="gtbCardTitle">Your loans in 5mins</h1>
                <p className="gtbCardPara">
                  Seal the deal in just 3 steps! Get a value of your collateral,
                  fix an appointment with the Egoras branch nearest to you and
                  finally, receive your loan before the collateral leaves your
                  hands.
                </p>
              </div>
            </div>

            <div className="gtbenefitCard2">
              <div className="gtbCardIcon">
                <img src="/img/b-icon2.svg" alt="" className="gtbIcon" />
              </div>
              <div className="gtbCardTexts">
                <h1 className="gtbCardTitle">Best Value For Your Assets</h1>
                <p className="gtbCardPara">
                  For every collateral, our advanced AI tech will make the
                  perfect value for the item based on its condition and
                  determine amazing price value[s] for the items. Our process is
                  very seamless and fast.
                </p>
              </div>
            </div>

            <div className="gtbenefitCard3">
              <div className="gtbCardIcon">
                <img src="/img/b-icon3.svg" alt="" className="gtbIcon" />
              </div>
              <div className="gtbCardTexts">
                <h1 className="gtbCardTitle">No guarantor</h1>
                <p className="gtbCardPara">
                  Once you're ready to get loans all you have to do is to book
                  an appointment with us at the nearest Egoras branch or tell us
                  what pickup is convenient for your location, date, time.
                </p>
              </div>
            </div>

            <div className="gtbenefitCard4">
              <div className="gtbCardIcon">
                <img src="/img/b-icon4.svg" alt="" className="gtbIcon" />
              </div>
              <div className="gtbCardTexts">
                <h1 className="gtbCardTitle">No Interest Rate</h1>
                <p className="gtbCardPara">
                  Unlike other lenders that charge exorbitant interest rate
                  (over 30% monthly). Egoras offers the Market leading zero
                  interest rates which makes the repayment stress-free with zero
                  hassle.
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src="/img/right-back-drop.svg" alt="" className="gtrightBack" />
        <img src="/img/shape-egg2.svg" alt="" className="gteggShape2" />
      </section>
      {/* Benefits Section start */}
      {/* =================================================================================================================================================================================================================================================================== */}

      {/* savings    section start */}

      <section className="savingsSection2">
        <div className="container">
          <div className="savingsArea2">
            <div
              className="savingsText"
              data-aos="fade-up"
              data-aos-duration="5000"
            >
              Your collaterals are
              <br /> represented as <span className="egr"> NFTs,</span>
              <br />
              on <span className="egr">blockchain.</span>
              <p className="savings-para">
                Your collaterals are represented as NFTs (Non - Fungible
                Tokens).
                <br /> This means you can transfer your collateral ownership
                <br />
                without undergoing rigorous legal works. You can easily
                <br /> claim your collaterals after your loan period . All
                transactions
                <br /> are recorded as NFTs on a public Blockchain,
                <br /> (Thus every transaction is public and immutable).
              </p>
            </div>
            <div
              className="savingsImages"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img src="/img/block-chain.svg" alt="" className="blockChain" />
            </div>
          </div>
        </div>
      </section>

      {/* savings    section end */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* get discount section start */}

      <section className="discountSection">
        <div className="container">
          <div className="discountArea">
            <div
              className="discountImages"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img
                src="/img/discount-vector.svg"
                alt=""
                className="discountVector"
              />{" "}
              <img
                src="/img/discount-circle.svg"
                alt=""
                className="discountCircle"
              />
              <img
                src="/img/discount-card.svg"
                alt=""
                className="discountCard"
              />
            </div>
            <div
              className="discountTxt"
              data-aos="fade-up"
              data-aos-duration="5000"
            >
              Get 50% discount
              <br /> when you pay fees
              <br />
              with
              <span className="egr"> EGR.</span>
              <p className="discount-para">
                For your convenience, if you choose to use
                <br />
                EGR token to pay Inventory fees and logistics, <br />
                you will enjoy a 50% discount on the fees.
              </p>
              {/* <a href="/collateral" className="discount-btn">
                Learn more
                <ArrowRightIcon />
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* get discount section end */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* atm cards section start */}

      {/* <section className="atmCards">
        <div className="container">
          <div className="atmCardsArea">
            <div
              className="atmCardsTxt"
              data-aos="fade-up"
              data-aos-duration="5000"
            >
              3% Cashback on All
              <br />
              <span className="egr"> Transactions</span>
              <p className="atmCards-para">
                Get 3% cashback in EGR every time you use
                <br /> your Egoras Card. All your cashback is automatically
                <br /> placed in your Egoras Account so the only
                <br /> thing you need to worry about is making
                <br /> purchases with your card.
              </p>
              {/* <a href="/collateral" className="discount-btn">
                Learn more
                <ArrowRightIcon />
              </a> */}
      {/* </div>
            <div
              className="atmCardsImage"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img
                src="/img/atm-cards.png"
                alt=""
                className="atmcard-Image"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* atm cards section end */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* savings    section start */}
      <section className="savingsSection">
        <div className="container">
          <div className="savingsArea">
            <div
              className="savingsText"
              data-aos="fade-up"
              data-aos-duration="5000"
            >
              Save money as you
              <br />
              repay your
              <span className="egr"> loans.</span>
              <p className="savings-para">
                We offer a very flexible repayment
                <br /> in which we set a percentage to
                <br />
                save and these savings accrues <br />
                interest daily.
              </p>
              {/* <a href="/collateral" className="discount-btn">
              Learn more
              <ArrowRightIcon />
            </a> */}
              {/* <a href="/collateral" className="discount-btn">
                Learn more
                <ArrowRightIcon />
              </a> */}
            </div>
            <div
              className="savingsImages"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img
                src="/img/savingsCircle.svg"
                alt=""
                className="savingsCircle"
              />
              <img
                src="/img/savingsVector.svg"
                alt=""
                className="savingsVector"
              />
              <img
                src="/img/savingsMoney.svg"
                alt=""
                className="savingsMoney"
              />
              {/* <img src="/img/savingsLens.svg" alt="" className="savingsLens" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* savings    section end */}
      {/* =================================================================================================================================================================================================================================================================== */}

      {/* Stories Section Start  */}
      <section className="gtstoriesSection">
        <div className="container">
          <div
            className="gttitleLine"
            data-aos="fade-up"
            data-aos-duration="3000"
          ></div>
          <div
            className="gthowItWorksTitle"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="gttitle" data-aos="fade-up" data-aos-duration="3000">
              Popular Stories
            </h1>
          </div>
          <div
            className="gtstoriesArea"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {/* Carousel start==============================
==============================================
============================= */}
            <Carousel
              responsive={responsive}
              className="storiesCard"
              showDots={false}
              infinite={true}
            >
              <div className="storiesCard1">
                <div className="storiesCardVideo">
                  <iframe
                    className="stroriesIframe"
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/C42kN47tbQk"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mrs Faith, She used Egoras
                    <br /> micro-credit to restore her failing
                    <br /> farm business.
                  </h5>
                  <h6 className="storiesCardDate">19 Apr 2021</h6>
                </div>
              </div>
              <div className="storiesCard1">
                <div className="storiesCardVideo">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/8W9qbS-dZ2c"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mrs Onyiyechi, She used Egoras
                    <br /> microcredit to expand her
                    <br />
                    small business
                  </h5>
                  <h6 className="storiesCardDate">19 Apr 2021</h6>
                </div>
              </div>
              <div className="storiesCard1">
                <div className="storiesCardVideo">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/uxv9_BfnLVg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mrs Elizabeth, She used Egoras
                    <br /> microcredit to expand her
                    <br />
                    grocery business.
                  </h5>
                  <h6 className="storiesCardDate">19 Apr 2021</h6>
                </div>
              </div>
              <div className="storiesCard1">
                <div className="storiesCardVideo">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/5g8XkN10ScU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Mrs Chidinma Happiness used Egoras
                    <br /> Micro-credit to expand her
                    <br />
                    grocery business
                  </h5>
                  <h6 className="storiesCardDate">1 Apr 2021</h6>
                </div>
              </div>
              <div className="storiesCard1">
                <div className="storiesCardVideo">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/ZpLVfX8vfGk"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mrs Justina Kelechi, a small <br />
                    business owner that used Egoras <br />
                    microcredit to grow her business
                  </h5>
                  <h6 className="storiesCardDate">1 Apr 2021</h6>
                </div>
              </div>
              <div className="storiesCard1">
                <div className="storiesCardVideo">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/xSR_wKvpVAA"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mr Chinemerem, An Egoras <br />
                    borrower
                  </h5>
                  <h6 className="storiesCardDate">28 Mar 2021</h6>
                </div>
              </div>
              <div className="storiesCard1">
                <div className="storiesCardVideo">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/Wlxx40AImfI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mrs Chidinma Ogu,
                    <br /> an Egoras borrower
                  </h5>
                  <h6 className="storiesCardDate">28 Mar 2021</h6>
                </div>
              </div>
              <div className="storiesCard1">
                <div className="storiesCardVideo">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/QjmG5Xvq63I"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Meet Mrs Faith Akpan, An Egoras <br />
                    borrower
                  </h5>
                  <h6 className="storiesCardDate">28 Mar 2021</h6>
                </div>
              </div>
              <div className="storiesCard1">
                <div className="storiesCardVideo">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/RXPPrnrWuss"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    What is Egoras Microfinance Protocol
                  </h5>
                  <h6 className="storiesCardDate">23 Mar 2021</h6>
                </div>
              </div>
              <div className="storiesCard1">
                <div className="storiesCardVideo">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/a_ehqUZGyoc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="storiesCardTxts">
                  <h5 className="storiesCardTitle">
                    Mrs Gloria Omoreke just doubled
                    <br /> her profits with Egoras
                    <br />
                    Micro-credit
                  </h5>
                  <h6 className="storiesCardDate">23 Mar 2021</h6>
                </div>
              </div>
            </Carousel>
            {/* Carousel end==============================
==============================================
============================= */}
            <div className="carouselLinkStories">
              <a
                href="https://www.youtube.com/channel/UCHfi5EwXig46xp5Dx8hVBHQ/videos"
                target="_blank"
                className="carouselLinkbtn"
              >
                View All
              </a>
            </div>
          </div>
        </div>

        <img src="/img/video-dots.svg" alt="" className="gtvidDots" />
      </section>
      {/* Stories Section End  */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* Partners Section start  */}
      <section className="gtpartnersSection">
        <div className="container">
          <div
            className="gttitleLine"
            data-aos="fade-up"
            data-aos-duration="3000"
          ></div>
          <div
            className="gthowItWorksTitle"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <h1 className="gttitle">Our Partners</h1>
          </div>
          <div
            className="gtPartnersArea"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="gtpatLogo">
              <a href="https://paidnetwork.com/" target="blank">
                <img
                  src="/img/partners/PAIDNETWORK.svg"
                  alt=""
                  className="gtpartnerLogos   paid"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://yellowroad.app/" target="blank">
                <img
                  src="/img/partners/yellow-road-white.svg"
                  alt=""
                  className="gtpartnerLogos yellow"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://www.threem.capital/" target="blank">
                <img
                  src="/img/partners/threecapital-black.svg"
                  alt=""
                  className="gtpartnerLogos three"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://buidlhodl.capital/" target="blank">
                <img
                  src="/img/partners/build-logo-white.svg"
                  alt=""
                  className="gtpartnerLogos build"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://exnetwork.community/" target="blank">
                <img
                  src="/img/partners/ex-capital-white.svg"
                  alt=""
                  className="gtpartnerLogos ex"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://ferrum.network/" target="blank">
                <img
                  src="/img/partners/ferrum-network-white.svg"
                  alt=""
                  className="gtpartnerLogos ferrum"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://titans.ventures/" target="blank">
                <img
                  src="/img/partners/TITANS2.svg"
                  alt=""
                  className="gtpartnerLogos titans"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://www.juncapital.io/" target="blank">
                <img
                  src="/img/partners/jun-logo-white.svg"
                  alt=""
                  className="gtpartnerLogos jun"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://nuls.medium.com/" target="blank">
                <img
                  src="/img/partners/NULS.svg"
                  alt=""
                  className="gtpartnerLogos nuls"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://launchpool.xyz/" target="blank">
                <img
                  src="/img/partners/launchpooldark-image.svg"
                  alt=""
                  className="gtpartnerLogos launch"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://www.mantradao.com/" target="blank">
                <img
                  src="/img/partners/mantra-logo-white.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/resurgence-logo-white.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/QUIVERX.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/propel-logo-white.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/blackdragon-dark.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/n3rd-logo-white.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/MUTUALBENEFITS.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/skyfast-dark.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/chaos-black.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/aussie-black.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/ventures-black.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/everse-logo-1.png"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
          </div>
        </div>

        <img
          src="/img/partner-circle.svg"
          alt=""
          className="gtpartnersCircle"
        />
      </section>
      {/* Partners Section end  */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* gtcompare Section Start */}
      {/* <section className="gtcompareSection">
        <div className="container">
          <div
            className="gttitleLine"
            data-aos="fade-up"
            data-aos-duration="3000"
          ></div>
          <div
            className="gthowItWorksTitle"
            data-aos="fade-down"
            data-aos-duration="3000"
          >
            <h1 className="gttitle">
              Choose the freedom
              <br />
              you need.
            </h1>
          </div>
          <div
            className="gtcompareArea"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="compareCard">
              <div className="compareCardContent1">
                <h4 className="cardContentTitles">Other Lenders</h4>
                <div className="content-img">
                  {" "}
                  <img src="/img/egoras-logo.svg" alt="" className="Content" />
                </div>
              </div>
              <hr />
              <div className="compareCardContent2">
                <h6 className="cardContentTxt">Interest</h6>
                <h6 className="cardContentTxt">
                  <RemoveCircleIcon className="removeCircle" />
                  Over 30% Monthly
                </h6>
                <h6 className="cardContentTxt">
                  <CheckCircleIcon className="checkCircle" />
                  Free
                </h6>
              </div>
              <hr />
              <div className="compareCardContent2">
                <h6 className="cardContentTxt">Processing Fees</h6>
                <h6 className="cardContentTxt">
                  <RemoveCircleIcon className="removeCircle" />
                  Up to ₦10,000
                </h6>
                <h6 className="cardContentTxt">
                  <CheckCircleIcon className="checkCircle" />
                  Free
                </h6>
              </div>
              {/* <hr /> */}
      {/* <div className="compareCardContent2">
              <h6 className="cardContentTxt">Card Delivery</h6>
              <h6 className="cardContentTxt">
                <RemoveCircleIcon className="removeCircle" />
                Up to ₦50 plus V.A.T{" "}
              </h6>
              <h6 className="cardContentTxt">
                {" "}
                <CheckCircleIcon className="checkCircle" />
                25 free transfers every month
              </h6>
            </div> */}
      {/* <hr />
              <div className="compareCardContent2">
                <h6 className="cardContentTxt">Repayment</h6>
                <h6 className="cardContentTxt">
                  <RemoveCircleIcon className="removeCircle" />
                  Hard
                </h6>
                <h6 className="cardContentTxt">
                  {" "}
                  <CheckCircleIcon className="checkCircle" />
                  Flexible
                </h6>
              </div>
              <hr />
              <div className="compareCardContent2">
                <h6 className="cardContentTxt">Approval Spped</h6>
                <h6 className="cardContentTxt">
                  <RemoveCircleIcon className="removeCircle" />7 days
                </h6>
                <h6 className="cardContentTxt">
                  {" "}
                  <CheckCircleIcon className="checkCircle" />5 mins
                </h6>
              </div>
              <hr />
              <div className="compareCardContent2">
                <h6 className="cardContentTxt">Micro-Collaterals</h6>
                <h6 className="cardContentTxt">
                  <RemoveCircleIcon className="removeCircle" />
                  No
                </h6>
                <h6 className="cardContentTxt">
                  {" "}
                  <CheckCircleIcon className="checkCircle" />
                  Yes
                </h6>
              </div>
              <hr />
              <div className="compareCardContent2">
                <h6 className="cardContentTxt">Duration</h6>
                <h6 className="cardContentTxt">
                  <RemoveCircleIcon className="removeCircle" />
                  14 days
                </h6>
                <h6 className="cardContentTxt">
                  {" "}
                  <CheckCircleIcon className="checkCircle" />
                  Up to 1 year
                </h6>
              </div>
              <hr />
              <div className="compareCardContent2">
                <h6 className="cardContentTxt">Documentation</h6>
                <h6 className="cardContentTxt">
                  <RemoveCircleIcon className="removeCircle" />
                  High
                </h6>
                <h6 className="cardContentTxt">
                  {" "}
                  <CheckCircleIcon className="checkCircle" />
                  Low
                </h6>
              </div>
            </div>
          </div>
        </div>

        <img src="/img/token-dots.svg" alt="" className="gtcompareDots" />
      </section> */}
      {/* gtcompare Section End */}
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* explore section  start */}
      <section className="gtexploreSection">
        <div className="container">
          <div
            className="gtexploreArea"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="gtexploretxts">
              <h1
                className="gtgood"
                data-aos="fade-down"
                data-aos-duration="3000"
              >
                Sounds good?
              </h1>
              <div className="gtexploreLink">
                <a
                  href="https://egoras.ng/appointment"
                  className="gtexploreLoansbtn"
                >
                  Get the loan.
                </a>
              </div>
            </div>

            <img src="/img/explore-dots.svg" alt="" className="gtexploreDots" />
            <img
              src="/img/explore-shape.svg"
              alt=""
              className="gtexploreShape"
            />
          </div>
        </div>
      </section>
      {/* explore section  end */}
      {/* =================================================================================================================================================================================================================================================================== */}
    </div>
  );
};

export default GetLoan;
