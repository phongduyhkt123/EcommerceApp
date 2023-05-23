import * as loginActions from "./loginAction";

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

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginActions.LOGIN:
      return {
        ...state,
        loading: true,
      };
    case loginActions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {
          token: action.payload.token,
          info: action.payload.userInfo,
        },
      };
    case loginActions.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
