import _ from 'lodash';
import React, { Dispatch, SetStateAction, SyntheticEvent, useState } from 'react';

import { addCertification, addEducation, addLanguage, addOccupation, addSkills, updateCertification, updateEducation, updateLanguage, updateOccupation } from '../../apis';
import Button from '../../../common/components/Button';
import Input from '../../../common/components/Input';
import Modal from '../../../common/components/Modal';
import Select from '../../../common/components/Select';
// import { INIT_CERTIFICATION_INFO, INIT_EDUCATION_INFO, INIT_LANGUAGE_INFO, INIT_OCCUPATION_INFO, INIT_SKILLS_INFO } from '../../../constants';
import { Proficiency } from '../../constants/proficiency';
import TextArea from '../../../common/components/TextArea';
import { getYear } from '../../constants/year';
import { SkillProps } from '../../types';
import useAppSelector from '../../../../helpers/useAppSelector';
// import { LanguageProps } from '../types';
// import { CertificationInfo, EducationInfo, LanguageInfo, OccupationInfo, SkillsInfo } from '../../types';

interface Props {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    type: "LANGUAGE" | "OCCUPATION" | "SKILLS" | "EDUCATION" | "CERTIFICATION" | "";
    itemToEdit: any;
    setItemToEdit: Dispatch<SetStateAction<any>>;
}

interface CheckedItem {
    skill_name: string;
    skill_id: number;
}

