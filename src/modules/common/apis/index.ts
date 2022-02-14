import api from '../../../helpers/api';
import dispatch from '../../../helpers/dispatch';
import { createKey, removeKey } from '../../../helpers/apiCancellation';
import {
  setProfile,
} from '../../../modules/common/reducers';
import type {
  ProfileProps
} from '../../../modules/common/types';

export const getProfile = async (
  callback: (res: ProfileProps) => void
) => {
  const cancellationKey = createKey('profile');
  const res = await api.get('profile', {
    cancelToken: cancellationKey.token,
  });
  removeKey('profile');

  if (res as ProfileProps) {
    callback(res)
    dispatch(setProfile(res));
  }
};

export const updateProfile = async (
  payload: object,
  callback: () => void
) => {
  const cancellationKey = createKey('update-profile');
  const res = await api.put('profile', {
    cancelToken: cancellationKey.token,
    payload,
  });
  removeKey('update-profile');

  if (res) {
    callback();
  }
};

