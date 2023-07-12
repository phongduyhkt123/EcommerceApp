import * as signupActions from "./signupAction";

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

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case signupActions.SIGNUP:
      return {
        ...state,
        loading: true,
      };
    case signupActions.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: {
          token: action.payload.token,
          info: action.payload.userInfo,
        },
      };
    case signupActions.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default signupReducer;
