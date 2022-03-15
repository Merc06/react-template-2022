import React from 'react'
import { ClockIcon } from '../../common/components/Icons'

const Basic = () => {
  return (
    <>
      <div className="flex flex-col space--2">
        <h1 className="text-xs font-bold text-gray-700 uppercase">Trial Growth</h1>
        <h1 className="text-sm font-bold text-gray-700 uppercase">--- DOK</h1>
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-xs font-bold text-gray-500 uppercase">--- real and active english followers</h1>
      </div>
      <div className="flex flex-col space-y-3">
        <div className="flex space-x-2 items-center">
          <ClockIcon className="text-lg" />
          <h1 className="text-xs font-bold text-gray-700 uppercase">--- Days Delivery</h1>
        </div>
        <button className="bg-gray-900 text-white text-sm p-2 rounded-md font-bold uppercase tracking-wide">Contact me for a quote</button>
        <h1 className="text-center text-blue-800 text-sm font-bold">Compare Packages</h1>
      </div>
    </>
  )
}

export default Basic