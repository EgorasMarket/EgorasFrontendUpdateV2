import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { API_URL as api_url } from "../../../actions/types";
import NumberFormat from 'react-number-format';
import Footer from '../parts/Footer';
const Categories = ({match}) => {
    const [loanData, setLoanData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

    useEffect(() => {
        setIsLoading(true);
        console.log(match.params.name);
        if(match.params.name == "all loans" ){
            axios.get(api_url + "/api/loans/100", null, config)
            .then(function (response) {
                setLoanData(response.data.data);
               
                setIsLoading(false);
            });  
        }else{
           


            axios.get(api_url + "/api/loans/get/by/category/"+match.params.name, null, config)
            .then(function (response) {
                setLoanData(response.data.data);
                console.log(response.data.data);
                
               
                setIsLoading(false);
            });
        }
       
        
    }, [match]);
    return (
        <div className='custom-white minus-m'>
          <div className="container pb-5">

              {loanData.length > 0 || isLoading == false ? (
                <div>
                      {
                      loanData.length > 0 ? (
                          <div>
                          <h4 className="text-uppercase" style={{marginTop: "90px"}}> {match.params.name}</h4>
                          <hr></hr>
                          {/* <div className='row'>
                            <div className='col-md-4'>
                              <div className='chart-card'>
                                <div className='head'>
                                  <div className="w-icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                  </div>
                                  <p className="w-value">31.6K</p>
                                  <h5 className="">Amount disbursed</h5>
                                </div>
                                <div className="widget-content">    
                                    <div className="w-chart">
                                        <div id="hybrid_followers"></div>
                                    </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-md-4'>
                              <div className='chart-card'>
                                <div className='head'>
                                  <div className="w-icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                  </div>
                                  <p className="w-value">31.6K</p>
                                  <h5 className="">Followers</h5>
                                </div>
                                <div className="widget-content">    
                                    <div className="w-chart">
                                        <div id="hybrid_followers"></div>
                                    </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-md-4'>
                              <div className='chart-card'>
                                <div className='head'>
                                  <div className="w-icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                  </div>
                                  <p className="w-value">31.6K</p>
                                  <h5 className="">Followers</h5>
                                </div>
                                <div className="widget-content">    
                                    <div className="w-chart">
                                        <div id="hybrid_followers"></div>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          <div className='row'>
                
                          {loanData.map((loan, i) =>{
                            let percent = 0;
                            let up = 0;
                            let down = 0;
                            let accepted = parseInt(loan.accepted);
                            let declined = parseInt(loan.declined);
              
                          if(declined == 0 && accepted > 0){
                            up = 100;
                          }else if(accepted == 0 && declined > 0){
                            down = 100
                          }if(accepted == 0 && declined == 0){
              
                          }else{
                            let wholeNumber = declined +  accepted;
                            let percent = ( accepted/wholeNumber) * 100;
                            
                            if(percent !== Infinity){
                              up = percent;
                              down = (100 - percent);
                            }
                            
                          }
              
                        return (
                            
                            <div className="rws col-md-4">
                              {/* ohoihio */}
                              <div className='loanWrapper'>
                                <div className="loanTop"  style={{
                                    backgroundImage: `url(${loan.cover_image})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    height: "200px"
                                  }}>
                                    <span className="loanCategories text-uppercase">{loan.loan_category}</span>
                                </div>

                                <div className="loanBottom">
                                  <div className=' loanHeadings ttx-1 lineClip lineClip-2'>
                                    {loan.loan_tile}
                                  </div>
                                  <div>
                                    <div className='d-flex justify-content-between'>
                                      <p className="loanPtitle">Loan Amount</p>
                                      <h2 className="loanSubHeadings">
                                        <NumberFormat value={parseFloat(loan.loan_amount)} displayType={'text'} thousandSeparator={true} prefix={'₦'}  />
                                      </h2>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                      <p className="loanPtitle">Interest</p>
                                      <h2 className="loanSubHeadings">24% APY</h2>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                      <p className="loanPtitle">Insurance </p>
                                      <h2 className="loanSubHeadings"><img className="img-fluid MUTUALBENEFITS" width='160' src="/svg/MUTUALBENEFITS.svg" /></h2>
                                    </div>
                                  </div>
                                </div>
                                <div className='mt-1'>
                                  <Link to={"/loan/details/" + loan.id} className="btn connect-btn btn-block bottom-radius">
                                    Learn More <FontAwesomeIcon icon={faArrowRight} />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          );
                          })}
                          
                          </div> 
                          </div>


                      ) : (<h1 style={{marginTop: "20%"}} className="text-center">No Data

                      </h1>) 
                  }
                </div>
                  
              ) : (
                  <h1 style={{marginTop: "20%"}} className="text-center">
                      <FontAwesomeIcon icon={faCircleNotch} spin /><br />
                      <small>Loading</small>
                      </h1>
              ) }
              
          </div>
          <Footer />
        </div>
    )
}
export default(Categories)