import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeView from './Home/HomeView';
import ProductList from './ProductList/ProductList';
// import ProductItem from './ProductItem/ProductItem';
import NotFound from './NotFound/NotFound'

const Routing = [
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

const Routes = () => {
    return <Switch>
        {Routing.map((route =>
            <Route exact path={route.path} component={route.component} />
        ))}
    </Switch>
}

export default Routes;