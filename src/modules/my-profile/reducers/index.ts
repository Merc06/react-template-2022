import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllGigListProps } from '../../gig-post/types';


interface MyGigListState {
  myGigList: Array<AllGigListProps>;
}

const initialState: MyGigListState = {
    myGigList: [],
};

export const myGigsSlice = createSlice({
  name: 'myGigs',
  initialState,
  reducers: {
    setMyGigList: (state, action: PayloadAction<Array<AllGigListProps>>) => {
      state.myGigList = action.payload || [];
    },
  },
});

export const {
    setMyGigList
} = myGigsSlice.actions;

export default myGigsSlice.reducer;
