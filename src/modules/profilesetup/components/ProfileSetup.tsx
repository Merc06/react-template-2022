import React, { useEffect, useState } from 'react';

import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '../../common/components/Button';

import PersonalInfo from './PersonalInfo';
import ProfInfo from './ProfInfo';
import LinkedAccount from './LinkedAccount';
import AccountSecurity from './AccountSecurity';
// import ProfileHeader from './ProfileHeader';
import { PersonalInfoState } from '../../auth/types';
import { INIT_PERSONAL_INFO_STATE } from '../../auth/constants';
import { addProfile, getProfile, updateProfile } from '../../common/apis';
import { ProfileProps } from '../../common/types';
import { Link } from 'react-router-dom';
import useAppSelector from '../../../helpers/useAppSelector';

export interface WebsiteStateProps {
  website: string;
}

const ProfileSetup = () => {
  const [activeStep, setActiveStep] = useState(0);
  // const profile: ProfileProps = useAppSelector('common.profile');
  const [personalInfoState, setPersonalInfoState] = useState<PersonalInfoState>(INIT_PERSONAL_INFO_STATE);
  const [websiteState, setWebsiteState] = useState<WebsiteStateProps>({ website: '' });
  const profileInfo = useAppSelector('common.profile');

  useEffect(() => {
    getProfile((res: ProfileProps) => {
      setPersonalInfoState({
        first_name: res.first_name || "",
        last_name: res.last_name || "",
        photo: res.photo || "",
        description: res.description || "",
        country: res.country || "",
      })
      setWebsiteState({
        website: res.website || ""
      })
      setActiveStep(
        res.profile_status === "inProgress-professional" ? 1 :
        res.profile_status === "inProgress-linkedAccounts" ? 2 :
        res.profile_status === "inProgress-security" ? 3 : 0
      )
    });
  }, []);

  const nextStep = () => {
    activeStep === 0 ?
    addProfile(personalInfoState, () => {
      setActiveStep((currentStep) => currentStep + 1)
    }) :
    activeStep === 1 ?
    updateProfile(websiteState, () => {
      setActiveStep((currentStep) => currentStep + 1)
    }) :
    setActiveStep((currentStep) => currentStep + 1);
  }

  const previousStep = () => {
    setActiveStep((currentStep) => currentStep - 1)
  }

  return (
  <>
    {/* <ProfileHeader /> */}
    <div className="p-4 flex flex-col space-y-5">
      <div className="flex space-x-3 items-center">

        <div className="w-44 bg-gray-300">
          <div className={`bg-yellow-500 text-xs font-medium text-blue-100 text-center py-1 leading-none ${
            profileInfo.profile_status === "inProgress-personal" ? "w-0" :
            profileInfo.profile_status === "inProgress-professional" ? "w-1/4" :
            profileInfo.profile_status === "inProgress-linkedAccounts" ? "w-2/4" :
            profileInfo.profile_status === "inProgress-accountSecurity" ? "w-3/4" :
            profileInfo.profile_status === "completed" ? "w-full" :
            "w-0"
          }`}></div>
        </div>

        <div className="ml-6 mr-3">
          <h1 className="text-xs text-gray-300 font-medium">
            COMPLETION RATE {
              profileInfo.profile_status === "inProgress-personal" ? "0" :
              profileInfo.profile_status === "inProgress-professional" ? "25" :
              profileInfo.profile_status === "inProgress-linkedAccounts" ? "50" :
              profileInfo.profile_status === "inProgress-accountSecurity" ? "75" :
              profileInfo.profile_status === "completed" ? "100" :
              "0"
            }%
          </h1>
        </div>
        
      </div>

      <h1 className="text-lg text-gray-700 tracking-[.30em] font-semibold uppercase">Profile Setup</h1>
      <div className="flex space-x-2">
        <Button className="text-white bg-blue-900 uppercase font-bold px-2">Save</Button>
        <Button className="text-gray-700 border border-gray-700 uppercase font-bold px-2">Preview Profile</Button>
      </div>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
          <StepLabel>Personal Info</StepLabel>
          <StepContent>
            <PersonalInfo
              personalInfoState={personalInfoState}
              setPersonalInfoState={setPersonalInfoState}
            />
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
          <StepLabel>Professional Info</StepLabel>
          <StepContent>
            <ProfInfo
              websiteState={websiteState}
              setWebsiteState={setWebsiteState}
            />
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
              <Link 
                className="bg-yellow-500 px-2 text-gray-700 uppercase font-semibold text-xxs py-2 rounded-lg"
                to="/profile-completed"
              >
                Finish
              </Link>
            </div>
          </StepContent>
        </Step>
      </Stepper>
    </div>
  </>
  );
};

export default ProfileSetup;
