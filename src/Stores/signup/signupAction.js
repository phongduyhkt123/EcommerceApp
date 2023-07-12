import axios from "axios";
import { BASE_URL } from "../../api";

export const SIGNUP = "SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const signup = ({ signupInfo }) => {
  return (dispatch) => {
    try {
      dispatch({ type: SIGNUP });
      return axios
        .post(BASE_URL + "signup", {
          ...signupInfo,
        })
        .then((res) => {
          console.log(res);
          dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: SIGNUP_FAILURE,
            payload: err?.response?.data?.errors,
          });
        });
    } catch (err) {
      console.log(err);
    }
  };
};
