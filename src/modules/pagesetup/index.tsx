import React from 'react';

import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import {IconSquareEdit, IconCirclePlus} from '../common/components/Icons'

import Dp from '../../images/famousLogo.png'

const PageSetup = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const nextStep = () => {
    setActiveStep((currentStep) => currentStep +1)
  }

  return (
  <div className="p-4 flex flex-col space-y-5">
    <div className="flex space-x-3 items-center">
      <div className="w-44 bg-gray-300">
        <div
          className="bg-yellow-500 text-xs font-medium w-20 text-blue-100 text-center p-1 leading-none"
        ></div>
      </div>
      <div className="ml-6 mr-3">
        <h1 className="text-xs text-gray-300 font-medium">COMPLETION RATE 45%</h1>
      </div>
    </div>
    <h1 className="text-lg text-gray-700 tracking-[.30em] font-semibold uppercase">Profile Setup</h1>
    <div className="flex space-x-2">
      <button className="px-2 py-1 text-xs text-white bg-blue-900 uppercase rounded-md">Save</button>
      <button className="px-2 py-1 text-xs text-gray-700 border border-gray-700 uppercase rounded-md">Preview Profile</button>
    </div>
    <Stepper activeStep={activeStep} orientation="vertical">
      <Step>
        <StepLabel>
          Personal Info
        </StepLabel>
        <StepContent>
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
              <button className="flex items-center">
                <IconSquareEdit className="text-blue-900 text-xs" />
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
          </div>
          <div className="flex justify-end space-x-2 mt-7">
            <button 
              className="px-2 py-1 text-xs bg-yellow-500 rounded-md text-gray-700 uppercase"
              onClick={() => nextStep()}
            >
              Next
            </button>
          </div>
        </StepContent>
      </Step>
      <Step>
        <StepLabel>
          Professional Info
        </StepLabel>
      </Step>
      <Step>
        <StepLabel>
          Linked Accounts
        </StepLabel>
      </Step>
      <Step>
        <StepLabel>
          Account Security
        </StepLabel>
      </Step>
    </Stepper>
  </div>
  );
};

export default PageSetup;
