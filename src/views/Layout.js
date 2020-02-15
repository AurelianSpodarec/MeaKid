import React from 'react';

import { Header, Footer } from './../components';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Routes from './Routes';

function Layout() {
    return (
        <Router>
            <Header />

            <Routes />

            <Footer />
        </Router>
    )
}

export default Layout;