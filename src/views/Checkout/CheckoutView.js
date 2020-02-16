import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
    Container, Row, Col,
    Table,
    Card, CardBody, CardTitle, CardImg
} from 'reactstrap';

function Checkout() {
    const cart = useSelector(state => state.cart)
    const [totalPrice, setTotalPrice] = useState(0)

    function getTotalPrice() {
        console.log("MM", cart.length)
        if (!cart.length) return;
        const totalPriceOfItems = cart.map(item => item.price.amount).reduce((prev, next) => prev + next).toFixed(2)
        setTotalPrice(totalPriceOfItems)

        return 0;
    }

    useEffect(() => {
        getTotalPrice()
    }, [])

    function renderItem() {
        if (cart.length) {
            return (
                <Table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product =>
                            <tr>
                                <td>
                                    <img top width="120px" src={product.image} alt="Card image cap" />
                                    <div>
                                        {product.price.amount}
                                        <CardTitle>{product.name}</CardTitle>
                                    </div>
                                </td>
                                <td>
                                    S
                                    </td>
                                <td>
                                    1
                                    </td>
                                <td>
                                    ${product.price.amount}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
            )
        }

        return "No item selected, go do shopping";
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col md="8">
                        {renderItem()}
                    </Col>
                    <Col md="4">
                        Total Price: {totalPrice}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Checkout;