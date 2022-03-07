import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryProps, FaqDescriptionListProps, OverviewInfoProps, PackageProps } from '../types';

interface CommonState {
  categoryList: Array<CategoryProps> | [];
  subCategoryList: Array<CategoryProps> | [];
  faqDescriptionList: Array<FaqDescriptionListProps> | [];
  overviewInfo: OverviewInfoProps | {};
  scopeList: Array<PackageProps> | [];
}

const initialState: CommonState = {
  categoryList: [],
  subCategoryList: [],
  faqDescriptionList: [],
  overviewInfo: {},
  scopeList: []
};

export const commonSlice = createSlice({
  name: 'createGig',
  initialState,
  reducers: {
    setCategoryList: (state, action: PayloadAction<Array<CategoryProps> | []>) => {
      state.categoryList = action.payload || [];
    },
    setSubCategoryList: (state, action: PayloadAction<Array<CategoryProps> | []>) => {
      state.subCategoryList = action.payload || [];
    },
    setFaqDescriptionList: (state, action: PayloadAction<Array<FaqDescriptionListProps> | []>) => {
      state.faqDescriptionList = action.payload || [];
    },
    setOverviewInfo: (state, action: PayloadAction<OverviewInfoProps | {}>) => {
      state.overviewInfo = action.payload || {};
    },
    setScopeList: (state, action: PayloadAction<Array<PackageProps> | []>) => {
      state.scopeList = action.payload || [];
    },
  },
});

export const {
  setCategoryList,
  setSubCategoryList,
  setFaqDescriptionList,
  setOverviewInfo,
  setScopeList
} = commonSlice.actions;

export default commonSlice.reducer;
