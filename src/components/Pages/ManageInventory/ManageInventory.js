import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems';


const ManageInventory = () => {
    const navigate = useNavigate();

    const [items, setItems] = useItems();


    // Delete Item from Manage Inventory
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/items/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
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
                <Link to='/additem' className=' btn btn-dark position-absolute top-50 end-0'>Add New Item</Link>
            </div>
            <div className='container items-container'>
                {
                    items.map(item => <div key={item._id}>
                        <CardGroup className=''>
                            <Card>
                                <Card.Img variant="top" src={item.img} className='' />
                                <Card.Body>
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
                                    <Button onClick={() => navigateToCollectionDetail(item._id)} className='me-5' variant="dark">{item.name}</Button>
                                    <Button className='ms-5' variant="danger" onClick={() => handleDelete(item._id)}>Delete</Button>

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