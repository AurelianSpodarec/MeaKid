import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


const ProductItem = ({ product, loading }) => {


    return (
        <Card>
            {loading ? "Loading" :
                <CardImg top width="100%" src={product.image} alt="Card image cap" />
            }
            <CardBody>
                {loading ? <CardTitle>Loading</CardTitle> :
                    <CardTitle>{product.name}</CardTitle>
                }

            </CardBody>
        </Card>
    )
}

export default ProductItem;