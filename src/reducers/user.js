import {
  CHANGE_USER_PROPERTY,
  REQUEST_OTP,
  REQUEST_OTP_SUCCESSFUL,
  REQUEST_OTP_FAILED,
  LOGIN,
  LOGOUT
} from "../actions/types";

const INITIAL_STATE = {
  loggedOn: false,
  phone: "",
  requestingOTP: false,
  details: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_USER_PROPERTY:
      return { ...state, [action.payload.property]: action.payload.value };

    case REQUEST_OTP:
      return { ...state, requestingOTP: true };

    case REQUEST_OTP_SUCCESSFUL:
      return { ...state, requestingOTP: false, details: action.payload };

    case REQUEST_OTP_FAILED:
      return { ...state, requestingOTP: false };

    case LOGIN:
      return { ...state };

    case LOGOUT:
      return { ...INITIAL_STATE };

    default:
      return state;
  }
};
