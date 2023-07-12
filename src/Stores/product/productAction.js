import axios from "axios";
import { BASE_URL } from "../../api";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";
export const SEARCH_PRODUCTS_SUCCESS = "SEARCH_PRODUCTS_SUCCESS";
export const SEARCH_PRODUCTS_FAILURE = "SEARCH_PRODUCTS_FAILURE";

export const getProducts = ({ page, limit }) => {
  return (dispatch) => {
    try {
      dispatch({ type: GET_PRODUCTS });
      return axios
        .get(`${BASE_URL}product`, {
          params: { page, limit },
        })
        .then((res) => {
          console.log(res);
          dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: GET_PRODUCTS_FAILURE, payload: err.message });
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const searchProducts = ({ page, limit, keyword }) => {
  return (dispatch) => {
    try {
      dispatch({ type: SEARCH_PRODUCTS });
      return axios
        .get(`${BASE_URL}product/search`, {
          params: { page, limit, keyword },
        })
        .then((res) => {
          console.log(res);
          dispatch({ type: SEARCH_PRODUCTS_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: SEARCH_PRODUCTS_FAILURE, payload: err.message });
        });
    } catch (err) {
      console.log(err);
    }
  };
};
