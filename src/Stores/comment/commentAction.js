import axios from "axios";
import { BASE_URL } from "../../api";

export const GET_COMMENTS = "GET_COMMENTS";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE";

export const COMMENT = "COMMENT";
export const COMMENT_SUCCESS = "COMMENT_SUCCESS";
export const COMMENT_FAILURE = "COMMENT_FAILURE";

export const getComments = ({ token, productId, page = 1, limit = 10 }) => {
  return (dispatch) => {
    try {
      dispatch({ type: GET_COMMENTS });
      return axios
        .get(`${BASE_URL}comment/${productId}`, {
          params: { page, limit },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
          dispatch({ type: GET_COMMENTS_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: GET_COMMENTS_FAILURE, payload: err.message });
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const searchCOMMENT = ({ page, limit, keyword }) => {
  return (dispatch) => {
    try {
      dispatch({ type: SEARCH_COMMENTS });
      return axios
        .get(`${BASE_URL}product/search`, {
          params: { page, limit, keyword },
        })
        .then((res) => {
          console.log(res);
          dispatch({ type: SEARCH_COMMENTS_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: SEARCH_COMMENTS_FAILURE, payload: err.message });
        });
    } catch (err) {
      console.log(err);
    }
  };
};
