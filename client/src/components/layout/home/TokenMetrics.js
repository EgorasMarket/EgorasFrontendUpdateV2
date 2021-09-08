import React from 'react';

import { VictoryPie } from "victory-pie";
import { PieChart } from 'react-minimal-pie-chart';
import Footer from '../parts/Footer';

const myData = [
    { x: "45%", y: 40 },
    { x: "27%", y: 20 },
    { x: "10%", y: 10 },
    { x: "8%", y: 8 },
    { x: "5%", y: 7 },
    { x: "3%", y: 7 },
    { x: "1%", y: 4 },
    { x: "1%", y: 4 },
];

const myData2 = [
    { x: "50%", y: 50 },
    { x: "20%", y: 20 },
    { x: "15%", y: 15 },
    { x: "10%", y: 10 },
    { x: "5%", y: 5 },
   
];

const TokenMetrics = () => {
    return (
        <div className='home-body'>
            <br />
            <br />
            <br />
            
            <div className='container my-5'>
                <div className='mb-4'>
                    <h3 className='text-black'>EGORAS Token Metrics</h3>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='text-center token-card mt-md-5 mt-0'>
                            <h4 className='text-black'>Summary</h4>
                            <div className='t-inner'>
                                <p>Token Name: EGORAS RIGHTS TOKEN</p>
                                <p>Total Supply: 100,000,000</p>
                                <p>Private Sale A: $900,000</p>
                                <p>Private Sale B: $500,000</p>
                                <p>Public Sale: $200,000</p>
                                <p>Initial Marketcap: $415,000</p>
                                <p>Total Diluted Marketcap: $10M</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className='token-card mt-md-0 mt-3'>
                            <h4 className='text-center text-black'>Sales Stages</h4>
                            <div className='mt-2'>
                                <div className='table-responsive'>
                                    <table className="table metrics-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    <span className='th-bg'>Stage</span>
                                                </th>
                                                <th scope="col">
                                                    <span className='th-bg'>Price</span>
                                                </th>
                                                <th scope="col">
                                                    <span className='th-bg'>Amount raised</span>
                                                </th>
                                                <th scope="col">
                                                    <span className='th-bg'>Market cap</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='custom-tr'>
                                                <th scope="row">Private A</th>
                                                <td>$0.045</td>
                                                <td>$900k</td>
                                                <td>$90,000</td>
                                            </tr>
                                            <tr className='custom-tr'>
                                                <th scope="row">Private B</th>
                                                <td>$0.065</td>
                                                <td>$500k</td>
                                                <td>$215,000</td>
                                            </tr>
                                            <tr className='custom-tr'>
                                                <th scope="row">Public Sale</th>
                                                <td>$0.085</td>
                                                <td>$200k</td>
                                                <td>$415,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='row'>
                    <div className='col-md-10 mx-auto'>
                        <div className='token-card mt-5'>
                            <h4 className='text-center text-black'>Vesting Periods</h4>
                            <div className='mt-2'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='d-flex justify-content-between vesting'>
                                            <p className='mt-2'>Private A</p>
                                            <p className='text-right'>10% at listing, <br /> then unlocks over 6months</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='d-flex justify-content-between vesting'>
                                            <p className='mt-2'>Private B</p>
                                            <p className='text-right'>25% at listing, <br /> then unlocks over 3months</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='d-flex justify-content-between vesting py-4'>
                                            <p className=''>Public Sale</p>
                                            <p className='text-right'>100% at listing</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='d-flex justify-content-between vesting'>
                                            <p className='mt-2'>Insurance</p>
                                            <p className='text-right'>Locked forever, to released <br /> through governance <br /> votes for bad debt</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='d-flex justify-content-between vesting'>
                                            <p className='mt-2'>Team</p>
                                            <p className='text-right'>24months lockup, <br /> release 25% after 12months</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='d-flex justify-content-between vesting'>
                                            <p className='mt-2'>Advisors</p>
                                            <p className='text-right'>12months lockup, <br /> release 25% after 6months</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='d-flex justify-content-between vesting'>
                                            <p className=''>Research</p>
                                            <p className='text-right'>Unlocks after 24months</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='d-flex justify-content-between vesting'>
                                            <p className=''>voting Rewards</p>
                                            <p className='text-right'>30 APR to first voters</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='d-flex justify-content-between vesting'>
                                            <p className=''>Exchanges <br />and market <br /> making</p>
                                            <p className='text-right mt-2'>100% at listing</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='text-center token-card mt-5'>
                            <h4 className='text-black'>Token Allocations</h4>
                            <div className='row'>
                                <div className='col-md-8'>
                                    <VictoryPie
                                        data={myData}
                                        colorScale={["#a3e24d", "#7cde53", "#65c404", "#49b03d", "#2c9e01", "#226907", "#175200", "#093b1b"]}
                                        radius={100}
                                    />
                                </div>
                                <div className='col-md-4'>
                                    <div className='text-left mt-md-4 mt-0'>
                                        <p className='mb-1'><div className='c-spot d-inline-block' style={{background: '#a3e24d'}}></div> Insurance</p>
                                        <p className='mb-1'><div className='c-spot d-inline-block' style={{background: '#7cde53'}}></div> Private Sale</p>
                                        <p className='mb-1'><div className='c-spot d-inline-block' style={{background: '#65c404'}}></div> Team</p>
                                        <p className='mb-1'><div className='c-spot d-inline-block' style={{background: '#49b03d'}}></div> Research</p>
                                        <p className='mb-1'><div className='c-spot d-inline-block' style={{background: '#2c9e01'}}></div> Voting Rewards</p>
                                        <p className='mb-1'><div className='c-spot d-inline-block' style={{background: '#226907'}}></div> Advisors</p>
                                        <p className='mb-1'><div className='c-spot d-inline-block' style={{background: '#175200'}}></div> Public Sale</p>
                                        <p className='mb-1'><div className='c-spot d-inline-block' style={{background: '#093b1b'}}></div> Exchange and Market Making</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='text-center token-card mt-5'>
                            <h4 className='text-black'>Use of Sales Proceeds</h4>
                            
                            <div className='row'>
                                <div className='col-md-8'>
                                    <VictoryPie
                                        data={myData2}
                                        colorScale={["#a3e24d", "#7cde53", "#65c404", "#49b03d", "#2c9e01"]}
                                        radius={100}
                                    />
                                </div>
                                <div className='col-md-4'>
                                    <div className='text-left mt-md-5 mt-0'>
                                        <p className='mb-1'><div className='c-spot d-inline-block' style={{background: '#a3e24d'}}></div> Loan</p>
                                        <p className='mb-1'><div className='c-spot d-inline-block' style={{background: '#7cde53'}}></div> Development</p>
                                        <p className='mb-1'><div className='c-spot d-inline-block' style={{background: '#65c404'}}></div> Exchange listings</p>
                                        <p className='mb-1'><div className='c-spot d-inline-block' style={{background: '#49b03d'}}></div> Operations</p>
                                        <p className='mb-1'><div className='c-spot d-inline-block' style={{background: '#2c9e01'}}></div> Branding & Marketing</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TokenMetrics
