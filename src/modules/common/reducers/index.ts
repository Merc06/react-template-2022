import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {
  CancellationKeys,
} from '../../../modules/common/types';

interface CommonState {
  isLogin: boolean;
  loadingKeys: Array<string>;
  cancellationKeys: Array<CancellationKeys>;
}

const initialState: CommonState = {
  isLogin: false,
  loadingKeys: [],
  cancellationKeys: [],
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    resetAuth: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    addCancellationKey: (state, action: PayloadAction<CancellationKeys>) => {
      state.cancellationKeys = [...state.cancellationKeys, action.payload];
    },
    removeCancellationKey: (state, action: PayloadAction<string>) => {
      state.cancellationKeys = state.cancellationKeys.filter(
        (item) => item.key !== action.payload
      );
    },
    // setProfile: (state, action: PayloadAction<ProfileProps | {}>) => {
    //   state.profile = action.payload || {};
    // },
    addLoadingKey: (state, action: PayloadAction<string>) => {
      state.loadingKeys = [
        ...state.loadingKeys,
        action.payload,
      ];
    },
    removeLoadingKey: (state, action: PayloadAction<string>) => {
      state.loadingKeys = state.loadingKeys.filter(item => item !== action.payload);
    }
  },
});

export const {
  resetAuth,
  addCancellationKey,
  removeCancellationKey,
  addLoadingKey,
  removeLoadingKey,
} = commonSlice.actions;

export default commonSlice.reducer;
