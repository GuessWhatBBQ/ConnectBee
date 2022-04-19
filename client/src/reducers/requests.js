import {
  FETCH_USER_REQUEST
} from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return action.payload;
    default:
      return state;
  };
};
