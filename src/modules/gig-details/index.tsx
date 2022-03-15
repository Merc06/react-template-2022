import React, { useState } from 'react'
import { ChevronRight, StarIcon } from '../common/components/Icons';
import Profile from '../../images/displaypicture.jpg';
import Basic from './components/Basic';
import Premium from './components/Premium';
import Standard from './components/Standard';

const GigDetails = () => {

  const [show,setShow] = useState(1);

  const toggleTab = (index: React.SetStateAction<any>) => {
    setShow(index);
  }
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center py-4">
        <h1 className="text-gray-400 text-xxs font-semibold uppercase">Home</h1>
        <ChevronRight className="text-xs" />
        <h1 className="text-gray-400 text-xxs font-semibold uppercase">Categories</h1>
        <ChevronRight className="text-xs" />
        <h1 className="text-gray-400 text-xxs font-semibold uppercase">Token Gigs</h1>
        <ChevronRight className="text-xs" />
        <h1 className="text-gray-400 text-xxs font-semibold uppercase">Influencers</h1>
        <ChevronRight className="text-xs" />
        <h1 className="text-blue-800 text-xxs font-semibold uppercase">Gig Post</h1>
      </div>
      <div className="bg-gray-200 shadow-sm p-2 mx-3">
        <div className="flex flex-col divide-y divide-gray-300">
          <div className="flex space-x-5 p-2 mb-4">
            <div className="w-1/5">
              <img src={Profile} alt="Profile Illustration" className="rounded-full w-16 h-16 object-cover object-center" />
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col items space-y-2 text-xs font-semibold text-gray-500">
                <h1 className="text-gray-700 font-bold">GIG</h1>
                <h1>---</h1>
                <h1>Followers</h1>
              </div>
            </div>
          </div>
          <div className="p-2 flex flex-col">
            <div className="text-gray-500 items-center space-x-1 flex text-xs font-semibold uppercase">
              <h1>---</h1>
              <StarIcon className="text-xs"/>
              <h1>('--- reviews')</h1>
            </div>
            <h1 className="text-gray-500 text-xs font-semibold uppercase">---</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-rows gap-2 px-3">
        <img src={Profile} alt="Profile Illustration" className="object-contain" />
        <div className="grid grid-cols-4 gap-x-2">
          <img src={Profile} alt="Profile Illustration" className="object-contain" />
          <img src={Profile} alt="Profile Illustration" className="object-contain" />
          <img src={Profile} alt="Profile Illustration" className="object-contain" />
          <img src={Profile} alt="Profile Illustration" className="object-contain" />
        </div>
      </div>
      <div className="m-3 flex flex-col border-2 rounded-sm border-yellow-400">
        <div className="flex justify-center w-full py-2 bg-yellow-400">
          <h1 onClick={() => toggleTab(1)} className={show === 1 ? 'text-gray-800 w-full text-center font-bold text-xs uppercase':'text-white w-full text-center font-bold text-xs uppercase'}>Basic</h1>
          <h1 onClick={() => toggleTab(2)} className={show === 2 ? 'text-gray-800 w-full text-center font-bold text-xs uppercase':'text-white w-full text-center font-bold text-xs uppercase'}>Standard</h1>
          <h1 onClick={() => toggleTab(3)} className={show === 3 ? 'text-gray-800 w-full text-center font-bold text-xs uppercase':'text-white w-full text-center font-bold text-xs uppercase'}>Premium</h1>
        </div>
        <div className="flex flex-col p-5 space-y-3 h-56">
          {show === 1 && <Basic />}
          {show === 2 && <Standard />}
          {show === 3 && <Premium />}
        </div>
      </div>
    </div>
  )
}

export default GigDetails
