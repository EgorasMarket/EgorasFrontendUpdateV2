import React from 'react';
import './documentation.css';
import {Link} from 'react-router-dom';
 import {Search,ArrowForward,ArrowBack} from '@material-ui/icons';

const Documentation4 = () => {
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
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/loan-application" className="subSectionB_SidebarA"> Loan Application</Link></li> 
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/approve-company" className="subSectionB_SidebarA">Approve Company</Link></li>
                           <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/repay-loan" className="subSectionB_SidebarA">Repay Loan  </Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to ="/reward-voter" className="subSectionB_SidebarA"> Reward Voters</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link Link to="/distribute-interest-to-egr-holders" className="subSectionB_SidebarA"> Distribute Interest To Egr Holders</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/governance-vote" className="subSectionB_SidebarA"> Governance Vote</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/validate-governance-request" className="subSectionB_SidebarA"> Validate Governance Request</Link></li>
                            <li className="subSectionB_Sidebar_Link add" data-aos="fade-right" data-aos-duration="3000">EGORAS TREASURY SYSTEM</li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/how-egoras-treasury-work" className="subSectionB_SidebarA"> How Egoras Treasury Work</Link></li> 
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/block-rewards" className="subSectionB_SidebarA"> Block Rewards</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/how-is-the-treasury-capitalized" className="subSectionB_SidebarA">How is the Treasury capitalized?</Link></li> 
                            <li className="subSectionB_Sidebar_Link add" data-aos="fade-right" data-aos-duration="3000">EGORAS TOKEN ECONOMY</li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/introduction" className="subSectionB_SidebarA"> Introduction</Link></li> 
                                                     <div className=""><img src="img.svg" alt="" className="positionImg" /></div>
                                                      <div className=""><img src="img2.svg" alt="" className="positionImg1" /></div>
                                                   
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/the-egoras-dollar" className="subSectionB_SidebarA">The Egoras Dollar(EUSD)</Link></li>
                        
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/egoras-governance-token" className="subSectionB_SidebarA"> Egoras Governance Token(EGR)</Link></li>
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link to="/summary" className="subSectionB_SidebarA"> Summary</Link></li>                      
                        </ul>

                    </div>
                </div>

                 < div  className="subSectionC">
                   <div className="subSectionC_Line"></div>
                   <div className="aboutEgoras_H" data-aos="fade-up" data-aos-duration="3000">Loan Approval Governance </div>
                    <div className=" aboutEgoras_P" data-aos="fade-up" data-aos-duration="3000">It is to be noted that the current microfinance sector managed by NGOs and microfinance bank approve loans for borrowers after proper due diligence have been carried out, but the Egoras protocol uses a crowdsourced knowledge to approve or decline loans. The people vote if the loans should be approved or declined and the people also share in the risk of the loans. </div>
                    <div className=" aboutEgoras_P" data-aos="fade-up" data-aos-duration="3000">Egoras holders approve or decline any loan within 24hrs of such loan request. In other words, the governance process to approve or decline any loan takes up to 24hrs. All data are provided for Egorasholders to make the correct governance decisions and the votes are determined by the voting weight (vote weight is determined by the amount of Egorastoken locked in the microfinance smart-contract). </div>
                    <div className=" aboutEgoras_P" data-aos="fade-up" data-aos-duration="3000">Egoras holders share in the risk of the loans and they are rewarded for their participation in the governance process by receiving all interest accruing from the loans. </div>
                    <div className="loansFee"  data-aos="fade-up" data-aos-duration="3000">Loan Approval From Egoras Web Interface</div>
                    <div className="loansFee1"  data-aos="fade-up" data-aos-duration="3000">STEP 1</div>
                    <div  className="loansFee2"  data-aos="fade-up" data-aos-duration="3000">Visit <span>Egoras.com</span></div>
                    <div className="loansFee1"  data-aos="fade-up" data-aos-duration="3000">STEP 2</div>
                    <div className="loansFee2"  data-aos="fade-up" data-aos-duration="3000">Click <span style={{fontWeight:'bold',color:'#000',fontSize:'16px'}}>[Connect Wallet]</span> and select a wallet supplier to connect your wallet.</div>
                    <div style={{width:'80%',marginBottom:'50px'}} data-aos="fade-up" data-aos-duration="3000"><img src="img/fans5.png" width="100%" /></div>
                    <div className="loansFee1"  data-aos="fade-up" data-aos-duration="3000">STEP 3</div>
                    <div className="loansFee2" data-aos="fade-up" data-aos-duration="3000">Connect to Binance smart chain</div>
                    <div style={{width:'80%',marginBottom:'50px'}} data-aos="fade-up" data-aos-duration="3000"><img src="img/fans40.png"  width="100%" /></div>
                    <div  className="loansFee1"  data-aos="fade-up" data-aos-duration="3000">STEP 4</div>
                    <div className="loansFee2" data-aos="fade-up" data-aos-duration="3000">Click <span style={{fontSize:'16px',fontWeight:'bold',color:'#000'}}> [Explore]</span></div>
                    <div style={{width:'80%',marginBottom:'50px'}} data-aos="fade-up" data-aos-duration="3000"><img src="img/fans82.png"  width="100%"/></div>
                    <div className="loansFee1"  data-aos="fade-up" data-aos-duration="3000">STEP 5</div>
                    <div className="loansFee2" data-aos="fade-up" data-aos-duration="3000">Click <span style={{fontSize:'16px',fontWeight:'bold',color:'#000'}}>[Agriculture/Retail/women/Single Parents/All Loans]</span></div>
                    <div style={{width:'80%',marginBottom:'50px'}} data-aos="fade-up" data-aos-duration="3000"><img src="img/fans54.png" alt=""  width="100%" /></div>
                    <div className="loansFee1"  data-aos="fade-up" data-aos-duration="3000">STEP 6</div>
                    <div className="loansFee2" data-aos="fade-up" data-aos-duration="3000">Click <span style={{fontSize:'16px',fontWeight:'bold',color:'#000'}}>[Any Loan]</span></div>
                    <div style={{width:'80%',marginBottom:'50px'}} data-aos="fade-up" data-aos-duration="3000"><img src="img/fans131.png" alt="" width="100%" /></div>
                    <div  className="loansFee"  data-aos="fade-up" data-aos-duration="3000">Loan Approval From Egoras Smart Contract</div>
                    <div className="loansFee2 fased" data-aos="fade-up" data-aos-duration="3000">Approve loan function sends an approval  (True/False) request into the protocol.</div>
                    <div className="fune"> <div data-aos="fade-right" data-aos-duration="3000">function approveLoan(uint _loanID) external;</div></div>
                    <div className="loansFee2" data-aos="fade-right" data-aos-duration="3000"><span style={{fontWeight:'bold',color:'#000',fontSize:'16px'}}> _loanID : </span>The unique identifier of every loan emitted from Egoras Microfinance protocol.</div>
                    <div className="Solidity4" data-aos="fade-up" data-aos-duration="3000">Solidity</div>
                    <div className="Solidity6">
                        <div data-aos="fade-right" data-aos-duration="3000"> CEGORAS egoras = CEGORAS(0x7a24C....);</div>
                        <div data-aos="fade-right" data-aos-duration="3000">require(egoras.approveLoan(“20"), "unable to approve loan");</div>
                    </div>
                    <div className="Solidity4"  data-aos="fade-up" data-aos-duration="3000">Web 3</div>
                    <div className="Solidity6">
                        <div  data-aos="fade-right" data-aos-duration="3000" >const instance = await new web3.eth.Contract(abi, address)</div>
                        <div  data-aos="fade-right" data-aos-duration="3000"> {`await instance.methods.approveLoan("20").send({from: 0xMyAccount});`}</div>
                    </div>

                   <div className="aboutEgoras_card">
                   <div className="subSectionC_Card" data-aos="fade-up" data-aos-duration="3000">
                       <div className="subSectionC_Next add">Precious</div>
                       <div className="cardText"><Link to="/lending-partner-governance"> <ArrowBack className="SubForwardIcon"/></Link> <div style={{textAlign:'right'}}>Lending Partner<br/>Governance</div> </div>
                   </div>
                     <div className="subSectionC_Card Card12" data-aos="fade-up" data-aos-duration="3000">
                       <div className="subSectionC_Next">Next</div>
                       <div className="cardText"><div >Interest Rate<br/>Governance </div><Link to="/interest-rate-governance"><ArrowForward className="SubForwardIcon"/></Link></div>
                   </div>
                   </div>


                 </div>

                 <div className=""><img src="img3.svg" alt="" className="positionImg2" /></div>
            </div>
            


        </div>
    )
}

export default Documentation4;
