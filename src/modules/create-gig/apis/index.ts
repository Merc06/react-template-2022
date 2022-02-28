import api from '../../../helpers/api';
import { createKey, removeKey } from '../../../helpers/apiCancellation';
import dispatch from '../../../helpers/dispatch';
import toastMessage from '../../../helpers/toastMessage';
import { setCategoryList, setSubCategoryList } from '../reducers';
import { OverviewProps } from '../types';


export const getCategoryList = async (
  callback: () => void = () => {}
) => {
    const cancellationKey = createKey('category');
    const res = await api.get('gig/category', {
      cancelToken: cancellationKey.token,
    });
    removeKey('category');
    
    if (res) {
      dispatch(setCategoryList(res));
      callback();
    }
};

export const getSubCategoryList = async (
  callback: () => void = () => {}
) => {
    const cancellationKey = createKey('sub-category');
    const res = await api.get('gig/sub-category', {
      cancelToken: cancellationKey.token,
    });
    removeKey('sub-category');
    
    if (res) {
      dispatch(setSubCategoryList(res));
      callback();
    }
};

export const saveOverview = async (
  payload: OverviewProps,
  callback: () => void
) => {
    const cancellationKey = createKey('save-overview');
    const res = await api.post('gig', {
      payload,
      cancelToken: cancellationKey.token
    });
    removeKey('save-overview');
    
    if (res) {
      toastMessage(res);
      callback();
    }
};
