import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import ManageInventoryItem from './ManageInventoryItem/ManageInventoryItem';

const ManageInventory = () => {
    const [items] = useItems();
    return (
        <div>
            <div className='position-relative container'>
                <h2 className='text-center pt-5 pb-4'>Manage Inventory</h2>
                <Link to='/additem' className=' btn btn-dark position-absolute top-50 end-0'>Add New Item</Link>
            </div>
            <div className='container items-container'>
                {
                    items.map(item => <ManageInventoryItem key={item.id} item={item}></ManageInventoryItem>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;