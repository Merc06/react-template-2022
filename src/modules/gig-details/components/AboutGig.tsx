import React from 'react';
import { useLocation } from 'react-router-dom';
import { AllGigListProps } from '../../gig-post/types';

const AboutGig = () => {
  const location = useLocation();
  const state = location.state as AllGigListProps;

  return (
      <div className="flex flex-col p-4 space-y-3">
        <h1 className="text-lg uppercase text-gray-900 tracking-wider font-bold">About this Gig</h1>
        <p className="text-xs text-gray-700">{state.description}</p>
      </div>
  );
};

export default AboutGig;