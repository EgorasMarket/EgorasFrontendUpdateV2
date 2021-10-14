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

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
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
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
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
          <div className="row">
            <div class="col-md-3 mx-md-0 px-md-0">
              <div class="stats-widget">
                <img src="/img/naira-icon.svg" className="naira-icon" />
                <div class="stats-label">Price</div>
                <div class="stats-value">$0.896079</div>
              </div>
            </div>
            <div class="col-md-3 mx-md-0 px-md-0">
              <div class="stats-widget">
                <img src="/img/naira-icon.svg" className="naira-icon" />
                <div class="stats-label">Market Cap</div>
                <div class="stats-value">$319,073,971</div>
              </div>
            </div>
            <div class="col-md-3 mx-md-0 px-md-0">
              <div class="stats-widget">
                <img src="/img/naira-icon.svg" className="naira-icon" />
                <div class="stats-label">Circulating Supply</div>
                <div class="stats-value">
                  356,077,948
                  <div class="egc-label">EGR</div>
                </div>
              </div>
            </div>
            <div class="col-md-3 mx-md-0 px-md-0">
              <div class="stats-widget">
                <img src="/img/naira-icon.svg" className="naira-icon" />
                <div class="stats-label">Total Supply</div>
                <div class="stats-value">
                  1,000,000,000
                  <div class="egc-label">EGR</div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="tokenArea">
            <div className="tokenCard1texts">
              <h1 className="tokenCard1Heading">
                Egoras Right (EGR) <ArrowForwardIcon className="arrowIcon " />
              </h1>
              <p className="tokenCard1Para">
                EGR is the fluctuating token of egoras protocol and it plays a
                role in
                <br /> stabilizing EGS and the governance of the loan protocol.
                EGR is required
                <br /> for paying the interest and this means that as the
                adoption and demand
                <br /> for the Egoras Credit system increases, there will be
                additional demand
                <br /> for EGR.
              </p>
            </div>
            <div
              className="tokenCard1"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img src="/img/token-right.svg" alt="" className="mainToken" />
            </div>
          </div> */}
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
                  href="https://research.binance.com/projects/origin"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Binance's Research Report
                </a>{" "}
                on Origin. Note that actual circulating supply may differ from
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
                Currently, OGN's actual circulating supply is 356,077,948.
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
                      top: 5,
                      right: 30,
                      left: 20,
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
                      top: 5,
                      right: 30,
                      left: 20,
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
                Staked OGN is included as part of the circulating supply. You
                can <a href="https://www.egoras.com/stake">stake your EGR</a> on
                egoras.com
              </div>
              <div class="row staked-chart">
                <div className="col-md-3">
                  <PieChart width={1000} height={200}>
                    <Pie
                      dataKey="value"
                      data={data01}
                      cx={75}
                      cy={100}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#82ca9d"
                    />
                    <Tooltip />
                  </PieChart>
                </div>

                <div class="col"> </div>
              </div>
              <div class="locked-token-widget">
                <div class="title">Total number of staked tokens</div>
                <div class="value">
                  88,341,092
                  <div class="ogn-label">EGR</div>
                </div>
              </div>
              <div class="subtitle2 mb-0">Last updated 16 minutes ago</div>
            </div>
            <div class="col-lg-6 mt-5 mt-lg-0"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TokenEGR;
