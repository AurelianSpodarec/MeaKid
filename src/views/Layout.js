import React from 'react';

import { Header, Footer } from './../components';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Routing from './Router';

function Layout() {
    return (
        <Router>
            <Header />

            <Switch>
                {
                    Routing.map((route =>
                        <Route exact path={route.path} component={route.component} />
                    ))
                }
            </Switch>

            <Footer />
        </Router>
    )
}

export default Layout;