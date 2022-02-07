import React from 'react';

import GigLogo from '../../images/GigLogo.png';

const VerificationLink = () => {
  return (
  <div className="flex flex-col items-center justify-center px-10 mt-7">
    <img src={GigLogo} alt="GigLogo" className="w-24" />
    <h1 className="text-gray-700 text-2xl font-semibold mt-8">You're almost there!</h1>
    <p className="mt-8 text-xs text-gray-500 text-center">
      We received a request to sign up to DOC Gig using this email address. <br />
      If you wish to sign up with your <b>email@domain.com</b> account, click this link:
    </p>
    <h1 className="mt-8 text-xs text-blue-600 text-center">
      https://gig.doconchain.io/?mode=signUp&oob
      Code=uh87dtg3wkufjg3fku3byfguj
      fbguwyfgfwufyc4cjubgwcuwvcyg4ujcbky4cyj
      8w&continueUrl=https%3A%2F%2Fgig.
      doconchain.io%2F&lang=en
    </h1>
    <h1 className="mt-8 text-xs text-gray-500 text-center">
      If you did not request this link, you can safely ignore this email.
    </h1>
    <div className="w-full border border-gray-300 mt-12"/>
    <div className="flex space-x-2 mt-4">
      <h1 className="text-gray-500 text-xs">Sent by <span className="text-blue-800">DOC GIG</span></h1>
      <h1 className="text-gray-500 text-xs">•</h1>
      <h1 className="text-gray-500 text-xs">Powered by <span className="text-blue-800">Doconchain</span></h1>
    </div>
    <div className="flex justify-center items-center space-x-2 pt-3 pb-7">
      <h1 className="text-xs text-blue-700">Terms of Use</h1>
      <h1 className="text-xs text-blue-700">•</h1>
      <h1 className="text-xs text-blue-700">Privacy Policy</h1>
    </div>
  </div>
  );
};

export default VerificationLink;
