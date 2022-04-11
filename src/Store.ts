import { configureStore } from '@reduxjs/toolkit';

import common from './modules/common/reducers';

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    // serializableCheck: {
    //   // ignoredActions: ['common/addCancellationKey'],
    // },
  }),
  reducer: {
    common,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
