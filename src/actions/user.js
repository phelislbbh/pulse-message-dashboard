import axios from "axios";

import {
  CHANGE_USER_PROPERTY,
  REQUEST_OTP,
  REQUEST_OTP_SUCCESSFUL,
  REQUEST_OTP_FAILED,
  LOGIN,
  LOGOUT
} from "./types";

export const changeUserProperty = (property, value) => {
  return {
    type: CHANGE_USER_PROPERTY,
    payload: { property, value }
  };
};

export const requestOTP = phone => {
  return dispatch => {
    dispatch({ type: REQUEST_OTP });

    const data = new FormData();

    data.append("method", "send_otp");
    data.append("phone", phone);

    axios({
      method: "post",
      url: "https://pulse.mtn.co.ug/api/outbound",
      data
    })
      .then(response => {
        dispatch({
          type: REQUEST_OTP_SUCCESSFUL,
          payload: response.data.data
        });
      })
      .catch(error => {
        dispatch({ type: REQUEST_OTP_FAILED });
      });
  };
};

export const loginUser = phone => {
  return dispatch => {
    dispatch({
      type: LOGIN,
      payload: {}
    });

    const data = new FormData();

    data.append("method", "send_otp");
    data.append("phone", phone);

    axios({
      method: "post",
      url: "https://pulse.mtn.co.ug/api/outbound",
      data
    })
      .then(response => {})
      .catch(error => {});
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT
  };
};
