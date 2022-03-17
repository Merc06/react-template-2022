import React from 'react';
import Button from '../../common/components/Button';
import { CloseIcon, IconSearch } from '../../common/components/Icons';

const Filters = () => {
    return (
        <>
         <div className="flex justify-center pb-5 px-4">
             <div className="relative flex items-center w-full">
                 <input type="search" placeholder="I'm looking for..."
                     className="p-1 px-2 text-sm rounded-md focus:outline-none border border-gray-500 w-full" />
                 <IconSearch className="absolute right-3 text-xs text-gray-500" />
             </div>
         </div>
         
         <div className="flex flex-col pb-5 px-4 border-b border-gray-400">
             <h1 className="font-bold uppercase tracking-widest text-gray-700 text-sm mb-2">
                 Filtered By
             </h1>
             <select className="border border-gray-500 rounded-md p-1 px-2 focus:outline-none text-sm mb-3"
                 name="Service-option">
                 <option>Service Options</option>
                 <option>Youtube Videos</option>
                 <option>Blogs</option>
                 <option>Telegram Groups</option>
                 <option>Social Networks</option>
             </select>
             <select className="border border-gray-500 rounded-md p-1 px-2 focus:outline-none text-sm mb-3"
                 name="Service-option">
                 <option>Seller Details</option>
                 <option>English</option>
                 <option>Spanish</option>
                 <option>Bengali Groups</option>
                 <option>French</option>
             </select>
             <select className="border border-gray-500 rounded-md p-1 px-2 focus:outline-none text-sm mb-3"
                 name="Service-option">
                 <option>Budget</option>
                 <option>--DOK</option>
                 <option>--DOK</option>
             </select>
             <Button
                 className="text-sm text-gray-700 justify-center p-1 text-center flex items-center bg-red-500 rounded-md shadow-md">
                 <CloseIcon className="text-white text-lg" />
                 <h1 className="text-sm text-white">Clear All Filters</h1>
             </Button>
         </div>

         <div className="flex flex-col mt-3 px-4">
             <div className="flex justify-between items-center">
                 <h1 className="text-xxs font-bold text-gray-500">--- services available</h1>
                 <div className="flex items-center">
                     <h1 className="text-xxs font-bold text-gray-500 mr-1">Sort by</h1>
                     <select className="border border-gray-500 rounded-md p-1 px-2 focus:outline-none text-xxs"
                         name="Service-option">
                         <option>Best Selling</option>
                         <option>Newest</option>
                         <option>Recommended</option>
                     </select>
                 </div>
             </div>
         </div>
        </>
    );
};

export default Filters;