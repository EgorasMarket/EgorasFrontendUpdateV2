import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {
    
    useWeb3React,
      } from "@web3-react/core";
const PrivateRoute = ({ component: Component, ...rest }) => {
    const context = useWeb3React();
    const { 
        active,
    } = context;
     return(<Route {...rest} render={props => !active ? (<Redirect to="/" />) : (<Component {...props} />)} />)
}


export default PrivateRoute;
