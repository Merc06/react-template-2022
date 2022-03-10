import gig from '../../../images/gig.png';
import imgLogin from '../../../images/img-landing-banner-graphic-v2.png';
import Button from '../../common/components/Button';
import { DoubleChevronDown, IconPlay } from '../../common/components/Icons';
import './content.css';
import brush from '../../../images/brush.png'

import tokengig from '../../../images/tokengig.png';
import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
    const [selected, setSelected ] = useState('/');

    const onChange = (e: SyntheticEvent) => {
        const { value } = e.target as HTMLInputElement;
        setSelected(value);
    }
    
    const [btn] = useState ([
            { name: 'AMA'},
            { name: 'PROMOTION'},
            { name: 'LISTING'},
            { name: 'INFLUENCER'},
            { name: 'PRO SERVICES'},
        ])
    const [btn2] = useState ([
            { name: 'ART & DESIGN'},
            { name: 'SOCIAL'},
            { name: 'WRITERS'},
            { name: 'GAME'},
            { name: 'PRO SERVICES'},
        ])

        const [visible, setVisible] = useState(false)
        
        const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
            } 
            else if (scrolled <= 300){
            setVisible(false)
            }
        };
        
        const scrollToBottom = () =>{
            window.scrollTo({
            top: 600, 
            behavior: 'smooth'
            });
        };
    window.addEventListener('scroll', toggleVisible); 

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
        <div className='py-10 text-center'>
            <h1 className='text-xl font-bold text-center text-grayblack'>The blockchain-powered</h1>
            <div className="flex justify-center items-center space-x-3">
                <div className='w-14'><img src={gig} alt="Gig" /></div>
                <h1 className='text-xl font-bold text-grayblack'>marketplace</h1>
            </div>
            <img src={imgLogin} className="max-h-64 mx-auto" alt="Doc-Gig Brand" />
            <div className="flex flex-col space-y-4">
                <h1 className="text-lg text-center text-gray-400">I want to:</h1>
                <div className="radio-button flex space-x-2 justify-center relative">
                    <label className="radio flex items-center">
                        <input checked={selected === "/become-a-seller"} onChange={onChange} type="radio" value="/become-a-seller" name="select" className="mr-1" />
                            I want to provide services
                        <span></span>
                    </label>
                    <label className="radio flex items-center">
                        <input checked={selected === "/become-a-buyer"} onChange={onChange} type="radio" value="/become-a-buyer" name="select" className="mr-1" />
                            I want to hire talents
                        <span></span>
                    </label>
                </div>
                <div className="flex justify-center pt-2">
                    <Link to={selected} className="uppercase text-sm font-semibold p-2 w-60 border-2 border-blue-800 rounded-lg">
                        Explore Doc Gig
                    </Link>
                </div>
                <button 
                    onClick={scrollToBottom}
                    className="flex justify-center pt-2 pb-6">
                    <DoubleChevronDown className="text-5xl font-bold"/>
                </button>
                <div className="flex flex-col items-center py-5 space-y-4 bg-yellow-400 relative px-7">
                    <img src={tokengig} alt="Token Gig Illustration" className="object-contain w-56" />
                    <p className="text-xs text-gray-700 leading-relaxed font-medium text-center">
                        Because we launched our DOK token few months ago and we experienced
                        the need for support from freelancers, influencers and partners we can trust,
                        we decided to build and offer the solutions we wanted for ourselves.
                    </p>
                    <div className="flex justify-center pt-2">
                        <Button className={visible ? 'uppercase text-xs flex items-center space-x-2 font-semibold py-2 px-4 border border-gray-800 rounded-xl' : ''}>
                            <IconPlay />
                            <h1 className="text-xs">How Doc Gig Works</h1>
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 px-5 pt-4">
                    <h1 className="text-sm text-gray-800 tracking-wider font-bold">TOKEN SUB CATEGORIES</h1>
                    {btn.map((btn, key) => (
                        <Button key={key} className="uppercase text-sm font-medium p-2 w-full border shadow-md text-gray-800 border-gray-800 rounded-lg">
                            {btn.name}
                        </Button>
                    ))}
                </div>
                <div className="flex flex-col space-y-4 px-5 pt-4">
                    <h1 className="text-sm text-gray-800 tracking-wider font-bold">NFT SUB CATEGORIES</h1>
                    {btn2.map((btn2, key) => (
                        <Button key={key} className="uppercase text-sm font-medium p-2 w-full border shadow-md text-gray-800 border-gray-800 rounded-lg">
                            {btn2.name}
                        </Button>
                    ))}
                </div>
                <div className="flex flex-col space-y-4 px-5 pt-4">
                    <h1 className="text-sm text-gray-800 tracking-wider font-bold">EXPLORE TOKEN GIGS</h1>
                    <div className="grid grid-cols-2 gap-2">
                        {object.map((object, key) => (
                            <div className={object.class} key={key}>
                                <div className="w-full py-1 z-20 text-xs text-white tracking-wide uppercase">{object.text}</div>
                                <img src={brush} alt="Brush Background" className="absolute object-contain" /> 
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;