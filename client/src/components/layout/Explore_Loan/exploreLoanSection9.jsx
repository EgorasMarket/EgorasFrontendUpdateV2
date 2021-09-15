import React from 'react';
import Section from './exploreLoanSection1';
import Section11 from './exploreLoanSection8';
import Section2 from './exploreLoanSection3';
import Section3 from './exploreLoanSection4';

const ExploreLoanSection9 = () => {
    return (
        <div className="exploreLoanSection">
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
             <Section11/>
            <Section2/>
              <Section3/>
            
        </div>
    )
}

export default ExploreLoanSection9;
