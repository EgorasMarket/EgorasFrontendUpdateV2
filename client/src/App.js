import React, { Fragment, useEffect, useState } from 'react';
import Select from 'react-select';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/layout/home/Home';
import Opd from './components/layout/home/Opd';
import Aos from "aos";
import "aos/dist/aos.css";

// import Aos from "aos";
// import "aos/dist/aos.css";

////////////////---UI---///////////////
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError
} from '@web3-react/core';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector';
//import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector';
//import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from '@web3-react/frame-connector';
import { Web3Provider } from '@ethersproject/providers';
import { formatEther } from '@ethersproject/units';

import { useEagerConnect, useInactiveListener } from './hooks';
import {
  injected
  // network,
  // walletconnect,
  // walletlink,
  // ledger,
  // trezor,
  // frame,
  // authereum,
  // fortmatic,
  // portis,
  // squarelink,
  // torus
} from './connectors';

// let ConnectorNames {
//   //Injected: 'Injected',
//   // Network = 'Network',
//   // WalletConnect = 'WalletConnect',
//   // WalletLink = 'WalletLink',
//   // Ledger = 'Ledger',
//   // Trezor = 'Trezor',
//   // Frame = 'Frame',
//   // Authereum = 'Authereum',
//   // Fortmatic = 'Fortmatic',
//   // Portis = 'Portis',
//   // Squarelink = 'Squarelink',
//   // Torus = 'Torus'
// }

// Redux
import { Provider } from 'react-redux';
import store from './store';

import './css/App.css';
import './css/Dark.css';
import './css/apexcharts.css';

import Header from './components/layout/Home2/NavBar/Header.js'; 
import Footer from './components/layout/Home2/Footer/Footer';
// import { Header } from './components/layout/parts/Header';

import Loan from './components/layout/home/Loan';
import Terms from './components/layout/home/Terms';
import Privacy from './components/layout/Home2/PrivacyPolicy/Privacy';
import Createloan from './components/layout/uploads/Createloan';
import Companyreg from './components/layout/uploads/Companyreg';

import PrivateRoute from './components/routing/PrivateRoute';
import Companies from './components/layout/companies/Companies';
import Details from './components/layout/companies/Details';
import Request  from './components/layout/requests/Request';
import Login from './components/auth/Login';
import Categories from './components/layout/categories/Categories';
import Status from './components/layout/status/Status';
import NewHome from './components/layout/home/NewHome';  
// import About from './components/layout/home/About';
import TokenMetrics from './components/layout/home/TokenMetrics';
import AddUploader from './components/layout/uploads/addUploader';
import Newhome2 from './components/layout/home/Newhome2';
import Landing from './components/layout/Home2/Landing/Landing';
import LoanDetails from './components/layout/LoanDetails/LoanDetails';
import About from './components/layout/Home2/About/About';


const App = () => {


  useEffect(() => {
    Aos.init({});
  }, []);


  function getLibrary(provider) {
    const library = new Web3Provider(provider);
    library.pollingInterval = 8000;
    return library;
  }

  // useEffect(() => {
  //   Aos.init({});
  // }, []);

  const [intitiated, SetIntitiated] = useState(false);
  const [isTokenMetrics, SetIsTokenMetrics] = useState(false);
  
  const handleChange = (e) =>{
    e.preventDefault();
    console.log(intitiated);
    localStorage.setItem('toogle', !intitiated);
    SetIntitiated((intitiated) =>!intitiated);
  }

  

  useEffect(() => {
    let toggleState;
    if(localStorage.getItem('toogle')){
      if(localStorage.getItem('toogle') == "true"){
        toggleState = true;
      }else{
        toggleState = false;
      }
    }else{
      toggleState = false;
    }
    SetIntitiated((intitiated) =>  toggleState );
    
  },[]);
  const currentPage = window.location.pathname;
  // console.log(currentPage);
  useEffect(() => {
    if (currentPage == '/token-metrics') {
      SetIsTokenMetrics(true);
      console.log('/token-metrics');
      
    }
    
  },[]);
  
  
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <Router>
          <div id='timeToggle' className={`toggle ${intitiated ? "dark-mode" : ""} `}>
            <Fragment>
              <Header />
              {/* <Header onClick={handleChange} intitiated={intitiated} /> */}
              {/* {isTokenMetrics == false ? (
              ) : null} */}
                {/* <Route exact path='/' component={Home} /> */}
                <Route exact path='/' component={Newhome2} />
                <Route exact path='/validator' component={Landing} />
                {/* <section className=''> */}
                <section>
                  <Switch>
                    {/* <Route exact path='/loan/details/:id' component={Loan} /> */}
                    <Route exact path='/loan-details/:id' component={LoanDetails} />
                    <Route
                      exact
                      path='/companies/details/:id'
                      component={Details}
                    />
                          <Route
                      exact
                      path='/category/:name'
                      component={Categories}
                    />
                            <Route
                      exact
                      path='/status/:name'
                      component={Status}
                    />
                    {/* <Route exact path='/new-home' component={NewHome} /> */}
                    
                    <Route exact path='/confirmation' component={Opd} />
                    {/* <Route exact path='/about' component={About} /> */}
                    <Route exact path='/about' component={About} />
                    <PrivateRoute exact path='/createloan' component={Createloan} />
                    <Route exact path='/create-uploader' component={AddUploader} />
                    <PrivateRoute exact path='/governance' component={Request} />
                    <PrivateRoute exact path='/companyreg' component={Companyreg} />
                   
                    <Route exact path='/companies' component={Companies} />
                    <Route exact path='/privacy' component={Privacy} />
                    <Route exact path='/terms' component={Terms} />
                    <Route exact path='/login' component={Login} />
                    {/* <Route exact path='/token-metrics' component={TokenMetrics} /> */}
                  </Switch>
                </section>
                {/* <Footer /> */}
                <Footer />
              </Fragment>
          </div>
        </Router>
      </Provider>
    </Web3ReactProvider>
  );
};

export default App;
