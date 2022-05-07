import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogIn from '../../Shared/SocialLogIn/SocialLogIn';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import axios from 'axios';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || '/';

    if (user) {
        // navigate(from, { replace: true });
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }

    return (
        <div className='login-container'>
            <h2 className='d-flex justify-content-center'>Please Log In</h2>
            <Form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="dark" type="submit" className='d-block w-100 mt-4 mb-2'>
                    Log In
                </Button>
                {errorElement}

                <p>Don't have an account? <Link to='/register'>Please Register</Link></p>
            </Form>

            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Login;