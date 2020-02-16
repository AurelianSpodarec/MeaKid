import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import CartDropdown from './../CartDropdown/CartDropdown'



import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand><Link to="/">Duba</Link></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink><Link to="/">Home</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/product-list">Product List</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/checkout">Checkout</Link></NavLink>
                        </NavItem>
                    </Nav>

                    <CartDropdown />

                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;