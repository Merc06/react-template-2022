import React from 'react'

import Brush from '../../images/whitebrush.png';
import { CIcon, HoldingDollar, P2P, Tools } from '../common/components/Icons';

const BecomeSeller = () => {
  // const [item] => ({

  // })
  return (
    <div className="pt-9 px-4 flex justify-center bg-yellow-100">
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
          <div className="grid grid-cols-2 gap-3 w-full">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default BecomeSeller