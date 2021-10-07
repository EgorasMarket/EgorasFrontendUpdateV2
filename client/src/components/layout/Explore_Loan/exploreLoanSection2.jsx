import React, { Fragment, useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { fetch} from "../../../actions/loans";
import './exploreLoan.css';
const ExploreLoanSection2 = ({loans, fetch}) => {
    const [loanData, setLoanData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    //  const Roll =[{id:1,img:'pages8.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{ id:2,img:'pages.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{ id:3,img:'pages1.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:4,img:'pages2.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:5,img:'pages3.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:6,img:'pages4.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:7,img:'pages5.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:8,img:'pages6.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:9,img:'pages7.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:10,img:'pages8.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:11,img:'pages8.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:12,img:'pages.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:13,img:'pages1.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:13,img:'pages2.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:14,img:'pages3.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:15,img:'pages4.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:16,img:'pages5.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:17,img:'pages6.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:18,img:'pages7.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:19,img:'pages8.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:20,img:'pages8.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:21,img:'pages.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:22,img:'pages1.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:23,img:'pages2.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:24,img:'pages3.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:25,img:'pages4.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:26,img:'pages5.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:27,img:'pages6.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:28,img:'pages7.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:29,img:'pages8.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:30,img:'pages8.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:31,img:'pages.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:32,img:'pages1.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:34,img:'pages2.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:35,img:'pages3.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:36,img:'pages4.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:37,img:'pages5.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:38,img:'pages6.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{id:39,img:'pages7.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'}
    // ]
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
            <div className="section2DivHolder_img"  data-aos="fade-up" data-aos-duration="3000" >
                  {/* { Roll.map((bag) =>(
                <div className="exploreLoanSection2" key={bag.id}>
                    <div className="DivIMG"  style={{ backgroundImage: `url(${bag.img})` }}></div>
                   
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
                                 <div className="exploreLoanSection2"  key={i} >
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
  })(ExploreLoanSection2);