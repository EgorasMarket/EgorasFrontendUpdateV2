import React from 'react';
import './documentation.css';
import {Link} from 'react-router-dom';
 import {Search,ArrowForward,ArrowBack} from '@material-ui/icons';

const Documentation7 = () => {
    return (
        <div >
            <div className="documentationSection">
                <div className="subSectionA">
                    <div className="subSectionA_Div">
                        <h1 className="subSectionAH1">Documentation</h1>
                        <p className="subSectionA_P">FROM EGORAS MICRO-FINANCE</p>
                    </div>
                </div>
                 <img src="capn3.svg" alt=" "  className="subSectionA_Img" />
            </div>

            <div className="documentationSection2">
                <div className="subSectionB">
                    <form className="subSectionB_Form">
                        <div className="subSectionSearchDiv">
                            <input type="search" placeholder="Search" className="formSearch"/>
                            <Search className="btnSearch"/>
                        </div>
                    </form>
                    <div className="subSectionB_Sidebar_Line"></div>
                    <div className="subSectionB_Sidebar">
                        <ul className="subSectionB_Sidebar_Ul ">
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/documentation" className="subSectionB_SidebarA"> Introduction</Link></li>
                            <li className="subSectionB_Sidebar_Link add" data-aos="fade-right" data-aos-duration="3000">GETTING STARTED</li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/documentation1" className="subSectionB_SidebarA">What problem is Egoras trying to solve </Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/egoras-decentralized-autonomous-organization" className="subSectionB_SidebarA">Egoras Decentralized Autonomous <br/> Organization </Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/lending-partner-governance" className="subSectionB_SidebarA">Lending Partner Governance </Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/loan-approval-governance" className="subSectionB_SidebarA"> Loan Aprroval Governance</Link></li> 
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/interest-rate-governance" className="subSectionB_SidebarA">Interest Rate Governance</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/interest-sharing-formular" className="subSectionB_SidebarA">Interest sharing Formula</Link></li> 
                            <li className="subSectionB_Sidebar_Link add" data-aos="fade-right" data-aos-duration="3000">UNCOLLATERALIZED LENDING MODULE</li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to f="/loan-application" className="subSectionB_SidebarA"> Loan Application</Link></li> 
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/approve-company" className="subSectionB_SidebarA">Approve Company</Link></li>
                           <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/repay-loan" className="subSectionB_SidebarA">Repay Loan  </Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/reward-voter" className="subSectionB_SidebarA"> Reward Voters</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/distribute-interest-to-egr-holders" className="subSectionB_SidebarA"> Distribute Interest To Egr Holders</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/governance-vote" className="subSectionB_SidebarA"> Governance Vote</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/validate-governance-request" className="subSectionB_SidebarA"> Validate Governance Request</Link></li>
                            <li className="subSectionB_Sidebar_Link add" data-aos="fade-right" data-aos-duration="3000">EGORAS TREASURY SYSTEM</li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/how-egoras-treasury-work" className="subSectionB_SidebarA"> How Egoras Treasury Work</Link></li> 
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/block-rewards" className="subSectionB_SidebarA"> Block Rewards</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/how-is-the-treasury-capitalized" className="subSectionB_SidebarA">How is the Treasury capitalized?</Link></li> 
                            <li className="subSectionB_Sidebar_Link add" data-aos="fade-right" data-aos-duration="3000">EGORAS TOKEN ECONOMY</li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/introduction" className="subSectionB_SidebarA"> Introduction</Link></li> 
                                                     <div className=""><img src="img.svg" alt="" className="positionImg" /></div>
                                                      <div className=""><img src="img2.svg" alt="" className="positionImg1" /></div>
                                                   
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/the-egoras-dollar" className="subSectionB_SidebarA">The Egoras Dollar(EUSD)</Link></li>
                        
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/egoras-governance-token" className="subSectionB_SidebarA"> Egoras Governance Token(EGR)</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/summary" className="subSectionB_SidebarA"> Summary</Link></li>                      
                        </ul>

                    </div>
                </div>

                 < div  className="subSectionC">
                   <div className="subSectionC_Line"></div>
                   <div className="aboutEgoras_H" data-aos="fade-up">Loan Application</div>
                    <div className=" aboutEgoras_P" data-aos="fade-up" data-aos-duration="3000"> The Loan application underlying function converts the loan application request into a unique identifier. The function consists of the amount of the borrower intends to borrow from the protocol, the title of the loans, the duration of the loan and the loan cover image URL. </div>
                    <div >
                     <div className="uint">
                         <div><span style={{marginRight:'10px',fontSize:'10px',color:'gray'}}>1</span>  function applyForLoan(</div>
                        <div><span style={{marginRight:'60px',fontSize:'10px',color:'gray'}}>2</span>      uint _amount,</div>
                        <div><span style={{marginRight:'60px',fontSize:'10px',color:'gray'}}>3</span>  string calldata _title,</div>
                        <div><span  style={{marginRight:'60px',fontSize:'10px',color:'gray'}}>4</span>  uint _length,</div>
                        <div><span style={{marginRight:'60px',fontSize:'10px',color:'gray'}}>5</span>  string calldata _image_url</div>
                        <div><span style={{marginRight:'60px',fontSize:'10px',color:'gray'}}>6</span>  ) external;</div>
                    </div>
                    </div>
                    
                    <div className="uint23" ><span style={{fontSize:'16px',fontWeight:'bold',color:'black'}}>_amount: </span> The funds the borrower intends to borrow through Egoras lending partners</div>
                    <div className="uint23"><span style={{fontSize:'16px',fontWeight:'bold',color:'black'}}>_title: </span> A name that describes the loan.</div>
                    <div className="uint23"><span style={{fontSize:'16px',fontWeight:'bold',color:'black'}}>_lenght: </span> The duration/ time frame of which the debt must be repaid.</div>
                    <div className="uint23 saf"><span style={{fontSize:'16px',fontWeight:'bold',color:'black'}}>_image_url: </span> The imgur link of which the loans cover photo is hosted.</div>
                    <div className="uint26">Solidity</div>
                    <div className="uint27">
                         <div className="uint67">
                           <div className="uint33"><span style={{marginRight:'10px',fontSize:'10px',color:'gray',fontWeight:'300'}}>1</span> CEGORAS egoras = CEGORAS(0x7a24C....);</div>
                           <div  className="uint33"><span style={{marginRight:'10px',fontSize:'10px',color:'gray'}}>2</span>require(egoras.applyForLoan(“700 in wei”,"Loan for a house", "180 days" , "https://i.imgur.com/zf1Udzm.jpg"), "unable to applyForLoan")</div>
                        </div>
                    </div>
                    <div className="uint26">Web 3</div>
                    <div>
              
                            <code>
                           <div> const instance = await new web3.eth.Contract(abi, address)</div>
                           <div>await instance.methods.applyForLoan(“700 in wei”,"Loan for a house", "180 days" , "https://i.imgur.com/zf1Udzm.jpg").send(from: 0xMyAccount);</div>
                        </code>
                      
                    </div>
                   <div className="aboutEgoras_card">
                   <div className="subSectionC_Card">
                       <div className="subSectionC_Next add">Precious</div>
                       <div className="cardText"><Link to="/interest-sharing-formular"> <ArrowBack className="SubForwardIcon"/></Link><div style={{textAlign:'right'}}>Interest Sharing Formula</div> </div>
                   </div>
                     <div className="subSectionC_Card Card12">
                       <div className="subSectionC_Next">Next</div>
                       <div className="cardText"><div> Approved Company </div><Link to="/approve-company"><ArrowForward className="SubForwardIcon"/></Link></div>
                   </div>
                   </div>


                 </div>

                 <div className=""><img src="img3.svg" alt="" className="positionImg2" /></div>
            </div>
            


        </div>
    )
}

export default Documentation7;
