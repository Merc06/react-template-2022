import api from '../../../helpers/api';
import { createKey, removeKey } from '../../../helpers/apiCancellation';
import dispatch from '../../../helpers/dispatch';
import toastMessage from '../../../helpers/toastMessage';
import { resetAuth } from '../../common/reducers';

export const signupEmail = async (
    payload: object,
    callback: () => void
) => {
    const cancellationKey = createKey('sign-up');
    const res = await api.post('signup', {
      payload,
      cancelToken: cancellationKey.token,
    });
  
    removeKey('sign-up');
    if (res) {
      toastMessage(res);
      callback();
    }
};

export const signupVerify = async (
    payload: object,
    callback: () => void
) => {
    const cancellationKey = createKey('sign-up-verify');
    const res = await api.post('signup/verify', {
      payload,
      cancelToken: cancellationKey.token,
    });
  
    removeKey('sign-up-verify');
    if (res) {
      toastMessage(res);
      localStorage.setItem('token', res?.data?.token?.token);
      callback();
    }
};

export const signupUserType = async (
    payload: object,
    callback: () => void
) => {
    const cancellationKey = createKey('user-type');
    const res = await api.put('profile/type', {
      payload,
      cancelToken: cancellationKey.token,
    });
    removeKey('user-type');
    
    if (res) {
      dispatch(resetAuth(true));
      callback();
    }
};

export const signupUprofileRole = async (
    payload: object,
    callback: () => void
) => {
    const cancellationKey = createKey('profile-role');
    const res = await api.put('profile/role', {
      payload,
      cancelToken: cancellationKey.token,
    });
    removeKey('profile-role');
    
    if (res) {
      dispatch(resetAuth(true));
      callback();
    }
};

export const loginEmail = async (
  payload: object,
  callback: () => void
) => {
  const cancellationKey = createKey('login-email');
  const res = await api.post('auth', {
    payload,
    cancelToken: cancellationKey.token,
  });
  removeKey('login-email');

  if (res) {
    dispatch(resetAuth(true));
    localStorage.setItem('token', res?.data?.token);
    callback();
  }
};