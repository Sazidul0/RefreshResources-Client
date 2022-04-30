import React from 'react';
import { Link, useParams } from 'react-router-dom';


const InventoryItem = () => {
    const { collectionId } = useParams();

    return (

        <div>
            <h2>Inventory: {collectionId}</h2>

            <form className=''>
                <input type="number" name="quantity" id="quantity" placeholder='Quantity' required />
                <br />
                <input className='btn btn-dark' type="button" value="Update Quantity" />
            </form>
            <br />
            <Link className='btn btn-dark' to='/manageinventory'>Manage Inventories</Link>
        </div>
    );
};

export default InventoryItem;