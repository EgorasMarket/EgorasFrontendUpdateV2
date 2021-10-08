import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

// =======================
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";

// styles
import "../../../../css/header.css";
import "../../../../css/headerMobile.css";
import { Authenticate } from "../../../auth/Authenticate";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  // dropdown: {
  //   position: "absolute",
  //   top: 28,
  //   right: 0,
  //   left: 0,
  //   zIndex: 1,
  //   border: "1px solid",
  //   padding: theme.spacing(1),
  //   backgroundColor: theme.palette.background.paper,
  // },
}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     position: "relative",
//   },

// }));

const Header = () => {
  const [showHeader, setshowHeader] = useState("/");

  const currentPage = window.location.pathname;

  useEffect(() => {
    //   if(Hides === '/login'){
    //       document.getElementById('racing').style.display = 'none'
    //     }
    if (currentPage === "/dashboard/") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/airtime") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/transaction") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/egr-balance") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
    if (currentPage === "/dashboard/egr-") {
      setshowHeader(() => {
        document.getElementById("Header").style.display = "none";
      });
    }
  });

  // page hide element

  // class change on click functions
  const [page1, setPage1] = useState("/");

  // const clickMe1 = () => {
  //   if (page1 === "/") {
  //     setPage1("/");
  //   } else {
  //     setPage1("/");
  //   }
  // };
  // const clickMe2 = () => {
  //   if (page1 === "/support") {
  //     setPage1("/support");
  //   } else {
  //     setPage1("/support");
  //   }
  // };

  useEffect(() => {
    if (currentPage === "/") {
      setPage1("/");
    } else if (currentPage === "/validator") {
      setPage1("/validator");
    }
  });
  // {
  //   page === "change" ? (
  //   ) : ()}

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // =============
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const open2 = Boolean(anchorEl1);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const [open12, setOpen12] = React.useState(false);
  const anchorRef12 = React.useRef(null);

  const handleToggle12 = () => {
    setOpen12((prevOpen12) => !prevOpen12);
  };

  const handleClose12 = (event) => {
    if (anchorRef12.current && anchorRef12.current.contains(event.target)) {
      return;
    }

    setOpen12(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen12(false);
    }
  }

  // return focus to the button when we transitioned from !open12 -> open12
  const prevOpen12 = React.useRef(open12);
  React.useEffect(() => {
    if (prevOpen12.current === true && open12 === false) {
      anchorRef12.current.focus();
    }

    prevOpen12.current = open12;
  }, [open12]);

  const [open13, setOpen13] = React.useState(false);
  const anchorRef13 = React.useRef(null);

  const handleToggle13 = () => {
    setOpen13((prevOpen13) => !prevOpen13);
  };

  const handleClose13 = (event) => {
    if (anchorRef13.current && anchorRef13.current.contains(event.target)) {
      return;
    }

    setOpen13(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen13(false);
    }
  }

  // return focus to the button when we transitioned from !open13 -> open13
  const prevOpen13 = React.useRef(open13);
  React.useEffect(() => {
    if (prevOpen13.current === true && open13 === false) {
      anchorRef13.current.focus();
    }

    prevOpen13.current = open13;
  }, [open13]);

  return (
    <div id="Header">
      <section className="headerSection">
        <div className="container-fluid header">
          <div className="header-area">
            <a href="/" className="egrLogo2Cont">
              <img src="/img/egoras-logo.svg" alt="..." className="egr-logo2" />
              <div className="on-mobile-navigators">
                <ul className="headerLinks show-header-links">
                  <a
                    href="/"
                    className={page1 === "/" ? "docs activeLink" : "about"}
                    // onClick={clickMe1}
                  >
                    Borrower
                    {page1 === "/" ? <span className="Line"></span> : null}
                  </a>

                  <a
                    href="/validator"
                    className={
                      page1 === "/validator" ? "docs activeLink" : "about"
                    }
                    // onClick={clickMe2}
                  >
                    Validator
                    {page1 === "/validator" ? (
                      <span className="Line"></span>
                    ) : null}
                  </a>
                </ul>
              </div>
            </a>

            <ul className="headerLinks">
              <a href="/">
                {" "}
                <img
                  src="/img/egoras-logo.svg"
                  alt="..."
                  className="egr-logo"
                />
              </a>
              <a
                href="/"
                className={page1 === "/" ? "docs activeLink" : "about"}
                // onClick={clickMe1}
              >
                Borrower
                {page1 === "/" ? <span className="Line"></span> : null}
              </a>

              <a
                href="/validator"
                className={page1 === "/validator" ? "docs activeLink" : "about"}
                // onClick={clickMe2}
              >
                Validator
                {page1 === "/validator" ? <span className="Line"></span> : null}
              </a>
            </ul>

            {/* <ul className="headerLinks2">
            <a href="/documents" className="docs">
              Products
            </a>

            <a href="about" className="about">
              Company
              <ArrowDropDownIcon />
            </a>
          </ul> */}

            <ul className="headerButtons">
              {/* <div className="product">
                  Products
                  <ArrowDropDownIcon />
                </div> */}

              <Button
                ref={anchorRef12}
                aria-controls={open12 ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle12}
              >
                Products
                <ArrowDropDownIcon />
              </Button>
              <Popper
                style={{ width: "40%" }}
                open={open12}
                anchorEl={anchorRef12.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose12}>
                        <MenuList
                          autoFocusItem={open12}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem className="BorrowClass">Borrower</MenuItem>
                          <hr class="my-1" />
                          <MenuItem onClick={handleClose12}>
                            <a
                              href="https://egoras.ng/appointment"
                              className="borrower"
                            >
                              Get Loan
                            </a>
                          </MenuItem>
                          <MenuItem className="validatorClass">
                            Validator
                          </MenuItem>
                          <hr class="my-1" />
                          <MenuItem onClick={handleClose12}>
                            <a href="/explore_loans" className="borrower">
                              Explore loans
                            </a>
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>

              {/* <div className="product">
                                                                                                                        Company
                                                                                                                        <ArrowDropDownIcon />
                                                                                                                      </div> */}

              <Button
                ref={anchorRef13}
                aria-controls={open13 ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle13}
              >
                Company
                <ArrowDropDownIcon />
              </Button>
              <Popper
                style={{ width: "40%" }}
                open={open13}
                anchorEl={anchorRef13.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose13}>
                        <MenuList
                          autoFocusItem={open13}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleClose13}>
                            <a href="/about" className="borrower">
                              About Us
                            </a>
                          </MenuItem>
                          <hr className="my-1" />
                          <MenuItem onClick={handleClose13}>
                            <a
                              href="https://t.me/egorasmarket"
                              className="borrower"
                            >
                              Blog
                            </a>
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
              {/* ===================================================
              ===========================
              ========================================== */}

              <vl></vl>
              <a href="https://t.me/egorasmarket" className="about">
                Support
              </a>
              {/* <a href="/appointment" className="connect">
                {" "}
                Apply for loan
              </a> */}
              <a href="https://egoras.ng/appointment" className="getLoan">
                {" "}
                Get the loan
              </a>

              <a href="#" className="connect">
                <Authenticate />
                <div className="connectHover"></div>
              </a>
            </ul>
            {/* <img
              src="/img/hamburger-open.svg"
              alt=""
              className="hamburgerOpen"
            /> */}
            <div className="onMobile">
              <Toolbar className="hideNow">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  className={clsx(open && classes.hide)}
                  id="HideAgain"
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
              <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <div className={classes.drawerHeader}>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? <CloseIcon /> : <CloseIcon />}
                  </IconButton>
                </div>
                <Divider />
                <List>
                  <ListItem>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          Products
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="footerLinks">
                          <a
                            href="https://egoras.ng/appointment"
                            className="c1link1 a"
                          >
                            Get loan
                          </a>
                          <a
                            href="/explore_loans"
                            className="c1link1"
                            target="_blank"
                          >
                            Explore Collaterals
                          </a>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    {/* <a href="/documents" className="product">
                      Products
                    </a> */}
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          Company
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="footerLinks">
                          <a href="/about" className="c1link1 a">
                            About Us
                          </a>
                          <a
                            href="https://egoras.medium.com/"
                            className="c1link1"
                            target="_blank"
                          >
                            Blog
                          </a>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    {/* <a href="about" className="company">
                      Company
                    </a> */}
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem>
                    <a href="https://t.me/egorasmarket" className="about">
                      Support
                    </a>
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem>
                    <a href="https://egoras.ng/appointment" className="getLoan">
                      {" "}
                      Get the loan
                    </a>
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem>
                    <a href="#" className="connect">
                      <Authenticate />
                      <div className="connectHover"></div>
                    </a>
                  </ListItem>
                </List>
              </Drawer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
