import React from 'react'

import Brush from '../../images/whitebrush.png';
import GigIcon from '../../images/gigicon.png';
import Group from '../../images/giggroup.png';
import Scholar from '../../images/scholar1.png';
import { ChevLeft, ChevRight, CIcon, FourIcon, HoldingDollar, OneIcon, P2P, Tools } from '../common/components/Icons';
import { Link } from 'react-router-dom';
import GigFooter from '../common/components/GigFooter';

const BecomeSeller = () => {
  // const [item] => ({

  // })
  return (
    <>
    <div className="pt-9 px-4 flex flex-col justify-center bg-yellow-100">
      <div className="flex flex-col space-y-9">
        <div className="relative flex justify-center items-center">
          <h1 className="text-gray-700 text-lg font-bold tracking-wider z-10 text-center">You are a <span className="text-blue-600 italic">freelancer</span> or
            <br/>creator and you can develop Gigs?
          </h1>
          <img src={Brush} alt="Brush Illustration" className="absolute h-28 whitebrush opacity-70" />
        </div>
        <div className="flex flex-col space-y-5 items-center">
          <h1 className="text-sm font-semibold text-gray-700">
            DOC Gig Web3 platform <span className="font-normal italic">can provide you</span>
          </h1>
          <div className="grid grid-cols-2 gap-3 w-full pb-6">
            <div className="bg-yellow-200 shadow-md rounded-md flex text-center flex-col justify-center items-center p-3 space-y-3 text-xs">
              <HoldingDollar className="text-3xl" />
              <h1>Payments guaranteed and frictionless and low fee</h1>
            </div>
            <div className="bg-yellow-200 shadow-md rounded-md flex text-center flex-col justify-center items-center p-3 space-y-3 text-xs">
              <Tools className="text-3xl" />
              <h1>Better tools to deal with clients</h1>
            </div>
            <div className="bg-yellow-200 shadow-md rounded-md flex text-center flex-col justify-center items-center p-3 space-y-3 text-xs">
              <P2P className="text-3xl" />
              <h1>Direct (P2P) relation with clients</h1>
            </div>
            <div className="bg-yellow-200 shadow-md rounded-md flex text-center flex-col justify-center items-center p-3 space-y-3 text-xs">
              <CIcon className="text-3xl" />
              <h1>The ownership of your original work</h1>
            </div>
            <div className="bg-yellow-200 shadow-md rounded-md flex text-center flex-col justify-center items-center p-3 space-y-3 text-xs">
              <OneIcon className="text-3xl" />
              <h1>Possibility to join as a Scholar making use of 1 Gig slot provided by a manager</h1>
            </div>
            <div className="bg-yellow-200 shadow-md rounded-md flex text-center flex-col justify-center items-center p-3 space-y-3 text-xs">
              <FourIcon className="text-3xl" />
              <h1>Possibility to join as a Manager with a minimum of 4 different Gigs</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-yellow-500 flex flex-col justify-center items-center space-y-6 p-5 w-full">
      <h1 className="font-bold text-xl text-gray-800 text-center flex flex-col items-center">
        How do I become a <br/>
        <span className="flex">
          <img src={GigIcon} alt="Gig Icon" className="w-14 h-auto pr-2" /> manager?
        </span>
      </h1>
      <Link to="/become-a-manager" className="p-2 px-6 flex space-x-2 bg-yellow-200 rounded-md shadow-md items-center">
        <ChevLeft />
        <h1 className="text-sm text-gray-800 uppercase">Learn more</h1>
      </Link>
      <img src={Group} alt="Group Illustration" className="object-contain" />
    </div>
    <div className="bg-yellow-200 flex flex-col justify-center items-center space-y-6 p-5 w-full">
      <h1 className="font-bold text-xl text-gray-800 text-center flex flex-col items-center">
        How do I become a <br/>
        <span className="flex">
          <img src={GigIcon} alt="Gig Icon" className="w-14 h-auto pr-2" /> scholar?
        </span>
      </h1>
      <Link to="/become-a-scholar" className="p-2 px-6 flex space-x-2 bg-yellow-500 rounded-md shadow-md items-center">
        <h1 className="text-sm text-gray-800 uppercase">Learn more</h1>
        <ChevRight />
      </Link>
      <img src={Scholar} alt="Group Illustration" className="object-contain" />
    </div>
    <GigFooter />
  </>
  )
}

export default BecomeSeller