import { configureStore } from '@reduxjs/toolkit';

import common from './modules/common/reducers';
import createGig from './modules/create-gig/reducers';
import profile from './modules/profilesetup/reducers';
// import dashboard from 'modules/dashboard/reducers';
// import docPaperless from 'modules/doc-paperless/reducers';
// import docCopyright from 'modules/doc-copyrights/reducers';

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    // serializableCheck: {
    //   // ignoredActions: ['common/addCancellationKey'],
    // },
  }),
  reducer: {
    common,
    profile,
    createGig
    // dashboard,
    // docPaperless,
    // docCopyright,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
