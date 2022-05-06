import React from 'react';
import './Seasons.css'

const Seasons = () => {
    return (
        <div className='container'>
            <h3 className='d-flex justify-content-center'>Recent posts</h3>
            <div style={{ height: '1px' }} className='bg-dark mb-3'></div>
            <div className='seasons-container'>
                <div>
                    <img className='ms-2' src='https://iqit-commerce.com/ps16/modules/ph_simpleblog/covers/13-thumb.jpg' alt="" />
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                    <p className='d-flex justify-content-center'>Is Warehouse great?</p>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a diam odio. Nulla posuere ultricies laoreet. </p>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                </div>
                <div>
                    <img className='ms-2' src='https://iqit-commerce.com/ps16/modules/ph_simpleblog/covers/12-thumb.jpg' alt="" />
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                    <p className='d-flex justify-content-center'>Nobody knows</p>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a diam odio. Nulla posuere ultricies laoreet. </p>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                </div>
                <div>
                    <img className='ms-2' src='https://iqit-commerce.com/ps16/modules/ph_simpleblog/covers/11-thumb.jpg' alt="" />
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                    <p className='d-flex justify-content-center'>Your style is great</p>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a diam odio. Nulla posuere ultricies laoreet. </p>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                </div>
                <div>
                    <img className='ms-2' src='	https://iqit-commerce.com/ps16/modules/ph_simpleblog/covers/8-thumb.jpg' alt="" />
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                    <p className='d-flex justify-content-center'>Time to change</p>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a diam odio. Nulla posuere ultricies laoreet. </p>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                </div>
            </div>
        </div>
    );
};

export default Seasons;