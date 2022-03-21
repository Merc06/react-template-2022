import api from '../../../helpers/api';
// import { toast } from 'react-toastify';
// import _ from 'lodash';

import dispatch from '../../../helpers/dispatch';
import {
  createKey,
  removeKey
} from '../../../helpers/apiCancellation';
import toastMessage from '../../../helpers/toastMessage';
import {
  setOccupationList,
  setLanguageList,
  setEducationList,
  setCertificationList,
  setSkillList,
  setSkills,
  setLinkedAccountList
} from '../reducers';


// LANGUAGE
export const getLanguageList = async () => {
  const cancellationKey = createKey('get-language-list');
  const res = await api.get('language', {
    cancelToken: cancellationKey.token
  });
  removeKey('get-language-list');

  if (res) {
    dispatch(setLanguageList(res));
  }
};

export const addLanguage = async (
  payload: object,
  callback: () => void
) => {
  const cancellationKey = createKey('add-language');
  const res = await api.post('language', {
    cancelToken: cancellationKey.token,
    payload,
  });
  removeKey('add-language');

  if (res) {
    getLanguageList();
    toastMessage(res)
    callback();
  }
};

export const updateLanguage = async (
  payload: object,
  id: string,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('account-set');
  const res = await api.put(`language/${id}`, {
    payload,
    cancelToken: cancellationKey.token,
  });
  removeKey('account-set');

  if (res) {
    getLanguageList();
    toastMessage(res);
    callback();
  }
};

export const deleteLanguage = async (
  id: string,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('account-set');
  const res = await api.delete(`language/${id}`, {
    cancelToken: cancellationKey.token,
  });
  removeKey('account-set');

  if (res) {
    getLanguageList();
    toastMessage(res);
    callback();
  }
};
// END LANGUAGE


// OCCUPATION
export const addOccupation = async (
  payload: object,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('add-occupation');
  const res = await api.post('occupation', {
    payload,
    cancelToken: cancellationKey.token,
  });
  removeKey('add-occupation');

  if (res) {
    getOccupationList();
    toastMessage(res);
    callback();
  }
};

export const getOccupationList = async (callback: () => void = () => {}) => {
  const cancellationKey = createKey('get-occupation-list');
  const res = await api.get('occupation', {
    cancelToken: cancellationKey.token,
  });
  removeKey('get-occupation-list');

  if (res) {
    dispatch(setOccupationList(res));
    callback();
  }
};

export const updateOccupation = async (
  payload: object,
  id: string,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('update-occupation');
  const res = await api.put(`occupation/${id}`, {
    payload,
    cancelToken: cancellationKey.token,
  });
  removeKey('update-occupation');

  if (res) {
    getOccupationList();
    toastMessage(res);
    callback();
  }
};

export const deleteOccupation = async (
  id: string,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('delete-occupation');
  const res = await api.delete(`occupation/${id}`, {
    cancelToken: cancellationKey.token,
  });
  removeKey('delete-occupation');

  if (res) {
    getOccupationList();
    toastMessage(res);
    callback();
  }
};
// END OF OCCUPATION


// SKILL
export const addSkills = async (
  payload: object,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('skill');
  const res = await api.post('/skill', {
    payload,
    cancelToken: cancellationKey.token,
  });
  removeKey('skill');

  if (res) {
    getSkillList();
    toastMessage(res);
    callback();
  }
};

export const getSkillList = async (
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('get-skill-list');
  const res = await api.get('/skill', {
    cancelToken: cancellationKey.token,
  });
  removeKey('get-skill-list');

  if (res) {
    dispatch(setSkillList(res));
    callback();
  }
};

export const getSkills = async (
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('get-skill-name');
  const res = await api.get('/skill/name', {
    cancelToken: cancellationKey.token,
  });
  removeKey('get-skill-name');

  if (res) {
    dispatch(setSkills(res));
    callback();
  }
};

