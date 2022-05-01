

import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'

const AddItems = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/items`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }



    return (
        <div>
            <h2 className='text-center pt-5'>Add an Item</h2>
            <Form className='w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicName">

                    <Form.Control  {...register("name")} type="text" placeholder="Enter Item Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="description">


                    <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
                        <Form.Control  {...register("description")} as="textarea" placeholder="Leave a comment here" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="url">

                    <Form.Control  {...register("img")} type="text" placeholder="imageURL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="price">

                    <Form.Control  {...register("price")} type="number" placeholder="Price" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="quantity">

                    <Form.Control  {...register("quantiy")} type="number" placeholder="Quantity" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="supplierName">

                    <Form.Control  {...register("supplierName")} type="text" placeholder="Enter Supplier Name" required />

                </Form.Group>

                <Button variant="dark" type="submit" className='d-block w-100 mt-4 mb-2'>
                    Add
                </Button>

            </Form>
        </div>
    );
};

export default AddItems;