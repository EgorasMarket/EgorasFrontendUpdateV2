import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

import "../../../../css/whitepaper.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Whitepaper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeLink, setActiveLink] = useState("abstract-link");
  const [activeMenu, setActiveMenu] = useState("details-accord  ");
  // const [scrolledLink, setScrolledLink] = useState('abstract-link')

  const toggleActive = (e) => {
    let link = e.currentTarget.id;
    setActiveLink(link);
    setActiveMenu("notDetails-accord ");
    window.scrollTo(0, 0);
    console.log(e.currentTarget.id);
  };

  const toggleActiveDrop = () => {
    setActiveMenu("details-accord ");
  };

  // const toggleScrolledLink = (e) => {
  //   let scrolledLink=e.currentTarget.id
  // }
  const classes = useStyles();
  return (
    <div>
      <section className="whitepaper-section">
        <div className="whitepaper-area">
          <div className="whitepaper-side-bar">
            {/* ============== */}
            {/* ============== */}
            <div className="sidebar-links">
              <div className="sidebar-link1a">
                <a
                  href="#white_layer_1"
                  className={
                    activeLink == "abstract-link"
                      ? "sidebar-link1    sidebar-link1-active"
                      : "sidebar-link1"
                  }
                  id="abstract-link"
                  onClick={toggleActive}
                >
                  Abstract
                </a>
              </div>
              {/* ============== */}
              {/* ============== */}
              {/* ============== */}
              <div className="sidebar-link1a   ">
                <a
                  href="#white_layer_2"
                  className={
                    activeLink == "intro-link"
                      ? "sidebar-link1    sidebar-link1-active"
                      : "sidebar-link1"
                  }
                  onClick={toggleActive}
                  id="intro-link"
                >
                  Introduction
                </a>
              </div>
              {/* ============== */}
              {/* ============== */}
              {/* ============== */}
              <div className="sidebar-link1a">
                <a
                  href="#white_layer_3"
                  className={
                    activeLink == "dcentralized-link"
                      ? "sidebar-link1    sidebar-link1-active"
                      : "sidebar-link1"
                  }
                  onClick={toggleActive}
                  id="dcentralized-link"
                >
                  Decentralized Autonomous Organization
                </a>
              </div>
              {/* ============== */}
              {/* ============== */}
              {/* ============== */}
              <div className="sidebar-link1a">
                <a
                  href="#white_layer_4"
                  className={
                    activeLink == "lending-link"
                      ? "sidebar-link1    sidebar-link1-active"
                      : "sidebar-link1"
                  }
                  onClick={toggleActive}
                  id="lending-link"
                >
                  Lending Partner Governance
                </a>
              </div>
              {/* ============== */}
              {/* ============== */}
              {/* ============== */}
              <div className="sidebar-link1a">
                <a
                  href="#white_layer_5"
                  className={
                    activeLink == "collat-approve-link"
                      ? "sidebar-link1    sidebar-link1-active"
                      : "sidebar-link1"
                  }
                  onClick={toggleActive}
                  id="collat-approve-link"
                >
                  Collateral Approval Governance
                </a>
              </div>
              {/* ============== */}
              {/* ============== */}
              {/* ============== */}
              <div className="sidebar-link1a">
                <a
                  href="#white_layer_6"
                  className={
                    activeLink == "non-fungible-link"
                      ? "sidebar-link1    sidebar-link1-active"
                      : "sidebar-link1"
                  }
                  onClick={toggleActive}
                  id="non-fungible-link"
                >
                  Non-Fungible Token (NFT)
                </a>
              </div>
              {/* ============== */}
              {/* ============== */}
              {/* ============== */}
              <div className="sidebar-link1a">
                <a
                  href="#white_layer_7"
                  className={
                    activeLink == "nft-link"
                      ? "sidebar-link1    sidebar-link1-active"
                      : "sidebar-link1"
                  }
                  onClick={toggleActive}
                  id="nft-link"
                >
                  NFT Farming
                </a>
              </div>
              {/* ============== */}
              {/* ============== */}
              {/* ============== */}
              <div className="sidebar-link1a">
                <a
                  href="#white_layer_8"
                  className={
                    activeLink == "micro-collat-link"
                      ? "sidebar-link1    sidebar-link1-active"
                      : "sidebar-link1"
                  }
                  onClick={toggleActive}
                  id="micro-collat-link"
                >
                  Micro-Collateral Smart contracts
                </a>
              </div>
              {/* ============== */}
              {/* ============== */}
              {/* ============== */}
              <div className="sidebar-link1a">
                <a
                  href="#white_layer_9"
                  className={
                    activeLink == "stable-link"
                      ? "sidebar-link1    sidebar-link1-active"
                      : "sidebar-link1"
                  }
                  onClick={toggleActive}
                  id="stable-link"
                >
                  Stable Currency{" "}
                </a>
              </div>
              {/* ============== */}
              {/* ============== */}
              {/* ============== */}
              <div className="sidebar-link1a">
                <a
                  href="#white_layer_10"
                  className={
                    activeLink == "token-economy-link"
                      ? "sidebar-link1    sidebar-link1-active"
                      : "sidebar-link1"
                  }
                  onClick={toggleActive}
                  id="token-economy-link"
                >
                  Egoras Token Economy{" "}
                </a>
              </div>
              {/* ============== */}
              {/* ============== */}
              {/* ============== */}
              <div className="sidebar-link1a">
                <a
                  href="#white_layer_11"
                  className={
                    activeLink == "egr-eusd-link"
                      ? "sidebar-link1    sidebar-link1-active"
                      : "sidebar-link1"
                  }
                  onClick={toggleActive}
                  id="egr-eusd-link"
                >
                  The EgorasUSD(EUSD){" "}
                </a>
              </div>
              {/* ============== */}
              {/* ============== */}
              {/* ============== */}
              <div className="sidebar-link1a">
                <a
                  href="#white_layer_12"
                  className={
                    activeLink == "eusd-func-link"
                      ? "sidebar-link1    sidebar-link1-active"
                      : "sidebar-link1"
                  }
                  onClick={toggleActive}
                  id="eusd-func-link"
                >
                  Functions of EUSD{" "}
                </a>
              </div>
              {/* ============== */}
              {/* ============== */}
              {/* ============== */}
              <div className="sidebar-link1a">
                <a
                  href="#white_layer_13"
                  className={
                    activeLink == "gen-eusd-link"
                      ? "sidebar-link1    sidebar-link1-active"
                      : "sidebar-link1"
                  }
                  onClick={toggleActive}
                  id="gen-eusd-link"
                >
                  Steps to Generate EUSD{" "}
                </a>
              </div>
              {/* ============== */}
              {/* ============== */}
              {/* ============== */}
              <div className="sidebar-link1a">
                <a
                  href="#white_layer_14"
                  className={
                    activeLink == "gov-eusd-link"
                      ? "sidebar-link1    sidebar-link1-active"
                      : "sidebar-link1"
                  }
                  onClick={toggleActive}
                  id="gov-eusd-link"
                >
                  Steps To Govern the Generation Of EUSD{" "}
                </a>
              </div>
              {/* ============== */}
              {/* ============== */}
              {/* ============== */}
              <div className="sidebar-link1a">
                <a
                  href="#white_layer_15"
                  className={
                    activeLink == "egr-gov-link"
                      ? "sidebar-link1    sidebar-link1-active"
                      : "sidebar-link1"
                  }
                  onClick={toggleActive}
                  id="egr-gov-link"
                >
                  Egoras Governance Token (EGR){" "}
                </a>
              </div>
              {/* ============== */}
              {/* ============== */}
              {/* ============== */}
              <div className="sidebar-link1a">
                <a
                  href="#white_layer_16"
                  className={
                    activeLink == "egr-credit-link"
                      ? "sidebar-link1    sidebar-link1-active"
                      : "sidebar-link1"
                  }
                  onClick={toggleActive}
                  id="egr-credit-link"
                >
                  The Egoras Credit (EGC){" "}
                </a>
              </div>
              {/* ============== */}
              {/* ============== */}
              {/* ============== */}
              <div className="sidebar-link1a">
                <a
                  href="#white_layer_17"
                  className={
                    activeLink == "facilitate-link"
                      ? "sidebar-link1    sidebar-link1-active"
                      : "sidebar-link1"
                  }
                  onClick={toggleActive}
                  id="facilitate-link"
                >
                  How does EGC Facilitate the stability of EgorasUSD
                </a>
              </div>
              {/* ============== */}
              {/* ============== */}
              {/* ============== */}
              <div className="sidebar-link1a">
                <a
                  href="#white_layer_18"
                  className={
                    activeLink == "conclusion-link"
                      ? "sidebar-link1    sidebar-link1-active"
                      : "sidebar-link1"
                  }
                  onClick={toggleActive}
                  id="conclusion-link"
                >
                  Conclusion{" "}
                </a>
              </div>
            </div>
          </div>

          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}

          <div className="mobile-menu">
            <Accordion>
              <AccordionSummary
                onClick={toggleActiveDrop}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  className={classes.heading}
                  onClick={toggleActiveDrop}
                >
                  Menu{" "}
                </Typography>
              </AccordionSummary>
              <div className={activeMenu}>
                <AccordionDetails>
                  <div className="sidebar-links">
                    <div className="sidebar-link1a">
                      <a
                        href="#white_layer_1"
                        className={
                          activeLink == "abstract-link"
                            ? "sidebar-link1    sidebar-link1-active"
                            : "sidebar-link1"
                        }
                        id="abstract-link"
                        onClick={toggleActive}
                      >
                        Abstract
                      </a>
                    </div>
                    {/* ============== */}
                    {/* ============== */}
                    {/* ============== */}
                    <div className="sidebar-link1a   ">
                      <a
                        href="#white_layer_2"
                        className={
                          activeLink == "intro-link"
                            ? "sidebar-link1    sidebar-link1-active"
                            : "sidebar-link1"
                        }
                        onClick={toggleActive}
                        id="intro-link"
                      >
                        Introduction
                      </a>
                    </div>
                    {/* ============== */}
                    {/* ============== */}
                    {/* ============== */}
                    <div className="sidebar-link1a">
                      <a
                        href="#white_layer_3"
                        className={
                          activeLink == "dcentralized-link"
                            ? "sidebar-link1    sidebar-link1-active"
                            : "sidebar-link1"
                        }
                        onClick={toggleActive}
                        id="dcentralized-link"
                      >
                        Decentralized Autonomous Organization
                      </a>
                    </div>
                    {/* ============== */}
                    {/* ============== */}
                    {/* ============== */}
                    <div className="sidebar-link1a">
                      <a
                        href="#white_layer_4"
                        className={
                          activeLink == "lending-link"
                            ? "sidebar-link1    sidebar-link1-active"
                            : "sidebar-link1"
                        }
                        onClick={toggleActive}
                        id="lending-link"
                      >
                        Lending Partner Governance
                      </a>
                    </div>
                    {/* ============== */}
                    {/* ============== */}
                    {/* ============== */}
                    <div className="sidebar-link1a">
                      <a
                        href="#white_layer_5"
                        className={
                          activeLink == "collat-approve-link"
                            ? "sidebar-link1    sidebar-link1-active"
                            : "sidebar-link1"
                        }
                        onClick={toggleActive}
                        id="collat-approve-link"
                      >
                        Collateral Approval Governance
                      </a>
                    </div>
                    {/* ============== */}
                    {/* ============== */}
                    {/* ============== */}
                    <div className="sidebar-link1a">
                      <a
                        href="#white_layer_6"
                        className={
                          activeLink == "non-fungible-link"
                            ? "sidebar-link1    sidebar-link1-active"
                            : "sidebar-link1"
                        }
                        onClick={toggleActive}
                        id="non-fungible-link"
                      >
                        Non-Fungible Token (NFT)
                      </a>
                    </div>
                    {/* ============== */}
                    {/* ============== */}
                    {/* ============== */}
                    <div className="sidebar-link1a">
                      <a
                        href="#white_layer_7"
                        className={
                          activeLink == "nft-link"
                            ? "sidebar-link1    sidebar-link1-active"
                            : "sidebar-link1"
                        }
                        onClick={toggleActive}
                        id="nft-link"
                      >
                        NFT Farming
                      </a>
                    </div>
                    {/* ============== */}
                    {/* ============== */}
                    {/* ============== */}
                    <div className="sidebar-link1a">
                      <a
                        href="#white_layer_8"
                        className={
                          activeLink == "micro-collat-link"
                            ? "sidebar-link1    sidebar-link1-active"
                            : "sidebar-link1"
                        }
                        onClick={toggleActive}
                        id="micro-collat-link"
                      >
                        Micro-Collateral Smart contracts
                      </a>
                    </div>
                    {/* ============== */}
                    {/* ============== */}
                    {/* ============== */}
                    <div className="sidebar-link1a">
                      <a
                        href="#white_layer_9"
                        className={
                          activeLink == "stable-link"
                            ? "sidebar-link1    sidebar-link1-active"
                            : "sidebar-link1"
                        }
                        onClick={toggleActive}
                        id="stable-link"
                      >
                        Stable Currency{" "}
                      </a>
                    </div>
                    {/* ============== */}
                    {/* ============== */}
                    {/* ============== */}
                    <div className="sidebar-link1a">
                      <a
                        href="#white_layer_10"
                        className={
                          activeLink == "token-economy-link"
                            ? "sidebar-link1    sidebar-link1-active"
                            : "sidebar-link1"
                        }
                        onClick={toggleActive}
                        id="token-economy-link"
                      >
                        Egoras Token Economy{" "}
                      </a>
                    </div>
                    {/* ============== */}
                    {/* ============== */}
                    {/* ============== */}
                    <div className="sidebar-link1a">
                      <a
                        href="#white_layer_11"
                        className={
                          activeLink == "egr-eusd-link"
                            ? "sidebar-link1    sidebar-link1-active"
                            : "sidebar-link1"
                        }
                        onClick={toggleActive}
                        id="egr-eusd-link"
                      >
                        The EgorasUSD(EUSD){" "}
                      </a>
                    </div>
                    {/* ============== */}
                    {/* ============== */}
                    {/* ============== */}
                    <div className="sidebar-link1a">
                      <a
                        href="#white_layer_12"
                        className={
                          activeLink == "eusd-func-link"
                            ? "sidebar-link1    sidebar-link1-active"
                            : "sidebar-link1"
                        }
                        onClick={toggleActive}
                        id="eusd-func-link"
                      >
                        Functions of EUSD{" "}
                      </a>
                    </div>
                    {/* ============== */}
                    {/* ============== */}
                    {/* ============== */}
                    <div className="sidebar-link1a">
                      <a
                        href="#white_layer_13"
                        className={
                          activeLink == "gen-eusd-link"
                            ? "sidebar-link1    sidebar-link1-active"
                            : "sidebar-link1"
                        }
                        onClick={toggleActive}
                        id="gen-eusd-link"
                      >
                        Steps to Generate EUSD{" "}
                      </a>
                    </div>
                    {/* ============== */}
                    {/* ============== */}
                    {/* ============== */}
                    <div className="sidebar-link1a">
                      <a
                        href="#white_layer_14"
                        className={
                          activeLink == "gov-eusd-link"
                            ? "sidebar-link1    sidebar-link1-active"
                            : "sidebar-link1"
                        }
                        onClick={toggleActive}
                        id="gov-eusd-link"
                      >
                        Steps To Govern the Generation Of EUSD{" "}
                      </a>
                    </div>
                    {/* ============== */}
                    {/* ============== */}
                    {/* ============== */}
                    <div className="sidebar-link1a">
                      <a
                        href="#white_layer_15"
                        className={
                          activeLink == "egr-gov-link"
                            ? "sidebar-link1    sidebar-link1-active"
                            : "sidebar-link1"
                        }
                        onClick={toggleActive}
                        id="egr-gov-link"
                      >
                        Egoras Governance Token (EGR){" "}
                      </a>
                    </div>
                    {/* ============== */}
                    {/* ============== */}
                    {/* ============== */}
                    <div className="sidebar-link1a">
                      <a
                        href="#white_layer_16"
                        className={
                          activeLink == "egr-credit-link"
                            ? "sidebar-link1    sidebar-link1-active"
                            : "sidebar-link1"
                        }
                        onClick={toggleActive}
                        id="egr-credit-link"
                      >
                        The Egoras Credit (EGC){" "}
                      </a>
                    </div>
                    {/* ============== */}
                    {/* ============== */}
                    {/* ============== */}
                    <div className="sidebar-link1a">
                      <a
                        href="#white_layer_17"
                        className={
                          activeLink == "facilitate-link"
                            ? "sidebar-link1    sidebar-link1-active"
                            : "sidebar-link1"
                        }
                        onClick={toggleActive}
                        id="facilitate-link"
                      >
                        How does EGC Facilitate the stability of EgorasUSD
                      </a>
                    </div>
                    {/* ============== */}
                    {/* ============== */}
                    {/* ============== */}
                    <div className="sidebar-link1a">
                      <a
                        href="#white_layer_18"
                        className={
                          activeLink == "conclusion-link"
                            ? "sidebar-link1    sidebar-link1-active"
                            : "sidebar-link1"
                        }
                        onClick={toggleActive}
                        id="conclusion-link"
                      >
                        Conclusion{" "}
                      </a>
                    </div>
                  </div>
                </AccordionDetails>
              </div>
            </Accordion>
          </div>

          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
          {/* ================================ */}
          <div className="whitepaper-layers">
            <div className="whitepaperHeading">
              Egoras Decentralized micro-finance protocol.
            </div>
            <div className="whitepaper-layer1" id="white_layer_1">
              <h1 className="layer-header">Abstract</h1>
              <p className="layer-paragraph1" id="abstract-para">
                It is estimated that over two billion people around the globe
                are unbanked and without any access to financial services to
                meet their daily needs. Egoras protocol (“the protocol” or “the
                project”) attempts to be part of the solution to this problem by
                expanding financial access and inclusion to unserved or
                underserved communities. The protocol achieves its mission by
                on-chain Governance and a stable-value asset. The protocol
                serves as a source of capital for the unserved or underserved
                communities. In addition, the project seeks to improve the
                quality of financial services as well as lower the cost of the
                services in these communities around the globe. This whitepaper,
                therefore, explores how Egoras protocol can solve real-life
                problems such as helping people start businesses, supporting
                small and medium-sized enterprises access funds for expansion;
                and enabling families to attend to the needs while maintaining
                good collateralization on-chain.
              </p>
            </div>
            {/* ==================== */}
            {/* ==================== */}
            {/* ==================== */}
            <div className="whitepaper-layer2">
              <h1 className="layer-header" id="intro">
                Introduction
              </h1>

              <p className="layer-paragraph2" id="white_layer_2">
                It was thought that the advent of microfinance in the 1970s and
                1980s would eradicate or drastically reduce the pervading
                poverty at the time. However, four decades into the pioneering
                work of Mohammad Yunus in Bangladesh and the establishment of
                the Grameen Bank in 1983, the goals of microfinance have not
                been met. Without a doubt, there are several barriers to the
                financial success of the microfinance organization when compared
                to other financial organizations or mainstream banks. The first
                is the higher interest rate. It is generally acknowledged that
                most microfinance institutions charge a very high rate of
                interest when compared to commercial banks. This is usually at
                the detriment of the borrowers with attendant consequences such
                as depression and even suicide. Secondly, there appears to be an
                overdependence of microfinance organizations on the prevailing
                banking System. This is because most microfinance institutions
                operate as Non-Governmental Organizations (NGOs), and they are
                reliant on financial institutions such as commercial banks for
                stabilized funding to carry out their own lending activities.
                This overdependence of microfinance institutions on banks makes
                them incompetent as lending partners. Finally, there is the
                problem of over-indebtedness. Notably, the microfinance sector
                gives loans without collateral, and this increases the risk of
                bad debts. Egoras microfinance protocol seeks to address the
                challenges identified above. Addressing the challenges would
                mean that loans should be given at zero interest and collaterals
                should be required to get the loans. This also means a
                microfinance institution, not dependent on mainstream banks. To
                solve the high-interest rate problem, Egoras protocol introduces
                on-chain governance where the collateral is validated by the
                people, in which no central body or company determine the
                collateral to be accepted and process the loans at a
                zero-interest rate. In other words, the borrower doesn’t pay
                interest. To address the dependence issue, the Egoras protocol
                uses a stable-value asset system to make sure that Egoras
                protocol doesn’t lack the funds or liquidity for the loans and
                these stable-value assets are governed by the people. Finally,
                the Egoras protocol introduces collateral lending to address
                over-indebtedness in the microfinance sector. In this regard,
                small businesses’ assets will be converted to non-fungible
                tokens, and they represent the collateral. These assets will be
                sold off when the borrower defaults in repaying the loan.
              </p>
            </div>
            {/* ==================== */}
            {/* ==================== */}
            {/* ==================== */}
            <div className="whitepaper-layer3" id="white_layer_3">
              <h1 className="layer-header">
                Decentralized Autonomous Organization
              </h1>
              A decentralized autonomous organization (DAO) is an entity with no
              central leadership. Decisions get made from the bottom-up,
              governed by a community organized around a specific set of rules
              enforced on a blockchain. DAOs are internet-native organizations
              collectively owned and managed by their members. Decisions are
              made via proposals the group votes on during a specified period. A
              DAO works without hierarchical management and can have a large
              number of purposes. As noted earlier, one of the biggest barriers
              in the microfinance sector is the high- interest rate which is
              very high when compared with mainstream banks. The financial
              success of MFIs is limited when compared to commercial banks. The
              centuries-old banking system has a strong foothold and is slowly
              evolving to meet the needs of the times. Most Microfinance
              Institutions charge a very high rate of interest (12-30%) when
              compared to commercial banks (8-12%). For any microfinance
              institution to achieve its purpose then the interest rate should
              be zero. The best way to achieve this is to give the power back to
              the people, whereby users can vote to increase or reduce the
              inventory fees and they are also incentivized as they participate
              in these processes. As a decentralized autonomous organization, no
              company fixes outrageous interest or declines loan requests. The
              users vote the inventory fees of their choice and also vote in the
              approval and declining of loans. Whereas the current microfinance
              space is managed by NGOs, microfinance banks, or individuals and
              regulated by the government, the whole process on Egoras protocol
              is governed by the people. No third party makes the decisions, and
              all data are secured on Egoras smart contract which is built on
              Binance smart chains. Egoras protocol is not owned by any
              foundation nor any firm. It is a decentralized organization
              governed by the people.
            </div>
            {/* ==================== */}
            {/* ==================== */}
            {/* ==================== */}
            <div className="whitepaper-layer4" id="white_layer_4">
              <h1 className="layer-header">Lending Partner Governance</h1>
              Most microfinance institutions function as registered
              Non-Governmental Organizations (NGOs), they are dependent on
              financial institutions such as commercial banks for stabilized
              funding to carry out their own lending activities. Most of these
              commercial banks are private institutions charging a higher rate
              of interest. They also sanction loans for shorter periods. The
              massive dependence of Microfinance institutions on banks makes
              them incompetent as lending partners. On Egoras, Microfinance
              banks, NGOs or any lending firm can validate borrowers or small
              business owners and work with Egoras to distribute the loans to
              small businesses or any borrower that wants to borrow funds from
              Egoras. These microfinance banks or organizations are curated by
              the people and people get to decide which organization can get
              access to the Egoras treasury system. When a user requires a loan,
              the user will contact a microfinance bank or organization that
              have been approved by Egoras token holders to validate the user
              and post the loans on Egoras protocol. This organization validates
              the user’s information. The kind of collaterals and features are
              also uploaded by the validating organizations.
            </div>
            {/* ==================== */}
            {/* ==================== */}
            {/* ==================== */}
            <div className="whitepaper-layer5" id="white_layer_5">
              <h1 className="layer-header">Collateral Approval Governance</h1>
              It is to be noted that the current microfinance sector managed by
              NGOs and microfinance bank approve loans for borrowers after
              proper due diligence have been carried out, but the Egoras
              protocol uses a crowdsourced knowledge to approve or decline
              collaterals backing the loans. The people vote if the collaterals
              should be approved or declined, and the people also share in the
              risk of the loans. Egoras holders approve this loan within after a
              certain threshold is reached. Data are provided for Egorasholders
              to make the correct governance decisions and the votes are
              determined by the voting weight (vote weight is determined by the
              amount of Egorastoken locked in the microfinance smart contract).
              Egoras holders share in the risk of the loans, and they are
              rewarded for their participation in the governance process by
              receiving all interest accruing from the loans.
            </div>
            {/* ==================== */}
            {/* ==================== */}
            {/* ==================== */}
            <div className="whitepaper-layer6" id="white_layer_6">
              <h1 className="layer-header">Non-Fungible Token (NFT)</h1>A
              non-fungible token (NFT) is a unique and non-interchangeable unit
              of data stored on a digital ledger (blockchain). NFTs can be used
              to represent easily reproducible items such as photos, videos,
              audio, and other types of digital files as unique items (analogous
              to a certificate of authenticity) and use blockchain technology to
              establish a verified and public proof of ownership. Copies of the
              original file are not restricted to the owner of the NFT and can
              be copied and shared like any file. The lack of interchangeability
              (fungibility) distinguishes NFTs from blockchain cryptocurrencies,
              such as Bitcoin. The microfinance sector deals with marginalized
              sections of the society intending to improve their standard of
              living, and thus over-indebtedness poses a severe challenge to its
              growth. The growing trend of multiple borrowing by clients and
              inefficient risk management are the most significant factors that
              stress the microfinance industry. The microfinance sector gives
              loans without collateral, which increases the risk of bad debts.
              Fast-paced growth needs proper infrastructural planning, which the
              Indian microfinance sector evidently lacks. Egoras microfinance
              protocol addresses these challenges identified above by providing
              loans at zero interest and collaterals should be required to get
              the loans. The collaterals are represented as NFTs (Non - Fungible
              Tokens). This means collateral ownership can be transferred easily
              without undergoing rigorous legal works. Collaterals can be
              claimed after the loan period. All transactions are recorded as
              NFTs on a public Blockchain. (Thus, every transaction is public
              and immutable).
            </div>
            {/* ==================== */}
            {/* ==================== */}
            {/* ==================== */}
            <div className="whitepaper-layer6" id="white_layer_7">
              <h1 className="layer-header">NFT Farming</h1> NFT farming is an
              emerging concept which involves staking NFTs for a reward or
              staking tokens for an NFT as a reward. It’s the merger of NFT
              technology and decentralized finance (Defi). In short, picture NFT
              farming is similar to yield farming, but instead, it involves NFTs
              as either a reward or the staked token. Ultimately NFT farming
              creates liquidity and utility for NFTs that would otherwise hardly
              do anything. Egoras eNFT farming builds off the concept of token
              staking and liquidity farming, with users staking native tokens to
              earn an additional yield through an NFT-based reward. Unlike
              traditional staking, which pays out the reward in the natively
              staked token, through egoras NFT farming, users can obtain NFTs
              assets redeemable for offline goods. These earnable NFTs can vary
              greatly depending on the token being staked.
            </div>
            {/* ==================== */}
            {/* ==================== */}
            {/* ==================== */}
            <div className="whitepaper-layer6" id="white_layer_8">
              <h1 className="layer-header">Micro-Collateral Smart contracts</h1>{" "}
              Anyone can leverage up any personal properties as collateral to
              generate eUSD on Egoras microfinance protocol. Egoras Collateral
              Assets are physical assets represented on blockchain as NFTs and
              is approved by Egoras governance. The microfinance banks and
              organizations hold collateral assets deposited by a user and the
              microfinance smart contract holds the digital equivalent and the
              governance smart contract permits the user to generate eUSD but
              generating eUSD also accrues debt. This debt effectively locks the
              deposited physical collateral assets and the digital collateral
              assets inside the microfinance smart contract until it is later
              covered by paying back an equivalent amount of eUSD, at which
              point the owner can again withdraw their collateral. Active loans
              are always collateralized in excess, meaning that the value of the
              collateral is higher than the value of the debt.
            </div>
            {/* ==================== */}
            {/* ==================== */}
            {/* ==================== */}
            <div className="whitepaper-layer6" id="white_layer_9">
              <h1 className="layer-header"> Stable Currency</h1> The biggest
              hurdle to the use of cryptocurrencies as a meduim of exchange is
              its volatility. People are unlikely to want to buy a volatile
              cryptocurrency to use it for payment or accept a volatile
              cryptocurrency for loans, since the purchasing power of their
              accounts would fluctuate widely with market demand for the
              currency. Merchants who accept cryptocurrencies are likely to
              convert to fiat upon payment, because their business model does
              not involve speculating on cryptocurrencies. And the most
              successful cryptocurrencies today are not just volatile but
              deflationary – their success leads to their price rising; as a
              result, prices denominated in the currency fall. Rational
              behaviour would be to use such currencies as a store of value
              rather than a medium of exchange, and in practice that is what has
              happened. Stable-value cryptocurrencies would bring a number of
              benefits to the cryptocurrency ecosystem. For one, stable prices
              remove a considerable barrier for using cryptocurrencies as a
              medium-of-exchange; salaries, prices of goods, fixed obligations,
              can all be set in a stable value cryptocurrency without requiring
              either party to speculate on the future value of the currency.
              Further, financial contracts are more easily built with a stable
              value coin, because the issuer can separate the function of the
              contract from the price risk of the currency in which it’s
              denominated. While a single stable-value currency would be
              helpful, a thriving cryptoeconomy is best-served by a family of
              stable-value currencies, much as it is well-served by the family
              of variable-value cryptoassets that we have today. Certainly a
              cryptocurrency pegged to the US Dollar has several uses, from
              social payments in the US, to user-initiated dollarization in
              hyper-inflationary markets, to the efficient settlement of
              high-frequency crypto-asset trades. At the same time, a
              cryptocurrency pegged to the Euro would also be useful for many
              purposes, as would a cryptocurrency pegged to the price of a
              basket of goods in Greece, as would a cryptocurrency pegged to the
              price of a barrel of oil, or housing in San Francisco.
              Stable-value local, regional, and utility currencies allow people
              to hedge price risk in their lives by denominating a portion of
              their personal economy in currencies that are stable vis-a-vis the
              price of the goods they regularly use.
            </div>
            {/* ==================== */}
            {/* ==================== */}
            {/* ==================== */}
            <div className="whitepaper-layer6" id="white_layer_10">
              <h1 className="layer-header"> Egoras Token Economy</h1> The Egoras
              Protocol interacts with Four kinds of tokens:
              <div className="sub-texts-para">
                • The Egoras Dollar (EUSD) - a stable cryptocurrency that can be
                held and spent like the United States Dollar and other stable
                fiat money.
              </div>
              <div className="sub-texts-para">
                • The Egoras token (EGR)—a governance cryptocurrency used to
                govern Egoras microfinance protocol.{" "}
              </div>
              <div className="sub-texts-para">
                • The Egoras Credit (EGC)- The utility token of the Egoras
                protocol to facilitate the stability of the EUSD.
              </div>
              <div className="sub-texts-para">
                • Collateral tokens—other assets that are held in smart
                contracts in order to back the value of the EgorasUSD, similar
                to when the US government used to back the US dollar with gold.
                The protocol is designed to hold collateral tokens worth at
                least 100% of the value of all EgorasUSD tokens. Many of the
                collateral tokens will be tokenized real-world assets such as
                tokenized electrical appliances, household appliances e.t.c, and
                the portfolio will start off relatively simple and diversify
                over time as more asset classes are tokenized.
              </div>
            </div>
            {/* ==================== */}
            {/* ==================== */}
            {/* ==================== */}
            <div className="whitepaper-layer6" id="white_layer_11">
              <h1 className="layer-header"> The EgorasUSD(EUSD)</h1> The EUSD
              Stable coin is a decentralized, collateral-backed cryptocurrency
              pegged to United States Dollar. EUSD is built on the Ethereum
              blockchain and can be held on any Ethereum wallet. It can be spent
              the way the U.S. Dollar is spent. Microfinance banks and NGOs
              generate EUSD by posting a loan backed by collateral assets into
              the Egoras microfinance protocol and EGR holders approve or
              decline the loan request. The loan request approved creates EUSD
              which the microfinance banks send directly to the borrowers. Users
              can also buy EUSD from exchanges, or simply receive it as a means
              of payment. Every EUSD in circulation is over-collateralised,
              meaning that the value of the collateral is higher than the value
              of the EUSD debt, and all EUSD transactions are publicly viewable
              on the Ethereum blockchain.
            </div>
            {/* ==================== */}
            {/* ==================== */}
            {/* ==================== */}
            <div className="whitepaper-layer6" id="white_layer_12">
              <h1 className="layer-header"> Functions of EUSD</h1>
              <div className="sub-texts-para">
                <span className="sub-texts-indent">1. </span> Store of value:
                Stablecoins keep or preserve values over a long period because
                of the lower associated volatility levels. EUSD is a store of
                value, so it is designed to preserves value for a long period of
                time.
              </div>
              <div className="sub-texts-para">
                <span className="sub-texts-indent"> 2.</span> The Medium of
                Exchange: Stablecoins enable further adoption of
                cryptocurrencies by the local businesses while minimizing the
                risks related to their volatility. It encourages the exchange of
                goods for cryptocurrency. EUSD will be used by small businesses
                in exchange for goods and services.
              </div>
              <div className="sub-texts-para">
                <span className="sub-texts-indent"> 3.</span> Unit of Account:
                Pricing in EUSD is possible with the pegging mechanism.
                Currently, EUSD is not an independent unit of account over time
                across the globe. EUSD is currently pegged to 1 USD (1 EUSD =1
                USD). Though EUSD is not used as a standard measurement of value
                in the off-chain world, it functions as a unit of account within
                the Egoras microfinance protocol.
              </div>
              <div className="sub-texts-para">
                <span className="sub-texts-indent"> 4.</span> Lending: EUSD can
                be used to settle the debt in Egoras microfinance protocol.
                (e.g., Microfinance Banks, NGOs or Egoras lending partners pays
                back debt and interest with EUSD on Egoras microfinance
                protocol).
              </div>
            </div>
            {/* ==================== */}
            {/* ==================== */}
            {/* ==================== */}
            <div className="whitepaper-layer6" id="white_layer_13">
              <h1 className="layer-header"> Steps to Generate EUSD</h1>
              <div className="sub-texts-para">
                <span className="sub-texts-indent">1. </span> Create Partnership
                Request: Any legally registered microfinance bank or NGO can
                create a partnership request on Egoras microfinance protocol by
                filling the partnership form with all the detailed information
                about the organization.
              </div>
              <div className="sub-texts-para">
                <span className="sub-texts-indent"> 2.</span> Get
                approved/declined by EGR holders: Egoras token (EGR) holders
                curate the request of microfinance banks, NGOs or Money Lenders
                to become a lending partner, they decide if they will either
                approve or decline the request from the organizations.
              </div>
              <div className="sub-texts-para">
                <span className="sub-texts-indent"> 3.</span> Post your loan
                request: Approved microfinance banks or NGOs can post loan
                requests to Egoras microfinance protocol and get EGR holders to
                either approve or decline the loans. If the loans are approved,
                then the organization receives EUSD in their approved
                organizational wallets.
              </div>
              <div className="sub-texts-para">
                <span className="sub-texts-indent"> 4.</span> Pay Back the Debt:
                The microfinance banks or NGOs must pay down or completely pay
                back the EUSD she generated, plus the interest fee that
                continuously accrues on the outstanding debt.
              </div>
            </div>

            {/* ========================= */}
            {/* ========================= */}
            {/* ========================= */}
            {/* ========================= */}
            <div className="whitepaper-layer6" id="white_layer_14">
              <h1 className="layer-header">
                {" "}
                Steps To Govern the Generation Of EUSD
              </h1>
              <div className="sub-texts-para">
                <span className="sub-texts-indent">1. </span> Validate
                Microfinance bank partnership request: Approve/decline
                partnership requests of microfinance banks, NGOs or
                organizations with money lenders licenses. Read through the
                documents provided by these organizations before approving or
                declining the requests.
              </div>
              <div className="sub-texts-para">
                <span className="sub-texts-indent"> 2.</span>Validate the Loan
                request: Read through the loan request by these organizations;
                ask the lending team questions in order to get to know the
                borrower before approving/declining the loan request.
              </div>
              <div className="sub-texts-para">
                <span className="sub-texts-indent"> 3.</span> Claim your
                rewards: Claim your reward block rewards created through
                inflationary monetary policy and interest accrued from debt from
                businesses holding EUSD.
              </div>
            </div>

            {/* ========================= */}
            {/* ========================= */}
            {/* ========================= */}
            {/* ========================= */}
            <div className="whitepaper-layer6" id="white_layer_15">
              <h1 className="layer-header"> Egoras Governance Token (EGR)</h1>
              In contrast to EUSD which is a stablecoin that is suitable for
              payments and savings, EGR is a token that has a volatile price
              because of its unique supply mechanics and role on the Egoras
              protocol. EGR is a governance token. There exists a maximum of
              100M EGR. As a governance token, EGR is used by EGR holders to
              vote for the risk management and business logic of the Egoras
              Protocol. Risk management is crucial for the success and survival
              of the system and is done in practice by voting on specific risk
              parameters for each loan and lending partner. The risk parameters
              need to be set rigorously to correspond to the risk profile of the
              loans and the lending partner in the system. The voting process
              for the governance of the system is done through continuous
              approval voting. This means every EGR holder can vote for any
              number of proposals with the EGR he holds and can submit a new
              proposal or withdraw his votes at any point in time. The proposal
              that has the most votes from all EGR holders becomes the “top
              proposal” and can be activated to implement changes to the risk
              parameters of the system. There is a simple app available that
              allows any EGR holder to easily vote with their EGR by using
              metamask, ledger and fortmatic. More advanced features are planned
              for the future, such as delegating your votes to a proxy voter,
              and the ability to safely vote with EGR held in cold storage. If
              EGR holders are highly competent and govern the protocol well, The
              egoras credit system will get adopted and will always remain
              overcollateralized.
            </div>

            {/* ========================= */}
            {/* ========================= */}
            {/* ========================= */}
            {/* ========================= */}
            <div className="whitepaper-layer6" id="white_layer_16">
              <h1 className="layer-header">The Egoras Credit (EGC)</h1>
              As a utility token, EGR is required for paying the inventory fees
              accrued on Loans that have been used to generate eUSD in the
              Egoras Protocol. Only EGC can pay these fees, and when paid the
              EGC is burned, removing it from the supply. This means that if the
              adoption and demand for EUSD and Egoras Credit system increases,
              there will be additional demand for EGC so users can pay the fees.
              It also means the supply will decrease as EGC is burned.
            </div>
            {/* ========================= */}
            {/* ========================= */}
            {/* ========================= */}
            {/* ========================= */}
            <div className="whitepaper-layer6" id="white_layer_17">
              <h1 className="layer-header">
                How does EGC Facilitate the stability of EgorasUSD
              </h1>
              If demand goes down for the EgorasUSD, prices will fall on
              secondary markets. What happens then? Suppose the redemption price
              of eUSD is $1.00. If the price of eUSD on the open market is
              $0.98, arbitrageurs will be incentivized to buy it up and redeem
              it with the Egoras smart contract for $1.00 worth of EGC or eNFTs.
              They’ll continue buying on open markets until there is no more
              money to be made, which is when the market price matches the
              redemption price of $1.00. The same mechanism works in reverse
              when demand goes up. If the price of eUSD on the open market is
              $1.02, arbitrageurs will be incentivized to purchase newly minted
              eUSD tokens for $1.00 worth of either collateral or Egoras Credit
              tokens (the latter only if there is an excess pool of eUSD tokens
              available), and immediately sell them on the open market. They’ll
              continue selling on open markets until there is no more money to
              be made, which is when the market price matches the purchase price
              of $1.00.
            </div>
            {/* ==================== */}
            {/* ==================== */}
            {/* ==================== */}
            <div className="whitepaper-layer6" id="white_layer_18">
              <h1 className="layer-header"> Conclusion</h1>
              <div className="sub-texts-para last">
                Egoras microfinance protocol addresses the challenges facing the
                microfinance industry like high interest rates, over-dependency
                on banks and over-indebtedness.
              </div>
              <div className="sub-texts-para last">
                Egoras protocol allows microfinance organizations to get loans
                at zero interest rate in eUSD, converting the collaterals of
                small business owners into digital assets and represented on
                blockchain as NFTs.
              </div>
              <div className="sub-texts-para last">
                eUSD is a decentralized stable coin that is not issued or
                administered by any centralized actor or trusted intermediary or
                counterparty. It is unbiased and borderless —available to
                anyone, anywhere.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container"></div> */}
      </section>
    </div>
  );
};

export default Whitepaper;
