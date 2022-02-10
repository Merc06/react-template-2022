import React from 'react';

import Button from '../../../common/components/Button';
import { EmailIcon, TelephoneIcon } from '../../../common/components/Icons';

const AccountSecurity = () => {
  return (
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
          <h1 className="text-xs text-gray-700 font-medium">Email</h1>
        </div>
        <Button className="px-4 uppercase border border-gray-700 text-gray-700">
          Connect
        </Button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <TelephoneIcon />
          <h1 className="text-xs text-gray-700 font-medium">Phone</h1>
        </div>
        <Button className="px-4 uppercase border border-gray-700 text-gray-700">
          Connect
        </Button>
      </div>
    </div>
  </div>
  );
};

export default AccountSecurity;
