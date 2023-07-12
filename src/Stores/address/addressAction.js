import axios from "axios";
import { BASE_URL } from "../../api";

export const GET_ADDRESSES = "GET_ADDRESSES";
export const GET_ADDRESSES_SUCCESS = "GET_ADDRESSES_SUCCESS";
export const GET_ADDRESSES_FAILURE = "GET_ADDRESSES_FAILURE";

export const ADD_ADDRESS = "ADD_ADDRESS";
export const ADD_ADDRESS_SUCCESS = "ADD_ADDRESS_SUCCESS";
export const ADD_ADDRESS_FAILURE = "ADD_ADDRESS_FAILURE";

export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_ADDRESS_SUCCESS = "UPDATE_ADDRESS_SUCCESS";
export const UPDATE_ADDRESS_FAILURE = "UPDATE_ADDRESS_FAILURE";

export const DELETE_ADDRESS = "DELETE_ADDRESS";
export const DELETE_ADDRESS_SUCCESS = "DELETE_ADDRESS_SUCCESS";
export const DELETE_ADDRESS_FAILURE = "DELETE_ADDRESS_FAILURE";

export const getAddresses = ({ token }) => {
  return (dispatch) => {
    dispatch({ type: GET_ADDRESSES });
    axios
      .get(`${BASE_URL}user/address`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch({ type: GET_ADDRESSES_SUCCESS, payload: res.data.data });
      })
      .catch((err) => {
        dispatch({ type: GET_ADDRESSES_FAILURE, payload: err });
      });
  };
};

export const addAddress = ({ token, address }) => {
  return (dispatch) => {
    dispatch({ type: ADD_ADDRESS });
    axios
      .post(`${BASE_URL}user/address`, address, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch({ type: ADD_ADDRESS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: ADD_ADDRESS_FAILURE, payload: err });
      });
  };
};

export const updateAddress = ({ token, address }) => {};

export const deleteAddress = ({ token, address }) => {
  return (dispatch) => {
    dispatch({ type: DELETE_ADDRESS });
    axios
      .delete(`${BASE_URL}user/address/${address._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch({ type: DELETE_ADDRESS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: DELETE_ADDRESS_FAILURE, payload: err });
      });
  };
};
