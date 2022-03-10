import _ from 'lodash';
import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
// import TwitterLogin from "react-twitter-login";

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

  const googleResponse = (response: any) => {
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

  const fbResponse = (response: any) => {
    if (response.error) {
      toast.error(response.error.message);
    } else {
      const payload = {
        email: response.email,
        social_id: response.id,
        name: response.name,
        social: "facebook"
      };

      const isPayloadComplete = Object.values(payload).every(value => (
        value ? true : false
      ))
      
      isPayloadComplete && linkAccount(payload);
    }
  }

  // const twitterResponse = (err: any, data: any) => {
  //   console.log(err, data);
  // };
  
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
                className="px-4 uppercase border border-green-600 text-green-600"
                disabled
              >
                Connected
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
          onSuccess={googleResponse}
          onFailure={googleResponse}
          cookiePolicy={'single_host_origin'}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-3 items-center">
          <FbIcon />
          <h1 className="text-xs text-gray-700 font-medium">Facebook</h1>
        </div>
        {
          _.find(linkedAccounts, (item) => (item.presence_name === 'facebook')) ?
          <Button disabled className="px-4 uppercase border border-green-600 text-green-600">
            Connected
          </Button> :
          <FacebookLogin
            appId={process.env.REACT_APP_STG_FACEBOOK_APP_ID as string}
            // autoLoad={true}
            disableMobileRedirect
            reAuthenticate
            fields="name,email,picture"
            callback={fbResponse}
            textButton="Connect"
            typeButton="button"
            isMobile
            cssClass="px-4 uppercase border border-gray-700 text-gray-700 text-xxs py-2 rounded-lg"
          />
        }
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <TwitterIcon />
          <h1 className="text-xs text-gray-700 font-medium">Twitter</h1>
        </div>
        {/* <TwitterLogin
          authCallback={twitterResponse}
          consumerKey={process.env.REACT_APP_TWITTER_CONSUMER_KEY as string}
          consumerSecret={process.env.REACT_APP_TWITTER_CONSUMER_SECRET_KEY as string}
          children={
            <Button className="px-4 uppercase border border-gray-700 text-gray-700">
              Connect
            </Button>
          }
        /> */}
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
