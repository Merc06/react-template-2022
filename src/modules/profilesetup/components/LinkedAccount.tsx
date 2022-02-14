import React from 'react';

import Button from '../../common/components/Button';
import { FbIcon, GithubIcon, GoogleIcon, StackOverflowIcon, TwitterIcon } from '../../common/components/Icons';

const LinkedAccount = () => {
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
        <Button className="px-4 uppercase border border-gray-700 text-gray-700">
          Connect
        </Button>
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
