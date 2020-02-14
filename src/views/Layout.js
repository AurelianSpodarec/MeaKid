import React from 'react';

import { Header, Footer } from './../components';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeView from './Home/HomeView';
import ProductList from './ProductList/ProductList';
// import ProductItem from './ProductItem/ProductItem';
import NotFound from './NotFound/NotFound'

const routes = [
    {
        path: "/",
        component: HomeView,

    },
    {
        path: "/product-list",
        component: ProductList,

    },
    {
        path: "*",
        component: NotFound,

    }
]

function Layout() {
    return (
        <Router>
            <Header />

            <Switch>
                {
                    routes.map((route =>
                        <Route exact path={route.path} component={route.component} />
                    ))
                }
            </Switch>

            <Footer />
        </Router>
    )
}

export default Layout;