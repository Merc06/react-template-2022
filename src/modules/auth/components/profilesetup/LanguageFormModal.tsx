import React, { Dispatch, SetStateAction, SyntheticEvent, useState } from 'react';
import Button from '../../../common/components/Button';
import Input from '../../../common/components/Input';
import Modal from '../../../common/components/Modal';
import Select from '../../../common/components/Select';
import { INIT_LANGUAGE_INFO } from '../../constants';
import { Proficiency } from '../../constants/proficiency';
import { LanguageInfo } from '../../types';

interface Props {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    LanguagesState: Array<LanguageInfo>;
    setLanguagesState: Dispatch<SetStateAction<Array<LanguageInfo>>>;
}

const LanguageFormModal = ({
    isModalOpen,
    setIsModalOpen,
    LanguagesState,
    setLanguagesState
}: Props) => {
    const [language, setLanguage] = useState<LanguageInfo>(INIT_LANGUAGE_INFO);

    const onChange = (e: SyntheticEvent): void => {
        const { name, value } = e.target as HTMLInputElement;
        setLanguage({
        ...language,
        [name]: value
        })
    }

    const onAddLanguage = async () => {
        const newLanguageList = [
            ...LanguagesState,
            language
        ]

        await setLanguagesState(newLanguageList);
        await setLanguage(INIT_LANGUAGE_INFO)
        setIsModalOpen(false);
    }

    return (
        <Modal
            isOpen={isModalOpen}
            title="ADD LANGUAGE"
        >
            <div className='space-y-5 p-2'>
                <div className="space-y-2">
                    <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                        Language<span className="text-red-500">*</span>
                    </h1>
                    <Input
                        placeholder="Select Language"
                        value={language.language}
                        name="language"
                        onChange={onChange}
                    />
                </div>

                <div className="space-y-2">
                    <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                        Proficiency Level<span className="text-red-500">*</span>
                    </h1>
                    <Select
                        disabledDefaultOption
                        defaultOptionLabel="Select Proficiency Level"
                        placeholder="Last Name"
                        value={language.proficiency}
                        name="proficiency"
                        onChange={onChange}
                        options={Proficiency.map((item) => ({
                            value: item.value,
                            label: item.label
                        }))}
                    />
                </div>

                <div className="flex justify-center items-center space-x-4 pt-6">
                    <Button
                        className='bg-blue-800 w-28 text-white font-bold'
                        onClick={onAddLanguage}
                    >
                        ADD
                    </Button>
                    <Button
                        className='w-28 text-grayblack font-bold'
                        onClick={() => setIsModalOpen(false)}
                    >
                        CANCEL
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default LanguageFormModal;