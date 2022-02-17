import React from 'react';
import Button from '../../common/components/Button';
import TextArea from '../../common/components/TextArea';

const Description = () => {
    const onChange = (): void => {
        console.log("Clicked")
    }

    return (
        <div className='p-4 space-y-8'>
            <div className="flex flex-col space-y-1">
                <p className='text-xs font-bold'>Briefly describe your gig <span className='text-red-600'>*</span></p>
                <TextArea
                    value={''}
                    name="title"
                    onChange={onChange}
                />
            </div>
            <div className="flex flex-col space-y-1">
                <div className='pb-3 mb-3 border-b border-gray-200'>
                    <p className='font-bold text-sm uppercase'>Frequently Asked Questions</p>
                    <small className='text-xxs text-gray-400'>Add questions and answers for your buyers.</small>
                </div>
                <Button
                    className='text-blue-700 font-bold text-xs w-20'
                >
                    + ADD FAQ
                </Button>
            </div>
        </div>
    );
};

export default Description;