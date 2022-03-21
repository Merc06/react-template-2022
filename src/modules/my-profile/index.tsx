// import React from 'react';

import { 
    ChevronRight, 
    ClockIcon, 
    GoogleIcon, 
    HandIcon, 
    IconBallpen, 
    LocationIcon, 
    ProfileIcon, 
    StarIcon, 
    TwitterIcon 
    } from "../common/components/Icons";

import noImage from '../../images/no-image.jpeg';
import { useEffect } from "react";
import { getMyGigList } from "./apis";
import useAppSelector from "../../helpers/useAppSelector";
import { AllGigListProps } from "../gig-post/types";
import { ProfileProps } from "../common/types";
import { getProfile } from "../common/apis";
import _ from "lodash";


const MyProfile = () => {
    const myGigList: Array<AllGigListProps> = useAppSelector('myGigs.myGigList');
    const profileInfo: ProfileProps = useAppSelector('common.profile');

    useEffect(() => {
        getMyGigList((res) => {
        })
        getProfile();
    },[])

    return (
    <>
        <div className="flex flex-col p-4 space-y-5">
            <div className="flex space-x-1 justify-end items-center">
                <IconBallpen className="text-xs text-gray-400" />
                <h1 className="text-xs font-semibold uppercase text-blue-700">Edit Profile</h1>
            </div>
            <div className="flex space-x-3 items-center">
                <img src={profileInfo.photo || noImage} alt="Profile Illustration" className="rounded-full h-24 w-24 object-cover object-center" />
                <div className="flex flex-col space-x-1">
                    <h1 className="text-2xl font-bold text-gray-800">{profileInfo.username}</h1>
                    <h1 className="text-xs text-gray-400 font-semibold">---</h1>
                    <div className="flex space-x-2 text-xs items-center text-gray-400">
                        ---
                        <StarIcon />
                        ('---' reviews)
                    </div>
                </div>
            </div>
            <button className="p-3 text-center bg-gray-800 text-sm text-white font-semibold uppercase tracking-wider rounded-md">
                Contact Me for a Quote
            </button>
            <div className="flex flex-col space-y-2 mx-auto border-b-2 border-gray-300 w-full pb-5">
                <div className="flex space-x-2 items-center">
                    <LocationIcon />
                    <h1 className="text-gray-500 text-xs font-semibold">From ---</h1>
                </div>
                <div className="flex space-x-2 items-center">
                    <ProfileIcon />
                    <h1 className="text-gray-500 text-xs font-semibold">Member Since ---</h1>
                </div>
                <div className="flex space-x-2 items-center">
                    <ClockIcon />
                    <h1 className="text-gray-500 text-xs font-semibold">Avg. Response Time ---</h1>
                </div>
                <div className="flex space-x-2 items-center">
                    <HandIcon />
                    <h1 className="text-gray-500 text-xs font-semibold">Last Delivery About ---</h1>
                </div>
            </div>
            <div className="flex flex-col space-y-3 border-b-2 border-gray-300 w-full pb-5">
                <h1 className="font-bold text-lg text-gray-700">My Portfolio</h1>
                <div className="grid grid-cols-2 gap-3">
                    {
                        !_.isEmpty(myGigList) ?
                        myGigList.map((item, index) => {
                            const images = item.gallery.filter((gallery) => gallery.type === 'images');
                            return images[0]?.files && <img key={index} src={images[0].files} alt="GigPics" className="w-44 h-44 object-cover object-center" />
                        }) :
                        <p className="text-gray-400 italic text-xs text-center">No Portfolio Found.</p>
                    }
                </div>
                <div className="flex space-x-1 justify-end items-center">
                    <h1 className="text-xs font-semibold uppercase text-blue-700">Edit Profile</h1>
                    <ChevronRight className="font-medium" />
                </div>
            </div>
            <div className="flex flex-col space-y-3 border-b-2 border-gray-300 w-full pb-5">
                <h1 className="font-bold text-lg text-gray-700">Description</h1>
                <p className="text-xs text-gray-400 font-semibold">
                    {profileInfo.description}
                </p>
            </div>
            <div className="flex flex-col space-y-3 border-b-2 border-gray-300 w-full pb-5">
                <h1 className="font-bold text-lg text-gray-700">Languages</h1>
                {
                    !_.isEmpty(profileInfo.language) ?
                    profileInfo.language.map((item, index) => (
                        <h1 className="text-xs text-gray-400 font-medium" key={index}>
                            <b className="text-gray-600">{item.language}</b> - {item.level}
                        </h1>
                    )) :
                    <p className="text-gray-400 italic text-xs text-center">No Language Set.</p>
                }
            </div>
            <div className="flex flex-col space-y-3 border-b-2 border-gray-300 w-full pb-5">
                <h1 className="font-bold text-lg text-gray-700">Linked Accounts</h1>
                <div className="flex space-x-2 items-center">
                    <GoogleIcon />
                    <h1 className="text-gray-500 text-xs font-semibold">Google</h1>
                </div>
                <div className="flex space-x-2 items-center">
                    <TwitterIcon />
                    <h1 className="text-gray-500 text-xs font-semibold">Twitter</h1>
                </div>
            </div>
            <div className="flex flex-col space-y-3 border-b-2 border-gray-300 w-full pb-5">
                <h1 className="font-bold text-lg text-gray-700">Skills</h1>
                {
                    !_.isEmpty(profileInfo.skills) ?
                    profileInfo.skills.map((item, index) => (
                        <h1 className="text-xs text-gray-400 font-semibold" key={index}>
                            • {item.skill_name}
                        </h1>
                    )) :
                    <p className="text-gray-400 italic text-xs text-center">No Skills Available.</p>
                }
            </div>
            <div className="flex flex-col space-y-3 border-b-2 border-gray-300 w-full pb-5">
                <h1 className="font-bold text-lg text-gray-700">Education</h1>
                {
                    !_.isEmpty(profileInfo.educations) ?
                    profileInfo.educations.map((item, index) => (
                        <h1 className="text-xs text-gray-400 font-medium" key={index}>
                            <b className="text-gray-600">{item.school}</b>, {item.country}, Graduated {item.year_graduated}
                        </h1>
                    )) :
                    <p className="text-gray-400 italic text-xs text-center">No Educations Set.</p>
                }
            </div>
            <div className="flex flex-col space-y-3 border-b-2 border-gray-300 w-full pb-5">
                <h1 className="font-bold text-lg text-gray-700">Certification</h1>
                {
                    !_.isEmpty(profileInfo.certifications) ?
                    profileInfo.certifications.map((item, index) => (
                        <h1 className="text-xs text-gray-400 font-medium" key={index}>
                            <b className="text-gray-600">{item.certificate_name}</b> {item.certified_from} {item.year}
                        </h1>
                    )) :
                    <p className="text-gray-400 italic text-xs text-center">No Certifications Available.</p>
                }
            </div>
        </div>
    </>
    );
};

export default MyProfile;