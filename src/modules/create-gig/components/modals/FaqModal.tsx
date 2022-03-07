import React, { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import Button from '../../../common/components/Button';
import Input from '../../../common/components/Input';
import Modal from '../../../common/components/Modal';
import TextArea from '../../../common/components/TextArea';
import { addFaq, getFaqDescriptionList, updateFaq } from '../../apis';
import { INIT_FAQ_STATE } from '../../constants';
import { FaqProps } from '../../types';

interface Props {
    state: FaqProps;
    setState: Dispatch<SetStateAction<FaqProps>>;
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    isEdit: boolean;
}

const FaqModal = ({
    state,
    setState,
    isModalOpen,
    setIsModalOpen,
    isEdit
}: Props) => {
    const gig_id = localStorage.getItem('gigId');

    const onChange = (e: SyntheticEvent): void => {
        const { name, value } = e.target as HTMLInputElement;
        setState({
            ...state,
            [name]: value
        })
    }

    const onAdd = (): void => {
        if (gig_id) {
            const payload = {
                ...state,
                gig_id: +gig_id
            }
            addFaq(payload, () => {
                getFaqDescriptionList(+gig_id);
                setState(INIT_FAQ_STATE);
                setIsModalOpen(false);
            })
        }
    }

    const onEdit = (): void => {
        if (gig_id) {
            const payload = {
                question: state.question,
                answer: state.answer
            }
            updateFaq(payload, state.id, () => {
                setIsModalOpen(false);
                getFaqDescriptionList(+gig_id);
                setState(INIT_FAQ_STATE);
            })
        }
    } 

    return (
        <Modal
            onClose={() => setIsModalOpen(false)}
            isOpen={isModalOpen}
            title={`${ isEdit ? 'Edit' : 'Add' } FAQ`}
        >
            <div className='space-y-5 p-2'>
                <div className="space-y-2">
                    <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                        Question<span className="text-red-500">*</span>
                    </h1>
                    <Input
                        placeholder="Enter a question..."
                        value={ state.question }
                        name="question"
                        onChange={onChange}
                    />
                </div>

                <div className="space-y-2">
                    <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                        Answer<span className="text-red-500">*</span>
                    </h1>
                    <TextArea
                        placeholder="Enter the answer..."
                        value={ state.answer }
                        name="answer"
                        onChange={onChange}
                    />
                </div>

                <div className="flex justify-end items-center space-x-4 pt-6">
                    <Button
                        className='w-28 text-grayblack font-bold'
                        onClick={() => {
                            setState(INIT_FAQ_STATE);
                            setIsModalOpen(false);
                        }}
                    >
                        CANCEL
                    </Button>
                    {
                        isEdit ?
                        <Button
                            className='bg-accent w-28 text-white font-bold'
                            onClick={onEdit}
                        >
                            EDIT
                        </Button> :
                        <Button
                            className='bg-accent w-28 text-white font-bold'
                            onClick={onAdd}
                        >
                            ADD
                        </Button>
                    }
                </div>
            </div>
        </Modal>
    );
};

export default FaqModal;