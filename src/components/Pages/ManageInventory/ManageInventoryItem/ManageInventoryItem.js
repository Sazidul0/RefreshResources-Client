import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';

const ManageInventoryItem = ({ item }) => {
    const { name, img, description, price, supplierName, quantiy } = item;
    return (
        <div>
            <CardGroup className=''>
                <Card>
                    <Card.Img variant="top" src={img} className='' />
                    <Card.Body>
                        <Card.Title className=''><b>{name}</b></Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            <b> Price:</b> {price}
                        </Card.Text>
                        <Card.Text>
                            <b>Quantiy:</b> {quantiy}
                        </Card.Text>
                        <Card.Text>
                            <b> Supplier Name:</b> {supplierName}
                        </Card.Text>
                        <Button className='me-5' variant="dark">{name}</Button>
                        <Button className='ms-5' variant="danger">Delete</Button>

                    </Card.Body>

                </Card>
            </CardGroup>
        </div>
    );
};

export default ManageInventoryItem;