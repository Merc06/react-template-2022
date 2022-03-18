import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AllGigListProps } from '../../gig-post/types';
import Basic from './Basic';
import Premium from './Premium';
import Standard from './Standard';

const Qoutations = () => {
    const [show, setShow] = useState(1);
    const location = useLocation();
    const state = location.state as AllGigListProps;
    const basicInfo = state.pricing.filter((item) => item.package === 'BASIC');
    const standardInfo = state.pricing.filter((item) => item.package === 'STANDARD');
    const premiumInfo = state.pricing.filter((item) => item.package === 'PREMIUM');

    const toggleTab = (index: React.SetStateAction<any>) => {
        setShow(index);
    }

    return (
      <div className="m-3 flex flex-col border-2 rounded-sm border-yellow-400">
        <div className="flex justify-center w-full py-2 bg-yellow-400">
          <h1 onClick={() => toggleTab(1)} className={show === 1 ? 'text-gray-800 w-full text-center font-bold text-xs uppercase':'text-white w-full text-center font-bold text-xs uppercase'}>Basic</h1>
          <h1 onClick={() => toggleTab(2)} className={show === 2 ? 'text-gray-800 w-full text-center font-bold text-xs uppercase':'text-white w-full text-center font-bold text-xs uppercase'}>Standard</h1>
          <h1 onClick={() => toggleTab(3)} className={show === 3 ? 'text-gray-800 w-full text-center font-bold text-xs uppercase':'text-white w-full text-center font-bold text-xs uppercase'}>Premium</h1>
        </div>
        <div className="p-6 h-56">
          {show === 1 && <Basic basicInfo={basicInfo[0]} />}
          {show === 2 && <Standard standardInfo={standardInfo[0]} />}
          {show === 3 && <Premium premiumInfo={premiumInfo[0]} />}
        </div>
      </div>
    );
};

export default Qoutations;