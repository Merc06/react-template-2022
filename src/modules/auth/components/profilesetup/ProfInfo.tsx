import React from 'react';
import { PlusIcon } from '../../../common/components/Icons';
// import Input from '../../../common/components/Input';

const ProfInfo = () => {
  return (
  <div className="flex flex-col space-y-3">
    <h1 className="text-sm text-gray-400">(Step 2 out of 4)</h1>
    <p className="text-xs text-gray-700 font-light tracking-wide leading-5">
      This is your time to shine. Let potential buyers know what you do best and how you gained your skills, 
      certifications and experience.
    </p>
    <h1 className="text-xs text-gray-400 italic font-light">
      <span className="text-red-500">*</span>Mandatory
    </h1>
    <div className="flex flex-col space-y-7">
      <div className="flex justify-between items-center pt-4">
        <h1 className="text-xs text-gray-700 font-medium tracking-wide">
          Your Occupation
        </h1>
        <button className="flex items-center space-x-1">
          <PlusIcon className="text-blue-700"/>
          <h1 className="text-xs text-blue-700 font-medium tracking-wide uppercase">
            Add New
          </h1>
        </button>
      </div>
      <div className="flex flex-col border-b-2">
        {/* content */}
      </div>
    </div>
    <div className="flex flex-col space-y-7">
      <div className="flex justify-between items-center pt-4">
        <h1 className="text-xs text-gray-700 font-medium tracking-wide">
          Skills
        </h1>
        <button className="flex items-center space-x-1">
          <PlusIcon className="text-blue-700"/>
          <h1 className="text-xs text-blue-700 font-medium tracking-wide uppercase">
            Add New
          </h1>
        </button>
      </div>
      <div className="flex flex-col border-b-2">
        {/* content */}
      </div>
    </div>
    <div className="flex flex-col space-y-7">
      <div className="flex justify-between items-center pt-4">
        <h1 className="text-xs text-gray-700 font-medium tracking-wide">
          Education
        </h1>
        <button className="flex items-center space-x-1">
          <PlusIcon className="text-blue-700"/>
          <h1 className="text-xs text-blue-700 font-medium tracking-wide uppercase">
            Add New
          </h1>
        </button>
      </div>
      <div className="flex flex-col border-b-2">
        {/* content */}
      </div>
    </div>
    <div className="flex flex-col space-y-7">
      <div className="flex justify-between items-center pt-4">
        <h1 className="text-xs text-gray-700 font-medium tracking-wide">
          Certifications
        </h1>
        <button className="flex items-center space-x-1">
          <PlusIcon className="text-blue-700"/>
          <h1 className="text-xs text-blue-700 font-medium tracking-wide uppercase">
            Add New
          </h1>
        </button>
      </div>
      <div className="flex flex-col border-b-2">
        {/* content */}
      </div>
    </div>
    <div className="flex flex-col space-y-3 pt-5">
      <h1 className="text-xs font-semibold text-gray-700">
        Personal Website <span className="text-gray-300">(Optional)</span>
      </h1>
      <input 
        type="text"
        name="text"
        placeholder="Provide a link to your professional website"
        className="w-full border rounded-md p-2 text-xs"
      />
    </div>
  </div>
  );
};

export default ProfInfo;
