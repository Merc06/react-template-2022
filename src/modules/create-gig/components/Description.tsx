import React, { Dispatch, SetStateAction, SyntheticEvent, useEffect } from 'react';
import useAppSelector from '../../../helpers/useAppSelector';
import Button from '../../common/components/Button';
import TextArea from '../../common/components/TextArea';
import { deleteFaq, getFaqList } from '../apis';
import { FaqListProps, FaqProps } from '../types';

interface Props {
    description: string;
    setIsFaqModalOpen: Dispatch<SetStateAction<boolean>>;
    setFaqToEditState: Dispatch<SetStateAction<FaqProps>>;
    setFaqIdState: Dispatch<SetStateAction<number>>;
    onChange: (e: SyntheticEvent, step: 'OVERVIEW' | 'FAQ') => void;
}

const Description = ({
    description,
    setIsFaqModalOpen,
    setFaqToEditState,
    setFaqIdState,
    onChange
}: Props) => {
    const faqList = useAppSelector('createGig.faqList');
    
    useEffect(() => {
        getFaqList();
    }, [])

    const onEdit = async ({ id, question, answer }: FaqListProps) => {
        const obj = {
            question,
            answer
        }
        await setFaqToEditState(obj);
        await setFaqIdState(id);
        await setIsFaqModalOpen(true);
    }

    return (
        <div className='p-4 space-y-8'>
            <div className="flex flex-col space-y-1">
                <p className='text-xs font-bold'>Briefly describe your gig <span className='text-red-600'>*</span></p>
                <TextArea
                    value={description}
                    name="title"
                    onChange={(e) => onChange(e, 'FAQ')}
                />
            </div>
            <div className="flex flex-col space-y-1">
                <div className='pb-3 mb-3 border-b border-gray-200'>
                    <p className='font-bold text-sm uppercase'>Frequently Asked Questions</p>
                    <small className='text-xxs text-gray-400'>Add questions and answers for your buyers.</small>
                </div>

                
                    {
                        faqList.length &&
                        faqList.map((item: FaqListProps, index: number) => (
                            <div className="flex justify-between items-center" key={index}>
                                <div className="flex flex-col">
                                    <h1 className='text-sm font-bold'>Question #{index + 1}</h1>
                                    <div className="p-2 text-xs">
                                        <p><span className='font-bold'>Q: </span>{item.question}</p>
                                        <p><span className='font-bold'>A: </span>{item.answer}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                <Button
                                    className='bg-blue-700 text-white w-16'
                                    onClick={() => onEdit(item)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    className='bg-red-600 text-white w-16'
                                    onClick={() => deleteFaq(item.id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                        ))
                    }


                <Button
                    className='text-blue-700 font-bold text-xs w-20'
                    onClick={() => setIsFaqModalOpen(true)}
                >
                    + ADD FAQ
                </Button>
            </div>
        </div>
    );
};

export default Description;