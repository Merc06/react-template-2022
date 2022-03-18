import React from 'react'
import { ClockIcon } from '../../common/components/Icons'
import { Pricing } from '../../gig-post/types'

interface Props {
  standardInfo: Pricing;
}

const Standard = ({
  standardInfo
}: Props) => {
  return (
    standardInfo.package_name ?
    <>
      <div className="flex flex-col space-y-1">
        <h1 className="text-xs font-bold text-gray-700 uppercase">{ standardInfo.package_name }</h1>
        <h1 className="text-xl font-bold text-gray-700 uppercase">{standardInfo.price} DOK</h1>
      </div>
      {/* <div className="flex flex-col space-y-2">
        <h1 className="text-xs font-bold text-gray-500 uppercase">--- real and active english followers</h1>
      </div> */}
      <div className="flex flex-col space-y-3 pt-10">
        <div className="flex space-x-2 items-center">
          <ClockIcon className="text-lg" />
          <h1 className="text-xs font-bold text-gray-700 uppercase">({ standardInfo.delivery_time }) Days Delivery</h1>
        </div>
        <button className="bg-gray-900 text-white text-sm p-2 rounded-md font-bold uppercase tracking-wide">Contact me
          for a quote</button>
        <h1 className="text-center text-blue-800 text-sm font-bold">Compare Packages</h1>
      </div>
    </> :
    <p className='text-center text-gray-400'>Not available...</p>
  )
}

export default Standard