import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconCopyFile } from '../../common/components/Icons';
import InputGroup from '../../common/components/InputGroup';
import manWithMegaphone from '../../../images/man-with-megaphone.png';
import Button from '../../common/components/Button';
import { getOneGig } from '../apis';
import { AllGigListProps } from '../../gig-post/types';

const Completed = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { gigId } = location.state as any;
    const [state, setState] = useState<AllGigListProps | {}>({});

    useEffect(() => {
        getOneGig(gigId, (res) => {
            setState(res.data);
        });
    }, [gigId]);

    const onNavigate = (type: 'VIEW' | 'MANAGE'): void => {
        type === 'VIEW' ?
        navigate('/gig-details', { state }) :
        navigate('/my-gigs')
    }

    return (
        <div className='text-center space-y-3 p-10'>
            <div>
                <h1 className='font-bold text-lg'>Your Gig is open for business!</h1>
                <h1 className='text-xs text-gray-400'>Share your gig by copying the link below</h1>
            </div>

            <InputGroup
                type='text'
                placeholder=''
                readOnly
                disabled
                value='https://www.dummy-links.demo'
                icon={<IconCopyFile />}
            />

            <div><img src={manWithMegaphone} className="w-56 mx-auto" alt="Man With Megaphone" /></div>

            <Button className='uppercase text-xs font-bold bg-accent w-full' onClick={() => onNavigate('VIEW')}>
                View gig post
            </Button>
            <Button className='uppercase text-xs font-bold bg-grayblack text-white w-full'>
                Manage my gigs
            </Button>
        </div>
    );
};

export default Completed;