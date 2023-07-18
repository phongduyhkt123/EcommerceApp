import * as commentActions from "./commentAction";

const initialState = {
  comments: [],
  loading: false,
  page: 0,
  error: null,
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case commentActions.GET_COMMENTS:
      return {
        ...state,
        loading: true,
      };
    case commentActions.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments:
          state.page < action.payload.data.currentPage
            ? [...state.comments, ...action.payload.data.data]
            : state.comments,
        page: action.payload.data.currentPage,
      };
    case commentActions.GET_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default commentReducer;
