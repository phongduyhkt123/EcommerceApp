import axios from "axios";
import { BASE_URL } from "../../api";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const login = ({ loginKey, password }) => {
  return (dispatch) => {
    try {
      dispatch({ type: LOGIN });
      return axios
        .post(BASE_URL + "login", {
          loginKey,
          password,
        })
        .then((res) => {
          console.log(res);
          dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: LOGIN_FAILURE, payload: err.message });
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    try {
      dispatch({ type: LOGOUT });
      return axios
        .post(BASE_URL + "logout")
        .then((res) => {
          console.log(res);
          dispatch({ type: LOGOUT_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: LOGOUT_FAILURE, payload: err.message });
        });
    } catch (err) {
      console.log(err);
    }
  };
};
