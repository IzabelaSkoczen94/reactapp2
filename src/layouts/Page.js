import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import ProductsListPage from '../pages/ProductsListPage';
import ContactPage from '../pages/ContactPage';
import AdminHomePage from '../pages/AdminHomePage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';

const Page = () => {
    return ( 
        <>
        <Switch>
        <Route path="/" exact component={HomePage}/> 
        <Route path="/products" exact component={ProductsListPage}/> 
        <Route path="/products/:id" component={ProductPage}/>
        <Route path="/contact" component={ContactPage}/> 
        <Route path="/admin" component={AdminHomePage}/> 
        <Route path="/login" component={LoginPage}/> 
        <Route component={ErrorPage}/> 
        </Switch>
        </>
     );
}
 
export default Page;