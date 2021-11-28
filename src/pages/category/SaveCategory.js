import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const SaveCategory = () => {

    const navigate = useNavigate();

    const [category, setCategory] = useState({
        name: ``,
    })

    const changeValue = (e) => {
        setCategory({
            ...category,
            [e.target.name]: e.target.value
        });
    }

    const submitProduct = (e) => {
        e.preventDefault(); // Sumbit does not take action and do own work
        fetch("http://localhost:8080/categories", {
            method: `POST`,
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(category),
        })
            .then((res) => {
                res.json();
            })
            .then((res) => {
                navigate("/ViewCategories")
            })
    }

    return (
        <div>
            <br />
            <Form onSubmit={submitProduct}>
                <Form.Group className="mb-3" controlId="ControlInput1">
                    <Form.Label>Category Name</Form.Label>
                    <Form.Control type="text" placeholder="write category name here" onChange={changeValue} name="name" />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                    save
                </Button>
            </Form>
        </div >
    );
};

export default SaveCategory;