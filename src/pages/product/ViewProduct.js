import React, { useEffect, useState } from 'react';
import '../../components/styles.css';
import { makeStyles } from "@material-ui/core/styles";
import { Col, Form, Row } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import SearchBar from '../../components/SearchBar';
import ProductItem from '../../components/ProductItem';
import Pagination from '../../components/Pagination';

const ViewProduct = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/categories")
            .then((res) => res.json())
            .then((res) => {
                setCategories(res);
            }); // asynchronous function
    }, []);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/products")
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
                setLoading(false);
            });
    }, []);

    const useStyles = makeStyles({
        gridContainer: {
            paddingLeft: "40px",
            paddingRight: "40px"
        }
    });
    const classes = useStyles();

    // Pagenation
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(5);

    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;

    const currentProducts = products.slice(indexOfFirst, indexOfLast)


    const [value, setValue] = useState("0");

    const changeValue = (e) => {
        if (e.target.value !== "0") {
            setValue(e.target.value)
        }
    }

    return (
        <div>
            {/* <ProductTable /> */}
            <br />
            <Form className="d-flex" style={{ justifyContent: "center" }}>
                <Row style={{ paddingRight: "50px" }}>
                    <Col>
                        <Form.Group controlId="formGridAddress1">
                            <Form.Select style={{ width: "450px" }} aria-label="Default select example" onChange={changeValue} name="category_id">
                                <option value={"0"}>ALL</option>
                                {categories.map((e) => (
                                    <option key={e} value={e.id}>{e.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>

                </Row>
                <SearchBar />
            </Form>
            <br />

            <Grid
                container
                spacing={4}
                className={classes.gridContainer}
                justify="center"
            >
                <ProductItem products={currentProducts} loading={loading} ></ProductItem>
            </Grid>
            <br />
            <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={setCurrentPage}></Pagination>

        </div>

    );
};

export default ViewProduct;