import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from '../../common/components/Icons';

const Navigations = () => {
    return (
        <div className="flex justify-center text-center text-gray-500 py-5 items-center">
            <Link to="/" className="font-semibold uppercase px-1 text-xxs">
            Home
            </Link>
            <ChevronRight className="text-xxs" />
            <h1 className="font-semibold uppercase px-1 text-xxs">
                Categories
            </h1>
            <ChevronRight className="text-xxs" />
            <Link to="/token-gigs" className="font-semibold uppercase px-1 text-xxs">
            Token Gigs
            </Link>
            <ChevronRight className="text-xxs" />
            <h1 className="font-semibold uppercase px-1 text-xxs text-blue-800">
                Influencer
            </h1>
        </div>
    );
};

export default Navigations;