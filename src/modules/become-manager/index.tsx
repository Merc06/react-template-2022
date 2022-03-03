import React, { useState } from 'react'
import { FourIcon, HoldingDollar, OneIcon, P2P, Tools } from '../common/components/Icons';

import Manager from '../../images/gigmanager.png';
import Gathering from '../../images/gathering.jpg';
import One from '../../images/Num-one.png';
import Two from '../../images/Num-two.png';
import Three from '../../images/Num-three.png';
import Four from '../../images/Num-four.png';
import { Link } from 'react-router-dom';
import GigFooter from '../common/components/GigFooter';


const BecomeManager = () => {
  const [num] = useState ([
    {number: One, text: 'Sign up and create your profile'},
    {number: Two, text: 'Subscribe to the Gig Manager plan'},
    {number: Three, text: 'Create Gig(s) and/orfind scholar'},
    {number: Four, text: 'Start to work'},
  ])

  return (
    <>
      <div className="pt-9 px-3 flex flex-col justify-center items-center bg-yellow1 pb-4">
        <h1 className="text-gray-700 text-lg font-bold tracking-wider z-10 text-center pb-5">
          Become a Gig Manager and benefit from the sale of 4 gigs
        </h1>
        <img src={Manager} alt="Group Illustration" className="w-auto h-60" />
        <div className="flex flex-col space-y-5 items-center">
          <h1 className="text-sm font-semibold text-gray-700">
            For as low as $30 per month you will get:
          </h1>
          <div className="flex flex-col w-full pb-6">
            <div className="bg-yellow-200 shadow-md rounded-md flex text-left mb-3 justify-center items-center p-3 space-x-3 text-xs">
              <div className="w-1/4 items-center justify-center flex">
                <FourIcon className="text-3xl" />
              </div>
              <div className="w-full">
                <h1>An access to 4 gig seats (to sell 4 different gigs) that you can exploit yourself or with a team.</h1>
              </div>
            </div>
            <div className="bg-yellow-200 shadow-md rounded-md flex text-left mb-3 justify-center items-center p-3 space-x-3 text-xs">
              <div className="w-1/4 items-center justify-center flex">
                <OneIcon className="text-3xl" />
              </div>
              <div className="w-full">
                <h1>The possibility to onboard 1 scholar for each of the plan gig seat against 10% of his revenues.</h1>
              </div>
            </div>
            <div className="bg-yellow-200 shadow-md rounded-md flex text-left mb-3 justify-center items-center p-3 space-x-3 text-xs">
              <div className="w-1/4 items-center justify-center flex">
                <P2P className="text-3xl" />
              </div>
              <div className="w-full">
                <h1>A direct (P2P) relation with clients in a web3 environment.</h1>
              </div>
            </div>
            <div className="bg-yellow-200 shadow-md rounded-md flex text-left mb-3 justify-center items-center p-3 space-x-3 text-xs">
              <div className="w-1/4 items-center justify-center flex">
                <Tools className="text-3xl" />
              </div>
              <div className="w-full">
                <h1>Access to blockchain managed tools to deal (contract, invoice and receipt) and communicate with clients (Messaging and Video meeting).</h1>
              </div>
            </div>
            <div className="bg-yellow-200 shadow-md rounded-md flex text-left mb-3 justify-center items-center p-3 space-x-3 text-xs">
              <div className="w-1/4 items-center justify-center flex">
                <HoldingDollar className="text-3xl" />
              </div>
              <div className="w-full">
                <h1>Access to a frictionless worldwide transaction system based on credits and tokens (which allows to onboard unbanked talented freelancers).</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 px-3 flex flex-col bg-white">
        {num.map((num, key) => (
          <div key={key} className="flex flex-col relative items-center mb-4">
            <div className="flex space-x-2 items-center">
              <img src={num.number} alt="One Illustration"  className="h-36" />
              <img src={Gathering} alt="Gathering Illustration" className="h-44" />
            </div>
            <h1 className="text-lg font-bold text-gray-700">
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

export default BecomeManager