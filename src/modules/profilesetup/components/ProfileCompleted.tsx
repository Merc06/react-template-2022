import React from 'react';
import { Link } from 'react-router-dom';
import imgLogin from '../../../images/img-login.png';
import Button from '../../common/components/Button';

const ProfileCompleted = () => {
    return (
        <div className='p-10 text-center space-y-5'>
            <h1 className="font-bold text-xl">Your Profile is all set!</h1>
            <p className="text-sm text-grayblack">Now go ahead and create your first Gig to start selling your services. You can edit your profile information anytime.</p>
            <div className='w-full'><img src={imgLogin} className="max-h-64 mx-auto" alt="Doc-Gig Brand" /></div>
            <Link to="/create-gig">
                <Button className='bg-grayblack text-white font-bold uppercase w-full'>
                    Create my first GIG
                </Button>
            </Link>
        </div>
    );
};

export default ProfileCompleted;