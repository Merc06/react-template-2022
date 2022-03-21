import api from "../../../helpers/api";
import { createKey, removeKey } from "../../../helpers/apiCancellation";
import dispatch from "../../../helpers/dispatch";
import { AllGigListProps } from "../../gig-post/types";
import { setMyGigList } from "../reducers";


export const getMyGigList = async (
    callback: (res: Array<AllGigListProps>) => void
  ) => {
    const cancellationKey = createKey('my-gig-list');
    const res = await api.get('gig-listing', {
      cancelToken: cancellationKey.token,
    });
    removeKey('my-gig-list');
  
    if (res) {
      dispatch(setMyGigList(res));
      callback(res);
    }
};