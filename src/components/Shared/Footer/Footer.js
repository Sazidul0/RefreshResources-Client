import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-dark text-white mt-5 px-3 py-4 text-center'>
            <h2 className=''>Refresh Resources</h2>
            <p className='mb-0'><small>Copyright © {year}</small></p>
        </div>
    );
};

export default Footer;