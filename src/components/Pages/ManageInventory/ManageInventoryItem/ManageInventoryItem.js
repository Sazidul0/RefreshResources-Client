// import React from 'react';
// import { Button, Card, CardGroup } from 'react-bootstrap';
// import useItems from '../../../../hooks/useItems';

// const ManageInventoryItem = () => {


//     const [items, setItems] = useItems();

//     const handleDelete = id => {
//         const proceed = window.confirm('Are you sure?');
//         if (proceed) {
//             const url = `http://localhost:5000/items/${id}`;

//             fetch(url, {
//                 method: 'DELETE'
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data)
//                     const remaining = items.filter(newitem => newitem._id !== id);
//                     setItems(remaining);
//                 })
//         }
//     }

//     // const { _id, name, img, description, price, supplierName, quantiy } = item;

//     return (
//         <div>
//             {
//                 items.map(item => <div>
//                     <CardGroup className=''>
//                         <Card>
//                             <Card.Img variant="top" src={item.img} className='' />
//                             <Card.Body>
//                                 <Card.Title className=''><b>{item.name}</b></Card.Title>
//                                 <Card.Text>
//                                     {item.description}
//                                 </Card.Text>
//                                 <Card.Text>
//                                     <b> Price:</b> {item.price}
//                                 </Card.Text>
//                                 <Card.Text>
//                                     <b>Quantiy:</b> {item.quantiy}
//                                 </Card.Text>
//                                 <Card.Text>
//                                     <b> Supplier Name:</b> {item.supplierName}
//                                 </Card.Text>
//                                 <Button className='me-5' variant="dark">{item.name}</Button>
//                                 <Button className='ms-5' variant="danger" onClick={() => handleDelete(item._id)}>Delete</Button>

//                             </Card.Body>

//                         </Card>
//                     </CardGroup>
//                 </div>)
//             }
//         </div>
//     );
// };

// export default ManageInventoryItem;