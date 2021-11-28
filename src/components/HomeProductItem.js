import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./styles.css"

const HomeProductItem = (props) => {
    const { id, name, price, image } = props.products;

    return (

        <Container>
            <Row>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={image} />
                    <hr />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <br />
                        <Card.Text>{price + " VND"}</Card.Text>
                        <Link to={`/product/` + id} className="btn btn-primary">
                            View Detail
                        </Link>
                    </Card.Body>
                </Card>

            </Row>
        </Container>

    );
};

export default HomeProductItem;