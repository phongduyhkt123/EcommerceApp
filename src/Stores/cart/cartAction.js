import axios from "axios";

export const GET_CART = "GET_CART";
export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CART_FAILURE = "GET_CART_FAILURE";

export const getCart = () => {
  return (dispatch) => {
    try {
      dispatch({ type: GET_CART });
      return axios
        .get("http://localhost:8080/api/user/cart")
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
