import {
  FETCH_USER_REQUEST, ACCEPT_REQUEST,
} from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return action.payload;
    case ACCEPT_REQUEST:
      return state.filter((req) => req._id !== action.payload);
    default:
      return state;
  };
};
