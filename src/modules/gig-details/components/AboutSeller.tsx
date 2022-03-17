import React from 'react';
import { Link } from 'react-router-dom';
import { ClockIcon, HandIcon, LocationIcon, ProfileIcon } from '../../common/components/Icons';
import Profile from '../../../images/displaypicture.jpg';

const AboutSeller = () => {
    return (
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
    );
};

export default AboutSeller;