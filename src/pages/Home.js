import React, { useEffect, useState } from 'react';
import ImageSlider from '../components/ImageSlider';
import Carousel from 'react-elastic-carousel';
import "./SearchBarStyle.css";
import HomeProductItem from '../components/HomeProductItem';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/products/dec")
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
    }, []);

    // Carousel
    const breakPoints = [
        { width: 500, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 },
        { width: 1500, itemsToShow: 4 }
    ]

    return (
        <div>
            <ImageSlider />
            <br />
            <h3 style={{ backgroundColor: "gray", color: "white", width: "90%", marginLeft: "5%" }}>New Products</h3>
            <Carousel breakPoints={breakPoints}>
                {products.map((product) => (
                    <HomeProductItem key={product.id} products={product} />
                ))}
            </Carousel>
            <br />
        </div>
    );
};

export default Home;