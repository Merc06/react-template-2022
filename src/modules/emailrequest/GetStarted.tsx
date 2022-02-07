import React, { useState } from 'react';

import Seller from '../../images/Seller.png';
import Manager from '../../images/Manager.png';
import { IconPlay } from '../common/components/Icons';

const GetStarted = () => {
  const [item] = useState ([
    {
      img: Seller, 
      title: 'I want to be a seller',
      SubTite: 'Post freelance gigs and earn',
      Button: 'BECOME A SELLER',
      style: 'bg-yellow-500 w-full rounded-lg flex justify-center text-gray-800 text-xs text-center p-2 font-semibold'
    },
    {
      img: Manager, 
      title: 'I want to be a manager',
      SubTite: 'Hire freelancers and scholars for your project',
      Button: 'BECOME A MANAGER',
      style: 'bg-gray-800 w-full rounded-lg flex justify-center text-white text-xs text-center p-2 font-semibold'
    }
  ])
  return (
  <div className="flex flex-col items-center pt-12 px-6 pb-8">
    <h1 className="text-gray-800 text-2xl font-semibold">Get Started</h1>
    <p className="mt-8 text-xs text-gray-500 text-center">
      Please select an account type below <br /> and complete setting up your profile.
    </p>
    <div className="flex flex-col p-4">
    {item.map((item) => (
    <div className="p-5 flex space-y-3 flex-col items-center border border-gray-600 rounded-2xl w-full mt-5">
      <img src={item.img} alt="Seller Illustration" className="h-32" />
      <div className="flex flex-col space-y-1 pb-5">
        <h1 className="text-gray-800 text-center text-lg font-semibold">{item.title}</h1>
        <p className="text-xs text-gray-500 text-center">{item.SubTite}</p>
      </div>
      <button className={item.style}>
        {item.Button}
      </button>
    </div>
    ))}
    </div>
    <div className="flex space-x-1 items-center">
      <IconPlay />
      <h1 className="text-sm">How DOC Gig Works</h1>
    </div>
  </div>
  );
};

export default GetStarted;
