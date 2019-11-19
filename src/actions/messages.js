import axios from "axios";

import {
  FETCH_MESSAGES,
  FETCH_MESSAGES_SUCCESSFUL,
  FETCH_MESSAGES_FAILED,
  FETCH_MESSAGE_DETAILS,
  FETCH_MESSAGE_DETAILS_SUCCESSFUL,
  FETCH_MESSAGE_DETAILS_FAILED
} from "./types";

export const fetchMessages = userId => {
  return dispatch => {
    dispatch({ type: FETCH_MESSAGES });

    const data = new FormData();

    data.append("method", "fetch_pulser_conversations");
    data.append("id", userId);

    axios({
      method: "post",
      url: "https://pulse.mtn.co.ug/api/outbound",
      data
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGES_SUCCESSFUL,
          payload: response.data.data
        });
      })
      .catch(error => {
        dispatch({ type: FETCH_MESSAGES_FAILED });
      });
  };
};

export const fetchMessageDetails = (userId, messageId) => {
  return dispatch => {
    dispatch({ type: FETCH_MESSAGE_DETAILS, payload: messageId });

    const data = new FormData();

    data.append("method", "fetch_conversation_messages");
    data.append("id", userId);
    data.append("conversation", messageId);

    axios({
      method: "post",
      url: "https://pulse.mtn.co.ug/api/outbound",
      data
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE_DETAILS_SUCCESSFUL,
          payload: response.data.messages
        });
      })
      .catch(error => {
        dispatch({ type: FETCH_MESSAGE_DETAILS_FAILED });
      });
  };
};
