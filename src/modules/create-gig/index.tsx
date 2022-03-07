import _ from 'lodash';
import {Step, StepContent, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react';
import Button from '../common/components/Button';
import { IconEye, IconSave } from '../common/components/Icons';
import Overview from './components/Overview';
import { OverviewProps } from './types';
import { INIT_OVERVIEW_STATE } from './constants';
import Scope from './components/Scope';
import { INIT_PACKAGE_STATE } from './constants';
import { PackageProps } from './types';

// import CompletedModal from './components/modals/CompletedModal';

import Description from './components/Description';
import { addOverview, addScope, updateOverview, updateScope } from './apis';
import useAppSelector from '../../helpers/useAppSelector';
import toast from 'react-hot-toast';
import Gallery from './components/Gallery';


const CreateGig = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const gigId = localStorage.getItem('gigId');

    // const [isCompleteModalOpen, setIsCompleteModalOpen] = useState<boolean>(false);
    const [overviewState, setOverviewState] = useState<OverviewProps>(INIT_OVERVIEW_STATE);
    
    const scopeList = useAppSelector('createGig.scopeList');
    const [isQoutationCheck, setIsQoutationCheck] = useState<boolean>(false);
    const [isBasicCheck, setIsBasicCheck] = useState<boolean>(false);
    const [isStandardCheck, setIsStandardCheck] = useState<boolean>(false);
    const [isPremiumCheck, setIsPremiumCheck] = useState<boolean>(false);
    const [basicState, setBasicState] = useState<PackageProps>(INIT_PACKAGE_STATE);
    const [standardState, setStandardState] = useState<PackageProps>(INIT_PACKAGE_STATE);
    const [premiumState, setPremiumState] = useState<PackageProps>(INIT_PACKAGE_STATE);
    
    const [description, setDescription] = useState('');


    
    const handleNext = (): void => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = (): void => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const submitOverview = (): void => {
        const payload = {
            title: overviewState.title,
            category_id: overviewState.category_id,
            subcategory_id: overviewState.subcategory_id,
            tag: overviewState.tag,
        }
        gigId ?
        updateOverview(payload, +gigId, () => {
            handleNext();
        }) :
        addOverview(payload, (id) => {
            localStorage.setItem('gigId', id.toString());
            handleNext();
        })
    }

    const submitScope = (): void => {
        if (gigId) {
            const payload = {
                data: [
                    isBasicCheck ? {
                        ...basicState,
                        gig_id: +gigId,
                        package: "BASIC"
                    } : undefined,
                    isStandardCheck ? {
                        ...standardState,
                        gig_id: +gigId,
                        package: "STANDARD"
                    } : undefined,
                    isPremiumCheck ? {
                        ...premiumState,
                        gig_id: +gigId,
                        package: "PREMIUM"
                    } : undefined
                ]
            }

            // payload.data.map((item, key) => {
                
            // })
            // _.isEmpty(scopeList) ?
            // addScope(payload, () => {
            //     handleNext();
            // }) :
            // updateScope(payload, +gigId, () => {
            //     handleNext();
            // });
            handleNext();
        }
    }

    const submitDescription = (): void => {
        gigId && updateOverview({ description }, +gigId, () => {
            toast.success("Gig FAQ and Description successfully created");
            handleNext();
        })
    }

    // const onPublished = (): void => {
    //     // console.log("Setup Finished!")
    //     setIsModalOpen(true);
    // }

    return (
        <div className='p-4'>
            <Stepper activeStep={activeStep} orientation="vertical">
                {/* OVERVIEW STEP */}
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
                            setState={setOverviewState}
                        />
                        <div className="flex justify-end space-x-2 mt-7">
                            <Button
                                className="bg-accent px-2 text-grayblack uppercase font-semibold"
                                onClick={submitOverview}
                            >
                                Next
                            </Button>
                        </div>
                    </StepContent>
                </Step>

                {/* SCOPE & PRICING STEP */}
                <Step>
                    <StepLabel>
                        <div className='flex items-center space-x-3 flex-row'>
                            <h1 className='font-bold'>SCOPE & PRICING</h1>
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
                            isQoutationCheck={isQoutationCheck}
                            setIsQoutationCheck={setIsQoutationCheck}
                            isBasicCheck={isBasicCheck}
                            setIsBasicCheck={setIsBasicCheck}
                            isStandardCheck={isStandardCheck}
                            setIsStandardCheck={setIsStandardCheck}
                            isPremiumCheck={isPremiumCheck}
                            setIsPremiumCheck={setIsPremiumCheck}
                            basicState={basicState}
                            setBasicState={setBasicState}
                            standardState={standardState}
                            setStandardState={setStandardState}
                            premiumState={premiumState}
                            setPremiumState={setPremiumState}
                        />
                        <div className="flex justify-end space-x-2 mt-7">
                            <Button 
                                className="bg-gray-200 px-2 text-grayblack uppercase font-semibold"
                                onClick={handleBack}
                            >
                                Back
                            </Button>
                            <Button 
                                className="bg-accent px-2 text-grayblack uppercase font-semibold"
                                onClick={submitScope}
                            >
                                Next
                            </Button>
                        </div>
                    </StepContent>
                </Step>

                {/* FAQ'S AND DESCRIPTION STEP */}
                <Step>
                    <StepLabel>
                        <div className='flex items-center space-x-3 flex-row'>
                            <h1 className='font-bold'>FAQ'S AND DESCRIPTION</h1>
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
                            setDescription={setDescription}
                        />
                        <div className="flex justify-end space-x-2 mt-7">
                            <Button 
                                className="bg-gray-200 px-2 text-grayblack uppercase font-semibold"
                                onClick={handleBack}
                            >
                                Back
                            </Button>
                            <Button 
                                className="bg-accent px-2 text-grayblack uppercase font-semibold"
                                onClick={submitDescription}
                            >
                                Next
                            </Button>
                        </div>
                    </StepContent>
                </Step>

                {/* GALLERY STEP */}
                <Step>
                    <StepLabel>
                        <div className='flex items-center space-x-3 flex-row'>
                            <h1 className='font-bold'>GALLERY</h1>
                            {
                                activeStep === 3 &&
                                <>
                                <IconEye />
                                <IconSave className="w-4" />
                                </>
                            }
                        </div>
                    </StepLabel>
                    <StepContent>
                        <Gallery />
                        <div className="flex justify-end space-x-2 mt-7">
                            <Button 
                                className="bg-gray-200 px-2 text-grayblack uppercase font-semibold"
                                onClick={handleBack}
                            >
                                Back
                            </Button>
                            <Button 
                                className="bg-accent px-2 text-grayblack uppercase font-semibold"
                                onClick={submitDescription}
                            >
                                Publish GIG
                            </Button>
                        </div>
                    </StepContent>
                </Step>
            </Stepper>

            {/* <CompletedModal
                isModalOpen={isCompleteModalOpen}
                setIsModalOpen={setIsCompleteModalOpen}
            /> */}
        </div>
    );
};

export default CreateGig;