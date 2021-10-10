import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const TokenEUSD = () => {
  return (
    <div>
      {/* =================================================================================================================================================================================================================================================================== */}
      {/* Tokens Section Start */}
      <section className="tokenSection" id="token">
        <div className="container">
          <div className="tokenArea">
            <div className="tokenCard1texts">
              <h1 className="tokenCard1Heading">
                Egoras (EUSD) <ArrowForwardIcon className="arrowIcon " />
              </h1>
              <p className="tokenCard1Para">
                EGS is a decentralized cryptocurrency stabilized against the
                value of the <br />
                US dollar, it uses egoras loan governance to respond to changing
                market
                <br /> conditions and preserve its value against the US dollar.
                Unlike other
                <br /> popular stablecoins whose value is backed directly by
                USD, it’s backed
                <br /> by crypto collaterals.
              </p>
            </div>
            <div
              className="tokenCard1"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img src="/img/main-token.svg" alt="" className="mainToken" />
            </div>
          </div>
        </div>

        <img src="/img/token-dots.svg" alt="" className="tokenDots" />
      </section>
      {/* Tokens Section End */}
    </div>
  );
};

export default TokenEUSD;
