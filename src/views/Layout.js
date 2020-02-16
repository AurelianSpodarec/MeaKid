import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routes from './Routes';

import { Header, Footer } from './../components';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css'

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