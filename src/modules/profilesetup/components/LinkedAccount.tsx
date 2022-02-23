import _ from 'lodash';
import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import toast from 'react-hot-toast';
import useAppSelector from '../../../helpers/useAppSelector';

import Button from '../../common/components/Button';
import { FbIcon, GithubIcon, GoogleIcon, StackOverflowIcon, TwitterIcon } from '../../common/components/Icons';
import { getLinkedAccountsList, linkAccount } from '../apis';
import { LinkedAccountProps } from '../types';

const LinkedAccount = () => {
  const linkedAccounts: Array<LinkedAccountProps> = useAppSelector('profile.LinkedAccountList');

  useEffect(() => {
    getLinkedAccountsList();
  }, [])

  const responseGoogle = (response: any) => {
    if (response.error) {
      toast.error(response.details ? `${response.error}: ${response.details}` : `${response.error}`);
    } else {
      const payload = {
        email: response.profileObj.email,
        social_id: response.googleId,
        name: response.profileObj.name,
        social: "google"
      };

      linkAccount(payload);
    }
  }
  
  return (
  <div className="flex flex-col space-y-3">
    <h1 className="text-sm text-gray-400">(Step 3 out of 4)</h1>
    <p className="text-xs text-gray-700 font-light tracking-wide leading-5">
      Taking the time to verify and link your accounts can upgrade your credibility and help us provide you with more business. Don't worry, your information is and always will remail private.
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
          <GoogleIcon />
          <h1 className="text-xs text-gray-700 font-medium">Google</h1>
        </div>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
          render={renderProps => {
            const googleProps = _.find(linkedAccounts, (item) => (item.presence_name === 'google'));
            return (
              googleProps ?
              <Button
                className="px-4 uppercase border border-accent text-accent text-xxs py-2 rounded-lg"
                disabled
              >
                Verified
              </Button> :
              <Button
                className="px-4 uppercase border border-gray-700 text-gray-700 text-xxs py-2 rounded-lg"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Connect
              </Button>
            )
          }}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-3 items-center">
          <FbIcon />
          <h1 className="text-xs text-gray-700 font-medium">Facebook</h1>
        </div>
        <Button className="px-4 uppercase border border-gray-700 text-gray-700">
          Connect
        </Button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <TwitterIcon />
          <h1 className="text-xs text-gray-700 font-medium">Twitter</h1>
        </div>
        <Button className="px-4 uppercase border border-gray-700 text-gray-700">
          Connect
        </Button>
      </div>
    </div>
    <h1 className="text-xs text-gray-700 font-medium tracking-wide pt-4 uppercase">
      Your Social Presence
    </h1>
    <div className="flex justify-between items-center">
      <div className="flex space-x-3 items-center">
        <StackOverflowIcon />
        <h1 className="text-xs text-gray-700 font-medium">Stack Overflow</h1>
      </div>
      <Button className="px-4 uppercase border border-gray-700 text-gray-700">
        Connect
      </Button>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex space-x-3 items-center">
        <GithubIcon />
        <h1 className="text-xs text-gray-700 font-medium">Github</h1>
      </div>
      <Button className="px-4 uppercase border border-gray-700 text-gray-700">
        Connect
      </Button>
    </div>
  </div>
  );
};

export default LinkedAccount;
