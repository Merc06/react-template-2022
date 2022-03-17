import React, { useState } from 'react';
import { StarIcon } from '../../common/components/Icons';

const Reviews = () => {
    
    const [reviews] = useState ([
        {star: '5 Stars'},
        {star: '4 Stars'},
        {star: '3 Stars'},
        {star: '2 Stars'},
        {star: '1 Stars'}
    ])

    const [rating] = useState ([
        {text: 'Seller Communication Level'},
        {text: 'Recommend to a friend'},
        {text: 'Service as described'},
    ])

    return (
        <div className="flex flex-col p-4 space-y-3">
            <h1 className="text-lg uppercase text-gray-900 flex items-center tracking-wider font-bold">--- Reviews
                <StarIcon className="mx-1" /> ---</h1>
            <div className="my-2 flex flex-col space-y-1">
                {reviews.map((reviews,key) => (
                <div key={key} className="flex space-x-1 items-center">
                    <h1 className="text-xs text-gray-400 w-12">{reviews.star}</h1>
                    <div className="w-56 h-1 bg-gray-200" />
                    <h1 className="text-xs text-gray-400 w-12">(0)</h1>
                </div>
                ))}
            </div>
            <h1 className="text-lg uppercase text-gray-500 tracking-wider font-bold">Rating Breakdown</h1>
            <div className="my-2 flex flex-col space-y-1">
                {rating.map(( rating,key ) => (
                <div key={key} className="flex space-x-1 items-center justify-between">
                    <h1 className="text-xs text-gray-400">{rating.text}</h1>
                    <div className="flex space-x-8">
                        <h1 className="text-xs text-gray-400">---</h1>
                        <StarIcon />
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;