import React from 'react';
import './documentation.css';
import {Link} from 'react-router-dom';
 import {Search,ArrowForward,ArrowBack} from '@material-ui/icons';

const Documentation1 = () => {
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
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/documentation" className="subSectionB_SidebarA" > Introduction</Link></li>
                            <li className="subSectionB_Sidebar_Link add" data-aos="fade-right" data-aos-duration="3000">GETTING STARTED</li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/documentation1" className="subSectionB_SidebarA">What problem is Egoras trying to solve </Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/egoras-decentralized-autonomous-organization" className="subSectionB_SidebarA">Egoras Decentralized Autonomous <br/> Organization </Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/lending-partner-governance" className="subSectionB_SidebarA">Lending Partner Governance </Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/loan-approval-governance" className="subSectionB_SidebarA"> Loan Aprroval Governance</Link></li> 
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/interest-rate-governance" className="subSectionB_SidebarA">Interest Rate Governance</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/interest-sharing-formular" className="subSectionB_SidebarA">Interest sharing Formula</Link></li> 
                            <li className="subSectionB_Sidebar_Link add" data-aos="fade-right" data-aos-duration="3000">UNCOLLATERALIZED LENDING MODULE</li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/loan-application" className="subSectionB_SidebarA"> Loan Application</Link></li> 
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/approve-company" className="subSectionB_SidebarA">Approve Company</Link></li>
                           <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/repay-loan" className="subSectionB_SidebarA">Repay Loan  </Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/reward-voter" className="subSectionB_SidebarA"> Reward Voters</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/distribute-interest-to-egr-holders " className="subSectionB_SidebarA"> Distribute Interest To Egr Holders</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/governance-vote" className="subSectionB_SidebarA"> Governance Vote</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/validate-governance-request" className="subSectionB_SidebarA"> Validate Governance Request</Link></li>
                            <li className="subSectionB_Sidebar_Link add" data-aos="fade-right" data-aos-duration="3000">EGORAS TREASURY SYSTEM</li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/how-egoras-treasury-work" className="subSectionB_SidebarA"> How Egoras Treasury Work</Link></li> 
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/block-rewards" className="subSectionB_SidebarA"> Block Rewards</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link tof="/how-is-the-treasury-capitalized" className="subSectionB_SidebarA">How is the Treasury capitalized?</Link></li> 
                            <li className="subSectionB_Sidebar_Link add" data-aos="fade-right" data-aos-duration="3000">EGORAS TOKEN ECONOMY</li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/introduction" className="subSectionB_SidebarA"> Introduction</Link></li> 
                                                     <div className=""><img src="img.svg" alt="" className="positionImg" /></div>
                                                      <div className=""><img src="img2.svg" alt="" className="positionImg1" /></div>
                                                   
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/the-egoras-dollar" className="subSectionB_SidebarA">The Egoras Dollar(ESSD)</Link></li>
                        
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/egoras-governance-token" className="subSectionB_SidebarA"> Egoras Governance Token(EGR)</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/summary" className="subSectionB_SidebarA"> Summary</Link></li>                      
                        </ul>

                    </div>
                </div>

                 < div  className="subSectionC">
                   <div className="subSectionC_Line"></div>
                   <div className="aboutEgoras_H" data-aos="fade-up" data-aos-duration="3000">What Problem is Egoras trying to <br/> solve?</div>
                   <div className=" aboutEgoras_P" data-aos="fade-up" data-aos-duration="3000">It was thought that the advent of microfinance in the 1970s and 1980s would eradicate or drastically reduce the pervading poverty at the time. However, four decades into the pioneering work of Mohammad Yunus in Bangladesh and the establishment of the Grameen Bank in 1983, the goals of microfinance have not been met. Without a doubt, there are several barriers to the financial success of the microfinance organization when compared to other financial organizations or mainstream banks.</div>
                    <div className="aboutEgoras_P" data-aos="fade-up" data-aos-duration="3000"> The first is the higher interest rate. It is generally acknowledged that most microfinance institutions charge a very high rate of interest when compared to commercial banks. This is usually at the detriment of the borrowers with attendant consequences such as depression and even suicide. Secondly, there appears to be overdependence of microfinance organization on the prevailing banking System. This is because most microfinance institutions operate as Non-Governmental Organizations (NGOs), and they are reliant on financial institutions such as commercial banks for stabilized funding to carry out their own lending activities. This overdependence of microfinance institution on banks makes them incompetent as a lending partner. Finally, there is the problem of over-indebtedness. Notably, the microfinance sector gives loans without collateral, and this increases the risk of bad debts.</div>
                    <div className = "aboutEgorasImg" data-aos="fade-up" data-aos-duration="3000"><img src="content.png" alt=" " className="EGOimg" /></div>
                    <div className="aboutEgoras_P">Egoras microfinance protocol seeks to address the challenges identified above. Addressing the challenges would mean that loans should be given at very low interest when compared to mainstream banks, and collaterals should be required to get the loans. This also means a microfinance institution, not dependent on mainstream banks. To solve the high-interest rate problem, Egoras protocol introduces on-chain governance where the interest rates are determined by the people, in which no central body or company determine the interest. In other words, the users determine the interest rate. To address the dependence issue, the Egoras protocol uses an on-chain treasury system to make sure that Egoras protocol doesn’t lack the funds or liquidity for the loans and these funds are governed by the people. Finally, the Egoras protocol introduces collateral lending to address over-indebtedness in the microfinance sector. In this regard, small businesses’ assets will be converted to non-fungible tokens and they represent the collateral. These assets will be sold off when the borrower defaults in repaying the loan.</div>
                   <div className="aboutEgoras_card">
                   <div className="subSectionC_Card" data-aos="fade-up" data-aos-duration="3000">
                       <div className="subSectionC_Next add">previous</div>
                       <div className="cardText"><Link to="/documentation"><ArrowBack className="SubForwardIcon"/></Link><div style={{textAlign:'right'}}>Introduction</div> </div>
                   </div>
                     <div className="subSectionC_Card Card12" data-aos="fade-up" data-aos-duration="3000">
                       <div className="subSectionC_Next">Next</div>
                       <div className="cardText">Egoras Decentralized<br/>Autonomous Organization<Link to="/egoras-decentralized-autonomous-organization"> <ArrowForward className="SubForwardIcon"/></Link></div>
                   </div>
                   </div>


                 </div>

                 <div className=""><img src="img3.svg" alt="" className="positionImg2" /></div>
            </div>
            


        </div>
    )
}

export default Documentation1;
