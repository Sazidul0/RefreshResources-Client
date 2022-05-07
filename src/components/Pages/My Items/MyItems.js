import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading'
import axios from 'axios'
import { Card, CardGroup } from 'react-bootstrap';
import { Button } from 'bootstrap';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';



const MyItems = () => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);

    const [items, setItems] = useState([]);

    // Delete Item from a particular email
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            console.log(id);
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

    // if (loading) {
    //     return <Loading></Loading>
    // }

    // useEffect(() => {
    //     const email = user.email;
    //     const url = `http://localhost:5000/items?email=${email}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setItems(data));
    // }, [user])

    useEffect(() => {

        const getItems = async () => {
            const email = await user?.email;
            const url = `http://localhost:5000/allitem?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setItems(data);
            }
            catch (error) {
                console.log(error)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }

        getItems();
    }, [user])

    return (
        <div className='pt-4'>
            <h2 className='text-center pb-2'>User: {user?.email}</h2>

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
                                        <b>Quantiy:</b> {item.quantiy}s
                                    </Card.Text>
                                    <Card.Text>
                                        <b> Supplier Name:</b> {item.supplierName}
                                    </Card.Text>
                                    <button onClick={() => handleDelete(item._id)} className='btn btn-danger'>Delete</button>
                                    {/* <Button className='ms-5' variant="danger" >Delete</Button> */}

                                </Card.Body>

                            </Card>
                        </CardGroup>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;