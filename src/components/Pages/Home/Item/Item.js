import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
    const { name, img, price, description, quantiy, supplierName } = props.item;
    const navigate = useNavigate();

    const navigateToCollectionDetail = name => {
        navigate(`/collection/${name}`);
    }

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
                        <Button onClick={() => navigateToCollectionDetail(name)} variant="dark">{name}</Button>

                    </Card.Body>

                </Card>
            </CardGroup>
        </div >
    );
};

export default Item;