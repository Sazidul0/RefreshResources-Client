import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Fashon from '../Fashon/Fashon';
import Items from '../Items/Items';
import Seasons from '../Seasons/Seasons';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Items></Items>
            <div className='mt-3 d-flex justify-content-center'>
                <Link className='btn btn-dark' to='/manageinventory'>Manage Invantory</Link>
            </div>

            <Seasons></Seasons>
            <Fashon></Fashon>
        </div>
    );
};

export default Home;