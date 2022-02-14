import _ from 'lodash';
import React, { Fragment, useEffect, useState } from 'react';
import useAppSelector from '../../../helpers/useAppSelector';
import Button from '../../common/components/Button';
import { PlusIcon } from '../../common/components/Icons';
import { deleteCertification, deleteEducation, deleteOccupation, deleteSkill, getCertificationList, getEducationList, getOccupationList, getSkillList, getSkills } from '../apis';
import { CertificationProps, EducationProps, OccupationProps, SkillListProps } from '../types';
// import Input from '../../../common/components/Input';
import Modal from './Modal';

const ProfInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [itemToEdit, setItemToEdit] = useState<any>({});
  const [modalType, setModalType] = useState<"LANGUAGE" | "OCCUPATION" | "SKILLS" | "EDUCATION" | "CERTIFICATION" | "">("");
  
  const occupationList: Array<OccupationProps> = useAppSelector('profile.occupationList');
  const skillList: Array<SkillListProps> = useAppSelector('profile.skillList');
  const educationList: Array<EducationProps> = useAppSelector('profile.educationList');
  const certificationList: Array<CertificationProps> = useAppSelector('profile.certificationList');

  useEffect(() => {
    getOccupationList();
    getEducationList();
    getCertificationList();
    getSkillList();
    getSkills();
  }, [])

  interface fieldListProps {
    title: string;
    type: "LANGUAGE" | "OCCUPATION" | "SKILLS" | "EDUCATION" | "CERTIFICATION" | "";
  }

  const fieldList: Array<fieldListProps> = [
    {
      title: "Your Occupation",
      type: "OCCUPATION"
    },
    {
      title: "Skills",
      type: "SKILLS"
    },
    {
      title: "Education",
      type: "EDUCATION"
    },
    {
      title: "Certifications",
      type: "CERTIFICATION"
    }
  ];

  const onOpenModal = async (modalType: "LANGUAGE" | "OCCUPATION" | "SKILLS" | "EDUCATION" | "CERTIFICATION" | "") => {
    await setModalType(modalType)
    await setIsModalOpen(true);
  }

  const onEdit = (item: any, modalType: "LANGUAGE" | "OCCUPATION" | "SKILLS" | "EDUCATION" | "CERTIFICATION" | "") => {
    setItemToEdit({
      ...itemToEdit,
      ...item
    })

    onOpenModal(modalType);
  }

  const onDelete = (id: string, modalType: "LANGUAGE" | "OCCUPATION" | "SKILLS" | "EDUCATION" | "CERTIFICATION" | "") => {
    modalType === "OCCUPATION" ?
    deleteOccupation(id) :
    modalType === "SKILLS" ?
    deleteSkill(id) :
    modalType === "EDUCATION" ?
    deleteEducation(id) :
    modalType === "CERTIFICATION" ?
    deleteCertification(id) :
    console.log("DELETING")
  }

  return (
    <>
    <div className="flex flex-col space-y-3">
      <h1 className="text-sm text-gray-400">(Step 2 out of 4)</h1>
      <p className="text-xs text-gray-700 font-light tracking-wide leading-5">
        This is your time to shine. Let potential buyers know what you do best and how you gained your skills, 
        certifications and experience.
      </p>
      <h1 className="text-xs text-gray-400 italic font-light">
        <span className="text-red-500">*</span>Mandatory
      </h1>

      {
        fieldList.map((item, key) => (
          <div className="flex flex-col space-y-4" key={key}>
            <div className="flex justify-between items-center pt-4">
              <h1 className="text-xs text-gray-700 font-medium tracking-wide">
                {item.title}
              </h1>
              <button className="flex items-center space-x-1">
                <PlusIcon className="text-blue-700"/>
                <h1 className="text-xs text-blue-700 font-medium tracking-wide uppercase" onClick={() => onOpenModal(item.type)}>
                  Add New
                </h1>
              </button>
            </div>

            <div className="flex flex-col border-b-2 pb-4">
              {
                item.type === "OCCUPATION" ?
                !_.isEmpty(occupationList) &&
                occupationList.map((occupation) => (
                  <Fragment key={occupation.id}>
                    <h4 className='font-bold'>{occupation.job_title}</h4>
                    <p className='text-xs'>{occupation.company}</p>
                    <small className='text-xxs text-gray-400'>{occupation.job_description}</small>
                    <small className='text-xxs text-gray-400'>{`${occupation.date_from} - ${occupation.date_to}`}</small>
                    <div className="flex items-center space-x-3">
                      <Button
                        className="text-xs text-blue-700 font-bold tracking-wide uppercase py-2"
                        onClick={() => onEdit(occupation, item.type)}
                      >
                        EDIT
                      </Button>
                      <Button
                        className="text-xs text-blue-700 font-bold tracking-wide uppercase py-2"
                        onClick={() => onDelete(occupation.id, item.type)}
                      >
                        DELETE
                      </Button>
                    </div>
                  </Fragment>
                )) :

                item.type === "SKILLS" ?
                !_.isEmpty(skillList) &&
                skillList.map((skill) => (
                  <Fragment key={skill.id}>
                    <div className="flex items-center justify-between space-x-3 w-full">
                      <p
                        className="text-xs font-bold"
                        onClick={() => onEdit(skill, item.type)}
                      >
                        {skill.skill_name}
                      </p>
                      <Button
                        className="text-xs text-blue-700 font-bold tracking-wide uppercase py-2"
                        onClick={() => onDelete(skill.id, item.type)}
                      >
                        DELETE
                      </Button>
                    </div>
                  </Fragment>
                )) :

                item.type === "EDUCATION" ?
                !_.isEmpty(educationList) &&
                educationList.map((education) => (
                  <Fragment key={education.id}>
                    <h4 className='font-bold'>{education.degree}</h4>
                    <p className='text-xs'>{education.school}</p>
                    <small className='text-xxs text-gray-400'>{education.country}</small>
                    <small className='text-xxs text-gray-400'>{`Graduated in ${education.year_graduated}`}</small>
                    <div className="flex items-center space-x-3">
                      <Button
                        className="text-xs text-blue-700 font-bold tracking-wide uppercase py-2"
                        onClick={() => onEdit(education, item.type)}
                      >
                        EDIT
                      </Button>
                      <Button
                        className="text-xs text-blue-700 font-bold tracking-wide uppercase py-2"
                        onClick={() => onDelete(education.id, item.type)}
                      >
                        DELETE
                      </Button>
                    </div>
                  </Fragment>
                )) :

                item.type === "CERTIFICATION" ?
                !_.isEmpty(certificationList) &&
                certificationList.map((certification) => (
                  <Fragment key={certification.id}>
                    <h4 className='font-bold'>{certification.certificate_name}</h4>
                    <p className='text-xs'>{certification.certified_from}</p>
                    <small className='text-xxs text-gray-400'>{certification.year}</small>
                    <div className="flex items-center space-x-3">
                      <Button
                        className="text-xs text-blue-700 font-bold tracking-wide uppercase py-2"
                        onClick={() => onEdit(certification, item.type)}
                      >
                        EDIT
                      </Button>
                      <Button
                        className="text-xs text-blue-700 font-bold tracking-wide uppercase py-2"
                        onClick={() => onDelete(certification.id, item.type)}
                      >
                        DELETE
                      </Button>
                    </div>
                  </Fragment>
                )) :
                <></>
              }
            </div>
          </div>
        ))
      }

      <div className="flex flex-col space-y-3 pt-5">
        <h1 className="text-xs font-semibold text-gray-700">
          Personal Website <span className="text-gray-300">(Optional)</span>
        </h1>
        <input 
          type="text"
          name="text"
          placeholder="Provide a link to your professional website"
          className="w-full border rounded-md p-2 text-xs"
        />
      </div>
    </div>
    <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        itemToEdit={itemToEdit}
        setItemToEdit={setItemToEdit}
        type={modalType}
      />
    </>
  );
};

export default ProfInfo;
