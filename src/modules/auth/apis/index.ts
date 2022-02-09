import api from '../../../helpers/api';
import { createKey, removeKey } from '../../../helpers/apiCancellation';
import toastMessage from '../../../helpers/toastMessage';

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
    const cancellationKey = createKey('profile-type');
    const res = await api.put('profile/type', {
      payload,
      cancelToken: cancellationKey.token,
    });
    removeKey('profile-type');
    
    if (res) {
      callback();
    }
  };