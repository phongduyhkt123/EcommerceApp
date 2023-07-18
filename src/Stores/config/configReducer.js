import * as orderActions from "./configAction";

const initialState = {
  orders: [],
  loading: false,
  page: 0,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case orderActions.GET_ORDERS:
      return {
        ...state,
        loading: true,
      };
    case orderActions.GET_ORDERS_SUCCESS:
      console.log("action", action.payload);
      return {
        ...state,
        loading: false,
        orders:
          state.page < action.payload.data.currentPage
            ? [...state.orders, ...action.payload.data.data]
            : state.orders,
        page: action.payload.data.currentPage,
      };
    case orderActions.GET_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
