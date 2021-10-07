import React from 'react';
import './documentation.css';
import {Link} from 'react-router-dom';
 import {Search,ArrowForward,ArrowBack} from '@material-ui/icons';

const Documentation8 = () => {
    return (
      <div>
        <div className="documentationSection">
          <div className="subSectionA">
            <div className="subSectionA_Div">
              <h1 className="subSectionAH1">Documentation</h1>
              <p className="subSectionA_P">FROM EGORAS MICRO-FINANCE</p>
            </div>
          </div>
          <img src="capn3.svg" alt=" " className="subSectionA_Img" />
        </div>

        <div className="documentationSection2">
          <div className="subSectionB">
            <form className="subSectionB_Form">
              <div className="subSectionSearchDiv">
                <input
                  type="search"
                  placeholder="Search"
                  className="formSearch"
                />
                <Search className="btnSearch" />
              </div>
            </form>
            <div className="subSectionB_Sidebar_Line"></div>
            <div className="subSectionB_Sidebar">
              <ul className="subSectionB_Sidebar_Ul ">
                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link to="/documentation" className="subSectionB_SidebarA">
                    {" "}
                    Introduction
                  </Link>
                </li>
                <li
                  className="subSectionB_Sidebar_Link add"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  GETTING STARTED
                </li>
                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link to="/documentation1" className="subSectionB_SidebarA">
                    What problem is Egoras trying to solve{" "}
                  </Link>
                </li>
                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link
                    to="/egoras-decentralized-autonomous-organization"
                    className="subSectionB_SidebarA"
                  >
                    Egoras Decentralized Autonomous <br /> Organization{" "}
                  </Link>
                </li>
                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link
                    to="/lending-partner-governance"
                    className="subSectionB_SidebarA"
                  >
                    Lending Partner Governance{" "}
                  </Link>
                </li>
                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link
                    to="/loan-approval-governance"
                    className="subSectionB_SidebarA"
                  >
                    {" "}
                    Loan Aprroval Governance
                  </Link>
                </li>
                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link
                    to="/interest-rate-governance"
                    className="subSectionB_SidebarA"
                  >
                    Interest Rate Governance
                  </Link>
                </li>
                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link
                    to="/interest-sharing-formular"
                    className="subSectionB_SidebarA"
                  >
                    Interest sharing Formula
                  </Link>
                </li>
                <li
                  className="subSectionB_Sidebar_Link add"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  UNCOLLATERALIZED LENDING MODULE
                </li>
                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link to="/loan-application" className="subSectionB_SidebarA">
                    {" "}
                    Loan Application
                  </Link>
                </li>
                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link to="/approve-company" className="subSectionB_SidebarA">
                    Approve Company
                  </Link>
                </li>
                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link to="/repay-loan" className="subSectionB_SidebarA">
                    Repay Loan{" "}
                  </Link>
                </li>
                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link to="/reward-voter" className="subSectionB_SidebarA">
                    {" "}
                    Reward Voters
                  </Link>
                </li>
                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link
                    to="/distribute-interest-to-egr-holders "
                    className="subSectionB_SidebarA"
                  >
                    {" "}
                    Distribute Interest To Egr Holders
                  </Link>
                </li>
                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link to="/governance-vote" className="subSectionB_SidebarA">
                    {" "}
                    Governance Vote
                  </Link>
                </li>
                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link
                    to="/validate-governance-request"
                    className="subSectionB_SidebarA"
                  >
                    {" "}
                    Validate Governance Request
                  </Link>
                </li>
                <li
                  className="subSectionB_Sidebar_Link add"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  EGORAS TREASURY SYSTEM
                </li>
                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link
                    to="/how-egoras-treasury-work"
                    className="subSectionB_SidebarA"
                  >
                    {" "}
                    How Egoras Treasury Work
                  </Link>
                </li>
                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link to="/block-rewards" className="subSectionB_SidebarA">
                    {" "}
                    Block Rewards
                  </Link>
                </li>
                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link
                    to="/how-is-the-treasury-capitalized"
                    className="subSectionB_SidebarA"
                  >
                    How is the Treasury capitalized?
                  </Link>
                </li>
                <li
                  className="subSectionB_Sidebar_Link add"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  EGORAS TOKEN ECONOMY
                </li>
                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link tof="/introduction" className="subSectionB_SidebarA">
                    {" "}
                    Introduction
                  </Link>
                </li>
                <div className="">
                  <img src="img.svg" alt="" className="positionImg" />
                </div>
                <div className="">
                  <img src="img2.svg" alt="" className="positionImg1" />
                </div>

                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link
                    to="/the-egoras-dollar"
                    className="subSectionB_SidebarA"
                  >
                    The Egoras Dollar(EUSD)
                  </Link>
                </li>

                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link
                    to="/egoras-governance-token"
                    className="subSectionB_SidebarA"
                  >
                    {" "}
                    Egoras Governance Token(EGR)
                  </Link>
                </li>
                <li
                  className="subSectionB_Sidebar_Link"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <Link to=" " className="subSectionB_SidebarA">
                    {" "}
                    Summary
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="subSectionC">
            <div className="subSectionC_Line"></div>
            <div
              className="aboutEgoras_H"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              Approved Company
            </div>
              <div className=" aboutEgoras_P" data-aos="fade-up" data-aos-duration="3000"> The voteinCompany function consists of the company address, the votePower and the _accept(true/false). The functions also sends an approval /declinal request to the protocol.</div>
            <div className="aboutEgoras_card">
              <div className="subSectionC_Card">
                <div className="subSectionC_Next add">Precious</div>
                <div className="cardText">
                  {" "}
                  <Link to="/loan-application">
                    <ArrowBack className="SubForwardIcon" />
                  </Link>{" "}
                  <div style={{ textAlign: "right" }}>
                    Loan Application
                  </div>{" "}
                </div>
              </div>
              <div className="subSectionC_Card Card12">
                <div className="subSectionC_Next">Next</div>
                <div className="cardText">
                  <div>Repay Loan </div>
                  <Link to="repay-loan">
                    <ArrowForward className="SubForwardIcon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <img src="img3.svg" alt="" className="positionImg2" />
          </div>
        </div>
      </div>
    );
}

export default Documentation8;
