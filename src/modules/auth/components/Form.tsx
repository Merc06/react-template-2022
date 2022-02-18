import React, { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../common/components/Button';
import { IconEye, IconEyeSlash } from '../../common/components/Icons';
import Input from '../../common/components/Input';
import InputGroup from '../../common/components/InputGroup';
import { loginEmail, signupEmail } from '../apis';
import VerifiedModal from './VerifiedModal';

interface FormProps {
    email: string;
    password: string;
}

const initFormState = {
    email: "",
    password: ""
}

const Form = () => {
    const navigate = useNavigate();

    const [state, setState] = useState<FormProps>(initFormState);
    const [type, setType] = useState<'SIGNUP' | 'LOGIN'>('LOGIN');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isShowPass, setIsShowPass] =  useState<boolean>(false);

    const onChange = (e: SyntheticEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setState({
            ...state,
            [name]: value
        })
    }

    const onSubmit = (event: SyntheticEvent, btnType: 'SIGNUP' | 'LOGIN') => {
        event.preventDefault();
        if (btnType === 'SIGNUP') {
            const { email } = state; 
            const payload = { email };
            signupEmail(payload, () => {
                setIsModalOpen(true);
            });
        } else {
            // LOGIN PROCESS ...
            const payload = {
                username: state.email,
                password: state.password
            }

            loginEmail(payload, () => {
                navigate('/');
            });
        }
    }

    return (
        <>
        <form onSubmit={(event) => onSubmit(event, type)} className='py-3 space-y-3 text-xs'>
            <Input
                value={state.email}
                onChange={onChange}
                name="email"
                placeholder="Email"
            />
            {
                type === 'LOGIN' &&
                <InputGroup
                    type={`${isShowPass ? 'text' : 'password'}`}
                    placeholder="Password"
                    name='password'
                    value={state.password}
                    onChange={onChange}
                    icon={
                    <div onClick={() => setIsShowPass(!isShowPass)}>
                        {
                        isShowPass ?
                        <IconEye /> :
                        <IconEyeSlash />
                        }
                    </div>
                    }
                />
            }
            <Button
                type='submit'
                className='uppercase bg-accent text-grayblack font-bold w-full'
            >
                { type === 'LOGIN' ? 'Login' : 'Signup' } with Email
            </Button>

            {
                type === 'LOGIN' &&
                <div className="flex justify-between items-center text-grayblack">
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" />
                        <p>Remember Me</p>
                    </div>

                    <Link to="/">Forgot Password</Link>
                </div>
            }

            {/* <div className='border-b border-gray-200 py-1' /> */}

            <div className='flex justify-center items-center space-x-1 py-1'>
                {
                    type === 'LOGIN' ?
                    <>
                    <p>Not a member yet?</p>
                    <span onClick={() => setType('SIGNUP')} className='text-blue-800 cursor-pointer font-bold'>Join now</span> 
                    </> :
                    <>
                    <p>Already a member?</p>
                    <span onClick={() => setType('LOGIN')} className='text-blue-800 cursor-pointer font-bold'>Login</span>
                    </>
                }
            </div>
        </form>
        <VerifiedModal 
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            email={state.email}
        />
        </>
    );
};

export default Form;