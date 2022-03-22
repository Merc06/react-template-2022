import api from '../../../helpers/api';
import { createKey, removeKey } from '../../../helpers/apiCancellation';
import dispatch from '../../../helpers/dispatch';
import toastMessage from '../../../helpers/toastMessage';
import { setCategoryList, setFaqDescriptionList, setOverviewInfo, setScopeList, setSubCategoryList } from '../reducers';
import { OverviewProps, PackageProps } from '../types';


export const getCategoryList = async (
  callback: () => void = () => {}
) => {
    const cancellationKey = createKey('category');
    const res = await api.get('category', {
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
    const res = await api.get('sub-category', {
      cancelToken: cancellationKey.token,
    });
    removeKey('sub-category');
    
    if (res) {
      dispatch(setSubCategoryList(res));
      callback();
    }
};

// OVERVIEW
export const addOverview = async (
  payload: object,
  callback: (id: number) => void = () => {}
) => {
    const cancellationKey = createKey('overview');
    const res = await api.post('gig', {
      payload,
      cancelToken: cancellationKey.token
    });
    removeKey('overview');
    
    if (res) {
      toastMessage(res);
      callback(res.data.id);
    }
};

export const updateOverview = async (
  payload: object,
  gigId: number,
  callback: () => void = () => {}
) => {
    const cancellationKey = createKey('update-overview');
    const res = await api.put(`gig/${gigId}`, {
      payload,
      cancelToken: cancellationKey.token
    });
    removeKey('update-overview');
    
    if (res) {
      callback();
    }
};

export const getOverviewInfo = async (
  gigId: number,
  callback: (res: OverviewProps) => void = () => {}
) => {
    const cancellationKey = createKey('get-overview-info');
    const res = await api.get(`gig/${gigId}`, {
      cancelToken: cancellationKey.token
    });
    removeKey('get-overview-info');
    
    if (res) {
      dispatch(setOverviewInfo(res));
      callback(res);
    }
};
// END OF OVERVIEW

// SCOPE
export const addScope = async (
  payload: object,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('scope');
  const res = await api.post(`gig/pricing`, {
    payload,
    cancelToken: cancellationKey.token,
  });
  removeKey('scope');

  if (res) {
    toastMessage(res);
    callback();
  }
};

export const getScopeList = async (
  gigId: number,
  callback: (res: Array<PackageProps>) => void = () => {}
) => {
  const cancellationKey = createKey('get-scope-list');
  const res = await api.get(`gig/${gigId}/pricing`, {
    cancelToken: cancellationKey.token,
  });
  removeKey('get-scope-list');

  if (res) {
    dispatch(setScopeList(res));
    callback(res);
  }
};

export const updateScope = async (
  payload: object,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('update-scope');
  const res = await api.put(`/gig/scope/pricing`, {
    payload,
    cancelToken: cancellationKey.token,
  });
  removeKey('update-scope');

  if (res) {
    callback();
  }
};
// END OF SCOPE

// GET FAQ AND DESCRIPTION
export const getFaqDescriptionList = async (
  gigId: number,
  callback: (res: any) => void = () => {}
) => {
  const cancellationKey = createKey('get-faq-description-info');
  const res = await api.get(`/gig/${gigId}/description`, {
    cancelToken: cancellationKey.token,
  });
  removeKey('get-faq-description-info');

  if (res) {
    // console.log(res);
    dispatch(setFaqDescriptionList(res));
    callback(res);
  }
};
// END OF GET FAQ AND DESCRIPTION

// DESCRIPTION
export const addDescription = async (
  payload: object,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('description');
  const res = await api.post('/gig/description', {
    payload,
    cancelToken: cancellationKey.token,
  });
  removeKey('description');

  if (res) {
    toastMessage(res);
    callback();
  }
};
// END OF DESCRIPTION

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
    // getFaqList();
    callback();
  }
};

export const updateFaq = async (
  payload: object,
  faqId: number,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('update-faq');
  const res = await api.put(`gig/${faqId}/faq`, {
    payload,
    cancelToken: cancellationKey.token,
  });
  removeKey('update-faq');

  if (res) {
    toastMessage(res);
    callback();
  }
};

export const deleteFaq = async (
  faqId: number,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('faq');
  const res = await api.delete(`gig/${faqId}/faq`, {
    cancelToken: cancellationKey.token,
  });
  removeKey('faq');

  if (res) {
    toastMessage(res);
    callback();
  }
};
// END FAQ

// GALLERY
export const addGallery = async (
  payload: object,
  callback: (res: any) => void = () => {}
) => {
  const cancellationKey = createKey('gallery');
  const res = await api.post('/gig/gallery', {
    payload,
    cancelToken: cancellationKey.token,
  });
  removeKey('gallery');

  if (res) {
    // toastMessage(res);
    // getFaqList();
    callback(res);
  }
};
// END OF GALLERY

// GET ONE GIG
export const getOneGig = async (
  gigId: number,
  callback: (res: any) => void = () => {}
) => {
  const cancellationKey = createKey('get-one-gig');
  const res = await api.get(`/gig/${gigId}`, {
    cancelToken: cancellationKey.token,
  });
  removeKey('get-one-gig');

  if (res) {
    // console.log(res)
    callback(res);
  }
};