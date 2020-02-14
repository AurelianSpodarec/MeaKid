import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


const ProductItem = ({ product }) => {


    return (
        <Card>
            <CardImg top width="100%" src={product.image} alt="Card image cap" />
            <CardBody>
                <CardTitle>{product.name}</CardTitle>

            </CardBody>
        </Card>
    )
}

export default ProductItem;