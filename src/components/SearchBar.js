import React, { useEffect, useRef, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const SearchBar = () => {
    const navigate = useNavigate();
    // Auto Complete
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null);

    useEffect(() => {
        const items = [];
        const promises = new Array(20)
            .fill()
            .map((v, i) => fetch(`http://localhost:8080/products/${i + 1}`));
        Promise.all(promises).then(productArr => {
            return productArr.map(value =>
                value
                    .json()
                    .then(({ id, name }) =>
                        items.push({ id, name })
                    )
            );
        });
        setOptions(items);
    }, []);

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
            setDisplay(false);
        }
    };

    const updateProductDex = product => {
        setSearch(product);
        setDisplay(false);
    };

    const handleClick = () => {
        let index = "";

        options.map((value) => {
            if (value.name === search) {
                index = value.id
            }
        })

        console.log("index : " + index)
        navigate("/product/" + index)
    }
    return (
        <div>
            <Form className="d-flex" style={{ justifyContent: "center" }}>
                <Row>
                    <Col>
                        <div ref={wrapperRef} className="flex-container flex-column pos-rel" style={{ zIndex: 1 }}>
                            <input
                                style={{ width: "450px" }}
                                id="auto"
                                onClick={() => setDisplay(!display)}
                                placeholder="Search product by name"
                                value={search}
                                onChange={event => setSearch(event.target.value)}
                            />
                            {display && (
                                <div className="autoContainer">
                                    {options
                                        .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
                                        .map((value, i) => {
                                            return (
                                                <div
                                                    onClick={() => updateProductDex(value.name)}
                                                    className="option"
                                                    key={i}
                                                    tabIndex="0">
                                                    <span>{value.name}</span>
                                                </div>
                                            );
                                        })}
                                </div>
                            )
                            }
                        </div ></Col>
                    <Col>
                        <Button variant="outline-success" onClick={handleClick}>Search</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default SearchBar;