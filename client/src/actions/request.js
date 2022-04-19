import {
  FETCH_USER_REQUEST,
  ACCEPT_REQUEST,
  SEND_FRIEND_REQUEST,
} from '../constants/actionTypes';
import * as api from '../api';

export const fetchUserRequests = () => {
  return (async (dispatch) => {
    const { data } = await api.fetchUserRequests();
    dispatch({ type: FETCH_USER_REQUEST, payload: data.result.friendRequests });
  });
};

export const acceptRequest = (receiverId) => {
  return (async (dispatch) => {
    try {
      const { data } = await api.acceptFriendRequest(receiverId);
      dispatch({ type: ACCEPT_REQUEST, payload: receiverId });
    } catch (error) {
      console.log(error);
    }
  });
}

export const sendFriendRequest = (receiverId) => {
  return (async (dispatch) => {
    try {
      const { data } = await api.sendFriendRequest(receiverId);
      dispatch({ type: SEND_FRIEND_REQUEST, payload: receiverId });
    } catch (err) {
      console.log(err)
    }
  })
}
