import * as cartActions from "./cartAction";

const initialState = {
  cartItems: [],
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActions.GET_CART:
      return {
        ...state,
        loading: true,
      };
    case cartActions.GET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload.data.data,
      };
    case cartActions.GET_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
