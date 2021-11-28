import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

const EditCategory = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [category, setCategory] = useState({
        name: ``,
    })

    useEffect(() => {
        fetch("http://localhost:8080/categories/" + id)
            .then((res) => res.json())
            .then((res) => {
                console.log(1, res);
                setCategory(res);
            }); // asynchronous function
    }, []);

    const changeValue = (e) => {
        setCategory({
            ...category,
            [e.target.name]: e.target.value
        });
    }

    const submitProduct = (e) => {
        e.preventDefault(); // Sumbit does not take action and do own work
        fetch("http://localhost:8080/categories/" + id, {
            method: `PUT`,
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

    const cancelEdition = () => {
        navigate("/ViewCategories")
    }

    const deleteCategory = () => {
        fetch("http://localhost:8080/categories/" + id, {
            method: `DELETE`,
        })
            .then((res) => {
                res.text()
            })
            .then((res) => {
                navigate("/ViewCategories")
            })
    }

    return (
        <div>
            <br />

            <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Label>Category Name</Form.Label>
                <Form.Control type="text" placeholder="write category name here" onChange={changeValue} name="name" value={category.name} />
            </Form.Group>
            <br />
            <Button variant="danger" onClick={deleteCategory}>delete</Button>
            <br />
            <br />
            <Button variant="warning" onClick={cancelEdition}>Cancel</Button>
            {` `}
            <Button variant="primary" onClick={submitProduct}>Save</Button>

        </div>
    );
};

export default EditCategory;