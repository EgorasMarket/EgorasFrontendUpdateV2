import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import NumberFormat from "react-number-format";
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { API_URL as api_url } from "../../../actions/types";
import Footer from '../parts/Footer';
const Status = ({match}) => {
    const [loanData, setLoanData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

    useEffect(() => {
        setIsLoading(true);
        console.log();
        let status = 0;
        switch (match.params.name) {
            case "approved":
                status = 1;
                break;
            case "ongoing":
                status = 2;
                break;
            case "decline":
                status = 0;
                break;
            default:
                break;
        }
        axios.get(api_url + "/api/loans/get/by/status/"+status, null, config)
        .then(function (response) {
            setLoanData(response.data.data)
           
            setIsLoading(false);
        });
       
        
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
                            
                            <div className='col-md-4'>
                              <div className="rws">
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
                              {/* <div className='project-item'>
                              <Link to={"/loan/details/" + loan.id}>
                                <div className='project-item-img-con'
                                  style={{
                                    backgroundImage: `url(${loan.cover_image})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    height: "200px"
                                  }}>
                                
                                  
                                  
                                </div>
                                </Link>
                                <div className='project-item-text-con'>
                                  <div>
                                    <div className='pt-2'>
                                      <div className='p-item-text-1'>
                                        <div className='font-weight-bold text-uppercase'>
                                        {loan.country}
                                        </div>
                                      </div>
                                    </div>
                                    <div className='d-flex mt-2'>
                                      <div>
                                        <div className='ttx-1 lineClip lineClip-2'>
                                        <Link to={"/loan/details/" + loan.id} className="noDefaults">
                                        {loan.loan_tile}
                                        </Link>
                                        </div>
                                        <div className='ttx-2 lineClip lineClip-3'>
                                          <Moment>{loan.createdAt}</Moment>
                                        
                                        </div>
                                      </div>
                                      <div></div>
                                    </div>
                                  </div>
                                  <div>
                                    <small className='text-uppercase'>
                                    {loan.companies.name_of_company}
                                    </small>
                                    {loan.validated && loan.is_approved == false ? (
                                      <span class="badge badge-danger" style={{float: "right"}}>Declined</span>
                                    ) : null}
                                    
                                    {!loan.validated && loan.isActiveVotingPeriod == true ? (
                                      <span class="badge badge-info" style={{float: "right"}}>Awaiting Approval</span>
                                    ) : null}
              
                                          {!loan.validated && loan.isActiveVotingPeriod == false ? (
                                      <span class="badge badge-warning" style={{float: "right"}}>Pending</span>
                                    ) : null}
              
                                    {loan.validated && loan.is_approved == true ? (
                                      <span class="badge badge-success" style={{float: "right"}}>Approved</span>
                                    ) : null}
                                    <div>
                                          <div>
                                            <div className='mt-3'>
                                              <div className='d-flex justify-content-between'>
                                                <div>
                                                  <span className='font-weight-bold'>
                                                    Yes
                                                  </span>
                                                </div>
                                                <div className='ttx-lm'>{up}%</div>
                                              </div>
                                            </div>
                                            <div className='percent-con'>
                                              <div className='percent-count' style={{width: up+"%"}}></div>
                                            </div>
                                          </div>
                                          <div>
                                            <div className='mt-3'>
                                              <div className='d-flex justify-content-between'>
                                                <div>
                                                  <span className='font-weight-bold'>No</span>
                                                </div>
                                                <div className='ttx-lm'>{down}%</div>
                                              </div>
                                            </div>
                                            <div className='percent-con'>
                                              <div className='percent-count w-0' style={{width: down+"%"}} ></div>
                                            </div>
                                          </div>
                                        </div>
                                  </div>
                                </div>
                              </div> */}
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
export default(Status)