import {
  FETCH_USER_REQUEST
} from '../constants/actionTypes';
import * as api from '../api';

export const fetchUserRequests = () => {
  return (async (dispatch) => {
    const { data } = await api.fetchUserRequests();
    dispatch({ type: FETCH_USER_REQUEST, payload: data.result });
  });
};
