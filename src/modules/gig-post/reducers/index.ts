import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ProfileState {
  gigList: Array<any>;
}

const initialState: ProfileState = {
    gigList: [],
};

export const gigsSlice = createSlice({
  name: 'gigs',
  initialState,
  reducers: {
    setGigList: (state, action: PayloadAction<Array<any>>) => {
      state.gigList = action.payload || [];
    },
  },
});

export const {
    setGigList
} = gigsSlice.actions;

export default gigsSlice.reducer;
