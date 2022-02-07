import React from 'react';

import LoginMondel from '../../images/LoginModel.png';
import Logo from '../../images/DocGigLogo.png';

const EmailRequest = () => {
  return (
  <div className="flex-col flex px-6 relative space-y-3">
    <div className="flex justify-center">
      <img src={LoginMondel} alt="GigLogo" className="h-72" />
    </div>
    <h1 className="font-bold text-gray-700 text-center text-2xl">The Blockchain-powered</h1>
    <div className="flex space-x-2 justify-center items-center pb-4">
      <img src={Logo} alt="Logo" className="h-10" />
      <h1 className="font-bold text-gray-700 text-center text-2xl">marketplace.</h1>
    </div>
    <button className="bg-gray-800 rounded-lg flex justify-center text-white text-xs text-center p-2">
      LOGIN WITH DOCONCHAIN ACCOUNT
    </button>
    <div className="flex items-center space-x-2 justify-center py-3">
      <div className="bg-gray-400 w-full border border-gray-300"/>
      <h1 className="text-xs text-gray-400">OR</h1>
      <div className="bg-gray-400 w-full border border-gray-300"/>
    </div>
    <input type="text" placeholder="Enter your email address" className="p-2 text-sm border border-gray-800 rounded-lg" />
    <button className="bg-yellow-500 rounded-lg flex justify-center text-gray-700 text-xs text-center p-2 font-semibold">
      SIGN UP WITH EMAIL
    </button>
    <div className="flex justify-center items-center space-x-2">
      <h1 className="text-xs text-gray-700">Already a member?</h1>
      <h1 className="text-xs text-blue-800 font-semibold">Log In</h1>
    </div>
    <div className="bg-gray-400 w-full border border-gray-300"/>
    <div className="flex justify-center items-center space-x-4 pt-3 pb-7">
      <h1 className="text-xs text-gray-700">Terms of Use</h1>
      <h1 className="text-xs text-gray-700">•</h1>
      <h1 className="text-xs text-gray-700">Privacy Policy</h1>
    </div>
  </div>
  );
};

export default EmailRequest;
