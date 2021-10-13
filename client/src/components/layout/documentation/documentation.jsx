import React from 'react';
import {Link} from 'react-router-dom';
import './documentation.css';
 import {Search,ArrowForward} from '@material-ui/icons';

const Documentation = () => {
    return (
        <div>
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
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000" ><Link to ="/documentation1" className="subSectionB_SidebarA">What problem is Egoras trying to solve </Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/egoras-decentralized-autonomous-organization" className="subSectionB_SidebarA">Egoras Decentralized Autonomous <br/> Organization </Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/lending-partner-governance" className="subSectionB_SidebarA">Lending Partner Governance </Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/loan-approval-governance" className="subSectionB_SidebarA"> Loan Aprroval Governance</Link></li> 
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link  to ="/interest-rate-governance" className="subSectionB_SidebarA">Interest Rate Governance</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link  to ="/interest-sharing-formular" className="subSectionB_SidebarA">Interest sharing Formula</Link></li> 
                            <li className="subSectionB_Sidebar_Link add" data-aos="fade-right" data-aos-duration="3000">UNCOLLATERALIZED LENDING MODULE</li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link  to ="/loan-application" className="subSectionB_SidebarA"> Loan Application</Link></li> 
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link  to ="/approve-company" className="subSectionB_SidebarA">Approve Company</Link></li>
                           <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link  to ="/repay-loan" className="subSectionB_SidebarA">Repay Loan  </Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/reward-voter" className="subSectionB_SidebarA"> Reward Voters</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/distribute-interest-to-egr-holders" className="subSectionB_SidebarA"> Distribute Interest To Egr Holders</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link  to="/governance-vote" className="subSectionB_SidebarA"> Governance Vote</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/validate-governance-request " className="subSectionB_SidebarA"> Validate Governance Request</Link></li>
                            <li className="subSectionB_Sidebar_Link add" data-aos="fade-right" data-aos-duration="3000">EGORAS TREASURY SYSTEM</li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/how-egoras-treasury-work" className="subSectionB_SidebarA"> How Egoras Treasury Work</Link></li> 
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/block-rewards" className="subSectionB_SidebarA"> Block Rewards</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/how-is-the-treasury-capitalized" className="subSectionB_SidebarA">How is the Treasury capitalized?</Link></li> 
                            <li className="subSectionB_Sidebar_Link add" data-aos="fade-right" data-aos-duration="3000">EGORAS TOKEN ECONOMY</li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/introduction" className="subSectionB_SidebarA"> Introduction</Link></li> 
                                                     <div className=""><img src="img.svg" alt="" className="positionImg" /></div>
                                                      <div className=""><img src="img2.svg" alt="" className="positionImg1" /></div>
                                                   
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link  to ="/the-egoras-dollar" className="subSectionB_SidebarA">The Egoras Dollar(EUSD)</Link></li>
                        
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/egoras-governance-token" className="subSectionB_SidebarA"> Egoras Governance Token(EGR)</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/summary" className="subSectionB_SidebarA"> Summary</Link></li>                      
                        </ul>

                    </div>
                </div>

                 < div  className="subSectionC">
                   <div className="subSectionC_Line"></div>
                   <h2 className="subSectionC_H2" data-aos="fade-up" data-aos-duration="3000">Introduction</h2>
                   <div className=" aboutEgoras_P" data-aos="fade-up" data-aos-duration="3000"> It is estimated that over two billion people around the globe are unbanked and without any access to financial services to meet their daily needs. Egoras protocol (“the protocol” or “the project”) attempts to be part of the solution to this problem by expanding financial access and inclusion to unserved or underserved communities. The protocol achieves its mission by on-chain Governance and a Self-Funding Treasury system. The protocol serves as a source of capital for the unserved or underserved communities. In addition, the project seeks to improve the quality of financial services as well as lower the cost of the services in these communities around the globe. This docs, therefore explores how Egoras protocol can solve real-life problems such as helping people start businesses, supporting small and medium-sized enterprises access funds for expansion; and enabling families to attend to the needs while maintaining good collateralization on-chain.</div>
                      <div className = "aboutEgorasImg" data-aos="fade-up" data-aos-duration="3000" style={{width:'80%'}}><img src="img/fans401.png" alt=" " className="EGOimg prince"  width="100%"/></div>
                         <div className = "aboutEgorasImg" data-aos="fade-up" data-aos-duration="3000" style={{width:'80%'}}><img src="img/fans31.png" alt=" " className="EGOimg" width="100%" /></div>
                          <div className=" aboutEgoras_P" data-aos="fade-up" data-aos-duration="3000">These docs are a comprehensive guide to the Egoras Microfinance protocol, based on the Egoras Whitepaper. The protocol codebase is hosted on <a href="https://github.com/EgorasMarket" style={{color:'#229e54',fontSize:'16px'}}>Github</a>. </div>
                           <div className=" aboutEgoras_P" data-aos="fade-up" data-aos-duration="3000">Please join the <a href="https://t.me/egorasmarket" style={{color:'#229e54',fontSize:'16px'}}>Egoras telegram community</a>; our team, and members of the community, look forward to helping you build an application on Egoras microfinance protocol. Your questions help us improve, so please don't hesitate to ask if you can't find what you are looking for here. </div>
                   <div className="subSectionC_Card" data-aos="fade-up" data-aos-duration="3000">
                       <div className="subSectionC_Next">Next</div>
                       <div className="cardText">what problem is Egoras<br/>trying to solve? <Link to="/documentation1"><ArrowForward className="SubForwardIcon"/></Link></div>
                   </div>
                 </div>

                 <div className=""><img src="img3.svg" alt="" className="positionImg2" /></div>
            </div>
            


        </div>
    )
}

export default Documentation;
