import React from 'react';

import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '../../../common/components/Button';

import PersonalInfo from './PersonalInfo';
import ProfInfo from './ProfInfo';
import LinkedAccount from './LinkedAccount';
import AccountSecurity from './AccountSecurity';
import ProfileHeader from './ProfileHeader';



const ProfileSetup = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const nextStep = () => {
    setActiveStep((currentStep) => currentStep + 1)
  }

  const previousStep = () => {
    setActiveStep((currentStep) => currentStep - 1)
  }
  return (
  <>
    <ProfileHeader />
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
            <PersonalInfo />
            <div className="flex justify-end space-x-2 mt-7">
              <Button 
                className="bg-yellow-500 px-2 text-gray-700 uppercase font-semibold"
                onClick={() => nextStep()}
              >
                Next
              </Button>
            </div>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>
            Professional Info
          </StepLabel>
          <StepContent>
            <ProfInfo />
            <div className="flex justify-end space-x-2 mt-7">
              <Button 
                  className="bg-gray-300 px-2 text-gray-700 uppercase font-semibold"
                  onClick={() => previousStep()}
                >
                  Previous
              </Button>
              <Button 
                className="bg-yellow-500 px-2 text-gray-700 uppercase font-semibold"
                onClick={() => nextStep()}
              >
                Next
              </Button>
            </div>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>
            Linked Accounts
          </StepLabel>
          <StepContent>
            <LinkedAccount />
            <div className="flex justify-end space-x-2 mt-7">
              <Button 
                  className="bg-gray-300 px-2 text-gray-700 uppercase font-semibold"
                  onClick={() => previousStep()}
                >
                  Previous
              </Button>
              <Button 
                className="bg-yellow-500 px-2 text-gray-700 uppercase font-semibold"
                onClick={() => nextStep()}
              >
                Next
              </Button>
            </div>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>
            Account Security
          </StepLabel>
          <StepContent>
            <AccountSecurity />
            <div className="flex justify-end space-x-2 mt-7">
              <Button 
                  className="bg-gray-300 px-2 text-gray-700 uppercase font-semibold"
                  onClick={() => previousStep()}
                >
                  Previous
              </Button>
              <Button 
                className="bg-yellow-500 px-2 text-gray-700 uppercase font-semibold"
              >
                Finish
              </Button>
            </div>
          </StepContent>
        </Step>
      </Stepper>
    </div>
  </>
  );
};

export default ProfileSetup;