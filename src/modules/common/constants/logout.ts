import React from 'react';
import dispatch from '../../../helpers/dispatch';
import { resetAuth, setProfile } from '../reducers';

export const logout = (): void => {
    localStorage.clear();
    dispatch(resetAuth(false));
    dispatch(setProfile({}));
};
