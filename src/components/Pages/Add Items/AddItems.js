
import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const AddItems = () => {
    return (
        <div>
            <h2 className='text-center pt-5'>Add an Item</h2>
            <Form className='w-50 mx-auto' >
                <Form.Group className="mb-3" controlId="formBasicName">

                    <Form.Control type="text" placeholder="Enter Item Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="description">

                    {/* <Form.Control  type="text" placeholder="D" required /> */}
                    {/* <textarea name="description" id="descriotion" cols="50" placeholder='Description' required></textarea> */}
                    <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
                        <Form.Control as="textarea" placeholder="Leave a comment here" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="url">

                    <Form.Control type="text" placeholder="imageURL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="price">

                    <Form.Control type="number" placeholder="Price" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="quantity">

                    <Form.Control type="number" placeholder="Quantity" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="supplierName">

                    <Form.Control type="text" placeholder="Enter Supplier Name" required />

                </Form.Group>

                <Button variant="dark" type="submit" className='d-block w-100 mt-4 mb-2'>
                    Add
                </Button>

            </Form>
        </div>
    );
};

export default AddItems;