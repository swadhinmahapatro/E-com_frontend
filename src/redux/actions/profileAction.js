import CustomToast from "../../components/toast/toast";
import axios from "../../interceptor/interceptor";
import {
  resetUserState,
  userDataFetchError,
  userDataFetchStart,
  userDataFetchSuccess,
} from "../reducers/profileReducer";

import { updateDataFetchStart, updateDataFetchSuccess, updateDataFetchError, resetupdateUserState } from "../reducers/UserUpdateReducer";

export const getUserData = (id) => {
  return async (dispatch) => {
    try {
      dispatch(userDataFetchStart());
      const res = await axios.get(`/getuser/${id}`);
      if (res.status === 200) {
        dispatch(userDataFetchSuccess(res.data));
      } else {
        dispatch(userDataFetchError(res.data.message));
        CustomToast({ type: "error", message: res.data.message });
      }
    } catch (err) {
      dispatch(userDataFetchError(err.message));
      CustomToast({ type: "error", message: err.message });
    }
  };
};
export const updateUserData = (id, user) => {
  return async (dispatch) => {
    try {
      dispatch(updateDataFetchStart());
      const res = await axios.post(`/updateuser/${id}`, user);
      if (res.status === 200) {
        dispatch(updateDataFetchSuccess(res.data));
        CustomToast({type:"success", message: res.data.message});
      } else {
        dispatch(updateDataFetchError(res.data.message));
        CustomToast({ type: "error", message: res.data.message });
      }
    } catch (err) {
      dispatch(updateDataFetchError(err.message));
      CustomToast({ type: "error", message: err.message });
    }
  };
};
export const resetUserDataFetch = () => (dispatch) => {
  dispatch(resetUserState());
};
