export const ALERT = "ALERT";
export const CLOSE_ALERT = "CLOSE_ALERT";

export const ERROR_STATUS = "error";
export const SUCCESS_STATUS = "success";
export const INFO_STATUS = "info";
export const WARNING_STATUS = "warning";

export const alert = ({ type = ALERT, body }) => {
  return (dispatch) => {
    try {
      // if (body.description.constructor.name == "Array") {
      //   body.description.forEach((error) => {
      //     dispatch({ type: type, payload: { ...body, description: error } });
      //   });
      // } else {
      dispatch({ type: type, payload: body });
      // }
    } catch (err) {
      console.log(err);
    }
  };
};
