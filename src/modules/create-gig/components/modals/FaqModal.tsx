import React, { Dispatch, SetStateAction, SyntheticEvent, useState } from 'react';
import Button from '../../../common/components/Button';
import Input from '../../../common/components/Input';
import Modal from '../../../common/components/Modal';
import TextArea from '../../../common/components/TextArea';
import { addFaq, updateFaq } from '../../apis';
import { INIT_FAQ_STATE } from '../../constants';
import { FaqProps } from '../../types';

interface Props {
    faqToEditState: FaqProps;
    setFaqToEditState: Dispatch<SetStateAction<FaqProps>>;
    faqIdState: number;
    setFaqIdState: Dispatch<SetStateAction<number>>;
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const FaqModal = ({
    faqToEditState,
    setFaqToEditState,
    faqIdState,
    setFaqIdState,
    isModalOpen,
    setIsModalOpen
}: Props) => {
    const [state, setState] = useState<FaqProps>(INIT_FAQ_STATE);

    const clearState = (): void => {
        setFaqToEditState(INIT_FAQ_STATE);
        setState(INIT_FAQ_STATE);
        setFaqIdState(0);
    } 

    const onChange = (e: SyntheticEvent): void => {
        const { name, value } = e.target as HTMLInputElement;
        faqIdState ?
        setFaqToEditState({
            ...faqToEditState,
            [name]: value
        }) :
        setState({
            ...state,
            [name]: value
        })
    }

    const onAdd = (): void => {
        addFaq(state, () => {
            clearState();
            setIsModalOpen(false);
        })
    }

    const onEdit = (): void => {
        updateFaq(faqToEditState, faqIdState, () => {
            clearState();
            setIsModalOpen(false);
        })
    } 

    return (
        <Modal
            onClose={() => setIsModalOpen(false)}
            isOpen={isModalOpen}
            title={`${faqIdState ? 'Edit' : 'Add'} FAQ`}
        >
            <div className='space-y-5 p-2'>
                <div className="space-y-2">
                    <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                        Question<span className="text-red-500">*</span>
                    </h1>
                    <Input
                        placeholder="Enter a question..."
                        value={ faqToEditState.question ? faqToEditState.question : state.question }
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
                        value={ faqToEditState.answer ? faqToEditState.answer : state.answer }
                        name="answer"
                        onChange={onChange}
                    />
                </div>

                <div className="flex justify-end items-center space-x-4 pt-6">
                    <Button
                        className='w-28 text-grayblack font-bold'
                        onClick={() => {
                            clearState();
                            setIsModalOpen(false);
                        }}
                    >
                        CANCEL
                    </Button>
                    {
                        faqIdState ?
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