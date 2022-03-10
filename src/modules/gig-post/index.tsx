import React, { useState } from 'react'
import { ChevronRight, CloseIcon, DIcon, HeartIcon, IconPlay, IconSearch, StarIcon } from '../common/components/Icons';
import Button from '../common/components/Button';
import DisplayPicture from '../../images/displaypicture.jpg';

import brush from '../../images/brush.png';
import { Link } from 'react-router-dom';
import GigFooter from '../common/components/GigFooter';

const GigPost = () => {

  const [item] = useState ([
    {
      name: 'User1',
      content: 'I will get you followers for instagram page, profile, account using my influencer community',
      image: DisplayPicture,
    },
    {
      name: 'User2',
      content: 'I will get you followers for instagram page, profile, account using my influencer community',
      image: DisplayPicture,
    },
    {
      name: 'User3',
      content: 'I will get you followers for instagram page, profile, account using my influencer community',
      image: DisplayPicture,
    },
    {
      name: 'User4',
      content: 'I will get you followers for instagram page, profile, account using my influencer community',
      image: DisplayPicture,
    }
  ])
  return (
    <>
      <div className="flex flex-col items-center py-5 space-y-4 bg-ytbg bg-cover bg-no-repeat relative px-7">
        <div className="flex relative justify-center items-center w-full mb-3">
          <h1 className="font-bold uppercase text-sm tracking-wide text-center text-white z-10">Token Gigs</h1>
          <img src={brush} alt="Token Gig Illustration" className="object-contain absolute w-60" />
        </div>
        <h1 className="font-bold uppercase text-lg tracking-wide text-center text-white z-10">Influencers</h1>
        <p className="text-xs leading-relaxed font-medium text-center z-10 text-white">
          Grow your brand with the help of our influencers and marketing experts.
        </p>
        <div className="flex justify-center pt-2 z-10">
            <Button className="uppercase text-xs flex items-center text-white space-x-2 font-semibold py-2 px-4 border border-white rounded-xl">
                <IconPlay />
                <h1 className="text-xs text-white">How Doc Gig Works</h1>
            </Button>
        </div>
      </div>
      <div className="flex justify-center text-center text-gray-500 py-5 items-center">
        <Link to="/" className="font-semibold uppercase px-1 text-xxs">
          Home
        </Link>
        <ChevronRight className="text-xxs" />
        <h1 className="font-semibold uppercase px-1 text-xxs">
          Categories
        </h1>
        <ChevronRight className="text-xxs" />
        <Link to="/token-gigs" className="font-semibold uppercase px-1 text-xxs">
          Token Gigs
        </Link>
        <ChevronRight className="text-xxs" />
        <h1 className="font-semibold uppercase px-1 text-xxs text-blue-800">
          Influencer
        </h1>
      </div>
      <div className="flex justify-center pb-5 px-4">
        <div className="relative flex items-center w-full">
          <input type="search" placeholder="I'm looking for..." className="p-1 px-2 text-sm rounded-md focus:outline-none border border-gray-500 w-full"/>
          <IconSearch className="absolute right-3 text-xs text-gray-500"/>
        </div>
      </div>
      <div className="flex flex-col pb-5 px-4 border-b border-gray-400">
        <h1 className="font-bold uppercase tracking-widest text-gray-700 text-sm mb-2">
          Filtered By
        </h1>
        <select className="border border-gray-500 rounded-md p-1 px-2 focus:outline-none text-sm mb-3" name="Service-option">
          <option>Service Options</option>
          <option>Youtube Videos</option>
          <option>Blogs</option>
          <option>Telegram Groups</option>
          <option>Social Networks</option>
        </select>
        <select className="border border-gray-500 rounded-md p-1 px-2 focus:outline-none text-sm mb-3" name="Service-option">
          <option>Seller Details</option>
          <option>English</option>
          <option>Spanish</option>
          <option>Bengali Groups</option>
          <option>French</option>
        </select>
        <select className="border border-gray-500 rounded-md p-1 px-2 focus:outline-none text-sm mb-3" name="Service-option">
          <option>Budget</option>
          <option>--DOK</option>
          <option>--DOK</option>
        </select>
        <Button className="text-sm text-gray-700 justify-center p-1 text-center flex items-center bg-red-500 rounded-md shadow-md">
          <CloseIcon className="text-white text-lg"/>
          <h1 className="text-sm text-white">Clear All Filters</h1>
        </Button>
      </div>
      <div className="flex flex-col mt-3 px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xxs font-bold text-gray-500">--- services available</h1>
          <div className="flex items-center">
            <h1 className="text-xxs font-bold text-gray-500 mr-1">Sort by</h1>
            <select className="border border-gray-500 rounded-md p-1 px-2 focus:outline-none text-xxs" name="Service-option">
              <option>Best Selling</option>
              <option>Newest</option>
              <option>Recommended</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 px-4 mt-4">
        {item.map(( item,key ) => (
        <div key={key} className="flex flex-col rounded-md shadow-md pb-2">
          <div className="relative">
            <img src={item.image} alt="Profile Illustration" className="w-full object-contain rounded-t-md"/>
            <h1 className="text-white bg-gray-800 py-1 text-xs font-semibold text-center uppercase">
              Token/Influencers
            </h1>
          </div>
          <div className="text-xs text-gray-700 h-14 overflow-y-auto p-2 mb-2">
            <p className="text-xxs text-gray-700">
              {item.content}
            </p>
          </div>
          <div className="flex space-x-3 px-2 items-center border-b border-gray-400 pb-3">
            <img src={DisplayPicture} alt="Profile Illustration" className="h-12 w-12 rounded-full object-cover"/>
            <div className="flex flex-col space-y-2">
              <h1 className="text-gray-700 text-sm font-bold">
                {item.name}
              </h1>
              <h1 className="text-gray-700 text-xxs flex items-center">
                ---
                <StarIcon className="text-xs"/>
                (---reviews)
              </h1>
            </div>
          </div>
          <div className="p-2 flex justify-between items-center">
            <HeartIcon className="text-xs" />
            <div className="flex items-center">
              <h1 className="text-xxs text-gray-400 uppercase flex">
                Start at <span className="text-blue-700 flex items-center">250 <DIcon className="text-xs mx-1"/> DOK</span>
              </h1>
            </div>
          </div>
        </div>
        ))}
      </div>
      <div className="flex w-full py-3 px-4">
        <h1 className="text-sm uppercase text-center font-bold tracking-wider py-2 w-full border border-gray-500">
          See more Gigs
        </h1>
      </div>
      <div className="flex flex-col p-3 mb-2">
        <h1 className="text-sm tracking-wider uppercase text-gray-700 font-bold text-center">Not the gig you're looking for?</h1>
        <div className="flex flex-col items-center space-y-4 justify-center mt-3">
          <div className="h-20 w-full flex items-center bg-ytbg bg-cover bg-no-repeat justify-center rounded-sm shadown-md">
            <h1 className="font-bold text-white text-sm tracking-wide uppercase">Back to <span className="text-yellow-400">token gigs</span> subcategories</h1>
          </div>
          <div className="h-20 w-full flex flex-col items-center bg-ytbg bg-cover bg-no-repeat justify-center rounded-sm shadown-md">
            <h1 className="font-bold text-white text-sm tracking-wide uppercase">See gig categories</h1>
            <h1 className="font-bold text-white text-xs tracking-wide uppercase">Coming soon</h1>
          </div>
        </div>
      </div>
      <GigFooter />
    </>
  )
}

export default GigPost