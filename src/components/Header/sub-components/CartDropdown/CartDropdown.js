import React, { useState } from 'react';

import { ButtonDropdown, Button, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FaShoppingCart } from 'react-icons/fa';

import { useSelector, useDispatch } from 'react-redux';
// import { increment } from './../../../../stores/actions/cartActions';

const CartDropdown = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

    const cart = useSelector(state => state.cart)

    function renderItem() {
        if (cart.length) {
            return cart.map(product =>
                <DropdownItem key={product.id}>
                    {product.name}
                </DropdownItem>
            )
        }

        return "EMpty";
    }

    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                <FaShoppingCart /><h6>Cart <span>({cart.length})</span></h6>
            </DropdownToggle>
            <DropdownMenu right>
                {renderItem()}
                {/* <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem> */}
            </DropdownMenu>
        </ButtonDropdown>
    );
}

export default CartDropdown;