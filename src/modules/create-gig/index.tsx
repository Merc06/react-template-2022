import {Step, StepContent, StepLabel, Stepper } from '@mui/material';
import React, { SyntheticEvent, useState } from 'react';
import Button from '../common/components/Button';
import { IconEye, IconSave } from '../common/components/Icons';
import { addDescription, saveOverview } from './apis';
import CompletedModal from './components/modals/CompletedModal';
import Description from './components/Description';
import Overview from './components/Overview';
import Scope from './components/Scope';
import { INIT_FAQ_STATE, INIT_OVERVIEW_STATE } from './constants';
import { FaqProps, OverviewProps } from './types';
import FaqModal from './components/modals/FaqModal';


const CreateGig = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [isCompleteModalOpen, setIsCompleteModalOpen] = useState<boolean>(false);
    const [isFaqModalOpen, setIsFaqModalOpen] = useState<boolean>(false);

    const [overviewState, setOverviewState] = useState<OverviewProps>(INIT_OVERVIEW_STATE);
    const [faqToEditState, setFaqToEditState] = useState<FaqProps>(INIT_FAQ_STATE);
    const [faqIdState, setFaqIdState] = useState<number>(0);
    const [description, setDescription] = useState<string>('');

    const onChange = (e: SyntheticEvent, step: 'OVERVIEW' | 'FAQ') => {
        const { name, value } = e.target as HTMLInputElement;

        switch (step) {
            case 'OVERVIEW':
                setOverviewState({
                    ...overviewState,
                    [name]: value
                })
                break;

            case 'FAQ':
                setDescription(value);
                break;

            default:
                return;
        }
    }
    
    const handleNext = (): void => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    // const handleBack = (): void => {
    //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    // const onPublished = (): void => {
    //     // console.log("Setup Finished!")
    //     setIsModalOpen(true);
    // }

    const onNext = (step: 'OVERVIEW' | 'SCOPE' | 'FAQ') => {
        switch (step) {
            case 'OVERVIEW':
                saveOverview(overviewState, () => handleNext());
                break;

            case 'SCOPE':
                // saveScope(scopeState, () => {
                    handleNext();
                // })
                break;

            case 'FAQ':
                const payload = { description };
                addDescription(payload, () => {
                    handleNext();
                })
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
                        {/* <Button 
                            className="bg-gray-300 px-2 text-gray-700 uppercase font-semibold"
                            onClick={handleBack}
                            >
                            Previous
                        </Button> */}
                        <Button 
                            className="bg-yellow-500 px-2 text-gray-700 uppercase font-semibold"
                            onClick={() => onNext('SCOPE')}
                        >
                            Next
                        </Button>
                        </div>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>
                        <div className='flex items-center space-x-3 flex-row'>
                            <h1 className='font-bold'>FAQ AND DESCRIPTION</h1>
                            {
                                activeStep === 2 &&
                                <>
                                <IconEye />
                                <IconSave className="w-4" />
                                </>
                            }
                        </div>
                    </StepLabel>
                    <StepContent>
                        <Description
                            description={description}
                            onChange={onChange}
                            setIsFaqModalOpen={setIsFaqModalOpen}
                            setFaqToEditState={setFaqToEditState}
                            setFaqIdState={setFaqIdState}
                        />
                        <div className="flex justify-end space-x-2 mt-7">
                        <Button 
                            className="bg-yellow-500 px-2 text-gray-700 uppercase font-semibold"
                            onClick={() => onNext('FAQ')}
                        >
                            Next
                        </Button>
                        </div>
                    </StepContent>
                </Step>
            </Stepper>

            <CompletedModal
                isModalOpen={isCompleteModalOpen}
                setIsModalOpen={setIsCompleteModalOpen}
            />

            <FaqModal
                faqToEditState={faqToEditState}
                setFaqToEditState={setFaqToEditState}
                faqIdState={faqIdState}
                setFaqIdState={setFaqIdState}
                isModalOpen={isFaqModalOpen}
                setIsModalOpen={setIsFaqModalOpen}
            />
        </div>
    );
};

export default CreateGig;