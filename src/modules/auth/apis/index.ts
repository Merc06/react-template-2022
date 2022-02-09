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