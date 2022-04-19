import {
  FETCH_USER_SEARCH,
  SEND_FRIEND_REQUEST,
} from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_SEARCH:
      return action.payload;
    case SEND_FRIEND_REQUEST:
      return state.map((req) => {
        if (req._id === action.payload) {
          req.sent = true;
        }
        return req;
      });
    default:
      return state;
  };
};
