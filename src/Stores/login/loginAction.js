import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = ({ loginKey, password }) => {
  return (dispatch) => {
    try {
      dispatch({ type: LOGIN });
      return axios
        .post("http://localhost:8080/api/login", {
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
