import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from './../../stores/actions/cartActions';

const ProductItem = ({ product, loading }) => {

    // const counter = useSelector(state => state.cart)
    const dispatch = useDispatch();


    function renderPrice() {
        if (loading) {
            return "Loading"
        } else if (product.price.sale_amount) {
            return `${product.price.sale_amount} from ${product.price.amount}`
        }

        return `${product.price.amount}`;
    }

    return (
        <Card>
            {loading ? "Loading" :
                <CardImg top width="100%" src={product.image} alt="Card image cap" />
            }
            <CardBody>
                {loading ? <CardTitle>Loading</CardTitle> :
                    <CardTitle>{product.name}</CardTitle>
                }
                {renderPrice()}
                {loading ? "Loading" :
                    <Button onClick={() => dispatch(addItemToCart(product))}>Add to card</Button>
                }
            </CardBody>
        </Card>
    )
}

export default ProductItem;