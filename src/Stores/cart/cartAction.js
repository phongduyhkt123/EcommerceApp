import axios from "axios";
import { BASE_URL } from "../../api";

export const GET_CART = "GET_CART";
export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CART_FAILURE = "GET_CART_FAILURE";

export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE";

export const DELETE_CART = "DELETE_CART";
export const DELETE_CART_SUCCESS = "DELETE_CART_SUCCESS";
export const DELETE_CART_FAILURE = "DELETE_CART_FAILURE";

export const COUNT_CART = "COUNT_CART";
export const COUNT_CART_SUCCESS = "COUNT_CART_SUCCESS";
export const COUNT_CART_FAILURE = "COUNT_CART_FAILURE";

export const getCart = ({ token }) => {
  return (dispatch) => {
    try {
      dispatch({ type: GET_CART });
      return axios
        .get(BASE_URL + "user/cart", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res);
          dispatch({ type: GET_CART_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: GET_CART_FAILURE, payload: err.message });
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addToCart = ({ token, productId, quantity }) => {
  return (dispatch) => {
    try {
      dispatch({ type: ADD_TO_CART });
      return axios
        .post(
          BASE_URL + "user/cart/" + productId,
          {
            quantity: quantity,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          console.log(res);
          dispatch({ type: ADD_TO_CART_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: ADD_TO_CART_FAILURE, payload: err.message });
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteCart = ({ token, productId }) => {
  console.log("handle", token, productId);
  return (dispatch) => {
    try {
      dispatch({ type: DELETE_CART });
      return axios
        .delete(BASE_URL + "user/cart/" + productId, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          res.data.id = productId;
          dispatch({ type: DELETE_CART_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: DELETE_CART_FAILURE, payload: err.message });
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const countCart = ({ token }) => {
  return (dispatch) => {
    try {
      dispatch({ type: COUNT_CART });
      return axios
        .get(BASE_URL + "user/cart/count", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res);
          dispatch({ type: COUNT_CART_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: COUNT_CART_FAILURE, payload: err.message });
        });
    } catch (err) {
      console.log(err);
    }
  };
};
