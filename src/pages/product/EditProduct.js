import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // get categories
    const [categories, setcategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/categories")
            .then((res) => res.json())
            .then((res) => {
                setcategories(res);
            }); // asynchronous function
    }, []);

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

    const [imageURL, setImageURL] = useState([...product.image]);

    const changeValue = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
        if (e.target.name === "image" && e.target.value !== null) {
            setImageURL(e.target.value)
        }
    }

    const submitProduct = (e) => {
        e.preventDefault(); // Sumbit does not take action and do own work
        fetch("http://localhost:8080/products/" + id, {
            method: `PUT`,
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(product),
        })
            .then((res) => {
                res.json();
            })
            .then((res) => {
                navigate("/")
            })
    }

    return (
        <div>
            <br />
            <Form onSubmit={submitProduct}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Image</Form.Label>
                        <img className="phoneImage" alt="no image" src={product.image} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type="text" placeholder="write image URL here" onChange={changeValue} name="image" value={product.image} />
                    </Form.Group>

                </Row>
                <br />
                <Form.Group className="mb-3" controlId="ControlInput1">
                    <Form.Label>Product Title</Form.Label>
                    <Form.Control type="text" placeholder="write product title here" onChange={changeValue} name="name" value={product.name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Category</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={changeValue} name="category_id" value={product.category_id}>
                        <option>Select Category</option>
                        {categories.map((e) => (
                            <option key={e} value={e.id}>{e.name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="write product title here" onChange={changeValue} name="price" value={product.price} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Product description</Form.Label>
                    <Form.Control as="textarea" rows={5} onChange={changeValue} name="description" value={product.description} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Save
                </Button>
            </Form>

        </div >
    );
};

export default EditProduct;