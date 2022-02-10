import React from 'react';
import { ChevronLeft } from '../../../common/components/Icons';

import GigLogo from '../../../../images/GigLogo.png';

const ProfileHeader = () => {
  return (
  <div className="flex items-center justify-between p-4">
    <img src={GigLogo} alt="GigLogo" className="object-contain h-6" />
    <div className="flex space-x-1 items-center">
      <ChevronLeft className="text-blue-700" />
      <h1 className="text-blue-700 text-xs font-semibold">Back to user selection</h1>
    </div>
  </div>
  );
};

export default ProfileHeader;
