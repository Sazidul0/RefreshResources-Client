import React from 'react';
import notFound from '../../../images/404.png'

const PageNotFound = () => {
    return (
        <div className='text-center'>
            {/* <h1>404</h1>
            <h2>Page Not Found</h2> */}
            <img className='w-100 container-fluid m-0 p-0' src={notFound} alt="" />
        </div>
    );
};

export default PageNotFound;