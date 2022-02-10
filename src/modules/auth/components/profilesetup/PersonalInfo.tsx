import React from 'react';

import {IconSquareEdit} from '../../../common/components/Icons'

import Dp from '../../../../images/famousLogo.png'

const PersonalInfo = () => {
  return (
  <div className="flex flex-col space-y-3">
    <h1 className="text-sm text-gray-400">(Step 1 out of 4)</h1>
    <p className="text-xs text-gray-700 font-light tracking-wide leading-5">
      Tell us a bit about yourself. This information will appear on your public 
      profile, so that potential buyers can get to know you better.
    </p>
    <h1 className="text-xs text-gray-400 italic font-light">
      <span className="text-red-500">*</span>Mandatory
    </h1>
    <h1 className="text-xs text-gray-700 font-medium tracking-wide pt-4">
      Full Name<span className="text-red-500">*</span>
    </h1>
    <div className="flex space-x-2 items-center w-full">
      <input type="text" className="text-xs border focus:outline-none rounded-md py-1 px-2 w-full" placeholder="First Name" />
      <input type="text" className="text-xs border focus:outline-none rounded-md py-1 px-2 w-full" placeholder="Last Name" />
    </div>
    <h1 className="text-xs text-gray-700 font-medium tracking-wide pt-4">
      Profile Picture<span className="text-red-500">*</span>
    </h1>
    <div className="flex space-x-4 items-center">
      <img src={Dp} alt="Display" className="h-20 w-20 border" />
      <button className="flex items-center space-x-1">
        <IconSquareEdit className="text-blue-700 text-xs" />
        <h1 className="text-blue-700 font-medium text-xs">Change</h1>
      </button>
    </div>
    <div className="flex justify-between items-center">
      <h1 className="text-xs text-gray-700 font-medium tracking-wide pt-4">
        Language<span className="text-red-500">*</span>
      </h1>
      <button className="flex items-center space-x-1">
        <h1 className="text-xs text-blue-700 font-medium tracking-wide pt-4 uppercase">
          + Add New
        </h1>
      </button>
    </div>
    <table className="text-xs table-auto border-0">
      <thead>
        <tr className="bg-gray-200">
          <th className="border-0 p-1">Language</th>
          <th className="border-0 p-1">Level</th>
          <th className="border-0 p-1"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center">
          <td className="p-1 border-r-0 border-gray-200">English</td>
          <td className="p-1 border-r-0 border-l-0 border-gray-200">Conversational</td>
          <td className="p-1 flex justify-center border-gray-200 space-x-1 items-center border-l-0">
            <button className="text-xs text-blue-700 font-semibold uppercase">Edit</button>
            <button className="text-xs text-blue-700 font-semibold uppercase">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default PersonalInfo;
