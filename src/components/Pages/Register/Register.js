import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import SocialLogIn from '../../Shared/SocialLogIn/SocialLogIn';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const location = useLocation();
    const navigate = useNavigate();
    const [token] = useToken(user);

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    let from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
        }
        else {
            toast("Password and Confirm Password didn't matched");
        }
    }

    return (
        <div className='login-container'>
            <h2 className='d-flex justify-content-center'>Please Register</h2>
            <Form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">

                    <Form.Control className='input-field' type="text" placeholder="Enter Your Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control className='input-field' ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control className='input-field' ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">

                    <Form.Control className='input-field' ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required />
                </Form.Group>

                <Button variant="dark" type="submit" className='d-block w-100 mt-4 mb-2 login-register-btn'>
                    Register
                </Button>
                {errorElement}

                <p>Already have an account? <Link to='/login'>Please Log In</Link></p>
            </Form>

            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Register;