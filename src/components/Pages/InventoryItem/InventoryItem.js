// import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './InventoryItem.css'



const InventoryItem = () => {


    const { collectionId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://ancient-hamlet-40943.herokuapp.com/items/${collectionId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])



    const updateQuantityToServer = quantiy => {

        const updatedUser = { quantiy };
        // Update data to the Server
        const url = `https://ancient-hamlet-40943.herokuapp.com/items/${collectionId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(result => {

                const { name, img, description, price, supplierName } = item;
                setItem({ quantiy, name, img, description, price, supplierName });
                if (result.modifiedCount) {
                    toast('Successfuly Updated Quantity')
                }
            })

    }



    const handleUpdateQuantity = event => {
        event.preventDefault();
        const quantiy = event.target.quantity.value
        updateQuantityToServer(quantiy);
        event.target.reset();

    }


    const handleDelevered = () => {
        let quantiy = item.quantiy - 1;
        updateQuantityToServer(quantiy);
    }


    return (

        <div className='pt-5'>
            <div className='inventory-container d-flex justify-content-around'>
                <div>
                    <Card style={{ width: '20rem' }} className="per-item-container shadow border-0 mb-3">
                        <Card.Img variant="top" src={item.img} className='per-item-image' />
                        <Card.Body className='mb-3 ms-3'>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Card.Text>
                                <b> Price:</b> {item.price}
                            </Card.Text>
                            <Card.Text>
                                <b>Quantiy:</b> {item.quantiy}
                            </Card.Text>
                            <Card.Text>
                                <b> Supplier Name:</b> {item.supplierName}
                            </Card.Text>
                            {/* <Button variant="primary">Delivered</Button> */}
                        </Card.Body>
                    </Card>
                    <div className='d-flex justify-content-center'>
                        <button onClick={handleDelevered} className='my-3 btn btn-dark'>Delevered</button>
                    </div>
                </div>

                <div className='d-flex align-items-center restock-quantity-container'>
                    <form className='' onSubmit={handleUpdateQuantity}>
                        <h3>Restock: {item.name}</h3>
                        <input type="number" name="quantity" id={item._id} placeholder='Quantity' required />
                        <br />
                        <input className='mt-3 btn btn-dark' type="submit" value="Update Quantity" />
                    </form>
                </div>
            </div>
            <br />
            <div className='d-flex justify-content-center'>
                <Link className='btn btn-dark ' to='/manageinventory'>Manage Inventories</Link>
            </div>

        </div>
    );
};

export default InventoryItem;