import React from 'react';
import "../styles/Header.css";
import {Route, Switch} from 'react-router-dom'

import img1 from '../images/1.jpg';
 import img2 from '../images/2.jpg';
 import img3 from '../images/3.jpg';

const Header = () => {
    return ( 
    <>
    <Switch>
        <Route path = "/" exact render={() => (
            <img src={img3} alt=""/>
        )}/>
        <Route path = "/products"  render={() => (
            <img src={img1} alt="grass"/>
        )}/>
        <Route path = "/contact"  render={() => (
            <img src={img2} alt="water"/>
        )}/>
        <Route path = "/admin"  render={() => (
            <img src={img3} alt="views"/>
        )}/>
         <Route   render={() => (
            <img src={img2} alt="water"/>
        )}/>
    </Switch>
    </>
    );
}
 
export default Header;

