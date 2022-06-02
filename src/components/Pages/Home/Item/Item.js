import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = (props) => {
    const { _id, name, img, price, description, quantiy, supplierName } = props.item;
    const navigate = useNavigate();

    const navigateToCollectionDetail = id => {
        navigate(`/collection/${id}`);
    }

    return (
        <div>
            <CardGroup className=''>
                <Card className='card-container per-item-container shadow border-0'>
                    <Card.Img variant="top" src={img} className='per-item-image' />
                    <Card.Body className='ms-3'>
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
                        <Button className='mb-3' onClick={() => navigateToCollectionDetail(_id)} variant="dark">Update</Button>

                    </Card.Body>

                </Card>
            </CardGroup>
        </div >
    );
};

export default Item;