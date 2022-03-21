import React, { SyntheticEvent, useState } from 'react'

import Active from "./components/Active"
import Denied from './components/Denied';
import Draft from './components/Draft';
import PendingApproval from './components/PendingApproval';
import RequiresModification from './components/RequiresModification';

const ManageGigPost = () => {
  const [show, setShow] = useState(1);
  
  const onChange = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    setShow(+value)
}

  return (
    <div className="flex flex-col p-4 space-y-4">
      <h1 className="text-gray-600 font-semibold text-sm tracking-wider">Manage Gig Posts</h1>
      <div className="flex items-center space-x-2">
        <div className="w-full">
          <select onChange={onChange} value={show} className="p-2 text-xs rounded-md focus:outline-none border border-gray-600 w-full">
            <option value={1}>ACTIVE</option>
            <option value={2}>PENDING APPROVAL</option>
            <option value={3}>REQUIRES MODIFICATION</option>
            <option value={4}>DRAFT</option>
            <option value={5}>DENIED</option>
          </select>
        </div>
        <button className="p-2 w-full rounded-md text-xs text-white bg-green-600 font-semibold focus:outline-none uppercase">
          Create a new gig
        </button>
      </div>
      <div className="border border-gray-200 rounded-t-md bg-white">
        {show === 1 && <Active />}
        {show === 2 && <PendingApproval />}
        {show === 3 && <RequiresModification />}
        {show === 4 && <Draft />}
        {show === 5 && <Denied />}
      </div>
    </div>
  )
}

export default ManageGigPost