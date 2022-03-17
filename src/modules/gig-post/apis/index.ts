import api from "../../../helpers/api";
import { createKey, removeKey } from "../../../helpers/apiCancellation";
import dispatch from "../../../helpers/dispatch";
import { setGigList } from "../reducers";


export const getGigList = async (
    callback: (res: any) => void
  ) => {
    const cancellationKey = createKey('all-gig-list');
    const res = await api.get('gig-all-listing', {
      cancelToken: cancellationKey.token,
    });
    removeKey('all-gig-list');
  
    if (res) {
        dispatch(setGigList(res));
        callback(res);
    }
};