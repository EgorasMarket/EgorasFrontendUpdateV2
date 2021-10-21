import React from "react";
import { Link } from "react-router-dom";

const ExploreLoanSection1 = () => {
  return (
    <div>
      <div className="section1Sec">
        <div className="calculatorDiv">
          <div className="calculatorDivForm">
            <form>
              <div>
                <select className="selectOption">
                  <option>All Loans</option>
                  <option>Mobile Phones $ Tablets</option>
                  <option>Laptop and Computers</option>
                  <option>TV and DVD Sets</option>
                  <option>Furniture</option>
                  <option>Kitchen Appliances</option>
                  <option>Home Accessories</option>
                </select>
              </div>
            </form>
          </div>
          {/* <div className="calculatorDivCal">
                        <div className="interestRangeDivL">
                            <label className="interestRange">INTEREST RANGE:</label>
                            <div className="divHab" ><div className="calDiv"><input type="number" placeholder="0" className="calNumber" max="100"/><div className="calInnerDiv"></div><input type="number" placeholder="100"  className="calNumber" style={{appearance:'text-flied'}}/></div><label className="labPer">%</label></div>
                        </div>
                    </div> */}
        </div>

        <div className="linkDivMin">
          <div className="loansPartner">
            <label className="statusLabel">STATUS:</label>
            <div className="divButtonHolders">
              <Link to="/explore_loans_page2" className="calButtonLink">
                Any
              </Link>
              <Link to="/explore_loans_page3" className="calButtonLink">
                Ongoing
              </Link>
              <Link to="/explore_loans_page4" className="calButtonLink">
                Approved
              </Link>
              <Link to="/explore_loans_page5" className="calButtonLink">
                Declined
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreLoanSection1;
