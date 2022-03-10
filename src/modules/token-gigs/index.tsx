import React, { useState } from 'react'
import tokengig from '../../images/tokengig.png';
import brush from '../../images/brush.png';
import Token from '../../images/token.png';

import { IconPlay } from '../common/components/Icons';
import Button from '../common/components/Button';
import GigFooter from '../common/components/GigFooter';
import { Link } from 'react-router-dom';

const TokenGigs = () => {

  const [btn] = useState ([
      { 
        name: 'AMA', 
        link: '/token-gigs'
      },
      { 
        name: 'PROMOTION', 
        link: '/token-gigs'
      },
      { 
        name: 'LISTING', 
        link: '/token-gigs'
      },
      { 
        name: 'INFLUENCER', 
        link: '/search-gig-post'
      },
      { 
        name: 'PRO SERVICES', 
        link: '/token-gigs'
      },
  ])

  const [object] = useState ([
    {
        class: 'bg-gig1 bg-cover bg-center w-full rounded-md border shadow-sm flex items-center justify-center relative h-24',
        text: 'PROMOTION'
    },
    {
        class: 'bg-gig2 bg-cover bg-center w-full rounded-md border shadow-sm flex items-center justify-center relative h-24',
        text: 'INFLUENCERS'
    },
    {
        class: 'bg-gig3 bg-cover bg-center w-full rounded-md border shadow-sm flex items-center justify-center relative h-24',
        text: 'PRO SERVICES'
    },
    {
        class: 'bg-gig4 bg-cover bg-center w-full rounded-md border shadow-sm flex items-center justify-center relative h-24',
        text: 'LISTING'
    },
])
  return (
    <>
      <div className="flex flex-col items-center py-5 space-y-4 bg-yellow-400 relative px-7">
        <img src={tokengig} alt="Token Gig Illustration" className="object-contain w-56 z-10" />
        <p className="text-xs text-gray-700 leading-relaxed font-medium text-center z-10">
            Because we launched our DOK token few months ago and we experienced
            the need for support from freelancers, influencers and partners we can trust,
            we decided to build and offer the solutions we wanted for ourselves.
        </p>
        <div className="flex justify-center pt-2 z-10">
            <Button className="uppercase text-xs flex items-center space-x-2 font-semibold py-2 px-4 border border-gray-800 rounded-xl">
                <IconPlay />
                <h1 className="text-xs">How Doc Gig Works</h1>
            </Button>
        </div>
        <img src={Token} alt="Token Illustration" className="absolute mx-auto opacity-10" />
      </div>
      <div className="flex flex-col space-y-4 px-5 pt-4">
        <h1 className="text-sm text-gray-800 tracking-wider font-bold">TOKEN SUB CATEGORIES</h1>
        {btn.map((btn, key) => (
            <Link to={btn.link} key={key} className="uppercase text-sm font-medium p-2 w-full text-center border shadow-md text-gray-800 border-gray-800 rounded-lg">
                {btn.name}
            </Link>
        ))}
      </div>
      <div className="flex flex-col space-y-4 px-5 pt-4 pb-5">
        <h1 className="text-sm text-gray-800 tracking-wider font-bold">EXPLORE TOKEN GIGS</h1>
        <div className="grid grid-cols-2 gap-2">
            {object.map((object, key) => (
                <div className={object.class} key={key}>
                    <div className="w-full py-1 z-20 text-xs text-center text-white tracking-wide uppercase">{object.text}</div>
                    <img src={brush} alt="Brush Background" className="absolute object-contain" /> 
                </div>
            ))}
        </div>
      </div>
      <GigFooter />
    </>
  )
}

export default TokenGigs