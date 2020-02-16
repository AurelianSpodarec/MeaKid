import React, { useState } from 'react';

import { ButtonDropdown, CardImg, Button, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FaShoppingCart } from 'react-icons/fa';

import { useSelector, useDispatch } from 'react-redux';

const CartDropdown = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

    const cart = useSelector(state => state.cart)

    function renderItem() {
        if (cart.length) {
            return cart.map(product =>
                <DropdownItem key={product.id}>
                    <CardImg top width="100%" src={product.image} alt="Card image cap" />
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