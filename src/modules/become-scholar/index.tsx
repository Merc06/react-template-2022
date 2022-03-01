import React, { useState } from 'react'
import { HoldingDollar, P2P, TagIcon, TenIcon, Tools } from '../common/components/Icons';

import Scholar from '../../images/scholar.png';
import Gathering from '../../images/gathering.jpg';
import One from '../../images/Num-one.png';
import Two from '../../images/Num-two.png';
import Three from '../../images/Num-three.png';
import Four from '../../images/Num-four.png';
import { Link } from 'react-router-dom';
import GigFooter from '../common/components/GigFooter';

const BecomeScholar = () => {
  const [num] = useState ([
    {number: One, text: 'Sign up and create your profile'},
    {number: Two, text: 'Apply for a scholar position creating your Gig profile'},
    {number: Three, text: 'Join the Scholar whitelist and receive proposals from Managers'},
    {number: Four, text: 'Join a Manager and start to sell your gigs'},
  ])
  return (
    <>
      <div className="pt-9 px-3 flex flex-col justify-center items-center bg-yellow-200 pb-4">
        <h1 className="text-gray-700 text-lg font-bold tracking-wider z-10 text-center pb-5">
          Apply to become a scholar and be part of a Team
        </h1>
        <img src={Scholar} alt="Group Illustration" className="w-auto h-60" />
        <div className="flex flex-col space-y-5 items-center">
          <h1 className="text-sm font-semibold text-gray-700 text-center">
            Sign up for free and get recruited by a manager to sell your gig.
          </h1>
          <div className="flex flex-col w-full pb-6">
            <div className="bg-yellow-500 shadow-md rounded-md flex text-left mb-3 justify-center items-center p-3 space-x-3 text-xs">
              <div className="w-1/4 items-center justify-center flex">
                <TagIcon className="text-3xl" />
              </div>
              <div className="w-full">
                <h1>Customize your gig page with your pricing.</h1>
              </div>
            </div>
            <div className="bg-yellow-500 shadow-md rounded-md flex text-left mb-3 justify-center items-center p-3 space-x-3 text-xs">
              <div className="w-1/4 items-center justify-center flex">
                <Tools className="text-3xl" />
              </div>
              <div className="w-full">
                <h1>Access free tools to deal and collaborate with clients in a P2P relation</h1>
              </div>
            </div>
            <div className="bg-yellow-500 shadow-md rounded-md flex text-left mb-3 justify-center items-center p-3 space-x-3 text-xs">
              <div className="w-1/4 items-center justify-center flex">
                <HoldingDollar className="text-3xl" />
              </div>
              <div className="w-full">
                <h1>Access a frictionless transaction system based on 1% fee ‘Only” and a token that allows you to be paid instantly from all over the world.</h1>
              </div>
            </div>
            <div className="bg-yellow-500 shadow-md rounded-md flex text-left mb-3 justify-center items-center p-3 space-x-3 text-xs">
              <div className="w-1/4 items-center justify-center flex">
                <TenIcon className="text-3xl" />
              </div>
              <div className="w-full">
                <h1>Pay 10% fee to the manager who pays a manager plan to access the tools that he shares with you.</h1>
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
            <h1 className="text-lg font-bold text-gray-700 text-center">
              {num.text}
            </h1>
          </div>
        ))}
      </div>
      <div className="border-t pt-4 border-gray-700 w-full flex flex-col justify-center items-center mb-5">
        <h1 className="text-gray-700 text-lg text-center mb-4">
          Sign up for free and start earning
        </h1>
        <Link to="/auth" className="text-white bg-gray-900 px-14 py-2 font-bold upppercase rounded-md">
          Get Started
        </Link>
      </div>
      <GigFooter />
    </>
  )
}

export default BecomeScholar