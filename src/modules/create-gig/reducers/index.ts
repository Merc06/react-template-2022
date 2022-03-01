import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryProps, FaqListProps } from '../types';

interface CommonState {
  categoryList: Array<CategoryProps> | [];
  subCategoryList: Array<CategoryProps> | [];
  faqList: Array<FaqListProps> | [];
}

const initialState: CommonState = {
  categoryList: [],
  subCategoryList: [],
  faqList: [],
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
    setFaqList: (state, action: PayloadAction<Array<FaqListProps> | []>) => {
      state.faqList = action.payload || [];
    },
  },
});

export const {
  setCategoryList,
  setSubCategoryList,
  setFaqList
} = commonSlice.actions;

export default commonSlice.reducer;
