import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryProps } from '../types';

interface CommonState {
  categoryList: Array<CategoryProps> | [];
  subCategoryList: Array<CategoryProps> | [];
}

const initialState: CommonState = {
  categoryList: [],
  subCategoryList: [],
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
    }
  },
});

export const {
  setCategoryList,
  setSubCategoryList,
} = commonSlice.actions;

export default commonSlice.reducer;