const AddModal = ({
    isModalOpen,
    setIsModalOpen,
    type,
    itemToEdit,
    setItemToEdit
}: Props) => {
    const [state, setState] = useState<any>({});
    const [checkeditemState, setCheckedItemState] = useState<Array<CheckedItem>>([]);
    const skills: Array<SkillProps> = useAppSelector('profile.skills');

    const onChange = (e: SyntheticEvent): void => {
        const { name, value } = e.target as HTMLInputElement;
        _.isEmpty(itemToEdit) ?
        setState({
            ...state,
            [name]: value
        }) :
        setItemToEdit({
            ...itemToEdit,
            [name]: value
        })
    }

    const onToggleCheck = (e: SyntheticEvent): void => {
        const { name, value, checked } = e.target as HTMLInputElement;
        let data;

        if (checked) {
            data = [ ...checkeditemState, { skill_name: name, skill_id: +value } ];
        } else {
            data = checkeditemState.filter((item: CheckedItem) => (
                item.skill_id !== +value
            ))
        }
        setCheckedItemState(data);
    }  

    const onAdd = (): void => {
        switch(type) {
            case "LANGUAGE":
                addLanguage(state, () => {})
                break;

            case "OCCUPATION":
                addOccupation(state, () => {})
                break;

            case "SKILLS":
                const payload = { data: checkeditemState }
                addSkills(payload);
                break;

            case "EDUCATION":
                addEducation(state);
                break;

            case "CERTIFICATION":
                addCertification(state);
                break;

            default:
                return;
        }

        clearState();
    }

    const onEdit = () => {
        switch(type) {
            case "LANGUAGE":
                const languagePayload = {
                    language: itemToEdit.language,
                    level: itemToEdit.level
                }
                updateLanguage(languagePayload, itemToEdit.id, () => {
                    clearState();
                })
                break;

            case "OCCUPATION":
                const occupationPayload = {
                    company: itemToEdit.company,
                    date_from: itemToEdit.date_from,
                    date_to: itemToEdit.date_to,
                    job_description: itemToEdit.job_description,
                    job_title: itemToEdit.job_title,
                }
                updateOccupation(occupationPayload, itemToEdit.id, () => {
                    clearState();
                })
                break;

            case "EDUCATION":
                const educationPayload = {
                    country: itemToEdit.country,
                    degree: itemToEdit.degree,
                    school: itemToEdit.school,
                    year_graduated: itemToEdit.year_graduated,
                }
                updateEducation(educationPayload, itemToEdit.id, () => {
                    clearState();
                })
                break;

            case "CERTIFICATION":
                const certificationPayload = {
                    certificate_name: itemToEdit.certificate_name,
                    certified_from: itemToEdit.certified_from,
                    year: itemToEdit.year
                }
                updateCertification(certificationPayload, itemToEdit.id, () => {
                    clearState();
                })
                break;
        }
    }

    const clearState = () => {
        setState({});
        setItemToEdit({});
        setCheckedItemState([]);
        setIsModalOpen(false);
    }

    return (
        <Modal
            isOpen={isModalOpen}
            title={`${_.isEmpty(itemToEdit) ? 'ADD' : 'EDIT'} ${type}`}
        >
            <div className='space-y-5 p-2'>
                {
                    type === "LANGUAGE" ?
                    <>
                    <div className="space-y-2">
                        <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                            Language<span className="text-red-500">*</span>
                        </h1>
                        <Input
                            placeholder="Select Language"
                            value={_.isEmpty(itemToEdit) ? state.language : itemToEdit.language}
                            name="language"
                            onChange={onChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                            Proficiency Level<span className="text-red-500">*</span>
                        </h1>
                        <Select
                            defaultOptionLabel="Select Proficiency Level"
                            placeholder="Select Proficiency Level"
                            value={_.isEmpty(itemToEdit) ? state.level : itemToEdit.level}
                            name="level"
                            onChange={onChange}
                            options={Proficiency.map((item) => ({
                                value: item.value,
                                label: item.label
                            }))}
                        />
                    </div>
                    </> :
                    
                    type === "OCCUPATION" ?
                    <>
                    <div className="space-y-2">
                        <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                            Job Title<span className="text-red-500">*</span>
                        </h1>
                        <Input
                            placeholder="Enter your Job Title..."
                            value={_.isEmpty(itemToEdit) ? state.job_title : itemToEdit.job_title}
                            name="job_title"
                            onChange={onChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                            Company<span className="text-gray-300">(Optional)</span>
                        </h1>
                        <Input
                            placeholder="Enter your Company..."
                            value={_.isEmpty(itemToEdit) ? state.company : itemToEdit.company}
                            name="company"
                            onChange={onChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                            Job Description<span className="text-gray-300">(Optional)</span>
                        </h1>
                        <TextArea
                            placeholder="Enter your Job Description..."
                            value={_.isEmpty(itemToEdit) ? state.job_description : itemToEdit.job_description}
                            name="job_description"
                            onChange={onChange}
                        />
                    </div>
                    <div className="flex items-stretch justify-evenly space-x-5 w-full">
                        <div className="space-y-2 w-full">
                            <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                                From<span className="text-red-500">*</span>
                            </h1>
                            <Select
                                defaultOptionLabel=" "
                                placeholder=" "
                                value={_.isEmpty(itemToEdit) ? state.date_from : itemToEdit.date_from}
                                name="date_from"
                                onChange={onChange}
                                options={getYear().map((item) => ({
                                    value: item,
                                    label: item
                                }))}
                            />
                        </div>
                        <div className="space-y-2 w-full">
                            <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                                To<span className="text-red-500">*</span>
                            </h1>
                            <Select
                                defaultOptionLabel=" "
                                placeholder=" "
                                value={_.isEmpty(itemToEdit) ? state.date_to : itemToEdit.date_to}
                                name="date_to"
                                onChange={onChange}
                                options={getYear().map((item) => ({
                                    value: item,
                                    label: item
                                }))}
                            />
                        </div>
                    </div>
                    </> :

                    type === "SKILLS" ?
                    <div className='flex flex-col'>
                        {
                            skills.map((item) => (
                                <div className='flex items-center space-x-3' key={item.id}>
                                    <input type="checkbox" id={item.name} name={item.name} value={item.id} onChange={onToggleCheck} />
                                    <label htmlFor={item.name}>{item.name}</label>
                                </div>
                            ))
                        }
                    </div> :

                    type === "EDUCATION" ?
                    <>
                    <div className="space-y-2">
                        <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                            Degree Title<span className="text-red-500">*</span>
                        </h1>
                        <Input
                            placeholder="Enter your Degree Title..."
                            value={_.isEmpty(itemToEdit) ? state.degree : itemToEdit.degree}
                            name="degree"
                            onChange={onChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                            Institution<span className="text-red-500">*</span>
                        </h1>
                        <Input
                            placeholder="Enter Institution..."
                            value={_.isEmpty(itemToEdit) ? state.school : itemToEdit.school}
                            name="school"
                            onChange={onChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                            Country<span className="text-red-500">*</span>
                        </h1>
                        <Input
                            placeholder="Enter Coutry..."
                            value={_.isEmpty(itemToEdit) ? state.country : itemToEdit.country}
                            name="country"
                            onChange={onChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                            Year Graduated<span className="text-red-500">*</span>
                        </h1>
                        <Select
                            defaultOptionLabel=" "
                            placeholder=" "
                            value={_.isEmpty(itemToEdit) ? state.year_graduated : itemToEdit.year_graduated}
                            name="year_graduated"
                            onChange={onChange}
                            options={getYear().map((item) => ({
                                value: item,
                                label: item
                            }))}
                        />
                    </div>
                    </> :

                    type === "CERTIFICATION" ?
                    <>
                    <div className="space-y-2">
                        <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                            Certificate Name<span className="text-red-500">*</span>
                        </h1>
                        <Input
                            placeholder="Enter certificate name..."
                            value={_.isEmpty(itemToEdit) ? state.certificate_name : itemToEdit.certificate_name}
                            name="certificate_name"
                            onChange={onChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                            Certificate From<span className="text-red-500">*</span>
                        </h1>
                        <Input
                            placeholder="Enter certificate body e.g. Adobe, Microsoft"
                            value={_.isEmpty(itemToEdit) ? state.certified_from : itemToEdit.certified_from}
                            name="certified_from"
                            onChange={onChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                            Year<span className="text-red-500">*</span>
                        </h1>
                        <Select
                            defaultOptionLabel=" "
                            placeholder=" "
                            value={_.isEmpty(itemToEdit) ? state.year : itemToEdit.year}
                            name="year"
                            onChange={onChange}
                            options={getYear().map((item) => ({
                                value: item,
                                label: item
                            }))}
                        />
                    </div>
                    </> :
                    <></>
                }

                <div className="flex justify-center items-center space-x-4 pt-6">
                    {
                        _.isEmpty(itemToEdit) ?
                        <Button
                            className='bg-blue-800 w-28 text-white font-bold'
                            onClick={onAdd}
                        >
                            ADD
                        </Button> :
                        <Button
                            className='bg-blue-800 w-28 text-white font-bold'
                            onClick={onEdit}
                        >
                            EDIT
                        </Button>

                    }
                    <Button
                        className='w-28 text-grayblack font-bold'
                        onClick={clearState}
                    >
                        CANCEL
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default AddModal;