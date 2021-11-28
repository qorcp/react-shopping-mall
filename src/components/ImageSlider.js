import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageSlider = () => {
  return (
    <Carousel >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://salt.tikicdn.com/cache/w1080/ts/banner/7e/6c/59/5c6fd73c5276c0cf1c4c78a6e0a1020b.png.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>This is the test 1 image</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://salt.tikicdn.com/cache/w1080/ts/banner/9b/98/f4/740a2b113371929ccc6cddb0d4d13d72.png.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>This is the test 2 image</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://salt.tikicdn.com/cache/w1080/ts/banner/4d/2d/11/7ed82481e26f97c46b906901199061f2.png.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>This is the test 3 image</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;