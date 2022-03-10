import React, { Dispatch, SetStateAction, SyntheticEvent, useEffect, useState } from 'react';
import { FileInfo } from '@uploadcare/react-widget';
import _ from 'lodash';

import {IconSquareEdit} from '../../common/components/Icons'

import noImage from '../../../images/no-image.jpeg';
import { PersonalInfoState } from '../../auth/types';
import Input from '../../common/components/Input';
import Uploader from '../../common/components/Uploader';
import TextArea from '../../common/components/TextArea';
import LanguageFormModal from './modals/Modal';
import useAppSelector from '../../../helpers/useAppSelector';
import { deleteLanguage, getLanguageList } from '../apis';
import { LanguageProps } from '../types';

interface Props {
  personalInfoState: PersonalInfoState,
  setPersonalInfoState: Dispatch<SetStateAction<PersonalInfoState>>
}

const PersonalInfo = ({
  personalInfoState,
  setPersonalInfoState
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [itemToEdit, setItemToEdit] = useState<any>({});
  const languageList: Array<LanguageProps> = useAppSelector('profile.languageList');

  useEffect(() => {
    getLanguageList();
  }, []);

  const onChange = (e: SyntheticEvent): void => {
    const { name, value } = e.target as HTMLInputElement;
    setPersonalInfoState({
      ...personalInfoState,
      [name]: value
    })
  }

  const onUploadLogo = (fileInfo: FileInfo) => {
    setPersonalInfoState({
      ...personalInfoState,
      photo: fileInfo.cdnUrl || '',
    });
    // setLoadingUploadcare(false)
  };

  const onEditLanguage = (item: LanguageProps) => {
    setItemToEdit({
      ...itemToEdit,
      ...item
    })

    setIsModalOpen(true);
  }

  const onDeleteLanguage = (id: string) => {
    deleteLanguage(id, () => {})
  }

  return (
    <>
    <div className="flex flex-col space-y-3">
      <h1 className="text-sm text-gray-400">(Step 1 out of 4)</h1>
      <p className="text-xs text-gray-700 font-light tracking-wide leading-5">
        Tell us a bit about yourself. This information will appear on your public 
        profile, so that potential buyers can get to know you better.
      </p>
      <h1 className="text-xs text-gray-400 italic font-light">
        <span className="text-red-500">*</span>Mandatory
      </h1>

      <h1 className="text-xs text-gray-700 font-medium tracking-wide pt-4">
        Full Name<span className="text-red-500">*</span>
      </h1>
      <div className="flex space-x-2 items-center w-full">
        <Input
          placeholder="First Name"
          name='first_name'
          value={personalInfoState.first_name}
          onChange={onChange}
        />
        <Input
          placeholder="Last Name"
          name='last_name'
          value={personalInfoState.last_name}
          onChange={onChange}
        />
      </div>

      <h1 className="text-xs text-gray-700 font-medium tracking-wide pt-4">
        Profile Picture<span className="text-red-500">*</span>
      </h1>
      <div className="flex space-x-4 items-center">
        {
          personalInfoState.photo ?
          <img src={personalInfoState.photo} alt="Profile" className="h-20 w-20 border" /> :
          <img src={noImage} alt="Display" className="h-20 w-20 border" />
        }

        <Uploader
          onSuccess={onUploadLogo}
          imagesOnly
          imgClassname="m-auto"
          className="flex items-center space-x-1 cursor-pointer"
          tabs={['file']}
        >
            <IconSquareEdit className="text-blue-700 text-xs" />
            <h1 className="text-blue-700 font-medium text-xs">Change</h1>
        </Uploader>
      </div>

      <h1 className="text-xs text-gray-700 font-medium tracking-wide pt-4">
        Description<span className="text-red-500">*</span>
      </h1>
      <TextArea
        value={personalInfoState.description}
        placeholder="I am..."
        name="description"
        onChange={onChange}
      />

      <div className="flex justify-between items-center">
        <h1 className="text-xs text-gray-700 font-medium tracking-wide pt-4">
          Language<span className="text-red-500">*</span>
        </h1>
        <button
          className="flex items-center space-x-1"
          onClick={() => setIsModalOpen(true)}
        >
          <h1 className="text-xs text-blue-700 font-medium tracking-wide pt-4 uppercase">
            + Add New
          </h1>
        </button>
      </div>
      <table className="text-xs table-auto border-0">
        <thead>
          <tr className="bg-gray-200">
            <th className="border-0 p-1">Language</th>
            <th className="border-0 p-1">Level</th>
            <th className="border-0 p-1">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
        {
          !_.isEmpty(languageList) ?
          languageList.map((item) => (
              <tr className="text-center" key={item.id}>
                <td colSpan={1} className="p-1 border-r-0 border-gray-200">{item.language}</td>
                <td colSpan={1} className="p-1 border-r-0 border-l-0 border-gray-200">{item.level}</td>
                <td colSpan={1} className="p-1 flex justify-center border-gray-200 space-x-1 items-center border-l-0">
                  <button
                    className="text-xs text-blue-700 font-semibold uppercase"
                    onClick={() => onEditLanguage(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-xs text-blue-700 font-semibold uppercase"
                    onClick={() => onDeleteLanguage(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
          )) :
          <tr className="text-center border-none">
            <td colSpan={3}><p className='text-xs text-gray-300'>Empty Data...</p></td>
          </tr>
        }
        </tbody>
      </table>
    </div>
    <LanguageFormModal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      itemToEdit={itemToEdit}
      setItemToEdit={setItemToEdit}
      type="LANGUAGE"
    />
    </>
  );
};

export default PersonalInfo;
