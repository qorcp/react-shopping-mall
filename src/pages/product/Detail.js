import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Detail = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/products/" + id)
            .then((res) => res.json())
            .then((res) => {
                setProduct(res);
            }); // asynchronous function
    }, []);

    const [product, setProduct] = useState({
        name: ``,
        price: ``,
        description: ``,
        category_id: ``,
        image: ``,
    })
    const [category, setcategory] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/categories")
            .then((res) => res.json())
            .then((res) => {
                setcategory(res);
            }); // asynchronous function
    }, []);

    const deleteProduct = () => {
        fetch("http://localhost:8080/products/" + id, {
            method: `DELETE`,
        })
            .then((res) => {
                res.text()
            })
            .then((res) => {
                navigate("/")
            })
    }

    const cancelEdition = () => {
        navigate("/ViewProduct")
    }

    const editProduct = () => {
        navigate("/EditProduct/" + id)
    }

    return (

        <div>
            <br />
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Image</Form.Label>
                        <img className="phoneImage" alt="iPhone_01" src={product.image} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type="text" placeholder="write image URL here" value={product.image} />
                    </Form.Group>

                </Row>
                <br />
                <Form.Group className="mb-3" controlId="ControlInput1">
                    <Form.Label>Product Title</Form.Label>
                    <Form.Control type="text" placeholder="write product title here" value={product.name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Category</Form.Label>
                    <Form.Select aria-label="Default select example" value={product.category_id}>
                        <option>Select Category</option>
                        {category.map((e) => (
                            <option key={e} value={e.id}>{e.name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="write product title here" value={product.price} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Product description</Form.Label>
                    <Form.Control as="textarea" rows={5} value={product.description} />
                </Form.Group>
                <Button variant="danger" onClick={deleteProduct}>delete</Button>
                {` `}
                <Button variant="primary" onClick={editProduct}>edit</Button>
                <br />
                <br />
                <Button variant="warning" onClick={cancelEdition}>Cancel</Button>
            </Form>

        </div >

    );
};

export default Detail;