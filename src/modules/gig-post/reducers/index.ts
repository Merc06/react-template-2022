import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllGigListProps } from '../types';


interface ProfileState {
  gigList: Array<AllGigListProps>;
}

const initialState: ProfileState = {
    gigList: [],
};

export const gigsSlice = createSlice({
  name: 'gigs',
  initialState,
  reducers: {
    setGigList: (state, action: PayloadAction<Array<AllGigListProps>>) => {
      state.gigList = action.payload || [];
    },
  },
});

export const {
    setGigList
} = gigsSlice.actions;

export default gigsSlice.reducer;
