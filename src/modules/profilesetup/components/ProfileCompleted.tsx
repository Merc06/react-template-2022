import React from 'react';
import { Link } from 'react-router-dom';
import useAppSelector from '../../../helpers/useAppSelector';
import imgLogin from '../../../images/img-login.png';
import FinishSetupBuyer from '../../../images/img-finishsetup-buyer.png';
import FinishSetupScholar from '../../../images/img-finishsetup-scholar.png';
import Button from '../../common/components/Button';

const ProfileCompleted = () => {
    const profileInfo = useAppSelector('common.profile');
    // console.log(profileInfo);

    return (
        <div className='p-10 text-center space-y-5'>
            <h1 className="font-bold text-xl">Your Profile is all set!</h1>
            <p className="text-sm text-grayblack">
                {
                    profileInfo.profile_role === 'Manager' ? 'Now go ahead and create your first Gig to start selling your services. You can edit your profile information anytime.' :
                    profileInfo.profile_role === 'Scholar' ? 'You are now whitelisted to be a scholar until a manager approves your application. You can edit your profile information anytime.' :
                    'Now go ahead and find your first gig. You can edit your profile information anytime.'
                }
            </p>
            <div className='w-full p-4'>
                <img
                    src={
                        profileInfo.profile_role === 'Manager' ? imgLogin :
                        profileInfo.profile_role === 'Scholar' ? FinishSetupScholar :
                        FinishSetupBuyer
                    }
                    className="max-h-64 mx-auto" alt="Doc-Gig Brand"
                />
            </div>
            <Link
                to={
                    profileInfo.profile_role === 'Manager' ? '/create-gig' :
                    profileInfo.profile_role === 'Scholar' ? '/' : '/search-gig-post'
                }
            >
                <Button className='bg-grayblack text-white font-bold uppercase w-full'>
                    {
                        profileInfo.profile_role === 'Manager' ? 'Create my first GIG' :
                        profileInfo.profile_role === 'Scholar' ? 'Go to Home Page' :
                        'Find Gigs'
                    }
                </Button>
            </Link>
        </div>
    );
};

export default ProfileCompleted;