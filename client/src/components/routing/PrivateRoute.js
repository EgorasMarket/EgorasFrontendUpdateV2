import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {
    
    useWeb3React,
      } from "@web3-react/core";
const PrivateRoute = ({ component: Component, ...rest }) => {
    const context = useWeb3React();
    const [connected, setConnected] = useState(false);
    const { 
        active,
    } = context;
    
    useEffect(() => {
        setConnected(active);
    }, [])
     return(<Route {...rest} render={props => !connected ? (<Redirect to="/" />) : (<Component {...props} />)} />)
}


export default PrivateRoute;
