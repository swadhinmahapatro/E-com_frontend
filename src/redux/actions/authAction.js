import CustomToast from "../../components/toast/toast";
import axios from "../../interceptor/interceptor";
import {
  loginSuccess,
  loginFailure,
  resetAuthState,
  loginStart,
} from "../reducers/authReducer";
export const loginUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(loginStart());
      const res = await axios.post("/login", user);
      if (res.status === 200) {
        dispatch(loginSuccess(res.data));
        CustomToast({ type: "success", message: res.data.message });
        const user = res.data.user;
        const userDetails = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
        localStorage.setItem("user-info", JSON.stringify(userDetails));
        localStorage.setItem("authToken", res.data.token);
      } else {
        dispatch(loginFailure(res.data.message));
        CustomToast({ type: "error", message: res.data.message });
      }
    } catch (err) {
      dispatch(loginFailure(err.message));
    }
  };
};

export const resetAuth = () => (dispatch) => {
  dispatch(resetAuthState());
};
