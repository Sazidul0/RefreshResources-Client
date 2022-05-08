import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../images/Banner/banner04.png'
import banner2 from '../../../../images/Banner/banner05.png'
import banner3 from '../../../../images/Banner/banner03.png'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-dark'>
                        <h3>Choose Your Collections</h3>
                        <p>Visit and Choose the item you prefar.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='text-dark'>
                        <h3>Add Your Stocks</h3>
                        <p>You can also add your stock and sell.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='text-dark'>
                        <h3>Fresh Collection</h3>
                        <p>We keep up to date our collection.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;