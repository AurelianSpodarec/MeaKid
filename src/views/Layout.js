import React from 'react';

import { Header, Footer } from './../components';

import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';

//Import router
function Layout() {
    return (
        <div>
            <Header />

            <Routes />

            <Footer />
        </div>
    )
}

export default Layout;