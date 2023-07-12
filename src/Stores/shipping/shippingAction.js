import axios from "axios";
import {
  ADDRESS_URL,
  SERVICE_URL,
  SHIPFEE_URL,
  token,
  BASE_URL,
} from "../../api";

export const GET_CITY = "GET_CITY";
export const GET_CITY_SUCCESS = "GET_CITY_SUCCESS";
export const GET_CITY_FAILURE = "GET_CITY_FAILURE";

export const GET_DISTRICT = "GET_DISTRICT";
export const GET_DISTRICT_SUCCESS = "GET_DISTRICT_SUCCESS";
export const GET_DISTRICT_FAILURE = "GET_DISTRICT_FAILURE";

export const GET_WARD = "GET_WARD";
export const GET_WARD_SUCCESS = "GET_WARD_SUCCESS";
export const GET_WARD_FAILURE = "GET_WARD_FAILURE";

export const GET_SHIP_FEE = "GET_SHIP_FEE";
export const GET_SHIP_FEE_SUCCESS = "GET_SHIP_FEE_SUCCESS";
export const GET_SHIP_FEE_FAILURE = "GET_SHIP_FEE_FAILURE";

export const GET_SERVICE = "GET_SERVICE";
export const GET_SERVICE_SUCCESS = "GET_SERVICE_SUCCESS";
export const GET_SERVICE_FAILURE = "GET_SERVICE_FAILURE";

export const getCities = () => async (dispatch) => {
  dispatch({ type: GET_CITY });
  try {
    const response = await axios.get(`${ADDRESS_URL}/province`, {
      headers: {
        Token: token,
      },
    });
    dispatch({
      type: GET_CITY_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CITY_FAILURE,
      payload: error,
    });
  }
};

export const getDistricts = (cityId) => async (dispatch) => {
  dispatch({ type: GET_DISTRICT });
  try {
    const response = await axios.get(
      `${ADDRESS_URL}/district?province_id=${cityId}`,
      {
        headers: {
          Token: token,
        },
      }
    );
    dispatch({
      type: GET_DISTRICT_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_DISTRICT_FAILURE,
      payload: error,
    });
  }
};

export const getWards = (districtId) => async (dispatch) => {
  dispatch({ type: GET_WARD });
  try {
    const response = await axios.get(
      `${ADDRESS_URL}/ward?district_id=${districtId}`,
      {
        headers: {
          Token: token,
        },
      }
    );
    dispatch({
      type: GET_WARD_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_WARD_FAILURE,
      payload: error,
    });
  }
};

export const getShipFee = (data) => async (dispatch) => {
  dispatch({ type: GET_SHIP_FEE });
  try {
    const response = await axios.post(SHIPFEE_URL, data, {
      headers: {
        Token: token,
      },
    });
    dispatch({
      type: GET_SHIP_FEE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_SHIP_FEE_FAILURE,
      payload: error,
    });
  }
};

export const getService = () => async (dispatch) => {
  dispatch({ type: GET_SERVICE });
  try {
    const response = await axios.get(SERVICE_URL, {
      headers: {
        Token: token,
      },
    });
    dispatch({
      type: GET_SERVICE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_SERVICE_FAILURE,
      payload: error,
    });
  }
};

export const setAddress = (data) => async (dispatch) => {
  dispatch({ type: "SET_ADDRESS", payload: data });
};
