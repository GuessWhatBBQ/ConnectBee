import {
  FETCH_USER_SEARCH
} from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_SEARCH:
      return action.payload;
    default:
      return state;
  };
};
