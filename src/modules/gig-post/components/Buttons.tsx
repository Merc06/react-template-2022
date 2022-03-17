import React from 'react';

const Buttons = () => {
    return (
        <div className="flex flex-col p-3 mb-2">
            <h1 className="text-sm tracking-wider uppercase text-gray-700 font-bold text-center">Not the gig you're
                looking for?</h1>
            <div className="flex flex-col items-center space-y-4 justify-center mt-3">
                <div
                    className="h-20 w-full flex items-center bg-ytbg bg-cover bg-no-repeat justify-center rounded-sm shadown-md">
                    <h1 className="font-bold text-white text-sm tracking-wide uppercase">Back to <span
                            className="text-yellow-400">token gigs</span> subcategories</h1>
                </div>
                <div
                    className="h-20 w-full flex flex-col items-center bg-ytbg bg-cover bg-no-repeat justify-center rounded-sm shadown-md">
                    <h1 className="font-bold text-white text-sm tracking-wide uppercase">See gig categories</h1>
                    <h1 className="font-bold text-white text-xs tracking-wide uppercase">Coming soon</h1>
                </div>
            </div>
        </div>
    );
};

export default Buttons;