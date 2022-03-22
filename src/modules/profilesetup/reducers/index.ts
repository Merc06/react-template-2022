import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountryProps } from '../../common/types';
import type {
  OccupationProps,
  LanguageProps,
  EducationProps,
  CertificationProps,
  SkillProps,
  SkillListProps,
  LinkedAccountProps
} from '../types';

interface ProfileState {
  occupationList: Array<OccupationProps>;
  languageList: Array<LanguageProps>;
  educationList: Array<EducationProps>;
  certificationList: Array<CertificationProps>;
  skillList: Array<SkillListProps>
  skills: Array<SkillProps>;
  linkedAccountList: Array<LinkedAccountProps>;
  countryList: Array<CountryProps>;
}

const initialState: ProfileState = {
  occupationList: [],
  languageList: [],
  educationList: [],
  certificationList: [],
  skillList: [],
  skills: [],
  linkedAccountList: [],
  countryList: []
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setOccupationList: (state, action: PayloadAction<Array<OccupationProps>>) => {
      state.occupationList = action.payload || [];
    },
    setLanguageList: (state, action: PayloadAction<Array<LanguageProps>>) => {
      state.languageList = action.payload || [];
    },
    setEducationList: (state, action: PayloadAction<Array<EducationProps>>) => {
      state.educationList = action.payload || [];
    },
    setCertificationList: (state, action: PayloadAction<Array<CertificationProps>>) => {
      state.certificationList = action.payload || [];
    },
    setSkillList: (state, action: PayloadAction<Array<SkillListProps>>) => {
      state.skillList = action.payload || [];
    },
    setSkills: (state, action: PayloadAction<Array<SkillProps>>) => {
      state.skills = action.payload || [];
    },
    setLinkedAccountList: (state, action: PayloadAction<Array<LinkedAccountProps>>) => {
      state.linkedAccountList = action.payload || [];
    },
    setCountryList: (state, action: PayloadAction<Array<CountryProps>>) => {
      state.countryList = action.payload || [];
    },
  },
});

export const {
  setOccupationList,
  setLanguageList,
  setEducationList,
  setCertificationList,
  setSkillList,
  setSkills,
  setLinkedAccountList,
  setCountryList
} = profileSlice.actions;

export default profileSlice.reducer;
