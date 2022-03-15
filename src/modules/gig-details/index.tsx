import React, { useState } from 'react'
import { ChevronRight, ClockIcon, HandIcon, LocationIcon, ProfileIcon, StarIcon } from '../common/components/Icons';
import Profile from '../../images/displaypicture.jpg';
import Basic from './components/Basic';
import Premium from './components/Premium';
import Standard from './components/Standard';
import { Link } from 'react-router-dom';

const GigDetails = () => {

  const [show,setShow] = useState(1);
  const [reviews] = useState ([
    {star: '5 Stars'},
    {star: '4 Stars'},
    {star: '3 Stars'},
    {star: '2 Stars'},
    {star: '1 Stars'}
  ])

  const [rating] = useState ([
    {text: 'Seller Communication Level'},
    {text: 'Recommend to a friend'},
    {text: 'Service as described'},
  ])

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
      <div className="flex flex-col p-4 divide-y divide-gray-200">
        <div className="flex flex-col p-4 space-y-3">
          <h1 className="text-lg uppercase text-gray-900 tracking-wider font-bold">About this Gig</h1>
          <h1 className="text-xs font-bold text-gray-700 uppercase">---</h1>
        </div>
        <div className="flex flex-col p-4 space-y-3">
          <h1 className="text-lg uppercase text-gray-900 tracking-wider font-bold">About Seller</h1>
          <div className="flex flex-col space-y-3">
            <img src={Profile} alt="Profile Illustration" className="h-24 w-24 object-cover object-center rounded-full shadow-sm" />
            <div className="flex flex-col space-y-2">
              <div className="flex space-x-2 items-center">
                <LocationIcon className="text-lg" />
                <h1 className="text-xs font-semibold text-gray-500 uppercase">From ---</h1>
              </div>
              <div className="flex space-x-2 items-center">
                <ProfileIcon className="text-lg" />
                <h1 className="text-xs font-semibold text-gray-500 uppercase">Member Since ---</h1>
              </div>
              <div className="flex space-x-2 items-center">
                <ClockIcon className="text-lg" />
                <h1 className="text-xs font-semibold text-gray-500 uppercase">Avg. Response time ---</h1>
              </div>
              <div className="flex space-x-2 items-center">
                <HandIcon className="text-lg" />
                <h1 className="text-xs font-semibold text-gray-500 uppercase">Last Delivery About ---</h1>
              </div>
              <div className="flex flex-col space-y-3 pt-5">
                <button className="p-2 text-center w-full text-white rounded-md bg-gray-700 uppercase text-xs">Contact me for a quote</button>
                <Link to="/become-a-manager" className="p-2 text-center border border-gray-700 w-full text-gray-800 rounded-md uppercase text-xs">Visit profile</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 space-y-3">
          <h1 className="text-lg uppercase text-gray-900 flex items-center tracking-wider font-bold">--- Reviews <StarIcon className="mx-1" /> ---</h1>
          <div className="my-2 flex flex-col space-y-1">
          {reviews.map((reviews,key) => (
            <div key={key} className="flex space-x-1 items-center">
              <h1 className="text-xs text-gray-400 w-12">{reviews.star}</h1>
              <div className="w-56 h-1 bg-gray-200"/>
              <h1 className="text-xs text-gray-400 w-12">(0)</h1>  
            </div>
            ))}
          </div>
          <h1 className="text-lg uppercase text-gray-500 tracking-wider font-bold">Rating Breakdown</h1>
          <div className="my-2 flex flex-col space-y-1">
            {rating.map(( rating,key ) => (
            <div key={key} className="flex space-x-1 items-center justify-between">
              <h1 className="text-xs text-gray-400">{rating.text}</h1>
              <div className="flex space-x-8">
                <h1 className="text-xs text-gray-400">---</h1>
                <StarIcon />
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GigDetails
