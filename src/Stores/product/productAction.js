import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

export const getProducts = ({ page, limit }) => {
  console.log("getProducts");
  return (dispatch) => {
    try {
      console.log("getProducts dispatch");
      dispatch({ type: GET_PRODUCTS });
      return axios
        .get("http://localhost:8080/api/product", {
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
