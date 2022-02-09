import { configureStore } from '@reduxjs/toolkit';

import common from './modules/common/reducers';
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
    // dashboard,
    // docPaperless,
    // docCopyright,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
