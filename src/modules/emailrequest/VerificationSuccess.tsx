import React from 'react';
import Success from '../../images/Success.png';

const VerificationSuccess = () => {
  return (
  <div className="flex flex-col pt-12 px-6 items-center">
    <h1 className="text-gray-800 text-2xl font-bold text-center">Your email is now <br /> verified</h1>
    <img src={Success} alt="Success Illustration" className="h-52 mt-5" />
    <h1 className="text-gray-600 text-xs text-center mt-5">Please create a unique username and <br /> password fro your login.</h1>
    <input type="text" placeholder="Username" className="border border-gray-700 rounded-lg mt-5 p-2 focus:outline-none w-64 text-xs" />
    <input type="password" placeholder="Password" className="border border-gray-700 rounded-lg mt-5 p-2 focus:outline-none w-64 text-xs" />
    <input type="password" placeholder="Confirm Password" className="border border-gray-700 rounded-lg mt-5 p-2 focus:outline-none w-64 text-xs" />
    <button className="bg-yellow-500 rounded-lg mt-5 p-2 w-64 text-xs">NEXT</button>
    <div className="flex justify-center items-center space-x-2 pt-12 pb-7">
      <h1 className="text-xs text-blue-700">Terms of Use</h1>
      <h1 className="text-xs text-blue-700">•</h1>
      <h1 className="text-xs text-blue-700">Privacy Policy</h1>
    </div>
  </div>
  );
};

export default VerificationSuccess;
