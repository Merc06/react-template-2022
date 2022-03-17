import React from 'react';
import { ChevronRight } from '../../common/components/Icons';

const Navigations = () => {
    return (
        <div className="flex items-center justify-center py-4">
            <h1 className="text-gray-400 text-xxs font-semibold uppercase">Home</h1>
            <ChevronRight className="text-xs" />
            <h1 className="text-gray-400 text-xxs font-semibold uppercase">Categories</h1>
            <ChevronRight className="text-xs" />
            <h1 className="text-gray-400 text-xxs font-semibold uppercase">Token Gigs</h1>
            <ChevronRight className="text-xs" />
            <h1 className="text-gray-400 text-xxs font-semibold uppercase">Influencers</h1>
            <ChevronRight className="text-xs" />
            <h1 className="text-blue-800 text-xxs font-semibold uppercase">Gig Post</h1>
        </div>
    );
};

export default Navigations;