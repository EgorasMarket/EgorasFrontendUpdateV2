import React, { useEffect, useState } from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import {
    Web3ReactProvider,
    useWeb3React,
    UnsupportedChainIdError
  } from "@web3-react/core";
  import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected
  } from "@web3-react/injected-connector";

  import {
    URI_AVAILABLE,
    UserRejectedRequestError as UserRejectedRequestErrorWalletConnect
  } from "@web3-react/walletconnect-connector";
  import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from "@web3-react/frame-connector";
import { Web3Provider } from "@ethersproject/providers";
import { formatEther } from "@ethersproject/units";

import {
    injected,
   // network,
    walletconnect,
    // walletlink,
     ledger,
     trezor,
    // frame,
     fortmatic,
     portis,
    // squarelink,
    // torus,
    // authereum
  } from "../../connectors";

  import { useEagerConnect, useInactiveListener } from "../../hooks";
 
  const connectorsByName = {
    Injected: injected,
    // Network: network,
    WalletConnect: walletconnect,
    // WalletLink: walletlink,
    Ledger: ledger,
     Trezor: trezor,
    // Frame: frame,
     Fortmatic: fortmatic,
    Portis: portis,
    // Squarelink: squarelink,
    // Torus: torus,
    // Authereum: authereum
  };

const Login = () => {
    const [modal, setModal] = useState(false);
    const [clickedmodal, setClickedmodal] = useState(false);
    const [con, setCon] = useState("false");
    const [connecting, setConnecting] = useState("false");
    const [keyboard, setKeyboard] = useState(false);
    const toggle = () => {
        setModal(!modal);
        setClickedmodal(true);
    };
  
    useEffect(() => {
       
      }, [])


const context = useWeb3React();
const {
  connector,
  library,
  chainId,
  account,
  activate,
  deactivate,
  active,
  error
} = context;

// handle logic to recognize the connector currently being activated
const [activatingConnector, setActivatingConnector] = React.useState();
React.useEffect(() => {
    
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
    
  
  }, [activatingConnector, connector]);
    // success
     // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();
    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
 useInactiveListener(!triedEager || !!activatingConnector);
// handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
useInactiveListener(!triedEager || !!activatingConnector);

// set up block listener
const [blockNumber, setBlockNumber] = React.useState();
React.useEffect(() => {
  
  if (library) {
    let stale = false;

    console.log('fetching block number!!')
    library
      .getBlockNumber()
      .then(blockNumber => {
        if (!stale) {
          setBlockNumber(blockNumber);
        }
      })
      .catch(() => {
        if (!stale) {
          setBlockNumber(null);
        }
      });

    const updateBlockNumber = blockNumber => {
      setBlockNumber(blockNumber);
    };
    library.on("block", updateBlockNumber);

    return () => {
      library.removeListener("block", updateBlockNumber);
      stale = true;
      setBlockNumber(undefined);
    };
  }
}, [library, chainId]);

const connectWallet = () =>{
    setConnecting("true");
}
// fetch eth balance of the connected account
const [ethBalance, setEthBalance] = React.useState();
React.useEffect(() => {
  
  if (library && account) {
    setCon(true);
    setConnecting("false");
    let stale = false;
    if(clickedmodal){
      setModal(!modal)
    }
    //console.log(modal);
    
    library
      .getBalance(account)
      .then(balance => {
        if (!stale) {
         
          setEthBalance(balance);
        }
      })
      .catch(() => {
        if (!stale) {
          setEthBalance(null);
        }
      });

    return () => {
      stale = true;
      setEthBalance(undefined);
    };
  }
}, [library, account, chainId]);

// log the walletconnect URI
React.useEffect(() => {
    console.log('running')
    const logURI = uri => {
      console.log("WalletConnect URI", uri);
    };
    walletconnect.on(URI_AVAILABLE, logURI);

    return () => {
      walletconnect.off(URI_AVAILABLE, logURI);
    };
  }, []);

    return (
        <div>
<div className="col-md-8 login">
    <div className="login-container" id={connecting}>
                   <div className="row">

        {Object.keys(connectorsByName).map(name => {
          const currentConnector = connectorsByName[name];
          const activating = currentConnector === activatingConnector;
        
          const connected = currentConnector === connector;
          const disabled =
            !triedEager || !!activatingConnector || connected || !!error;
           
          return (
             
                   
               
                   
                     
                        <div className="col-md-3" >
                        <button style={{minHeight: "127.22px"}}
                        className="btn "
                       
                        key={name}
                        onClick={() => {
                          setActivatingConnector(currentConnector);
                          activate(connectorsByName[name]);
                          connectWallet();
                        }}>
                          <img src={"/providers/"+name.toLowerCase()+".png"} style={{width: "58px"}} className="img-fluid"/><br/>
            
                            {name == "Injected" ? "MetaMask" : [name == "WalletConnect" ? "Wallet Connect": name]}
                        </button>
                         </div>
                        
                         
               
          
             
          );
      
        })}
                 
       
                 </div>
</div>
                 <div className="login-loading" id={"o-"+connecting}>
                 <FontAwesomeIcon icon={faSpinner} spin />
                 </div>
             </div>
                   

                   


                  
     
                  


        </div>
    )
  
}

export default Login;