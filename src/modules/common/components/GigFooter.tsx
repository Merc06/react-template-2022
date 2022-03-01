import React from 'react'

import Token from '../../../images/token.png';

const GigFooter = () => {
  return (
    <div className="pt-4 px-4 flex flex-col justify-center items-center bg-yellow-500">
      <h1 className="text-gray-800 font-extrabold text-xl text-center mb-2">
        DOC Gig Marketplace
      </h1>
      <p className="text-sm text-gray-800 font-medium text-center mb-2">
        The first community-driven decentralized network to develop a Web3 Gig economy for freelancers, creators and artists.
      </p>
      <button className="p-2 px-3 uppercase text-sm tracking-wide text-white bg-blue-900 rounded-lg mb-4">
        Join our telegram community
      </button>
      <img src={Token} alt="Token Illustration" className="object-contain h-44" />
    </div>
  )
}

export default GigFooter