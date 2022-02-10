import React from 'react';

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
  </div>
  );
};

export default ProfInfo;
