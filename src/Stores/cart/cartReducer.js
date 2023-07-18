import * as cartActions from "./cartAction";

const initialState = {
  cartItems: [],
  cartCount: 0,
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
        cartItems: action.payload.data,
      };
    case cartActions.GET_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case cartActions.ADD_TO_CART:
      return {
        ...state,
        loading: true,
      };
    case cartActions.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: state.cartItems.concat(action.payload.data),
      };
    case cartActions.ADD_TO_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case cartActions.DELETE_CART:
      return {
        ...state,
        loading: true,
      };
    case cartActions.DELETE_CART_SUCCESS:
      console.log("item", state.cartItems);
      console.log("id", action.payload);
      return {
        ...state,
        loading: false,
        cartItems: state.cartItems.filter(
          (item) => item.productVariation.id !== action.payload.id
        ),
      };
    case cartActions.DELETE_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case cartActions.COUNT_CART:
      return {
        ...state,
        loading: true,
      };
    case cartActions.COUNT_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartCount: action.payload.data,
      };
    case cartActions.COUNT_CART_FAILURE:
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
