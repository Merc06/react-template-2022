import {Step, StepContent, StepLabel, Stepper } from '@mui/material';
import React, { SyntheticEvent, useState } from 'react';
import Button from '../common/components/Button';
import { IconEye, IconSave } from '../common/components/Icons';
import { saveOverview } from './apis';
import CompletedModal from './components/CompletedModal';
import Overview from './components/Overview';
import Scope from './components/Scope';
import { INIT_OVERVIEW_STATE } from './constants';
import { OverviewProps } from './types';


const CreateGig = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [overviewState, setOverviewState] = useState<OverviewProps>(INIT_OVERVIEW_STATE);
    // const [scopeState, setScopeState] = useState<OverviewProps>(INIT_OVERVIEW_STATE);

    const onChange = (e: SyntheticEvent, step: string): void => {
        const { name, value } = e.target as HTMLInputElement;
        step === 'OVERVIEW' &&
        setOverviewState({
            ...overviewState,
            [name]: value
        })
    }
    
    const handleNext = (): void => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = (): void => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // const onPublished = (): void => {
    //     // console.log("Setup Finished!")
    //     setIsModalOpen(true);
    // }

    const onNext = (step: 'OVERVIEW' | 'SCOPE') => {
        switch (step) {
            case 'OVERVIEW':
                saveOverview(overviewState, () => {
                    handleNext();
                })
                break;

            case 'SCOPE':
                // saveScope(scopeState, () => {
                //     handleNext();
                // })
                break;

            default:
                return;
        }
    }
    
    return (
        <div className='p-4'>
            <Stepper activeStep={activeStep} orientation="vertical">
                <Step>
                    <StepLabel>
                        <div className='flex items-center space-x-3 flex-row'>
                            <h1 className='font-bold'>OVERVIEW</h1>
                            {
                                activeStep === 0 &&
                                <>
                                <IconEye />
                                <IconSave className="w-4" />
                                </>
                            }
                        </div>
                    </StepLabel>
                    <StepContent>
                        <Overview
                            state={overviewState}
                            onChange={onChange}
                        />
                        <div className="flex justify-end space-x-2 mt-7">
                        <Button 
                            className="bg-accent px-2 text-grayblack uppercase font-semibold"
                            onClick={() => onNext('OVERVIEW')}
                        >
                            Next
                        </Button>
                        </div>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>
                        <div className='flex items-center space-x-3 flex-row'>
                            <h1 className='font-bold'>SCOPE AND PRICING</h1>
                            {
                                activeStep === 1 &&
                                <>
                                <IconEye />
                                <IconSave className="w-4" />
                                </>
                            }
                        </div>
                    </StepLabel>
                    <StepContent>
                        <Scope
                            // state={websiteState}
                            // setWebsiteState={setWebsiteState}
                        />
                        <div className="flex justify-end space-x-2 mt-7">
                        <Button 
                            className="bg-gray-300 px-2 text-gray-700 uppercase font-semibold"
                            onClick={handleBack}
                            >
                            Previous
                        </Button>
                        <Button 
                            className="bg-yellow-500 px-2 text-gray-700 uppercase font-semibold"
                            onClick={() => onNext('SCOPE')}
                        >
                            Next
                        </Button>
                        </div>
                    </StepContent>
                </Step>
            </Stepper>

            <CompletedModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </div>
    );
};

export default CreateGig;