import {
  FETCH_MESSAGES,
  FETCH_MESSAGES_SUCCESSFUL,
  FETCH_MESSAGES_FAILED,
  LOGOUT,
  FETCH_MESSAGE_DETAILS,
  FETCH_MESSAGE_DETAILS_SUCCESSFUL,
  FETCH_MESSAGE_DETAILS_FAILED
} from "../actions/types";

const INITIAL_STATE = {
  data: [],
  isFetchingMessages: false,
  selectedMessage: null,
  chats: [],
  isFetchingChats: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return { ...state, isFetchingMessages: true };

    case FETCH_MESSAGES_SUCCESSFUL:
      return {
        ...state,
        data: action.payload,
        isFetchingMessages: false,
        selectedMessage: null
      };

    case FETCH_MESSAGES_FAILED:
      return { ...state, isFetchingMessages: false };

    case FETCH_MESSAGE_DETAILS:
      return {
        ...state,
        isFetchingChats: true,
        selectedMessage: action.payload
      };

    case FETCH_MESSAGE_DETAILS_SUCCESSFUL:
      return { ...state, chats: action.payload, isFetchingChats: false };

    case FETCH_MESSAGE_DETAILS_FAILED:
      return { ...state, isFetchingChats: false };

    case LOGOUT:
      return { ...INITIAL_STATE };

    default:
      return state;
  }
};
