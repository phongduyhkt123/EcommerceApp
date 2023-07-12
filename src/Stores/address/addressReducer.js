import * as addressActions from "./addressAction";

const initialState = {
  addresses: [],
  loading: false,
  error: null,
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case addressActions.GET_ADDRESSES:
      return {
        ...state,
        loading: true,
      };
    case addressActions.GET_ADDRESSES_SUCCESS:
      console.log("action.payload", action.payload);
      return {
        ...state,
        loading: false,
        addresses: action.payload,
      };
    case addressActions.GET_ADDRESSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case addressActions.ADD_ADDRESS:
      return {
        ...state,
        loading: true,
      };
    case addressActions.ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        addresses: [...state.addresses, action.payload],
      };
    case addressActions.ADD_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case addressActions.UPDATE_ADDRESS:
      return {
        ...state,
        loading: true,
      };
    case addressActions.UPDATE_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        addresses: state.addresses.map((address) =>
          address._id === action.payload._id ? action.payload : address
        ),
      };
    case addressActions.UPDATE_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case addressActions.DELETE_ADDRESS:
      return {
        ...state,
        loading: true,
      };
    case addressActions.DELETE_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        addresses: state.addresses.filter(
          (address) => address._id !== action.payload._id
        ),
      };
    case addressActions.DELETE_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addressReducer;
