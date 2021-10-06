import React, {Fragment, useEffect, useState}from 'react';
import './exploreLoan.css';
import NumberFormat from 'react-number-format';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { fetch} from "../../../actions/loans";


const ExploreLoanSection3 = ({loans, fetch}) => {
     const [loanData, setLoanData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //  const Roll =[{img:'pages3.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'pages10.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'pages11.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'pages13.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'pages2.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'pages10.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'}]

      useEffect(() => {
        if (loans.length == 0 && typeof loans.data == "undefined") {
          fetch(100);
        }
    
        if (typeof loans.data !== "undefined" && loans.data.length > 0) {
            setIsLoading(false);
            setLoanData(loans.data);
    
            console.log(loans.data);
        }
    
       
      }, [loans]);

    return (
        <div style={{margin:'auto'}} className="diff">
            <div className="section2DivHolder_img" >
                   {/* { Roll.map((bag) =>(
                <div className="exploreLoanSection2"  >
                     <div className="DivIMG"  style={{ backgroundImage: `url(${bag.img})` }}></div> */}
                    {/* <img src={bag.img}  alt=""  className="farmyardImg"/>
  <p className="retailButton">{bag.tag}</p>
                    <div className="pTag">{bag.price}</div>
                    <div className="forIdentity">{bag.header}</div>
                    <div><span className="interestSpan">{bag.interest}</span> <span  className="percentageSpan">{bag.interest2}</span></div>
                </div>                  
                )) } */}



                       {
                        loanData.map((loan, i) => {
                                return(
                            <Fragment>
                               <Link to={`loan-details/${loan.id}`} >
                                 <div className="exploreLoanSection2"  key={i}>
                    <div className="DivIMG"  style={{ backgroundImage: `url(${loan.cover_image})` }}></div>
                   
                    <p className="retailButton">{loan.category}</p>
                    <div className="pTag">$
                    <NumberFormat thousandSeparator={true} thousandsGroupStyle="usd" displayType={'text'} value={ parseFloat(loan.loan_amount)} />
                       
                    </div>
                    <div className="forIdentity">{loan.title}</div>
                    <div><span className="interestSpan">{loan.interest}</span> <span  className="percentageSpan">{loan.interest2}</span></div>
                </div>
                </Link>
                            </Fragment>
                                )

                        })} 

            </div> 
            
        </div>
    )
}



const mapStateToProps = (state) => ({
    loans: state.loans,

  });
  
  export default connect(mapStateToProps, {
    fetch
  })(ExploreLoanSection3);
