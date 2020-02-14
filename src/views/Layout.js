import React from 'react';

import { Header, Footer } from './../components';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeView from './Home/HomeView';
import ProductList from './ProductList/ProductList';
import ProductItem from './ProductItem/ProductItem';
import NotFound from './NotFound/NotFound'


//Import router
function Layout() {
    return (
        <Router>
            <Header />

            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route exact path="/product-list" component={ProductList} />
                {/* <Route exact path="/product-list/:id" component={ProductItem} /> */}Inside up
                <Route path="*" component={NotFound} />
            </Switch>


            <Footer />
        </Router>
    )
}

export default Layout;