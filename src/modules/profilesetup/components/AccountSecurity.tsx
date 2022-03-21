import React, { SyntheticEvent, useEffect, useState } from 'react';
import useAppSelector from '../../../helpers/useAppSelector';
import { getProfile } from '../../common/apis';

import Button from '../../common/components/Button';
import { EmailIcon, IconSquareEdit, PlusIcon, TelephoneIcon } from '../../common/components/Icons';
import InputGroup from '../../common/components/InputGroup';
import { ProfileProps } from '../../common/types';
import { AddNumber } from '../apis';

const AccountSecurity = () => {
  const profileInfo: ProfileProps = useAppSelector('common.profile');
  const [isShowInput, setIsShowInput] = useState<boolean>(false);
  const [contact, setContact] = useState<string>('');

  useEffect(() => {
    getProfile();
  }, [])

  const onChange = (e: SyntheticEvent): void => {
    const { value } = e.target as HTMLInputElement;
    setContact(value);
  } 

  const onAddNumber = (): void => {
    AddNumber({ contact }, () => {
      getProfile();
      setIsShowInput(false);
    })
  }

  return (
    <>
    <div className="flex flex-col space-y-3">
      <h1 className="text-sm text-gray-400">(Step 4 out of 4)</h1>
      <p className="text-xs text-gray-700 font-light tracking-wide leading-5">
        Trust and safety is a big deal in our community. Please verify your email and phone number so
        that we can keep your account secured.
      </p>
      <h1 className="text-xs text-gray-400 italic font-light">
        <span className="text-red-500">*</span>Mandatory
      </h1>
      <h1 className="text-xs text-gray-700 font-medium tracking-wide pt-4 uppercase">
        Your Social Presence
      </h1>
      <div className="flex flex-col space-y-4 pt-3">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 items-center">
            <EmailIcon />
            <h1 className="text-xs text-gray-700 font-medium">Email: <span className='font-bold'>{profileInfo.email}</span></h1>
          </div>
          <Button className="px-4 uppercase border border-green-600 text-green-600">
            Verified
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 items-center">
            <TelephoneIcon />
            
            {
              isShowInput ?
              <InputGroup
                value={contact}
                onChange={onChange}
                className='w-full mr-3'
                type='text'
                placeholder='09123456789'
                icon={
                  <Button
                    className='py-0 font-bold'
                    onClick={onAddNumber}
                  >
                    ADD
                  </Button>
                }
              /> :
              <h1 className="text-xs text-gray-700 font-medium">
                Phone: <span className='font-bold'>{profileInfo.contact && `${profileInfo.contact}`}</span>
              </h1>
            }
          </div>
          <Button
            className="px-4 uppercase border border-gray-700 text-gray-700 font-bold"
            onClick={() => setIsShowInput(!isShowInput)}
          >
            {
              profileInfo.contact ?
              <IconSquareEdit /> :
              <PlusIcon />
            }
          </Button>
        </div>
      </div>
    </div>

    
    </>
  );
};

export default AccountSecurity;
