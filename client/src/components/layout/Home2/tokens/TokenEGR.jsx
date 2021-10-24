import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import "../../../../css/token.css";

const data03 = [
  { name: " Private Sale", value: 10000, fill: "#5acd88" },
  { name: " Public Sale", value: 1567, fill: "#229e54" },
  { name: "Team", value: 3398, fill: "#e4a788" },
];
const data = [
  {
    name: "Jan",
    Team: 4000,
    Private_sale: 2400,
    Public_sale: 1500,
  },
  {
    name: "Feb",
    Team: 3000,
    Private_sale: 1398,
    Public_sale: 2210,
  },
  {
    name: "Mar",
    Team: 2000,
    Private_sale: 9800,
    Public_sale: 2290,
  },
  {
    name: "Apr",
    Team: 2780,
    Private_sale: 3908,
    Public_sale: 2000,
  },
  {
    name: "May",
    Team: 1890,
    Private_sale: 4800,
    Public_sale: 2181,
  },
  {
    name: "Jun",
    Team: 2390,
    Private_sale: 3800,
    Public_sale: 2500,
  },
  {
    name: "Jul",
    Team: 3490,
    Private_sale: 4300,
    Public_sale: 2100,
  },
  {
    name: "Aug",
    Team: 3490,
    Private_sale: 4300,
    Public_sale: 2100,
  },
  {
    name: "Sep",
    Team: 3490,
    Private_sale: 4300,
    Public_sale: 2100,
  },
  {
    name: "Oct",
    Team: 3490,
    Private_sale: 4300,
    Public_sale: 2100,
  },
  {
    name: "Nov",
    Team: 3490,
    Private_sale: 4300,
    Public_sale: 2100,
  },
  {
    name: "Dec",
    Team: 3490,
    Private_sale: 4300,
    Public_sale: 2100,
  },
];

const data01 = [
  { name: "Public Sale", value: 2000, fill: "#229e54" },
  { name: "Private Sale", value: 100, fill: "#e4a788" },
  { name: "Seed Sale", value: 600, fill: "#82ca9d" },
];

