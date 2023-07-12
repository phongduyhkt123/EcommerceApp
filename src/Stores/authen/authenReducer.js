import * as authenActions from "./authenAction";

const initialState = {
  user: {
    token: "",
    info: {
      id: "",
      username: "",
      fullname: "",
      email: "",
      phone: "",
      address: "",
      avatar: "",
      role: "",
      isEnabled: true,
    },
  },
  loading: false,
  error: null,
};

const authenReducer = (state = initialState, action) => {
  switch (action.type) {
    case authenActions.LOGIN:
      return {
        ...state,
        loading: true,
      };
    case authenActions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {
          token: action.payload.token,
          info: action.payload.userInfo,
        },
      };
    case authenActions.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case authenActions.LOGOUT:
      return {
        ...state,
        loading: true,
      };
    case authenActions.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {
          token: "",
          info: {
            id: "",
            username: "",
            fullname: "",
            email: "",
            phone: "",
            address: "",
            avatar: "",
            role: "",
            isEnabled: true,
          },
        },
      };
    case authenActions.LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authenReducer;
