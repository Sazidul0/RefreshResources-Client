import React from 'react';
import useItems from '../../../../hooks/useItems';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items] = useItems();

    if (items.length > 6) {
        const rest = items.length - 6;
        // console.log(rest);
        for (let i = 0; i < rest; i++) {
            items.pop();
        }
    }

    return (
        <div>
            <h2 className='d-flex justify-content-center items-header'>Collections</h2>
            <div className='container items-container'>

                {
                    items.map(item => <Item key={item.id} item={item}></Item>)
                }

            </div>
        </div>
    );
};

export default Items;