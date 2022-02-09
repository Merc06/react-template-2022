import _ from 'lodash';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import stringToObject from '../../../helpers/stringToObject';
import Success from '../../../images/Success.png';
import Button from '../../common/components/Button';
import { IconEye, IconEyeSlash } from '../../common/components/Icons';
import Input from '../../common/components/Input';
import InputGroup from '../../common/components/InputGroup';
import { signupVerify } from '../apis';
import { INIT_CREATE_ACCOUNT_STATE } from '../constants';
import { CreateAccountState } from '../types';

const CreateAccount = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams: any = stringToObject(location.search);
  
  const [isShowPass1, setIsShowPass1] =  useState<boolean>(false);
  const [isShowPass2, setIsShowPass2] =  useState<boolean>(false);

  useEffect(() => {
    _.isEmpty(searchParams) && navigate('/');
  })

  const [state, setState] = useState<CreateAccountState>(INIT_CREATE_ACCOUNT_STATE);

  const onChange = (e: SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setState({
      ...state,
      [name]: value,
    });
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const payload: CreateAccountState = {
      ...state,
      email: searchParams.email,
      code: searchParams.code
    }
    signupVerify(payload, () => {
      navigate('/user-type');
    });
  }
  
  return (
    <div className="flex flex-col pt-12 px-6 items-center">
      <h1 className="text-gray-800 text-2xl font-bold text-center">Your email is now <br /> verified</h1>
      <img src={Success} alt="Success Illustration" className="h-52 mt-5" />

      <form
        className="space-y-3 flex flex-col items-center"
        onSubmit={onSubmit}
      >
        <h1 className="text-gray-600 text-xs text-center mt-5">Please create a unique username and <br /> password fro your login.</h1>
        <Input
          className='w-64'
          type="text"
          placeholder="Username"
          name='username'
          value={state.username}
          onChange={onChange}
        />
        <InputGroup
          className='w-64'
          type={`${isShowPass1 ? 'text' : 'password'}`}
          placeholder="Password"
          name='password'
          value={state.password}
          onChange={onChange}
          icon={
            <div onClick={() => setIsShowPass1(!isShowPass1)}>
              {
                isShowPass1 ?
                <IconEye /> :
                <IconEyeSlash />
              }
            </div>
          }
        />
        <InputGroup
          className='w-64'
          type={`${isShowPass2 ? 'text' : 'password'}`}
          placeholder="Confirm Password"
          name='password_confirmation'
          value={state.password_confirmation}
          onChange={onChange}
          icon={
            <div onClick={() => setIsShowPass2(!isShowPass2)}>
              {
                isShowPass2 ?
                <IconEye /> :
                <IconEyeSlash />
              }
            </div>
          }
        />
        <Button
          className="bg-accent w-64 font-bold"
          type="submit"
        >
          NEXT
        </Button>
      </form>

      <div className="flex justify-center items-center space-x-2 pt-12 pb-7">
        <h1 className="text-xs text-blue-700">Terms of Use</h1>
        <h1 className="text-xs text-blue-700">•</h1>
        <h1 className="text-xs text-blue-700">Privacy Policy</h1>
      </div>
    </div>
  );
};

export default CreateAccount;
