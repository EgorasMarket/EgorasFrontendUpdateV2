import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { fetchCompanies } from "../../../actions/loans";
// import Moment from "react-moment";
import Footer from "../parts/Footer";

const Companies = ({companies, fetchCompanies}) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [companiesData, setCompaniesData] = useState([]);
  useEffect(() => {
    if (companies.length == 0 && typeof companies.data == "undefined") {
        fetchCompanies(5000);
    }

    if (typeof companies.data !== "undefined" && companies.data.length > 0) {
        setCompaniesData(companies.data);
    }
  }, [companies]);
  return (
    <div className='mt-6 custom-white'>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-12'>
            <Nav tabs className='company-tab'>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => {
                    toggle('1');
                  }}
                >
                  All Companies
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => {
                    toggle('2');
                  }}
                >
                  Pending Companies
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => {
                    toggle('3');
                  }}
                >
                  Approved Companies
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '4' })}
                  onClick={() => {
                    toggle('4');
                  }}
                >
                  Declined Companies
                </NavLink>
              </NavItem>
          
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <div className='p-3'>
                  <div className='row'>
                    
                   
                   
                  {companiesData.map((company, i) =>{
              let percent = 0;
              let up = 0;
              let down = 0;
             let accepted = parseInt(company.accepted);
             let declined = parseInt(company.declined);

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
              
              <div className='col-md-3'>
                {/* <div className='project-item'>
                <Link to={"/companies/details/" + i}>
                  <div className='project-item-img-con' 
                   style={{
                    backgroundImage: `url(${company.company_logo})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    height: "200px"
                  }}>
                    
                   
           
                   
                  </div>
                  </Link>
                  <div className='project-item-text-con'>
                    <div>
                      <div className='pt-2'>
                        <div className='p-item-text-1'>
                         
                        </div>
                      </div>
                      <div className='d-flex mt-2'>
                        <div>
                          <div className='ttx-1 lineClip lineClip-2'>
                          <Link to={"/companies/details/" + i} className="noDefaults">
                           {company.name_of_company}
                           </Link>
                          </div>
                          <div className='ttx-2 lineClip lineClip-3'>
                            <Moment>{company.createdAt}</Moment>
                           
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                    <div>
                      <small className='text-uppercase'>
                    
                      {company.location}
                      </small>
                      {company.validated && company.isApproved == false ? (
                        <span class="badge badge-danger" style={{float: "right"}}>Declined</span>
                      ) : null}
                      
                      {!company.validated && company.isActiveVotingPeriod == true ? (
                        <span class="badge badge-info" style={{float: "right"}}>Awaiting Approval</span>
                      ) : null}

                            {!company.validated && company.isActiveVotingPeriod == false ? (
                        <span class="badge badge-warning" style={{float: "right"}}>Pending</span>
                      ) : null}

                      {company.validated && company.isApproved == true ? (
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







                <div className='loanWrapper'>
                  <div className="loanTop"  style={{
                      backgroundImage: `url(${company.company_logo})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      height: "200px"
                    }}>
                      
                  </div>

                  <div className="loanBottom">
                    <div className=' loanHeadings ttx-1 lineClip lineClip-2'>
                      {company.name_of_company}
                    </div>
                    <div>
                      <div className='d-flex justify-content-between'>
                        <p className="loanPtitle">Location</p>
                        <h2 className="loanSubHeadings">
                          {company.location}
                        </h2>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <p className="loanPtitle">Status</p>
                        <h2 className="loanSubHeadings">
                          {company.validated && company.isApproved == false ? (
                            <span class="badge badge-danger" style={{float: "right"}}>Declined</span>
                          ) : null}
                          
                          {!company.validated && company.isActiveVotingPeriod == true ? (
                            <span class="badge badge-info" style={{float: "right"}}>Awaiting Approval</span>
                          ) : null}

                                {!company.validated && company.isActiveVotingPeriod == false ? (
                            <span class="badge badge-warning" style={{float: "right"}}>Pending</span>
                          ) : null}

                          {company.validated && company.isApproved == true ? (
                            <span class="badge badge-success" style={{float: "right"}}>Approved</span>
                          ) : null}
                        </h2>
                      </div>
                     
                    </div>
                  </div>
                  <div className='mt-1'>
                    <Link to={"/companies/details/" + i} className="btn connect-btn btn-block bottom-radius">
                      View
                    </Link>
                  </div>
                </div>
              </div>
             );
            })}
                  
                    
                   
                    
                  </div>
                </div>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
    companies: state.companies,
  });
  
  export default connect(mapStateToProps, {
    fetchCompanies,
  })(Companies);



