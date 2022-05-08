import React from 'react';
import './Seasons.css'

const Seasons = () => {
    return (
        <div className='container mt-5 py-5'>
            <h3 className=' d-flex justify-content-center'>Recent posts</h3>
            <div style={{ height: '1px' }} className='bg-dark mb-3'></div>
            <div className='seasons-container'>
                <div>
                    <div className='d-flex justify-content-center'>
                        <img className='' src='https://iqit-commerce.com/ps16/modules/ph_simpleblog/covers/13-thumb.jpg' alt="" />
                    </div>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                    <p className='d-flex justify-content-center'>Is Warehouse great?</p>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                    <p>Discover our range of autumn clothing & shoes at Refresh Resources. Shop essential items you need to update your autumn wardrobe .</p>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                </div>
                <div>
                    <div className='d-flex justify-content-center'>
                        <img className='' src='https://iqit-commerce.com/ps16/modules/ph_simpleblog/covers/12-thumb.jpg' alt="" />
                    </div>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                    <p className='d-flex justify-content-center'>Nobody knows</p>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                    <p> Fabrics like cotton, eyelet, tropical wool and linen are the most commonly used for spring dresses. For more visit our spring collection. </p>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                </div>
                <div>
                    <div className='d-flex justify-content-center'>
                        <img className='' src='https://iqit-commerce.com/ps16/modules/ph_simpleblog/covers/11-thumb.jpg' alt="" />
                    </div>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                    <p className='d-flex justify-content-center'>Your style is great</p>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                    <p>This season take the heat with open arms by falling for the summer clothing collection and its lightweight, flowing and comfortable clothes. </p>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                </div>
                <div>
                    <div className='d-flex justify-content-center'>
                        <img className='' src='	https://iqit-commerce.com/ps16/modules/ph_simpleblog/covers/8-thumb.jpg' alt="" />
                    </div>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                    <p className='d-flex justify-content-center'>Time to change</p>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                    <p>Winter clothes are especially outerwear like coats, jackets, hats, scarves and gloves or mittens, earmuffs, but also warm like union suits and socks. </p>
                    <div style={{ height: '1px' }} className='bg-dark'></div>
                </div>
            </div>
        </div>
    );
};

export default Seasons;