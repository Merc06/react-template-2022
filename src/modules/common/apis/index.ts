import api from '../../../helpers/api';
import dispatch from '../../../helpers/dispatch';
import { createKey, removeKey } from '../../../helpers/apiCancellation';
import {
  setProfile,
} from '../../../modules/common/reducers';
import type {
  ProfileProps
} from '../../../modules/common/types';
import toastMessage from '../../../helpers/toastMessage';

export const getProfile = async () => {
  const cancellationKey = createKey('profile');
  const res = await api.get('profile', {
    cancelToken: cancellationKey.token,
  });
  removeKey('profile');

  if (res as ProfileProps) {
    dispatch(setProfile(res));
  }
};

export const updateProfile = async (
  payload: object,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('update-profile');
  const res = await api.put('profile', {
    cancelToken: cancellationKey.token,
    payload,
  });
  removeKey('update-profile');

  if (res) {
    toastMessage(res);
    callback();
  }
};
