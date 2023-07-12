import * as productActions from "./productAction";

const initialState = {
  products: [],
  loading: false,
  page: 0,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActions.GET_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case productActions.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products:
          state.page < action.payload.data.currentPage
            ? [...state.products, ...action.payload.data.data]
            : state.products,
        page: action.payload.data.currentPage,
      };
    case productActions.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case productActions.SEARCH_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case productActions.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products:
          state.page < action.payload.data.currentPage
            ? [...state.products, ...action.payload.data.data]
            : state.products,
        page: action.payload.data.currentPage,
      };
    case productActions.SEARCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
