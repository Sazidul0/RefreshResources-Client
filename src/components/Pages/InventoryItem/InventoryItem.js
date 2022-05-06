// import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


const InventoryItem = () => {
    const { collectionId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/items/${collectionId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])

    return (

        <div className='pt-5'>
            <div className='inventory-container d-flex justify-content-around'>
                <div>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
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
                        <button className='my-3 btn btn-dark'>Delevered</button>
                    </div>
                </div>

                <form className=''>
                    <h3>Restock: {item.name}</h3>
                    <input type="number" name="quantity" id="quantity" placeholder='Quantity' required />
                    <br />
                    <input className='mt-3 btn btn-dark' type="button" value="Update Quantity" />
                </form>
            </div>
            <br />
            <div className='d-flex justify-content-center'>
                <Link className='btn btn-dark ' to='/manageinventory'>Manage Inventories</Link>
            </div>

        </div>
    );
};

export default InventoryItem;