import React from 'react';
import { Link } from 'react-router-dom';
import Email from '../../images/email-illustration.png'

const VerificationStatus = () => {
  return (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-2xl text-gray-700 text-center font-bold">Check your inbox</h1>
    <div className="flex flex-col space-y-2 mt-5">
      <h1 className="text-sm text-gray-700 text-center">We just emailed a confirmation link to</h1>
      <h1 className="text-sm text-gray-700 text-center font-semibold">youremail@domain.com</h1>
      <h1 className="text-sm text-gray-700 text-center">Click the link, and you'll be signed in.</h1>
    </div>
    <Link to="/verification-link" className="text-sm text-red-600 text-center mt-5">Click here to simulate email-checking.</Link>
    <div className="mt-5">
      <img src={Email} alt="Email" className="h-72" />
    </div>
  </div>
  );
};

export default VerificationStatus;
