import _ from 'lodash';
import {Step, StepContent, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';

import Button from '../common/components/Button';
import { IconEye, IconSave } from '../common/components/Icons';
import Overview from './components/Overview';
import { GalleryProps, OverviewProps } from './types';
import { INIT_GALLERY_STATE, INIT_OVERVIEW_STATE } from './constants';
import Scope from './components/Scope';
import { INIT_PACKAGE_STATE } from './constants';
import { PackageProps } from './types';
import Description from './components/Description';
import { addGallery, addOverview, addScope, updateOverview, updateScope } from './apis';
import useAppSelector from '../../helpers/useAppSelector';
import Gallery from './components/Gallery';
import CompletedModal from './components/modals/CompletedModal';


const CreateGig = () => {
    const navigate = useNavigate();
    const gigId = localStorage.getItem('gigId');
    const [activeStep, setActiveStep] = useState<number>(0);

    const [isCompleteModalOpen, setIsCompleteModalOpen] = useState<boolean>(false);
    const [overviewState, setOverviewState] = useState<OverviewProps>(INIT_OVERVIEW_STATE);
    
    const scopeList = useAppSelector('createGig.scopeList');
    const [isQoutationCheck, setIsQoutationCheck] = useState<boolean>(true);
    const [isBasicCheck, setIsBasicCheck] = useState<boolean>(true);
    const [isStandardCheck, setIsStandardCheck] = useState<boolean>(false);
    const [isPremiumCheck, setIsPremiumCheck] = useState<boolean>(false);
    const [basicState, setBasicState] = useState<PackageProps>(INIT_PACKAGE_STATE);
    const [standardState, setStandardState] = useState<PackageProps>(INIT_PACKAGE_STATE);
    const [premiumState, setPremiumState] = useState<PackageProps>(INIT_PACKAGE_STATE);
    
    const [description, setDescription] = useState('');

    const [img1, setImg1] = useState<GalleryProps>(INIT_GALLERY_STATE);
    const [img2, setImg2] = useState<GalleryProps>(INIT_GALLERY_STATE);
    const [img3, setImg3] = useState<GalleryProps>(INIT_GALLERY_STATE);
    const [video, setVideo] = useState<GalleryProps>(INIT_GALLERY_STATE);
    const [doc1, setDoc1] = useState<GalleryProps>(INIT_GALLERY_STATE);
    const [doc2, setDoc2] = useState<GalleryProps>(INIT_GALLERY_STATE);

    
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
                gig_id: +gigId,
                allowQoutation: isQoutationCheck ? 1 : 0,
                data: [
                    {
                        ...basicState,
                        gig_id: +gigId,
                        package: "BASIC"
                    },
                    {
                        ...standardState,
                        gig_id: +gigId,
                        package: "STANDARD"
                    },
                    {
                        ...premiumState,
                        gig_id: +gigId,
                        package: "PREMIUM"
                    }
                ]
            }

            _.isEmpty(scopeList) ?
            addScope(payload, () => {
                handleNext();
            }) :
            updateScope(payload, () => {
                handleNext();
            });
        }
    }

    const submitDescription = (): void => {
        gigId && updateOverview({ description }, +gigId, () => {
            // toast.success("Gig FAQ and Description successfully created");
            handleNext();
        })
    }

    const submitGallery = (): void => {
        if (gigId) {
            const payload = {
                gig_id: +gigId,
                data: [
                    { ...img1, gig_id: +gigId },
                    { ...img2, gig_id: +gigId },
                    { ...img3, gig_id: +gigId },
                    { ...video, gig_id: +gigId },
                    { ...doc1, gig_id: +gigId },
                    { ...doc2, gig_id: +gigId }
                ]
            }
            addGallery(payload, () => {
                navigate('/create-gig-completed');
                localStorage.removeItem('gigId');
            })
        }
    }

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
                        <Gallery
                            img1={img1} setImg1={setImg1}
                            img2={img2} setImg2={setImg2}
                            img3={img3} setImg3={setImg3}
                            video={video} setVideo={setVideo}
                            doc1={doc1} setDoc1={setDoc1}
                            doc2={doc2} setDoc2={setDoc2}
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
                                onClick={submitGallery}
                            >
                                Publish GIG
                            </Button>
                        </div>
                    </StepContent>
                </Step>
            </Stepper>

            <CompletedModal
                isModalOpen={isCompleteModalOpen}
                setIsModalOpen={setIsCompleteModalOpen}
            />
        </div>
    );
};

export default CreateGig;