
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AccessIcon, P2P, ShieldIcon, SignIcon, Tools } from '../common/components/Icons';
import GigFooter from '../common/components/GigFooter';

import Brush from '../../images/whitebrush.png';
import Buy from '../../images/buyer.png';
import Gathering from '../../images/gathering.jpg';
import One from '../../images/Num-one.png';
import Two from '../../images/Num-two.png';
import Three from '../../images/Num-three.png';
import Four from '../../images/Num-four.png';




const BuyGigs = () => {
  const [num] = useState ([
    {number: One, text: 'Sign up (free) and complete your profile'},
    {number: Two, text: 'Find a gig and connect with the seller for a deal'},
    {number: Three, text: 'Sign a contract, pay and start to collaborate on the gig'},
    {number: Four, text: 'Accept the gig to have the seller paid when the service is completed or to receive the tamper-proof work with rights attached'},
  ])
  return (
  <>
    <div className="pt-9 px-4 flex flex-col justify-center bg-blue-200">
      <div className="flex flex-col space-y-5">
        <div className="relative flex justify-center items-center">
          <h1 className="text-gray-700 text-lg font-bold tracking-wider z-10 text-center">How can I find and <span className="text-blue-600 italic">buy</span> <br/>
            the Gig I need?
          </h1>
          <img src={Brush} alt="Brush Illustration" className="absolute h-28 whitebrush opacity-70" />
        </div>
        <img src={Buy} alt="Buy Illustration" className="object-contain h-52" />
        <div className="flex flex-col space-y-4 items-center">
          <h1 className="text-sm font-semibold text-gray-700">
            DOC Gig Web3 platform <span className="font-normal italic">can provide you</span>
          </h1>
          <div className="flex-col">
            <div className="flex flex-col w-full pb-6">
              <div className="bg-blue-100 shadow-md rounded-md flex text-left mb-3 justify-center items-center p-3 space-x-3 text-xs">
                <div className="w-1/4 items-center justify-center flex">
                  <ShieldIcon className="text-3xl" />
                </div>
                <div className="w-full">
                  <h1>You get the guarantee to not connect with scammers as provider are verified.</h1>
                </div>
              </div>
              <div className="bg-blue-100 shadow-md rounded-md flex text-left mb-3 justify-center items-center p-3 space-x-3 text-xs">
                <div className="w-1/4 items-center justify-center flex">
                  <SignIcon className="text-3xl" />
                </div>
                <div className="w-full">
                  <h1>You sign a contract with a Gig provider who is paid only if he delivers.</h1>
                </div>
              </div>
              <div className="bg-blue-100 shadow-md rounded-md flex text-left mb-3 justify-center items-center p-3 space-x-3 text-xs">
                <div className="w-1/4 items-center justify-center flex">
                  <P2P className="text-3xl" />
                </div>
                <div className="w-full">
                  <h1>You get a direct P2P relation with the Gig provider.</h1>
                </div>
              </div>
              <div className="bg-blue-100 shadow-md rounded-md flex text-left mb-3 justify-center items-center p-3 space-x-3 text-xs">
                <div className="w-1/4 items-center justify-center flex">
                  <Tools className="text-3xl" />
                </div>
                <div className="w-full">
                  <h1>You get better tools to deal and communicate with Gig providers.</h1>
                </div>
              </div>
              <div className="bg-blue-100 shadow-md rounded-md flex text-left mb-3 justify-center items-center p-3 space-x-3 text-xs">
                <div className="w-1/4 items-center justify-center flex">
                  <AccessIcon className="text-3xl" />
                </div>
                <div className="w-full">
                  <h1>You get an access to legit and verified Gig providers.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-5 px-3 flex flex-col bg-white">
      <h1 className="font-bold text-lg text-center uppercase">
        How it works
      </h1>
      {num.map((num, key) => (
        <div key={key} className="flex flex-col relative items-center mb-4">
          <div className="flex space-x-2 items-center">
            <img src={num.number} alt="One Illustration"  className="h-36" />
            <img src={Gathering} alt="Gathering Illustration" className="h-44" />
          </div>
          <h1 className="text-lg font-bold text-gray-700 text-center">
            {num.text}
          </h1>
        </div>
      ))}
    </div>
    <div className="border-t pt-4 border-gray-700 w-full flex flex-col justify-center items-center mb-5">
      <h1 className="text-gray-700 text-lg text-center mb-4">
        Are you ready to build your team?
      </h1>
      <Link to="/auth" className="text-white bg-gray-900 px-14 py-2 font-bold upppercase rounded-md">
        Get Started
      </Link>
    </div>
    <GigFooter />
  </>
  )
}

export default BuyGigs