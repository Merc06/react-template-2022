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

import Profile from '../../images/displaypicture.jpg';


const MyProfile = () => {
    return (
    <>
        <div className="flex flex-col p-4 space-y-5">
            <div className="flex space-x-1 justify-end items-center">
                <IconBallpen className="text-xs text-gray-400" />
                <h1 className="text-xs font-semibold uppercase text-blue-700">Edit Profile</h1>
            </div>
            <div className="flex space-x-3 items-center">
                <img src={Profile} alt="Profile Illustration" className="rounded-full h-24 w-24 object-cover object-center" />
                <div className="flex flex-col space-x-1">
                    <h1 className="text-2xl font-bold text-gray-800">TestFirstName</h1>
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
                    <img src={Profile} alt="GigPics" className="w-44 h-44 object-cover object-center" />
                    <img src={Profile} alt="GigPics" className="w-44 h-44 object-cover object-center" />
                    <img src={Profile} alt="GigPics" className="w-44 h-44 object-cover object-center" />
                    <img src={Profile} alt="GigPics" className="w-44 h-44 object-cover object-center" />
                </div>
                <div className="flex space-x-1 justify-end items-center">
                    <h1 className="text-xs font-semibold uppercase text-blue-700">Edit Profile</h1>
                    <ChevronRight className="font-medium" />
                </div>
            </div>
            <div className="flex flex-col space-y-3 border-b-2 border-gray-300 w-full pb-5">
                <h1 className="font-bold text-lg text-gray-700">Description</h1>
                <p className="text-xs text-gray-400 font-semibold">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a 
                    type specimen book.
                </p>
            </div>
            <div className="flex flex-col space-y-3 border-b-2 border-gray-300 w-full pb-5">
                <h1 className="font-bold text-lg text-gray-700">Languages</h1>
                <h1 className="text-xs text-gray-400 font-medium">
                    <b className="text-gray-600">Filipino</b> - Native / Bilingual
                </h1>
                <h1 className="text-xs text-gray-400 font-medium">
                    <b className="text-gray-600">English</b> - Fluent
                </h1>
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
                <h1 className="text-xs text-gray-400 font-semibold">
                    • Instagram Growth
                </h1>
                <h1 className="text-xs text-gray-400 font-semibold">
                    • Social Media Marketing
                </h1>
                <h1 className="text-xs text-gray-400 font-semibold">
                    • Social Media Management
                </h1>
            </div>
            <div className="flex flex-col space-y-3 border-b-2 border-gray-300 w-full pb-5">
                <h1 className="font-bold text-lg text-gray-700">Education</h1>
                <h1 className="text-xs text-gray-400 font-medium">
                    <b className="text-gray-600">T.I.P Computer Science and Technology Institute of the Philippines</b>, Manila, Graduated 2022
                </h1>
            </div>
            <div className="flex flex-col space-y-3 border-b-2 border-gray-300 w-full pb-5">
                <h1 className="font-bold text-lg text-gray-700">Certification</h1>
                <h1 className="text-xs text-gray-400 font-medium">
                    <b className="text-gray-600">Content Marketing Masterclass: Create content that sells</b> Udemy 2019
                </h1>
            </div>
        </div>
    </>
    );
};

export default MyProfile;