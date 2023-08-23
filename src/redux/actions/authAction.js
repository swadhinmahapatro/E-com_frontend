import axios from "../../interceptor/interceptor";
import { loginSuccess, loginFailure } from "../reducers/authReducer";

export const loginUser = (user) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/login", user);
      if (res.status === 200) {
        dispatch(loginSuccess(res.data.message));
      }else{
        dispatch(loginFailure(res.data.message));
      }
    } catch (err) {
        dispatch(loginFailure(err.message));
    }
  };
};
