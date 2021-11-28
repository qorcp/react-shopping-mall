import { Grid } from '@material-ui/core';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./styles.css"

const ProductItem = ({ products, loading }) => {

    return (

        <>
            {loading &&
                <div> loading... </div>
            }

            {products.map(product => (
                <Grid item xs={10} sm={4} md={2}>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={product.image} />
                        <hr />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <br />
                            <Card.Text>{product.price + " VND"}</Card.Text>
                            <Link to={`/product/` + product.id} className="btn btn-primary">
                                View Detail
                            </Link>
                        </Card.Body>
                    </Card>

                </Grid>
            ))}
        </>
    );
};

export default ProductItem;