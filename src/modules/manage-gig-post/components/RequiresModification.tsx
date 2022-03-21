import React, { useState } from 'react'

const RequiresModification = () => {
  const [tbl] = useState ([
    {
      Title: 'Gig Title 1',
      Clicks: 'History',
      Orders: 'Morakami clone x',
      Cancelation: 'Not Cancelled',
    },
    {
      Title: 'Gig Title 2',
      Clicks: 'History',
      Orders: 'Morakami clone y',
      Cancelation: '---',
    },
    {
      Title: 'Gig Title 3',
      Clicks: 'History',
      Orders: 'Morakami clone z',
      Cancelation: 'Not Cancelled',
    }
  ])
  return (
    <div className="flex flex-col w-full space-y-1">
      <div className="flex justify-between items-center p-2">
        <h1 className="text-sm text-gray-700 font-semibold uppercase">Required Modification</h1>
        <select className="p-2 text-xs rounded-md focus:outline-none border border-gray-600">
            <option>Today</option>
            <option>Yesterday</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>
      </div>
      {tbl.map((tbl,key) => (
      <table key={key} className="text-xs text-gray-500 p-2 border border-gray-600">
        <tbody>
          <tr>
            <td className="font-bold text-gray-600 uppercase">Gig</td>
            <td>{tbl.Title}</td>
          </tr>
          <tr>
            <td className="font-bold text-gray-600 uppercase">Clicks</td>
            <td>{tbl.Clicks}</td>
          </tr>
          <tr>
            <td className="font-bold text-gray-600 uppercase">Orders</td>
            <td>{tbl.Orders}</td>
          </tr>
          <tr>
            <td className="font-bold text-gray-600 uppercase">Cancellation</td>
            <td>{tbl.Cancelation}</td>
          </tr>
        </tbody>
      </table>
      ))}
    </div>
  )
}

export default RequiresModification