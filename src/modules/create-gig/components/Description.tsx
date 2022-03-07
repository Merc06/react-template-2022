import React, { Dispatch, SetStateAction, SyntheticEvent, useEffect, useState } from 'react';
import useAppSelector from '../../../helpers/useAppSelector';
import Button from '../../common/components/Button';
import TextArea from '../../common/components/TextArea';
import { deleteFaq, getFaqDescriptionList } from '../apis';
import { INIT_FAQ_STATE } from '../constants';
import { FaqListProps, FaqProps } from '../types';
import FaqModal from './modals/FaqModal';

interface Props {
    description: string;
    setDescription: Dispatch<SetStateAction<string>>;
}

const Description = ({
    description,
    setDescription,
}: Props) => {
    const gigId = localStorage.getItem('gigId');
    const faqDescriptionList = useAppSelector('createGig.faqDescriptionList');

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [faqState, setFaqState] = useState<FaqProps>(INIT_FAQ_STATE);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    
    useEffect(() => {
        gigId && getFaqDescriptionList(+gigId, (res) => {
            setDescription(res[0].description || '');
        }); 
        // eslint-disable-next-line
    }, []);


    const onChange = (e: SyntheticEvent) => {
        const { value } = e.target as HTMLInputElement;
        setDescription(value);
    }

    const onEdit = async ({ id, question, answer }: FaqListProps) => {
        const obj = {
            id,
            question,
            answer
        }
        await setFaqState(obj);
        await setIsModalOpen(true);
    }

    return (
        <>
        <div className='p-4 space-y-8'>
            <div className="flex flex-col space-y-1">
                <p className='text-xs font-bold'>Briefly describe your gig <span className='text-red-600'>*</span></p>
                <TextArea
                    value={description}
                    name="description"
                    onChange={onChange}
                />
            </div>
            <div className="flex flex-col space-y-1">
                <div className='pb-3 mb-3 border-b border-gray-200'>
                    <p className='font-bold text-sm uppercase'>Frequently Asked Questions</p>
                    <small className='text-xxs text-gray-400'>Add questions and answers for your buyers.</small>
                </div>

                
                    {
                        faqDescriptionList[0]?.faq.length ?
                        faqDescriptionList[0].faq.map((item: FaqListProps, index: number) => (
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
                                    onClick={() => {
                                        setIsEdit(true);
                                        onEdit(item);
                                    }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    className='bg-red-600 text-white w-16'
                                    onClick={() => {
                                        deleteFaq(item.id, () => (
                                            gigId && getFaqDescriptionList(+gigId)
                                        ))
                                    }}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                        )) :
                        <></>
                    }


                <Button
                    className='text-blue-700 font-bold text-xs w-20'
                    onClick={() => {
                        setIsEdit(false);
                        setIsModalOpen(true);
                    }}
                >
                    + ADD FAQ
                </Button>
            </div>

        </div>
        <FaqModal
            state={faqState}
            setState={setFaqState}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            isEdit={isEdit}
            // faqToEditState={faqToEditState}
            // setFaqToEditState={setFaqToEditState}
            // faqIdState={faqIdState}
            // setFaqIdState={setFaqIdState}
        />
        </>
    );
};

export default Description;