export const deleteSkill = async (
  id: string,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('account-set');
  const res = await api.delete(`skill/${id}`, {
    cancelToken: cancellationKey.token,
  });
  removeKey('account-set');

  if (res) {
    getSkillList();
    toastMessage(res);
    callback();
  }
};
// END SKILL


// EDUCATION
export const addEducation = async (
  payload: object,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('add-education');
  const res = await api.post('education', {
    payload,
    cancelToken: cancellationKey.token,
  });
  removeKey('add-education');

  if (res) {
    getEducationList();
    toastMessage(res);
    callback();
  }
};

export const getEducationList = async (callback: () => void = () => {}) => {
  const cancellationKey = createKey('get-education-list');
  const res = await api.get('education', {
    cancelToken: cancellationKey.token,
  });
  removeKey('get-education-list');

  if (res) {
    dispatch(setEducationList(res));
    callback();
  }
};

export const updateEducation = async (
  payload: object,
  id: string,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('update-education');
  const res = await api.put(`education/${id}`, {
    payload,
    cancelToken: cancellationKey.token,
  });
  removeKey('update-education');

  if (res) {
    getEducationList();
    toastMessage(res);
    callback();
  }
};

export const deleteEducation = async (
  id: string,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('delete-education');
  const res = await api.delete(`education/${id}`, {
    cancelToken: cancellationKey.token,
  });
  removeKey('delete-education');

  if (res) {
    getEducationList();
    toastMessage(res);
    callback();
  }
};
// END EDUCATION


// CERTIFICATION
export const addCertification = async (
  payload: object,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('add-certification');
  const res = await api.post('certification', {
    payload,
    cancelToken: cancellationKey.token,
  });
  removeKey('add-certification');

  if (res) {
    getCertificationList();
    toastMessage(res);
    callback();
  }
};

export const getCertificationList = async (callback: () => void = () => {}) => {
  const cancellationKey = createKey('get-certification-list');
  const res = await api.get('certification', {
    cancelToken: cancellationKey.token,
  });
  removeKey('get-certification-list');

  if (res) {
    dispatch(setCertificationList(res));
    callback();
  }
};

export const updateCertification = async (
  payload: object,
  id: string,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('update-certification');
  const res = await api.put(`certification/${id}`, {
    payload,
    cancelToken: cancellationKey.token,
  });
  removeKey('update-certification');

  if (res) {
    getCertificationList();
    toastMessage(res);
    callback();
  }
};

export const deleteCertification = async (
  id: string,
  callback: () => void = () => {}
) => {
  const cancellationKey = createKey('delete-certification');
  const res = await api.delete(`certification/${id}`, {
    cancelToken: cancellationKey.token,
  });
  removeKey('delete-certification');

  if (res) {
    getCertificationList();
    toastMessage(res);
    callback();
  }
};
// END CERTIFICATION

// LINKED ACCOUNTS
export const getLinkedAccountsList = async (
  callback: (res: any) => void = () => {}
) => {
  const cancellationKey = createKey('get-linked-account-list');
  const res = await api.get('linked', {
    cancelToken: cancellationKey.token,
  });
  removeKey('get-linked-account-list');

  if (res) {
    dispatch(setLinkedAccountList(res));
    callback(res);
  }
};

export const linkAccount = async (
  payload: object,
  callback: (res: any) => void = () => {}
) => {
  const cancellationKey = createKey('link-account');
  const res = await api.post('linked', {
    payload,
    cancelToken: cancellationKey.token,
  });
  removeKey('link-account');

  if (res) {
    getLinkedAccountsList();
    toastMessage(res);
    callback(res);
  }
};

export const AddNumber = async (
  payload: object,
  callback: () => void
) => {
  const cancellationKey = createKey('add-contact');
  const res = await api.put('security', {
    payload,
    cancelToken: cancellationKey.token,
  });
  removeKey('add-contact');

  if (res) {
    toastMessage(res);
    callback();
  }
};