const TokenEGR = () => {
  return (
    <div>
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* Tokens Section Start */}
      <section className="tokenSection" id="token">
        <div className="container">
          <div
            className="tokenCardflex"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img src="/egoras-favicon.svg" alt="" className="mainTokenflex" />
            <div className="tokenCardflex-txt">EGR Token Analysis.</div>
          </div>
          <div className="row margin">
            <div class="col-md-3 mx-md-0 px-md-0">
              <div class="stats-widget">
                <MonetizationOnIcon className="naira-icon" />
                <div class="stats-label">Price</div>
                <div class="stats-value">$0.0181</div>
              </div>
            </div>
            <div class="col-md-3 mx-md-0 px-md-0">
              <div class="stats-widget">
                <AssessmentIcon className="naira-icon" />
                <div class="stats-label">Market Cap</div>
                <div class="stats-value">$779,384</div>
              </div>
            </div>
            <div class="col-md-3 mx-md-0 px-md-0">
              <div class="stats-widget">
                <AutorenewIcon className="naira-icon" />
                <div class="stats-label">Circulating Supply</div>
                <div class="stats-value">
                  43,071,715.00
                  <div class="egc-label">EGR</div>
                </div>
              </div>
            </div>
            <div class="col-md-3 mx-md-0 px-md-0">
              <div class="stats-widget">
                <img
                  src="/img/stacked-coins.svg"
                  alt=""
                  className="naira-icon"
                />
                <div class="stats-label">Total Supply</div>
                <div class="stats-value">
                  100,000,000
                  <div class="egc-label">EGR</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src="/img/token-dots.svg" alt="" className="tokenDots" />
        <img src="/img/blur-drop.png" alt="" className="blurDrop" />
      </section>
      {/* Tokens Section End */}

      <section className="schedule-section">
        <div className="container">
          <div className="row">
            <div class="col-lg-6">
              <h3 className="chartTitile">Token Unlock Schedule</h3>
              <div class="desc">
                On January 4, 2020, we released our projected token release
                schedule. This can also be found in{" "}
                <a
                  href="https://research.binance.com/projects/Egoras"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Binance's Research Report
                </a>{" "}
                on Egoras. Note that actual circulating supply may differ from
                modeled circulating supply as time passes. It is our intention
                to decrease actual circulating supply when compared to modeled
                circulating supply whenever possible.
              </div>
            </div>
            <div class="col-lg-6 mt-5 mt-lg-0">
              <h3 className="chartTitile">
                Modeled vs. actual token release schedule
              </h3>
              <div class="desc" id="supplyDataEl">
                Currently, EGR's actual circulating supply is 356,077,948.
                Modeled circulating supply was projected at 421,000,000. The
                difference is 64,922,052 tokens (15%).
              </div>
            </div>
          </div>

          <div className="row">
            <div class="col-lg-6">
              <div className="chart mt-5">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 0,
                      right: 10,
                      left: 0,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="Team"
                      stroke="#e4a788"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="Private_sale"
                      stroke="#3981ee"
                    />
                    <Line
                      type="monotone"
                      dataKey="Public_sale"
                      stroke="#229e54"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div class="col-lg-6 mt-5 mt-lg-0">
              <div className="chart mt-5">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 0,
                      right: 10,
                      left: 0,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />

                    <Line
                      type="monotone"
                      dataKey="Team"
                      stroke="#e4a788"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="Private_sale"
                      stroke="#3981ee"
                    />
                    <Line
                      type="monotone"
                      dataKey="Public_sale"
                      stroke="#229e54"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chart-review-section">
        <div className="container">
          <div className="row">
            <div class="col-lg-6">
              <h3 className="staked-title">Staked amount by duration</h3>
              <div class="desc">
                Staked EGR is included as part of the circulating supply. You
                can <a href="https://www.egoras.com/stake">stake your EGR</a> on
                egoras.com
              </div>
              <div class="row staked-chart">
                <div className="col-md-6">
                  <PieChart width={100} height={200}>
                    <Pie
                      dataKey="value"
                      data={data01}
                      cx={20}
                      cy={100}
                      innerRadius={60}
                      outerRadius={80}
                    />
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </div>

                <div class="col">
                  <h3 className="chartTitile">Token Unlock Schedule</h3>
                  <div class="desc">
                    On January 4, 2020, we released our projected token release
                    schedule. This can also be found in{" "}
                    <a
                      href="https://research.binance.com/projects/Egoras"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Binance's Research Report
                    </a>{" "}
                    on Egoras. Note that actual circulating supply may differ
                    from modeled circulating supply as time passes. It is our
                    intention to decrease actual circulating supply when
                    compared to modeled circulating supply whenever possible.
                  </div>
                </div>
              </div>
              <div class="locked-token-widget">
                <div class="title">Total number of staked tokens</div>
                <div class="value">
                  88,341,092
                  <div class="EGR-label">EGR</div>
                </div>
              </div>
              <div class="subtitle2 mb-0">Last updated 16 minutes ago</div>
            </div>
            <div class="col-lg-6 mt-5 mt-lg-0">
              <h3 className="staked-title">
                Wallets excluded from circulating supply
              </h3>
              <div class="desc">
                Circulating supply is calculated as the total supply minus the
                EGR balances of the following wallets:
              </div>
              <div class="reserved-wallets mb-0">
                <div class="reserved-wallet">
                  <div class="wallet-name">Foundation Reserves</div>
                  <a
                    class="wallet-link"
                    href="https://etherscan.io/address/0xbe2ab3d3d8f6a32b96414ebbd865dbd276d3d899"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="wallet-address d-none">
                      0xbe2ab3d3d8f6a32b96414ebbd865dbd276d3d899
                    </div>
                    <div class="wallet-address d-md-none">0xbe2a...d899</div>
                    <div class="wallet-address d-none d-md-flex">
                      0xbe2ab3d3d8f6a32b96414ebbd865dbd276d3d899
                    </div>
                  </a>
                  <div class="wallet-balance">623,680,937 EGR</div>
                </div>

                <div class="reserved-wallet">
                  <div class="wallet-name">Team Distribution</div>
                  <a
                    class="wallet-link"
                    href="https://etherscan.io/address/0xcaa5ef7abc36d5e5a3e4d7930dcff3226617a167"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="wallet-address d-none">
                      0xcaa5ef7abc36d5e5a3e4d7930dcff3226617a167
                    </div>
                    <div class="wallet-address d-md-none">0xcaa5...a167</div>
                    <div class="wallet-address d-none d-md-flex">
                      0xcaa5ef7abc36d5e5a3e4d7930dcff3226617a167
                    </div>
                  </a>
                  <div class="wallet-balance">4,001,319 EGR</div>
                </div>

                <div class="reserved-wallet">
                  <div class="wallet-name">Investor Distribution</div>
                  <a
                    class="wallet-link"
                    href="https://etherscan.io/address/0x3da5045699802ea1fcc60130dedea67139c5b8c0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="wallet-address d-none">
                      0x3da5045699802ea1fcc60130dedea67139c5b8c0
                    </div>
                    <div class="wallet-address d-md-none">0x3da5...b8c0</div>
                    <div class="wallet-address d-none d-md-flex">
                      0x3da5045699802ea1fcc60130dedea67139c5b8c0
                    </div>
                  </a>
                  <div class="wallet-balance">4,506,951 EGR</div>
                </div>

                <div class="reserved-wallet">
                  <div class="wallet-name">Distribution Staging</div>
                  <a
                    class="wallet-link"
                    href="https://etherscan.io/address/0x12d7ef3c933d091210cd931224ead45d9cfddde0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="wallet-address d-none">
                      0x12d7ef3c933d091210cd931224ead45d9cfddde0
                    </div>
                    <div class="wallet-address d-md-none">0x12d7...dde0</div>
                    <div class="wallet-address d-none d-md-flex">
                      0x12d7ef3c933d091210cd931224ead45d9cfddde0
                    </div>
                  </a>
                  <div class="wallet-balance">9,900,000 EGR</div>
                </div>

                <div class="reserved-wallet">
                  <div class="wallet-name">Partnerships</div>
                  <a
                    class="wallet-link"
                    href="https://etherscan.io/address/0xbc0722eb6e8ba0217aeea5694fe4f214d2e53017"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="wallet-address d-none">
                      0xbc0722eb6e8ba0217aeea5694fe4f214d2e53017
                    </div>
                    <div class="wallet-address d-md-none">0xbc07...3017</div>
                    <div class="wallet-address d-none d-md-flex">
                      0xbc0722eb6e8ba0217aeea5694fe4f214d2e53017
                    </div>
                  </a>
                  <div class="wallet-balance">1,832,845 EGR</div>
                </div>

                <div class="reserved-wallet">
                  <div class="wallet-name">Ecosystem Growth</div>
                  <a
                    class="wallet-link"
                    href="https://etherscan.io/address/0x2d00c3c132a0567bbbb45ffcfd8c6543e08ff626"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="wallet-address d-none">
                      0x2d00c3c132a0567bbbb45ffcfd8c6543e08ff626
                    </div>
                    <div class="wallet-address d-md-none">0x2d00...f626</div>
                    <div class="wallet-address d-none d-md-flex">
                      0x2d00c3c132a0567bbbb45ffcfd8c6543e08ff626
                    </div>
                  </a>
                  <div class="wallet-balance">0 EGR</div>
                </div>
              </div>
            </div>
          </div>

          <div className="stake-banner-blue d-flex flex-column flex-lg-row justify-content-center align-items-center">
            <div class="coins-icon">
              <img class="EGR-coin" src="/egoras-favicon.svg" />
              <img class="EGR-coin" src="/egoras-favicon.svg" />
            </div>
            <div class="stake-content d-flex flex-column">
              <h1>Participate in governance</h1>
              <p>Use your EGR to vote and issue proposals</p>
            </div>
            <button
              class="btn-governance ml-lg-auto"
              href="https://vote.Egorasprotocol.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vote now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TokenEGR;
