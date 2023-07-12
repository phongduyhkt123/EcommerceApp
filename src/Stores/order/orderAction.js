import axios from "axios";
import { BASE_URL } from "../../api";

export const GET_ORDERS = "GET_ORDERS";
export const GET_ORDERS_SUCCESS = "GET_ORDERS_SUCCESS";
export const GET_ORDERS_FAILURE = "GET_ORDERS_FAILURE";

export const CREATE_ORDERS = "CREATE_ORDERS";
export const CREATE_ORDERS_SUCCESS = "CREATE_ORDERS_SUCCESS";
export const CREATE_ORDERS_FAILURE = "CREATE_ORDERS_FAILURE";

export const getOrders = ({ token, page, limit }) => {
  return (dispatch) => {
    try {
      dispatch({ type: GET_ORDERS });
      return axios
        .get(BASE_URL + "user/order", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page,
            limit,
          },
        })
        .then((res) => {
          dispatch({ type: GET_ORDERS_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: GET_ORDERS_FAILURE, payload: err.message });
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const createOrder = ({ token, order }) => {
  return (dispatch) => {
    try {
      dispatch({ type: CREATE_ORDERS });
      return axios
        .post(BASE_URL + "user/order", order, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch({ type: CREATE_ORDERS_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: CREATE_ORDERS_FAILURE, payload: err.message });
        });
    } catch (err) {
      console.log(err);
    }
  };
};
