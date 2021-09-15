import React from 'react';
import {Link} from 'react-router-dom';


const ExploreLoanSection3 = () => {
    return (
        <div>
            <div className="Holder">
                <img src="loand.svg" alt="" className="SideImg"/>
                <div>
                 <div className="buttonNextDivL">

                    <Link to="/explore_loans" className="nextButton1">1</Link>
                    <Link to="/explore_loans_page" className="nextButton1">2</Link>
                    <Link to="/explore_loans_page1" className="nextButton">Next</Link>
                 </div>
                </div>
            </div>
            
        </div>
    )
}

export default ExploreLoanSection3;
