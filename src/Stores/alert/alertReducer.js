import * as alertActions from "./alertAction";

const initialState = {
  description: "",
  title: "",
  variant: "top-accent",
  status: "info",
  isShow: false,
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case alertActions.CLOSE_ALERT:
      return {
        ...state,
        isShow: false,
      };
    case alertActions.ALERT:
      console.log("alert", action.type, action.payload);
      return {
        ...state,
        ...action.payload,
        isShow: true,
      };

    default:
      return state;
  }
};

export default alertReducer;
