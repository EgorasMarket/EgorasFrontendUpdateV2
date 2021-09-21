import React from 'react';
import './exploreLoan.css';
import Section from './exploreLoanSection1';
import Section1 from './exploreLoanSection2';
import Section2 from './exploreLoanSection3';
import Section3 from './exploreLoanSection4';

const Explore_loans = () => {
    return (
        <div  ClassName="exploreLoanSection">
            <div className="exploreLoansHeader">
                <div className="exploreLoansInsideDiv1">
                    <h1 className="exploreLoansH1">Explore Loans</h1>
                    <p className="exploreLoansP">FROM EGORAS MICRO-FINANCE</p>
                </div>
                <div className="exploreLoansInsideDiv2">
                    <img src="neve.svg" alt=" " className="imgSrc" />
                </div>
            </div>


            <Section/>
            <Section1/>
            <Section2/>
             <Section3/>
            
            
            {/* <div className="section2Div">
                <div>

                    <div>
                        <form>
                            <div>
                                <select>
                                    <option>All loans</option>
                                    <option>Retail</option>
                                    <option>Women</option>
                                    <option>Single Parents</option>
                                    <option>Agriculture</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div>
                      <label>INTEREST RANGE:</label>
                      <div><input type="" placeholder="" /><div></div><input type="" placeholder="" /><label>%</label></div>
                    </div>
                </div>

            </div> */}
            
        </div>
    )
}

export default Explore_loans
