import {
  FETCH_USER_SEARCH
} from '../constants/actionTypes';
import * as api from '../api';

export const fetchUserSearch = (userId, searchStr) => {
  return (async (dispatch) => {
    const { data } = await api.fetchUserSearch(userId, searchStr);
    dispatch({ type: FETCH_USER_SEARCH, payload: data.result });
  });
};
