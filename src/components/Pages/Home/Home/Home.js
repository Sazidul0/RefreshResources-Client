import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Items></Items>
            <div className='mt-3 d-flex justify-content-center'>
                <Link className='btn btn-dark' to='/manageinventory'>Manage Invantory</Link>
            </div>

        </div>
    );
};

export default Home;