import React from 'react'
import { CloseIcon } from '../../common/components/Icons'

const Header = () => {
  return (
    <div className="flex flex-col space-y-5 bg-blue-800 px-4 py-3 w-44 h-screen absolute">
      <CloseIcon className="text-white text-4xl"/>
      <h1 className="text-white text-xs font-semibold uppercase">Gig's Gig</h1>
      <div className="flex flex-col space-y-5">
        <h1 className="text-white text-xs font-semibold uppercase">About this Gig</h1>
        <h1 className="text-white text-xs font-semibold uppercase">About the Seller</h1>
        <h1 className="text-white text-xs font-semibold uppercase">Compare Packages</h1>
        <h1 className="text-white text-xs font-semibold uppercase">Seller FAQS</h1>
        <h1 className="text-white text-xs font-semibold uppercase">Reviews</h1>
      </div>
    </div>
  )
}

export default Header