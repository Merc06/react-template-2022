import toast from 'react-hot-toast';
import _ from 'lodash';

const toastMessage = (res: object): void => {
  const message: string = _.get(res, 'message', '');
  toast.success(message);
};

export default toastMessage;
