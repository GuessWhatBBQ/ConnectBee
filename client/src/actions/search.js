import {
  FETCH_USER_SEARCH
} from '../constants/actionTypes';
import * as api from '../api';

export const fetchUserSearch = (searchStr) => {
  return (async (dispatch) => {
    const { data } = await api.fetchUserSearch(searchStr);
    dispatch({ type: FETCH_USER_SEARCH, payload: data.result });
  });
};
