import { Box, Button, MobileStepper, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, IconEye, IconSave } from '../common/components/Icons';
import CompletedModal from './components/CompletedModal';
import { steps } from './constants';


const CreateGig = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const maxSteps = steps.length;
    
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const onPublished = () => {
        // console.log("Setup Finished!")
        setIsModalOpen(true);
    }
    
    return (
        <div>
            <Box className='w-full grid grid-cols-1 divide-y p-4 space-y-3'>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 font-bold">
                        <div className="text-xxs rounded-full bg-blue-700 text-white h-4 w-4 flex items-center justify-center">
                            { activeStep + 1 }
                        </div>
                        <h1 className='uppercase text-sm'>{steps[activeStep].label}</h1>
                    </div>

                    <div className="flex items-center space-x-3 text-gray-600">
                        <IconEye />
                        <IconSave className="w-4" />
                    </div>
                </div>

                <div className='py-3 pb-12'>
                    {steps[activeStep].component}
                </div>
            </Box>

            <MobileStepper
                className='fixed bottom-16 w-full flex items-center border-y border-gray-200'
                style={{ backgroundColor: "#fafafa" }}
                variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        onClick={activeStep === maxSteps - 1 ? onPublished : handleNext}
                    >
                        <p className='text-grayblack flex items-center font-bold'>
                            {activeStep === maxSteps - 1 ? 'DONE' : 'NEXT'}
                            {theme.direction === 'rtl' ? (
                            <ChevronLeft />
                            ) : (
                            <ChevronRight />
                            )}
                        </p>
                    </Button>
                }
                backButton={
                    <Button
                        onClick={handleBack}
                        disabled={activeStep === 0}
                    >
                        <p className={`${activeStep === 0 ? 'text-gray-300' : 'text-grayblack'} flex items-center font-bold`}>
                            {theme.direction === 'rtl' ? (
                            <ChevronRight />
                            ) : (
                            <ChevronLeft />
                            )}
                            Back
                        </p>
                    </Button>
                }
            />

            <CompletedModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </div>
    );
};

export default CreateGig;