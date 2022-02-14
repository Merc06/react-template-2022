import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getToken from '../../helpers/getToken';
import Form from './components/Form';
import Header from './components/Header';
import LoginWithDoc from './components/LoginWithDoc';


const Auth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        getToken() && navigate('/home');
    })

    return (
        <div className='p-4 mx-8'>
            <Header />
            <LoginWithDoc />
            <div className="relative my-3">
                <p className="text-gray-300 bg-[#fafafa] absolute top-0 left-1/2 -translate-x-2/4 px-3 text-xs">OR</p>
                <div className='border-b border-gray-300 pt-2' />
            </div>
            <Form />
        </div>
    );
};

export default Auth;