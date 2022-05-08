import React from 'react';
import google from '../../../images/Social login/googleIcon.png';
import github from '../../../images/Social login/githubIcon.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';

const SocialLogIn = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const [token] = useToken(user);

    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger text-center'>Error: {error?.message}</p>
        </div>
    }

    if (loading) {
        return <Loading></Loading>
    }

    let from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='bg-dark w-25'></div>
                <p className='mt-2 mx-3'>Or</p>
                <div style={{ height: '1px' }} className='bg-dark w-25'></div>
            </div>
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-dark w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={google} alt="" />
                <span className='px-3'>Google Sign In</span>
            </button>


            {errorElement}
        </div>
    );
};

export default SocialLogIn;