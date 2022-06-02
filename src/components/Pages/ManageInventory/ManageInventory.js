import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useItems from '../../../hooks/useItems';
import './ManageInventory.css'


const ManageInventory = () => {
    const navigate = useNavigate();

    const [items, setItems] = useItems();


    // Delete Item from Manage Inventory
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://ancient-hamlet-40943.herokuapp.com/items/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast('Dleted');
                    }
                    const remaining = items.filter(newitem => newitem._id !== id);
                    setItems(remaining);
                })
        }
    }


    const navigateToCollectionDetail = id => {
        navigate(`/collection/${id}`);
    }


    return (
        <div>
            <div className='position-relative container'>
                <h2 className='text-center pt-5 pb-4'>Manage Inventory</h2>
                <div className='add-new-item-container'>
                    <Link to='/additem' className=' btn btn-dark position-absolute top-50 end-0 add-new-item-btn'>Add New Item</Link>
                </div>
            </div>
            <div className='container items-container'>
                {
                    items.map(item => <div key={item._id}>
                        <CardGroup className='manage-cardgroup-container'>
                            <Card className='card-container per-item-container shadow border-0'>
                                <Card.Img variant="top" src={item.img} className='per-item-image' />
                                <Card.Body className='ms-3'>
                                    <Card.Title className=''><b>{item.name}</b></Card.Title>
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
                                    <Button onClick={() => navigateToCollectionDetail(item._id)} className='me-5 mb-3' variant="dark">Update</Button>
                                    <Button className='ms-5 mb-3' variant="danger" onClick={() => handleDelete(item._id)}>Delete</Button>

                                </Card.Body>

                            </Card>
                        </CardGroup>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;