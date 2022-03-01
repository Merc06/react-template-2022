import api from '../../../helpers/api';
import { createKey, removeKey } from '../../../helpers/apiCancellation';
import dispatch from '../../../helpers/dispatch';
import toastMessage from '../../../helpers/toastMessage';
import { setCategoryList, setFaqList, setSubCategoryList } from '../reducers';
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
  callback: () => void = () => {}
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

export const addDescription = async (
  payload: object,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('faq');
  const res = await api.post('/gig/description', {
    payload,
    cancelToken: cancellationKey.token,
  });
  removeKey('faq');

  if (res) {
    toastMessage(res);
    callback();
  }
};

// FAQ
export const addFaq = async (
  payload: object,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('faq');
  const res = await api.post('/gig/faq', {
    payload,
    cancelToken: cancellationKey.token,
  });
  removeKey('faq');

  if (res) {
    toastMessage(res);
    getFaqList();
    callback();
  }
};

export const getFaqList = async (
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('get-faq-list');
  const res = await api.get('/gig/faq', {
    cancelToken: cancellationKey.token,
  });
  removeKey('get-faq-list');

  if (res) {
    dispatch(setFaqList(res));
    callback();
  }
};

export const updateFaq = async (
  payload: object,
  id: number,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('update-faq');
  const res = await api.put(`gig/${id}/faq`, {
    payload,
    cancelToken: cancellationKey.token,
  });
  removeKey('update-faq');

  if (res) {
    toastMessage(res);
    getFaqList();
    callback();
  }
};

export const deleteFaq = async (
  id: number,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('faq');
  const res = await api.delete(`gig/${id}/faq`, {
    cancelToken: cancellationKey.token,
  });
  removeKey('faq');

  if (res) {
    toastMessage(res);
    getFaqList();
    callback();
  }
};
// END FAQ