import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import useAppSelector from '../../../helpers/useAppSelector';
import { getGigList } from '../apis';
import { AllGigListProps, Gallery, Pricing } from '../types';
import noImage from '../../../images/no-image.jpeg';
import defaultAvatar from '../../../images/default-avatar.png';
import gigLoader from '../../../images/gig-loader.gif';
import { DIcon, HeartIcon, StarIcon } from '../../common/components/Icons';

const GigList = () => {
    const navigate = useNavigate();
    const gigList: Array<AllGigListProps> = useAppSelector('gigs.gigList');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentView, setCurrentView] = useState<number>(6);
  
    useEffect(() => {
      getGigList((res) => {
        setIsLoading(false);
      });
    }, []);
  
    const getOneImage = (gallery: Array<Gallery>) => {
      const images = gallery.filter((item) => item.type === "images");
      return images[0]?.files || noImage;
    }
  
    const getLowestPrice = (pricing: Array<Pricing>) => {
      const prices = pricing.map(item => item.price);
      const lowestPrice = Math.min.apply(null, prices.filter(Boolean));
      console.log(lowestPrice)
      return lowestPrice === Infinity ? 0 : lowestPrice;
    }
  
    const onClickItem = (item: AllGigListProps) => {
      navigate('/gig-details', { state: item });
    }
    
    return (
        isLoading ?
        <img src={gigLoader} alt="spinner" width="80px" className='mx-auto p-4' /> :
        !_.isEmpty(gigList) ?
        <>
        <div className="grid grid-cols-2 gap-2 px-4 mt-4">
            { gigList.filter((item, index) => index < currentView).map((item, key) => (
            <div
            key={key}
            className="flex flex-col rounded-md shadow-md pb-2"
            onClick={() => onClickItem(item)}
            >
            <div className="relative">
                {
                    !_.isEmpty(item.gallery) ?
                    <img className="rounded-t-lg h-full max-h-[144px] mx-auto" src={getOneImage(item.gallery)} alt="" /> :
                    <img className="rounded-t-lg" src={noImage} alt="No Uploaded" />
                }

                <h1 className="text-white bg-gray-800 py-1 text-xs font-semibold text-center uppercase">
                {item?.category[0]?.name} / {item?.subCategory[0]?.name}
                </h1>
            </div>
            <div className="text-xs text-gray-700 h-14 overflow-y-auto p-2 mb-2">
                <p className="text-xxs text-gray-700">
                {item.description || "( NO DESCRIPTION AVAILABLE )"}
                </p>
            </div>
            <div className="flex space-x-3 px-2 items-center border-b border-gray-400 pb-3">
                {
                    item.client[0]?.photo ?
                    <img src={item.client[0].photo} alt="Profile Illustration" className="h-12 w-12 rounded-full object-cover"/> :
                    <img src={defaultAvatar} alt="Profile Illustration" className="h-12 w-12 rounded-full object-cover"/>
                }
                <div className="flex flex-col space-y-2">
                <h1 className="text-gray-700 text-sm font-bold truncate">
                    {item.client[0]?.first_name}
                </h1>
                <h1 className="text-gray-700 text-xxs flex items-center">
                    ---
                    <StarIcon className="text-xs"/>
                    (---reviews)
                </h1>
                </div>
            </div>
            <div className="p-2 flex justify-between items-center">
                <HeartIcon className="text-xs" />
                <div className="flex items-center">
                <div className="text-xxs text-gray-400 uppercase flex">
                    Start at {getLowestPrice(item.pricing)} <DIcon className="text-xs mx-1"/> DOK
                </div>
                </div>
            </div>
            </div>
            ))}
        </div>
        <div className="flex w-full py-3 px-4" onClick={() => setCurrentView(currentView + 6)}>
            <h1 className="text-sm uppercase text-center font-bold tracking-wider py-2 w-full border border-gray-500">
            See more Gigs
            </h1>
        </div>
        </> :
        <p className='text-center'>No Gig found.</p>
    );
};

export default GigList;