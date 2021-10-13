import React from 'react';
import {Link} from 'react-router-dom';
import './documentation.css';
import {Search,ArrowForward,ArrowBack} from '@material-ui/icons';

const Documentation3 = () => {

    // const Img = {bab:'cattle.jpg'}
    const hides4 =()=>{
        document.getElementById('faceMe1').style.display="block";
    }

    const hides5 =()=>{
        document.getElementById('faceMe1').style.display="none";
        // document.getElementById('faceMe1').style.display="block";
    }
    
    const hides8 =()=>{
        document.getElementById('faceMe6').style.display="none";
        // document.getElementById('faceMe1').style.display="block";
    }
    
    const hides10 =()=>{
        document.getElementById('faceMe6').style.display="block";
        // document.getElementById('faceMe1').style.display="block";
    }


   
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
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"><Link  to ="/loan-application" className="subSectionB_SidebarA"> Loan Application</Link></li> 
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
                            <li className="subSectionB_Sidebar_Link" data-aos="fade-right" data-aos-duration="3000"> <Link to ="/summary" className="subSectionB_SidebarA"> Summary</Link></li>                      
                        </ul>

                    </div>
                </div>

                 < div  className="subSectionC">
                   <div className="subSectionC_Line"></div>
                   <div className="aboutEgoras_H" data-aos="fade-up"  data-aos-duration="4000">Lending Partner Governance </div>
                     <div className=" aboutEgoras_P" data-aos="fade-up" data-aos-duration="3000">Microfinance banks, NGOs or any lending firm can validate borrowers or small business owners and work with Egoras to distribute the loans to small businesses or any borrower that wants to borrow funds from Egoras. These microfinance banks or organizations are curated by the people and people get to decide which organization can get access to Egoras treasury system. When a user requires a loan, the user will contact a microfinance bank or organization that have been approved by Egoras token holders to validate the user and post the loans on Egoras protocol. This organization validates the user’s information. The kind of business and the purposes of the loans are also uploaded by the validating organizations. </div>
                    <div className="lendingPartner" data-aos="fade-up" data-aos-duration="3000"> Lending partner application from Egoras Interface</div>
                      <div className="step1" data-aos="fade-up" data-aos-duration="3000">STEP 1</div>
                      <div style={{marginBottom:'15px'}} data-aos="fade-up" data-aos-duration="3000">Visit<Link to="egoras.com" style={{color:'#229e54'}}> Egoras.com</Link></div>
                      <div className="step1" data-aos="fade-up" data-aos-duration="3000">STEP 2</div>
                      <div style={{marginBottom:'25px'}} data-aos="fade-up" data-aos-duration="3000">Click <span style={{fontWeight:'600'}}> [Connect Wallet]</span> and select a wallet supplier to connect your wallet.</div>
                      <div style={{width:'80%',marginBottom:'20px'}} data-aos="fade-up" data-aos-duration="3000"> <img src="img/fan.jpg" width="100%" className="imgZoom" onClick={hides4}/></div>
                      <div className=" aboutEgoras_P" data-aos="fade-up" data-aos-duration="3000">Egoras protocol has included MetaMask, WalletConnect, Ledger, Trezor, Fortmatic and Portis. More wallets will be added and updated later.</div>
                      <div  className="step1" data-aos="fade-up" data-aos-duration="3000">STEP 3</div>
                      <div style={{marginBottom:'30px'}}  data-aos="fade-up" data-aos-duration="3000">click <span style={{fontWeight:'600'}}>[Create Partner with us]</span></div>
                      <div style={{width:'80%',marginBottom:'50px'}} data-aos="fade-up" data-aos-duration="3000"><img src="/img/fans3.jpg" width="100%" id="deptP" onClick={hides10}/></div>
                      <div className=" aboutEgoras_P" data-aos="fade-up" data-aos-duration="3000">Fill the application form and then click on submit. EGR holders will either vote to approve the lending partner or decline the lending partner</div>
                      <div className="step2" data-aos="fade-up" data-aos-duration="3000">Lending partner application from Egoras Smart Contract</div>
                      <div className=" aboutEgoras_P" data-aos="fade-up" data-aos-duration="3000">The Loan company application function sends an application request into the protocol, this application request consists of the name of the microfinance banks, NGOs or the lending partner and also the functions contains the msg.sender address.</div>
                      <div className="stringCompany" ><div data-aos="fade-right" data-aos-duration="3000">function registerLoanCompany(string calldata companyName) external;</div></div>
                      <div className=" aboutEgoras_P2" data-aos="fade-up" data-aos-duration="3000"><span className="companyName">companyName</span> : <span>The name of the microfinance banks or NGOs applying to partner with EgorasMicrofinance protocol.</span></div>
                      <div className=" aboutEgoras_P" data-aos="fade-up" data-aos-duration="3000"><span className="companyName">msg.sender </span>: <span> The msg.sender becomes the owner of the company , if approved.</span></div>
                      <div style={{marginBottom:'20px',fontWeight:'bold',fontSize:'24px'}} data-aos="fade-right" data-aos-duration="3000">Solidity</div>
                      <div className="requireMas">
                          <div data-aos="fade-right" data-aos-duration="3000" id="fada"><span style={{marginRight:'10px'}}>1 </span>  CEGORAS egoras = CEGORAS(0x7a24C....);</div>
                          <div data-aos="fade-right" data-aos-duration="3000" id="fada"><span style={{marginRight:'10px'}}>2 </span> require(egoras.registerLoanCompany(“Storaji”), "unable to create company")</div>
                      </div>
                      <div className="web1" data-aos="fade-up" data-aos-duration="3000">Web3</div>
                      <div className="requireMas">
                          <div  data-aos="fade-right" data-aos-duration="3000" id="fada"><span style={{marginRight:'10px'}}>1</span> const instance = await new web3.eth.Contract(abi, address)</div>
                          <div  data-aos="fade-right" data-aos-duration="3000" id="fada" ><span style={{marginRight:'10px'}}>2</span> {`await instance.methods.registerLoanCompany("storaji").send({from: 0xMyAccount})`}</div>
                      </div>
                   <div className="aboutEgoras_card">
                   <div className="subSectionC_Card" data-aos="fade-up" data-aos-duration="3000">
                       <div className="subSectionC_Next add">Precious</div>
                       <div className="cardText"><Link to ="/egoras-decentralized-autonomous-organization"> <ArrowBack className="SubForwardIcon"/></Link><div style={{textAlign:'right'}}>Egoras decentralized<br/>autonomous organization</div> </div>
                   </div>
                     <div className="subSectionC_Card Card12" data-aos="fade-up" data-aos-duration="3000">
                       <div className="subSectionC_Next">Next</div>
                       <div className="cardText"><div >Loan Approval<br/>Governance </div><Link to="/loan-approval-governance"><ArrowForward className="SubForwardIcon"/></Link></div>
                   </div>
                   </div>


                 </div>

                 <div className=""><img src="img3.svg" alt="" className="positionImg2" /></div>
            </div>
            


       <div className="imgZoom2" id="faceMe1" >
           <img src="img/fan.jpg "  className="zoom2" id="faceMe2" onClick={hides5} onScroll={hides5} />
       </div>

       <div className="imgZoom2" id="faceMe6" >
           <img src="img/fans3.jpg "  className="zoom2" id="faceMe4" onClick={hides8}  />
       </div>

        </div>
    )
}

export default Documentation3;
